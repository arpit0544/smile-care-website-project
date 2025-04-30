
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';
import AnimatedCounter from '../components/AnimatedCounter';
import ThreeDImageSlider from '../components/ThreeDImageSlider';
import { Activity, Building, Users, Clock, MessageSquare, ArrowRight } from 'lucide-react';
import ScrollAnimationObserver from '../components/ScrollAnimationObserver';
import InteractiveServiceCard from '../components/InteractiveServiceCard';
import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';

const Home: React.FC = () => {
  useEffect(() => {
    // Initialize animations
    gsap.fromTo('.animate-fade-up', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.2,
        ease: "power3.out"
      }
    );
  }, []);
  
  return (
    <PageTransition>
      <div>
        {/* 3D Hero Slider */}
        <ThreeDImageSlider />

        {/* Introduction Section with background image */}
        <section 
          className="py-20 md:py-32 px-4 relative bg-dark overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80')] bg-cover bg-center opacity-20 blur-sm"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E17]/90 to-[#1F2937]/80"></div>
          </div>
          
          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <ScrollAnimationObserver animation="fade-up">
                <div className="cyber-glass p-8 rounded-2xl border border-white/10">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                    Welcome to Smile Care Dental Clinic
                  </h2>
                  <p className="text-white/90 mb-6 text-lg">
                    At Smile Care Dental Clinic, we believe that a healthy smile is a beautiful smile. 
                    Led by Dr. Rajkumar Yadav, our clinic provides comprehensive dental care with the 
                    latest technology and techniques in a comfortable environment.
                  </p>
                  <p className="text-white/80 mb-8">
                    Our mission is to provide personalized dental care that meets your unique needs and exceeds
                    your expectations. We focus on preventive care and patient education to help you maintain
                    optimal oral health.
                  </p>
                  <Link 
                    to="/about" 
                    className="cyber-button group interactive"
                  >
                    Learn More About Us
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </ScrollAnimationObserver>
              
              <ScrollAnimationObserver animation="fade-up" delay={0.3}>
                <div className="flex justify-center perspective-container">
                  <img 
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                    alt="Modern dental clinic" 
                    className="rounded-lg shadow-xl w-full max-w-md cyber-image p-1"
                  />
                </div>
              </ScrollAnimationObserver>
            </div>
          </div>
        </section>

        {/* Services Highlight */}
        <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-[#0A0E17] to-[#1F2937] relative">
          <div className="cyber-grid-overlay absolute inset-0 opacity-5"></div>
          <div className="container mx-auto relative z-10">
            <ScrollAnimationObserver animation="fade-up">
              <SectionTitle 
                title="Our Featured Services" 
                subtitle="We provide comprehensive dental care for your entire family"
                centered
              />
            </ScrollAnimationObserver>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {[
                { 
                  icon: <Activity size={48} className="text-[#1FB6FF]" />, 
                  title: "Dental Implants", 
                  desc: "Restore missing teeth with permanent, natural-looking implants" 
                },
                { 
                  icon: <Building size={48} className="text-[#7E5BEF]" />, 
                  title: "Cosmetic Dentistry", 
                  desc: "Enhance your smile with our aesthetic dental procedures" 
                },
                { 
                  icon: <Users size={48} className="text-[#1FB6FF]" />, 
                  title: "Family Dentistry", 
                  desc: "Comprehensive dental care for patients of all ages" 
                },
                { 
                  icon: <Clock size={48} className="text-[#7E5BEF]" />, 
                  title: "Emergency Care", 
                  desc: "Quick and effective solutions for dental emergencies" 
                }
              ].map((service, index) => (
                <InteractiveServiceCard 
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.desc}
                  index={index}
                />
              ))}
            </div>

            <ScrollAnimationObserver animation="fade-up" className="text-center mt-16">
              <Link 
                to="/treatments" 
                className="glass-button interactive"
              >
                View All Treatments
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </ScrollAnimationObserver>
          </div>
        </section>

        {/* Before/After Showcase */}
        <section className="py-20 md:py-32 px-4 bg-[#0A0E17] relative">
          <div className="container mx-auto">
            <ScrollAnimationObserver animation="fade-up">
              <SectionTitle 
                title="Smile Transformations" 
                subtitle="See the real results of our expert dental care"
                centered
              />
            </ScrollAnimationObserver>
            
            <div className="mt-16 max-w-4xl mx-auto">
              <ScrollAnimationObserver animation="fade-up">
                <Swiper
                  effect={'cards'}
                  grabCursor={true}
                  centeredSlides={true}
                  pagination={{
                    clickable: true,
                  }}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  modules={[EffectCards, Pagination, Autoplay]}
                  className="dental-transformation-swiper"
                >
                  {[
                    {
                      before: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
                      after: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
                      title: "Complete Smile Makeover"
                    },
                    {
                      before: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
                      after: "https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
                      title: "Dental Implant Procedure"
                    },
                    {
                      before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
                      after: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80", 
                      title: "Teeth Whitening Results"
                    }
                  ].map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="before-after-card">
                        <h3 className="text-white text-2xl font-bold mb-6">{item.title}</h3>
                        <div className="before-after-container">
                          <div className="before-image">
                            <img src={item.before} alt="Before treatment" />
                            <span className="label">Before</span>
                          </div>
                          <div className="after-image">
                            <img src={item.after} alt="After treatment" />
                            <span className="label">After</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </ScrollAnimationObserver>
            </div>
          </div>
        </section>

        {/* Statistics/Counters Section */}
        <section className="py-20 md:py-32 px-4 bg-gradient-to-r from-[#1FB6FF] to-[#7E5BEF] text-white relative">
          <div className="absolute inset-0 cyber-grid-overlay opacity-10"></div>
          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { value: 5000, suffix: "+", label: "Happy Patients" },
                { value: 10, suffix: "+", label: "Years Experience" },
                { value: 15, suffix: "+", label: "Dental Specialists" },
                { value: 12, suffix: "+", label: "Dental Services" }
              ].map((stat, index) => (
                <ScrollAnimationObserver key={index} animation="fade-up" delay={index * 0.1}>
                  <div className="cyber-glass py-10 px-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 group interactive">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    <p className="text-xl font-medium mt-2 group-hover:text-glow transition-all duration-300">{stat.label}</p>
                  </div>
                </ScrollAnimationObserver>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 md:py-32 px-4 bg-[#0A0E17] relative">
          <div className="container mx-auto relative z-10">
            <ScrollAnimationObserver animation="fade-up">
              <SectionTitle 
                title="What Our Patients Say" 
                subtitle="Real stories from people we've helped"
                centered
              />
            </ScrollAnimationObserver>
            
            <div className="mt-16 max-w-6xl mx-auto">
              <ScrollAnimationObserver animation="fade-up" delay={0.3}>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                  }}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  modules={[Pagination, Autoplay]}
                  className="testimonial-swiper py-10"
                >
                  {[
                    {
                      text: "Dr. Rajkumar Yadav and his team provided exceptional care during my implant procedure. I couldn't be happier with the results!",
                      name: "Priya S.",
                      location: "Bhadohi"
                    },
                    {
                      text: "After years of dental anxiety, I finally found a clinic where I feel comfortable. The staff is patient and gentle, making each visit stress-free.",
                      name: "Amit K.",
                      location: "Jalalpur"
                    },
                    {
                      text: "The modern technology and expertise at Smile Care Dental Clinic made my treatment quick and painless. Highly recommended!",
                      name: "Rajesh M.",
                      location: "Uttar Pradesh"
                    },
                    {
                      text: "I was amazed by how painless my root canal treatment was. Dr. Yadav is truly skilled and caring.",
                      name: "Sunita P.",
                      location: "Varanasi"
                    }
                  ].map((testimonial, index) => (
                    <SwiperSlide key={index}>
                      <div className="cyber-glass p-8 rounded-xl min-h-[250px] flex flex-col justify-between border border-white/10 hover:border-white/20 transition-all duration-300 group interactive">
                        <div>
                          <div className="quote-mark text-[#1FB6FF] mb-4 text-4xl">"</div>
                          <p className="text-white/80 mb-6">{testimonial.text}</p>
                        </div>
                        <div className="mt-auto">
                          <p className="font-bold text-gradient">{testimonial.name}</p>
                          <p className="text-sm text-white/60">{testimonial.location}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </ScrollAnimationObserver>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 md:py-28 px-4 bg-gradient-to-br from-[#0A0E17] to-[#1F2937] relative overflow-hidden">
          <div className="absolute inset-0 cyber-grid-overlay opacity-10"></div>
          <div className="cyber-circle-1"></div>
          <div className="cyber-circle-2"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-3">
                <ScrollAnimationObserver animation="fade-up">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient leading-tight">
                    Ready for a Healthier, More Beautiful Smile?
                  </h2>
                  <p className="text-white/80 mb-8 text-lg">
                    Schedule your dental appointment today and take the first step towards a healthier, more beautiful smile.
                    Dr. Rajkumar Yadav and our team are ready to provide you with exceptional dental care.
                  </p>
                  <Link 
                    to="https://wa.me/9455535193"
                    target="_blank"
                    className="neo-button interactive"
                  >
                    <MessageSquare size={20} className="mr-2" />
                    Book Your Appointment
                  </Link>
                </ScrollAnimationObserver>
              </div>
              
              <div className="md:col-span-2">
                <ScrollAnimationObserver animation="slide-left" delay={0.3}>
                  <img 
                    src="https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
                    alt="Dental appointment" 
                    className="rounded-xl shadow-lg w-full hover-float cyber-image"
                  />
                </ScrollAnimationObserver>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
