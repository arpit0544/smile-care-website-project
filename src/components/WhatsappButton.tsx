
import React from 'react';
import { MessageSquare } from 'lucide-react';

const WhatsappButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/9455535193', '_blank');
  };

  return (
    <button 
      onClick={handleWhatsAppClick}
      className="whatsapp-button"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare size={28} fill="white" />
    </button>
  );
};

export default WhatsappButton;
