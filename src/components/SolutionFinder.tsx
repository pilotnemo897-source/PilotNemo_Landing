import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, ArrowRight, HelpCircle, Clock, Zap, Users, ShieldCheck } from 'lucide-react';
import { solutionOptions } from '../data/solutions';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';

export const SolutionFinder: React.FC = () => {
  const [selectedSolutionId, setSelectedSolutionId] = useState<string>(solutionOptions[0].id);

  const selectedSolution = solutionOptions.find((sol) => sol.id === selectedSolutionId) || solutionOptions[0];

  return (
    <section id="solutions" className="py-24 bg-nexus-bg border-y border-slate-200/80 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="INTERACTIVE SOLUTION WIDGET"
          title="Match Your Primary Business Goal to an"
          highlightText="Engineered Growth System."
          subtitle="Select your current objective below to instantly generate a tailored delivery roadmap, timeline, and projected ROI."
          align="center"
          className="mb-12"
        />

        {/* Goal Selector Pills Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {solutionOptions.map((opt) => {
            const isSelected = opt.id === selectedSolutionId;
            return (
              <button
                key={opt.id}
                onClick={() => setSelectedSolutionId(opt.id)}
                className={`relative px-5 py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-nexus-blue text-white shadow-nexus-hover scale-105 ring-2 ring-nexus-blue/30'
                    : 'bg-white text-nexus-text border border-slate-200 hover:border-nexus-blue/50 hover:bg-slate-50'
                }`}
              >
                {isSelected && <Sparkles className="w-4 h-4 text-white animate-spin" />}
                <span>{opt.pillText}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Solution Calculator Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSolution.id}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="bg-white rounded-3xl p-6 sm:p-10 border border-nexus-blue/20 shadow-2xl shadow-nexus-blue/10 relative overflow-hidden"
          >
            {/* Header Status & Target Audience Meta */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs border border-emerald-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>RECOMMENDED ENTERPRISE PACKAGE</span>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-nexus-muted bg-slate-100 px-3 py-1 rounded-full">
                <Users className="w-3.5 h-3.5 text-nexus-blue" />
                <span>Ideal For: <strong className="text-nexus-text">{selectedSolution.targetAudience}</strong></span>
              </div>
            </div>

            {/* Package Title & Subtitle Goal */}
            <h3 className="text-2xl sm:text-3xl font-black text-nexus-text mb-2">
              {selectedSolution.recommendedPackage}
            </h3>
            <p className="text-xs sm:text-sm font-bold text-nexus-blue mb-4">
              Objective: {selectedSolution.goalTitle}
            </p>
            <p className="text-sm text-nexus-muted mb-8 leading-relaxed">
              {selectedSolution.description}
            </p>

            {/* Timeline & Projected ROI Metric Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-nexus-blue-50/80 p-4 rounded-2xl border border-nexus-blue/20 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-nexus-blue text-white flex items-center justify-center font-bold flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-nexus-muted uppercase block">Estimated Delivery Phase</span>
                  <span className="text-sm font-extrabold text-nexus-text">{selectedSolution.estimatedTimeline}</span>
                </div>
              </div>

              <div className="bg-emerald-50/80 p-4 rounded-2xl border border-emerald-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-emerald-800 uppercase block">Expected Business ROI</span>
                  <span className="text-xs font-extrabold text-emerald-950">{selectedSolution.expectedRoi}</span>
                </div>
              </div>
            </div>

            {/* Included Stack & Core Deliverables Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 rounded-2xl p-6 border border-slate-200/80 mb-8">
              <div>
                <span className="text-xs font-extrabold text-nexus-muted uppercase tracking-wider block mb-3">
                  Included Core Capabilities:
                </span>
                <div className="space-y-2">
                  {selectedSolution.includedServices.map((serviceName) => (
                    <div key={serviceName} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-nexus-text">
                      <div className="w-4 h-4 rounded-full bg-nexus-blue/10 text-nexus-blue flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3 h-3" />
                      </div>
                      <span>{serviceName}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-extrabold text-nexus-muted uppercase tracking-wider block mb-3">
                  Guaranteed Deliverables Checklist:
                </span>
                <div className="space-y-2">
                  {selectedSolution.coreDeliverables.map((deliv) => (
                    <div key={deliv} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-nexus-text">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                        <ShieldCheck className="w-3 h-3" />
                      </div>
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
              <div className="text-xs text-nexus-muted font-semibold flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-nexus-blue flex-shrink-0" />
                <span>Require a custom enterprise scope? We tailor custom engineering agreements.</span>
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

