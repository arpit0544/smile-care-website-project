
import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';
import { Phone, MapPin, Clock, MessageSquare, Whatsapp } from 'lucide-react';
import { toast } from 'sonner';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Format the WhatsApp message with line breaks (%0A)
    const whatsappMessage = `Name: ${name}%0APhone: ${phone}%0AMessage: ${message}`;
    const whatsappUrl = `https://wa.me/9455535193?text=${whatsappMessage}`;
    
    // Open WhatsApp with the pre-filled message
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setName('');
    setPhone('');
    setMessage('');
    
    toast.success("Message sent successfully via WhatsApp!");
  };

  return (
    <PageTransition>
      <div className="pt-20 pb-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-dental-blue to-dental-aqua text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Contact Us</h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Have questions or need to schedule an appointment? We're here to help.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <SectionTitle 
                  title="Get In Touch" 
                  subtitle="We'd love to hear from you. Here's how you can reach us."
                />

                <div className="space-y-8 mt-8">
                  <div className="flex items-start">
                    <div className="bg-dental-lightBlue p-3 rounded-full mr-4">
                      <MapPin className="text-dental-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-dental-blue mb-1">Location</h3>
                      <p className="text-gray-700">
                        Civil Line Rd, Chedibeer, Bhadohi Nagar Palika, Jalalpur, Uttar Pradesh 221401
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-dental-lightBlue p-3 rounded-full mr-4">
                      <Phone className="text-dental-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-dental-blue mb-1">Phone</h3>
                      <p className="text-gray-700">
                        <a href="tel:+919455535193" className="hover:text-dental-blue transition-colors">
                          +91 9455535193
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-dental-lightBlue p-3 rounded-full mr-4">
                      <Whatsapp className="text-dental-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-dental-blue mb-1">WhatsApp</h3>
                      <p className="text-gray-700">
                        <a 
                          href="https://wa.me/9455535193" 
                          target="_blank" 
                          rel="noreferrer"
                          className="hover:text-dental-blue transition-colors"
                        >
                          Message us on WhatsApp
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-dental-lightBlue p-3 rounded-full mr-4">
                      <Clock className="text-dental-blue" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-dental-blue mb-1">Hours</h3>
                      <p className="text-gray-700">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                      <p className="text-gray-700">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-6 gradient-text">Send Us a Message</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-aqua"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-aqua"
                        required
                      />
                    </div>

                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dental-aqua"
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 gradient-bg py-3 px-6 rounded-md text-white font-medium hover:opacity-90 transition-all"
                    >
                      <MessageSquare size={18} />
                      Send via WhatsApp
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-8 px-4">
          <div className="container mx-auto">
            <SectionTitle 
              title="Find Us" 
              subtitle="Visit our clinic at this location"
              centered
            />
            <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d34504.952687216595!2d82.55272548130112!3d25.390256915548576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fe130b9971475%3A0x535aece991711f70!2sSmile%20Care%20Dental%20Clinic%20Dr%20Rajkumar%20Yadav!5e1!3m2!1sen!2sin!4v1745905869533!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Smile Care Dental Clinic Location"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Contact;
