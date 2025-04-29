
import React from 'react';

interface PageHeroBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  className?: string;
}

const PageHeroBanner: React.FC<PageHeroBannerProps> = ({
  title,
  subtitle,
  backgroundImage,
  className = '',
}) => {
  return (
    <div 
      className={`bg-gradient-to-r from-dental-blue to-dental-aqua text-white py-16 md:py-24 relative overflow-hidden ${className}`}
    >
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1FB6FF]/60 to-[#7E5BEF]/60"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center animate-fade-in">{title}</h1>
        {subtitle && (
          <p className="text-xl text-center max-w-3xl mx-auto animate-fade-in">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default PageHeroBanner;
