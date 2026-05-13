import { Mail, Github, Instagram, Youtube, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Codex12Dev@gmail.com',
      href: 'mailto:Codex12Dev@gmail.com',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@codex12dev',
      href: 'https://github.com/codex12dev',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@codex12dev',
      href: 'https://www.instagram.com/codex12dev/',
    },
    {
      icon: Youtube,
      label: 'YouTube',
      value: '@CodeX12Dev',
      href: 'https://www.youtube.com/@CodeX12Dev',
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs uppercase tracking-[0.3em] text-secondary border border-secondary/40 rounded-full">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-primary glow-text font-display tracking-wider">
            Let's build something
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground mb-10 sm:mb-12 leading-relaxed max-w-2xl mx-auto px-4">
            Got a game idea or an app concept? Whether it's Unity or Flutter,
            let's chat and bring it to life.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 mb-12">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="project-card p-5 sm:p-6 animate-slide-up hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex p-3 rounded-xl bg-primary/10 border border-primary/30 mb-3">
                  <method.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary animate-glow-pulse" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-secondary mb-1">
                  {method.label}
                </h3>
                <Button
                  variant="link"
                  asChild
                  className="text-primary hover:text-secondary p-0 h-auto text-xs sm:text-sm break-all"
                >
                  <a href={method.href} target="_blank" rel="noopener noreferrer">
                    {method.value}
                  </a>
                </Button>
              </Card>
            ))}
          </div>

          <div className="border-t border-primary/30 pt-6 sm:pt-8">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-primary font-bold text-base sm:text-lg font-display tracking-wider">
                LucidShell
              </span>
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm">
              © 2025 Codex12Dev · LucidShell. Built with Unity & Flutter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
