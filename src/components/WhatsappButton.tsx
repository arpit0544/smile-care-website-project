
import React from 'react';
import { MessageSquare } from 'lucide-react';

const WhatsappButton: React.FC = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/9455535193', '_blank');
  };

  return (
    <button 
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 left-6 z-40 shadow-lg rounded-full w-14 h-14 flex items-center justify-center bg-[#FF6B6B] text-white animate-bounce-slow hover-glow"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare size={28} fill="white" />
    </button>
  );
};

export default WhatsappButton;
