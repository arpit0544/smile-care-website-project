
import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';
import AnimatedCounter from '../components/AnimatedCounter';
import { Tooth, Hospital, Clock, Users, MessageSquare } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-16">
        {/* Hero Section with Video */}
        <div className="hero-video-container">
          <video
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://player.vimeo.com/external/467931342.sd.mp4?s=2b94fd3fcd4f52817f4a84c08a620852c65c4a5c&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center font-poppins">
              Your Smile, Our Priority
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-center font-light">
              Smile Care Dental Clinic
            </h2>
            <Link 
              to="https://wa.me/9455535193"
              target="_blank"
              className="appointment-btn"
            >
              <MessageSquare size={20} />
              Book Appointment
            </Link>
          </div>
        </div>

        {/* Introduction Section */}
        <section className="py-16 md:py-24 px-4 bg-dental-lightGray">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animated-bg p-8 rounded-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                  Welcome to Smile Care Dental Clinic
                </h2>
                <p className="text-gray-700 mb-6">
                  At Smile Care Dental Clinic, we believe that a healthy smile is a beautiful smile. 
                  Led by Dr. Rajkumar Yadav, our clinic provides comprehensive dental care with the 
                  latest technology and techniques in a comfortable environment.
                </p>
                <p className="text-gray-700 mb-8">
                  Our mission is to provide personalized dental care that meets your unique needs and exceeds
                  your expectations. We focus on preventive care and patient education to help you maintain
                  optimal oral health.
                </p>
                <Link 
                  to="/about" 
                  className="gradient-bg px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
                >
                  Learn More About Us
                </Link>
              </div>
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                  alt="Modern dental clinic" 
                  className="rounded-lg shadow-xl w-full max-w-md animate-float"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Highlight */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto">
            <SectionTitle 
              title="Our Featured Services" 
              subtitle="We provide comprehensive dental care for your entire family"
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  icon: <Tooth size={48} className="text-dental-aqua" />, 
                  title: "Dental Implants", 
                  desc: "Restore missing teeth with permanent, natural-looking implants" 
                },
                { 
                  icon: <Hospital size={48} className="text-dental-aqua" />, 
                  title: "Cosmetic Dentistry", 
                  desc: "Enhance your smile with our aesthetic dental procedures" 
                },
                { 
                  icon: <Users size={48} className="text-dental-aqua" />, 
                  title: "Family Dentistry", 
                  desc: "Comprehensive dental care for patients of all ages" 
                },
                { 
                  icon: <Clock size={48} className="text-dental-aqua" />, 
                  title: "Emergency Care", 
                  desc: "Quick and effective solutions for dental emergencies" 
                }
              ].map((service, index) => (
                <div 
                  key={index}
                  className="dental-card-hover bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-dental-blue">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                to="/treatments" 
                className="gradient-bg px-8 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300"
              >
                View All Treatments
              </Link>
            </div>
          </div>
        </section>

        {/* Statistics/Counters Section */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-dental-blue to-dental-aqua text-white">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <AnimatedCounter end={5000} suffix="+" />
                <p className="text-lg font-medium mt-2">Happy Patients</p>
              </div>
              <div>
                <AnimatedCounter end={10} suffix="+" />
                <p className="text-lg font-medium mt-2">Years Experience</p>
              </div>
              <div>
                <AnimatedCounter end={15} suffix="+" />
                <p className="text-lg font-medium mt-2">Dental Specialists</p>
              </div>
              <div>
                <AnimatedCounter end={12} suffix="+" />
                <p className="text-lg font-medium mt-2">Dental Services</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto bg-dental-lightBlue rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                  Ready for a Healthier Smile?
                </h2>
                <p className="text-gray-700 mb-6">
                  Schedule your dental appointment today and take the first step towards a healthier, more beautiful smile.
                  Dr. Rajkumar Yadav and our team are ready to provide you with exceptional dental care.
                </p>
                <Link 
                  to="https://wa.me/9455535193"
                  target="_blank"
                  className="appointment-btn"
                >
                  <MessageSquare size={20} />
                  Book Your Appointment
                </Link>
              </div>
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                  alt="Dental appointment" 
                  className="rounded-xl shadow-lg w-full max-w-md"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
