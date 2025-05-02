
import { ArrowDown, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleScrollDown = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50 to-blue-50 pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cyber-primary">
              Hi, I'm <span className="text-cyber-secondary">Joshika S</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-600">
              Cybersecurity Enthusiast | AI & Cloud Intern | IEEE Author
            </h2>
            <p className="text-gray-500">
              Based in Coimbatore, India
            </p>
            
            <div className="pt-4 space-y-6">
              <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  className="bg-cyber-primary hover:bg-cyber-primary/90 text-white"
                  onClick={() => {
                    window.location.href = "mailto:js9406@srmist.edu.in";
                  }}
                >
                  Contact Me
                </Button>
                <Button 
                  variant="outline" 
                  className="border-cyber-secondary text-cyber-secondary hover:bg-cyber-secondary/10"
                  onClick={() => {
                    const educationSection = document.querySelector('#education');
                    if (educationSection) {
                      educationSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  See My Work
                </Button>
              </div>
              
              <div className="flex gap-4 justify-center lg:justify-start">
                <a 
                  href="https://www.linkedin.com/in/joshikas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="icon-card"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="text-cyber-primary" />
                </a>
                <a 
                  href="https://github.com/joshikas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="icon-card"
                  aria-label="GitHub"
                >
                  <Github size={20} className="text-cyber-primary" />
                </a>
                <a 
                  href="https://orcid.org/joshikas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="icon-card"
                  aria-label="ORCID"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyber-primary">
                    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z" />
                    <path d="M10 10v4" />
                    <path d="M10 8.04h.01" />
                    <path d="M14 13h-4" />
                    <path d="M14 7v7" />
                  </svg>
                </a>
                <a 
                  href="https://scopus.com/joshikas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="icon-card"
                  aria-label="Scopus"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyber-primary">
                    <path d="M19.5 14.5v-2.5a7 7 0 0 0-14 0v2.5" />
                    <path d="M19.5 9.5 12 4 4.5 9.5" />
                    <path d="M4.5 14.5 12 20l7.5-5.5" />
                  </svg>
                </a>
              </div>
              
              <div>
                <p className="text-gray-500 text-sm">
                  <span className="font-medium">Phone:</span> +91 9944344536 | 
                  <span className="font-medium"> Email:</span> js9406@srmist.edu.in
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl bg-gradient-to-br from-cyber-primary to-cyber-secondary">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=300&h=300&auto=format&fit=crop"
                alt="Joshika S"
                className="w-full h-full object-cover opacity-75"
              />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleScrollDown}
            className="rounded-full border border-gray-200 shadow-sm"
          >
            <ArrowDown className="h-5 w-5 text-gray-400" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
