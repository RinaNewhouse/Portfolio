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
    id: 'dream-finder',
    title: 'Dream Finder',
    description: 'End the pre-movie-picking fights today. Find your dream movie with a tailored approach to decide your perfect flick that everyone will love.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/RinaNewhouse/Dream-Finder',
    liveUrl: 'https://rinanewhouse.github.io/Dream-Finder/',
    imageUrl: 'https://res.cloudinary.com/dcsbgpsck/image/upload/v1759514227/dream_finder_mockup_c2oky6.png',
    featured: true
  },
  {
    id: 'nft-commerce',
    title: 'NFT E-Commerce',
    description: 'Professional NFT marketplace mockup featuring clean UI design, product browsing, and responsive layouts..',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    githubUrl: 'https://github.com/RinaNewhouse/rina-internship-nft-sample',
    liveUrl: 'https://rina-internship-website-sample.vercel.app/',
    imageUrl: 'https://res.cloudinary.com/dcsbgpsck/image/upload/v1760370017/nft_mockup_daz83d.jpg',
    featured: true
  },
  {
    id: 'online-library',
    title: 'Online Library',
    description: "Can't bother to drive to an actual library? Amazon shipping taking way too long? Get instant access to the book you purchased and have it not break the bank (#WinWin).",
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    githubUrl: 'https://github.com/RinaNewhouse/React-Library',
    liveUrl: 'https://react-library-black.vercel.app/',
    imageUrl: 'https://res.cloudinary.com/dcsbgpsck/image/upload/v1759514232/library_mockup_oct2iz.png',
    featured: true
  }
];
