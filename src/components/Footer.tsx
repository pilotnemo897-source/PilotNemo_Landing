export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full border-t border-transparent bg-white py-8">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <span className="font-headline-md text-2xl font-bold text-on-surface tracking-tighter">
            PILOTNEMO
          </span>
          <p className="font-label-technical text-xs text-muted-text font-semibold mt-4">
            Copyright © {currentYear} PILOTNEMO
          </p>
        </div>

        <div className="flex flex-col space-y-3">
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('services');
            }}
            className="font-label-technical text-xs text-on-surface-variant font-bold hover:text-tech-accent underline underline-offset-4 uppercase transition-colors"
          >
            Services
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('about');
            }}
            className="font-label-technical text-xs text-on-surface-variant font-bold hover:text-tech-accent underline underline-offset-4 uppercase transition-colors"
          >
            Company
          </a>
        </div>

        <div className="flex flex-col space-y-3">
          <a
            href="#approach"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('approach');
            }}
            className="font-label-technical text-xs text-on-surface-variant font-bold hover:text-tech-accent underline underline-offset-4 uppercase transition-colors"
          >
            Resources
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
            className="font-label-technical text-xs text-on-surface-variant font-bold hover:text-tech-accent underline underline-offset-4 uppercase transition-colors"
          >
            Connect
          </a>
        </div>

        <div className="hidden md:flex justify-end items-end col-span-1">
          <div className="w-8 h-8 border-r border-b border-on-surface/20 relative">
            <span className="material-symbols-outlined absolute -bottom-2 -right-2 text-[10px] text-muted-text">
              add
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
