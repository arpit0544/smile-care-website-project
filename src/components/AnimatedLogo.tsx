
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

interface AnimatedLogoProps {
  size?: 'sm' | 'md' | 'lg';
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ size = 'md' }) => {
  const logoRef = useRef<HTMLDivElement>(null);
  const logoDotRef = useRef<HTMLDivElement>(null);
  const logoTextRef = useRef<HTMLDivElement>(null);
  
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12 md:h-14',
    lg: 'h-16 md:h-20',
  };
  
  useEffect(() => {
    const logo = logoRef.current;
    const logoDot = logoDotRef.current;
    const logoText = logoTextRef.current;
    
    if (!logo || !logoDot || !logoText) return;
    
    // Initial animation when component mounts
    const timeline = gsap.timeline();
    
    timeline
      .fromTo(logo, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 0.6, ease: 'power3.out' })
      .fromTo(logoDot, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.7)' })
      .fromTo(logoText, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' });
    
    // Hover animation setup
    const onMouseEnter = () => {
      gsap.to(logoDot, {
        scale: 1.3,
        backgroundColor: '#7E5BEF',
        duration: 0.3,
        ease: 'power2.out'
      });
      
      gsap.to(logoText, {
        y: -3,
        duration: 0.3,
        ease: 'power2.out'
      });
    };
    
    const onMouseLeave = () => {
      gsap.to(logoDot, {
        scale: 1,
        backgroundColor: '#1FB6FF',
        duration: 0.3,
        ease: 'power2.out'
      });
      
      gsap.to(logoText, {
        y: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    };
    
    logo.addEventListener('mouseenter', onMouseEnter);
    logo.addEventListener('mouseleave', onMouseLeave);
    
    return () => {
      logo.removeEventListener('mouseenter', onMouseEnter);
      logo.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);
  
  return (
    <Link to="/" className="interactive">
      <div ref={logoRef} className="relative flex items-center">
        <img 
          src="/lovable-uploads/8166bab8-053c-4b31-a7a8-a42ad05540ec.png" 
          alt="Smile Care Dental Clinic Logo" 
          className={`${sizeClasses[size]}`}
        />
        <div 
          ref={logoDotRef}
          className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#1FB6FF] shadow-lg shadow-[#1FB6FF]/30"
        />
        <div 
          ref={logoTextRef}
          className="absolute -bottom-2 right-0 bg-gradient-to-r from-[#1FB6FF] to-[#7E5BEF] text-transparent bg-clip-text text-[8px] font-bold"
        >
          SINCE 2013
        </div>
      </div>
    </Link>
  );
};

export default AnimatedLogo;
