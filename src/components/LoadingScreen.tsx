
import React, { useState, useEffect } from 'react';

const LoadingScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loader-container">
      <div className="flex flex-col items-center">
        <div className="loader"></div>
        <div className="mt-4">
          <img 
            src="/lovable-uploads/8166bab8-053c-4b31-a7a8-a42ad05540ec.png" 
            alt="Smile Care Dental Clinic Logo" 
            className="h-16 animate-pulse-slow"
          />
        </div>
        <p className="mt-4 text-dental-darkGray font-poppins">Loading Smile Care...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
