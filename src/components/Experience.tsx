import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      company: 'IzzOnLine',
      role: 'Freelance Java Backend Developer',
      period: '2018 - Present',
      location: 'Italy',
      description: 'Working as a freelance Java Backend Developer, supporting various companies in the design and development of enterprise applications and distributed systems. Contributed to mission-critical projects in finance, insurance, and cybersecurity sectors.',
      highlights: [
        'Designed microservices-based systems following Hexagonal Architecture and DDD principles',
        'Developed AI-powered REST APIs using Spring AI with LLM providers (OpenAI, Ollama)',
        'Implemented Saga pattern and event-driven architectures for distributed transactions',
        'Engineered plugin-based modular architecture with dynamic JAR loading and SPI integration',
        'Integrated secure authentication flows using Keycloak, OAuth2, SAML2, JWT, and LDAP',
        'Built CI/CD pipelines and orchestrated containerized deployments via Docker, Kubernetes, Helm',
      ],
      technologies: ['Spring Boot', 'Microservices', 'Docker', 'Kubernetes', 'Spring AI', 'Kafka', 'PostgreSQL'],
    },
    {
      company: 'AGM Solutions (for Generali Assicurazioni)',
      role: 'Team Leader & Technical Ambassador',
      period: '2019 - Present',
      location: 'Italy',
      description: 'Leading a cybersecurity project focusing on vulnerability assessment and management, including assessment questionnaire and incident management tools.',
      highlights: [
        'Led team as Technical Coordinator for cybersecurity domain project',
        'Set up CI/CD pipelines for Windows/Wildfly and Linux/Kubernetes environments',
        'Integrated with external systems (Qualys, Namirial, Archer, ServiceNow) via REST and SOAP',
        'Configured GitLab CI with gitlab-runner and container orchestration',
      ],
      technologies: ['Spring Boot 2', 'JPA', 'Hibernate', 'QueryDSL', 'PostgreSQL', 'Wildfly', 'ActiveMQ', 'Flowable BPMN', 'Docker', 'Kubernetes', 'GitLab CI/CD'],
    },
    {
      company: 'Deutsche Bank',
      role: 'Backend Developer',
      period: '2018 - 2019',
      location: 'Milan, Italy',
      description: 'Involved in PSD2 (Payment Service Directive) project implementation.',
      highlights: [
        'Developed PSD2 compliant payment services',
        'Worked with cloud technologies and serverless architecture',
      ],
      technologies: ['Spring Boot 2', 'JPA', 'Oracle', 'Angular 6', 'JHipster 5', 'OpenShift', 'AWS Lambda', 'DynamoDB'],
    },
    {
      company: 'Sorint.Lab S.r.l.',
      role: 'Java Developer & Technical Lead',
      period: '2007 - 2018',
      location: 'Italy',
      description: 'Participated in numerous internal and IT consultant projects, including development of internal software suites and major financial sector applications.',
      highlights: [
        'Developed portfolio application for London Stock Exchange and Bit Market Services',
        'Supervised and managed minor projects as PM',
        'Taught Java, Spring Framework, Hibernate, and jQuery to new employees',
        'Built activity planning and assignment modules',
      ],
      technologies: ['Java 1.8', 'Spring 4.x', 'Hibernate 4.x', 'Apache Solr', 'Mule', 'Liferay 7', 'jQuery', 'Tomcat 8'],
    },
  ];

  const otherProjects = [
    {
      company: 'MBE - Mail Boxes Etc.',
      role: 'Developer',
      period: '2016 - 2017',
      description: 'Developed centralized billing tool for company branches',
      technologies: ['Java 8', 'Spring Boot', 'Spring Security', 'JWT', 'JPA', 'Angular JS'],
    },
    {
      company: 'SKY Italia',
      role: 'Developer',
      period: '2015',
      description: 'Developed encrypted password storage tool for Sky Italia systems',
      technologies: ['Java 8', 'Spring Web MVC', 'Spring Security', 'Hibernate 4', 'jQuery'],
    },
    {
      company: 'UBI Sistemi e Servizi',
      role: 'Developer',
      period: '2014',
      description: 'Performance improvement and technology modernization of existing applications',
      technologies: ['Oracle APEX', 'PL/SQL', 'Spring 3.2', 'Bootstrap 3', 'jQuery'],
    },
    {
      company: 'Borsa Italiana',
      role: 'Developer',
      period: '2011',
      description: 'Development and integration of web applications for London Stock Exchange',
      technologies: ['Java 1.5', 'Spring 2', 'Hibernate 3', 'Apache Solr', 'Lucene', 'Oracle PL/SQL'],
    },
  ];

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
          <Badge className="mb-4 bg-pink-500/10 text-pink-400 border-pink-400/50">Career Journey</Badge>
          <h2 className="mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            15+ years of delivering enterprise-grade solutions across finance, insurance, and cybersecurity sectors
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
                <div className={`hidden md:block absolute -left-[52px] top-6 w-4 h-4 rounded-full border-4 border-slate-950 ${
                  index % 4 === 0 ? 'bg-cyan-400' :
                  index % 4 === 1 ? 'bg-purple-400' :
                  index % 4 === 2 ? 'bg-pink-400' : 'bg-emerald-400'
                }`} />

                <Card className={`p-6 bg-slate-800/50 border-slate-700 transition-all duration-300 hover:shadow-lg ${
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
                      <div className="flex items-center gap-2 text-slate-300 mb-2">
                        <Briefcase size={16} />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 text-slate-400">
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

                  <p className="text-slate-300 mb-4">{exp.description}</p>

                  {exp.highlights && (
                    <ul className="space-y-2 mb-4">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-400">
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
                        className="border-slate-600 text-slate-300 hover:border-cyan-400/50 hover:text-cyan-400 transition-colors"
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
            <h3 className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 text-center">Additional Projects & Clients</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-4 bg-slate-800/30 border-slate-700 hover:border-cyan-400/30 transition-all duration-300 h-full">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-slate-200">{project.company}</h4>
                      <span className="text-slate-500">{project.period}</span>
                    </div>
                    <p className="text-slate-400 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="border-slate-700 text-slate-400"
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
