import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 w-full bg-white dark:bg-black border-b-4 border-black dark:border-white z-50 shadow-brutal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-black text-black dark:text-white">
            MAI.
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg font-bold uppercase tracking-wide transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-neon-pink'
                    : 'text-black dark:text-white hover:text-neon-pink'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle and Social Links */}
          <div className="hidden md:flex space-x-4 items-center">
            <ThemeToggle />
            <a 
              href="mailto:malif.1006@gmail.com"
              className="p-2 border-2 border-black dark:border-white hover:bg-neon-yellow transition-colors"
            >
              <Mail size={20} className="text-black dark:text-white" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 border-2 border-black dark:border-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={24} className="text-black dark:text-white" />
            ) : (
              <Menu size={24} className="text-black dark:text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-black border-t-4 border-black dark:border-white">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block w-full text-left text-lg font-bold uppercase tracking-wide px-4 py-2 transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'text-neon-pink'
                      : 'text-black dark:text-white hover:text-neon-pink'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex space-x-4 px-4 pt-4 items-center">
                <ThemeToggle />
                <a 
                  href="https://github.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 border-2 border-black dark:border-white hover:bg-neon-cyan transition-colors"
                >
                  <Github size={20} className="text-black dark:text-white" />
                </a>
                <a 
                  href="https://linkedin.com/in/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 border-2 border-black dark:border-white hover:bg-neon-pink transition-colors"
                >
                  <Linkedin size={20} className="text-black dark:text-white" />
                </a>
                <a 
                  href="mailto:your.email@example.com"
                  className="p-2 border-2 border-black dark:border-white hover:bg-neon-yellow transition-colors"
                >
                  <Mail size={20} className="text-black dark:text-white" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar; 