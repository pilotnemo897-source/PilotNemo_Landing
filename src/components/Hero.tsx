import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, DollarSign, CheckCircle2, ShieldCheck, Activity } from 'lucide-react';
import { Button } from './ui/Button';
import { FloatingOrb } from './ui/FloatingOrb';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background Orbs */}
      <FloatingOrb color="blue" size="xl" position="-top-36 -left-36" />
      <FloatingOrb color="light" size="lg" position="top-1/3 -right-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Hero Copy & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-nexus-blue-light border border-nexus-blue/20 text-nexus-blue text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-nexus-blue animate-ping" />
              PREMIUM DIGITAL GROWTH PARTNER
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-nexus-text tracking-tight leading-[1.12] mb-6">
              Build Your <span className="text-nexus-blue">Brand.</span><br />
              Grow Your <span className="gradient-text-blue">Business.</span><br />
              Go <span className="text-nexus-blue">Digital.</span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-lg sm:text-xl text-nexus-muted leading-relaxed mb-8 max-w-xl">
              Powerful digital solutions designed to move your business forward. We combine strategy, creative design, and cutting-edge technology to help ambitious businesses grow rapidly.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-8">
              <a href="#contact" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Start Growing Now
                </Button>
              </a>
              <a href="#solutions" className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  size="lg"
                  fullWidth
                >
                  Explore Solutions
                </Button>
              </a>
            </div>

            {/* Supporting Microcopy */}
            <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-nexus-muted pt-2 border-t border-slate-200/80 w-full">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-nexus-blue" /> Strategy
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-nexus-blue" /> Design
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-nexus-blue" /> Technology
              </span>
              <span className="text-slate-300">•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-nexus-blue" /> Growth
              </span>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Business Growth Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-6 relative flex justify-center"
          >
            {/* Dashboard Outer Frame Container */}
            <div className="relative w-full max-w-lg lg:max-w-none bg-gradient-to-b from-white via-nexus-blue-50/50 to-nexus-blue-light/60 p-4 sm:p-6 rounded-3xl border border-nexus-blue/20 shadow-2xl shadow-nexus-blue/10 backdrop-blur-xl">
              
              {/* Dashboard Top Header Bar */}
              <div className="flex items-center justify-between bg-white px-4 py-3 rounded-2xl border border-slate-200/80 shadow-sm mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-400" />
                    <span className="w-3 h-3 rounded-full bg-amber-400" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs font-semibold text-nexus-muted ml-2">Nexus Growth Engine</span>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 text-emerald-700 text-xs font-semibold">
                  <Activity className="w-3.5 h-3.5 animate-pulse" /> Live Growth
                </div>
              </div>

              {/* Main Dashboard Grid */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-nexus-card space-y-5">
                
                {/* Metric Summary Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="bg-nexus-blue-50/70 p-3.5 rounded-xl border border-nexus-blue/15">
                    <span className="text-xs font-medium text-nexus-muted block">Monthly Visitors</span>
                    <span className="text-xl font-bold text-nexus-text block mt-0.5">148,200</span>
                    <span className="inline-flex items-center text-xs font-bold text-emerald-600 mt-1">
                      <TrendingUp className="w-3 h-3 mr-1" /> +148% Traffic
                    </span>
                  </div>

                  <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/60">
                    <span className="text-xs font-medium text-nexus-muted block">Conversion Rate</span>
                    <span className="text-xl font-bold text-nexus-text block mt-0.5">4.82%</span>
                    <span className="inline-flex items-center text-xs font-bold text-nexus-blue mt-1">
                      <Users className="w-3 h-3 mr-1" /> +72% Growth
                    </span>
                  </div>

                  <div className="col-span-2 sm:col-span-1 bg-nexus-navy p-3.5 rounded-xl border border-nexus-navy text-white">
                    <span className="text-xs font-medium text-slate-300 block">Quarterly Revenue</span>
                    <span className="text-xl font-bold text-white block mt-0.5">$2.4M</span>
                    <span className="inline-flex items-center text-xs font-bold text-emerald-400 mt-1">
                      <DollarSign className="w-3 h-3 mr-0.5" /> High ROI
                    </span>
                  </div>
                </div>

                {/* Animated Chart Component */}
                <div className="pt-2">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-nexus-text">Revenue & Lead Acquisition Growth</span>
                    <span className="text-xs text-nexus-blue font-semibold">2026 Q1-Q3</span>
                  </div>
                  <div className="h-44 w-full bg-slate-50 rounded-xl p-3 border border-slate-100 relative flex items-end">
                    {/* SVG Curve Chart */}
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 400 120" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#155EEF" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#155EEF" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>
                      {/* Area Fill */}
                      <path
                        d="M 0 100 Q 80 80, 160 50 T 320 20 T 400 5 L 400 120 L 0 120 Z"
                        fill="url(#chartGradient)"
                      />
                      {/* Line */}
                      <motion.path
                        d="M 0 100 Q 80 80, 160 50 T 320 20 T 400 5"
                        fill="none"
                        stroke="#155EEF"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                      />
                    </svg>

                    {/* Animated Pulsing Data Points */}
                    <div className="absolute top-[10%] right-[5%] flex items-center gap-1.5 bg-nexus-blue text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-md animate-bounce">
                      <span>Peak Growth</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Element 1: Top-Right Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-5 -right-4 sm:-right-6 bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-nexus-text">98% Satisfaction</div>
                  <div className="text-[11px] text-nexus-muted">Verified Client Rating</div>
                </div>
              </motion.div>

              {/* Floating Element 2: Bottom-Left Card */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-6 -left-4 sm:-left-6 bg-nexus-navy text-white p-3.5 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-nexus-blue flex items-center justify-center font-bold text-white">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">+148% Traffic</div>
                  <div className="text-[11px] text-slate-300">Targeted Lead Growth</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
