import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logoSrc from '../assets/logo.png';

interface NavbarProps {
  activeSection?: string;
  onNavigate?: (id: string) => void;
}

export default function Navbar({ activeSection = 'hero', onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' },
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
      {/* ── HERO NAVBAR (visible only at top) ── */}
      <AnimatePresence>
        {!scrolled && (
          <motion.nav
            key="hero-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 w-full z-50 bg-white/85 backdrop-blur-md border-b border-gray-200/60 py-4"
          >
            <div className="w-full px-6 sm:px-10 md:px-12 flex justify-between items-center">
              {/* Big Logo — left */}
              <a
                href="#hero"
                onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
                className="flex items-center hover:opacity-80 transition-opacity"
              >
                <img
                  src={logoSrc}
                  alt="PilotNemo"
                  className="h-14 w-auto object-contain"
                />
              </a>

              {/* Nav links + CTA — all on the right */}
              <div className="hidden md:flex items-center gap-8 font-label-technical">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={`#${item.id}`}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
                    className={`text-xs uppercase tracking-widest transition-all ${
                      activeSection === item.id
                        ? 'text-black font-bold border-b-2 border-black pb-0.5'
                        : 'text-gray-600 hover:text-black font-medium'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
                <button
                  onClick={() => handleNavClick('contact')}
                  className="font-label-technical text-xs px-6 py-2.5 bg-gray-900 text-white hover:bg-black transition-all uppercase tracking-widest font-bold cursor-pointer rounded-sm shadow-xs"
                >
                  START A PROJECT
                </button>
              </div>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-gray-900 p-2 focus:outline-none cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                <span className="material-symbols-outlined text-2xl">
                  {mobileMenuOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* ── SCROLLED FLOATING PILL WIDGET (visible after scroll) ── */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            key="pill-nav"
            initial={{ opacity: 0, y: -16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed top-3 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-gray-300 shadow-lg"
          >
            {/* Logo mark */}
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
              className="flex items-center mr-2 hover:opacity-70 transition-opacity"
            >
              <img
                src={logoSrc}
                alt="PilotNemo"
                className="h-7 w-auto object-contain"
              />
            </a>

            <div className="w-px h-3.5 bg-gray-300 mx-1" />

            {/* Nav link buttons */}
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.id)}
                className={`font-label-technical text-[10px] uppercase tracking-widest px-3 py-1 rounded-full transition-all cursor-pointer ${
                  activeSection === item.id
                    ? 'bg-gray-900 text-white font-bold'
                    : 'text-gray-600 hover:text-black hover:bg-gray-100 font-medium'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="w-px h-3.5 bg-gray-300 mx-1" />

            {/* CTA mini button */}
            <button
              onClick={() => handleNavClick('contact')}
              className="font-label-technical text-[10px] px-3.5 py-1 bg-gray-900 text-white hover:bg-black transition-all uppercase tracking-widest font-bold cursor-pointer rounded-full"
            >
              Let's Talk
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── MOBILE FLOATING PILL BUTTON (scrolled) ── */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            key="mobile-pill"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="fixed top-4 right-4 z-50 md:hidden flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-gray-300 shadow-md text-gray-900 cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
            <span className="font-label-technical text-[10px] uppercase tracking-widest font-bold">Menu</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-white border-b border-gray-200 shadow-2xl md:hidden px-6 py-6"
          >
            <div className="flex flex-col gap-5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={`#${item.id}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
                  className="font-label-technical text-sm text-gray-800 hover:text-black tracking-widest uppercase py-2 border-b border-gray-100"
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => handleNavClick('contact')}
                className="mt-2 w-full font-label-technical text-xs px-6 py-3.5 bg-gray-900 text-white hover:bg-black font-bold tracking-widest uppercase cursor-pointer rounded-sm flex items-center justify-center gap-2"
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
