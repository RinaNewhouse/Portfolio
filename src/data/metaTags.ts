export interface MetaTagConfig {
  title: string;
  description: string;
  image: string;
  url: string;
}

const baseUrl = 'https://rinanewhouse.dev';

export const homepageThumbnail =
  'https://res.cloudinary.com/dcsbgpsck/image/upload/v1781104421/Thumbnail_gs3g2k.png';

// Branded share images — replace with section-specific cards when available.
export const projectsThumbnail = homepageThumbnail;
export const blogThumbnail = homepageThumbnail;

// Main route meta tags
export const routeMetaTags: Record<string, MetaTagConfig> = {
  '/': {
    title: 'Rina Newhouse — E‑Portfolio',
    description: 'Frontend & fullstack projects, blog posts, and ways to connect.',
    image: homepageThumbnail,
    url: baseUrl
  },
  '/projects': {
    title: 'Projects — Rina Newhouse',
    description: 'A showcase of my recent work, featuring modern web applications built with cutting-edge technologies.',
    image: projectsThumbnail,
    url: `${baseUrl}/projects`
  },
  '/blog': {
    title: 'Blog — Rina Newhouse',
    description: 'Thoughts, notes, and projects from Rina Newhouse.',
    image: blogThumbnail,
    url: `${baseUrl}/blog`
  }
};

// Default fallback
export const defaultMetaTags: MetaTagConfig = {
  title: 'Rina Newhouse — E‑Portfolio',
  description: 'Frontend & fullstack projects, blog posts, and ways to connect.',
  image: homepageThumbnail,
  url: baseUrl
};

// Helper functions to get meta tags for dynamic routes
export const getProjectMeta = (projectId: string, projectTitle: string, description: string): MetaTagConfig => ({
    title: `${projectTitle} — Rina Newhouse`,
    description: description,
    image: projectsThumbnail,
    url: `${baseUrl}/projects/${projectId}`
});

export const getBlogPostMeta = (postId: string, postTitle: string, excerpt: string): MetaTagConfig => ({
  title: `${postTitle} — Rina Newhouse`,
  description: excerpt,
  image: blogThumbnail,
  url: `${baseUrl}/blog/${postId}`
});

export { baseUrl };

