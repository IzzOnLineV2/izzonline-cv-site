import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CV — Stefania Izzo',
  description: 'Printable CV — Stefania Izzo, AI Platform Architect & Senior Java Engineer',
  robots: { index: false, follow: false },
};

export default function CvLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
