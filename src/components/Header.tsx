import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-luxury-black/95 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-wedding-gold to-wedding-copper rounded-lg flex items-center justify-center">
              <span className="font-tamil text-lg font-bold text-luxury-black">🏛️</span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-lg font-bold text-wedding-gold leading-none">
                SKANDA EVENTS
              </span>
              <span className="font-sans text-xs text-wedding-copper tracking-widest">
                WE CREATE YOU CELEBRATE
              </span>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-12">
            <a
              href="#about"
              className="text-white/70 hover:text-wedding-gold transition-colors duration-300 font-light"
            >
              About
            </a>
            <a
              href="#services"
              className="text-white/70 hover:text-wedding-gold transition-colors duration-300 font-light"
            >
              Services
            </a>
            <a
              href="#stories"
              className="text-white/70 hover:text-wedding-gold transition-colors duration-300 font-light"
            >
              Stories
            </a>
            <a
              href="#contact"
              className="btn-primary text-sm"
            >
              Get In Touch
            </a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 space-y-4 border-t border-white/10 pt-6">
            <a
              href="#about"
              className="block text-white/70 hover:text-wedding-gold transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              className="block text-white/70 hover:text-wedding-gold transition-colors"
            >
              Services
            </a>
            <a
              href="#stories"
              className="block text-white/70 hover:text-wedding-gold transition-colors"
            >
              Stories
            </a>
            <a
              href="#contact"
              className="block w-full btn-primary mt-4 text-center"
            >
              Get In Touch
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
