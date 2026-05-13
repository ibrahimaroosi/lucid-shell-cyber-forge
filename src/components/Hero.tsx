import { useState, useEffect } from 'react';
import { Gamepad2, Smartphone, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ROLES = ['Unity Game Developer', 'Flutter App Developer'];

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Codex12Dev';

  // Rotating role text
  const [roleIdx, setRoleIdx] = useState(0);
  const [roleText, setRoleText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const t = setTimeout(() => {
        setDisplayText((p) => p + fullText[currentIndex]);
        setCurrentIndex((p) => p + 1);
      }, 150);
      return () => clearTimeout(t);
    }
  }, [currentIndex]);

  useEffect(() => {
    const current = ROLES[roleIdx];
    const speed = deleting ? 50 : 90;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, roleText.length + 1);
        setRoleText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1500);
      } else {
        const next = current.slice(0, roleText.length - 1);
        setRoleText(next);
        if (next === '') {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [roleText, deleting, roleIdx]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative z-10 pt-16 sm:pt-20 px-4 sm:px-6"
    >
      {/* Floating orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-secondary/20 blur-3xl animate-float-slower" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-accent/10 blur-3xl animate-float-slow" />
      </div>

      <div className="container mx-auto text-center relative">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-sm animate-fade-in">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs sm:text-sm text-primary font-semibold tracking-wider uppercase">
              Available for collaboration
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 sm:mb-6 animate-slide-up font-display">
            <span className="gradient-text glow-text">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          <h2 className="text-lg sm:text-2xl md:text-3xl mb-6 animate-slide-up delay-300 font-display tracking-wider min-h-[2.5rem]">
            <span className="text-secondary">{roleText}</span>
            <span className="text-primary animate-pulse">_</span>
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up delay-500 px-4">
            Crafting immersive Unity games and beautiful, performant Flutter apps
            for Android. Founder, builder, shipper.
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 animate-slide-up delay-700">
            {[
              { icon: Gamepad2, label: 'Unity · C#' },
              { icon: Smartphone, label: 'Flutter · Dart' },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card/60 backdrop-blur-sm border border-border text-xs sm:text-sm text-foreground"
              >
                <Icon className="h-4 w-4 text-primary" />
                {label}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-1000 px-4">
            <Button
              onClick={() => scrollTo('projects')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 font-semibold text-base sm:text-lg transition-all duration-300 glow-border hover:scale-105"
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollTo('contact')}
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-3 font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105"
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
