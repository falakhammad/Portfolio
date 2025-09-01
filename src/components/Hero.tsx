import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        transform: `translateY(${scrollY * 0.3}px)`,
      }}
    >
      <div className="text-center text-white z-10 px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow animate-fade-in">
          Falak Ejaz
          <span className="block text-3xl md:text-5xl bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent pt-5">
            Software Developer , Aspiring Data Analyst 
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto text-shadow animate-fade-in">
          Crafting digital solutions with code and insight.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white px-8 py-3 text-lg"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-accent hover:bg-white hover:text-primary px-8 py-3 text-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce cursor-pointer hover:text-accent transition-colors"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;