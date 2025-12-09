
import { Mail, Linkedin, Github, Shield } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ibrahimaroosi@gmail.com',
      href: 'mailto:ibrahimaroosi@gmail.com',
      color: 'text-cyber-green'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: 'https://www.linkedin.com/in/mohamed-ibrahim-125020139/',
      color: 'text-cyber-blue'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View on GitHub',
      href: 'https://github.com/ibrahimaroosi',
      color: 'text-cyber-green'
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-cyber-green glow-text">
            &gt; Contact
          </h2>

          <div className="mb-8 sm:mb-12 animate-slide-up">
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed px-4">
              Ready to bring your game ideas to life? Let's discuss how we can create engaging Unity games 
              that captivate players and deliver unforgettable gaming experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {contactMethods.map((method, index) => (
              <Card 
                key={index} 
                className="project-card p-4 sm:p-6 animate-slide-up hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <method.icon className={`h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 mx-auto mb-3 sm:mb-4 ${method.color} animate-glow-pulse`} />
                <h3 className="text-lg sm:text-xl font-semibold text-cyber-blue mb-2">{method.label}</h3>
                <Button
                  variant="link"
                  asChild
                  className={`${method.color} hover:underline p-0 h-auto text-xs sm:text-sm break-all`}
                >
                  <a href={method.href} target="_blank" rel="noopener noreferrer">
                    {method.value}
                  </a>
                </Button>
              </Card>
            ))}
          </div>

          <div className="border-t border-cyber-green/30 pt-6 sm:pt-8 animate-slide-up delay-700">
            <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
              <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-cyber-green" />
              <span className="text-cyber-green font-bold text-base sm:text-lg">LucidShell</span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2025 LucidShell | All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
