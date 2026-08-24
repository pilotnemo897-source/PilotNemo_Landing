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
          eyebrow="AGILE EXECUTION FRAMEWORK"
          title="Our 5-Step Process:"
          highlightText="Predictable Engineering & Launch."
          subtitle="A battle-tested 5-step framework that turns complex business objectives into high-ROI digital assets."
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
                transition={{ duration: 0.4, delay: idx * 0.12 }}
                className="flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center pl-16 lg:pl-0 group"
              >
                {/* Timeline Step Icon Bubble */}
                <div className="absolute left-1 lg:static mb-0 lg:mb-6 w-12 h-12 rounded-2xl bg-white border-2 border-nexus-blue text-nexus-blue shadow-md flex items-center justify-center font-bold group-hover:bg-nexus-blue group-hover:text-white group-hover:scale-110 transition-all duration-300 z-10">
                  {iconMap[step.iconName]}
                </div>

                {/* Step Content Card */}
                <div className="bg-slate-50 hover:bg-white p-5 lg:p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-nexus-hover transition-all duration-300 w-full group-hover:-translate-y-1">
                  <div className="inline-block text-[11px] font-extrabold text-nexus-blue uppercase tracking-widest bg-nexus-blue-light px-2.5 py-0.5 rounded-full mb-2">
                    PHASE {step.number}
                  </div>
                  <h3 className="text-base font-extrabold text-nexus-text mb-2 group-hover:text-nexus-blue transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-nexus-muted leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-1.5 text-left pt-2 border-t border-slate-100">
                    {step.details.map((detail) => (
                      <li key={detail} className="text-[11px] font-semibold text-slate-600 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-nexus-blue flex-shrink-0" />
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

