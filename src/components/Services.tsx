import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ChefHat, 
  Heart, 
  Clock, 
  Award, 
  Truck, 
  Users, 
  Sparkles, 
  Shield,
  Calendar,
  MessageCircle
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: ChefHat,
      title: "Individuelle Torten",
      description: "Jede Torte wird nach Ihren Wünschen und Vorstellungen handgefertigt",
      features: ["Persönliche Beratung", "Einzigartige Designs", "Alle Größen verfügbar"]
    },
    {
      icon: Calendar,
      title: "Termingerechte Lieferung",
      description: "Pünktliche Lieferung zu Ihrem gewünschten Termin - garantiert",
      features: ["Flexible Termine", "Rechtzeitige Planung", "Zuverlässiger Service"]
    },
    {
      icon: Heart,
      title: "Hochzeitstorten",
      description: "Traumhafte mehrstöckige Torten für Ihren besonderen Tag",
      features: ["Elegante Designs", "Verschiedene Geschmäcker", "Professioneller Aufbau"]
    },
    {
      icon: Users,
      title: "Firmenevents",
      description: "Beeindrucken Sie Ihre Geschäftspartner mit exquisiten Torten",
      features: ["Corporate Design", "Große Mengen", "Professionelle Präsentation"]
    },
    {
      icon: Sparkles,
      title: "Kindergeburtstage",
      description: "Bunte, fantasievolle Torten die Kinderaugen zum Leuchten bringen",
      features: ["Motivtorten", "Kindgerechte Süße", "Allergikerfreundlich"]
    },
    {
      icon: Truck,
      title: "Lieferservice",
      description: "Bequeme Lieferung direkt zu Ihnen nach Hause oder zur Veranstaltung",
      features: ["Sichere Verpackung", "Termingenau", "Aufbauservice verfügbar"]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Unsere Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Von individuellen Torten bis hin zu kompletten Event-Lösungen - 
            wir bieten Ihnen den perfekten Service für jeden Anlass.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="shadow-soft hover:shadow-rose transition-all duration-300 transform hover:-translate-y-2 border-primary/10 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              So einfach geht's
            </h3>
            <p className="text-lg text-muted-foreground">
              In nur 4 Schritten zu Ihrer Traumtorte
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Beratung",
                description: "Persönliches Gespräch über Ihre Wünsche und Vorstellungen"
              },
              {
                step: "2",
                title: "Design",
                description: "Gemeinsame Entwicklung des perfekten Designs für Ihre Torte"
              },
              {
                step: "3",
                title: "Herstellung",
                description: "Handwerkliche Fertigung mit besten Zutaten und viel Liebe"
              },
              {
                step: "4",
                title: "Lieferung",
                description: "Pünktliche Lieferung oder Abholung zu Ihrem Wunschtermin"
              }
            ].map((process, index) => (
              <div key={index} className="text-center relative">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full text-2xl font-bold mb-4">
                  {process.step}
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary/30 -translate-x-8"></div>
                )}
                <h4 className="font-semibold text-foreground mb-2">
                  {process.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;