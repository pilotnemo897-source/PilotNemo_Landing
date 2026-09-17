import { motion } from 'framer-motion';

interface AboutSectionProps {
  onStartProject?: () => void;
}

export default function AboutSection({ onStartProject }: AboutSectionProps) {
  const quickStats = [
    { icon: 'group', text: '45+ DIGITAL SPECIALISTS' },
    { icon: 'public', text: 'GLOBAL OPERATIONAL REACH' },
    { icon: 'equalizer', text: '10+ YEARS OF EXCELLENCE' },
    { icon: 'workspace_premium', text: 'AWARD-WINNING SOLUTIONS' },
  ];

  const mainStats = [
    { value: '50M+', label: 'CLIENT REVENUE GENERATED' },
    { value: '250+', label: 'ENTERPRISE PROJECTS' },
    { value: '99.8%', label: 'ON-TIME SPRINT DELIVERY' },
    { value: '100%', label: 'CODE TRANSFERRED' },
  ];

  return (
    <section id="about" className="pt-10 md:pt-14 pb-16 md:pb-20 border-t border-gray-200 relative overflow-hidden w-full max-w-full bg-white">
      {/* subtle ambient glow */}
      <div className="accent-glow w-[500px] h-[500px] bg-gray-200 bottom-0 right-[-150px]" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16 relative z-10">
        {/* Header Section */}
        <div className="mb-12 flex flex-col md:flex-row md:items-start justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-1.5 bg-gray-100 text-gray-800 text-xs font-label-technical font-bold tracking-widest uppercase mb-5 border border-gray-300 rounded-full shadow-xs">
              01 / ABOUT US
            </div>
            <h2 className="font-headline-lg text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05] text-gray-950 mb-4">
              Building products that{' '}
              <span className="text-blue-600">drive real growth.</span>
            </h2>
            <p className="font-body-lg text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl font-normal">
              We are a full-cycle digital studio crafting high-performance web, mobile, and software solutions designed to scale your business.
            </p>
          </motion.div>

          {/* Quick Stats Sidebar (Gray shade boxes) */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-80 pt-6 md:border-l border-gray-200 md:pl-8 space-y-3"
          >
            {quickStats.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3.5 p-2.5 rounded-lg bg-gray-50 border border-gray-200 hover:bg-gray-100 transition-colors">
                <span className="material-symbols-outlined text-blue-600 text-xl">
                  {item.icon}
                </span>
                <span className="font-label-technical text-xs font-bold tracking-widest uppercase text-gray-800">
                  {item.text}
                </span>
              </div>
            ))}
          </motion.aside>
        </div>

        {/* Overview & Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 pt-8 border-t border-gray-200">
          {/* Left: Overview & Stats Grid */}
          <div className="lg:col-span-7">
            <p className="font-body-lg text-base sm:text-lg text-gray-600 leading-relaxed mb-6 font-medium">
              Driven by engineering excellence, intuitive design, and a proven delivery track record:
            </p>
            <div className="grid grid-cols-2 gap-4">
              {mainStats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className="bg-gray-50 p-6 flex flex-col justify-center rounded-xl shadow-xs hover:shadow-md border border-gray-200 hover:border-gray-300 transition-all"
                >
                  <div className="font-headline-md text-3xl sm:text-4xl font-extrabold text-gray-950 mb-2">
                    {stat.value}
                  </div>
                  <div className="font-label-technical text-[11px] uppercase tracking-widest font-bold text-gray-600 leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Mission Statement Block (Gray shade box) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-100 text-gray-900 p-7 h-full flex flex-col shadow-sm rounded-2xl border border-gray-200"
            >
              <div className="flex justify-between items-center mb-5 border-b border-gray-200 pb-4">
                <span className="font-label-technical text-xs font-bold tracking-widest uppercase text-gray-800">
                  OUR MISSION
                </span>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                </div>
              </div>
              <p className="font-body-lg text-base sm:text-lg font-medium leading-relaxed mb-6 text-gray-700 flex-grow">
                To build high-performance digital products and intuitive experiences that empower businesses to scale faster and lead their markets.
              </p>
              <div className="border border-gray-200 bg-white p-4 rounded-xl shadow-xs">
                <div className="font-label-technical text-xs font-bold tracking-widest uppercase text-blue-600 mb-1.5">
                  CORE FOCUS
                </div>
                <div className="font-headline-md text-xl sm:text-2xl font-extrabold text-gray-950">
                  Speed, Scale & Quality
                </div>
              </div>
            </motion.div>
          </div>
        </div>



        {/* Call to Action */}
        <div className="text-center py-10 border-t border-gray-200">
          <h3 className="font-headline-md text-2xl sm:text-3xl font-bold text-gray-950 mb-6">
            Ready to architect your next digital frontier?
          </h3>
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: '0 8px 24px rgba(0,0,0,0.15)' }}
            whileTap={{ scale: 0.97 }}
            onClick={onStartProject}
            className="inline-flex items-center gap-3 bg-gray-900 hover:bg-black text-white px-8 py-4 font-label-technical text-xs font-bold tracking-wider uppercase transition-all rounded-full cursor-pointer shadow-md"
          >
            START A PROJECT
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
