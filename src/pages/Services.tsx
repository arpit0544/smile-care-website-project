import React from 'react';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';
import { Building, Flask, Globe, GraduationCap } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Building className="service-icon" />,
      title: "Genuine Dental Hospital",
      description: "Experience comprehensive dental care in our state-of-the-art hospital setting, equipped with the latest technology and staffed by experienced professionals dedicated to your oral health.",
    },
    {
      icon: <Flask className="service-icon" />,
      title: "Wonderful Dental Laboratory",
      description: "Our in-house dental laboratory ensures the highest quality dental prosthetics, from crowns and bridges to dentures, all custom-crafted to meet your specific needs with precision and care.",
    },
    {
      icon: <Globe className="service-icon" />,
      title: "International Patients",
      description: "We welcome patients from around the world, offering specialized care, language assistance, and travel coordination to make your dental treatment experience seamless and comfortable.",
    },
    {
      icon: <GraduationCap className="service-icon" />,
      title: "Implant Training Institute",
      description: "As a center for dental education, we train dental professionals in the latest implant techniques, ensuring our team stays at the forefront of dental innovation and best practices.",
    },
  ];

  return (
    <PageTransition>
      <div className="pt-20 pb-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-dental-blue to-dental-aqua text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Services</h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Discover the comprehensive range of dental services we offer at Smile Care Dental Clinic
            </p>
          </div>
        </div>

        {/* Services Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <SectionTitle
              title="Specialized Services"
              subtitle="Beyond standard dental care, we offer these specialized services to better serve your needs"
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg service-card">
                  <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                    <div className="mb-4 md:mb-0 md:mr-6 flex justify-center">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 text-dental-blue">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 bg-dental-lightGray">
          <div className="container mx-auto">
            <SectionTitle
              title="Why Choose Smile Care?"
              subtitle="What sets us apart in dental healthcare"
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[
                {
                  title: "Expert Team",
                  description: "Our dental professionals have years of experience and specialized training to provide the highest quality care."
                },
                {
                  title: "Advanced Technology",
                  description: "We invest in the latest dental technology to ensure precise diagnostics and effective treatments."
                },
                {
                  title: "Comprehensive Care",
                  description: "From preventive care to complex procedures, we offer a full range of dental services under one roof."
                },
                {
                  title: "Patient Comfort",
                  description: "Your comfort is our priority. We provide amenities and techniques to ensure a relaxing experience."
                },
                {
                  title: "Personalized Approach",
                  description: "We create customized treatment plans tailored to your unique dental needs and goals."
                },
                {
                  title: "Ethical Practice",
                  description: "We maintain the highest ethical standards, providing honest recommendations and transparent pricing."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md dental-card-hover">
                  <h3 className="text-xl font-bold mb-3 text-dental-blue">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Patient Testimonials */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <SectionTitle
              title="Patient Testimonials"
              subtitle="What our patients say about their experience at Smile Care Dental Clinic"
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  quote: "Dr. Rajkumar Yadav and his team provided exceptional care during my implant procedure. I couldn't be happier with the results!",
                  name: "Priya S.",
                  location: "Bhadohi"
                },
                {
                  quote: "After years of dental anxiety, I finally found a clinic where I feel comfortable. The staff is patient and gentle, making each visit stress-free.",
                  name: "Amit K.",
                  location: "Jalalpur"
                },
                {
                  quote: "The modern technology and expertise at Smile Care Dental Clinic made my treatment quick and painless. Highly recommended!",
                  name: "Rajesh M.",
                  location: "Uttar Pradesh"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg dental-card-hover">
                  <div className="mb-4">
                    <svg className="w-8 h-8 text-dental-aqua" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 mb-4 italic">{testimonial.quote}</p>
                  <div>
                    <p className="font-bold text-dental-blue">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Services;
