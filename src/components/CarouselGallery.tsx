import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, Heart, ShoppingCart, Star, ChevronLeft, ChevronRight } from "lucide-react";
import chocolateTorte from "@/assets/chocolate-torte.jpg";
import fruitCake from "@/assets/fruit-cake.jpg";
import weddingCake from "@/assets/wedding-cake.jpg";
import blackForestCake from "@/assets/black-forest-cake.jpg";
import apfelstrudel from "@/assets/apfelstrudel.jpg";
import kasekuchen from "@/assets/kasekuchen.jpg";
import baklava from "@/assets/baklava.jpg";
import kunefe from "@/assets/kunefe.jpg";
import lokum from "@/assets/lokum.jpg";
import sutlac from "@/assets/sutlac.jpg";
import muhallebi from "@/assets/muhallebi.jpg";
import revani from "@/assets/revani.jpg";
import borek from "@/assets/borek.jpg";
import pide from "@/assets/pide.jpg";
import lahmacun from "@/assets/lahmacun.jpg";
import manti from "@/assets/manti.jpg";
import sigaraBoregi from "@/assets/sigara-boregi.jpg";

const CarouselGallery = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // New state for hover

  const navigateToConfigurator = () => {
    navigate('/torten-konfigurator');
  };

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('gallery');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-scroll effect - reset when mobile state changes
  useEffect(() => {
    setCurrentSlide(0); // Reset to first slide when layout changes
  }, [isMobile]);

  // Auto-scroll effect - now pauses when hovered
  useEffect(() => {
    if (isHovered) return; // Don't start interval if hovered

    const interval = setInterval(() => {
      setCurrentSlide(prev => {
        const itemsPerSlide = isMobile ? 2 : 6;
        const maxSlides = Math.ceil(cakesData.length / itemsPerSlide);
        return (prev + 1) % maxSlides;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isMobile, isHovered]); // Added isHovered dependency

  const toggleFavorite = (index: number) => {
    setFavorites(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const cakesData = [
    {
      image: chocolateTorte,
      title: "Schokoladen Torte",
      description: "Saftige Schokoladentorte mit cremiger Füllung und dunklen Beeren",
      price: "ab 35€",
      rating: 4.9,
      popular: true,
      ingredients: ["Dunkle Schokolade", "Frische Beeren", "Sahne", "Biskuit"],
      allergens: ["Gluten", "Milch", "Eier"]
    },
    {
      image: "/placeholder-cake.svg",
      title: "Buttercreme Torte",
      description: "Klassische Torte mit luftiger Buttercreme und zartem Biskuitboden",
      price: "ab 32€",
      rating: 4.8,
      popular: true,
      ingredients: ["Butter", "Puderzucker", "Biskuit", "Vanille"],
      allergens: ["Gluten", "Milch", "Eier"]
    },
    {
      image: "/placeholder-cake.svg",
      title: "Naked Torte",
      description: "Moderne Torte ohne Fondant mit sichtbaren Schichten und frischen Früchten",
      price: "ab 38€",
      rating: 4.9,
      popular: true,
      ingredients: ["Frische Früchte", "Sahne", "Biskuit", "Beeren"],
      allergens: ["Gluten", "Milch", "Eier"]
    },
    {
      image: "/placeholder-cake.svg",
      title: "Mascarpone-Frischkäse-Sahne Torte",
      description: "Cremige Torte mit Mascarpone, Frischkäse und luftiger Sahne",
      price: "ab 36€",
      rating: 4.8,
      popular: false,
      ingredients: ["Mascarpone", "Frischkäse", "Sahne", "Biskuit"],
      allergens: ["Gluten", "Milch", "Eier"]
    },
    {
      image: "/placeholder-cake.svg",
      title: "Vintage Torte",
      description: "Elegante Torte im Vintage-Stil mit klassischen Dekorationen",
      price: "ab 45€",
      rating: 4.9,
      popular: false,
      ingredients: ["Buttercreme", "Fondant", "Biskuit", "Dekoration"],
      allergens: ["Gluten", "Milch", "Eier"]
    },
    {
      image: "/placeholder-cake.svg",
      title: "Schoko Torte",
      description: "Intensive Schokoladentorte für echte Schokoladenliebhaber",
      price: "ab 34€",
      rating: 4.8,
      popular: true,
      ingredients: ["Schokolade", "Kakao", "Sahne", "Biskuit"],
      allergens: ["Gluten", "Milch", "Eier", "Soja"]
    },
    {
      image: fruitCake,
      title: "Fruchtige Sahnetorte",
      description: "Frische Beeren auf luftiger Sahne mit Biskuitboden",
      price: "ab 32€",
      rating: 4.8,
      popular: false,
      ingredients: ["Frische Beeren", "Schlagsahne", "Biskuit", "Vanille"],
      allergens: ["Gluten", "Milch", "Eier"]
    },
    {
      image: weddingCake,
      title: "Hochzeitstorte",
      description: "Elegante mehrstöckige Torte für Ihren besonderen Tag",
      price: "ab 150€",
      rating: 5.0,
      popular: true,
      ingredients: ["Premium Zutaten", "Fondant", "Buttercreme", "Dekoration"],
      allergens: ["Gluten", "Milch", "Eier"]
    },
    {
      image: blackForestCake,
      title: "Schwarzwälder Kirschtorte",
      description: "Klassische deutsche Torte mit Kirschen, Sahne und Schokolade",
      price: "ab 38€",
      rating: 4.9,
      popular: true,
      ingredients: ["Sauerkirschen", "Schlagsahne", "Schokolade", "Kirschwasser"],
      allergens: ["Gluten", "Milch", "Eier", "Alkohol"]
    },
    {
      image: apfelstrudel,
      title: "Apfelstrudel",
      description: "Traditioneller Strudel mit Äpfeln, Zimt und Vanillesauce",
      price: "ab 18€",
      rating: 4.7,
      popular: false,
      ingredients: ["Äpfel", "Zimt", "Strudelteig", "Vanillesauce"],
      allergens: ["Gluten", "Milch"]
    },
    {
      image: kasekuchen,
      title: "Käsekuchen",
      description: "Cremiger deutscher Käsekuchen mit frischen Beeren",
      price: "ab 28€",
      rating: 4.8,
      popular: false,
      ingredients: ["Quark", "Frischkäse", "Beeren", "Mürbeteig"],
      allergens: ["Gluten", "Milch", "Eier"]
    },
    {
      image: baklava,
      title: "Baklava",
      description: "Traditionelles Blätterteiggebäck mit Pistazien und Honigsirup",
      price: "ab 25€/kg",
      rating: 4.9,
      popular: true,
      ingredients: ["Pistazien", "Blätterteig", "Honig", "Butter"],
      allergens: ["Gluten", "Nüsse"]
    }
  ];

  const turkishSweetData = [
    {
      image: baklava,
      title: "Baklava",
      description: "Traditionelles Blätterteiggebäck mit Pistazien und Honigsirup",
      price: "ab 25€/kg",
      rating: 4.9,
      popular: true,
      ingredients: ["Pistazien", "Blätterteig", "Honig", "Butter"],
      allergens: ["Gluten", "Nüsse"]
    },
    {
      image: kunefe,
      title: "Künefe",
      description: "Warmes Dessert mit geschmolzenem Käse und Kadayıf-Teig",
      price: "ab 8€/Portion",
      rating: 4.8,
      popular: true,
      ingredients: ["Kadayıf-Teig", "Käse", "Sirup", "Pistazien"],
      allergens: ["Gluten", "Milch", "Nüsse"]
    },
    {
      image: lokum,
      title: "Lokum (Turkish Delight)",
      description: "Weiche Süßigkeit mit Rosenwasser, Zitrone oder Pistazien",
      price: "ab 15€/kg",
      rating: 4.7,
      popular: false,
      ingredients: ["Zucker", "Stärke", "Rosenwasser", "Pistazien"],
      allergens: ["Nüsse"]
    },
    {
      image: sutlac,
      title: "Sütlaç",
      description: "Cremiger türkischer Reispudding mit Zimt",
      price: "ab 6€/Portion",
      rating: 4.6,
      popular: false,
      ingredients: ["Reis", "Milch", "Zucker", "Zimt"],
      allergens: ["Milch"]
    },
    {
      image: muhallebi,
      title: "Muhallebi",
      description: "Traditioneller Milchpudding mit Pistazien und Rosenwasser",
      price: "ab 7€/Portion",
      rating: 4.7,
      popular: false,
      ingredients: ["Milch", "Stärke", "Pistazien", "Rosenwasser"],
      allergens: ["Milch", "Nüsse"]
    },
    {
      image: revani,
      title: "Revani",
      description: "Saftiger Grießkuchen getränkt in duftendem Sirup",
      price: "ab 22€",
      rating: 4.8,
      popular: false,
      ingredients: ["Grieß", "Sirup", "Mandeln", "Zitrone"],
      allergens: ["Gluten", "Eier", "Nüsse"]
    }
  ];

  const turkishSavoryData = [
    {
      image: borek,
      title: "Börek",
      description: "Knuspriges Blätterteiggebäck mit verschiedenen Füllungen",
      price: "ab 20€",
      rating: 4.8,
      popular: true,
      ingredients: ["Blätterteig", "Käse/Kartoffel/Hackfleisch/Spinat", "Zwiebeln"],
      allergens: ["Gluten", "Milch"]
    },
    {
      image: pide,
      title: "Pide",
      description: "Türkisches Fladenbrot-Boot mit Käse, Ei und Gemüse",
      price: "ab 12€/Stück",
      rating: 4.7,
      popular: true,
      ingredients: ["Hefeteig", "Käse", "Ei", "Gemüse"],
      allergens: ["Gluten", "Milch", "Eier"]
    },
    {
      image: lahmacun,
      title: "Lahmacun",
      description: "Dünnes Fladenbrot mit gewürztem Hackfleisch",
      price: "ab 8€/Stück",
      rating: 4.6,
      popular: false,
      ingredients: ["Hefeteig", "Hackfleisch", "Tomaten", "Gewürze"],
      allergens: ["Gluten"]
    },
    {
      image: manti,
      title: "Mantı",
      description: "Kleine türkische Teigtaschen mit Joghurt und Paprikabutter",
      price: "ab 15€/Portion",
      rating: 4.9,
      popular: true,
      ingredients: ["Nudelteig", "Hackfleisch", "Joghurt", "Paprikabutter"],
      allergens: ["Gluten", "Milch", "Eier"]
    },
    {
      image: sigaraBoregi,
      title: "Sigara Böreği",
      description: "Knusprige zigarrenförmige Börek-Rollen mit Käse",
      price: "ab 18€/10 Stück",
      rating: 4.7,
      popular: false,
      ingredients: ["Yufka-Teig", "Käse", "Petersilie", "Öl"],
      allergens: ["Gluten", "Milch"]
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 ${
          i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const renderCarouselItem = (item: any, index: number, categoryIndex: number) => {
    const globalIndex = categoryIndex * 100 + index;
    const isFavorite = favorites.includes(globalIndex);
    
    return (
      <div 
        key={index} 
        className="flex-shrink-0 w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <SpotlightCard 
          className="p-0 border-0 bg-transparent"
          spotlightColor="rgba(255, 182, 193, 0.15)"
        >
          <Card className="overflow-hidden shadow-soft hover:shadow-rose transition-all duration-300 transform hover:-translate-y-2 border-rose/20 group h-full">
            <div className="relative aspect-square overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Overlay with actions */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-white">
                      <Eye className="h-4 w-4 mr-1" />
                      Details
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">{item.title}</DialogTitle>
                    </DialogHeader>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      </div>
                      <div className="space-y-4">
                        <p className="text-muted-foreground">{item.description}</p>
                        
                        <div className="flex items-center space-x-2">
                          {renderStars(item.rating)}
                          <span className="text-sm text-muted-foreground">({item.rating})</span>
                        </div>
                        
                        <div className="text-2xl font-bold text-primary">{item.price}</div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Zutaten:</h4>
                          <div className="flex flex-wrap gap-1">
                            {item.ingredients.map((ingredient: string, i: number) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {ingredient}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Allergene:</h4>
                          <div className="flex flex-wrap gap-1">
                            {item.allergens.map((allergen: string, i: number) => (
                              <Badge key={i} variant="destructive" className="text-xs">
                                {allergen}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <Button 
                          className="w-full" 
                          onClick={scrollToContact}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Jetzt bestellen
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                
                <Button 
                  size="sm" 
                  variant={isFavorite ? "default" : "secondary"}
                  onClick={() => toggleFavorite(globalIndex)}
                  className={isFavorite ? "bg-red-500 hover:bg-red-600" : "bg-white/90 hover:bg-white"}
                >
                  <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
                </Button>
              </div>
              
              {/* Badges */}
              <div className="absolute top-2 left-2 space-y-1">
                {item.popular && (
                  <Badge className="bg-primary text-primary-foreground">
                    Beliebt
                  </Badge>
                )}
              </div>
              
              <div className="absolute top-2 right-2">
                <div className="bg-black/70 text-white px-2 py-1 rounded text-sm font-semibold">
                  {item.price}
                </div>
              </div>
            </div>
            
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-foreground line-clamp-1">
                  {item.title}
                </h3>
                <div className="flex items-center space-x-1">
                  {renderStars(item.rating)}
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="text-lg font-bold text-primary">
                  {item.price}
                </div>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={navigateToConfigurator}
                    className="hover:scale-105 transition-transform duration-200"
                  >
                    Konfigurieren
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={scrollToContact}
                    className="hover:scale-105 transition-transform duration-200"
                  >
                    Bestellen
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </SpotlightCard>
      </div>
    );
  };

  // Function to determine if carousel should be used based on item count
  const shouldUseCarousel = (items: any[]) => {
    const itemsPerSlide = isMobile ? 2 : 6;
    return items.length > itemsPerSlide;
  };

  // Render simple grid for categories with few items
  const renderSimpleGrid = (items: any[], categoryIndex: number) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => 
          renderCarouselItem(item, index, categoryIndex)
        )}
      </div>
    );
  };

  const renderCarousel = (items: any[], categoryIndex: number) => {
    // Responsive items per slide: 2 on mobile (1 per row, 2 rows), 6 on desktop (3 per row, 2 rows)
    const itemsPerSlide = isMobile ? 2 : 6;
    const itemsPerRow = isMobile ? 1 : 3;
    const totalSlides = Math.ceil(items.length / itemsPerSlide);
    
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };
    
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
      <div className="relative">
        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg md:left-0 -left-2"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg md:right-0 -right-2"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Carousel Container */}
        <div 
          className="overflow-hidden mx-8 md:mx-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {Array.from({ length: totalSlides }, (_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 mb-4`}>
                  {/* First Row */}
                  {items.slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerRow).map((item, index) => 
                    renderCarouselItem(item, slideIndex * itemsPerSlide + index, categoryIndex)
                  )}
                </div>
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-4`}>
                  {/* Second Row */}
                  {items.slice(slideIndex * itemsPerSlide + itemsPerRow, slideIndex * itemsPerSlide + itemsPerSlide).map((item, index) => 
                    renderCarouselItem(item, slideIndex * itemsPerSlide + itemsPerRow + index, categoryIndex)
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentSlide ? 'bg-primary' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    );
  };

  // Main render function that decides between carousel and grid
  const renderGalleryContent = (items: any[], categoryIndex: number) => {
    return shouldUseCarousel(items) 
      ? renderCarousel(items, categoryIndex)
      : renderSimpleGrid(items, categoryIndex);
  };

  return (
    <section id="gallery" className="bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className={`text-center mb-16 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Unsere Spezialitäten
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entdecken Sie unsere vielfältige Auswahl an deutschen Torten und türkischen Spezialitäten. 
            Jedes Produkt wird mit höchster Sorgfalt und authentischen Rezepten zubereitet.
          </p>
        </div>

        <div className={`transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <Tabs defaultValue="cakes" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="cakes" className="text-sm md:text-base">
                TORTEN
              </TabsTrigger>
              <TabsTrigger value="turkish-sweet" className="text-sm md:text-base">
                SÜSSPEISEN
              </TabsTrigger>
              <TabsTrigger value="turkish-savory" className="text-sm md:text-base">
                SPEZIALITÄTEN
              </TabsTrigger>
            </TabsList>

            <TabsContent value="cakes" className="space-y-8">
              <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
                {renderGalleryContent(cakesData, 0)}
              </div>
            </TabsContent>

            <TabsContent value="turkish-sweet" className="space-y-8">
              <div className={`text-center mb-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  Türkische Süßspeisen
                </h3>
                <p className="text-muted-foreground">
                  Traditionelle orientalische Süßigkeiten und Desserts
                </p>
              </div>
              <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
                {renderGalleryContent(turkishSweetData, 1)}
              </div>
            </TabsContent>

            <TabsContent value="turkish-savory" className="space-y-8">
              <div className={`text-center mb-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
                <h3 className="text-2xl font-semibold text-foreground mb-2">
                  Herzhafte Türkische Spezialitäten
                </h3>
                <p className="text-muted-foreground">
                  Authentische türkische Gerichte und Snacks
                </p>
              </div>
              <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
                {renderGalleryContent(turkishSavoryData, 2)}
              </div>
            </TabsContent>
          </Tabs>
        </div>


      </div>
    </section>
  );
};

export default CarouselGallery;