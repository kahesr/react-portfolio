import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { Experience, Education } from '../types';
import { getExperiences, getEducation } from '../lib/api';
import { Briefcase, BookOpen } from 'lucide-react';

export function Resume() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [education, setEducation] = useState<Education[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [exp, edu] = await Promise.all([getExperiences(), getEducation()]);
      setExperiences(exp);
      setEducation(edu);
    } catch (error) {
      console.error('Failed to load resume data:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <div>
        <h1 className="text-4xl font-bold text-charcoal-900 dark:text-white">Resume</h1>
      </div>

      {/* Experience Section */}
      {!loading && (
        <>
          {experiences.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Briefcase size={24} className="text-primary-500" />
                <h2 className="text-2xl font-bold text-charcoal-900 dark:text-white">Experience</h2>
              </div>

              <div className="space-y-4">
                {experiences.map((exp, idx) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Card>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-charcoal-900 dark:text-white">
                            {exp.position}
                          </h3>
                          <p className="text-primary-600 dark:text-primary-400 font-medium">{exp.company}</p>
                        </div>
                        {exp.is_current && (
                          <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-200 rounded-full text-xs font-semibold">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-charcoal-500 dark:text-charcoal-400 mb-3">
                        {formatDate(exp.start_date)} -{' '}
                        {exp.end_date ? formatDate(exp.end_date) : 'Present'}
                      </p>
                      <p className="text-charcoal-700 dark:text-charcoal-300">{exp.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Education Section */}
          {education.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-6">
                <BookOpen size={24} className="text-primary-500" />
                <h2 className="text-2xl font-bold text-charcoal-900 dark:text-white">Education</h2>
              </div>

              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Card>
                      <h3 className="text-lg font-semibold text-charcoal-900 dark:text-white mb-1">
                        {edu.degree}
                        {edu.field && ` in ${edu.field}`}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">{edu.institution}</p>
                      <p className="text-sm text-charcoal-500 dark:text-charcoal-400 mb-3">
                        {formatDate(edu.start_date)} - {edu.end_date ? formatDate(edu.end_date) : 'Present'}
                      </p>
                      {edu.description && (
                        <p className="text-charcoal-700 dark:text-charcoal-300">{edu.description}</p>
                      )}
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {experiences.length === 0 && education.length === 0 && (
            <Card className="p-8 text-center text-charcoal-600 dark:text-charcoal-400">
              No resume data available yet
            </Card>
          )}
        </>
      )}

      {loading && (
        <Card className="p-8">
          <div className="animate-pulse space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="space-y-3">
                <div className="h-4 bg-charcoal-200 dark:bg-charcoal-700 rounded w-1/3" />
                <div className="h-3 bg-charcoal-100 dark:bg-charcoal-700 rounded" />
              </div>
            ))}
          </div>
        </Card>
      )}
    </motion.div>
  );
}
