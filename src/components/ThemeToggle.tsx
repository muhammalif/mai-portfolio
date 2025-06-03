
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 border-2 border-black dark:border-white hover:bg-neon-yellow dark:hover:bg-neon-pink transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon size={20} className="text-black dark:text-white" />
      ) : (
        <Sun size={20} className="text-black dark:text-white" />
      )}
    </button>
  );
};

export default ThemeToggle;
