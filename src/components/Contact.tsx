
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
      href: '#',
      color: 'text-cyber-blue'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View on GitHub',
      href: '#',
      color: 'text-cyber-green'
    }
  ];

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-cyber-green glow-text">
            &gt; Contact
          </h2>

          <div className="mb-12 animate-slide-up">
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Ready to secure your digital infrastructure? Let's discuss how we can protect 
              your organization from cyber threats and build robust security solutions together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card 
                key={index} 
                className="project-card p-6 animate-slide-up hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <method.icon className={`h-12 w-12 mx-auto mb-4 ${method.color} animate-glow-pulse`} />
                <h3 className="text-xl font-semibold text-cyber-blue mb-2">{method.label}</h3>
                <Button
                  variant="link"
                  asChild
                  className={`${method.color} hover:underline p-0 h-auto text-sm`}
                >
                  <a href={method.href} target="_blank" rel="noopener noreferrer">
                    {method.value}
                  </a>
                </Button>
              </Card>
            ))}
          </div>

          <div className="border-t border-cyber-green/30 pt-8 animate-slide-up delay-700">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Shield className="h-6 w-6 text-cyber-green" />
              <span className="text-cyber-green font-bold text-lg">LucidShell</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 Mohamed Ibrahim J | All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
