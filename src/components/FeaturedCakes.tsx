import BounceCards from "@/components/ui/BounceCards";
import { Button } from "@/components/ui/button";
import chocolateTorte from "@/assets/chocolate-torte.jpg";
import blackForestCake from "@/assets/black-forest-cake.jpg";
import weddingCake from "@/assets/wedding-cake.jpg";
import fruitCake from "@/assets/fruit-cake.jpg";
import kasekuchen from "@/assets/kasekuchen.jpg";

const FeaturedCakes = () => {
  const featuredImages = [
    chocolateTorte,
    blackForestCake,
    weddingCake,
    fruitCake,
    kasekuchen
  ];

  const scrollToGallery = () => {
    const element = document.getElementById('gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Unsere Bestseller
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Entdecken Sie unsere beliebtesten Kreationen. Jede Torte wird mit Liebe und 
            höchster Handwerkskunst für Sie zubereitet.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <BounceCards
            images={featuredImages}
            containerWidth={500}
            containerHeight={400}
            animationDelay={0.3}
            animationStagger={0.08}
            className="mx-auto"
          />
        </div>

        <div className="text-center">
          <Button 
            variant="hero" 
            size="lg"
            onClick={scrollToGallery}
            className="hover:scale-105 transition-transform duration-300"
          >
            Alle Spezialitäten entdecken
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCakes;