// POST /functions/v1/retrieve-license
// Body: { email }
// Lets a customer recover their license key from the website without a paid
// email service. Only exact-match emails return keys; the endpoint is gated by
// the public app token. NOTE: at larger scale, replace with a magic-link email
// (see docs/COMMERCIAL_SETUP.md — "hardening later").
import { checkAppToken, jsonResponse, preflight, serviceHeaders, supabaseUrl } from "../_shared/licensing.ts";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return preflight();
  if (req.method !== "POST") return jsonResponse({ ok: false, error: "METHOD_NOT_ALLOWED" }, 405);
  if (!checkAppToken(req)) return jsonResponse({ ok: false, error: "UNAUTHORIZED" }, 401);

  try {
    const body = await req.json();
    const email = String(body.email ?? "").trim().toLowerCase();
    if (!email.includes("@")) return jsonResponse({ ok: false, error: "INVALID_EMAIL" }, 400);

    const queryUrl = `${supabaseUrl()}/rest/v1/licenses?customer_email=ilike.${encodeURIComponent(email)}&status=eq.active&select=license_key,created_at&order=created_at.desc&limit=5`;
    const res = await fetch(queryUrl, { headers: serviceHeaders() });
    if (!res.ok) {
      const errText = await res.text();
      console.error("retrieve-license fetch error:", res.status, errText);
      return jsonResponse({ ok: false, error: "SERVER_ERROR", details: errText }, 500);
    }

    const rows = (await res.json()) as { license_key: string }[];
    if (!rows || rows.length === 0) {
      return jsonResponse({ ok: true, licenses: [], count: 0 }, 200);
    }
    return jsonResponse({ ok: true, licenses: rows.map((r) => r.license_key), count: rows.length });
  } catch (err: any) {
    console.error("retrieve-license error:", err);
    return jsonResponse({ ok: false, error: "CATCH_ERROR", message: String(err?.message || err) }, 500);
  }
});
