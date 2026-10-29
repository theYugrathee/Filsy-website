// ==========================================================================
// VERCEL / SERVERLESS EDGE HANDLER: RETRIEVE LICENSE KEYS BY EMAIL
// Fetches license keys EXCLUSIVELY from Supabase Edge Functions
// ==========================================================================

export default async function handler(req: any, res: any) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-filsy-app-token');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  let email = '';
  if (req.method === 'POST') {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    email = body?.email || '';
  } else {
    email = req.query?.email || '';
  }

  const cleanEmail = String(email).trim().toLowerCase();
  if (!cleanEmail) {
    return res.status(400).json({ ok: false, error: 'Email address is required' });
  }

  const supabaseUrl =
    process.env.VITE_SUPABASE_FUNCTIONS_URL ||
    'https://ofvyincijdrefgxbupwy.supabase.co/functions/v1';
  const filsyToken =
    process.env.VITE_FILSY_APP_TOKEN || '5cef6c413bebc63f819280c528b3e74f';

  try {
    const supabaseRes = await fetch(`${supabaseUrl}/retrieve-license`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-filsy-app-token': filsyToken,
      },
      body: JSON.stringify({ email: cleanEmail }),
    });

    if (supabaseRes.status === 404) {
      return res.status(200).json({
        ok: true,
        licenses: [],
        count: 0,
      });
    }

    if (!supabaseRes.ok) {
      const errText = await supabaseRes.text();
      console.error('Supabase retrieve-license error:', supabaseRes.status, errText);
      return res.status(supabaseRes.status).json({
        ok: false,
        error: 'Error querying license database',
      });
    }

    const data = await supabaseRes.json();
    return res.status(200).json({
      ok: true,
      licenses: data.licenses || [],
      count: (data.licenses || []).length,
    });
  } catch (error: any) {
    console.error('Supabase query error:', error);
    return res.status(500).json({ ok: false, error: error.message || 'Internal server error' });
  }
}
