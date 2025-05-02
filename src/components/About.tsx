
import { Shield, Brain, Cloud, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-gray-700 leading-relaxed">
              I'm a Computer Science and Engineering undergraduate specializing in Cybersecurity at SRM Institute of Science and Technology. 
              With a passion for emerging technologies, I focus on bridging the gap between theory and practice in cybersecurity, 
              artificial intelligence, and cloud computing through hands-on projects and research.
            </p>
            <p className="text-gray-700 leading-relaxed">
              My academic journey has been enriched with multiple internships, including experiences at IBM, 
              Police Cybercrime Department in Coimbatore, and Jio-Edge AI. These opportunities have allowed me to apply 
              classroom knowledge to real-world challenges while contributing to meaningful research published in IEEE conferences.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-medium text-cyber-primary mb-4">Areas of Interest</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-cyber-secondary/10 p-2 rounded">
                  <Shield size={24} className="text-cyber-secondary" />
                </div>
                <div>
                  <h4 className="font-medium">Cybersecurity</h4>
                  <p className="text-sm text-gray-500">Network security, vulnerability assessment, ethical hacking</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-cyber-secondary/10 p-2 rounded">
                  <Brain size={24} className="text-cyber-secondary" />
                </div>
                <div>
                  <h4 className="font-medium">AI & Machine Learning</h4>
                  <p className="text-sm text-gray-500">Neural networks, computer vision, predictive analytics</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-cyber-secondary/10 p-2 rounded">
                  <Cloud size={24} className="text-cyber-secondary" />
                </div>
                <div>
                  <h4 className="font-medium">Cloud Computing</h4>
                  <p className="text-sm text-gray-500">Cloud security, serverless architecture, AWS/Azure</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-cyber-secondary/10 p-2 rounded">
                  <BookOpen size={24} className="text-cyber-secondary" />
                </div>
                <div>
                  <h4 className="font-medium">Research</h4>
                  <p className="text-sm text-gray-500">Academic writing, data analysis, conference publications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
