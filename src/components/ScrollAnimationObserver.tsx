
import React, { useEffect, useRef } from 'react';

interface ScrollAnimationObserverProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollAnimationObserver: React.FC<ScrollAnimationObserverProps> = ({ 
  children,
  className = ''
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const element = elementRef.current;

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div ref={elementRef} className={`fade-in-scroll ${className}`}>
      {children}
    </div>
  );
};

export default ScrollAnimationObserver;
