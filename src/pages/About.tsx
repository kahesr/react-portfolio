import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { Skill } from '../types';
import { getSkills } from '../lib/api';

export function About() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSkills();
  }, []);

  const loadSkills = async () => {
    try {
      const data = await getSkills();
      setSkills(data);
    } catch (error) {
      console.error('Failed to load skills:', error);
    } finally {
      setLoading(false);
    }
  };

  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, Skill[]>
  );

  const proficiencyColors = {
    beginner: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200',
    intermediate: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200',
    advanced: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200',
    expert: 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-200',
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-4xl font-bold text-charcoal-900 dark:text-white mb-4">About Me</h1>
        <p className="text-charcoal-600 dark:text-charcoal-400 text-lg leading-relaxed">
          Welcome to my portfolio. I'm a passionate developer and designer with a focus on creating beautiful,
          functional digital experiences. With expertise spanning full-stack development, UI/UX design, and modern web
          technologies, I'm committed to delivering high-quality solutions.
        </p>
      </div>

      {/* Skills Section */}
      {!loading && Object.keys(groupedSkills).length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-charcoal-900 dark:text-white mb-6">Skills</h2>
          <div className="space-y-8">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold text-charcoal-800 dark:text-charcoal-100 mb-4 capitalize">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.id}
                      className={`inline-flex rounded-lg items-center gap-2 font-medium text-xs py-1 px-2.5 ${
                          proficiencyColors[skill.proficiency]
                        }`}
                      title={skill.proficiency}
                    >
                      <span>{skill.name}</span>
                      <span>|</span>
                      <span>{skill.proficiency}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {loading && (
        <Card className="p-8">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-charcoal-200 dark:bg-charcoal-700 rounded w-1/4" />
            <div className="flex gap-2 flex-wrap">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-8 bg-charcoal-200 dark:bg-charcoal-700 rounded-full w-24" />
              ))}
            </div>
          </div>
        </Card>
      )}

      {!loading && Object.keys(groupedSkills).length === 0 && (
        <Card className="p-8 text-center text-charcoal-600 dark:text-charcoal-400">
          No skills data available yet
        </Card>
      )}
    </motion.div>
  );
}
