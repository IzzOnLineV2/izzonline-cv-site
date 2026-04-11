import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-slate-800/50 dark:bg-slate-800/50 light:bg-white rounded-full p-1 border border-slate-700 dark:border-slate-700 light:border-purple-300 shadow-sm">
      <Globe className="w-4 h-4 text-slate-400 dark:text-slate-400 light:text-purple-600 ml-2" />
      <motion.button
        onClick={() => setLanguage('it')}
        className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
          language === 'it'
            ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
            : 'text-slate-400 dark:text-slate-400 light:text-slate-700 hover:text-slate-200 dark:hover:text-slate-200 light:hover:text-purple-600'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        IT
      </motion.button>
      <motion.button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
          language === 'en'
            ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
            : 'text-slate-400 dark:text-slate-400 light:text-slate-700 hover:text-slate-200 dark:hover:text-slate-200 light:hover:text-purple-600'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        EN
      </motion.button>
    </div>
  );
}
