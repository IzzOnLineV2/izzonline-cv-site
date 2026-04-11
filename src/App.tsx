import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Summary } from './components/Summary';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Toaster } from './components/ui/sonner';
const faviconImage = 'https://assets.izzonline.it/images/logo.png';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Set favicon
  useEffect(() => {
    const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link');
    link.type = 'image/png';
    link.rel = 'icon';
    link.href = faviconImage;
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-slate-100 dark:bg-gradient-to-br dark:from-slate-950 dark:via-purple-950 dark:to-slate-950 dark:text-slate-100 light:bg-gradient-to-br light:from-white light:via-purple-50/30 light:to-pink-50/30 light:text-slate-900">
          <Header activeSection={activeSection} />
          <main>
            <Hero />
            <Summary />
            <Skills />
            <Experience />
            <Contact />
          </main>
          <Toaster />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}