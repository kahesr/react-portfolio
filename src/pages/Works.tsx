import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { Modal } from '../components/Modal';
import { Project } from '../types';
import { getProjects } from '../lib/api';
import { ExternalLink, Github } from 'lucide-react';

export function Works() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'work' | 'personal' | 'research'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (error) {
      console.error('Failed to load projects:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProjects =
    selectedCategory === 'all' ? projects : projects.filter((p) => p.category === selectedCategory);

  const categories = [
    { value: 'all', label: 'All' },
    { value: 'work', label: 'Work' },
    { value: 'personal', label: 'Personal' },
    { value: 'research', label: 'Research' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-4xl font-bold text-charcoal-900 dark:text-white mb-4">Works</h1>
        <p className="text-charcoal-600 dark:text-charcoal-400">
          Explore my portfolio of projects and creative work
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-3 flex-wrap">
        {categories.map((category) => (
          <motion.button
            key={category.value}
            onClick={() => setSelectedCategory(category.value as any)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              selectedCategory === category.value
                ? 'bg-primary-500 text-white'
                : 'bg-charcoal-100 dark:bg-charcoal-800 text-charcoal-900 dark:text-white hover:bg-charcoal-200 dark:hover:bg-charcoal-700'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.label}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              layoutId={project.id}
            >
              <Card
                hoverable
                onClick={() => setSelectedProject(project)}
                className="overflow-hidden cursor-pointer h-full flex flex-col"
              >
                {project.image_url && (
                  <div className="relative h-48 mb-4 -mx-6 -mt-6">
                    <img
                      src={project.image_url}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-charcoal-900 dark:text-white">{project.title}</h3>
                    <Badge>{project.category}</Badge>
                  </div>

                  <p className="text-charcoal-600 dark:text-charcoal-400 text-sm mb-4 flex-1">
                    {project.short_description}
                  </p>

                  {project.tags.length > 0 && (
                    <div className="flex gap-2 flex-wrap mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-charcoal-100 dark:bg-charcoal-700 text-charcoal-700 dark:text-charcoal-300 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-2 pt-4 border-t border-charcoal-200 dark:border-charcoal-700">
                    {project.project_url && (
                      <a
                        href={project.project_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                      >
                        View <ExternalLink size={14} />
                      </a>
                    )}
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                      >
                        GitHub <Github size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      )}

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="animate-pulse">
              <div className="h-48 bg-charcoal-200 dark:bg-charcoal-700 rounded mb-4" />
              <div className="space-y-3">
                <div className="h-4 bg-charcoal-200 dark:bg-charcoal-700 rounded w-3/4" />
                <div className="h-3 bg-charcoal-100 dark:bg-charcoal-700 rounded" />
              </div>
            </Card>
          ))}
        </div>
      )}

      {!loading && filteredProjects.length === 0 && (
        <Card className="p-8 text-center text-charcoal-600 dark:text-charcoal-400">
          No projects in this category
        </Card>
      )}

      {/* Project Detail Modal */}
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
        >
          <div className="space-y-6">
            {selectedProject.image_url && (
              <img
                src={selectedProject.image_url}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            )}

            <div>
              <h3 className="text-sm font-semibold text-charcoal-600 dark:text-charcoal-400 mb-2">Description</h3>
              <p className="text-charcoal-900 dark:text-white">{selectedProject.description}</p>
            </div>

            {selectedProject.tags.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-charcoal-600 dark:text-charcoal-400 mb-2">Technologies</h3>
                <div className="flex gap-2 flex-wrap">
                  {selectedProject.tags.map((tag) => (
                    <Badge key={tag} variant="default">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-3 pt-4 border-t border-charcoal-200 dark:border-charcoal-700">
              {selectedProject.project_url && (
                <a
                  href={selectedProject.project_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium"
                >
                  View Project <ExternalLink size={16} />
                </a>
              )}
              {selectedProject.github_url && (
                <a
                  href={selectedProject.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border-2 border-primary-500 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors font-medium"
                >
                  View on GitHub <Github size={16} />
                </a>
              )}
            </div>
          </div>
        </Modal>
      )}
    </motion.div>
  );
}
