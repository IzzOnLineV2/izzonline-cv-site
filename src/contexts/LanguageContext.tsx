import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Language = 'en' | 'it';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.greeting': 'Hi, I\'m',
    'hero.role': 'AI Platform Architect & Senior Java Engineer',
    'hero.subtitle': 'Building AI APIs & production-ready AI products (LLMs, Spring AI, OpenAI, Java/Python)',
    'hero.cta.contact': 'Get in Touch',
    'hero.cta.experience': 'View Experience',
    
    // Summary
    'summary.badge': 'About Me',
    'summary.title': 'Professional Summary',
    'summary.content': 'Senior Java Developer with over 15 years of experience in designing and developing enterprise applications and distributed systems. Specialized in Spring ecosystem, microservices architecture, and AI integration. Proven track record in leading technical teams and delivering mission-critical solutions for finance, insurance, and cybersecurity sectors.',
    
    // Skills
    'skills.badge': 'Technical Expertise',
    'skills.title': 'Skills & Technologies',
    'skills.subtitle': 'Comprehensive expertise across the modern Java ecosystem and enterprise technologies',
    'skills.tab.overview': 'Overview',
    'skills.tab.spring': 'Spring Ecosystem',
    'skills.spring.title': 'Spring Framework Expertise',
    'skills.spring.subtitle': 'Comprehensive knowledge of the Spring ecosystem',
    
    // Skill Categories
    'skills.cat.languages': 'Languages & Frameworks',
    'skills.cat.architecture': 'Backend & Architecture',
    'skills.cat.ai': 'AI / LLM / ML',
    'skills.cat.security': 'Security',
    'skills.cat.databases': 'Database & Persistence',
    'skills.cat.messaging': 'Messaging & Realtime',
    'skills.cat.devops': 'DevOps & Cloud',
    'skills.cat.frontend': 'Frontend & Mobile',
    
    // Experience
    'experience.badge': 'Career Journey',
    'experience.title': 'Professional Experience',
    'experience.subtitle': '15+ years of delivering enterprise-grade solutions across finance, insurance, and cybersecurity sectors',
    'experience.additional': 'Additional Projects & Clients',
    
    // IzzOnLine
    'exp.izzonline.desc': 'Since 2018, I work as a freelance Java Backend Developer, supporting various companies in the design and development of enterprise applications and distributed systems. Over the years I have consolidated solid technical, architectural and leadership skills, contributing to the delivery of mission-critical solutions in the finance, insurance and cybersecurity sectors. In parallel, I designed and built SmartApiBox, a multi-module Java/Spring Boot platform developed entirely in my spare time. The platform integrates: plugin-based architecture for AI service orchestration, advanced authentication (JWT + OAuth2), Stripe integration for subscription and consumption billing, extensible plugin system through an SDK published on Maven Central, configurable API keys with support for multiple AI models (OpenAI GPT, Llama, etc.), a dedicated sandbox environment for third-party developers to create, test and publish plugins securely, cross-service workflows coordinated with the Saga pattern, ensuring consistency and reliability, AI plugins exposed both as REST APIs and MCP Tools, including a dedicated bridge for compatibility with Claude Desktop. SmartApiBox is a developer-first platform that enables building, deploying and monetizing AI-powered APIs in minutes, completely abstracting infrastructural complexity, billing and scalability. APIs become true standalone products, exposed through dedicated domains like smartqrbox.com, whatschat.smartapibox.com or quizforge.smartapibox.com. I also developed a hybrid (iOS/Android) Flutter app to organize 5-a-side football matches: Football Metchy™, and I\'m building a native Swift app for iPad/iPhone: CodePilot, a mini IDE to develop on iPad with integrated AI Agents.',
    'exp.izzonline.h1': 'Developed AI-based REST APIs using Spring AI, Model Context Protocol (MCP) and LLM providers like OpenAI and Ollama',
    'exp.izzonline.h2': 'Adopted Saga patterns and event-driven architectures to orchestrate distributed workflows',
    'exp.izzonline.h3': 'Designed modular plugin-based architectures with dynamic discovery, versioning and sandbox/production isolation',
    'exp.izzonline.h4': 'Integrated secure authentication and authorization with Spring Security, Keycloak, OAuth2, JWT, SAML2 and LDAP',
    'exp.izzonline.h5': 'Built CI/CD pipelines through GitLab and deployment of containerized workloads with Docker, Kubernetes and Helm',
    'exp.izzonline.h6': 'Designed and optimized multi-tenant backend platforms with advanced usage tracking, caching and granular access control',
    
    // AGM Solutions (for Engineering) – LNG Decision Support
    'exp.agmlng.desc': 'Design and development of a decision support platform for LNG operations optimization, designed as a foundation for advanced forecasting and optimization models.',
    'exp.agmlng.h1': 'Definition and implementation of a simulation engine (Python) for LNG cargo planning, managing real-world constraints (capacity, berth availability, maintenance windows, regasification rates)',
    'exp.agmlng.h2': 'Development of a Java backend (Spring Boot) for simulation orchestration and enterprise data integration (SQL Server), exposing REST APIs for what-if scenarios',
    'exp.agmlng.h3': 'Design of a realistic simulation model based on multi-day unloading and dynamic inventory, foundation for forecasting and optimization models',
    'exp.agmlng.h4': 'Implementation of cumulative scenario analysis (baseline vs scenario) with support for progressive decisions (add, edit, replan, override)',
    'exp.agmlng.h5': 'Development of an interactive dashboard (Next.js, TypeScript) for real-time visualization and decision explainability',
    'exp.agmlng.h6': 'Architecture designed for the integration of ML models (demand forecasting, multi-objective optimization) and digital twin simulations',

    // AGM Solutions (for Engineering) – NCIS Gas
    'exp.agmeng.desc': 'Developed one of the core microservices of the NCIS (National Comprehensive Information System) for the operational management of the natural gas transmission network, covering the full lifecycle of energy transactions and nominations.',
    'exp.agmeng.h1': 'Design and development of a Java enterprise microservice (Java 21, Spring Boot 3.x) for managing gas flows (buy/sell), hourly nominations and energy allocations',
    'exp.agmeng.h2': 'Modeling and orchestration of the complete nomination lifecycle (NOMINT, DELORD) with multi-version XML support, XSD validation and evolutionary format management',
    'exp.agmeng.h3': 'Real-time integration with SCADA systems for metering data acquisition and calculation of imbalances, DIP allocations and operational pricing',
    'exp.agmeng.h4': 'Integration with European market platforms (RBP, PRISMA) via REST APIs and asynchronous flows, ensuring data consistency and synchronization',
    'exp.agmeng.h5': 'Implementation of cluster-aware distributed jobs (Quartz + ShedLock) for XML polling, external system synchronization and real-time notifications',
    'exp.agmeng.h6': 'Inter-service communication via Spring Cloud OpenFeign to core microservices',
    'exp.agmeng.h7': 'Enterprise security implementation with OAuth2 (client credentials) and AWS Cognito federation, with JWT validation and multi-tenant management',
    'exp.agmeng.h8': 'Complete audit trail via Hibernate Envers and real-time notifications via WebSocket (STOMP/SockJS)',
    'exp.agmeng.h9': 'Document management (XML/CSV/Excel) with Apache POI and versioning on S3',

    // AGM Solutions (for Generali)
    'exp.agm.desc': 'Team Leader of a cybersecurity project focused on vulnerability assessment and management, including questionnaire assessment systems, remediation flows and security incident management tools.',
    'exp.agm.h1': 'Technical team coordination and supervision of the entire project in the cybersecurity domain, ensuring quality, security and operational continuity',
    'exp.agm.h2': 'Design and configuration of CI/CD pipelines for heterogeneous environments: Windows/WildFly stack and Linux/Kubernetes platform',
    'exp.agm.h3': 'Integration of external enterprise systems for vulnerability scanning, digital signature and incident management (Qualys, Namirial, Archer, ServiceNow) via REST APIs and SOAP services',
    'exp.agm.h4': 'Advanced configuration of GitLab CI and gitlab-runner, with container orchestration, automated builds and multi-environment deployment',
    
    // Deutsche Bank
    'exp.deutsche.desc': 'Involved in the development of payment services compliant with the PSD2 standard, contributing to the modernization of digital banking infrastructure.',
    'exp.deutsche.h1': 'Design and development of PSD2-compliant payment services, including SCA (Strong Customer Authentication) flows, consent management and open banking integration',
    'exp.deutsche.h2': 'Adoption of cloud technologies and serverless architectures, with particular attention to scalability, security and reliability of payment operations',
    
    // Sorint Lab
    'exp.sorint.desc': 'Participated in numerous internal and IT consulting projects, contributing to the development of proprietary software suites and enterprise applications for the financial sector.',
    'exp.sorint.h1': 'Developed a portfolio application for London Stock Exchange and Bit Market Services, contributing to performance, reliability and integration with financial market core systems',
    'exp.sorint.h2': 'Supervised and managed minor projects as Project Manager, coordinating teams and ensuring on-time delivery',
    'exp.sorint.h3': 'Internal trainer on Java, Spring Framework, Hibernate and jQuery for new hires and junior resources',
    'exp.sorint.h4': 'Implemented task planning and assignment modules, improving internal processes and operational workflows',
    
    // Other Projects
    'exp.mbe.desc': 'Developed centralized billing tool for company branches',
    'exp.sky.desc': 'Developed encrypted password storage tool for Sky Italia systems',
    'exp.ubi.desc': 'Performance improvement and technology modernization of existing applications',
    'exp.borsa.desc': 'Development and integration of web applications for London Stock Exchange',

    // Education
    'education.badge': 'Education',
    'education.title': 'Education',
    'edu.zenale.degree': 'Diploma in Business Management Operator',
    'edu.paleocapa.degree': 'Diploma in Computer Science',

    // Contact
    'contact.badge': 'Get in Touch',
    'contact.title': 'Let\'s Work Together',
    'contact.subtitle': 'Feel free to reach out for collaborations, consulting opportunities, or just to say hello',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'Email',
    'contact.social': 'Connect on Social Media',
    'contact.footer.rights': 'All rights reserved.',
    'contact.qr.alt': 'QR code to contact Stefania Izzo',
    'contact.cta.title': 'Ready to collaborate?',
    'contact.cta.text': 'I\'m currently available for freelance projects and consulting opportunities. Whether you need help with microservices architecture, AI integration, or enterprise backend development, I\'d love to hear from you.',
    
    // Toast messages
    'toast.email.success': 'Email client opened successfully',
    'toast.email.error': 'Could not open email client',
    
    // PDF Export
    'pdf.download': 'Download CV as PDF',
    'pdf.generating': 'Generating PDF...',
    'pdf.success': 'CV downloaded successfully!',
    'pdf.error': 'Error generating PDF. Please try again.',

    // Print CV
    'cv.print': 'Print CV',
    'cv.back': 'Back to site',
    'cv.contact': 'Contact',
    'cv.summary': 'Professional Summary',
    'cv.experience': 'Professional Experience',
    'cv.otherProjects': 'Additional Projects & Clients',
    'cv.education': 'Education',
    'cv.skills': 'Technical Skills',
    'cv.springExpertise': 'Spring Framework Expertise',
    'cv.include': 'Include',
    'cv.exclude': 'Exclude',
    'cv.minimize': 'Minimize',
    'cv.expand': 'Expand',
    'cv.present': 'Present',
    'cv.yrs': 'yrs',
    'cv.mos': 'mos',
    'cv.month.jan': 'Jan',
    'cv.month.feb': 'Feb',
    'cv.month.mar': 'Mar',
    'cv.month.apr': 'Apr',
    'cv.month.may': 'May',
    'cv.month.jun': 'Jun',
    'cv.month.jul': 'Jul',
    'cv.month.aug': 'Aug',
    'cv.month.sep': 'Sep',
    'cv.month.oct': 'Oct',
    'cv.month.nov': 'Nov',
    'cv.month.dec': 'Dec',
  },
  it: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'Chi Sono',
    'nav.skills': 'Competenze',
    'nav.experience': 'Esperienza',
    'nav.education': 'Formazione',
    'nav.contact': 'Contatti',
    
    // Hero
    'hero.greeting': 'Ciao, sono',
    'hero.role': 'AI Platform Architect & Senior Java Engineer',
    'hero.subtitle': 'Building AI APIs & production-ready AI products (LLMs, Spring AI, OpenAI, Java/Python)',
    'hero.cta.contact': 'Contattami',
    'hero.cta.experience': 'Vedi Esperienza',
    
    // Summary
    'summary.badge': 'Chi Sono',
    'summary.title': 'Profilo Professionale',
    'summary.content': 'Senior Java Developer e AI Platform Architect con quasi 20 anni di esperienza nella progettazione e sviluppo di applicazioni enterprise, sistemi distribuiti e piattaforme backend mission-critical. Specializzata nell\'ecosistema Spring, architetture a microservizi, integrazione AI/LLM e soluzioni ML-ready. Combina competenze backend enterprise con progettazione di sistemi AI, simulazione, ottimizzazione e Digital Twin per realizzare soluzioni scalabili e utilizzabili in produzione. Esperienza nella guida di team tecnici e nella delivery di soluzioni per i settori finanza, assicurazioni, cybersecurity ed energia.',
    
    // Skills
    'skills.badge': 'Competenze Tecniche',
    'skills.title': 'Competenze & Tecnologie',
    'skills.subtitle': 'Esperienza completa nell\'ecosistema Java moderno e nelle tecnologie enterprise',
    'skills.tab.overview': 'Panoramica',
    'skills.tab.spring': 'Ecosistema Spring',
    'skills.spring.title': 'Competenze Spring Framework',
    'skills.spring.subtitle': 'Conoscenza approfondita dell\'ecosistema Spring',
    
    // Skill Categories
    'skills.cat.languages': 'Linguaggi & Framework',
    'skills.cat.architecture': 'Backend & Architecture',
    'skills.cat.ai': 'AI / LLM / ML',
    'skills.cat.security': 'Security',
    'skills.cat.databases': 'Database & Persistence',
    'skills.cat.messaging': 'Messaging & Realtime',
    'skills.cat.devops': 'DevOps & Cloud',
    'skills.cat.frontend': 'Frontend & Mobile',
    
    // Experience
    'experience.badge': 'Percorso Professionale',
    'experience.title': 'Esperienza Professionale',
    'experience.subtitle': '15+ anni di soluzioni enterprise di alto livello nei settori finanza, assicurazioni e cybersecurity',
    'experience.additional': 'Progetti & Clienti Aggiuntivi',
    
    // IzzOnLine
    'exp.izzonline.desc': 'Dal 2018 lavora come Java Backend Developer freelance e AI Platform Architect, supportando aziende nella progettazione e nello sviluppo di applicazioni enterprise, microservizi e sistemi distribuiti. In parallelo ha progettato e realizzato SmartApiBox, una piattaforma multi-modulo Java/Spring Boot per costruire, distribuire e monetizzare API alimentate da AI, astraendo infrastruttura, billing, autenticazione e integrazione con i provider LLM. SmartApiBox è anche una piattaforma developer-first: ogni API può diventare un prodotto standalone esposto su domini dedicati come smartqrbox.com, whatschat.smartapibox.com o quizforge.smartapibox.com.',
    'exp.izzonline.h1': 'Architettura plugin-based per orchestrazione di servizi AI con discovery dinamico, versioning e isolamento sandbox/produzione',
    'exp.izzonline.h2': 'API AI esposte sia come REST API sia come MCP Tools, con bridge dedicato per la compatibilità con Claude Desktop',
    'exp.izzonline.h3': 'Integrazione di provider LLM tramite Spring AI: OpenAI, Ollama, Llama e modelli configurabili per tenant',
    'exp.izzonline.h4': 'SDK plugin pubblicato su Maven Central, con sandbox per sviluppatori terzi e workflow di pubblicazione/validazione',
    'exp.izzonline.h5': 'Sicurezza enterprise: Spring Security, JWT/OAuth2, API key management e tracking granulare dell\'utilizzo per multi-tenant',
    'exp.izzonline.h6': 'Billing Stripe con sottoscrizioni e consumo a crediti; orchestrazione cross-service con pattern Saga ed event-driven',
    'exp.izzonline.h7': 'CI/CD GitLab e deployment containerizzato con Docker, Kubernetes e Helm',
    'exp.izzonline.h8': 'Creator di Football Metchy™, app mobile Flutter (iOS/Android) per organizzazione di eventi sportivi e partite di calcetto, progettata con evoluzione verso ranking dinamico, player matching intelligente e futura integrazione di modelli predittivi',
    'exp.izzonline.h9': 'Creator di CodePilot, app nativa Swift per iPad/iPhone: AI-powered iPad IDE per sviluppo remoto da iPad, con AI Agent integrati e remote coding workflow',
    
    // AGM Solutions (for Engineering) – LNG Decision Support
    'exp.agmlng.desc': 'Progettazione e sviluppo di una piattaforma di decision support per l\'ottimizzazione delle operazioni LNG, basata su un motore di simulazione Digital Twin che riproduce vincoli operativi reali (capacity, berth availability, maintenance windows, regasification rates). Architettura predisposta come fondazione per modelli di forecasting e ottimizzazione multi-obiettivo, e per scenari what-if a supporto di decisioni operative progressive.',
    'exp.agmlng.h1': 'Motore di simulazione Python per la pianificazione dei cargo LNG, modellato su unloading multi-day e inventory dinamico — forecasting-ready e optimization-ready',
    'exp.agmlng.h2': 'Backend Java/Spring Boot per orchestrazione delle simulazioni e integrazione dati enterprise (SQL Server), con API REST per scenari what-if',
    'exp.agmlng.h3': 'Scenario analysis cumulativa (baseline vs scenario) a supporto di decisioni progressive: add, edit, replan, override',
    'exp.agmlng.h4': 'Architettura predisposta per integrazione di modelli ML (forecasting domanda, ottimizzazione multi-obiettivo) e digital twin simulations',
    'exp.agmlng.h5': 'Dashboard interattiva Next.js / TypeScript per visualizzazione real-time, scenario comparison e decision explainability',
    'exp.agmlng.h6': 'Collaborazione con stakeholder di business e team Engineering per validazione dei modelli e allineamento ai vincoli operativi reali',

    // AGM Solutions (for Engineering) – NCIS Gas
    'exp.agmeng.desc': 'Sviluppo di uno dei microservizi core del sistema NCIS (National Comprehensive Information System) per la gestione operativa della rete di trasmissione del gas naturale, coprendo l\'intero ciclo di vita delle transazioni energetiche e delle nomination.',
    'exp.agmeng.h1': 'Microservizio enterprise Java 21 / Spring Boot 3 per la gestione di flussi gas (buy/sell), nomination orarie e allocazioni energetiche',
    'exp.agmeng.h2': 'Ciclo completo delle nomination (NOMINT, DELORD) con supporto multi-versione XML, validazione XSD ed evoluzione dei formati',
    'exp.agmeng.h3': 'Integrazione real-time con sistemi SCADA per acquisizione dati di misura, sbilanciamenti, allocazioni DIP e pricing operativo',
    'exp.agmeng.h4': 'Integrazione con piattaforme di mercato europee (RBP, PRISMA) tramite API REST e flussi asincroni, con consistenza e sincronizzazione garantite',
    'exp.agmeng.h5': 'Job distribuiti cluster-aware (Quartz + ShedLock) per polling XML, sincronizzazione sistemi esterni e notifiche real-time',
    'exp.agmeng.h6': 'Comunicazione inter-servizio via Spring Cloud OpenFeign verso microservizi core',
    'exp.agmeng.h7': 'Sicurezza enterprise OAuth2 (client credentials) con federazione AWS Cognito, validazione JWT e gestione multi-tenant',
    'exp.agmeng.h8': 'Audit trail completo con Hibernate Envers, notifiche real-time via WebSocket (STOMP/SockJS) e gestione documentale (XML/CSV/Excel) con Apache POI e versionamento su S3',
    'exp.agmeng.h9': '',

    // AGM Solutions (for Generali)
    'exp.agm.desc': 'Team Leader & Technical Ambassador di un progetto cybersecurity dedicato a vulnerability assessment & management, incluse piattaforme di questionnaire assessment, flussi di remediation e strumenti per l\'incident management.',
    'exp.agm.h1': 'Coordinamento tecnico del team e supervisione end-to-end del progetto cybersecurity, garantendo qualità, sicurezza e continuità operativa',
    'exp.agm.h2': 'Pipeline CI/CD per ambienti eterogenei: stack Windows/WildFly e piattaforma Linux/Kubernetes',
    'exp.agm.h3': 'Integrazione di sistemi enterprise per vulnerability scanning, firma digitale e incident management (Qualys, Namirial, Archer, ServiceNow) via REST e SOAP',
    'exp.agm.h4': 'Configurazione avanzata GitLab CI / gitlab-runner con orchestrazione container, build automatizzate e deployment multi-ambiente',

    // Deutsche Bank
    'exp.deutsche.desc': 'Sviluppo di servizi di pagamento conformi allo standard PSD2, contribuendo alla modernizzazione dell\'infrastruttura di banking digitale.',
    'exp.deutsche.h1': 'Servizi di pagamento PSD2-compliant con flussi SCA (Strong Customer Authentication), gestione consensi e integrazione open banking',
    'exp.deutsche.h2': 'Adozione di tecnologie cloud e architetture serverless con focus su scalabilità, sicurezza e affidabilità delle operazioni di pagamento',

    // Sorint Lab
    'exp.sorint.desc': 'Java Developer & Technical Lead su numerosi progetti interni e di consulenza IT, con contributi a suite software proprietarie e applicazioni enterprise per il settore finanziario.',
    'exp.sorint.h1': 'Sviluppo dell\'applicazione di portafoglio per London Stock Exchange e Bit Market Services, con focus su performance, affidabilità e integrazione con i sistemi core dei mercati finanziari',
    'exp.sorint.h2': 'Project management di progetti minori: coordinamento team e delivery nei tempi',
    'exp.sorint.h3': 'Formazione interna su Java, Spring Framework, Hibernate e jQuery per nuovi assunti e risorse junior',
    'exp.sorint.h4': 'Moduli di task planning e assegnazione attività a supporto di processi e workflow operativi interni',
    
    // Other Projects
    'exp.mbe.desc': 'Sviluppato strumento di fatturazione centralizzato per le filiali aziendali',
    'exp.sky.desc': 'Sviluppato strumento di archiviazione password crittografate per i sistemi Sky Italia',
    'exp.ubi.desc': 'Miglioramento delle performance e modernizzazione tecnologica delle applicazioni esistenti',
    'exp.borsa.desc': 'Sviluppo e integrazione di applicazioni web per London Stock Exchange',

    // Education
    'education.badge': 'Formazione',
    'education.title': 'Formazione',
    'edu.zenale.degree': 'Diploma in Operatore della Gestione Aziendale',
    'edu.paleocapa.degree': 'Diploma in Informatica',

    // Contact
    'contact.badge': 'Contattami',
    'contact.title': 'Lavoriamo Insieme',
    'contact.subtitle': 'Non esitare a contattarmi per collaborazioni, opportunità di consulenza o semplicemente per salutare',
    'contact.whatsapp': 'WhatsApp',
    'contact.email': 'Email',
    'contact.social': 'Collegati sui Social',
    'contact.footer.rights': 'Tutti i diritti riservati.',
    'contact.qr.alt': 'QR code per contattare Stefania Izzo',
    'contact.cta.title': 'Pronto a collaborare?',
    'contact.cta.text': 'Sono attualmente disponibile per progetti freelance e opportunità di consulenza. Se hai bisogno di aiuto con architetture a microservizi, integrazione AI o sviluppo backend enterprise, sarò felice di sentirti.',
    
    // Toast messages
    'toast.email.success': 'Client email aperto con successo',
    'toast.email.error': 'Impossibile aprire il client email',
    
    // PDF Export
    'pdf.download': 'Scarica il CV come PDF',
    'pdf.generating': 'Generazione PDF...',
    'pdf.success': 'CV scaricato con successo!',
    'pdf.error': 'Errore nella generazione del PDF. Per favore riprova.',

    // Print CV
    'cv.print': 'Stampa CV',
    'cv.back': 'Torna al sito',
    'cv.contact': 'Contatti',
    'cv.summary': 'Profilo Professionale',
    'cv.experience': 'Esperienza Professionale',
    'cv.otherProjects': 'Progetti & Clienti Aggiuntivi',
    'cv.education': 'Formazione',
    'cv.skills': 'Competenze Tecniche',
    'cv.springExpertise': 'Competenze Spring Framework',
    'cv.include': 'Includi',
    'cv.exclude': 'Escludi',
    'cv.minimize': 'Minimizza',
    'cv.expand': 'Espandi',
    'cv.present': 'Presente',
    'cv.yrs': 'anni',
    'cv.mos': 'mesi',
    'cv.month.jan': 'Gen',
    'cv.month.feb': 'Feb',
    'cv.month.mar': 'Mar',
    'cv.month.apr': 'Apr',
    'cv.month.may': 'Mag',
    'cv.month.jun': 'Giu',
    'cv.month.jul': 'Lug',
    'cv.month.aug': 'Ago',
    'cv.month.sep': 'Set',
    'cv.month.oct': 'Ott',
    'cv.month.nov': 'Nov',
    'cv.month.dec': 'Dic',
  },
};

const STORAGE_KEY = 'izzonline-language';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('it');

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (stored === 'it' || stored === 'en') {
        setLanguageState(stored);
      }
    } catch {
      /* localStorage unavailable */
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* localStorage unavailable */
    }
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}