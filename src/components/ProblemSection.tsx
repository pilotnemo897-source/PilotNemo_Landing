import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Target, BarChart3, Eye, RefreshCw } from 'lucide-react';
import { problemsData } from '../data/problems';
import { SectionHeading } from './ui/SectionHeading';

const iconMap: Record<string, React.ReactNode> = {
  Target: <Target className="w-6 h-6 text-nexus-blue" />,
  BarChart3: <BarChart3 className="w-6 h-6 text-nexus-blue" />,
  Eye: <Eye className="w-6 h-6 text-nexus-blue" />,
  RefreshCw: <RefreshCw className="w-6 h-6 text-nexus-blue" />
};

export const ProblemSection: React.FC = () => {
  return (
    <section id="solutions" className="py-24 bg-nexus-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="THE GROWTH DILEMMA"
          title="Your Business Deserves More"
          highlightText="Than Just a Website."
          subtitle="Digital growth is more than having an online presence. Your brand, technology, and marketing need to work together seamlessly."
          align="center"
          className="mb-16"
        />

        {/* Problem Cards 4-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problemsData.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-white rounded-2xl p-7 border border-slate-200/90 shadow-nexus-sm hover:shadow-nexus-hover hover:border-nexus-blue/40 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Top Meta Header */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold tracking-widest text-nexus-blue bg-nexus-blue-light px-3 py-1 rounded-full border border-nexus-blue/20">
                    {card.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-nexus-blue-50 flex items-center justify-center group-hover:bg-nexus-blue group-hover:text-white transition-colors duration-300">
                    {iconMap[card.iconName]}
                  </div>
                </div>

                {/* Problem Question Title */}
                <h3 className="text-xl font-bold text-nexus-text mb-4 group-hover:text-nexus-blue transition-colors">
                  {card.problem}
                </h3>
              </div>

              {/* Solution Box & Animated Arrow */}
              <div className="pt-6 border-t border-slate-100 mt-4">
                <div className="flex items-center justify-between mb-2 text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-nexus-blue transition-colors">
                  <span>Nexus Solution</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300 text-nexus-blue" />
                </div>
                <p className="text-sm font-semibold text-nexus-muted group-hover:text-nexus-text transition-colors leading-relaxed">
                  {card.solution}
                </p>
              </div>

              {/* Bottom Subtle Blue Glow Accent Bar */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-nexus-blue to-nexus-blue-secondary rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
