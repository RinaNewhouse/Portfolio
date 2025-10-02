import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

interface HeaderProps {
  onContactClick: () => void;
  onAboutClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick, onAboutClick }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/src/assets/Rina Logo.png" 
            alt="Rina Newhouse" 
            className="h-10 w-10"
          />
        </div>
        
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <button 
              onClick={onAboutClick}
              className="text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-200 font-medium"
            >
              About
            </button>
          </li>
          <li>
            <a 
              href="#projects"
              className="text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-200 font-medium"
            >
              Projects
            </a>
          </li>
          <li>
            <button 
              onClick={onContactClick}
              className="text-gray-700 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-200 font-medium"
            >
              Contact
            </button>
          </li>
          <li>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;
