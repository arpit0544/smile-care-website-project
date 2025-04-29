
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import SectionTitle from '../components/SectionTitle';
import { ArrowLeft } from 'lucide-react';
import { treatmentDetailsData } from '../data/treatmentDetailsData';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';

const TreatmentDetail: React.FC = () => {
  const { treatmentId } = useParams<{ treatmentId: string }>();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [treatment, setTreatment] = useState<any>(null);

  useEffect(() => {
    const foundTreatment = treatmentDetailsData.find(t => t.id === treatmentId);
    setTreatment(foundTreatment);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [treatmentId]);

  if (!treatment) {
    return (
      <PageTransition>
        <div className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Treatment not found</h2>
          <Button 
            onClick={() => navigate('/treatments')}
            className="flex items-center gap-2 bg-dental-blue hover:bg-dental-blue/90"
          >
            <ArrowLeft size={16} />
            Back to All Treatments
          </Button>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="pt-20 pb-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-dental-blue to-dental-aqua text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <Button 
              onClick={() => navigate('/treatments')}
              variant="outline" 
              className="mb-4 bg-white/20 hover:bg-white/30 border-white/50 text-white group transition-all duration-300"
            >
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to All Treatments
            </Button>
            <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-center">
              What is {treatment.title}?
            </h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              {treatment.shortDescription}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column - Images */}
              <div className="space-y-8">
                {treatment.images.map((image: any, index: number) => (
                  <div 
                    key={index} 
                    className={`overflow-hidden rounded-lg shadow-lg transition-all duration-700 ${
                      isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                  >
                    <img 
                      src={image.url} 
                      alt={image.alt} 
                      className="w-full h-auto transition-transform duration-500 hover:scale-105"
                    />
                    {image.caption && (
                      <p className="p-4 text-sm text-center text-gray-600">{image.caption}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Right Column - Text Content */}
              <div className="space-y-8">
                {/* What is section */}
                <div className={`transition-all duration-500 delay-100 ${
                  isScrolled ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}>
                  <h2 className="text-2xl font-bold mb-4 text-dental-blue">What is {treatment.title}?</h2>
                  <div className="text-gray-700 space-y-4">
                    {treatment.description.map((paragraph: string, i: number) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* How it Works Section */}
                <div className={`transition-all duration-500 delay-200 ${
                  isScrolled ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}>
                  <h2 className="text-2xl font-bold mb-4 text-dental-blue">How it Works</h2>
                  <div className="text-gray-700 space-y-4">
                    {treatment.howItWorks.map((step: string, i: number) => (
                      <div key={i} className="flex items-start">
                        <span className="bg-dental-blue text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          {i + 1}
                        </span>
                        <p>{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits Section */}
                <div className={`transition-all duration-500 delay-300 ${
                  isScrolled ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}>
                  <h2 className="text-2xl font-bold mb-4 text-dental-blue">Benefits</h2>
                  <ul className="list-disc ml-5 text-gray-700 space-y-2">
                    {treatment.benefits.map((benefit: string, i: number) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                </div>

                {/* When You Need It Section */}
                <div className={`transition-all duration-500 delay-400 ${
                  isScrolled ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}>
                  <h2 className="text-2xl font-bold mb-4 text-dental-blue">When You Need It</h2>
                  <Card className="bg-dental-lightGray border-none p-5">
                    <ul className="list-disc ml-5 text-gray-700 space-y-2">
                      {treatment.whenYouNeedIt.map((need: string, i: number) => (
                        <li key={i}>{need}</li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 px-4 bg-dental-lightGray mt-8 animate-fade-in">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">
              Interested in {treatment.title}?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Contact us today to schedule a consultation and learn if this treatment is right for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/contact')}
                className="bg-dental-blue hover:bg-dental-blue/90 text-white px-6 py-3"
              >
                Contact Us
              </Button>
              <Button 
                onClick={() => navigate('/treatments')}
                variant="outline"
                className="border-dental-blue text-dental-blue hover:bg-dental-blue/10"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to All Treatments
              </Button>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default TreatmentDetail;
