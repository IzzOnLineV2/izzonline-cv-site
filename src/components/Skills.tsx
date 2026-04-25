import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Code2, 
  Database, 
  Cloud, 
  MessageSquare, 
  Shield, 
  Boxes,
  Brain,
  Workflow
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Skills() {
  const { t } = useLanguage();
  
  const skillCategories = [
    {
      id: 'languages',
      icon: Code2,
      title: t('skills.cat.languages'),
      color: 'from-cyan-500/10 to-blue-500/10',
      iconColor: 'text-cyan-400',
      borderColor: 'hover:border-cyan-400/50',
      skills: ['Java 17+', 'Java 21', 'Spring Boot', 'Spring Framework', 'Jakarta EE', 'Python', 'TypeScript', 'Kotlin (basic)', 'JUnit', 'Mockito'],
    },
    {
      id: 'architecture',
      icon: Boxes,
      title: t('skills.cat.architecture'),
      color: 'from-purple-500/10 to-pink-500/10',
      iconColor: 'text-purple-400',
      borderColor: 'hover:border-purple-400/50',
      skills: ['Microservices', 'Hexagonal Architecture', 'Domain-Driven Design (DDD)', 'Event-Driven Architecture', 'Saga Pattern', 'Plugin-based Architecture', 'Multi-tenant Systems', 'REST APIs', 'API Gateway', 'SOAP Web Services'],
    },
    {
      id: 'ai',
      icon: Brain,
      title: t('skills.cat.ai'),
      color: 'from-pink-500/10 to-rose-500/10',
      iconColor: 'text-pink-400',
      borderColor: 'hover:border-pink-400/50',
      skills: ['Spring AI', 'OpenAI', 'Ollama', 'Llama', 'Model Context Protocol (MCP)', 'LLM Orchestration', 'AI API Design', 'Prompt Engineering', 'ML-ready architectures', 'XGBoost', 'Digital Twin', 'Forecasting', 'Optimization'],
    },
    {
      id: 'security',
      icon: Shield,
      title: t('skills.cat.security'),
      color: 'from-amber-500/10 to-orange-500/10',
      iconColor: 'text-amber-400',
      borderColor: 'hover:border-amber-400/50',
      skills: ['Spring Security', 'OAuth2', 'JWT', 'SAML2', 'Keycloak', 'AWS Cognito', 'LDAP', 'OpenSSO'],
    },
    {
      id: 'databases',
      icon: Database,
      title: t('skills.cat.databases'),
      color: 'from-emerald-500/10 to-teal-500/10',
      iconColor: 'text-emerald-400',
      borderColor: 'hover:border-emerald-400/50',
      skills: ['PostgreSQL', 'SQL Server', 'Oracle', 'MongoDB', 'Redis', 'Hibernate', 'Hibernate Envers', 'QueryDSL', 'Spring Data JPA'],
    },
    {
      id: 'messaging',
      icon: MessageSquare,
      title: t('skills.cat.messaging'),
      color: 'from-indigo-500/10 to-violet-500/10',
      iconColor: 'text-indigo-400',
      borderColor: 'hover:border-indigo-400/50',
      skills: ['Apache Kafka', 'ActiveMQ', 'RabbitMQ', 'Spring AMQP', 'Spring Events', 'WebSocket (STOMP/SockJS)', 'Oracle AQ'],
    },
    {
      id: 'devops',
      icon: Workflow,
      title: t('skills.cat.devops'),
      color: 'from-sky-500/10 to-cyan-500/10',
      iconColor: 'text-sky-400',
      borderColor: 'hover:border-sky-400/50',
      skills: ['Docker', 'Kubernetes', 'Helm', 'GitLab CI/CD', 'Maven', 'Testcontainers', 'WireMock', 'Quartz', 'ShedLock', 'OpenShift', 'AWS (basic)', 'S3'],
    },
    {
      id: 'frontend',
      icon: Cloud,
      title: t('skills.cat.frontend'),
      color: 'from-lime-500/10 to-emerald-500/10',
      iconColor: 'text-lime-400',
      borderColor: 'hover:border-lime-400/50',
      skills: ['Next.js', 'TypeScript', 'Angular', 'jQuery', 'Flutter (iOS/Android)', 'Swift (iPadOS/iOS)'],
    },
  ];

  const springExpertise = [
    'Spring Boot',
    'Spring Framework',
    'Spring Security (OAuth2, SAML2)',
    'Spring Data (JPA, MongoDB)',
    'Spring Cloud (Gateway, Config, OpenFeign)',
    'Spring AI',
    'Spring for Apache Kafka',
    'Spring AMQP',
    'Spring Batch',
    'Spring Scheduling',
    'Spring Test',
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900/50 dark:bg-slate-900/50 light:bg-purple-50/80">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-cyan-500/10 text-cyan-400 border-cyan-400/50 dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-400/50 light:bg-cyan-100 light:text-cyan-700 light:border-cyan-400">{t('skills.badge')}</Badge>
          <h2 className="mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 dark:from-cyan-400 dark:via-purple-500 dark:to-pink-500 light:from-cyan-600 light:via-purple-600 light:to-pink-600 bg-clip-text text-transparent">
            {t('skills.title')}
          </h2>
          <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </motion.div>

        <Tabs defaultValue="overview" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/80 light:shadow-sm border-0 dark:border-0 light:border light:border-purple-200">
            <TabsTrigger value="overview" className="text-cyan-400 dark:text-cyan-400 light:text-cyan-700 data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500/20 data-[state=active]:to-purple-500/20 data-[state=active]:text-cyan-300 dark:data-[state=active]:text-cyan-300 light:data-[state=active]:text-cyan-700 light:data-[state=active]:from-cyan-100 light:data-[state=active]:to-purple-100">
              {t('skills.tab.overview')}
            </TabsTrigger>
            <TabsTrigger value="spring" className="text-green-400 dark:text-green-400 light:text-green-700 data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500/20 data-[state=active]:to-emerald-500/20 data-[state=active]:text-green-300 dark:data-[state=active]:text-green-300 light:data-[state=active]:text-green-700 light:data-[state=active]:from-green-100 light:data-[state=active]:to-emerald-100">
              {t('skills.tab.spring')}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className={`p-6 bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/80 light:shadow-sm border-slate-700 dark:border-slate-700 light:border-purple-200 ${category.borderColor} transition-all duration-300 h-full group`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} transition-colors`}>
                        <category.icon className={`w-5 h-5 ${category.iconColor}`} />
                      </div>
                      <h3 className="text-slate-100 dark:text-slate-100 light:text-slate-900">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="border-slate-600 dark:border-slate-600 light:border-purple-300 text-slate-300 dark:text-slate-300 light:text-slate-700 hover:border-cyan-400/50 hover:text-cyan-400 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="spring">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/80 light:shadow-sm border-slate-700 dark:border-slate-700 light:border-purple-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10">
                    <Code2 className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-slate-100 dark:text-slate-100 light:text-slate-900">{t('skills.spring.title')}</h3>
                    <p className="text-slate-400 dark:text-slate-400 light:text-slate-600">{t('skills.spring.subtitle')}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {springExpertise.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.02 }}
                      viewport={{ once: true }}
                    >
                      <Badge
                        variant="outline"
                        className="border-green-600/50 dark:border-green-600/50 light:border-green-400 text-green-400 dark:text-green-400 light:text-green-700 hover:bg-green-500/10 transition-colors"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}