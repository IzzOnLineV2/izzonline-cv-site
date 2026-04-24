import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeSwitcher } from './ThemeSwitcher';
import { PDFExport } from './PDFExport';

interface HeaderProps {
  activeSection: string;
}

export function Header({ activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'education', label: t('nav.education') },
    { id: 'contact', label: t('nav.contact') },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/95 dark:bg-slate-950/95 light:bg-white/95 backdrop-blur-md shadow-lg dark:shadow-lg light:shadow-purple-200/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <img 
              src="https://assets.izzonline.it/images/logo.png" 
              alt="IzzOnLine Logo" 
              className="h-10 w-auto"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => scrollToSection(item.id)}
                className={`relative transition-colors ${
                  activeSection === item.id 
                    ? 'text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text' 
                    : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-purple-600'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
            <LanguageSwitcher />
            <ThemeSwitcher />
            <PDFExport />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 dark:text-slate-300 light:text-slate-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-2 px-4 rounded transition-colors ${
                  activeSection === item.id
                    ? 'text-cyan-400 dark:text-cyan-400 light:text-purple-600 bg-cyan-400/10 dark:bg-cyan-400/10 light:bg-purple-100'
                    : 'text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-purple-600 hover:bg-slate-800/50 dark:hover:bg-slate-800/50 light:hover:bg-purple-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="mt-4 px-4">
              <LanguageSwitcher />
              <div className="mt-2">
                <ThemeSwitcher />
              </div>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}