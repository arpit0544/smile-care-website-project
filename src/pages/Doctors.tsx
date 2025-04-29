
import React from 'react';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';
import { Phone, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Doctors: React.FC = () => {
  return (
    <PageTransition>
      <div className="pt-20 pb-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-dental-blue to-dental-aqua text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Doctor</h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Meet Dr. Rajkumar Yadav, the expert behind Smile Care Dental Clinic
            </p>
          </div>
        </div>

        {/* Doctor Profile */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative w-full max-w-md animate-fade-in">
                  <div className="absolute inset-0 bg-gradient-to-r from-dental-aqua to-dental-blue opacity-20 rounded-xl transform -rotate-3"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                    alt="Dr. Rajkumar Yadav" 
                    className="relative z-10 rounded-xl shadow-xl w-full"
                  />
                </div>
              </div>
              <div>
                <SectionTitle 
                  title="Dr. Rajkumar Yadav" 
                  subtitle="Dental Surgeon & Implantologist"
                />
                <div className="space-y-4 text-gray-700">
                  <p>
                    Dr. Rajkumar Yadav is a distinguished dental surgeon with over 10 years of clinical experience 
                    in general dentistry, dental implantology, and cosmetic procedures. His dedication to patient care 
                    and clinical excellence has established him as a trusted name in dental healthcare.
                  </p>
                  <p>
                    After earning his Bachelor of Dental Surgery (BDS), Dr. Yadav pursued specialized training in 
                    implantology and advanced restorative procedures. He regularly attends continuing education 
                    courses to stay at the forefront of dental innovations and techniques.
                  </p>
                  <p>
                    Dr. Yadav founded Smile Care Dental Clinic with a vision to provide high-quality, comprehensive 
                    dental care to the community. His approach combines clinical expertise with a deep understanding 
                    of patient concerns, ensuring personalized treatment that addresses both functional and aesthetic aspects.
                  </p>
                  <p>
                    Known for his gentle chairside manner, Dr. Yadav takes pride in creating a comfortable environment 
                    for patients of all ages, especially those with dental anxiety. He believes in empowering patients 
                    through education about their oral health and treatment options.
                  </p>

                  <div className="mt-8 flex gap-4">
                    <a 
                      href="tel:+919455535193" 
                      className="inline-flex items-center gap-2 px-6 py-3 bg-dental-blue text-white rounded-full hover:bg-opacity-90 transition-all"
                    >
                      <Phone size={18} />
                      Call Now
                    </a>
                    <Link 
                      to="https://wa.me/9455535193"
                      target="_blank"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-dental-aqua text-white rounded-full hover:bg-opacity-90 transition-all"
                    >
                      <MessageSquare size={18} />
                      WhatsApp
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qualifications & Specialities */}
        <section className="py-16 px-4 bg-dental-lightGray">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Qualifications</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 text-dental-blue">•</div>
                    <div>
                      <p className="font-bold">Bachelor of Dental Surgery (BDS)</p>
                      <p className="text-sm text-gray-600">Dental College</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 text-dental-blue">•</div>
                    <div>
                      <p className="font-bold">Advanced Certification in Implantology</p>
                      <p className="text-sm text-gray-600">Implant Training Institute</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 text-dental-blue">•</div>
                    <div>
                      <p className="font-bold">Certification in Cosmetic Dentistry</p>
                      <p className="text-sm text-gray-600">Aesthetic Dental Academy</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 text-dental-blue">•</div>
                    <div>
                      <p className="font-bold">Member, Indian Dental Association</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Specialities</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 text-dental-blue">•</div>
                    <p>Dental Implants</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 text-dental-blue">•</div>
                    <p>Cosmetic Dentistry</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 text-dental-blue">•</div>
                    <p>Full Mouth Rehabilitation</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 text-dental-blue">•</div>
                    <p>Root Canal Treatment</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 text-dental-blue">•</div>
                    <p>Pediatric Dental Care</p>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 text-dental-blue">•</div>
                    <p>Oral Surgery</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <SectionTitle 
              title="Our Philosophy" 
              subtitle="The guiding principles behind our patient care"
              centered
            />
            <div className="mt-8 bg-white p-8 rounded-xl shadow-lg border-l-4 border-dental-aqua">
              <p className="text-xl italic text-gray-700">
                "I believe that dental care goes beyond fixing teeth—it's about enhancing lives through healthy smiles. 
                Every patient deserves personalized attention, gentle care, and treatment plans that respect their 
                unique needs and concerns. At Smile Care Dental Clinic, we're committed to making dental visits 
                a positive experience while delivering results that give our patients confidence in their smiles."
              </p>
              <p className="mt-4 font-bold text-dental-blue">- Dr. Rajkumar Yadav</p>
            </div>
          </div>
        </section>

        {/* Book Appointment Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-dental-blue to-dental-aqua text-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Schedule Your Visit?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Book an appointment with Dr. Rajkumar Yadav and take the first step toward a healthier smile.
            </p>
            <Link 
              to="https://wa.me/9455535193"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-dental-blue rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg"
            >
              <MessageSquare size={20} />
              Book Your Appointment
            </Link>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Doctors;
