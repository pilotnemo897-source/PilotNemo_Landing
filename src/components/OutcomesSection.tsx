import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, TrendingUp, CheckCircle } from 'lucide-react';
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
    <section id="outcomes" className="py-24 bg-nexus-bg border-t border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="TANGIBLE IMPACT"
          title="We Don't Just Deliver."
          highlightText="We Create Business Outcomes."
          subtitle="Every line of code, design pixel, and ad campaign is engineered around measurable revenue growth."
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
              className="group bg-white rounded-3xl p-8 border border-slate-200/80 shadow-nexus-card hover:shadow-nexus-hover hover:border-nexus-blue/30 transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row items-start gap-6">
                
                {/* Number Badge & Icon Box */}
                <div className="flex flex-col items-center sm:items-start gap-3">
                  <span className="text-3xl font-black text-slate-300 group-hover:text-nexus-blue transition-colors">
                    {outcome.number}
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-nexus-blue-50 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                    {iconMap[outcome.iconName]}
                  </div>
                </div>

                {/* Content Details */}
                <div className="flex-1">
                  <h3 className="text-xl font-extrabold text-nexus-text mb-3 tracking-tight group-hover:text-nexus-blue transition-colors">
                    {outcome.title}
                  </h3>
                  <p className="text-base text-nexus-muted leading-relaxed mb-6 font-normal">
                    {outcome.description}
                  </p>

                  {/* Impact Metric Pill */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Key Outcome: {outcome.metrics}</span>
                  </div>
                </div>

              </div>

              {/* Decorative Corner Accent */}
              <div className="absolute -bottom-10 -right-10 w-28 h-28 bg-nexus-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
