import React from 'react';
import { motion } from 'framer-motion';
import { statsData, clientLogos } from '../data/stats';
import { AnimatedCounter } from './ui/AnimatedCounter';

export const TrustSection: React.FC = () => {
  return (
    <section className="py-16 bg-white border-y border-slate-200/70 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Client Logos Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold text-nexus-muted uppercase tracking-widest">
            TRUSTED BY FORWARD-THINKING BUSINESSES & INDUSTRY LEADERS
          </p>
        </div>

        {/* Client Logos Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-center opacity-75 mb-14">
          {clientLogos.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-3 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer"
            >
              <span className="font-extrabold text-slate-700 group-hover:text-nexus-blue text-lg tracking-tight transition-colors">
                {client.name}
              </span>
              <span className="text-[11px] font-medium text-slate-400">
                {client.industry}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Stats Grid with Dividers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-slate-100">
          {statsData.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex flex-col items-center text-center ${
                idx !== statsData.length - 1 ? 'md:border-r md:border-slate-200/60' : ''
              }`}
            >
              <div className="text-4xl sm:text-5xl font-black text-nexus-text tracking-tight mb-2">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  className="gradient-text-blue inline-block"
                />
              </div>
              <div className="text-sm font-semibold text-nexus-muted uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
