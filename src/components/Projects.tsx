
import { ExternalLink, Github, Gamepad2, Swords } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Mr Car',
      description: 'An exciting car racing game built with Unity, featuring thrilling racing mechanics, dynamic environments, and challenging levels. Optimized for Android devices with smooth controls and engaging gameplay.',
      technologies: ['Unity', 'C#', 'Android SDK', 'Firebase'],
      icon: Swords,
      features: [
        'Thrilling racing mechanics',
        'Multiple car options',
        'Dynamic environments',
        'Smooth mobile controls'
      ]
    },
    {
      title: 'Fruit Catcher',
      description: 'A fun and addictive fruit catching game where players collect falling fruits while avoiding obstacles. Features colorful graphics, intuitive touch controls, and progressively challenging levels.',
      technologies: ['Unity', 'C#', 'AdMob', 'Unity Analytics'],
      icon: Gamepad2,
      features: [
        'Addictive gameplay',
        'Colorful graphics',
        'Progressive difficulty',
        'High score system'
      ]
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-primary glow-text font-display tracking-wider">
            My Games
          </h2>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="project-card p-6 sm:p-8 animate-slide-up"
                style={{ animationDelay: `${index * 300}ms` }}
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <project.icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary mr-3 sm:mr-4 animate-glow-pulse flex-shrink-0" />
                  <h3 className="text-xl sm:text-2xl font-bold text-secondary leading-tight">{project.title}</h3>
                </div>

                <p className="text-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                <div className="mb-4 sm:mb-6">
                  <h4 className="text-primary font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Key Features:</h4>
                  <ul className="space-y-1 sm:space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start text-xs sm:text-sm">
                        <span className="text-primary mr-2 mt-0.5 flex-shrink-0">▸</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4 sm:mb-6">
                  <h4 className="text-primary font-semibold mb-2 sm:mb-3 text-sm sm:text-base">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-2 sm:px-3 py-1 bg-primary/20 text-primary text-xs sm:text-sm rounded border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-sm sm:text-base"
                  >
                    <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    variant="outline"
                    className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 text-sm sm:text-base"
                  >
                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-2" />
                    Play Store
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
