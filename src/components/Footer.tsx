
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold text-xl">
              Joshika<span className="text-cyber-secondary">S</span>
            </h3>
            <p className="text-gray-400 mt-1">Cybersecurity Enthusiast | AI & Cloud Intern</p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/joshikas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 p-2.5 rounded-full hover:bg-gray-700 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/joshikas" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 p-2.5 rounded-full hover:bg-gray-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {currentYear} Joshika S | Designed with 💻 by Lovable</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
