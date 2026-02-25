
import { useState, useEffect } from 'react';
import { Smartphone, Code, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Codex12Dev';

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
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10 pt-16 sm:pt-20 px-4 sm:px-6">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center space-x-4 sm:space-x-6 mb-6 sm:mb-8 animate-slide-up">
            <Smartphone className="h-8 w-8 sm:h-12 sm:w-12 text-primary animate-glow-pulse" />
            <Code className="h-8 w-8 sm:h-12 sm:w-12 text-secondary animate-glow-pulse" />
            <Rocket className="h-8 w-8 sm:h-12 sm:w-12 text-primary animate-glow-pulse" />
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 animate-slide-up delay-300 font-display">
            <span className="gradient-text glow-text">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl text-primary mb-4 sm:mb-6 animate-slide-up delay-500 font-display tracking-wider">
            Unity Game Developer
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 animate-slide-up delay-700">
            Android Game Developer | Startup Founder
          </p>

          <div className="space-y-4 animate-slide-up delay-900 mb-8 sm:mb-12">
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
              Building immersive Unity games with a focus on Android gaming experiences. 
              As an entrepreneur, I create engaging games that captivate players worldwide.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-1000 px-4">
            <Button
              onClick={scrollToProjects}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-2 sm:py-3 font-semibold text-base sm:text-lg transition-all duration-300 glow-border w-full sm:w-auto"
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-6 sm:px-8 py-2 sm:py-3 font-semibold text-base sm:text-lg transition-all duration-300 w-full sm:w-auto"
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
