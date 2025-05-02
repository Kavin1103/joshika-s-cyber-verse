
import { Users, Star, Award, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Leadership = () => {
  const leadership = [
    {
      title: "Technical President",
      organization: "Computer Society Club",
      period: "2023 - Present",
      description: "Leading technical initiatives, organizing workshops, and mentoring junior members."
    },
    {
      title: "Event Coordinator",
      organization: "Department of Computer Science",
      period: "2022 - 2023",
      description: "Coordinated technical events, symposiums, and guest lectures for the department."
    },
    {
      title: "Student Ambassador",
      organization: "IEEE Student Chapter",
      period: "2023 - Present",
      description: "Representing the university at IEEE events and promoting IEEE activities on campus."
    }
  ];

  const achievements = [
    {
      title: "National Quiz Competition",
      award: "Second Prize",
      year: "2023",
      organizer: "AICTE"
    },
    {
      title: "SpellBee International",
      award: "Regional Finalist",
      year: "2022",
      organizer: "SpellBee International"
    },
    {
      title: "Best Paper Award",
      award: "First Place",
      year: "2024",
      organizer: "CODE AI Conference"
    },
    {
      title: "Dean's List",
      award: "Academic Excellence",
      year: "2022-2023",
      organizer: "SRM Institute of Science and Technology"
    }
  ];

  return (
    <section id="leadership" className="bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Leadership & Achievements</h2>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Users size={24} className="text-cyber-primary" />
              <h3 className="text-2xl font-medium">Leadership Roles</h3>
            </div>
            
            <div className="space-y-6">
              {leadership.map((role, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-cyber-primary/10 flex items-center justify-center">
                      <Users size={20} className="text-cyber-primary" />
                    </div>
                    {idx !== leadership.length - 1 && (
                      <div className="absolute top-12 bottom-0 left-1/2 w-0.5 bg-gray-200 -translate-x-1/2"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 pb-6">
                    <h4 className="text-lg font-medium">{role.title}</h4>
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>{role.organization}</span>
                      <span>{role.period}</span>
                    </div>
                    <p className="mt-2 text-gray-600">{role.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Trophy size={24} className="text-cyber-secondary" />
              <h3 className="text-2xl font-medium">Awards & Honors</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, idx) => (
                <Card key={idx} className="overflow-hidden hover:shadow-md transition-all group">
                  <div className="h-2 bg-gradient-to-r from-cyber-primary to-cyber-secondary"></div>
                  <CardContent className="pt-5">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-gray-50 group-hover:bg-cyber-primary/10 transition-colors">
                        <Award size={16} className="text-cyber-secondary" />
                      </div>
                      <div>
                        <h4 className="font-medium">{achievement.title}</h4>
                        <p className="text-cyber-secondary text-sm font-medium">{achievement.award}</p>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>{achievement.organizer}</span>
                          <span>{achievement.year}</span>
                        </div>
                      </div>
                    </div>
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

export default Leadership;
