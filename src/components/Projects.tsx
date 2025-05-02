
import { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Project {
  id: number;
  title: string;
  description: string;
  expanded: boolean;
  image: string;
  technologies: string[];
  repoUrl?: string;
  demoUrl?: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: "Crop Recommendation System",
      description: "A machine learning solution that analyzes soil conditions, climate data, and regional agricultural patterns to recommend optimal crop choices for farmers. The system improves agricultural yield by providing data-driven planting recommendations based on environmental factors.",
      expanded: false,
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=300&auto=format&fit=crop",
      technologies: ["Python", "Scikit-learn", "Random Forest", "Data Analysis", "Flask"]
    },
    {
      id: 2,
      title: "Breast Cancer Prediction",
      description: "Developed a predictive model that helps identify potentially malignant breast tissue from medical imaging data. Used Support Vector Machines and Neural Networks to classify images, achieving over 94% accuracy on test data while minimizing false negatives.",
      expanded: false,
      image: "https://images.unsplash.com/photo-1576089073624-b5323653efd9?q=80&w=300&auto=format&fit=crop",
      technologies: ["Python", "TensorFlow", "SVM", "Neural Networks", "Image Processing"]
    },
    {
      id: 3,
      title: "Network Intrusion Detection System",
      description: "A cybersecurity tool that monitors network traffic to identify and alert about potential security breaches. The system uses machine learning algorithms to detect anomalous patterns in network traffic that might indicate unauthorized access attempts.",
      expanded: false,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=300&auto=format&fit=crop",
      technologies: ["Python", "Wireshark", "Machine Learning", "Network Security", "Real-time Analysis"]
    },
  ]);

  const toggleProjectExpansion = (id: number) => {
    setProjects(projects.map(project => 
      project.id === id ? { ...project, expanded: !project.expanded } : project
    ));
  };

  return (
    <section id="projects" className="bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map(project => (
            <Card key={project.id} className={`overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${project.expanded ? 'row-span-2' : ''}`}>
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-cyber-primary">{project.title}</CardTitle>
                <CardDescription>
                  {project.expanded 
                    ? project.description 
                    : `${project.description.substring(0, 100)}...`}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map(tech => (
                    <Badge key={tech} variant="secondary" className="text-xs font-normal">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between pt-0">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => toggleProjectExpansion(project.id)}
                >
                  {project.expanded ? (
                    <>
                      <span>Read less</span>
                      <ChevronUp size={16} className="ml-1" />
                    </>
                  ) : (
                    <>
                      <span>Read more</span>
                      <ChevronDown size={16} className="ml-1" />
                    </>
                  )}
                </Button>
                
                <div className="flex gap-2">
                  {project.repoUrl && (
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="icon" variant="outline" className="h-8 w-8">
                        <Github size={16} />
                      </Button>
                    </a>
                  )}
                  
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="icon" variant="outline" className="h-8 w-8">
                        <ExternalLink size={16} />
                      </Button>
                    </a>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
