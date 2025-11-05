import type { VercelRequest, VercelResponse } from '@vercel/node';
import { routeMetaTags } from '../src/data/metaTags';

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  const host = (req.headers.host as string) || 'localhost:3000';
  const protocol = host.includes('localhost') ? 'http' : 'https';
  const canonical = `${protocol}://${host}/projects`;

  const meta = routeMetaTags['/projects'];

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(meta.title)}</title>
    <meta name="description" content="${escapeHtml(meta.description)}" />

    <meta property="og:title" content="${escapeHtml(meta.title)}" />
    <meta property="og:description" content="${escapeHtml(meta.description)}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${escapeHtml(meta.url)}" />
    <meta property="og:image" content="${escapeHtml(meta.image)}" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(meta.title)}" />
    <meta name="twitter:description" content="${escapeHtml(meta.description)}" />
    <meta name="twitter:image" content="${escapeHtml(meta.image)}" />

    <meta http-equiv="refresh" content="0; url=${escapeHtml(canonical)}" />
    <script>location.replace(${JSON.stringify(canonical)});</script>
  </head>
  <body>
    <p>Redirecting to <a href="${escapeHtml(canonical)}">${escapeHtml(canonical)}</a>…</p>
  </body>
</html>`;

  res.status(200).setHeader('Content-Type', 'text/html; charset=utf-8').send(html);
}

