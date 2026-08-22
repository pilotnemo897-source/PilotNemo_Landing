import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ShieldCheck, Target, Users, TrendingUp, ArrowRight } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';
import { FloatingOrb } from './ui/FloatingOrb';

const ecosystemSteps = [
  {
    number: '01',
    title: 'Brand Strategy',
    icon: <Compass className="w-6 h-6 text-nexus-blue-secondary" />,
    desc: 'Positioning & Identity'
  },
  {
    number: '02',
    title: 'High-Performance Website',
    icon: <ShieldCheck className="w-6 h-6 text-nexus-blue-secondary" />,
    desc: 'Conversion Engine'
  },
  {
    number: '03',
    title: 'Targeted Marketing',
    icon: <Target className="w-6 h-6 text-nexus-blue-secondary" />,
    desc: 'Traffic & Awareness'
  },
  {
    number: '04',
    title: 'Qualified Leads',
    icon: <Users className="w-6 h-6 text-nexus-blue-secondary" />,
    desc: 'Buying Prospects'
  },
  {
    number: '05',
    title: 'Sustainable Growth',
    icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
    desc: 'Scalable Revenue'
  }
];

export const GrowthSystem: React.FC = () => {
  return (
    <section className="py-24 bg-nexus-navy text-white relative overflow-hidden">
      {/* Ambient Glowing Orbs */}
      <FloatingOrb color="blue" size="xl" position="-top-40 right-0" />
      <FloatingOrb color="navy" size="lg" position="bottom-0 left-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          eyebrow="CONNECTED SYSTEM"
          title="One Partner."
          highlightText="Everything Your Business Needs to Grow."
          subtitle="We connect branding, design, technology, and marketing into one complete digital growth system."
          align="center"
          theme="dark"
          className="mb-20"
        />

        {/* Connected Business Ecosystem Grid */}
        <div className="relative">
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
            {ecosystemSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group glass-dark rounded-2xl p-6 border border-white/10 hover:border-nexus-blue/60 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold tracking-widest text-nexus-blue-secondary bg-nexus-blue/20 px-2.5 py-1 rounded-full border border-nexus-blue/30">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-nexus-blue transition-colors">
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-nexus-blue-secondary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow indicator for mobile & tablet */}
                {index < ecosystemSteps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-4 text-nexus-blue/60">
                    <ArrowRight className="w-5 h-5 rotate-90 md:rotate-0" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Banner Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center max-w-2xl mx-auto bg-white/5 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10"
        >
          <p className="text-sm font-medium text-slate-300">
            ⚡ Stop managing multiple disconnected agencies. PilotNemo unifies your entire growth stack under one roof.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
