
import { useState } from 'react';
import { Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  logo: string;
}

const Certifications = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const certifications: Certification[] = [
    {
      id: 1,
      title: "Cybersecurity Fundamentals",
      issuer: "IBM",
      date: "January 2024",
      logo: "IBM"
    },
    {
      id: 2,
      title: "Network Security Specialist",
      issuer: "Cisco",
      date: "March 2024",
      logo: "Cisco"
    },
    {
      id: 3,
      title: "Azure Security Engineer",
      issuer: "Microsoft",
      date: "April 2024",
      logo: "Microsoft"
    },
    {
      id: 4,
      title: "Cybersecurity for Business",
      issuer: "Meta",
      date: "May 2024",
      logo: "Meta"
    },
    {
      id: 5,
      title: "IT Service Management",
      issuer: "ServiceNow",
      date: "June 2024",
      logo: "ServiceNow"
    },
    {
      id: 6,
      title: "Advanced Python Programming",
      issuer: "Udemy",
      date: "July 2024",
      logo: "Udemy"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(certifications.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(certifications.length / 3)) % Math.ceil(certifications.length / 3));
  };

  return (
    <section id="certifications" className="bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Certifications</h2>
        
        <div className="mt-12 relative">
          <div className="hidden md:flex justify-between absolute -left-10 -right-10 top-1/2 transform -translate-y-1/2 z-10">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-white shadow-md hover:bg-cyber-primary hover:text-white transition-colors"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full bg-white shadow-md hover:bg-cyber-primary hover:text-white transition-colors"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(certifications.length / 3) }).map((_, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications
                      .slice(pageIndex * 3, pageIndex * 3 + 3)
                      .map(cert => (
                        <Card key={cert.id} className="hover:shadow-md transition-shadow">
                          <CardContent className="flex flex-col items-center p-6">
                            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                              <Award size={28} className="text-cyber-primary" />
                            </div>
                            <h3 className="text-lg font-medium text-center">{cert.title}</h3>
                            <div className="text-gray-500 text-sm mt-1 text-center">{cert.issuer}</div>
                            <div className="text-gray-400 text-xs mt-1 text-center">{cert.date}</div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {Array.from({ length: Math.ceil(certifications.length / 3) }).map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className={`w-3 h-3 rounded-full mx-1 p-0 ${
                  currentSlide === index ? 'bg-cyber-primary' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
          
          <div className="md:hidden flex justify-center gap-4 mt-6">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full" 
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full" 
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
