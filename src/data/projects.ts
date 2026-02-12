import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'hopkins-hillel',
    title: 'Hopkins Hillel',
    description: 'Full-stack production website for the Johns Hopkins Hillel corporation with custom API endpoints, event management systems, dynamic content loading, and responsive frontend.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    githubUrl: 'https://github.com/RinaNewhouse/hopkins-hillel-website',
    liveUrl: 'https://hopkinshillel.org/',
    imageUrl: 'https://res.cloudinary.com/dcsbgpsck/image/upload/v1759527794/hopkins_hillel_mockup_fg18tb.png',
    featured: true
  },
  {
    id: 'repliable',
    title: 'Repliable',
    description: 'AI-powered workplace communication assistant that analyzes messages and generates contextual response suggestions. Features AES-256-GCM encryption for sensitive data, user communication style profiling, and Claude AI integration for nuanced relationship dynamic analysis. Includes compose mode for initiating difficult conversations and tone customization based on recipient communication patterns.',
    technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Claude AI', 'Clerk'],
    githubUrl: 'https://github.com/RinaNewhouse/repliable',
    liveUrl: 'https://repliable.ai/',
    imageUrl: 'https://res.cloudinary.com/dcsbgpsck/image/upload/v1770860469/Repliable_Landing_Page_pscg9x.png',
    featured: true
  },
  {
    id: 'dream-finder',
    title: 'Dream Finder',
    description: 'Movie recommendation platform featuring external API integration, dynamic search, responsive design, and user-friendly interface.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/RinaNewhouse/Dream-Finder',
    liveUrl: 'https://rinanewhouse.github.io/Dream-Finder/',
    imageUrl: 'https://res.cloudinary.com/dcsbgpsck/image/upload/v1759514227/dream_finder_mockup_c2oky6.png',
    featured: true
  },
  {
    id: 'mapme-clone',
    title: 'Mapme Clone',
    description: 'Interactive map application clone of Mapme, a platform for creating custom interactive maps with markers and location data. Features hundreds of US schools plotted on an interactive Leaflet map with search functionality and dynamic marker clustering.',
    technologies: ['React', 'Leaflet', 'Python'],
    githubUrl: 'https://github.com/RinaNewhouse/Mapme-Clone',
    liveUrl: 'https://mapme-clone-with-us-schools.vercel.app/',
    imageUrl: 'https://res.cloudinary.com/dcsbgpsck/image/upload/v1762375590/mapme_mockup_xvoorl.png',
    featured: true
  },
  {
    id: 'nft-commerce',
    title: 'NFT E-Commerce',
    description: 'NFT marketplace prototype featuring responsive UI, dynamic asset browsing, API-driven data, and integrated Clerk authentication for secure user access.',
    technologies: ['Next.js', 'Tailwind CSS', 'React', 'Clerk'],
    githubUrl: 'https://github.com/RinaNewhouse/rina-internship-nft-sample',
    liveUrl: 'https://nft-store-delta.vercel.app/',
    imageUrl: 'https://res.cloudinary.com/dcsbgpsck/image/upload/v1760370017/nft_mockup_daz83d.jpg',
    featured: true
  },
  {
    id: 'online-library',
    title: 'Online Library',
    description: "Digital library platform built with React featuring component architecture, state management, and responsive design for optimal user experience.",
    technologies: ['HTML', 'CSS', 'React', 'Stripe'],
    githubUrl: 'https://github.com/RinaNewhouse/React-Library',
    liveUrl: 'https://react-library-black.vercel.app/',
    imageUrl: 'https://res.cloudinary.com/dcsbgpsck/image/upload/v1759514232/library_mockup_oct2iz.png',
    featured: true
  }
];
