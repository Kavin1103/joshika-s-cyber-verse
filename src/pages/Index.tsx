
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Publications from '@/components/Publications';
import Workshops from '@/components/Workshops';
import Leadership from '@/components/Leadership';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };
    
    // Initial check on page load
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Change page title
    document.title = "Joshika S | Cybersecurity Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <Hero />
      
      <div className="reveal">
        <About />
      </div>
      
      <div className="reveal">
        <Education />
      </div>
      
      <div className="reveal">
        <Experience />
      </div>
      
      <div className="reveal">
        <Projects />
      </div>
      
      <div className="reveal">
        <Skills />
      </div>
      
      <div className="reveal">
        <Certifications />
      </div>
      
      <div className="reveal">
        <Publications />
      </div>
      
      <div className="reveal">
        <Workshops />
      </div>
      
      <div className="reveal">
        <Leadership />
      </div>
      
      <div className="reveal">
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
