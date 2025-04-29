
import React, { useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";
import PageTransition from '../components/PageTransition';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center bg-dental-lightGray px-4">
        <div className="text-center">
          <h1 className="text-8xl font-bold gradient-text mb-4">404</h1>
          <p className="text-2xl text-dental-darkGray mb-8">Oops! Page not found</p>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link to="/" className="appointment-btn">
            Return to Homepage
          </Link>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
