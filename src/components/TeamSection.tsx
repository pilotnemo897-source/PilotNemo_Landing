import { motion } from 'framer-motion';

const ProgressBar = ({ label, value, delay = 0 }: { label: string; value: number; delay?: number }) => (
  <div className="mb-2.5">
    <div className="flex justify-between mb-1">
      <span className="font-label-technical text-[9px] text-[#374f8a] tracking-widest uppercase font-bold">{label}</span>
      <span className="font-label-technical text-[9px] text-[#4a8ef0] font-bold">{value}%</span>
    </div>
    <div className="h-[2px] w-full bg-[#002D72]/10 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-[#4a8ef0] rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, delay, ease: 'easeOut' }}
      />
    </div>
  </div>
);

const StatMeter = ({ label, value, delay = 0 }: { label: string; value: number; delay?: number }) => (
  <div className="mb-2.5">
    <div className="flex justify-between mb-1.5">
      <span className="font-label-technical text-[9px] text-white/70 tracking-widest uppercase font-bold">{label}</span>
      <span className="font-label-technical text-[9px] text-white font-bold">{value}%</span>
    </div>
    <div className="h-[3px] w-full bg-white/15 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-white rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay, ease: 'easeOut' }}
      />
    </div>
  </div>
);

export default function TeamSection() {
  const capabilities = [
    {
      title: 'PRODUCT',
      tags: ['STRATEGY', 'ROADMAP', 'ANALYTICS'],
    },
    {
      title: 'DESIGN',
      tags: ['UI/UX', 'SYSTEMS', 'INTERACTION'],
    },
    {
      title: 'ENGINEERING',
      tags: ['FRONTEND', 'BACKEND', 'DEVOPS'],
    },
    {
      title: 'GROWTH',
      tags: ['SEO', 'MARKETING', 'CONVERSION'],
    },
  ];

  const teamMembers = [
    {
      name: 'PRIYA ANAND',
      role: 'FOUNDER & PRODUCT STRATEGIST',
      bio: 'A highly skilled professional focusing on bringing structure and clarity to complex digital systems. 10+ years scaling technical operations.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMCmcfSd2y4go82HDTDONNVfnwRQwVcgLHoOlIsiORn5QIF_4CmyR6VPh-DHA5ZiX0ttJKnESfCjgVaePZ2URTVLGI4DVEiiEQHyD2cNkMPhapEsOIBaZDtQ7_cTTNR4otSehK5i_mK5Rt2O9nWKz0ZCctsN0Xvk8SRsZzLO2_sqG8LPLwqO47QJX6T2gxMVjVS22VouB4BUyFCT-zTZQAykqM0pclKD4PuehDd6rPzladYShKUoGQqg',
      skills: [
        { label: 'Product Strategy', value: 95 },
        { label: 'Roadmapping', value: 90 },
        { label: 'Analytics', value: 82 },
      ],
    },
    {
      name: 'RAJESH KUMAR',
      role: 'LEAD SOFTWARE ARCHITECT',
      bio: 'Specializes in crafting intuitive user experiences based on rigorous research, clean code, and architectural design principles.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-s0ZWd2h12oCfmYy0mRaWkRZSe1PhGvcbqWKR-KdlAaMlvfS0HMrNrA3d3GDJbwyZXGpH-Z0f-1AyZtjafFsxPDQ3mVQQttH0cSxFLlZPd7wwsJBwBl2GGHaLr5Znff5Fl6KOAJjZRuEeMPvpbVQfxrD8XEwVRfMYUjrYrx6ac6r8ggFt4KaDb3eLzVlKwuYYUn_i4UaKbxQtEfqqIHSBnFofhCZEpj_fRM1JDu_W3lFihtUybBA2ug',
      skills: [
        { label: 'System Architecture', value: 97 },
        { label: 'Backend Engineering', value: 93 },
        { label: 'DevOps', value: 85 },
      ],
    },
    {
      name: 'SNEHA NAIR',
      role: 'HEAD OF UI/UX DESIGN',
      bio: 'Engineering lead bridging the gap between elegant frontend interfaces and robust scalable backend architectures.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfn8zzGwD27t7gZ5GEWyn8ZXTWxpMJc_K2qJ17AqIJBd1MVyhk9Bj9fJjMQyNLCu8-vIQdeO-m_A_H8dE4r8dbaKx79a6gpnWo9S1enG2Cyd-000BqdrlgE90dFOAPM_0ySVsFB0-mTmAbqcKu1KSuhNTP5M5n_6LMWtlrGAPHt9ZAM3eFHB16lWPewL4SWRw_njSNvmg9VSbrhZ6Djj_O96SRdVn4JMPEQwf38y_EmlVPjzr7IKJzhA',
      skills: [
        { label: 'UI/UX Design', value: 96 },
        { label: 'Prototyping', value: 91 },
        { label: 'Design Systems', value: 88 },
      ],
    },
    {
      name: 'ARJUN MEHTA',
      role: 'GROWTH & PERFORMANCE LEAD',
      bio: 'Drives product adoption through data-driven performance strategies, conversion rate optimization, and market analytics.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBksJONIxHoT6GZUa1R90gz9tMBLoaRB5GYiNKnyTsNRAzWUfendozgdR1Prav-3eP6WJ2SCqozL5R9rwtwkc5sm-_rJwMQZSTryAuiv-OmZGeZ3HCmgaSKHWLK4xCS0wDvGUAQBpMFJXzIfRoA-L0PUgFN5G1G1Gw2o1wEBhsDYVA0ghVva5Jss0w7ivoUm4awalDGELJoHVrdK3x2WKDzsAxF2889ad-DDnc7bwFNJRdW4y1VZdN_CA',
      skills: [
        { label: 'Performance Marketing', value: 94 },
        { label: 'SEO & Content', value: 89 },
        { label: 'Conversion Optim.', value: 86 },
      ],
    },
  ];

  return (
    <section id="team" className="py-16 border-t border-white/8 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16">
        {/* Header */}
        <header className="mb-10 border-b border-white/8 pb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-xs text-blue-400">add</span>
            <span className="font-label-technical text-xs text-blue-300 tracking-widest uppercase font-bold">
              04 / THE PEOPLE
            </span>
          </div>
          <h2 className="font-headline-lg text-4xl sm:text-6xl text-white mb-6 max-w-3xl font-extrabold">
            People behind the{' '}
            <span className="text-blue-300">products.</span>
          </h2>
          <p className="font-body-lg text-base sm:text-lg text-blue-100/70 max-w-2xl font-normal">
            A multidisciplinary team combining product thinking, engineering, design and digital growth.
          </p>
        </header>

        {/* Bento Grid: Capabilities & Stats */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
          {/* Capabilities Grid */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {capabilities.map((cap, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                whileHover={{ y: -3, boxShadow: '0 12px 32px rgba(0,0,0,0.2)' }}
                className="bg-white p-3 sm:p-3.5 rounded-xl shadow-md border border-white/80 transition-all group h-fit"
              >
                {/* Title row */}
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="font-label-technical text-base sm:text-lg text-[#002D72] font-black tracking-wider uppercase">
                    {cap.title}
                  </h3>
                  <span className="material-symbols-outlined text-base font-bold text-[#002D72]/40 group-hover:text-[#002D72] transition-colors">add</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {cap.tags.map((t, i) => (
                    <span
                      key={i}
                      className="font-label-technical text-xs sm:text-sm px-3 py-1 border border-[#002D72]/20 rounded-full bg-[#002D72]/8 text-[#002D72] font-extrabold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-4 bg-gradient-to-br from-[#003894] to-[#001f52] p-8 flex flex-col justify-between min-h-[340px] text-white rounded-2xl shadow-2xl border border-white/10"
          >
            <div>
              <div className="font-label-technical text-xs mb-2 opacity-80 uppercase tracking-widest font-bold text-blue-300">
                TEAM METRICS
              </div>
              <div className="border-t border-white/15 my-4 w-full" />
            </div>
            <div className="space-y-5">
              <div>
                <div className="font-headline-lg text-5xl font-extrabold">05+</div>
                <div className="font-label-technical text-xs opacity-70 uppercase tracking-widest font-bold mt-1">
                  CORE CAPABILITIES
                </div>
              </div>
              <div>
                <div className="font-headline-lg text-5xl font-extrabold">08+</div>
                <div className="font-label-technical text-xs opacity-70 uppercase tracking-widest font-bold mt-1">
                  DISCIPLINES
                </div>
              </div>
              <div>
                <div className="font-headline-md text-3xl font-extrabold mb-1">ONE</div>
                <div className="font-label-technical text-xs opacity-70 uppercase tracking-widest font-bold">
                  SHARED WORKFLOW
                </div>
              </div>
              <div className="pt-2 border-t border-white/15">
                <StatMeter label="Client Satisfaction" value={99} delay={0.2} />
                <StatMeter label="On-Time Delivery" value={98} delay={0.4} />
                <StatMeter label="Code Ownership" value={100} delay={0.6} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-10 border-y border-white/8 mb-12 flex items-center justify-center text-center px-4"
        >
          <blockquote className="font-headline-lg text-xl sm:text-2xl text-white max-w-4xl mx-auto font-bold italic leading-snug opacity-90">
            "Different skills. One shared responsibility: building something useful."
          </blockquote>
        </motion.div>

        {/* Core Team Members Grid */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <span className="material-symbols-outlined text-xs text-blue-400">add</span>
            <span className="font-label-technical text-xs text-blue-200/70 tracking-widest uppercase font-bold">
              CORE TEAM
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(0,0,0,0.3)' }}
                className="group cursor-pointer bg-white p-3 rounded-2xl shadow-md border border-white/80 transition-all"
              >
                <div className="aspect-[3/4] mb-4 overflow-hidden bg-[#e8eef8] relative rounded-xl">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale opacity-85 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="border-t border-[#002D72]/8 pt-4 px-1">
                  <h4 className="font-headline-md text-lg font-bold text-[#002D72] uppercase mb-1">
                    {member.name}
                  </h4>
                  <p className="font-label-technical text-[10px] text-[#4a8ef0] mb-4 font-bold uppercase tracking-widest">
                    {member.role}
                  </p>
                  <p className="font-body-md text-xs text-[#374f8a] leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  {/* Skill Progress Bars — white card, navy text */}
                  <div className="bg-[#f0f4ff] p-3 rounded-xl border border-[#002D72]/8">
                    {member.skills.map((skill, i) => (
                      <ProgressBar
                        key={i}
                        label={skill.label}
                        value={skill.value}
                        delay={idx * 0.1 + i * 0.15}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
