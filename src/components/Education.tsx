
import { BookOpen, GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Education</h2>
        
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-gray-200 hidden md:block"></div>
            
            {/* B.Tech Degree */}
            <div className="flex flex-col md:flex-row gap-6 mb-12">
              <div className="md:w-16 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-cyber-primary text-white flex items-center justify-center shadow-md relative z-10">
                  <GraduationCap size={22} />
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 flex-1 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl font-semibold text-cyber-primary">B.Tech in CSE with Cybersecurity</h3>
                  <span className="text-gray-500 text-sm">2022 - 2026</span>
                </div>
                <h4 className="text-lg font-medium text-gray-700">SRM Institute of Science and Technology, Tiruchirappalli</h4>
                <div className="mt-3 text-sm text-gray-600">
                  <p>CGPA: <span className="font-medium">8.42</span></p>
                  <p className="mt-2">Cybersecurity specialization with focus on network security, ethical hacking, secure coding practices, and security auditing.</p>
                </div>
              </div>
            </div>
            
            {/* School Education */}
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-16 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-cyber-secondary text-white flex items-center justify-center shadow-md relative z-10">
                  <BookOpen size={22} />
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6 flex-1 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl font-semibold text-cyber-secondary">Classes X and XII</h3>
                  <span className="text-gray-500 text-sm">Completed 2022</span>
                </div>
                <h4 className="text-lg font-medium text-gray-700">The NGP School, Coimbatore</h4>
                <div className="mt-3 text-sm text-gray-600">
                  <p>Completed secondary and higher secondary education with distinction in mathematics and computer science subjects.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
