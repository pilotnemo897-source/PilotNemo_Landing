import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlightText?: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  highlightText,
  subtitle,
  align = 'center',
  theme = 'light',
  className = ''
}) => {
  const alignment = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  };

  const isDark = theme === 'dark';

  return (
    <div className={`flex flex-col max-w-3xl ${alignment[align]} ${className}`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 ${
            isDark
              ? 'bg-nexus-blue/20 text-nexus-blue-secondary border border-nexus-blue/30'
              : 'bg-nexus-blue-light text-nexus-blue border border-nexus-blue/15'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-nexus-blue animate-pulse"></span>
          {eyebrow}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] ${
          isDark ? 'text-white' : 'text-nexus-text'
        }`}
      >
        {title}{' '}
        {highlightText && (
          <span className="gradient-text-blue inline-block">{highlightText}</span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-4 text-base md:text-lg lg:text-xl font-normal leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-nexus-muted'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
