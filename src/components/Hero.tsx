import { Button } from "@/components/ui/button";
import GlareHover from "@/components/ui/GlareHover";
import { useState, useEffect } from "react";
import { ChefHat, Heart, Star, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-cakes.jpg";
import blackForestCake from "@/assets/black-forest-cake.jpg";
import chocolateTorte from "@/assets/chocolate-torte.jpg";
import fruitCake from "@/assets/fruit-cake.jpg";
import weddingCake from "@/assets/wedding-cake.jpg";
import kasekuchen from "@/assets/kasekuchen.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Carousel images array
  const carouselImages = [
    heroImage,
    blackForestCake,
    chocolateTorte,
    fruitCake,
    weddingCake,
    kasekuchen
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate carousel images
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % carouselImages.length
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/50 to-background/30"></div>
          </div>
        ))}
      </div>

      {/* Carousel indicators */}
      <div className="absolute bottom-20 right-8 flex flex-col space-y-2 z-20">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-primary scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-bounce delay-1000">
          <ChefHat className="h-8 w-8 text-primary/30" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse delay-2000">
          <Heart className="h-6 w-6 text-rose-400/40" />
        </div>
        <div className="absolute bottom-40 left-20 animate-bounce delay-3000">
          <Star className="h-7 w-7 text-yellow-400/40" />
        </div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Animated heading */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-light text-gray-900 mb-6 leading-tight tracking-tight">
              Willkommen in der
              <span className="block text-primary font-medium bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Tortenwelt R&Z
              </span>
            </h1>
          </div>
          
          {/* Animated description */}
          <div className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed font-light">
              Handgemachte Torten und Kuchen mit Liebe gebacken. 
              Jede Torte ist ein Kunstwerk, das Ihre besonderen Momente unvergesslich macht.
            </p>
          </div>


          
          {/* Animated buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <GlareHover
              glareColor="#ff69b4"
              glareOpacity={0.4}
              glareSize={120}
              transitionDuration={800}
              className="inline-block"
            >
              <Button 
                variant="hero" 
                size="lg" 
                className="shadow-elegant hover:shadow-rose hover:scale-105 transition-all duration-300 group w-full bg-primary hover:bg-primary/90 text-white font-medium rounded-full px-8 py-4"
                onClick={() => scrollToSection('gallery')}
              >
                <span className="mr-2">Unsere Torten entdecken</span>
                <ChefHat className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              </Button>
            </GlareHover>
            <Button 
              variant="outline" 
              size="lg"
              className="hover:bg-gray-50 hover:text-gray-900 hover:scale-105 transition-all duration-300 group border-gray-300 text-gray-700 rounded-full px-8 py-4 font-medium"
              onClick={() => scrollToSection('contact')}
            >
              <span className="mr-2">Kontakt aufnehmen</span>
              <Heart className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            </Button>
          </div>

          {/* Special offer banner */}
          <div className={`mt-8 p-6 bg-white/80 backdrop-blur-md rounded-2xl border border-gray-200/50 shadow-soft transform transition-all duration-1000 delay-900 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-primary font-semibold text-lg">Besondere Aktion!</p>
                <p className="text-sm text-gray-600 font-light">Bei Bestellung von 3 Torten erhalten Sie 10% Rabatt</p>
              </div>
              <Button variant="outline" size="sm" className="hidden sm:inline-flex rounded-full border-gray-300 text-gray-700 hover:bg-gray-50 font-medium">
                Mehr erfahren
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="p-3 rounded-full bg-white/80 backdrop-blur-md border border-gray-200/50 hover:bg-white hover:scale-110 transition-all duration-300 shadow-soft"
        >
          <ArrowDown className="h-5 w-5 text-gray-700" />
        </button>
      </div>
    </section>
  );
};

export default Hero;