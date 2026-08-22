import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on viewport
      const sections = ['hero', 'solutions', 'services', 'outcomes', 'process', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Services', href: '#services' },
    { label: 'Outcomes', href: '#outcomes' },
    { label: 'Process', href: '#process' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-nexus-sm border-b border-slate-200/80 py-3.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Large Direct Brand Logos: Icon + Name (No Background Box) */}
        <a href="#hero" className="flex items-center gap-3 sm:gap-4 group py-1">
          {/* 1. Compass Paper Plane Icon Image (Big) */}
          <img
            src="/logo-icon.png"
            alt="PilotNemo Compass Icon"
            className="h-10 sm:h-12 md:h-13 w-auto object-contain rounded-xl shadow-sm group-hover:scale-105 transition-transform duration-300"
          />
          {/* 2. Stylized PILOTNEMO Name Image (Big) */}
          <img
            src="/logo-name.png"
            alt="PILOTNEMO"
            className="h-7 sm:h-9 md:h-10 w-auto object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200/60 shadow-sm">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full ${
                  isActive
                    ? 'text-nexus-blue font-semibold'
                    : 'text-nexus-muted hover:text-nexus-text'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeTab"
                    className="absolute inset-0 bg-nexus-blue-50 rounded-full -z-10 border border-nexus-blue/20"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#contact">
            <Button
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Let's Talk
            </Button>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-white border border-slate-200 text-nexus-text hover:text-nexus-blue transition-colors shadow-sm"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Animated Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white border-b border-slate-200 shadow-xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-nexus-text hover:text-nexus-blue py-2 border-b border-slate-100 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-nexus-muted" />
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="pt-2"
              >
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  icon={<Sparkles className="w-5 h-5" />}
                >
                  Start a Project
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
