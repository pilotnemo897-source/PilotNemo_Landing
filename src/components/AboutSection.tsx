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
    { value: '$50M+', label: 'CLIENT REVENUE GENERATED' },
    { value: '250+', label: 'ENTERPRISE PROJECTS' },
    { value: '99.8%', label: 'ON-TIME SPRINT DELIVERY' },
    { value: '100%', label: 'CODE TRANSFERRED' },
  ];

  const processSteps = [
    { step: '01 / ARCHITECTURE', desc: 'Systems design and infrastructure planning.' },
    { step: '02 / ENGINEERING', desc: 'High-performance code and agile execution.' },
    { step: '03 / OPTIMIZATION', desc: 'Performance tuning and security hardening.' },
    { step: '04 / GROWTH', desc: 'Scalability and continuous evolution.' },
  ];

  const expertiseSectors = [
    {
      icon: 'account_balance',
      title: 'Fintech & Digital Banking',
      desc: 'Secure, scalable financial infrastructure.',
    },
    {
      icon: 'medical_services',
      title: 'Healthcare Technology',
      desc: 'Compliant data systems and patient portals.',
    },
    {
      icon: 'cloud_queue',
      title: 'Enterprise SaaS',
      desc: 'Cloud-native architectures for scale.',
    },
    {
      icon: 'shopping_bag',
      title: 'E-commerce Architecture',
      desc: 'High-volume transactional platforms.',
    },
  ];

  return (
    <section id="about" className="py-16 border-t border-white/8 relative">
      {/* subtle glow */}
      <div className="accent-glow w-[500px] h-[500px] bg-blue-600 bottom-0 right-[-150px]" />

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
            <div className="inline-block px-3.5 py-1.5 bg-blue-400/10 text-blue-300 text-xs font-label-technical font-bold tracking-widest uppercase mb-5 border border-blue-400/20 rounded-full">
              01 / ABOUT US
            </div>
            <h2 className="font-headline-lg text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05] text-white mb-4">
              Architecting the{' '}
              <span className="text-blue-300">digital frontier.</span>
            </h2>
            <p className="font-body-lg text-lg text-blue-100/70 leading-relaxed max-w-2xl font-medium">
              We are a collective of digital architects, engineers, and strategists. We believe in building robust, high-performance systems that drive measurable growth and define industry standards.
            </p>
          </motion.div>

          {/* Quick Stats Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-80 pt-6 md:border-l border-white/10 md:pl-8 space-y-4"
          >
            {quickStats.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3.5">
                <span className="material-symbols-outlined text-blue-400 text-xl">
                  {item.icon}
                </span>
                <span className="font-label-technical text-xs font-bold tracking-widest uppercase text-blue-100/80">
                  {item.text}
                </span>
              </div>
            ))}
          </motion.aside>
        </div>

        {/* Overview & Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 pt-8 border-t border-white/8">
          {/* Left: Overview & Stats Grid */}
          <div className="lg:col-span-7">
            <p className="font-body-lg text-lg text-blue-100/70 leading-relaxed mb-8">
              PilotNemo is a premier digital growth & IT engineering partner. We combine technology, strategy, and design to elevate market leaders. 250+ projects delivered, 99% client satisfaction, 10+ years of industry experience.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {mainStats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(0,0,0,0.2)' }}
                  className="bg-white p-6 flex flex-col justify-center rounded-xl shadow-md hover:shadow-xl border border-white/80 transition-all"
                >
                  <div className="font-headline-md text-3xl sm:text-4xl font-bold text-[#002D72] mb-2">
                    {stat.value}
                  </div>
                  <div className="font-label-technical text-[11px] uppercase tracking-widest font-bold text-[#374f8a] leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Mission Statement Block */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#003894] to-[#001f52] text-white p-7 h-full flex flex-col shadow-2xl rounded-2xl border border-white/10"
            >
              <div className="flex justify-between items-center mb-5 border-b border-white/10 pb-4">
                <span className="font-label-technical text-xs font-bold tracking-widest uppercase text-blue-300">
                  OUR.MISSION
                </span>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>
              </div>
              <p className="font-body-lg text-lg sm:text-xl font-medium leading-relaxed mb-8 text-blue-50 flex-grow">
                To engineer digital experiences that transcend the ordinary. We aim to empower businesses with technological infrastructure that is not just functional, but transformative.
              </p>
              <div className="border border-white/10 bg-white/5 p-4 rounded-xl">
                <div className="font-label-technical text-xs font-bold tracking-widest uppercase text-sky-400 mb-2">
                  TARGET OUTPUT
                </div>
                <div className="font-headline-md text-2xl font-bold text-white">
                  100% Innovation Drive
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Technical Process Section */}
        <div className="mb-16 pt-8 border-t border-white/8">
          <div className="flex justify-between items-center mb-6 pb-2 border-b border-white/8">
            <h3 className="font-label-technical text-xs font-bold tracking-widest uppercase text-white">
              TECHNICAL PROCESS
            </h3>
            <span className="font-label-technical text-xs font-bold tracking-widest text-blue-300/60">
              EXEC.SEQ
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(0,0,0,0.2)' }}
                className="bg-white p-5 h-36 flex flex-col justify-between hover:shadow-xl transition-all rounded-xl group border border-white/80"
              >
                <div className="font-label-technical text-xs font-bold tracking-widest uppercase text-[#4a8ef0]">
                  {step.step}
                </div>
                <p className="font-body-md text-sm text-[#374f8a] font-medium group-hover:text-[#002D72] transition-colors">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Industry Expertise Section */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-6 pb-2 border-b border-white/8">
            <h3 className="font-label-technical text-xs font-bold tracking-widest uppercase text-white">
              INDUSTRY EXPERTISE
            </h3>
            <span className="font-label-technical text-xs font-bold tracking-widest text-blue-300/60">
              SECTOR.MAP
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {expertiseSectors.map((sector, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="bg-white/8 backdrop-blur-sm text-white p-6 group hover:bg-white/12 border border-white/10 transition-all relative overflow-hidden rounded-2xl flex flex-col justify-between min-h-[170px]"
              >
                <span className="material-symbols-outlined absolute top-4 right-4 text-2xl text-blue-300 opacity-60 group-hover:opacity-100 transition-opacity">
                  {sector.icon}
                </span>
                <div>
                  <h4 className="font-headline-md text-xl font-bold mb-3 mt-4 text-white">
                    {sector.title}
                  </h4>
                  <p className="font-body-md text-blue-200/70 text-sm font-medium">
                    {sector.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-10 border-t border-white/8">
          <h3 className="font-headline-md text-2xl sm:text-3xl font-bold text-white mb-6">
            Ready to architect your next digital frontier?
          </h3>
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(74,142,240,0.4)' }}
            whileTap={{ scale: 0.97 }}
            onClick={onStartProject}
            className="inline-flex items-center gap-3 bg-[#4a8ef0] hover:bg-blue-400 text-white px-8 py-4 font-label-technical text-xs font-bold tracking-wider uppercase transition-all rounded-full cursor-pointer shadow-lg"
          >
            START A PROJECT
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
