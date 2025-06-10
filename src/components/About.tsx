
import { Code, Shield, Zap, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const skills = [
    {
      icon: Shield,
      title: 'Penetration Testing',
      description: 'Expert in identifying vulnerabilities and security weaknesses in digital infrastructures.'
    },
    {
      icon: Code,
      title: 'Network Hardening',
      description: 'Implementing robust security measures to protect against cyber threats and attacks.'
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Creating automated security solutions and tools for efficient threat detection.'
    },
    {
      icon: Users,
      title: 'Consulting',
      description: 'Providing strategic cybersecurity guidance to organizations and businesses.'
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-cyber-green glow-text">
            &gt; About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            <div className="space-y-4 sm:space-y-6 animate-slide-up order-2 md:order-1">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                I'm a cybersecurity enthusiast and founder of <span className="text-cyber-green glow-text">LucidShell</span> – 
                a network security company dedicated to protecting digital infrastructures from evolving cyber threats.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                With extensive experience in penetration testing and network security, I specialize in identifying 
                vulnerabilities, implementing robust defense mechanisms, and creating innovative security solutions.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                My passion lies in ethical hacking, system defense, and developing automated tools that help 
                organizations stay ahead of cyber criminals in this ever-evolving digital landscape.
              </p>
            </div>

            <div className="relative order-1 md:order-2">
              <div className="w-full h-48 sm:h-64 bg-gradient-to-br from-cyber-green/20 to-cyber-blue/20 rounded-lg flex items-center justify-center border border-cyber-green/30 glow-border">
                <div className="text-center">
                  <Shield className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-cyber-green mx-auto mb-4 animate-glow-pulse" />
                  <p className="text-cyber-green font-mono text-xs sm:text-sm">
                    $ whoami<br/>
                    <span className="text-cyber-blue">security_specialist</span>
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
                <skill.icon className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-cyber-green mx-auto mb-3 sm:mb-4 animate-glow-pulse" />
                <h3 className="text-lg sm:text-xl font-semibold text-cyber-blue mb-2 sm:mb-3">{skill.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{skill.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
