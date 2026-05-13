import { Gamepad2, Smartphone, Rocket, Layers } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const skills = [
    {
      icon: Gamepad2,
      title: 'Unity Game Dev',
      description:
        'Building polished 2D & 3D Android games with Unity and C#, focused on performance and engaging gameplay.',
    },
    {
      icon: Smartphone,
      title: 'Flutter App Dev',
      description:
        'Crafting fast, beautiful cross-platform mobile apps with Flutter & Dart, with a focus on clean UX.',
    },
    {
      icon: Layers,
      title: 'End‑to‑End Shipping',
      description:
        'From idea to Play Store: design, develop, optimize, publish, and iterate based on real user feedback.',
    },
    {
      icon: Rocket,
      title: 'Indie Founder',
      description:
        'Independent developer & founder building a portfolio of useful apps and addictive games.',
    },
  ];

  const stats = [
    { value: '2+', label: 'Apps Shipped' },
    { value: 'Unity', label: 'Game Engine' },
    { value: 'Flutter', label: 'App Framework' },
    { value: '∞', label: 'Ideas Brewing' },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block px-3 py-1 mb-4 text-xs uppercase tracking-[0.3em] text-secondary border border-secondary/40 rounded-full">
              About
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary glow-text font-display tracking-wider">
              Who is Codex12Dev?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-14 sm:mb-20">
            <div className="space-y-5 animate-slide-up order-2 md:order-1">
              <p className="text-base sm:text-lg text-foreground leading-relaxed">
                I'm a <span className="text-primary glow-text">Unity Game Developer</span> and{' '}
                <span className="text-secondary glow-text">Flutter App Developer</span> building
                products for mobile players and users worldwide.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                On the games side, I create immersive Android experiences with Unity & C#. On the
                apps side, I ship fast, useful, modern Flutter apps that just work.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                As an indie founder, I focus on shipping — small, sharp, well‑crafted products that
                solve real problems or bring real fun.
              </p>
            </div>

            <div className="relative order-1 md:order-2">
              <div className="absolute -inset-2 bg-gradient-to-tr from-primary/40 via-secondary/30 to-accent/40 rounded-2xl blur-2xl opacity-60 animate-glow-pulse" />
              <div className="relative w-full h-56 sm:h-72 bg-card/80 backdrop-blur-md rounded-2xl flex items-center justify-center border border-primary/40 overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-40" />
                <div className="text-center relative z-10 px-6">
                  <div className="flex justify-center gap-4 mb-4">
                    <Gamepad2 className="h-10 w-10 sm:h-14 sm:w-14 text-primary animate-glow-pulse" />
                    <Smartphone className="h-10 w-10 sm:h-14 sm:w-14 text-secondary animate-glow-pulse" />
                  </div>
                  <p className="text-primary font-mono text-xs sm:text-sm leading-relaxed">
                    $ unity build && flutter run<br />
                    <span className="text-secondary">✓ Two stacks. One developer.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16">
            {stats.map((s, i) => (
              <div
                key={i}
                className="text-center p-4 sm:p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/60 transition-colors"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold gradient-text">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1 tracking-wider uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="project-card p-5 sm:p-6 text-center animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/30 mb-4">
                  <skill.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary animate-glow-pulse" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-secondary mb-2">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {skill.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
