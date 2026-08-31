import logoSrc from '../assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full max-w-full border-t border-white/8 bg-[#001f52] py-10 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <img
            src={logoSrc}
            alt="PilotNemo"
            className="h-10 w-auto object-contain mb-3"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <p className="font-label-technical text-xs text-blue-200/50 font-semibold mt-3">
            Copyright © {currentYear} PILOTNEMO
          </p>
          <p className="font-body-md text-xs text-blue-200/40 mt-1">
            Digital Product Studio
          </p>
        </div>

        {/* Nav col 1 */}
        <div className="flex flex-col space-y-3">
          <span className="font-label-technical text-[10px] text-blue-300/50 font-bold tracking-widest uppercase mb-1">
            Company
          </span>
          <a
            href="#services"
            onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}
            className="font-label-technical text-xs text-blue-200/60 font-bold hover:text-white uppercase transition-colors"
          >
            Services
          </a>
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
            className="font-label-technical text-xs text-blue-200/60 font-bold hover:text-white uppercase transition-colors"
          >
            About
          </a>
        </div>

        {/* Nav col 2 */}
        <div className="flex flex-col space-y-3">
          <span className="font-label-technical text-[10px] text-blue-300/50 font-bold tracking-widest uppercase mb-1">
            Connect
          </span>
          <a
            href="#approach"
            onClick={(e) => { e.preventDefault(); handleNavClick('approach'); }}
            className="font-label-technical text-xs text-blue-200/60 font-bold hover:text-white uppercase transition-colors"
          >
            Process
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
            className="font-label-technical text-xs text-blue-200/60 font-bold hover:text-white uppercase transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Decorative corner mark */}
        <div className="hidden md:flex justify-end items-end col-span-1">
          <div className="w-8 h-8 border-r border-b border-white/15 relative">
            <span className="material-symbols-outlined absolute -bottom-2 -right-2 text-[10px] text-blue-300/30">
              add
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
