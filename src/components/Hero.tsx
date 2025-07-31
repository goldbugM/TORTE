import { Button } from "@/components/ui/button";
import GlareHover from "@/components/ui/GlareHover";
import { useState, useEffect } from "react";
import { ChefHat, Heart, Star, ArrowDown, Eye, Instagram } from "lucide-react";
import carousel1 from "@/assets/carousel and cards/1.jpg";
import carousel2 from "@/assets/carousel and cards/2.jpg";
import carousel3 from "@/assets/carousel and cards/3.jpg";
import carousel4 from "@/assets/carousel and cards/4.jpg";
import carousel5 from "@/assets/carousel and cards/5.jpg";
import carousel6 from "@/assets/carousel and cards/6.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Carousel images array
  const carouselImages = [
    carousel1,
    carousel2,
    carousel3,
    carousel4,
    carousel5,
    carousel6
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
    <section id="home" className="relative min-h-screen w-full flex items-center overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0 w-full h-full">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex
                ? 'opacity-100 carousel-active'
                : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          >

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
          <div className={`flex flex-col sm:flex-row gap-6 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <GlareHover
              glareColor="#ff69b4"
              glareOpacity={0.4}
              glareSize={120}
              transitionDuration={800}
              className="inline-block flex-1"
            >
              <Button 
                variant="hero" 
                size="lg" 
                className="shadow-elegant hover:shadow-rose hover:scale-105 transition-all duration-300 group w-full bg-primary hover:bg-primary/90 text-white font-medium rounded-full px-10 py-6 text-lg h-16"
                onClick={() => scrollToSection('featured')}
              >
                <span className="mr-3">Unsere Bestseller ansehen</span>
                <ChefHat className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
              </Button>
            </GlareHover>
            <Button 
              variant="outline" 
              size="lg"
              className="shadow-elegant hover:shadow-rose hover:scale-105 transition-all duration-300 group flex-1 w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium rounded-full px-10 py-6 text-lg h-16"
              onClick={() => scrollToSection('gallery')}
            >
              <span className="mr-3">Galerie durchstöbern</span>
              <Eye className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </Button>
          </div>

          {/* Special offer banner - Connected to Instagram */}
          <div className={`mt-8 transform transition-all duration-1000 delay-900 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <a 
              href="https://instagram.com/torten_welt_r_und_z" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-6 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl border-2 border-pink-300/50 shadow-soft hover:shadow-rose hover:scale-105 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Instagram className="h-6 w-6 text-pink-600 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-primary font-semibold text-xl">Besondere Aktion!</p>
                  </div>
                  <p className="text-sm text-gray-600 font-light">Bei Bestellung von 3 Torten erhalten Sie 10% Rabatt</p>
                  <p className="text-xs text-pink-600 font-medium mt-1">📱 Folgen Sie uns auf Instagram für exklusive Angebote!</p>
                </div>
                <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-pink-100 rounded-full group-hover:bg-pink-200 transition-colors duration-300">
                  <Instagram className="h-4 w-4 text-pink-600" />
                  <span className="text-sm font-medium text-pink-700">Folgen</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('featured')}
          className="p-3 rounded-full bg-white/80 border border-gray-200/50 hover:bg-white hover:scale-110 transition-all duration-300 shadow-soft"
        >
          <ArrowDown className="h-5 w-5 text-gray-700" />
        </button>
      </div>
    </section>
  );
};

export default Hero;