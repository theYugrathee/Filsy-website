// Shared helpers for Filsy licensing Edge Functions.
// Secrets come from function environment variables injected by Supabase —
// never hardcoded in source files.

declare const Deno: any;

export function serviceHeaders() {
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
  return {
    apikey: serviceKey,
    Authorization: `Bearer ${serviceKey}`,
    "Content-Type": "application/json",
  };
}

export function supabaseUrl(): string {
  const url = Deno.env.get("SUPABASE_URL") ?? Deno.env.get("PROJECT_URL");
  if (url && url.startsWith("http")) return url;
  return "https://ofvyincijdrefgxbupwy.supabase.co";
}

export async function rpc<T = unknown>(fnName: string, args: Record<string, unknown>): Promise<T> {
  const res = await fetch(`${supabaseUrl()}/rest/v1/rpc/${fnName}`, {
    method: "POST",
    headers: serviceHeaders(),
    body: JSON.stringify(args),
  });
  if (!res.ok) {
    throw new Error(`rpc ${fnName} failed: ${res.status} ${await res.text()}`);
  }
  return (await res.json()) as T;
}

export function jsonResponse(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
  });
}

/** CORS preflight for desktop/web callers. */
export function preflight(): Response {
  return new Response("ok", {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-filsy-app-token",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
    },
  });
}

/**
 * Defense in depth: the desktop app must present a shared public token so random
 * internet scanners cannot brute-force the activate endpoint. This is NOT a secret
 * (it ships in the app) — it only throttles noise; all real authorization is
 * license-key + seat validation in the database.
 */
export function checkAppToken(req: Request): boolean {
  const expected = Deno.env.get("FILSY_APP_TOKEN") ?? "";
  if (!expected) return true; // not configured yet — allow during bring-up
  const provided = req.headers.get("x-filsy-app-token") ?? "";
  return provided === expected;
}

/**
 * Verify a Dodo Payments webhook signature using the webhook secret
 * (HMAC-SHA256 over the raw body, per Dodo's webhook security docs).
 */
export async function verifyDodoSignature(req: Request): Promise<boolean> {
  const secret = Deno.env.get("DODO_WEBHOOK_SECRET") ?? "";
  if (!secret) return true; // bring-up mode; set the secret before going live

  const signatureHeader =
    req.headers.get("webhook-signature") ??
    req.headers.get("x-dodo-signature") ??
    req.headers.get("x-webhook-signature") ??
    "";
  if (!signatureHeader) return false;

  const rawBody = await req.text();
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const mac = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(rawBody));
  const expected = Array.from(new Uint8Array(mac))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  // Header may carry multiple comma-separated signatures; accept any match.
  return signatureHeader
    .split(",")
    .map((s) => s.trim().replace(/^v1=/, "").toLowerCase())
    .includes(expected.toLowerCase());
}

/** Crypto-random license key: FILSY-XXXX-XXXX-XXXX-XXXX (unambiguous alphabet). */
export function generateLicenseKey(): string {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const block = () =>
    Array.from(crypto.getRandomValues(new Uint8Array(4)))
      .map((n) => alphabet[n % alphabet.length])
      .join("");
  return `FILSY-${block()}-${block()}-${block()}-${block()}`;
}
