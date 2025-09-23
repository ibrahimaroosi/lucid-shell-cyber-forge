
import { Smartphone, Code, Rocket, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const skills = [
    {
      icon: Smartphone,
      title: 'Flutter Development',
      description: 'Creating beautiful, cross-platform mobile applications with Flutter framework and Dart programming.'
    },
    {
      icon: Code,
      title: 'Android Development',
      description: 'Building native Android applications with modern development practices and user-centric design.'
    },
    {
      icon: Rocket,
      title: 'App Innovation',
      description: 'Developing innovative mobile solutions that solve real-world problems and enhance user experiences.'
    },
    {
      icon: TrendingUp,
      title: 'Entrepreneurship',
      description: 'Aspiring entrepreneur focused on building successful app businesses and creating impactful digital products.'
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-primary glow-text">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            <div className="space-y-4 sm:space-y-6 animate-slide-up order-2 md:order-1">
              <p className="text-base sm:text-lg text-foreground leading-relaxed">
                I'm a passionate <span className="text-primary glow-text">Flutter Android Developer</span> with a 
                vision to create innovative mobile applications that make a meaningful impact on people's lives.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                My journey in mobile development focuses on building beautiful, performant, and user-friendly 
                applications using Flutter and Dart. I believe in the power of technology to solve real-world problems.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                <span className="text-secondary glow-text">In shaa Allah</span>, I aspire to become an entrepreneur 
                by developing successful Flutter applications and building a thriving app business that serves millions of users worldwide.
              </p>
            </div>

            <div className="relative order-1 md:order-2">
              <div className="w-full h-48 sm:h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center border border-primary/30 glow-border">
                <div className="text-center">
                  <Smartphone className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-primary mx-auto mb-4 animate-glow-pulse" />
                  <p className="text-primary font-mono text-xs sm:text-sm">
                    $ flutter doctor<br/>
                    <span className="text-secondary">✓ Ready to build amazing apps</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={index} 
                className="project-card p-4 sm:p-6 text-center animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <skill.icon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-primary mx-auto mb-3 sm:mb-4 animate-glow-pulse" />
                <h3 className="text-lg sm:text-xl font-semibold text-secondary mb-2 sm:mb-3">{skill.title}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{skill.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
