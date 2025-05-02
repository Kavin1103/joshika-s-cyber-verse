
import { Briefcase } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  return (
    <section id="experience" className="bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Experience</h2>
        
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="space-y-10">
            {/* Jio-Edge AI Intern */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-cyber-primary">
              <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-cyber-primary/10 p-2 rounded">
                    <Briefcase size={20} className="text-cyber-primary" />
                  </div>
                  <h3 className="font-semibold text-xl">Jio-Edge AI Intern</h3>
                </div>
                <div className="text-gray-500 text-sm">Feb 2025 - Present</div>
              </div>
              
              <p className="text-gray-700 mb-4">
                Working on integrating edge computing with artificial intelligence solutions, focusing on optimizing neural networks for deployment on edge devices with limited resources.
              </p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline" className="bg-gray-50">Edge Computing</Badge>
                <Badge variant="outline" className="bg-gray-50">TensorFlow Lite</Badge>
                <Badge variant="outline" className="bg-gray-50">Model Optimization</Badge>
                <Badge variant="outline" className="bg-gray-50">IoT</Badge>
              </div>
            </div>
            
            {/* Police Cybercrime Intern */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-cyber-secondary">
              <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-cyber-secondary/10 p-2 rounded">
                    <Briefcase size={20} className="text-cyber-secondary" />
                  </div>
                  <h3 className="font-semibold text-xl">Police Cybercrime Intern</h3>
                </div>
                <div className="text-gray-500 text-sm">June 2024 - August 2024</div>
              </div>
              
              <p className="text-gray-700 mb-4">
                Assisted in digital forensics procedures and cybercrime investigations. Participated in awareness programs about online safety and security practices for local communities.
              </p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline" className="bg-gray-50">Digital Forensics</Badge>
                <Badge variant="outline" className="bg-gray-50">Cyber Law</Badge>
                <Badge variant="outline" className="bg-gray-50">Network Analysis</Badge>
                <Badge variant="outline" className="bg-gray-50">Security Awareness</Badge>
              </div>
            </div>
            
            {/* AI and Cloud Intern */}
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-cyber-accent">
              <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-cyber-accent/10 p-2 rounded">
                    <Briefcase size={20} className="text-cyber-accent" />
                  </div>
                  <h3 className="font-semibold text-xl">AI and Cloud Intern</h3>
                </div>
                <div className="text-gray-500 text-sm">January 2024 - April 2024</div>
              </div>
              
              <p className="text-gray-700 mb-4">
                Completed the IBM & AICTE internship program focused on cloud architecture and AI service integration. Developed machine learning models and deployed them on cloud platforms.
              </p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline" className="bg-gray-50">IBM Cloud</Badge>
                <Badge variant="outline" className="bg-gray-50">Watson AI</Badge>
                <Badge variant="outline" className="bg-gray-50">Python</Badge>
                <Badge variant="outline" className="bg-gray-50">Cloud Services</Badge>
                <Badge variant="outline" className="bg-gray-50">Docker</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
