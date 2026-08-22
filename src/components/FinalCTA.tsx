import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, PhoneCall } from 'lucide-react';
import { Button } from './ui/Button';
import { FloatingOrb } from './ui/FloatingOrb';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-nexus-navy text-white relative overflow-hidden">
      {/* Animated Blue Orb Background */}
      <FloatingOrb color="blue" size="xl" position="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-nexus-blue/20 text-nexus-blue-secondary border border-nexus-blue/30 text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-4 h-4 text-nexus-blue animate-pulse" />
            READY TO TRANSFORM YOUR BUSINESS?
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] mb-6">
            Your Next Stage of Growth <br className="hidden sm:inline" />
            <span className="gradient-text-blue">Starts Here.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Whether you need a high-converting website, stronger brand, more qualified customers, or a complete custom digital solution, we're ready to partner with you.
          </p>

          {/* Double Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a href="#contact" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                fullWidth
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Start Your Project
              </Button>
            </a>
            <a href="#contact" className="w-full sm:w-auto">
              <Button
                variant="navy"
                size="lg"
                fullWidth
                icon={<PhoneCall className="w-5 h-5 text-nexus-blue-secondary" />}
              >
                Book a Free Consultation
              </Button>
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
