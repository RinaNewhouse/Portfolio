export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  proficiency: number; // 0-100
  category: 'frontend' | 'backend' | 'tools' | 'design';
  icon?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
