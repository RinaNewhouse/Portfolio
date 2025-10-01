import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'dream-finder',
    title: 'Dream Finder',
    description: 'End the pre-movie-picking fights today. Find your dream movie with a tailored approach to decide your perfect flick that everyone will love.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/RinaNewhouse/Dream-Finder',
    liveUrl: 'https://rinanewhouse.github.io/Dream-Finder/',
    imageUrl: '/src/assets/dream_finder_mockup.png',
    featured: true
  },
  {
    id: 'hopkins-hillel',
    title: 'Hopkins Hillel',
    description: 'The soon-to-be-released Johns Hopkins Hillel Website. The ultimate place where Jewish life and individuality meet and thrive.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    githubUrl: 'https://github.com/RinaNewhouse/hopkins-hillel-website',
    liveUrl: 'https://hopkins-hillel-website.vercel.app/',
    imageUrl: '/src/assets/hopkins_hillel_mockup.png',
    featured: true
  },
  {
    id: 'online-library',
    title: 'Online Library',
    description: "Can't bother to drive to an actual library? Amazon shipping taking way too long? Get instant access to the book you purchased and have it not break the bank (#WinWin).",
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    githubUrl: 'https://github.com/RinaNewhouse/React-Library',
    liveUrl: 'https://react-library-black.vercel.app/',
    imageUrl: '/src/assets/library_mockup.png',
    featured: true
  }
];
