import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark' | 'hover';
  className?: string;
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  variant = 'light',
  className = '',
  onClick
}) => {
  const styles = {
    light: 'bg-white/90 backdrop-blur-md border border-nexus-border shadow-nexus-card text-nexus-text',
    dark: 'bg-nexus-navy-card/70 backdrop-blur-xl border border-white/10 shadow-2xl text-white',
    hover: 'bg-white border border-nexus-border shadow-nexus-sm hover:shadow-nexus-hover hover:border-nexus-blue/30 transition-all duration-300 hover:-translate-y-1 text-nexus-text'
  };

  return (
    <div
      onClick={onClick}
      className={`rounded-2xl p-6 md:p-8 ${styles[variant]} ${className}`}
    >
      {children}
    </div>
  );
};
