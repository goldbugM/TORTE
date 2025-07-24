import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChefHat, Heart, Award, Users, Clock, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

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

  const features = [
    {
      icon: ChefHat,
      title: "Handgemacht",
      description: "Jede Torte wird mit traditionellen Methoden und viel Liebe zum Detail hergestellt"
    },
    {
      icon: Heart,
      title: "Qualitätszutaten",
      description: "Nur die besten und frischesten Zutaten kommen in unsere Backwaren"
    },
    {
      icon: Award,
      title: "Erfahrung",
      description: "Über 10 Jahre Erfahrung in der Konditorei und türkischen Küche"
    },
    {
      icon: Users,
      title: "Persönlich",
      description: "Individuelle Beratung und maßgeschneiderte Lösungen für jeden Anlass"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary">
            Über uns
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Willkommen bei Tortenwelt R&Z
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Seit über einem Jahrzehnt vereinen wir deutsche Konditoreikunst mit authentischen türkischen Spezialitäten. 
            Unsere Leidenschaft für das Backen und die Liebe zum Detail machen jede unserer Kreationen zu etwas Besonderem.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <Sparkles className="h-6 w-6 text-primary mr-2" />
                Unsere Geschichte
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Was als kleine Familienbäckerei begann, ist heute eine beliebte Anlaufstelle für Tortenliebhaber 
                und Freunde der türkischen Küche. Wir kombinieren traditionelle deutsche Backkunst mit den 
                authentischen Aromen der türkischen Konditorei.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Jede Torte erzählt eine Geschichte - von klassischen deutschen Sahnetorten bis hin zu 
                exotischen türkischen Süßspeisen wie Baklava und Künefe. Unsere Meisterbäcker verwenden 
                nur die besten Zutaten und bewährte Familienrezepte.
              </p>
            </div>

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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
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