import BounceCards from "@/components/ui/BounceCards";
import { Button } from "@/components/ui/button";
import card1 from "@/assets/carousel and cards/1.jpg";
import card2 from "@/assets/carousel and cards/2.jpg";
import card3 from "@/assets/carousel and cards/3.jpg";
import card4 from "@/assets/carousel and cards/4.jpg";
import card5 from "@/assets/carousel and cards/5.jpg";

const FeaturedCakes = () => {
  const featuredImages = [
    card1,
    card2,
    card3,
    card4,
    card5
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