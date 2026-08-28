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
    <section id="about" className="py-20 border-t border-transparent relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16">
        {/* Header Section */}
        <div className="mb-16 flex flex-col md:flex-row md:items-start justify-between gap-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-3.5 py-1.5 bg-[#f4ece4] text-[#b85c24] text-xs font-label-technical font-bold tracking-widest uppercase mb-8 border border-transparent rounded-xs">
              02 / ABOUT US
            </div>
            <h2 className="font-headline-lg text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05] text-[#1a1a1a] mb-6">
              Architecting the digital frontier.
            </h2>
            <p className="font-body-lg text-lg text-gray-700 leading-relaxed max-w-2xl font-medium">
              We are a collective of digital architects, engineers, and strategists. We believe in building robust, high-performance systems that drive measurable growth and define industry standards.
            </p>
          </motion.div>

          {/* Quick Stats Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-80 pt-6 md:border-l border-transparent md:pl-8 space-y-5"
          >
            {quickStats.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3.5">
                <span className="material-symbols-outlined text-[#b85c24] text-xl">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 relative pt-8 border-t border-transparent">
          {/* Left: Overview & Stats Grid */}
          <div className="lg:col-span-7">
            <p className="font-body-lg text-lg text-gray-700 leading-relaxed mb-10">
              PilotNemo is a premier digital growth & IT engineering partner. We combine technology, strategy, and design to elevate market leaders. 250+ projects delivered, 99% client satisfaction, 10+ years of industry experience.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
              {mainStats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-white p-6 border border-transparent flex flex-col justify-center rounded-xs shadow-xs hover:border-[#b85c24]/40 transition-colors"
                >
                  <div className="font-headline-md text-3xl sm:text-4xl font-bold text-[#b85c24] mb-2">
                    {stat.value}
                  </div>
                  <div className="font-label-technical text-[11px] uppercase tracking-widest font-bold text-gray-500 leading-tight">
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
              className="bg-[#2d2d2d] text-white p-8 sm:p-10 h-full flex flex-col shadow-xl rounded-xs"
            >
              <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                <span className="font-label-technical text-xs font-bold tracking-widest uppercase text-gray-400">
                  OUR.MISSION
                </span>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-[#b85c24]" />
                  <div className="w-2 h-2 rounded-full bg-gray-600" />
                  <div className="w-2 h-2 rounded-full bg-gray-600" />
                </div>
              </div>
              <p className="font-body-lg text-lg sm:text-xl font-medium leading-relaxed mb-10 text-gray-100 flex-grow">
                To engineer digital experiences that transcend the ordinary. We aim to empower businesses with technological infrastructure that is not just functional, but transformative.
              </p>
              <div className="border border-transparent bg-[#363636] p-6 rounded-xs">
                <div className="font-label-technical text-xs font-bold tracking-widest uppercase text-[#b85c24] mb-2">
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
        <div className="mb-24 relative pt-8 border-t border-transparent">
          <div className="flex justify-between items-center mb-8 pb-3 border-b border-transparent">
            <h3 className="font-label-technical text-xs font-bold tracking-widest uppercase text-gray-800">
              TECHNICAL PROCESS
            </h3>
            <span className="font-label-technical text-xs font-bold tracking-widest text-gray-400">
              EXEC.SEQ
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="bg-white p-6 border border-transparent h-44 flex flex-col justify-between hover:shadow-md transition-all rounded-xs group"
              >
                <div className="font-label-technical text-xs font-bold tracking-widest uppercase text-[#b85c24]">
                  {step.step}
                </div>
                <p className="font-body-md text-sm text-gray-700 font-medium group-hover:text-[#1a1c1b] transition-colors">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Industry Expertise Section */}
        <div className="mb-24 relative">
          <div className="flex justify-between items-center mb-8 pb-3 border-b border-transparent">
            <h3 className="font-label-technical text-xs font-bold tracking-widest uppercase text-gray-800">
              INDUSTRY EXPERTISE
            </h3>
            <span className="font-label-technical text-xs font-bold tracking-widest text-gray-400">
              SECTOR.MAP
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertiseSectors.map((sector, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-[#2d2d2d] text-white p-8 group hover:bg-[#363636] transition-colors relative overflow-hidden rounded-xs flex flex-col justify-between min-h-[200px]"
              >
                <span className="material-symbols-outlined absolute top-4 right-4 text-2xl text-[#b85c24] opacity-60 group-hover:opacity-100 transition-opacity">
                  {sector.icon}
                </span>
                <div>
                  <h4 className="font-headline-md text-xl font-bold mb-3 mt-4 text-white">
                    {sector.title}
                  </h4>
                  <p className="font-body-md text-gray-400 text-sm font-medium">
                    {sector.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center relative py-12 border-t border-transparent">
          <h3 className="font-headline-md text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Ready to architect your next digital frontier?
          </h3>
          <button
            onClick={onStartProject}
            className="inline-flex items-center gap-3 bg-[#b85c24] hover:bg-[#9a460d] text-white px-8 py-4 font-label-technical text-xs font-bold tracking-wider uppercase transition-colors rounded-xs cursor-pointer shadow-sm"
          >
            START A PROJECT
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  );
}
