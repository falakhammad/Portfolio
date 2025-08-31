import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { on } from 'events';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { label: 'Home', onClick: () => scrollToSection('home') },
    { label: 'About', onClick: () => scrollToSection('about') },
    { label: 'Skills', onClick: () => scrollToSection('skills') },
    { label: 'Projects', onClick: () => scrollToSection('projects') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
        }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold text-foreground">
            {/* Replace with your logo or text */}
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {
              navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={link.onClick}
                  className={`text-foreground hover:text-accent transition-colors duration-200 ${isScrolled ? 'text-foreground' : 'text-white'}`}
                >
                  {link.label}
                </button>
              ))
            }
            <Button
              onClick={() => scrollToSection('contact')}
              variant="default"
              className="bg-accent hover:bg-primary/90"
            >
              Contact
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;