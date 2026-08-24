import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, TrendingUp, CheckCircle, Sparkles } from 'lucide-react';
import { businessOutcomes } from '../data/outcomes';
import { SectionHeading } from './ui/SectionHeading';

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award className="w-7 h-7 text-nexus-blue" />,
  Users: <Users className="w-7 h-7 text-nexus-blue" />,
  Target: <Target className="w-7 h-7 text-nexus-blue" />,
  TrendingUp: <TrendingUp className="w-7 h-7 text-nexus-blue" />
};

export const OutcomesSection: React.FC = () => {
  return (
    <section id="outcomes" className="py-24 bg-nexus-bg border-t border-slate-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="MEASURABLE BUSINESS IMPACT"
          title="We Don't Just Build Platforms."
          highlightText="We Deliver Quantifiable ROI."
          subtitle="Every pixel, line of code, and ad campaign is engineered around measurable enterprise growth."
          align="center"
          className="mb-16"
        />

        {/* 4 Outcome Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {businessOutcomes.map((outcome, idx) => (
            <motion.div
              key={outcome.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white rounded-3xl p-8 border border-slate-200/90 shadow-nexus-card hover:shadow-nexus-hover hover:border-nexus-blue/40 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="flex flex-col sm:flex-row items-start gap-6">
                
                {/* Number Badge & Icon Box */}
                <div className="flex flex-row sm:flex-col items-center sm:items-start justify-between w-full sm:w-auto gap-3">
                  <span className="text-3xl font-black text-slate-300 group-hover:text-nexus-blue transition-colors">
                    {outcome.number}
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-nexus-blue-50 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-nexus-blue group-hover:text-white transition-all duration-300">
                    {iconMap[outcome.iconName]}
                  </div>
                </div>

                {/* Content Details */}
                <div className="flex-1">
                  <div className="inline-flex items-center gap-1 text-[10px] font-extrabold text-nexus-blue uppercase tracking-widest bg-nexus-blue-light px-2.5 py-0.5 rounded-full mb-2">
                    <Sparkles className="w-3 h-3" /> Core Pillar #{outcome.number}
                  </div>
                  
                  <h3 className="text-xl font-extrabold text-nexus-text mb-3 tracking-tight group-hover:text-nexus-blue transition-colors">
                    {outcome.title}
                  </h3>
                  <p className="text-sm text-nexus-muted leading-relaxed mb-6 font-normal">
                    {outcome.description}
                  </p>

                  {/* Impact Metric Pill */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-extrabold text-xs border border-emerald-200">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Proven Outcome: {outcome.metrics}</span>
                  </div>
                </div>

              </div>

              {/* Decorative Corner Ambient Accent */}
              <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-nexus-blue/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

