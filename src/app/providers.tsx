'use client';

import { LanguageProvider } from '../contexts/LanguageContext';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '../components/ui/sonner';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
        {children}
        <Toaster />
      </ThemeProvider>
    </LanguageProvider>
  );
}
