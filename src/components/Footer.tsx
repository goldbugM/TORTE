import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white/95 backdrop-blur-xl border-t border-gray-100 text-gray-800">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="space-y-3">
            <h3 className="text-lg font-display font-semibold text-primary">Tortenwelt R&Z</h3>
            <p className="text-gray-600 text-xs leading-relaxed font-light">
              Ihre Konditorei für handgemachte deutsche Torten und authentische türkische Spezialitäten.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="ghost" className="text-gray-500 hover:text-primary hover:bg-gray-50 p-1 rounded-full">
                <Facebook className="h-3 w-3" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-500 hover:text-primary hover:bg-gray-50 p-1 rounded-full">
                <Instagram className="h-3 w-3" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-500 hover:text-primary hover:bg-gray-50 p-1 rounded-full">
                <Twitter className="h-3 w-3" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-display font-medium text-gray-900">Schnellzugriff</h4>
            <ul className="space-y-1">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-600 hover:text-primary transition-colors text-xs font-light"
                >
                  Über uns
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="text-gray-600 hover:text-primary transition-colors text-xs font-light"
                >
                  Unsere Torten
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-600 hover:text-primary transition-colors text-xs font-light"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-display font-medium text-gray-900">Services</h4>
            <ul className="space-y-1 text-xs text-gray-600 font-light">
              <li>• Individuelle Torten</li>
              <li>• Hochzeitstorten</li>
              <li>• Lieferservice</li>
              <li>• Türkische Spezialitäten</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="text-sm font-display font-medium text-gray-900">Kontakt</h4>
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <MapPin className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-xs text-gray-600 font-light">
                  <p>Frankfurt am Main</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Phone className="h-3 w-3 text-primary flex-shrink-0" />
                <a href="tel:+4969123456789" className="text-xs text-gray-600 hover:text-primary transition-colors font-light">
                  +49 (0) 69 123 456 789
                </a>
              </div>
              
              <div className="flex items-center space-x-2">
                <Mail className="h-3 w-3 text-primary flex-shrink-0" />
                <a href="mailto:info@tortenwelt-rz.de" className="text-xs text-gray-600 hover:text-primary transition-colors font-light">
                  info@tortenwelt-rz.de
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <div className="text-xs text-gray-500 font-light">
              © 2024 Tortenwelt R&Z. Alle Rechte vorbehalten.
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-xs text-gray-500 hover:text-primary transition-colors font-light">
                AGB
              </a>
              <a href="#" className="text-xs text-gray-500 hover:text-primary transition-colors font-light">
                Datenschutz
              </a>
              <Button 
                onClick={scrollToTop}
                size="sm" 
                variant="ghost" 
                className="text-gray-500 hover:text-primary hover:bg-gray-50 text-xs p-1 rounded-full"
              >
                Nach oben ↑
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;