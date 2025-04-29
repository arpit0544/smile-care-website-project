
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-dental-blue to-dental-aqua text-white">
      <div className="container mx-auto py-12 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          {/* Clinic Info */}
          <div className="mb-6 md:mb-0">
            <img 
              src="/lovable-uploads/8166bab8-053c-4b31-a7a8-a42ad05540ec.png" 
              alt="Smile Care Dental Clinic Logo" 
              className="h-16 mb-4"
            />
            <p className="mb-4 text-sm">
              Your Smile, Our Priority. We provide comprehensive dental care with the latest technology and techniques.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-poppins">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-dental-lightBlue transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-dental-lightBlue transition-colors">About Us</Link></li>
              <li><Link to="/treatments" className="hover:text-dental-lightBlue transition-colors">Treatments</Link></li>
              <li><Link to="/services" className="hover:text-dental-lightBlue transition-colors">Services</Link></li>
              <li><Link to="/doctors" className="hover:text-dental-lightBlue transition-colors">Doctors</Link></li>
              <li><Link to="/contact" className="hover:text-dental-lightBlue transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          {/* Treatments */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-poppins">Our Treatments</h3>
            <ul className="space-y-2">
              <li><Link to="/treatments" className="hover:text-dental-lightBlue transition-colors">Implants</Link></li>
              <li><Link to="/treatments" className="hover:text-dental-lightBlue transition-colors">Orthodontics</Link></li>
              <li><Link to="/treatments" className="hover:text-dental-lightBlue transition-colors">Fillings</Link></li>
              <li><Link to="/treatments" className="hover:text-dental-lightBlue transition-colors">Cosmetic Dentistry</Link></li>
              <li><Link to="/treatments" className="hover:text-dental-lightBlue transition-colors">Oral Surgery</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-poppins">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="mt-1 flex-shrink-0" size={18} />
                <p className="text-sm">Civil Line Rd, Chedibeer, Bhadohi Nagar Palika, Jalalpur, Uttar Pradesh 221401</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:+919455535193" className="hover:text-dental-lightBlue transition-colors">+91 9455535193</a>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <p className="text-sm">Mon-Sat: 9:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Smile Care Dental Clinic. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
