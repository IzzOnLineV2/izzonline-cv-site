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

export function Skills() {
  const skillCategories = [
    {
      id: 'languages',
      icon: Code2,
      title: 'Languages & Frameworks',
      color: 'from-cyan-500/10 to-blue-500/10',
      iconColor: 'text-cyan-400',
      borderColor: 'hover:border-cyan-400/50',
      skills: [
        'Java 17+',
        'Spring Boot',
        'Spring Framework',
        'Jakarta EE',
        'Kotlin (basic)',
        'JUnit',
        'Mockito',
        'PowerMock'
      ],
    },
    {
      id: 'architecture',
      icon: Boxes,
      title: 'Architecture & Patterns',
      color: 'from-purple-500/10 to-pink-500/10',
      iconColor: 'text-purple-400',
      borderColor: 'hover:border-purple-400/50',
      skills: [
        'Microservices',
        'Hexagonal Architecture',
        'Domain-Driven Design (DDD)',
        'Event-Driven Architecture',
        'Saga Pattern',
        'RESTful APIs',
        'SOAP Web Services',
      ],
    },
    {
      id: 'ai',
      icon: Brain,
      title: 'AI Integration',
      color: 'from-pink-500/10 to-rose-500/10',
      iconColor: 'text-pink-400',
      borderColor: 'hover:border-pink-400/50',
      skills: [
        'Spring AI',
        'Model Context Protocol (MCP)',
        'LLM Orchestration',
        'OpenAI Integration',
        'Ollama',
      ],
    },
    {
      id: 'security',
      icon: Shield,
      title: 'Security',
      color: 'from-amber-500/10 to-orange-500/10',
      iconColor: 'text-amber-400',
      borderColor: 'hover:border-amber-400/50',
      skills: [
        'Spring Security',
        'Keycloak',
        'OAuth2',
        'SAML2',
        'JWT',
        'LDAP',
        'OpenSSO',
      ],
    },
    {
      id: 'databases',
      icon: Database,
      title: 'Databases & Persistence',
      color: 'from-emerald-500/10 to-teal-500/10',
      iconColor: 'text-emerald-400',
      borderColor: 'hover:border-emerald-400/50',
      skills: [
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'Hibernate',
        'QueryDSL',
        'Oracle',
        'MySQL',
        'Spring Data JPA',
      ],
    },
    {
      id: 'messaging',
      icon: MessageSquare,
      title: 'Messaging & Events',
      color: 'from-indigo-500/10 to-violet-500/10',
      iconColor: 'text-indigo-400',
      borderColor: 'hover:border-indigo-400/50',
      skills: [
        'Apache Kafka',
        'ActiveMQ',
        'RabbitMQ',
        'Spring AMQP',
        'Spring Events',
        'Oracle AQ',
      ],
    },
    {
      id: 'devops',
      icon: Workflow,
      title: 'DevOps & Tools',
      color: 'from-sky-500/10 to-cyan-500/10',
      iconColor: 'text-sky-400',
      borderColor: 'hover:border-sky-400/50',
      skills: [
        'Docker',
        'Kubernetes',
        'Helm',
        'GitLab CI/CD',
        'Testcontainers',
        'WireMock',
        'Maven',
        'Git',
      ],
    },
    {
      id: 'cloud',
      icon: Cloud,
      title: 'Cloud & Deployment',
      color: 'from-lime-500/10 to-emerald-500/10',
      iconColor: 'text-lime-400',
      borderColor: 'hover:border-lime-400/50',
      skills: [
        'AWS (basic)',
        'OpenShift',
        'Container Orchestration',
        'Wildfly',
        'Tomcat',
        'JBoss',
      ],
    },
  ];

  const springExpertise = [
    'Spring Core',
    'Spring Context',
    'Spring Beans',
    'Spring SpEL',
    'Spring Web MVC',
    'Spring REST',
    'Spring Boot',
    'Spring Boot Actuator',
    'Spring Data JPA',
    'Spring Data MongoDB',
    'Spring JDBC',
    'Spring Transaction Management',
    'Spring Security',
    'Spring Security OAuth2',
    'Spring Security SAML2',
    'Spring Cloud Config',
    'Spring Cloud Gateway',
    'Spring Cloud OpenFeign',
    'Spring Cloud Netflix',
    'Spring Cloud Sleuth',
    'Spring Test',
    'Spring AI',
    'Spring for Apache Kafka',
    'Spring AMQP',
    'Spring Scheduling',
    'Spring Batch',
    'Spring AOP',
    'Spring Validation',
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-cyan-500/10 text-cyan-400 border-cyan-400/50">Technical Expertise</Badge>
          <h2 className="mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Comprehensive expertise across the modern Java ecosystem and enterprise technologies
          </p>
        </motion.div>

        <Tabs defaultValue="overview" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-slate-800/50">
            <TabsTrigger value="overview" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500/20 data-[state=active]:to-purple-500/20 data-[state=active]:text-cyan-400">
              Overview
            </TabsTrigger>
            <TabsTrigger value="spring" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500/20 data-[state=active]:to-emerald-500/20 data-[state=active]:text-green-400">
              Spring Ecosystem
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
                  <Card className={`p-6 bg-slate-800/50 border-slate-700 ${category.borderColor} transition-all duration-300 h-full group`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} transition-colors`}>
                        <category.icon className={`w-5 h-5 ${category.iconColor}`} />
                      </div>
                      <h3 className="text-slate-100">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="border-slate-600 text-slate-300 hover:border-cyan-400/50 hover:text-cyan-400 transition-colors"
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
              <Card className="p-8 bg-slate-800/50 border-slate-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10">
                    <Code2 className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-slate-100">Spring Framework Expertise</h3>
                    <p className="text-slate-400">Comprehensive knowledge of the Spring ecosystem</p>
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
                        className="border-green-600/50 text-green-400 hover:bg-green-500/10 transition-colors"
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
