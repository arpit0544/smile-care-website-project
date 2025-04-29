import React from 'react';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';
import AnimatedCounter from '../components/AnimatedCounter';
import PageHeroBanner from '../components/PageHeroBanner';

const About: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-20 pb-16">
        {/* Hero Section with Banner */}
        <PageHeroBanner
          title="About Us"
          subtitle="Discover the story behind Smile Care Dental Clinic and our commitment to excellence in dental care."
          backgroundImage="https://images.unsplash.com/photo-1615876063860-d971f6dca5dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        />

        {/* Clinic Introduction */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <SectionTitle 
                  title="Smile Care Dental Clinic" 
                  subtitle="Your Premier Dental Care Provider"
                />
                <p className="mb-4 text-gray-700">
                  Founded with a vision to provide exceptional dental care, Smile Care Dental Clinic has been serving the community 
                  with dedication and expertise. We believe in a patient-centered approach, ensuring that every individual who walks 
                  through our doors receives personalized attention and the highest quality dental care.
                </p>
                <p className="mb-4 text-gray-700">
                  Our state-of-the-art facility is equipped with the latest dental technology to provide efficient, comfortable, 
                  and effective treatments. We adhere to the strictest sterilization protocols and hygiene standards to ensure 
                  your safety and well-being.
                </p>
                <p className="text-gray-700">
                  At Smile Care, we're not just about treating dental issues – we're about building relationships with our patients, 
                  educating them about oral health, and working together to achieve and maintain beautiful, healthy smiles that last a lifetime.
                </p>
              </div>
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80" 
                  alt="Modern dental clinic interior" 
                  className="rounded-lg shadow-xl w-full max-w-lg animate-fade-in"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4 bg-dental-lightGray">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg dental-card-hover animated-bg">
                <h3 className="text-2xl font-bold mb-4 text-dental-blue">Our Mission</h3>
                <p className="text-gray-700">
                  To provide accessible, comprehensive dental care that improves our patients' quality of life through enhanced oral health. 
                  We strive to deliver exceptional service in a comfortable, caring environment using the latest technology and evidence-based practices.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg dental-card-hover animated-bg">
                <h3 className="text-2xl font-bold mb-4 text-dental-blue">Our Vision</h3>
                <p className="text-gray-700">
                  To be the trusted dental care provider of choice, recognized for excellence in patient care, advanced treatments, and community education. 
                  We aim to create a healthier community by promoting oral health awareness and providing accessible, quality dental services to all.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Doctor Profile */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <SectionTitle 
              title="Meet Our Doctor" 
              subtitle="Expert care from qualified professionals"
              centered
            />
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-12">
              <div className="w-full max-w-sm">
                <img 
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                  alt="Dr. Rajkumar Yadav" 
                  className="rounded-lg shadow-xl w-full animate-scale-in"
                />
              </div>
              <div className="w-full max-w-xl">
                <h3 className="text-2xl font-bold mb-2 gradient-text">Dr. Rajkumar Yadav</h3>
                <p className="text-dental-darkGray font-medium mb-4">Dental Surgeon & Implantologist</p>
                <p className="mb-4 text-gray-700">
                  Dr. Rajkumar Yadav is a highly skilled dental surgeon with extensive experience in general and cosmetic dentistry. 
                  With over 10 years in practice, he has helped thousands of patients achieve healthier, more beautiful smiles.
                </p>
                <p className="mb-4 text-gray-700">
                  After completing his Bachelor of Dental Surgery (BDS), Dr. Yadav pursued advanced training in dental implantology and 
                  cosmetic dentistry. He is committed to continuing education and stays updated with the latest advancements in dental technology and techniques.
                </p>
                <p className="text-gray-700">
                  Known for his gentle approach and attention to detail, Dr. Yadav creates a comfortable environment for patients of all ages. 
                  He believes in patient education and takes the time to explain procedures thoroughly, ensuring patients are informed and at ease.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Clinic Gallery */}
        <section className="py-16 px-4 bg-dental-lightGray">
          <div className="container mx-auto">
            <SectionTitle 
              title="Our Clinic Gallery" 
              subtitle="Take a virtual tour of our modern dental facility"
              centered
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[
                "https://images.unsplash.com/photo-1629909615184-74f495363b67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
                "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
                "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
                "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
                "https://images.unsplash.com/photo-1579684288361-5c1a2b4095ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
                "https://images.unsplash.com/photo-1589461207126-906b162d6e39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
              ].map((img, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-md dental-card-hover">
                  <img 
                    src={img} 
                    alt={`Clinic gallery image ${index + 1}`} 
                    className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics/Counters Section */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-dental-blue to-dental-aqua text-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Achievements</h2>
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
      </div>
    </PageTransition>
  );
};

export default About;
