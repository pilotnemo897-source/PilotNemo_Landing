import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="pt-28 pb-12 sm:pt-36 sm:pb-16 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Royal Blue Hero Card Container (Matches Reference UI Screenshot) */}
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 rounded-3xl p-6 sm:p-12 lg:p-14 text-white shadow-2xl relative overflow-hidden">
          
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 bg-grid-dark opacity-20 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 flex flex-col items-start"
            >
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-white border border-white/20 text-xs font-extrabold uppercase tracking-wider mb-6 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>ACCELERATE YOUR BUSINESS</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-white leading-[1.15] mb-6 tracking-tight">
                Business Innovation With Digital Growth & IT Services Expertise
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-blue-100 leading-relaxed mb-8 max-w-xl font-normal">
                Empowering ambitious enterprises through full-stack web engineering, custom mobile apps, brand strategy, and performance-driven marketing systems.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
                <a href="#contact">
                  <button className="px-6 py-3.5 rounded-full bg-white text-blue-700 font-extrabold text-sm hover:bg-blue-50 transition-all shadow-lg hover:scale-105 flex items-center gap-2 cursor-pointer">
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </a>

                <a href="#about" className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 flex items-center justify-center text-white group-hover:scale-110 transition-all">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                  <span className="text-xs font-bold text-white group-hover:underline">Watch Overview</span>
                </a>
              </div>

              {/* Rating Badges Footer Bar (Clutch & Google Stars) */}
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/15 w-full">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/15">
                  <span className="text-xs font-black text-white">Clutch</span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-blue-100 ml-1">4.9/5 Rating</span>
                </div>

                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/15">
                  <span className="text-xs font-black text-white">Google</span>
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-blue-100 ml-1">5.0/5 Reviews</span>
                </div>
              </div>

            </motion.div>

            {/* Right Visual Image Block (Team Collaboration Photo with Play Badge Overlay) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6 relative flex justify-center"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 group">
                <img
                  src="/assets/hero_team_collaboration.png"
                  alt="PilotNemo IT Services Team Collaboration"
                  className="w-full h-auto object-cover max-h-[460px] rounded-2xl group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Play Button Badge */}
                <div className="absolute inset-0 bg-blue-900/20 backdrop-blur-[2px] flex items-center justify-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-2xl border-4 border-white/80 animate-pulse hover:scale-110 transition-transform cursor-pointer">
                    <Play className="w-8 h-8 fill-white ml-1" />
                  </div>
                </div>

                {/* Bottom Verified Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-white/50 flex items-center justify-between text-nexus-text shadow-lg">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <div>
                      <div className="text-xs font-black">Verified IT Solution Partner</div>
                      <div className="text-[10px] text-nexus-muted font-medium">Delivering 100% Guaranteed ROI</div>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                    99.8% Speed
                  </span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};


