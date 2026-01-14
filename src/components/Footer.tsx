import React from 'react';
import { Github, Linkedin, Mail, FileText, ArrowUp } from 'lucide-react';

interface FooterProps {
  onContactClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and back to top */}
          <div className="text-center md:text-left">
            <button 
              onClick={scrollToTop}
              className="group flex items-center space-x-3 text-white hover:text-pink-400 transition-colors duration-200"
            >
              <img 
                src="https://res.cloudinary.com/dcsbgpsck/image/upload/v1759513811/Rina_Logo_rafszh.png" 
                alt="Rina Newhouse" 
                className="h-12 w-12"
              />
              <div>
                <p className="font-semibold">Back to top!</p>
                <ArrowUp className="h-4 w-4 group-hover:translate-y-[-2px] transition-transform duration-200" />
              </div>
            </button>
          </div>

          {/* Social links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/RinaNewhouse"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-400 transition-colors duration-200 flex items-center space-x-2"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/rina-newhouse/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-400 transition-colors duration-200 flex items-center space-x-2"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
            <button 
              onClick={onContactClick}
              className="text-gray-300 hover:text-pink-400 transition-colors duration-200 flex items-center space-x-2"
            >
              <Mail className="h-5 w-5" />
              <span>Contact</span>
            </button>
            <a 
              href="/Rina-Newhouse-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-400 transition-colors duration-200 flex items-center space-x-2"
            >
              <FileText className="h-5 w-5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-gray-400">
            <p>Copyright © 2026 Rina Newhouse</p>
            <p className="text-sm mt-1">Built with React, TypeScript & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
