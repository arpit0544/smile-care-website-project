
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';
import AnimatedLogo from './AnimatedLogo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });
    const nav = navRef.current;
    
    if (nav) {
      tl.current
        .to(nav, { 
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          padding: '8px 0',
          duration: 0.3,
          ease: 'power2.out'
        });
    }
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
        tl.current?.play();
      } else {
        setIsScrolled(false);
        tl.current?.reverse();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav 
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <AnimatedLogo size={isScrolled ? 'sm' : 'md'} />

        <div className="hidden md:flex items-center space-x-8">
          {[
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About Us' },
            { path: '/treatments', label: 'Treatments' },
            { path: '/services', label: 'Services' },
            { path: '/doctors', label: 'Doctors' },
            { path: '/contact', label: 'Contact' }
          ].map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className={`nav-link interactive relative group overflow-hidden ${
                isActive(item.path) ? 'active text-[#1FB6FF]' : 'text-[#2E2E2E] hover:text-[#1FB6FF]'
              }`}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#1FB6FF] to-[#7E5BEF] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></span>
            </Link>
          ))}
        </div>

        <button 
          className="md:hidden text-[#1FB6FF] interactive focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-dark/90 backdrop-blur-md z-50 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-500 md:hidden`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMobileMenu} className="text-[#1FB6FF] interactive">
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {[
            { path: '/', label: 'Home' },
            { path: '/about', label: 'About Us' },
            { path: '/treatments', label: 'Treatments' },
            { path: '/services', label: 'Services' },
            { path: '/doctors', label: 'Doctors' },
            { path: '/contact', label: 'Contact' }
          ].map((item, index) => (
            <Link 
              key={item.path} 
              to={item.path} 
              style={{animationDelay: `${index * 0.1}s`}}
              className={`text-2xl mobile-nav-item ${
                isActive(item.path) ? 'text-[#1FB6FF]' : 'text-white'
              }`} 
              onClick={toggleMobileMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
