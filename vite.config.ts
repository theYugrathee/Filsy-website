import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'supabase-license-dev-middleware',
        configureServer(server) {
          server.middlewares.use('/api/retrieve-license', async (req, res) => {
            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, x-filsy-app-token');

            if (req.method === 'OPTIONS') {
              res.statusCode = 200;
              res.end();
              return;
            }

            let body = '';
            req.on('data', (chunk) => {
              body += chunk;
            });

            req.on('end', async () => {
              try {
                let email = '';
                if (req.method === 'POST' && body) {
                  try {
                    const parsed = JSON.parse(body);
                    email = parsed.email || '';
                  } catch {
                    // Ignore JSON parse error
                  }
                } else if (req.url) {
                  const url = new URL(req.url, 'http://localhost');
                  email = url.searchParams.get('email') || '';
                }

                const cleanEmail = email.trim().toLowerCase();
                if (!cleanEmail) {
                  res.statusCode = 400;
                  res.end(JSON.stringify({ ok: false, error: 'Email is required' }));
                  return;
                }

                const supabaseUrl =
                  env.VITE_SUPABASE_FUNCTIONS_URL ||
                  'https://ofvyincijdrefgxbupwy.supabase.co/functions/v1';
                const filsyToken =
                  env.VITE_FILSY_APP_TOKEN || '5cef6c413bebc63f819280c528b3e74f';

                // Fetch EXCLUSIVELY from Supabase
                const supabaseRes = await fetch(`${supabaseUrl}/retrieve-license`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    'x-filsy-app-token': filsyToken,
                  },
                  body: JSON.stringify({ email: cleanEmail }),
                });

                if (supabaseRes.status === 404) {
                  res.statusCode = 200;
                  res.end(JSON.stringify({ ok: true, licenses: [], count: 0 }));
                  return;
                }

                if (!supabaseRes.ok) {
                  const errText = await supabaseRes.text();
                  console.error('Supabase dev error:', supabaseRes.status, errText);
                  res.statusCode = supabaseRes.status;
                  res.end(JSON.stringify({ ok: false, error: 'Database query error' }));
                  return;
                }

                const data = (await supabaseRes.json()) as { ok?: boolean; licenses?: string[] };

                res.statusCode = 200;
                res.end(
                  JSON.stringify({
                    ok: true,
                    licenses: data.licenses || [],
                    count: (data.licenses || []).length,
                  })
                );
              } catch (err: any) {
                res.statusCode = 500;
                res.end(
                  JSON.stringify({
                    ok: false,
                    error: err?.message || 'Error retrieving licenses from Supabase',
                  })
                );
              }
            });
          });
        },
      },
    ],
  };
});
