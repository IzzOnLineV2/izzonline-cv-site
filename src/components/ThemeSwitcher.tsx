import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 dark:bg-slate-800/50 light:bg-white border border-slate-700 dark:border-slate-700 light:border-purple-300 hover:border-purple-400 transition-all shadow-sm"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <>
          <Moon size={18} className="text-purple-400" />
          <span className="text-slate-300">Dark</span>
        </>
      ) : (
        <>
          <Sun size={18} className="text-purple-600" />
          <span className="text-slate-700">Light</span>
        </>
      )}
    </button>
  );
}
