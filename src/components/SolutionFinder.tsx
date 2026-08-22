import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';
import { solutionOptions } from '../data/solutions';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';

export const SolutionFinder: React.FC = () => {
  const [selectedSolutionId, setSelectedSolutionId] = useState<string>(solutionOptions[0].id);

  const selectedSolution = solutionOptions.find((sol) => sol.id === selectedSolutionId) || solutionOptions[0];

  return (
    <section className="py-24 bg-nexus-bg border-y border-slate-200/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="INTERACTIVE CONSULTATION"
          title="Not Sure What Your Business Needs?"
          highlightText="Find Your Solution."
          subtitle="Tell us what you're trying to achieve and we'll immediately recommend the optimal strategy package."
          align="center"
          className="mb-12"
        />

        {/* Goal Selector Pills Scrollable/Wrap Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {solutionOptions.map((opt) => {
            const isSelected = opt.id === selectedSolutionId;
            return (
              <button
                key={opt.id}
                onClick={() => setSelectedSolutionId(opt.id)}
                className={`relative px-5 py-3 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-nexus-blue text-white shadow-nexus-hover scale-105'
                    : 'bg-white text-nexus-text border border-slate-200 hover:border-nexus-blue/50 hover:bg-slate-50'
                }`}
              >
                {isSelected && <Sparkles className="w-4 h-4 text-white animate-spin" />}
                <span>{opt.pillText}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Recommendation Card Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSolution.id}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="bg-white rounded-3xl p-8 sm:p-10 border border-nexus-blue/20 shadow-2xl shadow-nexus-blue/10 relative overflow-hidden"
          >
            {/* Top Recommended Tag */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>RECOMMENDED GROWTH SYSTEM</span>
              </div>
              <span className="text-xs font-semibold text-nexus-muted">
                Tailored for: <strong className="text-nexus-blue">{selectedSolution.pillText}</strong>
              </span>
            </div>

            {/* Package Title */}
            <h3 className="text-2xl sm:text-3xl font-black text-nexus-text mb-3">
              {selectedSolution.recommendedPackage}
            </h3>

            <p className="text-base text-nexus-muted mb-8 leading-relaxed">
              {selectedSolution.description}
            </p>

            {/* Included Stack Grid */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 mb-8">
              <span className="text-xs font-extrabold text-nexus-muted uppercase tracking-wider block mb-4">
                What's Included in this Solution:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedSolution.includedServices.map((serviceName) => (
                  <div key={serviceName} className="flex items-center gap-2.5 text-sm font-semibold text-nexus-text">
                    <div className="w-5 h-5 rounded-full bg-nexus-blue/10 text-nexus-blue flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span>{serviceName}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
              <div className="text-xs text-nexus-muted font-medium flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-nexus-blue" />
                <span>Need a custom scope? We build tailor-made solutions.</span>
              </div>
              <a href="#contact" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="md"
                  fullWidth
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  {selectedSolution.ctaText}
                </Button>
              </a>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
