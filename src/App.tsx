import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import BlogSection from './components/BlogSection';
import Modal from './components/Modal';
import Footer from './components/Footer';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'about' | 'contact'>('about');

  const handleContactClick = () => {
    setModalMode('contact');
    setIsModalOpen(true);
  };

  const handleAboutClick = () => {
    setModalMode('about');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header 
        onContactClick={handleContactClick}
        onAboutClick={handleAboutClick}
      />
      
      <main>
        <Hero 
          onContactClick={handleContactClick}
          onAboutClick={handleAboutClick}
        />
        
        <SkillsSection />
        
        <ProjectsSection />
        
        <BlogSection />
      </main>
      
      <Footer onContactClick={handleContactClick} />
      
      <Modal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        mode={modalMode}
      />
    </div>
  );
}

export default App;
