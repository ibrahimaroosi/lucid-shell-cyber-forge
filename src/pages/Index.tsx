
import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Navigation from '../components/Navigation';
import MatrixBackground from '../components/MatrixBackground';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-cyber-green relative overflow-hidden">
      <MatrixBackground />
      <Navigation />
      <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
