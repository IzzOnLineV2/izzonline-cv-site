import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getExperiences, getOtherProjects } from '../data/cv-data';

export function Experience() {
  const { t } = useLanguage();

  const experiences = getExperiences(t);
  const otherProjects = getOtherProjects(t);

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-pink-500/10 text-pink-400 border-pink-400/50 dark:bg-pink-500/10 dark:text-pink-400 dark:border-pink-400/50 light:bg-pink-200 light:text-pink-800 light:border-pink-400">{t('experience.badge')}</Badge>
          <h2 className="mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 dark:from-cyan-400 dark:via-purple-500 dark:to-pink-500 light:from-cyan-600 light:via-purple-600 light:to-pink-600 bg-clip-text text-transparent">
            {t('experience.title')}
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl mx-auto">
            {t('experience.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Main Experiences */}
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative mb-8 md:ml-20"
              >
                {/* Timeline dot */}
                <div className={`hidden md:block absolute -left-[52px] top-6 w-4 h-4 rounded-full border-4 border-slate-950 dark:border-slate-950 light:border-white ${
                  index % 4 === 0 ? 'bg-cyan-400' :
                  index % 4 === 1 ? 'bg-purple-400' :
                  index % 4 === 2 ? 'bg-pink-400' : 'bg-emerald-400'
                }`} />

                <Card className={`p-6 bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/80 light:shadow-sm border-slate-700 dark:border-slate-700 light:border-purple-200 transition-all duration-300 hover:shadow-lg ${
                  index % 4 === 0 ? 'hover:border-cyan-400/50 hover:shadow-cyan-500/10' :
                  index % 4 === 1 ? 'hover:border-purple-400/50 hover:shadow-purple-500/10' :
                  index % 4 === 2 ? 'hover:border-pink-400/50 hover:shadow-pink-500/10' : 'hover:border-emerald-400/50 hover:shadow-emerald-500/10'
                }`}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className={`mb-1 ${
                        index % 4 === 0 ? 'text-cyan-400' :
                        index % 4 === 1 ? 'text-purple-400' :
                        index % 4 === 2 ? 'text-pink-400' : 'text-emerald-400'
                      }`}>{exp.role}</h3>
                      <div className="flex items-center gap-2 text-slate-300 dark:text-slate-300 light:text-slate-700 mb-2">
                        <Briefcase size={16} />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 text-slate-400 dark:text-slate-400 light:text-slate-600">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 mb-4">
                    {(() => {
                      let text = exp.description;
                      const parts: (string | JSX.Element)[] = [];
                      let key = 0;
                      
                      // First, handle the first occurrence of SmartApiBox with link
                      const firstSmartApiBoxIndex = text.indexOf('SmartApiBox');
                      if (firstSmartApiBoxIndex !== -1) {
                        parts.push(text.substring(0, firstSmartApiBoxIndex));
                        parts.push(
                          <a 
                            key={key++}
                            href="https://smartapibox.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/50 hover:decoration-cyan-300 transition-colors"
                          >
                            SmartApiBox
                          </a>
                        );
                        text = text.substring(firstSmartApiBoxIndex + 'SmartApiBox'.length);
                      }
                      
                      // Handle inline links: SDK + external domains
                      const linkTokens: { match: string; label: string; href: string }[] = [
                        { match: 'SDK', label: 'SDK', href: 'https://mvnrepository.com/artifact/com.smartapibox/plugin-api-sdk' },
                        { match: 'smartqrbox.com', label: 'smartqrbox.com', href: 'https://smartqrbox.com' },
                        { match: 'whatschat.smartapibox.com', label: 'whatschat.smartapibox.com', href: 'https://whatschat.smartapibox.com' },
                        { match: 'quizforge.smartapibox.com', label: 'quizforge.smartapibox.com', href: 'https://quizforge.smartapibox.com' },
                        { match: 'Football Metchy', label: 'Football Metchy', href: 'https://metchy.events/' },
                        { match: 'CodePilot', label: 'CodePilot', href: 'https://codepilot.it' },
                      ];
                      let currentText = text;
                      while (currentText.length > 0) {
                        let nextIndex = -1;
                        let nextToken: typeof linkTokens[number] | null = null;
                        for (const token of linkTokens) {
                          const idx = currentText.indexOf(token.match);
                          if (idx !== -1 && (nextIndex === -1 || idx < nextIndex)) {
                            nextIndex = idx;
                            nextToken = token;
                          }
                        }

                        if (nextIndex === -1 || !nextToken) {
                          parts.push(currentText);
                          break;
                        }

                        parts.push(currentText.substring(0, nextIndex));
                        parts.push(
                          <a
                            key={key++}
                            href={nextToken.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-400 hover:text-cyan-300 underline decoration-cyan-400/50 hover:decoration-cyan-300 transition-colors"
                          >
                            {nextToken.label}
                          </a>
                        );
                        currentText = currentText.substring(nextIndex + nextToken.match.length);
                      }
                      
                      return parts;
                    })()}
                  </p>

                  {exp.highlights && (
                    <ul className="space-y-2 mb-4">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-400 dark:text-slate-400 light:text-slate-600">
                          <span className={`mt-1 ${
                            index % 4 === 0 ? 'text-cyan-400' :
                            index % 4 === 1 ? 'text-purple-400' :
                            index % 4 === 2 ? 'text-pink-400' : 'text-emerald-400'
                          }`}>▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="border-slate-600 dark:border-slate-600 light:border-purple-300 text-slate-300 dark:text-slate-300 light:text-purple-700 hover:border-cyan-400/50 hover:text-cyan-400 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-400 dark:to-pink-400 light:from-purple-600 light:to-pink-600 bg-clip-text text-transparent mb-6 text-center">{t('experience.additional')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-4 bg-slate-800/30 dark:bg-slate-800/30 light:bg-purple-50 border-slate-700 dark:border-slate-700 light:border-purple-200 hover:border-cyan-400/30 transition-all duration-300 h-full">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-slate-200 dark:text-slate-200 light:text-slate-800">{project.company}</h4>
                      <span className="text-slate-500 dark:text-slate-500 light:text-slate-600">{project.period}</span>
                    </div>
                    <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="border-slate-700 dark:border-slate-700 light:border-purple-300 text-slate-400 dark:text-slate-400 light:text-purple-700"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}