
import { 
  Code2, Database, Server, FileCode, Monitor
} from 'lucide-react';

const Skills = () => {
  interface Skill {
    name: string;
    icon: JSX.Element;
    skills: string[];
  }

  const skillCategories: Skill[] = [
    {
      name: "Programming Languages",
      icon: <Code2 size={24} className="text-cyber-primary" />,
      skills: ["Python", "C", "C++", "Java", "MySQL", "HTML", "PHP"]
    },
    {
      name: "Tools & Environments",
      icon: <Monitor size={24} className="text-cyber-secondary" />,
      skills: ["Xcode", "Unity", "Android Studio", "PyCharm", "Jupyter", "VS Code"]
    },
    {
      name: "Cybersecurity",
      icon: <Server size={24} className="text-cyber-accent" />,
      skills: ["Network Security", "Vulnerability Analysis", "Security Auditing", "Penetration Testing", "Digital Forensics"]
    },
    {
      name: "Data & AI",
      icon: <Database size={24} className="text-green-600" />,
      skills: ["Machine Learning", "Data Analysis", "Neural Networks", "Computer Vision", "TensorFlow", "Scikit-learn"]
    },
    {
      name: "Web Development",
      icon: <FileCode size={24} className="text-blue-600" />,
      skills: ["HTML/CSS", "JavaScript", "PHP", "RESTful APIs", "Responsive Design"]
    }
  ];

  return (
    <section id="skills" className="bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Skills & Tools</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gray-50 p-2 rounded">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="bg-gray-50 hover:bg-gray-100 transition-colors px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-medium text-cyber-primary mb-6">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {/* Tool Icons - Using placeholders, would normally use actual logos */}
            <div className="icon-card">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">Py</span>
            </div>
            <div className="icon-card">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">C++</span>
            </div>
            <div className="icon-card">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">Java</span>
            </div>
            <div className="icon-card">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">MySQL</span>
            </div>
            <div className="icon-card">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500">HTML</span>
            </div>
            <div className="icon-card">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">PHP</span>
            </div>
            <div className="icon-card">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">VS</span>
            </div>
            <div className="icon-card">
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-500">Jupyter</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
