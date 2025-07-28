import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Counter from "./ui/Counter";

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("statistics");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const stats = [
    {
      value: 2500,
      label: "Zufriedene Kunden",
      suffix: "+",
      description: "Glückliche Familien und Unternehmen"
    },
    {
      value: 15,
      label: "Jahre Erfahrung",
      suffix: "+",
      description: "Tradition und Handwerkskunst"
    },
    {
      value: 500,
      label: "Torten kreiert",
      suffix: "+",
      description: "Einzigartige Kreationen pro Jahr"
    },
    {
      value: 98,
      label: "Kundenzufriedenheit",
      suffix: "%",
      description: "Basierend auf Kundenbewertungen"
    }
  ];

  return (
    <section id="statistics" className="bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Unsere Erfolgsgeschichte
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Zahlen, die für sich sprechen - Qualität und Vertrauen seit über einem Jahrzehnt
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100"
            >
              <div className="flex items-center justify-center mb-4">
                <Counter
                  value={isVisible ? stat.value : 0}
                  fontSize={48}
                  textColor="hsl(330, 81%, 60%)"
                  places={stat.value >= 1000 ? [1000, 100, 10, 1] : [100, 10, 1]}
                  gradientFrom="rgba(255, 255, 255, 0.9)"
                  gradientTo="transparent"
                />
                <span className="text-4xl font-bold text-pink-500 ml-1">
                  {stat.suffix}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {stat.label}
              </h3>
              
              <p className="text-gray-600 text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md border border-pink-100">
            <span className="text-2xl"></span>
            <span className="text-gray-700 font-medium">
              Ausgezeichnet mit dem "Beste Konditorei 2023" Award
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;