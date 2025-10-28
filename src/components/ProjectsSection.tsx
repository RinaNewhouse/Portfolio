import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import { Github, ExternalLink, Star } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const navigate = useNavigate();
  const { id: projectId } = useParams();
  const [selectedProject, setSelectedProject] = useState(projects.find(p => p.id === projectId) || null);

  // Handle URL-based modal opening
  useEffect(() => {
    if (projectId) {
      const project = projects.find(p => p.id === projectId);
      if (project) {
        setSelectedProject(project);
      }
    } else {
      setSelectedProject(null);
    }
  }, [projectId]);

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    navigate(`/projects/${project.id}`);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    navigate('/');
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Here are some of my <span className="text-pink-500">projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work, featuring modern web applications built with cutting-edge technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => handleProjectClick(project)}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Featured</span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                  
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center space-x-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors duration-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Interested in seeing more of my work?
          </p>
          <a 
            href="https://github.com/RinaNewhouse"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300"
          >
            <Github className="h-5 w-5" />
            <span>View All Projects on GitHub</span>
          </a>
        </div>

        {/* Modal for Full Project */}
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={handleCloseModal}
          >
            <div 
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      {selectedProject.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {selectedProject.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex space-x-4">
                      <a 
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                      >
                        <Github className="h-4 w-4" />
                        <span>View Code</span>
                      </a>
                      
                      {selectedProject.liveUrl && (
                        <a 
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors duration-200"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={handleCloseModal}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl ml-4"
                  >
                    ×
                  </button>
                </div>

                {/* Project Image */}
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
