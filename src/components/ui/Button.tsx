import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'navy';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer';
  
  const variants = {
    primary: 'bg-nexus-blue hover:bg-nexus-blue-hover text-white shadow-md hover:shadow-nexus-hover focus:ring-nexus-blue',
    secondary: 'bg-nexus-blue-light hover:bg-blue-100 text-nexus-blue font-semibold focus:ring-nexus-blue-secondary',
    navy: 'bg-nexus-navy hover:bg-nexus-navy-light text-white border border-nexus-navy-light shadow-md focus:ring-nexus-blue',
    outline: 'border-2 border-nexus-blue text-nexus-blue hover:bg-nexus-blue hover:text-white focus:ring-nexus-blue',
    ghost: 'text-nexus-text hover:text-nexus-blue hover:bg-nexus-blue-50 focus:ring-nexus-blue'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg font-semibold gap-2.5'
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="transition-transform duration-300 group-hover:-translate-x-0.5">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </button>
  );
};
