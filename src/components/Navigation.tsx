'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import TerminalPrompt from './TerminalPrompt';

const navItems = [
  { href: '#about', label: 'about.txt' },
  { href: '#skills', label: 'skills/' },
  { href: '#projects', label: 'projects/' },
  { href: '#experience', label: 'experience.log' },
  { href: '#talks', label: 'talks/' },
  { href: '#youtube', label: 'youtube/' },
  { href: '#blog', label: 'blog/' },
  { href: '#certifications', label: 'certs/' },
  { href: '#contact', label: 'contact.txt' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="terminal-section sticky top-4 z-50 bg-terminal-bg/95 backdrop-blur-sm">
      <TerminalPrompt command="ls -la" />
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-wrap gap-4 ml-4">
        {navItems.map((item, index) => (
          <motion.button
            key={item.href}
            onClick={() => scrollToSection(item.href)}
            className="terminal-link px-3 py-2 border border-gray-600 hover:bg-cyan-400 hover:text-black transition-all duration-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: isMounted ? index * 0.1 : 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {item.label}
          </motion.button>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden ml-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="terminal-link p-2 border border-gray-600 hover:bg-cyan-400 hover:text-black transition-all duration-300"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {isOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 bg-black border border-gray-600 mt-2 p-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="terminal-link text-left px-3 py-2 border border-gray-600 hover:bg-cyan-400 hover:text-black transition-all duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
