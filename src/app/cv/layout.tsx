import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CV — Stefania Izzo',
  description: 'Printable CV — Stefania Izzo, AI Platform Architect & Senior Java Engineer',
  robots: { index: false, follow: false },
};

const forceLightBodyCss = `
  html, body {
    background: #ffffff !important;
    background-color: #ffffff !important;
    background-image: none !important;
  }
  @media print {
    html, body {
      background: #ffffff !important;
      background-color: #ffffff !important;
      background-image: none !important;
    }
  }
`;

export default function CvLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: forceLightBodyCss }} />
      {children}
    </>
  );
}
