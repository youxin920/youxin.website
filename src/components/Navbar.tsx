
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Button } from "@/components/ui/button";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo isScrolled={isScrolled} />
          
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-8">
              <a 
                href="#"
                className={`${isScrolled ? 'text-youxin-blue' : 'text-white'} hover:text-youxin-purple transition-colors`}
              >
                בית
              </a>
              <a 
                href="#services" 
                onClick={() => scrollToSection('services')}
                className={`${isScrolled ? 'text-youxin-blue' : 'text-white'} hover:text-youxin-purple transition-colors`}
              >
                שירותים
              </a>
              <a 
                href="#contact" 
                onClick={() => scrollToSection('contact')}
                className={`${isScrolled ? 'text-youxin-blue' : 'text-white'} hover:text-youxin-purple transition-colors`}
              >
                צור קשר
              </a>
            </nav>
            
            <Button 
              className="bg-youxin-purple hover:bg-youxin-purple/90 text-white"
              onClick={() => scrollToSection('contact')}
            >
              קבל הצעת מחיר
            </Button>
          </div>
          
          <button 
            className="md:hidden text-youxin-purple focus:outline-none"
            onClick={toggleMenu}
            aria-label="תפריט"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg mt-2 py-4">
          <nav className="flex flex-col space-y-4 px-4">
            <a 
              href="#"
              className="text-youxin-blue hover:text-youxin-purple"
              onClick={() => setIsMenuOpen(false)}
            >
              בית
            </a>
            <a 
              href="#services" 
              className="text-youxin-blue hover:text-youxin-purple"
              onClick={() => {
                scrollToSection('services');
                setIsMenuOpen(false);
              }}
            >
              שירותים
            </a>
            <a 
              href="#contact" 
              className="text-youxin-blue hover:text-youxin-purple"
              onClick={() => {
                scrollToSection('contact');
                setIsMenuOpen(false);
              }}
            >
              צור קשר
            </a>
            <Button 
              className="bg-youxin-purple hover:bg-youxin-purple/90 text-white w-full"
              onClick={() => {
                scrollToSection('contact');
                setIsMenuOpen(false);
              }}
            >
              קבל הצעת מחיר
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
