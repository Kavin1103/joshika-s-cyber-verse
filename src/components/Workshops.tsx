
import { Award, Calendar, MapPin, Target, Trophy } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Workshops = () => {
  const workshops = [
    {
      title: "Cybersecurity Essentials Workshop",
      organizer: "SRM Institute of Science and Technology",
      date: "September 2023",
      location: "Tiruchirappalli",
      type: "workshop"
    },
    {
      title: "AI & Machine Learning Bootcamp",
      organizer: "Google Developer Groups",
      date: "November 2023",
      location: "Chennai",
      type: "workshop"
    },
    {
      title: "Cloud Security Summit",
      organizer: "AWS User Group",
      date: "January 2024",
      location: "Virtual",
      type: "workshop"
    },
    {
      title: "National Cybersecurity Hackathon",
      organizer: "Ministry of Electronics & IT",
      date: "December 2023",
      location: "Bangalore",
      type: "hackathon",
      achievement: "Top 10 Finalist"
    },
    {
      title: "Smart India Hackathon",
      organizer: "AICTE",
      date: "March 2024",
      location: "Delhi",
      type: "hackathon",
      achievement: "Best Innovation Award"
    },
    {
      title: "Ethical Hacking Competition",
      organizer: "Cyber Cell, Tamil Nadu Police",
      date: "February 2024",
      location: "Coimbatore",
      type: "hackathon",
      achievement: "Second Runner-up"
    }
  ];

  const workshopsData = workshops.filter(item => item.type === "workshop");
  const hackathonsData = workshops.filter(item => item.type === "hackathon");

  return (
    <section id="workshops" className="bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Workshops & Hackathons</h2>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Calendar size={24} className="text-cyber-primary" />
              <h3 className="text-2xl font-medium">Workshops Attended</h3>
            </div>
            
            <div className="space-y-4">
              {workshopsData.map((workshop, idx) => (
                <Card key={idx} className="hover:shadow-md transition-all">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{workshop.title}</CardTitle>
                    <CardDescription>{workshop.organizer}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={14} />
                      <span>{workshop.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mt-1">
                      <MapPin size={14} />
                      <span>{workshop.location}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Trophy size={24} className="text-cyber-secondary" />
              <h3 className="text-2xl font-medium">Hackathons Participated</h3>
            </div>
            
            <div className="space-y-4">
              {hackathonsData.map((hackathon, idx) => (
                <Card key={idx} className="hover:shadow-md transition-all border-l-4 border-cyber-secondary">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{hackathon.title}</CardTitle>
                    <CardDescription>{hackathon.organizer}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar size={14} />
                      <span>{hackathon.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mt-1">
                      <MapPin size={14} />
                      <span>{hackathon.location}</span>
                    </div>
                    
                    {hackathon.achievement && (
                      <>
                        <Separator className="my-2" />
                        <div className="flex items-center gap-2 text-cyber-secondary font-medium">
                          <Award size={14} />
                          <span>{hackathon.achievement}</span>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
