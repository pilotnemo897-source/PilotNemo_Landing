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
    <footer className="w-full max-w-full border-t border-gray-200 bg-gray-50 py-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <img
            src={logoSrc}
            alt="PilotNemo"
            className="h-9 w-auto object-contain mb-3"
          />
          <p className="font-label-technical text-xs text-gray-600 font-bold mt-3">
            Copyright © {currentYear} PILOTNEMO
          </p>
          <p className="font-body-md text-xs text-gray-500 mt-1">
            Digital Product Studio
          </p>
        </div>

        {/* Nav col 1 */}
        <div className="flex flex-col space-y-3">
          <span className="font-label-technical text-[10px] text-gray-900 font-bold tracking-widest uppercase mb-1">
            Navigation
          </span>
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
            className="font-label-technical text-xs text-gray-600 font-semibold hover:text-black uppercase transition-colors"
          >
            About
          </a>
          <a
            href="#services"
            onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}
            className="font-label-technical text-xs text-gray-600 font-semibold hover:text-black uppercase transition-colors"
          >
            Services
          </a>
        </div>

        {/* Nav col 2 */}
        <div className="flex flex-col space-y-3">
          <span className="font-label-technical text-[10px] text-gray-900 font-bold tracking-widest uppercase mb-1">
            Connect
          </span>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
            className="font-label-technical text-xs text-gray-600 font-semibold hover:text-black uppercase transition-colors"
          >
            Contact
          </a>
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
            className="font-label-technical text-xs text-gray-600 font-semibold hover:text-black uppercase transition-colors"
          >
            Back to Top
          </a>
        </div>

        {/* Decorative corner mark */}
        <div className="hidden md:flex justify-end items-end col-span-1">
          <div className="w-8 h-8 border-r border-b border-gray-300 relative">
            <span className="material-symbols-outlined absolute -bottom-2 -right-2 text-[10px] text-gray-400">
              add
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
