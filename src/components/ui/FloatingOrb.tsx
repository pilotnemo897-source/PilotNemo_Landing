import React from 'react';

interface FloatingOrbProps {
  color?: 'blue' | 'navy' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  position?: string;
  className?: string;
}

export const FloatingOrb: React.FC<FloatingOrbProps> = ({
  color = 'blue',
  size = 'md',
  position = 'top-10 left-10',
  className = ''
}) => {
  const sizes = {
    sm: 'w-48 h-48 blur-2xl',
    md: 'w-72 h-72 blur-3xl',
    lg: 'w-96 h-96 blur-3xl',
    xl: 'w-[500px] h-[500px] blur-[120px]'
  };

  const colors = {
    blue: 'bg-nexus-blue/20',
    navy: 'bg-nexus-navy/40',
    light: 'bg-nexus-blue-secondary/15'
  };

  return (
    <div
      className={`absolute pointer-events-none rounded-full animate-pulse-subtle ${sizes[size]} ${colors[color]} ${position} ${className}`}
      aria-hidden="true"
    />
  );
};
