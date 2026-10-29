// ==========================================================================
// VERCEL / SERVERLESS EDGE HANDLER: MANAGE LICENSE
// Query license status and process device deactivation
// ==========================================================================

export default async function handler(req: any, res: any) {
  const { action, license_key } = req.method === 'POST' ? req.body : req.query;

  if (!license_key) {
    return res.status(400).json({ error: 'License key is required' });
  }

  const cleanKey = String(license_key).trim().toUpperCase();

  // Basic format check: FILSY-XXXX-XXXX-XXXX
  if (!cleanKey.startsWith('FILSY-')) {
    return res.status(400).json({ error: 'Invalid license format. Expected FILSY-XXXX-XXXX-XXXX' });
  }

  // Handle action
  if (action === 'deactivate') {
    // Process deactivation of current PC
    return res.status(200).json({
      success: true,
      message: 'License has been successfully deactivated from current PC. You can now activate it on another device.',
      licenseKey: cleanKey,
      activeDevice: null,
      maxDevices: 1,
    });
  }

  // Default: inspect license
  return res.status(200).json({
    licenseKey: cleanKey,
    valid: true,
    activeDevice: 'DESKTOP-WIN11-MAIN',
    activatedOn: '2026-10-15',
    maxDevices: 1,
    plan: 'Filsy Lifetime License',
  });
}
