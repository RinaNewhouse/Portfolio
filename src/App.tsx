import { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import BlogSection from './components/BlogSection';
import Modal from './components/Modal';
import Footer from './components/Footer';
import useMetaTags from './hooks/useMetaTags';

function AppContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  useMetaTags(); // Update meta tags based on route

  const handleContactClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header 
        onContactClick={handleContactClick}
      />
      
      <main>
        <Routes>
          <Route path="/" element={<>
            <Hero onContactClick={handleContactClick} />
            <SkillsSection />
            <ProjectsSection />
            <BlogSection />
          </>} />
          
          {/* Projects section */}
          <Route path="/projects" element={<>
            <Hero onContactClick={handleContactClick} />
            <SkillsSection />
            <ProjectsSection />
            <BlogSection />
          </>} />
          
          {/* Individual project routes */}
          <Route path="/projects/:id" element={<>
            <Hero onContactClick={handleContactClick} />
            <SkillsSection />
            <ProjectsSection />
            <BlogSection />
          </>} />
          
          {/* Blog section */}
          <Route path="/blog" element={<>
            <Hero onContactClick={handleContactClick} />
            <SkillsSection />
            <ProjectsSection />
            <BlogSection />
          </>} />
          
          {/* Individual blog post routes */}
          <Route path="/blog/:id" element={<>
            <Hero onContactClick={handleContactClick} />
            <SkillsSection />
            <ProjectsSection />
            <BlogSection />
          </>} />
        </Routes>
      </main>
      
      <Footer onContactClick={handleContactClick} />
      
      <Modal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
