export interface MetaTagConfig {
  title: string;
  description: string;
  image: string;
  url: string;
}

const baseUrl = 'https://rinanewhouse.dev';

// Main route meta tags
export const routeMetaTags: Record<string, MetaTagConfig> = {
  '/': {
    title: 'Rina Newhouse — E‑Portfolio',
    description: 'Frontend & fullstack projects, blog posts, and ways to connect.',
    image: 'https://res.cloudinary.com/dcsbgpsck/image/upload/v1762380475/portfolio-thumbnail_nlybxm.png',
    url: baseUrl
  },
  '/projects': {
    title: 'Projects — Rina Newhouse',
    description: 'A showcase of my recent work, featuring modern web applications built with cutting-edge technologies.',
    image: 'https://res.cloudinary.com/dcsbgpsck/image/upload/v1762380474/portfolio-projects_r0fldw.png',
    url: `${baseUrl}/projects`
  },
  '/blog': {
    title: 'Blog — Rina Newhouse',
    description: 'Thoughts, notes, and projects from Rina Newhouse.',
    image: 'https://res.cloudinary.com/dcsbgpsck/image/upload/v1762380473/portfolio-blog_pdmjra.png',
    url: `${baseUrl}/blog`
  }
};

// Default fallback
export const defaultMetaTags: MetaTagConfig = {
  title: 'Rina Newhouse — E‑Portfolio',
  description: 'Frontend & fullstack projects, blog posts, and ways to connect.',
  image: 'https://res.cloudinary.com/dcsbgpsck/image/upload/v1762380475/portfolio-thumbnail_nlybxm.png',
  url: baseUrl
};

// Helper functions to get meta tags for dynamic routes
export const getProjectMeta = (projectId: string, projectTitle: string, description: string, imageUrl: string): MetaTagConfig => ({
    title: `${projectTitle} — Rina Newhouse`,
    description: description,
    image: imageUrl,
    url: `${baseUrl}/projects/${projectId}`
});

export const getBlogPostMeta = (postId: string, postTitle: string, excerpt: string): MetaTagConfig => ({
  title: `${postTitle} — Rina Newhouse`,
  description: excerpt,
  image: routeMetaTags['/blog'].image,
  url: `${baseUrl}/blog/${postId}`
});

export { baseUrl };

