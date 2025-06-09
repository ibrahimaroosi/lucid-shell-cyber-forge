
import { ExternalLink, Github, Shield, Lock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Network Vulnerability Scanner',
      description: 'Built a custom network scanner that detects open ports, outdated services, and misconfigurations. This tool helps identify security weaknesses before malicious actors can exploit them.',
      technologies: ['Python', 'Nmap', 'Socket Programming', 'Threading'],
      icon: Shield,
      features: [
        'Port scanning and service detection',
        'Vulnerability assessment',
        'Automated reporting',
        'Real-time monitoring'
      ]
    },
    {
      title: 'Secure Login System',
      description: 'Designed a robust user authentication system with two-factor authentication and encrypted credentials. Implements industry best practices for secure user management.',
      technologies: ['Node.js', 'JWT', 'bcrypt', 'TOTP'],
      icon: Lock,
      features: [
        'Two-factor authentication',
        'Password encryption',
        'Session management',
        'Rate limiting'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyber-green glow-text">
            &gt; Projects
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="project-card p-8 animate-slide-up"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className="flex items-center mb-6">
                  <project.icon className="h-10 w-10 text-cyber-green mr-4 animate-glow-pulse" />
                  <h3 className="text-2xl font-bold text-cyber-blue">{project.title}</h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-cyber-green font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-400 flex items-center">
                        <span className="text-cyber-green mr-2">▸</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-cyber-green font-semibold mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-cyber-green/20 text-cyber-green text-sm rounded border border-cyber-green/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    className="border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-cyber-dark transition-all duration-300"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    variant="outline"
                    className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-cyber-dark transition-all duration-300"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
