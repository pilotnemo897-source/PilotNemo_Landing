import { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowLeft, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const NAV_ITEMS = ['About Us', 'Programs', 'Reviews', 'FAQ', 'Contacts'];

export default function NotFound() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scaleY, setScaleY] = useState(1);
  const textRef = useRef<HTMLDivElement>(null);

  const measure = useCallback(() => {
    if (textRef.current) {
      const h = textRef.current.offsetHeight;
      if (h > 0) {
        setScaleY(window.innerHeight / h);
      }
    }
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <div
      className="w-full h-screen overflow-hidden flex flex-col relative"
      style={{
        background: 'linear-gradient(to bottom, #FF8233, #FDAC55)',
      }}
    >
      {/* ── White Hexagonal Texture Overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          opacity: 0.07,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='100' viewBox='0 0 56 100'%3E%3Cpath d='M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100' fill='none' stroke='white' stroke-width='1'/%3E%3Cpath d='M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '56px 100px',
        }}
      />
      {/* ── Background "404" Text Effect ── */}
      <div
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
        style={{
          opacity: 0.8,
          maskImage: 'linear-gradient(to bottom, black 40%, transparent 95%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 95%)',
        }}
      >
        {/* 404 scaled text */}
        <div
          ref={textRef}
          className="text-white font-black leading-none tracking-tighter whitespace-nowrap select-none"
          style={{
            fontSize: 'clamp(200px, 48vw, 800px)',
            transform: `scale(1.15, ${scaleY * 1.4})`,
            transformOrigin: 'center',
          }}
        >
          404
        </div>

        {/* White oval overlay on top of 404 text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="bg-white rounded-full h-[22vh] sm:h-[26vh] md:h-[50vh]"
            style={{
              width: 'clamp(120px, 20vw, 400px)',
              transform: `scaleY(${scaleY})`,
              transformOrigin: 'center',
            }}
          />
        </div>
      </div>

      {/* ── Navigation Bar ── */}
      <nav className="relative z-20 flex flex-row items-center justify-between px-4 sm:px-6 md:px-12 py-4 sm:py-5">
        {/* Logo */}
        <a href="/" className="group py-1">
          <img
            src={logo}
            alt="PilotNemo"
            className="h-12 sm:h-14 w-auto group-hover:scale-105 transition-transform"
          />
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href="/"
              className="px-4 py-1.5 text-sm font-medium rounded-full bg-white hover:opacity-90 transition-colors"
              style={{ color: '#F16524' }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Menu button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-white flex items-center gap-2 hover:opacity-90 transition-colors cursor-pointer"
          style={{ backgroundColor: '#F16524' }}
        >
          <Menu className="w-4 h-4" />
          <span className="text-sm font-medium hidden sm:inline">Menu</span>
        </button>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-full sm:w-[380px] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            background: 'linear-gradient(135deg, #FF6B1A 0%, #FF9642 100%)',
          }}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between px-6 py-5">
            <a href="/" className="group py-1">
              <img
                src={logo}
                alt="PilotNemo"
                className="h-12 sm:h-14 w-auto group-hover:scale-105 transition-transform"
              />
            </a>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-10 h-10 rounded-full bg-white/20 text-white hover:bg-white/30 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Menu items */}
          <div className="flex flex-col gap-2 px-6 mt-4">
            {NAV_ITEMS.map((item, i) => (
              <a
                key={item}
                href="/"
                className="px-6 py-4 text-lg font-semibold text-white rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300"
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
                  transitionDelay: menuOpen ? `${150 + i * 60}ms` : '0ms',
                  transitionProperty: 'opacity, transform',
                  transitionDuration: '300ms',
                  transitionTimingFunction: 'ease-out',
                }}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <a
              href="/"
              className="w-full py-4 rounded-full bg-white font-semibold text-base flex items-center justify-center gap-2 hover:scale-[1.02] transition-all duration-300"
              style={{
                color: '#F16524',
                opacity: menuOpen ? 1 : 0,
                transitionDelay: menuOpen ? '450ms' : '0ms',
                transitionProperty: 'opacity, transform',
              }}
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </a>
          </div>
        </div>
      </div>

      {/* ── Center Video ── */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ marginTop: 'calc(-6vh - 40px)' }}
      >
        <div className="w-[120vw] h-[85vh] sm:w-[70vw] sm:h-[70vh] md:w-[62vw] md:h-[78vh]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-contain pointer-events-none mix-blend-darken"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260713_234424_b1332b69-2e69-4302-8dbc-40f86846afbd.mp4"
          />
        </div>
      </div>

      {/* ── Bottom Content ── */}
      <div className="relative z-30 mt-auto pb-8 sm:pb-16 flex flex-col items-center text-center px-4">
        <h1 className="text-white text-lg sm:text-xl md:text-2xl font-medium mb-3 sm:mb-4">
          Oops, something went wrong!
        </h1>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-white font-semibold text-sm sm:text-base hover:scale-105 hover:shadow-lg transition-all"
          style={{ backgroundColor: '#F16524' }}
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          Back to Home
        </a>
      </div>
    </div>
  );
}
