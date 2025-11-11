import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Summary } from './components/Summary';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Toaster } from './components/ui/sonner';
const faviconImage = 'https://images.unsplash.com/photo-1649091245850-71ad5a18e117?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBpY29uJTIwbG9nb3xlbnwxfHx8fDE3NjI4NTE0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-slate-100">
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
  );
}
