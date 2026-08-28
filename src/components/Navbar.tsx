import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  activeSection?: string;
  onNavigate?: (id: string) => void;
}

export default function Navbar({ activeSection = 'hero', onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Work', id: 'services' },
    { label: 'Services', id: 'services' },
    { label: 'Process', id: 'approach' },
    { label: 'Team', id: 'team' },
    { label: 'About', id: 'about' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#202124] backdrop-blur-md border-b border-transparent shadow-md py-3'
            : 'bg-[#202124] backdrop-blur-md border-b border-transparent py-4'
        }`}
      >
        <div className="w-full px-6 sm:px-10 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
            className="font-headline-md text-xl md:text-2xl font-bold tracking-tighter text-white hover:text-[#b85c24] transition-colors"
          >
            PILOTNEMO
          </a>

          {/* Web Navigation */}
          <div className="hidden md:flex gap-8 items-center font-label-technical">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`text-xs uppercase tracking-widest transition-all ${
                  activeSection === item.id
                    ? 'text-[#b85c24] font-bold border-b border-[#b85c24] pb-0.5'
                    : 'text-gray-300 hover:text-[#b85c24]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button (Full Right Side, Solid Fill, No Outline Border) */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => handleNavClick('contact')}
              className="font-label-technical text-xs px-6 py-2.5 bg-[#b85c24] text-white hover:bg-[#9a460d] transition-all uppercase tracking-widest font-bold cursor-pointer rounded-xs shadow-xs"
            >
              START A PROJECT
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 focus:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-[#202124] border-b border-white/10 shadow-2xl md:hidden px-6 py-6"
          >
            <div className="flex flex-col gap-5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className="font-label-technical text-sm text-gray-200 hover:text-[#b85c24] tracking-widest uppercase py-2 border-b border-white/5"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => handleNavClick('contact')}
                className="mt-2 w-full font-label-technical text-xs px-6 py-3.5 bg-[#b85c24] text-white font-bold tracking-widest uppercase cursor-pointer rounded-xs flex items-center justify-center gap-2"
              >
                START A PROJECT
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
