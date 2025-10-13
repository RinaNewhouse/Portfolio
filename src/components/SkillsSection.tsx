import React from 'react';
import { Skill } from '../types';
import { skills } from '../data/skills';

const SkillsSection: React.FC = () => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'frontend':
        return 'from-blue-500 to-cyan-500';
      case 'backend':
        return 'from-green-500 to-emerald-500';
      case 'tools':
        return 'from-purple-500 to-violet-500';
      case 'design':
        return 'from-pink-500 to-rose-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'frontend':
        return '🎨';
      case 'backend':
        return '⚙️';
      case 'tools':
        return '🛠️';
      case 'design':
        return '🎭';
      default:
        return '💻';
    }
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  // Calculate average proficiency for each category
  const getCategoryAverage = (categorySkills: Skill[]) => {
    const total = categorySkills.reduce((sum, skill) => sum + skill.proficiency, 0);
    return Math.round(total / categorySkills.length);
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-pink-500">Skills</span> & <span className="text-pink-500">Proficiency</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here's a breakdown of my technical skills and proficiency levels across different areas of development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category} className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">{getCategoryIcon(category)}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white capitalize">
                  {category}
                </h3>
              </div>

              <div className="space-y-4">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-pink-500">
                        {skill.proficiency}%
                      </span>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${getCategoryColor(category)} rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg`}
                        style={{ 
                          width: `${skill.proficiency}%`,
                          transitionDelay: `${Math.random() * 0.5}s`
                        }}
                      ></div>
                    </div>

                    {/* Proficiency level indicator */}
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                      <span>Beginner</span>
                      <span>Intermediate</span>
                      <span>Advanced</span>
                      <span>Expert</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Overall proficiency summary */}
        <div className="mt-16 bg-pink-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Overall Technical Proficiency</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">{getCategoryAverage(groupedSkills.frontend || [])}%</div>
              <div className="text-pink-100">Frontend Development</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">{getCategoryAverage(groupedSkills.backend || [])}%</div>
              <div className="text-pink-100">Backend Development</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">{getCategoryAverage([...(groupedSkills.tools || []), ...(groupedSkills.design || [])])}%</div>
              <div className="text-pink-100">Tools & Design</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
