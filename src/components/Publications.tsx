
import { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, FileText, GraduationCap } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Publication {
  id: string;
  title: string;
  conference: string;
  date: string;
  abstract: string;
  authors: string[];
  doi?: string;
  type: 'journal' | 'conference';
}

const Publications = () => {
  const [publications] = useState<Publication[]>([
    {
      id: "pub1",
      title: "Enhanced Security Mechanisms for Edge Computing Applications",
      conference: "IEEE International Conference on Edge Computing, 2024",
      date: "June 2024",
      abstract: "This paper presents a novel approach to enhancing security in edge computing applications through a multi-layered authentication protocol. The research introduces lightweight cryptographic solutions suitable for resource-constrained edge devices.",
      authors: ["Joshika S", "Kumar R", "Priya T"],
      doi: "10.1109/EDGE.2024.123456",
      type: "conference"
    },
    {
      id: "pub2",
      title: "Machine Learning Approaches for Intrusion Detection in IoT Networks",
      conference: "IEEE Conference on Artificial Intelligence and Security, 2024",
      date: "April 2024",
      abstract: "This research explores the application of various machine learning algorithms for detecting network intrusions in IoT environments. The study compares the performance of supervised and unsupervised learning approaches under different network conditions.",
      authors: ["Joshika S", "Sharma V", "Ahmad K"],
      doi: "10.1109/AISE.2024.654321",
      type: "conference"
    },
    {
      id: "pub3",
      title: "A Comprehensive Analysis of Cloud Security Vulnerabilities in Healthcare Systems",
      conference: "Journal of Cybersecurity and Privacy, Vol. 3 Issue 2",
      date: "May 2024",
      abstract: "This journal article presents a systematic review of security vulnerabilities in cloud-based healthcare information systems. The work categorizes common attack vectors and proposes mitigation strategies suitable for healthcare environments.",
      authors: ["Kumar R", "Joshika S", "Reddy A"],
      doi: "10.3390/jcp3020010",
      type: "journal"
    },
    {
      id: "pub4",
      title: "Secure Deployment Strategies for AI Models in Production Environments",
      conference: "CODE AI Conference 2024",
      date: "March 2024",
      abstract: "This paper addresses the security challenges associated with deploying machine learning models in production environments. It proposes a framework for evaluating and mitigating risks related to model poisoning, adversarial attacks, and data leakage.",
      authors: ["Joshika S", "Reddy A"],
      type: "conference"
    }
  ]);

  const conferences = [
    {
      name: "CODE AI 2024",
      role: "Paper Presenter",
      date: "March 2024",
      location: "Virtual Conference"
    },
    {
      name: "IEEE International Conference on Edge Computing",
      role: "Presenter & Participant",
      date: "June 2024",
      location: "Bangalore, India"
    },
    {
      name: "International Conference on Engineering and Computing (ICEC)",
      role: "Participant",
      date: "February 2024",
      location: "Chennai, India"
    }
  ];

  return (
    <section id="publications" className="bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Publications & Conferences</h2>
        
        <div className="mt-12">
          <Tabs defaultValue="publications">
            <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8">
              <TabsTrigger value="publications" className="text-sm">
                <FileText className="w-4 h-4 mr-2" />
                Publications
              </TabsTrigger>
              <TabsTrigger value="conferences" className="text-sm">
                <GraduationCap className="w-4 h-4 mr-2" />
                Conferences
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="publications">
              <Accordion type="single" collapsible className="w-full">
                {publications.map((pub) => (
                  <AccordionItem key={pub.id} value={pub.id} className="border border-gray-200 mb-4 rounded-lg overflow-hidden">
                    <AccordionTrigger className="px-4 py-3 bg-white hover:bg-gray-50 data-[state=open]:bg-gray-50">
                      <div className="flex items-start gap-3 text-left">
                        <BookOpen className="mt-1 w-5 h-5 text-cyber-primary flex-shrink-0" />
                        <div>
                          <h3 className="font-medium text-base">{pub.title}</h3>
                          <p className="text-gray-500 text-sm">{pub.conference}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 bg-gray-50">
                      <div className="space-y-3">
                        <div>
                          <h4 className="text-sm font-medium text-gray-700">Abstract</h4>
                          <p className="text-sm text-gray-600 mt-1">{pub.abstract}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-gray-700">Authors</h4>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {pub.authors.map((author, idx) => (
                              <Badge key={idx} variant="outline" className={author === "Joshika S" ? "bg-cyber-secondary/10 text-cyber-secondary" : "bg-gray-100"}>
                                {author}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">{pub.date}</span>
                          {pub.doi && (
                            <a 
                              href={`https://doi.org/${pub.doi}`} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-xs text-cyber-primary hover:underline"
                            >
                              DOI: {pub.doi}
                            </a>
                          )}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
            
            <TabsContent value="conferences">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {conferences.map((conf, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-gray-50 rounded">
                        <GraduationCap className="w-5 h-5 text-cyber-secondary" />
                      </div>
                      <h3 className="font-medium">{conf.name}</h3>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Role:</span>
                        <span className="text-gray-800">{conf.role}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date:</span>
                        <span className="text-gray-800">{conf.date}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Location:</span>
                        <span className="text-gray-800">{conf.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Publications;
