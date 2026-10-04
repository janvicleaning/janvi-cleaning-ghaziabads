import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const JanviLogo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-11 w-11',
    md: 'h-14 w-14 sm:h-16 sm:w-16',
    lg: 'h-20 w-20 sm:h-24 sm:w-24',
  };

  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      {/* 3D Glossy Emblem Logo matching user image */}
      <div className={`relative ${sizeClasses[size]} rounded-2xl overflow-hidden shadow-md shadow-sky-600/15 border border-sky-100 bg-white p-0.5 transition-transform hover:scale-105 duration-300`}>
        <img
          src="./images/logo.jpg"
          alt="Janvi Cleaning Logo"
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (target.src.includes('./images/logo.jpg')) {
              target.src = '/src/assets/images/janvi_logo_mark_1791124100753.jpg';
            }
          }}
        />
        {/* Subtle glossy sheen overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/5 via-transparent to-white/40 pointer-events-none" />
      </div>
    </div>
  );
};
