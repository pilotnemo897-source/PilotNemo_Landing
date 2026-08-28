import { motion } from 'framer-motion';

export default function TeamSection() {
  const capabilities = [
    { title: 'PRODUCT', tags: ['STRATEGY', 'ROADMAP', 'ANALYTICS'] },
    { title: 'DESIGN', tags: ['UI/UX', 'SYSTEMS', 'INTERACTION'] },
    { title: 'ENGINEERING', tags: ['FRONTEND', 'BACKEND', 'DEVOPS'] },
    { title: 'GROWTH', tags: ['SEO', 'MARKETING', 'CONVERSION'] },
  ];

  const teamMembers = [
    {
      name: 'PRIYA ANAND',
      role: 'FOUNDER & PRODUCT STRATEGIST',
      bio: 'A highly skilled professional focusing on bringing structure and clarity to complex digital systems. 10+ years scaling technical operations.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMCmcfSd2y4go82HDTDONNVfnwRQwVcgLHoOlIsiORn5QIF_4CmyR6VPh-DHA5ZiX0ttJKnESfCjgVaePZ2URTVLGI4DVEiiEQHyD2cNkMPhapEsOIBaZDtQ7_cTTNR4otSehK5i_mK5Rt2O9nWKz0ZCctsN0Xvk8SRsZzLO2_sqG8LPLwqO47QJX6T2gxMVjVS22VouB4BUyFCT-zTZQAykqM0pclKD4PuehDd6rPzladYShKUoGQqg',
    },
    {
      name: 'RAJESH KUMAR',
      role: 'LEAD SOFTWARE ARCHITECT',
      bio: 'Specializes in crafting intuitive user experiences based on rigorous research, clean code, and architectural design principles.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-s0ZWd2h12oCfmYy0mRaWkRZSe1PhGvcbqWKR-KdlAaMlvfS0HMrNrA3d3GDJbwyZXGpH-Z0f-1AyZtjafFsxPDQ3mVQQttH0cSxFLlZPd7wwsJBwBl2GGHaLr5Znff5Fl6KOAJjZRuEeMPvpbVQfxrD8XEwVRfMYUjrYrx6ac6r8ggFt4KaDb3eLzVlKwuYYUn_i4UaKbxQtEfqqIHSBnFofhCZEpj_fRM1JDu_W3lFihtUybBA2ug',
    },
    {
      name: 'SNEHA NAIR',
      role: 'HEAD OF UI/UX DESIGN',
      bio: 'Engineering lead bridging the gap between elegant frontend interfaces and robust scalable backend architectures.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfn8zzGwD27t7gZ5GEWyn8ZXTWxpMJc_K2qJ17AqIJBd1MVyhk9Bj9fJjMQyNLCu8-vIQdeO-m_A_H8dE4r8dbaKx79a6gpnWo9S1enG2Cyd-000BqdrlgE90dFOAPM_0ySVsFB0-mTmAbqcKu1KSuhNTP5M5n_6LMWtlrGAPHt9ZAM3eFHB16lWPewL4SWRw_njSNvmg9VSbrhZ6Djj_O96SRdVn4JMPEQwf38y_EmlVPjzr7IKJzhA',
    },
    {
      name: 'ARJUN MEHTA',
      role: 'GROWTH & PERFORMANCE LEAD',
      bio: 'Drives product adoption through data-driven performance strategies, conversion rate optimization, and market analytics.',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBksJONIxHoT6GZUa1R90gz9tMBLoaRB5GYiNKnyTsNRAzWUfendozgdR1Prav-3eP6WJ2SCqozL5R9rwtwkc5sm-_rJwMQZSTryAuiv-OmZGeZ3HCmgaSKHWLK4xCS0wDvGUAQBpMFJXzIfRoA-L0PUgFN5G1G1Gw2o1wEBhsDYVA0ghVva5Jss0w7ivoUm4awalDGELJoHVrdK3x2WKDzsAxF2889ad-DDnc7bwFNJRdW4y1VZdN_CA',
    },
  ];

  return (
    <section id="team" className="py-20 border-t border-transparent relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16">
        {/* Header */}
        <header className="mb-16 border-b border-transparent pb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-xs text-[#b85c24]">add</span>
            <span className="font-label-technical text-xs text-[#b85c24] tracking-widest uppercase font-bold">
              04 / THE PEOPLE
            </span>
          </div>
          <h2 className="font-headline-lg text-4xl sm:text-6xl text-[#1a1c1b] mb-6 max-w-3xl font-extrabold">
            People behind the products.
          </h2>
          <p className="font-body-lg text-base sm:text-lg text-[#55433a] max-w-2xl font-normal">
            A multidisciplinary team combining product thinking, engineering, design and digital growth.
          </p>
        </header>

        {/* Bento Grid: Capabilities & Stats */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">
          {/* Capabilities Grid */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {capabilities.map((cap, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="glass-panel p-6 relative flex flex-col justify-between min-h-[190px] rounded-xs"
              >
                <span className="absolute top-4 right-4 material-symbols-outlined text-xs text-[#929292]">
                  add
                </span>
                <h3 className="font-headline-md text-2xl text-white mb-4 font-bold">
                  {cap.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cap.tags.map((t, i) => (
                    <span
                      key={i}
                      className="font-label-technical text-[10px] px-3 py-1 border border-white/15 rounded-xs bg-[#f9f9f6] text-[#1a1c1b] font-bold"
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
            className="md:col-span-4 glass-panel p-8 flex flex-col justify-between min-h-[400px] bg-[#98440b] text-white rounded-xs"
          >
            <div>
              <div className="font-label-technical text-xs mb-2 opacity-90 uppercase tracking-widest font-bold">
                TEAM METRICS
              </div>
              <div className="border-t border-white/20 my-4 w-full" />
            </div>
            <div className="space-y-6">
              <div>
                <div className="font-headline-lg text-5xl font-extrabold">05+</div>
                <div className="font-label-technical text-xs opacity-90 uppercase tracking-widest font-bold">
                  CORE CAPABILITIES
                </div>
              </div>
              <div>
                <div className="font-headline-lg text-5xl font-extrabold">08+</div>
                <div className="font-label-technical text-xs opacity-90 uppercase tracking-widest font-bold">
                  DISCIPLINES
                </div>
              </div>
              <div>
                <div className="font-headline-md text-3xl font-extrabold mb-1">ONE</div>
                <div className="font-label-technical text-xs opacity-90 uppercase tracking-widest font-bold">
                  SHARED WORKFLOW
                </div>
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
          className="py-16 border-y border-transparent mb-20 flex items-center justify-center text-center px-4"
        >
          <blockquote className="font-headline-lg text-2xl sm:text-4xl text-[#98440b] max-w-4xl mx-auto font-bold italic leading-snug">
            "Different skills. One shared responsibility: building something useful."
          </blockquote>
        </motion.div>

        {/* Core Team Members Grid */}
        <div>
          <div className="flex items-center gap-2 mb-8">
            <span className="material-symbols-outlined text-xs text-[#b85c24]">add</span>
            <span className="font-label-technical text-xs text-[#55433a] tracking-widest uppercase font-bold">
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
                whileHover={{ y: -6 }}
                className="group cursor-pointer bg-white p-4 border border-transparent rounded-xs shadow-xs"
              >
                <div className="aspect-[3/4] mb-4 overflow-hidden bg-[#e2e3e0] relative rounded-xs">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale opacity-85 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="border-t border-[#191919]/10 pt-4">
                  <h4 className="font-headline-md text-lg font-bold text-[#1a1c1b] uppercase mb-1">
                    {member.name}
                  </h4>
                  <p className="font-label-technical text-[10px] text-[#b85c24] mb-3 font-bold uppercase tracking-widest">
                    {member.role}
                  </p>
                  <p className="font-body-md text-xs text-[#55433a] leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
