
import { useState, useEffect } from 'react';
import { Shield, Terminal, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'LucidShell';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10 pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center space-x-6 mb-8 animate-slide-up">
            <Shield className="h-12 w-12 text-cyber-green animate-glow-pulse" />
            <Terminal className="h-12 w-12 text-cyber-blue animate-glow-pulse" />
            <Lock className="h-12 w-12 text-cyber-green animate-glow-pulse" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            <span className="text-cyber-green glow-text">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-cyber-blue mb-4 animate-slide-up delay-300">
            Founded by <span className="text-cyber-green glow-text">Mohamed Ibrahim J</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 mb-8 animate-slide-up delay-500">
            Network Security Specialist | Penetration Testing Expert
          </p>

          <div className="space-y-4 animate-slide-up delay-700">
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Specializing in penetration testing, network hardening, and creating secure solutions 
              for digital infrastructures. Passionate about ethical hacking, system defense, and automation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-slide-up delay-1000">
            <Button
              onClick={scrollToProjects}
              className="bg-cyber-green hover:bg-cyber-green-dark text-cyber-dark px-8 py-3 font-semibold text-lg transition-all duration-300 glow-border"
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-cyber-dark px-8 py-3 font-semibold text-lg transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
