import { motion } from 'framer-motion';

interface ApproachSectionProps {
  onStartProject?: () => void;
  onExploreServices?: () => void;
}

export default function ApproachSection({ onStartProject, onExploreServices }: ApproachSectionProps) {
  const strategySteps = [
    {
      num: '01',
      title: 'DISCOVER',
      items: ['Business goals', 'User needs', 'Market context', 'Existing challenges'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGYAD0cqclkryJR4BojRwwG_tOJ3WtrNaSngwWYChFd8D6wapj_t6XPUjqWju__E3fdNyyPIv8dapN7o038VU43x57pENRidZ_DQnueOvAC_InTJv7sR2I-e33_McT2fDCUEy_sZ2CTAWEQjQ_PVZ4WLxPBiKX4Y4LIX72fxZchAGhMQYjxLihvA2ptqSEmysEyn7HqpaYddWIF1suK3jI-9to1xJSpasKHqn0DMjp1x7orUTIZrqC5-5F6adgaqyZ_s_iz0ytjJPlKsA',
    },
    {
      num: '02',
      title: 'PLAN',
      items: ['Product strategy', 'Feature planning', 'Technology selection', 'Project roadmap'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZLi8i8hEdlf2EE_aTNELERoHvW0zlW6sOu3AHP5ar70Yue3QaQJghsc81H3I9YDUMEO_m98Mld9CmZKR0kh87YTTtl85PeoLDfKlqWueqeAeY268C8cQrWL9HtYP7Nzmx1GLsbpdXAWvETqoY6R2Rc3C2WO7tHPlj6gWk7bz9RlMpQg0xvayLWUGwC9y5W8tVOj2GH5K3DOJRbYJZZce8kmeniKhcj18bV_BxwfX6seL44jFIUQxSdayGJV9Pk6zmipueMVmm76J_x7I',
    },
    {
      num: '03',
      title: 'DESIGN',
      items: ['UX research', 'User flows', 'Wireframes', 'UI design & Prototypes'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrYq57v2RD06C8BGcV1mpUgBr8cU1pt1HLltVCE7-dvyhudQz780aK6HXFbccPDcOtKixfZ12sO54sZz7fYJnL1CmAgtn4R9Ohy9pF2FAN-doYrdYVNvNjyXPz2hs60-jxUfn4z8LN1DOKfeL9Ke0_xceeoF2rEMDM-xyTO9qjkrSTq8jHw6wfukjt__RVG7ZVEO14FnCpKTdFX8lK9EOzEU57fbt8dU8xwj9TQXe15z3OP7qv5BDDtvZakhqJWQ3RiMyxHkEPvEyP8qI',
    },
    {
      num: '04',
      title: 'BUILD',
      items: ['Mobile dev', 'Web dev', 'Backend systems', 'API integration & Testing'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-6GT6mXm4nlnisc_Fl3gtJFzC1VJiEy6MlWiq1PWp1ACSsuYWrAA-bC3ZR-bc_ltgWE4d7gBJ4tl2fl0OOS55m73FrSba-fkcJDFFvfm0-fbACjq0UqzJZ-DDc-VsBFckmDZyHb6ARkyE5-V0MIjEYzGyX-RMzD2QryN2Dgo4mH5BpM0a-X6tPpdAx9dkINq156McLu0Wo8MGMr9vmKJ774UtlU57GJ6rbYMeRIReLDQZZaPELbpW4Kgy_Tw3qjXV1wrMLJt4sFawa_g',
    },
    {
      num: '05',
      title: 'GROW',
      items: ['Digital marketing', 'SEO', 'Analytics', 'Optimization & Growth'],
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6AdolD28w_DWyxnoAKY6wN6q21d33yIaUVIqpLF5S3hYKFel8u6lvBQGiIyeNP2disUYvhitZdAYtG6Gkravy47gLumWYvLArJICqUCuc9u2kjHan0tQj3lpOhAToiagyjKd_K3pcj_VdNf1G8-xKYS5nzuPhTWlNtv2rgnlyQTzhDjyK7zp_JmPrMXxr1RtIJUBmqnRXeLh3bylVDidNDqTjmI3euMLesqCdlFMzU5NR5rW1K9oZVFccP-Xzcn8qgWhBF_zlkDLMnBA',
    },
  ];

  const whyBlocks = [
    {
      title: 'ONE TEAM',
      desc: 'We bring strategy, design, development and growth marketing under one roof. No silos, no miscommunication.',
    },
    {
      title: 'BUSINESS-FIRST THINKING',
      desc: "We don't just write code. We build digital products that drive revenue, efficiency and business value.",
    },
    {
      title: 'DESIGN + DEVELOPMENT',
      desc: 'Our designers code and our developers design. The result is beautiful software that actually works.',
    },
    {
      title: 'BUILT TO SCALE',
      desc: 'We architect our solutions to grow with your business, using robust, modern technology stacks.',
    },
    {
      title: 'USER-CENTERED EXPERIENCES',
      desc: 'We prioritize intuitive UX/UI that your customers will love to use, reducing friction and increasing engagement.',
    },
    {
      title: 'GROWTH AFTER LAUNCH',
      desc: 'Launch is just the beginning. We provide ongoing support, optimization, and digital marketing to ensure success.',
    },
  ];

  const matrixData = [
    {
      category: 'STRATEGY',
      items: ['Digital Transformation', 'Product Strategy', 'Market Research', 'Technical Architecture'],
    },
    {
      category: 'DESIGN',
      items: ['UX/UI Design', 'Brand Identity', 'Prototyping', 'Design Systems'],
    },
    {
      category: 'DEVELOPMENT',
      items: ['Web Applications', 'Mobile Apps', 'Custom Software', 'E-Commerce'],
    },
    {
      category: 'GROWTH',
      items: ['SEO & Content', 'Performance Marketing', 'Data & Analytics', 'CRO'],
    },
  ];

  return (
    <section id="approach" className="py-16 border-t border-white/8 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-16">
        {/* Header Section */}
        <header className="mb-12 border-b border-transparent pb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-xs text-tech-accent">add</span>
            <span className="font-label-technical text-xs text-blue-300/70 font-bold uppercase tracking-widest">
              03 / OUR APPROACH
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-7">
              <h2 className="font-headline-lg text-4xl sm:text-6xl text-white font-extrabold leading-tight">
                Strategy first. <span className="text-blue-300">Built for what comes next.</span>
              </h2>
            </div>
            <div className="md:col-span-5">
              <p className="font-body-lg text-base sm:text-lg text-blue-100/70 border-l-2 border-blue-400/40 pl-6 font-medium leading-relaxed">
                At PilotNemo, we don't start with code. We first understand the business, the users and the problem — then design and build the right digital solution.
              </p>
            </div>
          </div>
        </header>

        {/* SECTION 01 — OUR STRATEGY */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <span className="material-symbols-outlined text-xs text-tech-accent">add</span>
            <h3 className="font-label-technical text-xs text-white font-bold uppercase tracking-widest">
              SECTION 01 — OUR STRATEGY
            </h3>
          </div>

          {/* Animated progress bar across all steps */}
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="font-label-technical text-[9px] text-tech-accent tracking-widest uppercase font-bold">WORKFLOW PROGRESS</span>
              <span className="font-label-technical text-[9px] text-muted-text font-bold">IDEA → GROWTH</span>
            </div>
            <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-tech-accent rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
              />
            </div>
            <div className="flex justify-between mt-1.5">
              {strategySteps.map((s) => (
                <span key={s.num} className="font-label-technical text-[8px] text-muted-text tracking-widest">{s.num}</span>
              ))}
            </div>
          </div>

          {/* Strategy Steps — animated progress timeline */}
          <div className="relative">
            {/* Connector line behind cards (desktop) */}
            <div className="hidden md:block absolute top-9 left-0 right-0 h-[2px] bg-white/8 z-0">
              <motion.div
                className="h-full bg-tech-accent/40"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 0.4, ease: 'easeOut' }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
              {strategySteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12, duration: 0.5, ease: 'easeOut' }}
                  className="flex flex-col items-center md:items-start group"
                >
                  {/* Step badge */}
                  <div className="relative mb-4 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.12 + 0.2, duration: 0.4, type: 'spring', stiffness: 200 }}
                      className="w-10 h-10 rounded-full bg-tech-accent flex items-center justify-center shadow-md border-2 border-white"
                    >
                      <span className="font-label-technical text-[10px] text-white font-extrabold">{step.num}</span>
                    </motion.div>
                  </div>

                  {/* Card */}
                  <div className="w-full p-4 bg-white border border-white/80 group-hover:border-blue-400/30 group-hover:shadow-lg transition-all rounded-xl shadow-sm">
                    <div className="mb-4 overflow-hidden bg-transparent flex justify-center items-center">
                      <img
                        src={step.img}
                        alt={step.title}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
                      />
                    </div>
                    <h4 className="font-headline-md text-lg text-[#002D72] font-bold mb-3">
                      {step.title}
                    </h4>
                    <ul className="space-y-1.5 font-body-md text-xs text-on-surface-variant font-medium">
                      {step.items.map((item, i) => (
                        <li key={i} className="font-semibold flex items-center gap-1.5 text-[#374f8a]">
                          <span className="w-1 h-1 rounded-full bg-tech-accent shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {/* Mini progress strip per step */}
                    <div className="mt-4 h-[2px] w-full bg-[#002D72]/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-tech-accent"
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15 + 0.5, duration: 0.8, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center p-4 border border-white/10 bg-white/8 backdrop-blur-sm rounded-xl">
            <p className="font-label-technical text-xs text-white font-bold tracking-widest uppercase text-center">
              FROM IDEA <span className="text-blue-400 mx-2 font-extrabold">→</span> PRODUCT{' '}
              <span className="text-blue-400 mx-2 font-extrabold">→</span> GROWTH. One connected process. One team.
            </p>
          </div>
          </div>


        {/* SECTION 02 — WHY PILOTNEMO */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-xs text-tech-accent">add</span>
            <h3 className="font-label-technical text-xs text-white font-bold uppercase tracking-widest">
              SECTION 02 — WHY PILOTNEMO
            </h3>
          </div>
          <h4 className="font-headline-md text-2xl sm:text-3xl text-white font-bold mb-6">
            More than development. A complete digital partner.
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyBlocks.map((block, idx) => (
              <div
                key={idx}
                className="p-6 border border-white/10 bg-white/8 backdrop-blur-sm hover:border-blue-400/40 hover:bg-white/12 transition-all rounded-2xl"
              >
                <h5 className="font-headline-md text-xl text-white font-bold mb-4">
                  {block.title}
                </h5>
                <p className="font-body-md text-sm text-blue-100/70 font-medium leading-relaxed">
                  {block.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 03 — PILOTNEMO DIFFERENCE */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-xs text-tech-accent">add</span>
            <h3 className="font-label-technical text-xs text-white font-bold uppercase tracking-widest">
              SECTION 03 — PILOTNEMO DIFFERENCE
            </h3>
          </div>
          <h4 className="font-headline-md text-2xl sm:text-4xl text-white font-extrabold mb-6 max-w-3xl leading-tight">
            Why work with multiple teams when one team can connect everything?
          </h4>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Traditional Multi-Vendor Approach */}
            <div className="lg:col-span-6 bg-[#fff7f7] border border-red-200/50 p-6 sm:p-8 rounded-xs flex flex-col justify-between relative overflow-hidden shadow-xs hover:border-red-300 transition-all">
              <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/5 rounded-bl-full pointer-events-none" />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-red-200/80">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-red-600 text-lg">warning</span>
                    <span className="font-label-technical text-xs font-bold text-red-700 uppercase tracking-widest">
                      TRADITIONAL APPROACH
                    </span>
                  </div>
                  <span className="font-label-small text-[10px] bg-red-100 text-red-800 px-2.5 py-1 rounded-xs font-bold uppercase">
                    HIGH RISK
                  </span>
                </div>

                {/* Disconnected Steps */}
                <div className="space-y-4 mb-8">
                  {/* Step 1 */}
                  <div className="p-4 bg-white border border-transparent rounded-xs shadow-2xs relative">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-headline-md text-sm font-bold text-[#002D72]">
                        01. Strategy → Agency A
                      </span>
                      <span className="font-label-small text-[10px] text-red-600 font-semibold bg-red-50 px-2 py-0.5 rounded-xs">
                        High Overhead
                      </span>
                    </div>
                    <p className="font-body-md text-xs text-gray-500">
                      Product goals defined without engineering feasibility check.
                    </p>
                  </div>

                  {/* Connector 1 */}
                  <div className="flex items-center justify-center py-0.5">
                    <div className="flex items-center gap-1 text-red-400 font-label-technical text-[10px]">
                      <span className="material-symbols-outlined text-sm">link_off</span>
                      <span className="uppercase tracking-widest font-semibold">Handover Friction</span>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="p-4 bg-white border border-transparent rounded-xs shadow-2xs relative">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-headline-md text-sm font-bold text-[#002D72]">
                        02. Design → Agency B
                      </span>
                      <span className="font-label-small text-[10px] text-red-600 font-semibold bg-red-50 px-2 py-0.5 rounded-xs">
                        Scope Loss
                      </span>
                    </div>
                    <p className="font-body-md text-xs text-gray-500">
                      Visual designs created without understanding technical stack limits.
                    </p>
                  </div>

                  {/* Connector 2 */}
                  <div className="flex items-center justify-center py-0.5">
                    <div className="flex items-center gap-1 text-red-400 font-label-technical text-[10px]">
                      <span className="material-symbols-outlined text-sm">link_off</span>
                      <span className="uppercase tracking-widest font-semibold">Communication Gap</span>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="p-4 bg-white border border-transparent rounded-xs shadow-2xs relative">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-headline-md text-sm font-bold text-[#002D72]">
                        03. Development → Freelancers
                      </span>
                      <span className="font-label-small text-[10px] text-red-600 font-semibold bg-red-50 px-2 py-0.5 rounded-xs">
                        No Ownership
                      </span>
                    </div>
                    <p className="font-body-md text-xs text-gray-500">
                      Fragmented code, missed sprint deadlines, and zero post-launch maintenance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Warning Alert */}
              <div className="p-4 bg-red-100/80 border border-transparent rounded-xs flex items-center gap-3">
                <span className="material-symbols-outlined text-red-600 text-xl">error_med</span>
                <div>
                  <div className="font-label-technical text-xs font-extrabold text-red-800 uppercase tracking-widest">
                    DISCONNECTED WORKFLOWS
                  </div>
                  <p className="font-body-md text-xs text-red-700 font-medium">
                    Higher cost, delayed launches & no long-term accountability.
                  </p>
                </div>
              </div>
            </div>

            {/* PilotNemo Integrated Connected Model */}
            <div className="lg:col-span-6 bg-gradient-to-br from-[#0A235C] to-[#1e3e62] text-white border border-transparent p-6 sm:p-8 rounded-xs flex flex-col justify-between relative overflow-hidden shadow-xl hover:border-sky-400/50 transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-400/10 rounded-bl-full pointer-events-none" />

              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/15">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sky-400 text-lg">verified</span>
                    <span className="font-label-technical text-xs font-bold text-white uppercase tracking-widest">
                      PILOTNEMO INTEGRATED MODEL
                    </span>
                  </div>
                  <span className="font-label-small text-[10px] bg-sky-400/15 text-sky-300 border border-transparent px-2.5 py-1 rounded-xs font-bold uppercase flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                    CONNECTED ENGINE
                  </span>
                </div>

                {/* Connected Flow List */}
                <div className="bg-white/5 border border-transparent p-4 rounded-xs mb-8 space-y-4">
                  {[
                    { title: 'Strategy & Feasibility Audit', note: 'Clear technical architecture blueprint from Day 1' },
                    { title: 'UX/UI & Interactive Prototyping', note: 'Designers who understand live code & accessibility' },
                    { title: 'Agile Sprint Engineering', note: '2-week milestone demos with transparent Git commits' },
                    { title: 'Zero-Downtime Deployment & QA', note: 'Security hardening & automated load testing' },
                    { title: 'Continuous Growth & 24/7 Managed SLA', note: 'Dedicated support, performance tuning & CRO' },
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-sky-400 text-xl shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <div>
                        <div className="font-headline-md text-sm font-bold text-white">
                          {step.title}
                        </div>
                        <div className="font-body-md text-xs text-gray-300">
                          {step.note}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Success Highlight */}
              <div className="p-4 bg-sky-400/10 border border-transparent rounded-xs flex items-center gap-3">
                <span className="material-symbols-outlined text-sky-400 text-xl">auto_awesome</span>
                <div>
                  <div className="font-label-technical text-xs font-extrabold text-sky-300 uppercase tracking-widest">
                    ONE TEAM, ONE WORKFLOW
                  </div>
                  <p className="font-body-md text-xs text-gray-300 font-medium">
                    100% IP ownership, 3x faster delivery & single-point accountability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 04 — WHAT WE BRING TO THE TABLE */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-xs text-tech-accent">add</span>
            <h3 className="font-label-technical text-xs text-white font-bold uppercase tracking-widest">
              SECTION 04 — WHAT WE BRING TO THE TABLE
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-white/10 bg-white/8 backdrop-blur-sm rounded-2xl overflow-hidden">
            {matrixData.map((col, idx) => (
              <div
                key={idx}
                className="p-5 border-b sm:border-b-0 sm:border-r border-white/8 last:border-r-0"
              >
                <h4 className="font-label-technical text-xs text-tech-accent font-bold mb-4">
                  {col.category}
                </h4>
                <ul className="space-y-2 font-body-md text-blue-100/70 font-medium text-sm">
                  {col.items.map((item, i) => (
                    <li key={i} className="font-semibold">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="border-t border-transparent pt-10 md:pt-14 pb-6 flex flex-col items-center justify-center text-center">
          <h3 className="font-headline-md md:font-display-lg text-3xl md:text-5xl text-white font-extrabold mb-6 max-w-4xl leading-tight">
            HAVE AN IDEA? LET'S TURN IT INTO SOMETHING REAL.
          </h3>
          <p className="font-body-lg text-base sm:text-lg text-blue-100/70 font-medium max-w-2xl mb-6 leading-relaxed">
            Whether you are starting from an idea, improving an existing product or looking to grow your digital presence, PilotNemo can help you plan, design, build and grow it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onStartProject}
              className="flex items-center justify-center gap-2 px-8 py-4 bg-[#4a8ef0] text-white hover:bg-blue-400 transition-all font-label-technical text-xs font-bold uppercase tracking-widest rounded-full group cursor-pointer shadow-lg hover:shadow-blue-500/30"
            >
              START A CONVERSATION
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
            <button
              onClick={onExploreServices}
              className="flex items-center justify-center gap-2 px-8 py-4 border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all font-label-technical text-xs font-bold uppercase tracking-widest rounded-full group cursor-pointer backdrop-blur-sm"
            >
              EXPLORE OUR SERVICES
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
