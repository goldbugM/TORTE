import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-soft'
        : 'bg-white/60 backdrop-blur-md'
    }`}>
      {/* Top bar with contact info */}
      <div className="hidden lg:block bg-gray-50/80 border-b border-gray-200/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="h-3 w-3" />
                <span className="font-light">+49 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin className="h-3 w-3" />
                <span className="font-light">Musterstraße 123, 12345 Musterstadt</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-display font-semibold text-primary cursor-pointer hover:scale-105 transition-transform duration-200"
                onClick={() => scrollToSection('home')}>
              Tortenwelt R&Z
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-sm"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('featured')}
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-sm"
            >
              Bestseller
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-sm"
            >
              Galerie
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-sm"
            >
              Über uns
            </button>
            <Link 
              to="/torten-konfigurator"
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-sm"
            >
              Torten Konfigurator
            </Link>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-sm"
            >
              Kontakt
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => scrollToSection('contact')}
              className="hidden sm:inline-flex hover:scale-105 transition-transform duration-200 bg-primary hover:bg-primary/90 text-white font-medium rounded-full px-6 py-2"
            >
              Jetzt bestellen
            </Button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200/50 animate-in slide-in-from-top-2 duration-200">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left py-3 text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('featured')}
              className="block w-full text-left py-3 text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Bestseller
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-left py-3 text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Galerie
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-3 text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Über uns
            </button>
            <Link 
              to="/torten-konfigurator"
              className="block w-full text-left py-3 text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Torten Konfigurator
            </Link>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-3 text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Kontakt
            </button>
            <Button 
              variant="hero" 
              size="sm" 
              className="w-full mt-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-full py-3"
              onClick={() => scrollToSection('contact')}
            >
              Jetzt bestellen
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;