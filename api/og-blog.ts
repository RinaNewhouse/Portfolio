import type { VercelRequest, VercelResponse } from '@vercel/node';
import { blogPosts } from '../src/data/blogPosts';

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
  const url = `${protocol}://${host}${req.url || ''}`;
  const parsed = new URL(url);

  const idParam = parsed.searchParams.get('id');
  const match = parsed.pathname.match(/^\/blog\/(.+)$/);
  const id = idParam || match?.[1] || '';

  let title: string;
  let description: string;
  let image: string;
  let canonical: string;
  let ogType: string;

  if (id) {
    // Individual blog post
    const post = blogPosts.find(p => p.id === id);
    title = post ? `${post.title} — Rina Newhouse` : 'Rina Newhouse — Blog';
    description = post?.excerpt || 'Thoughts, notes, and projects from Rina Newhouse.';
    image = 'https://res.cloudinary.com/dcsbgpsck/image/upload/v1762380473/portfolio-blog_pdmjra.png';
    canonical = `${protocol}://${host}/blog/${id}`;
    ogType = 'article';
  } else {
    // Blog section
    title = 'Blog — Rina Newhouse';
    description = 'Thoughts, notes, and projects from Rina Newhouse.';
    image = 'https://res.cloudinary.com/dcsbgpsck/image/upload/v1762380473/portfolio-blog_pdmjra.png';
    canonical = `${protocol}://${host}/blog`;
    ogType = 'website';
  }

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />

    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:type" content="${ogType}" />
    <meta property="og:url" content="${escapeHtml(canonical)}" />
    <meta property="og:image" content="${escapeHtml(image)}" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${escapeHtml(image)}" />

    <meta http-equiv="refresh" content="0; url=${escapeHtml(canonical)}" />
    <script>location.replace(${JSON.stringify(canonical)});</script>
  </head>
  <body>
    <p>Redirecting to <a href="${escapeHtml(canonical)}">${escapeHtml(canonical)}</a>…</p>
  </body>
</html>`;

  res.status(200).setHeader('Content-Type', 'text/html; charset=utf-8').send(html);
}


