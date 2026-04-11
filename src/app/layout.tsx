import type { Metadata } from 'next';
import { Providers } from './providers';
import '../index.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://izzonline.it'),
  title: 'IzzOnLine di Stefania Izzo — AI/ML Engineer & Senior Java Backend',
  description:
    'Stefania Izzo — AI/ML Engineer & Senior Java Backend | Building AI APIs & Products with LLMs (Spring AI, OpenAI, Java/Python). 15+ anni di esperienza enterprise. Cologno Al Serio (BG), Italia.',
  keywords: [
    'Stefania Izzo',
    'IzzOnLine',
    'AI Engineer',
    'ML Engineer',
    'Java Developer',
    'Senior Backend Developer',
    'Spring AI',
    'OpenAI',
    'LLM',
    'Spring Boot',
    'Python',
    'Microservizi',
    'Italia',
  ],
  authors: [{ name: 'Stefania Izzo', url: 'https://izzonline.it' }],
  creator: 'Stefania Izzo',
  icons: {
    icon: 'https://assets.izzonline.it/images/logo.png',
    apple: 'https://assets.izzonline.it/images/logo.png',
  },
  openGraph: {
    title: 'IzzOnLine di Stefania Izzo',
    description:
      'AI/ML Engineer & Senior Java Backend | Building AI APIs & Products with LLMs',
    url: 'https://izzonline.it',
    siteName: 'IzzOnLine',
    images: [
      {
        url: 'https://assets.izzonline.it/images/stefy.png',
        width: 400,
        height: 400,
        alt: 'Stefania Izzo',
      },
    ],
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'IzzOnLine di Stefania Izzo',
    description:
      'AI/ML Engineer & Senior Java Backend | Building AI APIs & Products with LLMs',
    images: ['https://assets.izzonline.it/images/stefy.png'],
  },
  alternates: {
    canonical: 'https://izzonline.it',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: 'Stefania Izzo',
    jobTitle: 'AI/ML Engineer & Senior Java Backend',
    url: 'https://izzonline.it',
    email: 'izzonline@gmail.com',
    telephone: '+39 339 187 63 63',
    image: 'https://assets.izzonline.it/images/stefy.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cologno Al Serio',
      addressRegion: 'BG',
      addressCountry: 'IT',
    },
    sameAs: [
      'https://www.linkedin.com/in/st3fania/',
      'https://github.com/IzzOnLineV2',
      'https://www.facebook.com/izzonline',
      'https://www.instagram.com/izzonline',
    ],
    knowsAbout: [
      'Java',
      'Python',
      'Spring Boot',
      'Spring AI',
      'OpenAI',
      'LLM',
      'Machine Learning',
      'Microservices',
      'AI APIs',
      'Enterprise Architecture',
    ],
  },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
