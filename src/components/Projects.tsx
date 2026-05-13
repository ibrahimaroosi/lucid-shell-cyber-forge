import { ExternalLink, Gamepad2, Smartphone, Wrench } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Mr Car',
      category: 'Unity Game',
      description:
        'An exciting car racing game built with Unity, featuring thrilling mechanics, dynamic environments, and challenging levels — optimized for smooth Android gameplay.',
      technologies: ['Unity', 'C#', 'Android SDK', '3D'],
      playStoreUrl:
        'https://play.google.com/store/apps/details?id=com.Codex12dev.MrCar',
      icon: Gamepad2,
      accent: 'primary' as const,
      features: [
        'Thrilling racing mechanics',
        'Multiple car options',
        'Dynamic environments',
        'Smooth mobile controls',
      ],
    },
    {
      title: 'QuickTools',
      category: 'Flutter App',
      description:
        'All‑in‑one smart utility app with password generator, notes, age & EMI tools — a clean, fast, offline-friendly Flutter app for everyday needs.',
      technologies: ['Flutter', 'Dart', 'Local Storage', 'Material'],
      playStoreUrl: '',
      icon: Wrench,
      accent: 'secondary' as const,
      features: [
        'Advanced password generator',
        'Quick notes with local storage',
        'Age & EMI calculators',
        'Clean UI · Works offline',
      ],
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-3 py-1 mb-4 text-xs uppercase tracking-[0.3em] text-secondary border border-secondary/40 rounded-full">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary glow-text font-display tracking-wider">
              Games & Apps
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm sm:text-base">
              A growing collection of Unity games and Flutter apps — built and shipped solo.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {projects.map((project, index) => {
              const isPrimary = project.accent === 'primary';
              return (
                <Card
                  key={index}
                  className="project-card p-6 sm:p-8 animate-slide-up relative overflow-hidden"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div
                    className={`absolute -top-20 -right-20 w-56 h-56 rounded-full blur-3xl opacity-30 ${
                      isPrimary ? 'bg-primary' : 'bg-secondary'
                    }`}
                  />

                  <div className="relative">
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center">
                        <div
                          className={`p-3 rounded-xl mr-3 border ${
                            isPrimary
                              ? 'bg-primary/15 border-primary/40'
                              : 'bg-secondary/15 border-secondary/40'
                          }`}
                        >
                          <project.icon
                            className={`h-6 w-6 sm:h-7 sm:w-7 ${
                              isPrimary ? 'text-primary' : 'text-secondary'
                            } animate-glow-pulse`}
                          />
                        </div>
                        <div>
                          <span
                            className={`block text-[10px] uppercase tracking-[0.25em] ${
                              isPrimary ? 'text-primary' : 'text-secondary'
                            }`}
                          >
                            {project.category}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-tight font-display">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <p className="text-foreground/90 mb-5 leading-relaxed text-sm sm:text-base">
                      {project.description}
                    </p>

                    <div className="mb-5">
                      <h4 className="text-primary font-semibold mb-2 text-xs sm:text-sm uppercase tracking-wider">
                        Highlights
                      </h4>
                      <ul className="space-y-1.5">
                        {project.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="text-muted-foreground flex items-start text-xs sm:text-sm"
                          >
                            <span
                              className={`mr-2 mt-0.5 flex-shrink-0 ${
                                isPrimary ? 'text-primary' : 'text-secondary'
                              }`}
                            >
                              ▸
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-5">
                      <h4 className="text-primary font-semibold mb-2 text-xs sm:text-sm uppercase tracking-wider">
                        Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 bg-muted/60 text-foreground text-xs rounded-md border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {project.playStoreUrl ? (
                      <Button
                        className={`${
                          isPrimary
                            ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                            : 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
                        } transition-all duration-300 text-sm sm:text-base hover:scale-105`}
                        asChild
                      >
                        <a
                          href={project.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Play Store
                        </a>
                      </Button>
                    ) : (
                      <span className="inline-flex items-center text-xs sm:text-sm text-muted-foreground italic">
                        <Smartphone className="h-4 w-4 mr-2" />
                        Coming soon to Play Store
                      </span>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
