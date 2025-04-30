
import React, { useEffect, useRef } from 'react';
import { MessageSquare } from 'lucide-react';
import { gsap } from 'gsap';

const WhatsappButton: React.FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const button = buttonRef.current;
    const ripple = rippleRef.current;
    
    if (!button || !ripple) return;
    
    // Entry animation
    gsap.fromTo(
      button,
      { 
        scale: 0,
        opacity: 0,
        rotation: -180
      },
      { 
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 0.6,
        ease: 'back.out(1.7)',
        delay: 1
      }
    );
    
    // Ripple animation
    gsap.to(ripple, {
      scale: 1.5, 
      opacity: 0,
      duration: 1.5,
      repeat: -1,
      ease: 'power1.out'
    });
    
    // Hover animation setup
    const timeline = gsap.timeline({ paused: true });
    timeline.to(button, {
      scale: 1.1,
      boxShadow: '0 0 20px rgba(255, 107, 107, 0.7)',
      duration: 0.3
    });
    
    const onMouseEnter = () => timeline.play();
    const onMouseLeave = () => timeline.reverse();
    
    button.addEventListener('mouseenter', onMouseEnter);
    button.addEventListener('mouseleave', onMouseLeave);
    
    return () => {
      button.removeEventListener('mouseenter', onMouseEnter);
      button.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/9455535193', '_blank');
  };

  return (
    <div className="relative">
      <div 
        ref={rippleRef}
        className="absolute inset-0 bg-[#FF6B6B] rounded-full opacity-40 z-30"
      ></div>
      <button 
        ref={buttonRef}
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 left-6 z-40 shadow-lg rounded-full w-16 h-16 flex items-center justify-center bg-[#FF6B6B] text-white interactive"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare size={28} fill="white" />
      </button>
    </div>
  );
};

export default WhatsappButton;
