
import React from 'react';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';
import { Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const treatmentsData = [
  {
    title: "Prosthetic",
    description: "Replace missing teeth with custom-made prosthetics for improved function and aesthetics.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
  },
  {
    title: "Dentures",
    description: "Removable replacements for missing teeth and surrounding tissues, custom-fitted for comfort.",
    image: "https://images.unsplash.com/photo-1620775997990-1cade0d48d68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
  },
  {
    title: "Oral Surgery",
    description: "Surgical procedures to treat various dental issues, including difficult extractions.",
    image: "https://images.unsplash.com/photo-1589461207126-906b162d6e39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
  },
  {
    title: "Extraction",
    description: "Safe and efficient removal of damaged or problematic teeth when restoration isn't possible.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
  },
  {
    title: "Fillings",
    description: "Restore damaged teeth using composite materials that match your natural tooth color.",
    image: "https://images.unsplash.com/photo-1579684288361-5c1a2b4095ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
  },
  {
    title: "Scaling",
    description: "Professional cleaning to remove plaque and tartar buildup for optimal oral health.",
    image: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
  },
  {
    title: "Cosmetic Dentistry",
    description: "Enhance your smile's appearance with procedures like teeth whitening and veneers.",
    image: "https://images.unsplash.com/photo-1571736772776-f22684d57d9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
  },
  {
    title: "Splinting",
    description: "Stabilize loose teeth by binding them together using composite materials and wire.",
    image: "https://via.placeholder.com/300x200.png?text=Splinting"
  },
  {
    title: "Implant Supported Bridge",
    description: "Replace multiple teeth with a bridge supported by dental implants for stability.",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
  },
  {
    title: "Crown Preparation",
    description: "Protect and restore damaged teeth with custom-made caps that improve appearance and function.",
    image: "https://via.placeholder.com/300x200.png?text=Crown+Preparation"
  },
  {
    title: "Implants",
    description: "Permanent solution for missing teeth using titanium posts that function like natural tooth roots.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
  },
  {
    title: "Orthodontics",
    description: "Correct teeth alignment and bite issues using braces or clear aligners for a straighter smile.",
    image: "https://images.unsplash.com/photo-1576502200916-3808e07386a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
  }
];

const Treatments: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-20 pb-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-dental-blue to-dental-aqua text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Treatments</h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Comprehensive dental services tailored to meet your unique needs
            </p>
          </div>
        </div>

        {/* Treatments Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <SectionTitle 
              title="Dental Treatments" 
              subtitle="We offer a wide range of dental services to keep your smile healthy and beautiful"
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {treatmentsData.map((treatment, index) => (
                <div 
                  key={index} 
                  className="treatment-card overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={treatment.image} 
                      alt={treatment.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-dental-blue flex items-center">
                      <Activity size={20} className="mr-2" />
                      {treatment.title}
                    </h3>
                    <p className="text-gray-600">{treatment.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 px-4 bg-dental-lightGray">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Need a Dental Consultation?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Contact us today to schedule an appointment with Dr. Rajkumar Yadav and take the first step towards a healthier smile.
            </p>
            <Link 
              to="https://wa.me/9455535193"
              target="_blank"
              className="appointment-btn"
            >
              Book an Appointment
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Treatments;
