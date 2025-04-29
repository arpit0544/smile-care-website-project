
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/8166bab8-053c-4b31-a7a8-a42ad05540ec.png" 
            alt="Smile Care Dental Clinic Logo" 
            className="h-12 md:h-14"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About Us</Link>
          <Link to="/treatments" className={`nav-link ${isActive('/treatments') ? 'active' : ''}`}>Treatments</Link>
          <Link to="/services" className={`nav-link ${isActive('/services') ? 'active' : ''}`}>Services</Link>
          <Link to="/doctors" className={`nav-link ${isActive('/doctors') ? 'active' : ''}`}>Doctors</Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>
        </div>

        <button 
          className="md:hidden text-dental-blue focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-white z-50 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 md:hidden`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMobileMenu} className="text-dental-blue">
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <Link to="/" 
            className={`text-xl ${isActive('/') ? 'text-dental-blue' : 'text-dental-darkGray'}`} 
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link to="/about" 
            className={`text-xl ${isActive('/about') ? 'text-dental-blue' : 'text-dental-darkGray'}`} 
            onClick={toggleMobileMenu}
          >
            About Us
          </Link>
          <Link to="/treatments" 
            className={`text-xl ${isActive('/treatments') ? 'text-dental-blue' : 'text-dental-darkGray'}`} 
            onClick={toggleMobileMenu}
          >
            Treatments
          </Link>
          <Link to="/services" 
            className={`text-xl ${isActive('/services') ? 'text-dental-blue' : 'text-dental-darkGray'}`} 
            onClick={toggleMobileMenu}
          >
            Services
          </Link>
          <Link to="/doctors" 
            className={`text-xl ${isActive('/doctors') ? 'text-dental-blue' : 'text-dental-darkGray'}`} 
            onClick={toggleMobileMenu}
          >
            Doctors
          </Link>
          <Link to="/contact" 
            className={`text-xl ${isActive('/contact') ? 'text-dental-blue' : 'text-dental-darkGray'}`} 
            onClick={toggleMobileMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
