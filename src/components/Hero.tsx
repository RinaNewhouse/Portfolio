import React from 'react';
import { Github, Linkedin, FileText, Mail, ChevronDown } from 'lucide-react';

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-pink-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-300/20 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-300/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-300/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-pink-300/20 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
              Hey
              <br />
              <span className="text-pink-500">I'm Rina.</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              A <span className="font-bold text-pink-500">software engineer</span> specializing in <span className="font-bold text-pink-500">frontend and fullstack development</span>, transforming little ideas into big results.
              <br />
              Here's a bit more about me.
            </p>

            {/* Social links */}
            <div className="flex justify-center lg:justify-start space-x-6 mb-8">
              <a 
                href="https://www.linkedin.com/in/rina-newhouse/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-6 w-6 text-pink-500" />
              </a>
              <a 
                href="https://github.com/RinaNewhouse" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <Github className="h-6 w-6 text-pink-500" />
              </a>
              <a 
                href="/Rina-Newhouse-Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <FileText className="h-6 w-6 text-pink-500" />
              </a>
            </div>

            {/* Contact button */}
            <button 
              onClick={onContactClick}
              className="inline-flex items-center space-x-2 bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail className="h-5 w-5" />
              <span>Get In Touch</span>
            </button>
          </div>

          {/* Right side - Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
              <img 
                src="https://res.cloudinary.com/dcsbgpsck/image/upload/v1759513866/RinaPhoto_kruxli.jpg" 
                alt="Rina Newhouse" 
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl border-4 border-white dark:border-gray-800"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#projects" className="block">
          <ChevronDown className="h-8 w-8 text-pink-500" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
