
import { Gamepad2, Code, Rocket, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const skills = [
    {
      icon: Gamepad2,
      title: 'Unity Development',
      description: 'Creating immersive, high-quality games with Unity engine and C# programming for engaging player experiences.'
    },
    {
      icon: Code,
      title: 'Android Gaming',
      description: 'Specializing in Android game development with optimized performance and intuitive touch controls.'
    },
    {
      icon: Rocket,
      title: 'Game Innovation',
      description: 'Developing innovative gaming solutions that captivate players and deliver memorable experiences.'
    },
    {
      icon: TrendingUp,
      title: 'Entrepreneurship',
      description: 'Entrepreneur focused on building successful gaming businesses and creating impactful digital entertainment.'
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
                I'm a <span className="text-primary glow-text">Unity Game Developer</span> with a 
                vision to create immersive gaming experiences that captivate and entertain players worldwide.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                My journey in game development focuses on building engaging, polished, and player-focused 
                games using Unity and C#. I believe in the power of games to inspire and entertain.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                As an entrepreneur, I develop successful games and build a thriving gaming business 
                that reaches players worldwide, creating memorable digital experiences.
              </p>
            </div>

            <div className="relative order-1 md:order-2">
              <div className="w-full h-48 sm:h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center border border-primary/30 glow-border">
                <div className="text-center">
                  <Gamepad2 className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-primary mx-auto mb-4 animate-glow-pulse" />
                  <p className="text-primary font-mono text-xs sm:text-sm">
                    $ unity --build<br/>
                    <span className="text-secondary">✓ Ready to create amazing games</span>
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
