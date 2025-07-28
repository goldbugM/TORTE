import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface FeatureCarouselItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface FeatureCarouselProps {
  items: FeatureCarouselItem[];
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
}

const FeatureCarousel: React.FC<FeatureCarouselProps> = ({
  items,
  baseWidth = 300,
  autoplay = true,
  autoplayDelay = 3000,
  pauseOnHover = true,
  loop = true,
  round = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    if (loop) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    } else {
      setCurrentIndex((prevIndex) => 
        prevIndex < items.length - 1 ? prevIndex + 1 : prevIndex
      );
    }
  };

  const prevSlide = () => {
    if (loop) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    } else {
      setCurrentIndex((prevIndex) => 
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (autoplay && !isHovered) {
      const interval = setInterval(nextSlide, autoplayDelay);
      return () => clearInterval(interval);
    }
  }, [autoplay, autoplayDelay, isHovered, currentIndex]);

  const containerClasses = round 
    ? "relative overflow-hidden rounded-full bg-gradient-to-br from-pink-50 via-white to-purple-50"
    : "relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-50 via-white to-purple-50";

  const aspectRatio = round ? "aspect-square" : "aspect-[4/3]";

  return (
    <div 
      className="flex flex-col items-center space-y-6"
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
    >
      {/* Main Carousel Container */}
      <div 
        className={`${containerClasses} ${aspectRatio} shadow-2xl border border-primary/10`}
        style={{ width: baseWidth }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
            transition={{ 
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
          >
            {/* Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-8"
            >
              {React.createElement(items[currentIndex].icon, { className: "h-10 w-10 text-primary" })}
            </motion.div>

            {/* Title */}
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-2xl font-bold text-foreground mb-6"
            >
              {items[currentIndex].title}
            </motion.h3>

            {/* Description */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-base text-muted-foreground leading-relaxed"
            >
              {items[currentIndex].description}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          disabled={!loop && currentIndex === 0}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed z-10"
        >
          <ChevronLeft className="h-5 w-5 text-primary" />
        </button>

        <button
          onClick={nextSlide}
          disabled={!loop && currentIndex === items.length - 1}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed z-10"
        >
          <ChevronRight className="h-5 w-5 text-primary" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'bg-primary scale-125'
                : 'bg-primary/30 hover:bg-primary/50'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      {autoplay && (
        <div className="w-full max-w-xs bg-primary/20 rounded-full h-1 overflow-hidden">
          <motion.div
            key={`progress-${currentIndex}`}
            className="h-full bg-primary rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: isHovered ? "0%" : "100%" }}
            transition={{ 
              duration: isHovered ? 0 : autoplayDelay / 1000,
              ease: "linear"
            }}
          />
        </div>
      )}
    </div>
  );
};

export default FeatureCarousel;