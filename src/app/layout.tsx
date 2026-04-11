import type { Metadata } from 'next';
import { Providers } from './providers';
import '../index.css';

export const metadata: Metadata = {
  title: 'IzzOnLine di Stefania Izzo',
  description: 'Senior Java Developer & AI Specialist — 15+ years of enterprise backend excellence',
  icons: {
    icon: 'https://assets.izzonline.it/images/logo.png',
  },
  openGraph: {
    title: 'IzzOnLine di Stefania Izzo',
    description: 'Senior Java Developer & AI Specialist — 15+ years of enterprise backend excellence',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
