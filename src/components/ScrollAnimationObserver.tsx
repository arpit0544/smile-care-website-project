
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationObserverProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'scale-up' | 'slide-left' | 'slide-right';
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

const ScrollAnimationObserver: React.FC<ScrollAnimationObserverProps> = ({ 
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  duration = 0.8,
  threshold = 0.1,
  once = true
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Set initial state based on animation type
    let initialProps = {};
    let animationProps = {};

    switch (animation) {
      case 'fade-up':
        initialProps = { opacity: 0, y: 50 };
        animationProps = { opacity: 1, y: 0 };
        break;
      case 'fade-in':
        initialProps = { opacity: 0 };
        animationProps = { opacity: 1 };
        break;
      case 'scale-up':
        initialProps = { opacity: 0, scale: 0.85 };
        animationProps = { opacity: 1, scale: 1 };
        break;
      case 'slide-left':
        initialProps = { opacity: 0, x: 50 };
        animationProps = { opacity: 1, x: 0 };
        break;
      case 'slide-right':
        initialProps = { opacity: 0, x: -50 };
        animationProps = { opacity: 1, x: 0 };
        break;
      default:
        initialProps = { opacity: 0, y: 30 };
        animationProps = { opacity: 1, y: 0 };
    }

    // Set initial state
    gsap.set(element, initialProps);

    // Create the animation with ScrollTrigger
    const animation = gsap.to(element, {
      ...animationProps,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: `top bottom-=${threshold * 100}%`,
        toggleActions: once ? 'play none none none' : 'play reverse play reverse',
        once,
      }
    });

    return () => {
      // Clean up animation
      animation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animation, delay, duration, threshold, once]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollAnimationObserver;
