
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    
    if (!cursor || !cursorDot) return;
    
    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power3.out'
      });
      
      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
      });
    };
    
    const onMouseEnterInteractive = () => {
      gsap.to(cursor, {
        scale: 1.5,
        opacity: 0.8,
        border: '1px solid rgba(255, 255, 255, 0.8)',
        duration: 0.3
      });
    };
    
    const onMouseLeaveInteractive = () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        border: '1px solid rgba(255, 255, 255, 0.2)',
        duration: 0.3
      });
    };
    
    // Add event listener for mouse movement
    window.addEventListener('mousemove', onMouseMove);
    
    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', onMouseEnterInteractive);
      el.addEventListener('mouseleave', onMouseLeaveInteractive);
    });
    
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive);
        el.removeEventListener('mouseleave', onMouseLeaveInteractive);
      });
    };
  }, []);
  
  return (
    <>
      <div 
        ref={cursorRef}
        className="custom-cursor hidden md:block fixed top-0 left-0 w-8 h-8 rounded-full border border-white/20 pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"
      />
      <div 
        ref={cursorDotRef}
        className="cursor-dot hidden md:block fixed top-0 left-0 w-2 h-2 bg-gradient-to-r from-[#1FB6FF] to-[#7E5BEF] rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
};

export default CustomCursor;
