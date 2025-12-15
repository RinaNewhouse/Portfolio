import { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { blogPosts } from '../data/blogPosts';
import { routeMetaTags, defaultMetaTags, getBlogPostMeta, getProjectMeta } from '../data/metaTags';

/**
 * Updates DOM meta tags (called when route changes)
 */
function updateMetaTags(meta: typeof defaultMetaTags) {
  document.title = meta.title;
  
  const tags = [
    { property: 'og:title', content: meta.title },
    { property: 'og:description', content: meta.description },
    { property: 'og:image', content: meta.image },
    { property: 'og:url', content: meta.url },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: meta.title },
    { name: 'twitter:description', content: meta.description },
    { name: 'twitter:image', content: meta.image },
    { name: 'description', content: meta.description }
  ];

  tags.forEach(({ property, name, content }) => {
    const attr = property ? 'property' : 'name';
    const value = property || name!;
    let element = document.querySelector(`meta[${attr}="${value}"]`);
    
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attr, value);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  });
}

/**
 * Hook that updates meta tags when route changes.
 * 
 * FLOW EXPLANATION:
 * 1. User navigates → React Router updates location.pathname
 * 2. Hook detects change → figures out which meta config to use:
 *    - /blog/:id → finds blog post → uses getBlogPostMeta()
 *    - /projects/:id → finds project → uses getProjectMeta()
 *    - /, /projects, /blog → looks up in routeMetaTags
 * 3. Calls updateMetaTags() → updates DOM meta tags
 * 
 * WHY WE NEED THIS:
 * React Router doesn't update meta tags automatically. We need SOMETHING
 * to watch routes and update the DOM. This is the minimal code needed.
 */
function useMetaTags() {
  const location = useLocation();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    let meta;

    if (location.pathname.startsWith('/blog/') && id) {
      const post = blogPosts.find(p => p.id === id);
      meta = post ? getBlogPostMeta(post.id, post.title, post.excerpt) : defaultMetaTags;
    } else if (location.pathname.startsWith('/projects/') && id) {
      const project = projects.find(p => p.id === id);
      meta = project ? getProjectMeta(project.id, project.title, project.description, project.imageUrl) : defaultMetaTags;
    } else {
      meta = routeMetaTags[location.pathname] || defaultMetaTags;
    }

    updateMetaTags(meta);
  }, [location.pathname, id]);
}

export default useMetaTags;

