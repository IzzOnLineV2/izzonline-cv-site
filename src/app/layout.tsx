import type { Metadata } from 'next';
import { Providers } from './providers';
import '../index.css';

const SITE_URL = 'https://izzonline.it';
const DESCRIPTION =
  'Stefania Izzo — AI Platform Architect & Senior Java Engineer. Quasi 20 anni di esperienza nella progettazione di sistemi enterprise, microservizi, AI APIs e piattaforme ML-ready (Spring AI, OpenAI, Ollama, MCP, Digital Twin). Freelance da Cologno Al Serio (BG), Italia.';
const SHORT_DESCRIPTION =
  'AI Platform Architect & Senior Java Engineer — Spring, microservizi, AI APIs, LLM, Digital Twin. Freelance Italia.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Stefania Izzo — AI Platform Architect & Senior Java Engineer',
    template: '%s | Stefania Izzo',
  },
  description: DESCRIPTION,
  keywords: [
    'Stefania Izzo',
    'IzzOnLine',
    'SmartApiBox',
    'AI Platform Architect',
    'Senior Java Developer',
    'Senior Java Engineer',
    'Java Architect',
    'Spring Boot',
    'Spring AI',
    'Spring Cloud',
    'OpenAI',
    'Ollama',
    'LLM',
    'Model Context Protocol',
    'MCP',
    'AI APIs',
    'Microservices',
    'Digital Twin',
    'XGBoost',
    'Forecasting',
    'Java 21',
    'Python',
    'Microservizi',
    'Freelance Java',
    'Bergamo',
    'Italia',
  ],
  authors: [{ name: 'Stefania Izzo', url: SITE_URL }],
  creator: 'Stefania Izzo',
  publisher: 'IzzOnLine di Stefania Izzo',
  icons: {
    icon: 'https://assets.izzonline.it/images/logo.png',
    apple: 'https://assets.izzonline.it/images/logo.png',
  },
  openGraph: {
    title: 'Stefania Izzo — AI Platform Architect & Senior Java Engineer',
    description: SHORT_DESCRIPTION,
    url: SITE_URL,
    siteName: 'IzzOnLine',
    images: [
      {
        url: 'https://assets.izzonline.it/images/og-izzonline.png',
        width: 1200,
        height: 630,
        alt: 'Stefania Izzo — AI Platform Architect & Senior Java Engineer',
      },
    ],
    locale: 'it_IT',
    alternateLocale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stefania Izzo — AI Platform Architect & Senior Java Engineer',
    description: SHORT_DESCRIPTION,
    images: ['https://assets.izzonline.it/images/og-izzonline.png'],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  category: 'technology',
};

const personLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}#person`,
  name: 'Stefania Izzo',
  givenName: 'Stefania',
  familyName: 'Izzo',
  jobTitle: 'AI Platform Architect & Senior Java Engineer',
  description:
    'Senior Java Developer e AI Platform Architect con quasi 20 anni di esperienza in sistemi enterprise, microservizi, AI APIs, LLM orchestration e architetture ML-ready (Digital Twin, forecasting, optimization).',
  url: SITE_URL,
  email: 'mailto:izzonline@gmail.com',
  telephone: '+39 339 187 63 63',
  image: 'https://assets.izzonline.it/images/stefy.png',
  gender: 'Female',
  nationality: { '@type': 'Country', name: 'Italy' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cologno Al Serio',
    addressRegion: 'BG',
    postalCode: '24055',
    addressCountry: 'IT',
  },
  worksFor: [
    { '@id': `${SITE_URL}#izzonline` },
    { '@id': 'https://smartapibox.com#org' },
  ],
  hasOccupation: {
    '@type': 'Occupation',
    name: 'AI Platform Architect & Senior Java Engineer',
    occupationLocation: {
      '@type': 'Country',
      name: 'Italy',
    },
    skills: [
      'Java 21',
      'Spring Boot',
      'Spring AI',
      'Microservices',
      'LLM Orchestration',
      'Model Context Protocol',
      'OpenAI',
      'Ollama',
      'Digital Twin',
      'Forecasting',
      'Optimization',
      'XGBoost',
      'Python',
      'TypeScript',
      'Next.js',
      'Kubernetes',
      'Docker',
    ],
  },
  knowsAbout: [
    'Java',
    'Java 21',
    'Spring Boot',
    'Spring Framework',
    'Spring AI',
    'Spring Cloud',
    'Spring Security',
    'Python',
    'TypeScript',
    'Next.js',
    'Microservices',
    'Hexagonal Architecture',
    'Domain-Driven Design',
    'Event-Driven Architecture',
    'Saga Pattern',
    'OpenAI',
    'Ollama',
    'Llama',
    'LLM',
    'Model Context Protocol',
    'AI APIs',
    'Digital Twin',
    'XGBoost',
    'Forecasting',
    'Optimization',
    'OAuth2',
    'JWT',
    'AWS Cognito',
    'PostgreSQL',
    'SQL Server',
    'MongoDB',
    'Apache Kafka',
    'Docker',
    'Kubernetes',
    'GitLab CI/CD',
  ],
  alumniOf: [
    {
      '@type': 'EducationalOrganization',
      name: 'ITIS Pietro Paleocapa',
      description: 'Diploma in Informatica',
    },
    {
      '@type': 'EducationalOrganization',
      name: 'ISIS Zenale e Butinone',
      description: 'Diploma in Operatore della Gestione Aziendale',
    },
  ],
  sameAs: [
    'https://www.linkedin.com/in/st3fania/',
    'https://github.com/IzzOnLineV2',
    'https://www.facebook.com/izzonline',
    'https://www.instagram.com/izzonline',
    'https://smartapibox.com',
  ],
};

const izzonlineOrgLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}#izzonline`,
  name: 'IzzOnLine di Stefania Izzo',
  alternateName: 'IzzOnLine',
  url: SITE_URL,
  logo: 'https://assets.izzonline.it/images/logo.png',
  email: 'izzonline@gmail.com',
  telephone: '+39 339 187 63 63',
  vatID: 'IT04323170169',
  founder: { '@id': `${SITE_URL}#person` },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cologno Al Serio',
    addressRegion: 'BG',
    postalCode: '24055',
    addressCountry: 'IT',
  },
  sameAs: [
    'https://www.linkedin.com/in/st3fania/',
    'https://github.com/IzzOnLineV2',
  ],
};

const smartapiboxOrgLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://smartapibox.com#org',
  name: 'SmartApiBox',
  url: 'https://smartapibox.com',
  description:
    'Piattaforma developer-first per costruire, distribuire e monetizzare API alimentate da AI: plugin-based architecture, SDK Maven Central, MCP Tools, integrazione LLM (OpenAI, Ollama).',
  founder: { '@id': `${SITE_URL}#person` },
  brand: ['SmartApiBox', 'SmartQRBox', 'WhatsChat', 'QuizForge'],
};

const profilePageLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${SITE_URL}#profilepage`,
  url: SITE_URL,
  name: 'Stefania Izzo — AI Platform Architect & Senior Java Engineer',
  description: DESCRIPTION,
  inLanguage: 'it-IT',
  mainEntity: { '@id': `${SITE_URL}#person` },
  about: { '@id': `${SITE_URL}#person` },
};

const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}#website`,
  url: SITE_URL,
  name: 'IzzOnLine di Stefania Izzo',
  inLanguage: ['it-IT', 'en-US'],
  publisher: { '@id': `${SITE_URL}#izzonline` },
};

const allLd = {
  '@context': 'https://schema.org',
  '@graph': [personLd, izzonlineOrgLd, smartapiboxOrgLd, profilePageLd, websiteLd],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body style={{ backgroundColor: '#020617' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(allLd) }}
        />
        <noscript>
          <div style={{ padding: '2rem', color: '#0f172a', background: '#ffffff' }}>
            <h1>Stefania Izzo — AI Platform Architect &amp; Senior Java Engineer</h1>
            <p>
              Senior Java Developer e AI Platform Architect freelance basata a Cologno Al Serio (BG),
              Italia. Quasi 20 anni di esperienza nella progettazione di sistemi enterprise,
              microservizi, AI APIs e piattaforme ML-ready (Spring AI, OpenAI, Ollama, MCP, Digital Twin).
              Founder di SmartApiBox, creator di Football Metchy e CodePilot.
            </p>
            <h2>Contatti</h2>
            <ul>
              <li>Email: <a href="mailto:izzonline@gmail.com">izzonline@gmail.com</a></li>
              <li>Telefono: +39 339 187 63 63</li>
              <li>LinkedIn: <a href="https://www.linkedin.com/in/st3fania/">linkedin.com/in/st3fania</a></li>
              <li>GitHub: <a href="https://github.com/IzzOnLineV2">github.com/IzzOnLineV2</a></li>
            </ul>
            <h2>Competenze principali</h2>
            <p>
              Java 17/21, Spring Boot, Spring AI, Spring Cloud, Microservices, Saga Pattern,
              Event-Driven Architecture, OpenAI, Ollama, Model Context Protocol (MCP), LLM Orchestration,
              Digital Twin, XGBoost, Forecasting, Optimization, Python, TypeScript, Next.js, OAuth2, JWT,
              AWS Cognito, Apache Kafka, Docker, Kubernetes, GitLab CI/CD, PostgreSQL, MongoDB.
            </p>
            <p>
              Per il CV completo visita <a href="https://izzonline.it/cv">/cv</a>.
            </p>
          </div>
        </noscript>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
