import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  size = 'md'
}) => {
  const isLight = variant === 'light';

  // Crisp dimensions matching the logo proportions (width : height approx 3.1 : 1)
  const sizeClasses = {
    sm: 'h-8 sm:h-9 w-auto',
    md: 'h-10 sm:h-11 w-auto',
    lg: 'h-12 sm:h-14 w-auto',
    xl: 'h-16 sm:h-18 w-auto'
  };

  const logoSrc = isLight ? '/logo-white.svg' : '/logo.svg';

  return (
    <div className="flex items-center shrink-0 select-none">
      <img
        src={logoSrc}
        alt="NOMAQ GROUP PLC"
        className={`${sizeClasses[size]} object-contain transition-transform duration-200 group-hover:scale-[1.02]`}
        loading="eager"
        decoding="async"
      />
    </div>
  );
};
