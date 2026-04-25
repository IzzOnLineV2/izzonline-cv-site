type T = (key: string) => string;

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface OtherProjectEntry {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface EducationEntry {
  school: string;
  degree: string;
}

export function getExperiences(t: T): ExperienceEntry[] {
  return [
    {
      company: 'IzzOnLine - SmartApiBox',
      role: 'AI Platform Architect & Senior Java Engineer',
      period: `${t('cv.month.sep')} 2018 - ${t('cv.present')} · 7 ${t('cv.yrs')} 3 ${t('cv.mos')}`,
      location: 'Bergamo Area, Italy',
      description: t('exp.izzonline.desc'),
      highlights: [
        t('exp.izzonline.h8'),
        t('exp.izzonline.h9'),
        t('exp.izzonline.h1'),
        t('exp.izzonline.h2'),
        t('exp.izzonline.h3'),
        t('exp.izzonline.h4'),
        t('exp.izzonline.h5'),
        t('exp.izzonline.h6'),
        t('exp.izzonline.h7'),
      ],
      technologies: ['Spring Boot', 'Spring AI', 'Microservices', 'Docker', 'Kubernetes', 'Kafka', 'PostgreSQL', 'Model Context Protocol', 'Stripe', 'Flutter', 'Swift'],
    },
    {
      company: 'AGM Solutions (for Engineering)',
      role: 'Senior Java Backend Developer',
      period: `${t('cv.month.jan')} 2026 - ${t('cv.present')}`,
      location: 'Italy',
      description: t('exp.agmlng.desc'),
      highlights: [
        t('exp.agmlng.h1'),
        t('exp.agmlng.h2'),
        t('exp.agmlng.h3'),
        t('exp.agmlng.h4'),
        t('exp.agmlng.h5'),
        t('exp.agmlng.h6'),
      ],
      technologies: ['Python', 'Java 21', 'Spring Boot 3', 'SQL Server', 'Next.js', 'TypeScript', 'REST API', 'ML Forecasting', 'Optimization', 'Digital Twin'],
    },
    {
      company: 'AGM Solutions (for Engineering)',
      role: 'Senior Java Backend Developer',
      period: `${t('cv.month.may')} 2024 – ${t('cv.month.may')} 2025`,
      location: 'Italy',
      description: t('exp.agmeng.desc'),
      highlights: [
        t('exp.agmeng.h1'),
        t('exp.agmeng.h2'),
        t('exp.agmeng.h3'),
        t('exp.agmeng.h4'),
        t('exp.agmeng.h5'),
        t('exp.agmeng.h6'),
        t('exp.agmeng.h7'),
        t('exp.agmeng.h8'),
      ],
      technologies: ['Java 21', 'Spring Boot 3', 'Spring Cloud OpenFeign', 'OAuth2', 'AWS Cognito', 'Quartz', 'ShedLock', 'Hibernate Envers', 'WebSocket', 'Apache POI', 'S3', 'XML/XSD'],
    },
    {
      company: 'AGM Solutions (for Generali Assicurazioni)',
      role: 'Team Leader & Technical Ambassador',
      period: '2019 - 2023',
      location: 'Italy',
      description: t('exp.agm.desc'),
      highlights: [
        t('exp.agm.h1'),
        t('exp.agm.h2'),
        t('exp.agm.h3'),
        t('exp.agm.h4'),
      ],
      technologies: ['Spring Boot 2', 'JPA', 'Hibernate', 'QueryDSL', 'PostgreSQL', 'Wildfly', 'ActiveMQ', 'Flowable BPMN', 'Docker', 'Kubernetes', 'GitLab CI/CD'],
    },
    {
      company: 'Deutsche Bank',
      role: 'Backend Developer',
      period: '2018 - 2019',
      location: 'Milan, Italy',
      description: t('exp.deutsche.desc'),
      highlights: [
        t('exp.deutsche.h1'),
        t('exp.deutsche.h2'),
      ],
      technologies: ['Spring Boot 2', 'JPA', 'Oracle', 'Angular 6', 'JHipster 5', 'OpenShift', 'AWS Lambda', 'DynamoDB'],
    },
    {
      company: 'Sorint.Lab S.r.l.',
      role: 'Java Developer & Technical Lead',
      period: '2007 - 2018',
      location: 'Italy',
      description: t('exp.sorint.desc'),
      highlights: [
        t('exp.sorint.h1'),
        t('exp.sorint.h2'),
        t('exp.sorint.h3'),
        t('exp.sorint.h4'),
      ],
      technologies: ['Java 1.8', 'Spring 4.x', 'Hibernate 4.x', 'Apache Solr', 'Mule', 'Liferay 7', 'jQuery', 'Tomcat 8'],
    },
  ];
}

export function getOtherProjects(t: T): OtherProjectEntry[] {
  return [
    {
      company: 'MBE - Mail Boxes Etc.',
      role: 'Developer',
      period: '2016 - 2017',
      description: t('exp.mbe.desc'),
      technologies: ['Java 8', 'Spring Boot', 'Spring Security', 'JWT', 'JPA', 'Angular JS'],
    },
    {
      company: 'SKY Italia',
      role: 'Developer',
      period: '2015',
      description: t('exp.sky.desc'),
      technologies: ['Java 8', 'Spring Web MVC', 'Spring Security', 'Hibernate 4', 'jQuery'],
    },
    {
      company: 'UBI Sistemi e Servizi',
      role: 'Developer',
      period: '2014',
      description: t('exp.ubi.desc'),
      technologies: ['Oracle APEX', 'PL/SQL', 'Spring 3.2', 'Bootstrap 3', 'jQuery'],
    },
    {
      company: 'Borsa Italiana',
      role: 'Developer',
      period: '2011',
      description: t('exp.borsa.desc'),
      technologies: ['Java 1.5', 'Spring 2', 'Hibernate 3', 'Apache Solr', 'Lucene', 'Oracle PL/SQL'],
    },
  ];
}

export function getEducation(t: T): EducationEntry[] {
  return [
    { school: 'ISIS Zenale e Butinone', degree: t('edu.zenale.degree') },
    { school: 'ITIS Pietro Paleocapa', degree: t('edu.paleocapa.degree') },
  ];
}

export const skillCategoriesData = [
  {
    id: 'languages',
    titleKey: 'skills.cat.languages',
    skills: ['Java 17+', 'Java 21', 'Spring Boot', 'Spring Framework', 'Jakarta EE', 'Python', 'TypeScript', 'Kotlin (basic)', 'JUnit', 'Mockito'],
  },
  {
    id: 'architecture',
    titleKey: 'skills.cat.architecture',
    skills: ['Microservices', 'Hexagonal Architecture', 'Domain-Driven Design (DDD)', 'Event-Driven Architecture', 'Saga Pattern', 'Plugin-based Architecture', 'Multi-tenant Systems', 'REST APIs', 'API Gateway', 'SOAP Web Services'],
  },
  {
    id: 'ai',
    titleKey: 'skills.cat.ai',
    skills: ['Spring AI', 'OpenAI', 'Ollama', 'Llama', 'Model Context Protocol (MCP)', 'LLM Orchestration', 'AI API Design', 'Prompt Engineering', 'ML-ready architectures', 'XGBoost', 'Digital Twin', 'Forecasting', 'Optimization'],
  },
  {
    id: 'security',
    titleKey: 'skills.cat.security',
    skills: ['Spring Security', 'OAuth2', 'JWT', 'SAML2', 'Keycloak', 'AWS Cognito', 'LDAP', 'OpenSSO'],
  },
  {
    id: 'databases',
    titleKey: 'skills.cat.databases',
    skills: ['PostgreSQL', 'SQL Server', 'Oracle', 'MongoDB', 'Redis', 'Hibernate', 'Hibernate Envers', 'QueryDSL', 'Spring Data JPA'],
  },
  {
    id: 'messaging',
    titleKey: 'skills.cat.messaging',
    skills: ['Apache Kafka', 'ActiveMQ', 'RabbitMQ', 'Spring AMQP', 'Spring Events', 'WebSocket (STOMP/SockJS)', 'Oracle AQ'],
  },
  {
    id: 'devops',
    titleKey: 'skills.cat.devops',
    skills: ['Docker', 'Kubernetes', 'Helm', 'GitLab CI/CD', 'Maven', 'Testcontainers', 'WireMock', 'Quartz', 'ShedLock', 'OpenShift', 'AWS (basic)', 'S3'],
  },
  {
    id: 'frontend',
    titleKey: 'skills.cat.frontend',
    skills: ['Next.js', 'TypeScript', 'Angular', 'jQuery', 'Flutter (iOS/Android)', 'Swift (iPadOS/iOS)'],
  },
];
