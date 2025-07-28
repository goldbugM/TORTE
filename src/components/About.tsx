import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChefHat, Heart, Award, Users, Clock, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import FeatureCarousel, { FeatureCarouselItem } from "./FeatureCarousel";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features: FeatureCarouselItem[] = [
    {
      id: "handgemacht",
      icon: ChefHat,
      title: "Handgemacht",
      description: "Jede Torte wird mit traditionellen Methoden und viel Liebe zum Detail hergestellt"
    },
    {
      id: "qualitaet",
      icon: Heart,
      title: "Qualitätszutaten",
      description: "Nur die besten und frischesten Zutaten kommen in unsere Backwaren"
    },
    {
      id: "erfahrung",
      icon: Award,
      title: "Erfahrung",
      description: "Über 10 Jahre Erfahrung in der Konditorei und türkischen Küche"
    },
    {
      id: "persoenlich",
      icon: Users,
      title: "Persönlich",
      description: "Individuelle Beratung und maßgeschneiderte Lösungen für jeden Anlass"
    }
  ];

  return (
    <section id="about" className="bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
            Über uns
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Willkommen bei Tortenwelt R&Z
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Unsere Leidenschaft für das Backen und die Liebe zum Detail machen jede unserer Kreationen zu etwas Besonderem.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>


            <div>
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Was uns besonders macht:
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Fusion aus deutscher und türkischer Backkunst</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Individuelle Tortenerstellung nach Ihren Wünschen</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Verwendung traditioneller Rezepte und Techniken</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Persönliche Beratung und Kundenservice</span>
                </li>
              </ul>
            </div>

            <Button 
              onClick={scrollToContact}
              variant="hero" 
              size="lg"
              className="hover:scale-105 transition-transform duration-300"
            >
              Jetzt persönlich beraten lassen
            </Button>
          </div>

          {/* Right Content - Features Grid */}
          <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="flex justify-center">
              <FeatureCarousel 
              items={features}
              baseWidth={420}
              autoplay={true}
              autoplayDelay={4000}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Bereit für Ihre Traumtorte?
            </h3>
            <p className="text-muted-foreground mb-6">
              Lassen Sie uns gemeinsam Ihre perfekte Torte kreieren. Von der ersten Idee bis zum letzten Schliff - 
              wir begleiten Sie bei jedem Schritt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToContact}
                variant="hero" 
                size="lg"
                className="hover:scale-105 transition-transform duration-300"
              >
                Beratungstermin vereinbaren
              </Button>
              <Button 
                onClick={() => {
                  const element = document.getElementById('gallery');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                variant="outline" 
                size="lg"
                className="hover:scale-105 transition-transform duration-300"
              >
                Unsere Kreationen ansehen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;