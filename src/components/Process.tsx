import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Palette, Code, LineChart, Check } from 'lucide-react';
import { processData } from '../data/process';
import { SectionHeading } from './ui/SectionHeading';

const iconMap: Record<string, React.ReactNode> = {
  Search: <Search className="w-5 h-5" />,
  Compass: <Compass className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  Code: <Code className="w-5 h-5" />,
  LineChart: <LineChart className="w-5 h-5" />
};

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="SUCCESS ROADMAP"
          title="Our Process:"
          highlightText="Your Roadmap to Success"
          subtitle="A battle-tested 5-step framework that turns complex challenges into predictable digital results."
          align="center"
          className="mb-20"
        />

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Desktop Connecting Bar */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-1 bg-slate-100 z-0 rounded-full">
            <motion.div
              className="h-full bg-gradient-to-r from-nexus-blue via-nexus-blue-secondary to-emerald-500 rounded-full"
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </div>

          {/* Mobile Connecting Vertical Bar */}
          <div className="lg:hidden absolute top-8 bottom-8 left-6 w-1 bg-slate-100 z-0">
            <motion.div
              className="w-full bg-nexus-blue"
              initial={{ height: '0%' }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </div>

          {/* 5 Steps Timeline Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {processData.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center pl-16 lg:pl-0 group"
              >
                {/* Timeline Step Icon Bubble */}
                <div className="absolute left-1 lg:static mb-0 lg:mb-6 w-12 h-12 rounded-2xl bg-white border-2 border-nexus-blue text-nexus-blue shadow-md flex items-center justify-center font-bold group-hover:bg-nexus-blue group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  {iconMap[step.iconName]}
                </div>

                {/* Step Content */}
                <div className="bg-slate-50 lg:bg-transparent p-5 lg:p-0 rounded-2xl border border-slate-100 lg:border-none w-full">
                  <div className="inline-block text-xs font-extrabold text-nexus-blue uppercase tracking-widest mb-1">
                    STEP {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-nexus-text mb-2 group-hover:text-nexus-blue transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-nexus-muted leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-1.5 text-left">
                    {step.details.map((detail) => (
                      <li key={detail} className="text-[11px] font-semibold text-slate-600 flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-nexus-blue flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
