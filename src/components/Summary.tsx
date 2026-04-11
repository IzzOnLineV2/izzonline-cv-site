import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Code2, Workflow, Users, Rocket, Shield, BookOpen } from 'lucide-react';
import { Badge } from './ui/badge';
import { useLanguage } from '../contexts/LanguageContext';

export function Summary() {
  const { t } = useLanguage();
  const competencies = [
    {
      icon: Code2,
      title: 'System Design & Architecture',
      description: 'Translating complex business requirements into robust, scalable solutions',
      color: 'from-cyan-500/10 to-blue-500/10',
      iconColor: 'text-cyan-400',
      hoverColor: 'hover:border-cyan-400/50 hover:shadow-cyan-500/10',
    },
    {
      icon: Workflow,
      title: 'Backend Development',
      description: 'Designing and developing high-performance APIs and services',
      color: 'from-purple-500/10 to-pink-500/10',
      iconColor: 'text-purple-400',
      hoverColor: 'hover:border-purple-400/50 hover:shadow-purple-500/10',
    },
    {
      icon: Rocket,
      title: 'End-to-End Development',
      description: 'Driving full lifecycle from development through testing and deployment',
      color: 'from-pink-500/10 to-rose-500/10',
      iconColor: 'text-pink-400',
      hoverColor: 'hover:border-pink-400/50 hover:shadow-pink-500/10',
    },
    {
      icon: BookOpen,
      title: 'Technical Documentation',
      description: 'Maintaining clear and comprehensive technical documentation',
      color: 'from-emerald-500/10 to-teal-500/10',
      iconColor: 'text-emerald-400',
      hoverColor: 'hover:border-emerald-400/50 hover:shadow-emerald-500/10',
    },
    {
      icon: Users,
      title: 'Mentorship & Leadership',
      description: 'Supporting junior developers and promoting best practices',
      color: 'from-amber-500/10 to-orange-500/10',
      iconColor: 'text-amber-400',
      hoverColor: 'hover:border-amber-400/50 hover:shadow-amber-500/10',
    },
    {
      icon: Shield,
      title: 'DevOps & CI/CD',
      description: 'Championing automation, testing, and continuous delivery',
      color: 'from-indigo-500/10 to-violet-500/10',
      iconColor: 'text-indigo-400',
      hoverColor: 'hover:border-indigo-400/50 hover:shadow-indigo-500/10',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-purple-500/10 text-purple-400 border-purple-400/50 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-400/50 light:bg-purple-200 light:text-purple-800 light:border-purple-400">{t('summary.badge')}</Badge>
          <h2 className="mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent dark:from-cyan-400 dark:via-purple-500 dark:to-pink-500 light:from-cyan-600 light:via-purple-600 light:to-pink-600">
            {t('summary.title')}
          </h2>
          <div className="max-w-4xl mx-auto text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed">
            <p>
              {t('summary.content')}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {competencies.map((competency, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`p-6 bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border-slate-700 dark:border-slate-700 light:border-purple-200 ${competency.hoverColor} transition-all duration-300 hover:shadow-lg h-full group`}>
                <div className="flex flex-col items-start h-full">
                  <div className={`mb-4 p-3 rounded-lg bg-gradient-to-br ${competency.color} group-hover:from-${competency.color.split('-')[0]}-500/20 group-hover:to-${competency.color.split('-')[2]} transition-colors`}>
                    <competency.icon className={`w-6 h-6 ${competency.iconColor}`} />
                  </div>
                  <h3 className="mb-2 text-slate-100 dark:text-slate-100 light:text-slate-900">{competency.title}</h3>
                  <p className="text-slate-400 dark:text-slate-400 light:text-slate-600">{competency.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}