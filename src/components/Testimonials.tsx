import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Maria Schmidt",
      location: "München",
      rating: 5,
      text: "Die Hochzeitstorte war ein absoluter Traum! Nicht nur wunderschön anzusehen, sondern auch unglaublich lecker. Alle Gäste waren begeistert.",
      occasion: "Hochzeit"
    },
    {
      name: "Ahmed Özkan",
      location: "Berlin",
      rating: 5,
      text: "Endlich authentische türkische Süßspeisen in Deutschland! Das Baklava schmeckt genau wie bei meiner Großmutter. Absolute Empfehlung!",
      occasion: "Familienfeier"
    },
    {
      name: "Julia Weber",
      location: "Hamburg",
      rating: 5,
      text: "Für den Geburtstag meiner Tochter haben wir eine Prinzessinnentorte bestellt. Sie war so schön, dass wir sie fast nicht anschneiden wollten!",
      occasion: "Kindergeburtstag"
    },
    {
      name: "Thomas Müller",
      location: "Frankfurt",
      rating: 5,
      text: "Die Schwarzwälder Kirschtorte war perfekt! Genau der richtige Geschmack und wunderschön dekoriert. Werden definitiv wieder bestellen.",
      occasion: "Firmenfeier"
    },
    {
      name: "Fatma Demir",
      location: "Köln",
      rating: 5,
      text: "Die türkischen Spezialitäten sind fantastisch! Besonders das Künefe ist ein Gedicht. Man schmeckt die Liebe in jedem Bissen.",
      occasion: "Ramadan"
    },
    {
      name: "Sandra Klein",
      location: "Stuttgart",
      rating: 5,
      text: "Hervorragender Service und noch bessere Torten! Die Beratung war sehr professionell und das Ergebnis hat alle Erwartungen übertroffen.",
      occasion: "Jubiläum"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Was unsere Kunden sagen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Über 500 zufriedene Kunden vertrauen auf unsere Qualität und unseren Service. 
            Lesen Sie, was sie über uns sagen.
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="shadow-elegant border-primary/20 bg-background/80">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center justify-center mb-6">
                <Quote className="h-12 w-12 text-primary/30" />
              </div>
              
              <blockquote className="text-xl md:text-2xl text-center text-foreground mb-6 leading-relaxed font-medium">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="flex items-center justify-center mb-4">
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              
              <div className="text-center">
                <p className="font-semibold text-primary text-lg">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-muted-foreground">
                  {testimonials[currentTestimonial].location} • {testimonials[currentTestimonial].occasion}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial indicators */}
        <div className="flex justify-center space-x-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-primary scale-125'
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
            />
          ))}
        </div>

        {/* All testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`shadow-soft hover:shadow-rose transition-all duration-300 transform hover:-translate-y-1 border-primary/10 ${
                index === currentTestimonial ? 'ring-2 ring-primary/30' : ''
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-primary/10 pt-4">
                  <p className="font-semibold text-primary text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.location} • {testimonial.occasion}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">4.9/5</div>
            <div className="text-sm text-muted-foreground">Durchschnittliche Bewertung</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">Zufriedene Kunden</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">1000+</div>
            <div className="text-sm text-muted-foreground">Gebackene Torten</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">15+</div>
            <div className="text-sm text-muted-foreground">Jahre Erfahrung</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;