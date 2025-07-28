import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import CardSwap, { Card } from "./ui/CardSwap";
import chocolateTorte from "@/assets/chocolate-torte.jpg";
import blackForestCake from "@/assets/black-forest-cake.jpg";
import fruitCake from "@/assets/fruit-cake.jpg";
import weddingCake from "@/assets/wedding-cake.jpg";
import kasekuchen from "@/assets/kasekuchen.jpg";

const FeaturedCakesSwap = () => {
  const navigate = useNavigate();
  
  const navigateToConfigurator = () => {
    navigate('/torten-konfigurator');
  };

  const featuredCakes = [
    {
      id: 1,
      name: "Schokoladen Torte",
      description: "Reichhaltige Schokoladentorte mit cremiger Ganache",
      image: chocolateTorte,
      price: "€45",
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Schwarzwälder Kirschtorte",
      description: "Klassische deutsche Torte mit Kirschen und Sahne",
      image: blackForestCake,
      price: "€52",
      badge: "Traditionell"
    },
    {
      id: 3,
      name: "Obsttorte",
      description: "Frische saisonale Früchte auf Biskuitboden",
      image: fruitCake,
      price: "€38",
      badge: "Saisonal"
    },
    {
      id: 4,
      name: "Hochzeitstorte",
      description: "Elegante mehrstöckige Torte für besondere Anlässe",
      image: weddingCake,
      price: "€180",
      badge: "Premium"
    },
    {
      id: 5,
      name: "Käsekuchen",
      description: "Cremiger New York Style Cheesecake",
      image: kasekuchen,
      price: "€35",
      badge: "Klassiker"
    }
  ];

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Bestseller": return "bg-red-500";
      case "Traditionell": return "bg-green-500";
      case "Saisonal": return "bg-orange-500";
      case "Premium": return "bg-purple-500";
      case "Klassiker": return "bg-blue-500";
      default: return "bg-pink-500";
    }
  };

  return (
    <section id="featured" className="lg:py-32 bg-gradient-to-br from-pink-50 via-white to-purple-50 relative min-h-[600px] lg:min-h-[700px]">
      <div className="container mx-auto px-4 h-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[500px] lg:min-h-[600px]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 lg:space-y-8 flex flex-col justify-center order-2 lg:order-1 z-10"
          >
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 bg-pink-100 text-pink-600 rounded-full text-sm font-medium mb-4"
              >
                Unsere Bestseller
              </motion.span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 lg:mb-6">
                Meistgeliebte
                <span className="block text-pink-500">Kreationen</span>
              </h2>
              
              <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 lg:mb-8">
                Entdecken Sie unsere beliebtesten Torten und Kuchen, die das Herz jeder 
                Feier erobern. Jede Kreation wird mit Liebe und jahrelanger Erfahrung 
                handgefertigt.
              </p>
            </div>

            <motion.button
              onClick={navigateToConfigurator}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-fit"
            >
              <span className="text-sm lg:text-base">Konfiguriere deine Torte</span>
              <svg className="ml-2 w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Right - Card Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end items-center order-1 lg:order-2 mb-8 lg:mb-0 relative z-10"
          >
            <div className="relative w-full max-w-[400px] h-[400px] lg:h-[500px] flex items-center justify-center">
              {/* Mobile CardSwap */}
              <div className="block lg:hidden absolute inset-0 flex items-center justify-center translate-y-3">
                <CardSwap
                  width={300}
                  height={400}
                  cardDistance={25}
                  verticalDistance={30}
                  delay={3500}
                  pauseOnHover={true}
                  easing="elastic"
                  skewAmount={3}
                >
                  {featuredCakes.map((cake) => (
                    <Card
                      key={cake.id}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300"
                      style={{ 
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden"
                      }}
                    >
                      <div className="relative">
                        <img
                          src={cake.image}
                          alt={cake.name}
                          className="w-full h-40 object-cover brightness-100 contrast-105"
                        />
                        <div className={`absolute top-3 left-3 px-2 py-1 ${getBadgeColor(cake.badge)} text-white text-xs font-semibold rounded-full`}>
                          {cake.badge}
                        </div>
                        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full shadow-md">
                          <span className="text-pink-600 font-bold text-xs">{cake.price}</span>
                        </div>
                      </div>
                      
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-800 mb-2">
                          {cake.name}
                        </h3>
                        <p className="text-gray-600 text-xs leading-relaxed mb-3">
                          {cake.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-3 h-3 text-yellow-400 fill-current"
                                viewBox="0 0 20 20"
                              >
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                              </svg>
                            ))}
                            <span className="text-xs text-gray-500 ml-1">(4.9)</span>
                          </div>
                          
                          <button className="text-pink-500 hover:text-pink-600 font-medium text-xs transition-colors">
                            Bestellen →
                          </button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </CardSwap>
              </div>

              {/* Desktop CardSwap */}
              <div className="hidden lg:block absolute inset-0 flex items-center justify-center translate-y-3 -translate-x-20">
                <CardSwap
                  width={380}
                  height={500}
                  cardDistance={35}
                  verticalDistance={45}
                  delay={3500}
                  pauseOnHover={true}
                  easing="elastic"
                  skewAmount={3}
                >
                  {featuredCakes.map((cake) => (
                    <Card
                      key={cake.id}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300"
                      style={{ 
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden"
                      }}
                    >
                      <div className="relative">
                        <img
                          src={cake.image}
                          alt={cake.name}
                          className="w-full h-56 object-cover brightness-100 contrast-105"
                        />
                        <div className={`absolute top-4 left-4 px-3 py-1 ${getBadgeColor(cake.badge)} text-white text-xs font-semibold rounded-full`}>
                          {cake.badge}
                        </div>
                        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
                          <span className="text-pink-600 font-bold text-sm">{cake.price}</span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {cake.name}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          {cake.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className="w-4 h-4 text-yellow-400 fill-current"
                                viewBox="0 0 20 20"
                              >
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                              </svg>
                            ))}
                            <span className="text-xs text-gray-500 ml-2">(4.9)</span>
                          </div>
                          
                          <button className="text-pink-500 hover:text-pink-600 font-medium text-sm transition-colors">
                            Bestellen →
                          </button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </CardSwap>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCakesSwap;