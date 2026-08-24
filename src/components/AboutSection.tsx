import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-extrabold uppercase tracking-wider mb-4">
              ABOUT OUR COMPANY
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              Seamless IT & Digital Solutions For Your Business Growth.
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-4 max-w-md">
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              PilotNemo is a premier digital growth & IT engineering partner. We combine technology, strategy, and design to elevate market leaders.
            </p>
            <a href="#contact">
              <button className="px-6 py-3 rounded-full bg-blue-600 text-white font-extrabold text-xs hover:bg-blue-700 transition-all shadow-md flex items-center gap-2 cursor-pointer">
                <span>Discover More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </a>
          </div>
        </div>

        {/* Big Visual Team Meeting Banner + Overlay Stats Bar (Matches Screenshot) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 group"
        >
          <img
            src="/assets/about_team_meeting.png"
            alt="PilotNemo Executive Strategy Meeting"
            className="w-full h-[360px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

          {/* Floating Stats Overlay Pill (Bottom Left & Center) */}
          <div className="absolute bottom-6 left-6 right-6 sm:left-10 sm:right-10 bg-white/95 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/80 shadow-2xl flex flex-wrap items-center justify-around gap-4 text-slate-900">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-slate-900 block leading-none">250+</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Projects Completed</span>
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-slate-200" />

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-slate-900 block leading-none">99%</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Client Satisfaction</span>
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-slate-200" />

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-slate-900 block leading-none">10+ Yrs</span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Industry Experience</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
