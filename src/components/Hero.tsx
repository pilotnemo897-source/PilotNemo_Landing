import { motion } from 'framer-motion';

interface HeroProps {
  onStartProject?: () => void;
  onViewWork?: () => void;
}

export default function Hero({ onStartProject, onViewWork }: HeroProps) {
  const infoStrips = [
    '01 — STRATEGY',
    '02 — DESIGN',
    '03 — DEVELOPMENT',
    '04 — LAUNCH',
    '05 — GROWTH',
  ];

  return (
    <section id="hero" className="relative pt-28 pb-0 overflow-hidden w-full max-w-full bg-white">
      {/* Decorative subtle ambient tint */}
      <div className="accent-glow w-[500px] h-[500px] bg-blue-100 top-[-80px] left-[-150px]" />
      <div className="accent-glow w-[400px] h-[400px] bg-gray-200 top-[100px] right-[-100px]" />

      {/* Main Hero Container */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 flex flex-col md:flex-row gap-10 lg:gap-16 items-center min-h-[calc(100vh-220px)] relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-1/2 flex flex-col justify-center z-10"
        >
          {/* Badge (Gray shade box) */}
          <div className="mb-5">
            <span className="font-label-technical text-xs text-gray-800 tracking-widest uppercase border border-gray-300 px-4 py-1.5 bg-gray-100 rounded-full inline-block font-semibold shadow-xs">
              PILOTNEMO / DIGITAL PRODUCT STUDIO
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-headline-lg text-3xl sm:text-4xl lg:text-5xl text-gray-950 leading-[1.1] mb-5 font-extrabold">
            We build digital products that{' '}
            <span className="text-blue-600">move businesses</span>{' '}
            forward.
          </h1>

          {/* Subtitle */}
          <p className="font-body-lg text-base text-gray-600 max-w-xl mb-8 font-normal leading-relaxed">
            From first idea to final product, we design, develop and grow digital experiences for modern businesses.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}
              whileTap={{ scale: 0.97 }}
              onClick={onStartProject}
              className="inline-flex justify-center items-center px-8 py-4 bg-gray-900 text-white font-label-technical text-xs font-bold tracking-widest group cursor-pointer rounded-full shadow-md hover:bg-black transition-all"
            >
              START A PROJECT
              <span className="material-symbols-outlined ml-2 text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={onViewWork}
              className="inline-flex justify-center items-center px-8 py-4 bg-gray-100 border border-gray-300 text-gray-800 font-label-technical text-xs font-bold tracking-widest hover:bg-gray-200 transition-all cursor-pointer rounded-full shadow-xs"
            >
              VIEW OUR WORK
            </motion.button>
          </div>

          {/* Subtext Detail */}
          <div className="flex items-center gap-4">
            <span className="font-label-small text-[10px] uppercase tracking-widest text-gray-500 font-bold">
              ONE TEAM. FROM IDEA TO SCALE.
            </span>
            <div className="h-px bg-gray-200 flex-grow" />
          </div>
        </motion.div>

        {/* Right Visual Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-1/2 relative flex items-center justify-center min-h-[350px] md:min-h-[460px]"
        >
          {/* Subtle soft background ring */}
          <div className="absolute inset-0 rounded-full bg-gray-200/50 blur-3xl scale-75" />
          <div className="relative w-full flex justify-center items-center p-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBocDIeKKP4gGz73JBQi5EaH2b8WeG-WN3JNxrc3Isg4TZk6pFnUZ611W0zYDMgiXFYpsuZjQ6R1MPjA96Oxa3wEAiEBByzJunntanLkYYDv5eHPHJOKSdnCPVQEIYO-uuWqMgPATWKg3DpBkGmkzrbhm5RLiMvuc1vvpGj_lmFH8IsXrdETpXoZxpSW6XCjXpH5HVM-saFhyBQxJ36x-UnXBoDgSkPg833FhYbk4X_Yz0ZfjCVQsVjFPM1BQaGB7e7vlEeH58NngS2UOk"
              alt="Startup collaboration illustration"
              className="w-full h-auto max-w-xl object-contain drop-shadow-lg"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Info Strip (Gray shade bar) */}
      <div className="relative z-10 border-t border-b border-gray-200 bg-gray-50 py-4 px-4 sm:px-8 md:px-16 w-full mt-10">
        <div className="max-w-[1440px] mx-auto flex flex-wrap justify-between items-center gap-4">
          {infoStrips.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.08, duration: 0.4 }}
              className="flex items-center gap-4"
            >
              <span className="font-label-technical text-xs text-gray-700 tracking-widest font-bold">
                {item}
              </span>
              {idx < infoStrips.length - 1 && (
                <span className="hidden md:inline-block h-4 w-px bg-gray-300 ml-4" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
