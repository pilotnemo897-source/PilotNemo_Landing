import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, ShieldCheck, Target, Users, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { FloatingOrb } from './ui/FloatingOrb';

const ecosystemSteps = [
  {
    number: '01',
    title: 'Brand Strategy',
    icon: <Compass className="w-6 h-6 text-nexus-blue-secondary" />,
    desc: 'Positioning & Identity',
    output: 'Phase 1 Deliverable: Distinct Market Positioning, Logo System, & Brand Messaging Framework'
  },
  {
    number: '02',
    title: 'High-Speed Web Engine',
    icon: <ShieldCheck className="w-6 h-6 text-nexus-blue-secondary" />,
    desc: 'Conversion Platform',
    output: 'Phase 2 Deliverable: 100/100 PageSpeed Website/App built with React & Next-Gen Security'
  },
  {
    number: '03',
    title: 'Targeted Growth Ads',
    icon: <Target className="w-6 h-6 text-nexus-blue-secondary" />,
    desc: 'Multi-Channel Traffic',
    output: 'Phase 3 Deliverable: High-Intent Google & Meta Ad Campaigns capturing buyers ready to convert'
  },
  {
    number: '04',
    title: 'Qualified Buyer Leads',
    icon: <Users className="w-6 h-6 text-nexus-blue-secondary" />,
    desc: 'Automated CRM Routing',
    output: 'Phase 4 Deliverable: Instant Lead Notifications, Automated Qualification & CRM Synchronization'
  },
  {
    number: '05',
    title: 'Scalable Revenue',
    icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
    desc: 'Predictable Growth',
    output: 'Phase 5 Deliverable: 3x-5x Lead Volume Growth with Scalable Operational Systems'
  }
];

export const GrowthSystem: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  return (
    <section id="growth-system" className="py-24 bg-nexus-navy text-white relative overflow-hidden">
      {/* Ambient Glowing Orbs */}
      <FloatingOrb color="blue" size="xl" position="-top-40 right-0" />
      <FloatingOrb color="navy" size="lg" position="bottom-0 left-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          eyebrow="UNIFIED GROWTH ARCHITECTURE"
          title="One Growth Partner."
          highlightText="Zero Disconnected Vendors."
          subtitle="We unify branding, engineering, performance marketing, and conversion funnels into a seamless digital revenue engine."
          align="center"
          theme="dark"
          className="mb-16"
        />

        {/* Connected Ecosystem Grid */}
        <div className="relative mb-12">
          {/* Connecting Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-[5%] right-[5%] h-0.5 -translate-y-6 z-0">
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
              <motion.line
                x1="0"
                y1="0"
                x2="100%"
                y2="0"
                stroke="url(#lineGradient)"
                strokeWidth="3"
                strokeDasharray="8 8"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: 'easeInOut' }}
              />
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#155EEF" />
                  <stop offset="50%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {ecosystemSteps.map((step, index) => {
              const isActive = activeStepIndex === index;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  onMouseEnter={() => setActiveStepIndex(index)}
                  onClick={() => setActiveStepIndex(index)}
                  className={`group rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? 'glass-dark border-2 border-nexus-blue bg-nexus-blue/10 scale-105 shadow-nexus-glow z-20'
                      : 'glass-dark border border-white/10 hover:border-nexus-blue/50 hover:bg-white/5'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs font-extrabold tracking-widest px-2.5 py-1 rounded-full border ${
                        isActive
                          ? 'bg-nexus-blue text-white border-nexus-blue'
                          : 'text-nexus-blue-secondary bg-nexus-blue/20 border-nexus-blue/30'
                      }`}>
                        {step.number}
                      </span>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isActive ? 'bg-nexus-blue text-white' : 'bg-white/5 border border-white/10 group-hover:bg-nexus-blue'
                      }`}>
                        {step.icon}
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-extrabold text-white mb-1 group-hover:text-nexus-blue-secondary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-300 font-medium">
                      {step.desc}
                    </p>
                  </div>

                  {/* Arrow indicator for mobile */}
                  {index < ecosystemSteps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-4 text-nexus-blue/60">
                      <ArrowRight className="w-5 h-5 rotate-90 md:rotate-0" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Active Phase Output Banner */}
        <motion.div
          key={activeStepIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto bg-gradient-to-r from-nexus-navy-card via-nexus-navy-light to-nexus-navy p-5 sm:p-6 rounded-2xl border border-nexus-blue/30 shadow-xl text-center"
        >
          <div className="inline-flex items-center gap-2 text-xs font-extrabold text-emerald-400 uppercase tracking-widest mb-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Interactive Phase Output Detail</span>
          </div>
          <p className="text-sm sm:text-base font-bold text-white">
            {ecosystemSteps[activeStepIndex].output}
          </p>
        </motion.div>

        {/* Bottom Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center max-w-2xl mx-auto bg-white/5 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10"
        >
          <p className="text-xs sm:text-sm font-semibold text-slate-300">
            ⚡ Stop managing fragmented freelancers & agencies. PilotNemo delivers a unified digital growth stack with end-to-end accountability.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

