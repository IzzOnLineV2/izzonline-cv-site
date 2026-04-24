import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Education() {
  const { t } = useLanguage();

  const education = [
    {
      school: 'ISIS Zenale e Butinone',
      degree: t('edu.zenale.degree'),
      accent: 'text-cyan-400',
      border: 'hover:border-cyan-400/50 hover:shadow-cyan-500/10',
    },
    {
      school: 'ITIS Pietro Paleocapa',
      degree: t('edu.paleocapa.degree'),
      accent: 'text-purple-400',
      border: 'hover:border-purple-400/50 hover:shadow-purple-500/10',
    },
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-cyan-500/10 text-cyan-400 border-cyan-400/50 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-400/50 light:bg-cyan-200 light:text-cyan-800 light:border-cyan-400">
            {t('education.badge')}
          </Badge>
          <h2 className="mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 dark:from-cyan-400 dark:via-purple-500 dark:to-pink-500 light:from-cyan-600 light:via-purple-600 light:to-pink-600 bg-clip-text text-transparent">
            {t('education.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`p-5 bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/80 light:shadow-sm border-slate-700 dark:border-slate-700 light:border-purple-200 ${item.border} transition-all duration-300 hover:shadow-lg h-full`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-lg bg-slate-900/50 dark:bg-slate-900/50 light:bg-purple-50 ${item.accent}`}>
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h3 className={`${item.accent} mb-1`}>{item.school}</h3>
                    <p className="text-slate-300 dark:text-slate-300 light:text-slate-700">
                      {item.degree}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
