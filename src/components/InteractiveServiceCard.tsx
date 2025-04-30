
import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { LucideIcon } from 'lucide-react';
import ScrollAnimationObserver from './ScrollAnimationObserver';

interface InteractiveServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const InteractiveServiceCard: React.FC<InteractiveServiceCardProps> = ({
  icon,
  title,
  description,
  index
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const { left, top, width, height } = card.getBoundingClientRect();
    
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    
    gsap.to(card, {
      rotationY: x * 10,
      rotationX: y * -10,
      transformPerspective: 1000,
      duration: 0.5,
      ease: "power2.out"
    });
    
    gsap.to(contentRef.current, {
      x: x * 15,
      y: y * 15,
      duration: 0.5,
      ease: "power2.out"
    });
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
    
    gsap.to(cardRef.current, {
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
      duration: 0.3
    });
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    
    gsap.to(cardRef.current, {
      rotationY: 0,
      rotationX: 0,
      scale: 1,
      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)",
      duration: 0.5
    });
    
    gsap.to(contentRef.current, {
      x: 0,
      y: 0,
      duration: 0.5
    });
  };
  
  return (
    <ScrollAnimationObserver animation="fade-up" delay={0.1 * index}>
      <div 
        ref={cardRef}
        className="feature-card interactive hover-grow p-8 relative overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Hover gradients */}
        <div className={`absolute inset-0 bg-gradient-to-br from-[#1FB6FF]/10 to-[#7E5BEF]/10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
        
        {/* Card content */}
        <div ref={contentRef} className="relative z-10">
          <div className="flex justify-center mb-6 transform transition-all duration-300">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-3 text-center">{title}</h3>
          <p className="text-[#2E2E2E]/80 text-center">{description}</p>
        </div>
        
        {/* Decorative elements */}
        <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-r from-[#1FB6FF]/10 to-[#7E5BEF]/10 blur-xl transition-opacity duration-300 ${isHovered ? 'opacity-70' : 'opacity-0'}`}></div>
        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1FB6FF] to-[#7E5BEF] transform origin-left transition-transform duration-300 ${isHovered ? 'scale-x-100' : 'scale-x-0'}`}></div>
      </div>
    </ScrollAnimationObserver>
  );
};

export default InteractiveServiceCard;
