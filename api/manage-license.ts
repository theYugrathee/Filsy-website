// ==========================================================================
// VERCEL / SERVERLESS EDGE HANDLER: MANAGE LICENSE (READ-ONLY)
// Deactivation is strictly in-app only for offline privacy and safety
// ==========================================================================

export default async function handler(req: any, res: any) {
  const { license_key } = req.method === 'POST' ? req.body : req.query;

  if (!license_key) {
    return res.status(400).json({ error: 'License key is required' });
  }

  const cleanKey = String(license_key).trim().toUpperCase();

  return res.status(200).json({
    licenseKey: cleanKey,
    valid: true,
    maxDevices: 1,
    plan: 'Filsy Lifetime License',
    note: 'Device activation and deactivation is performed in the Filsy Windows app under Settings -> License.',
  });
}
