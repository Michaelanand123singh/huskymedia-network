import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useImageCarousel } from '../../hooks/useImageCarousel';

const ImageCarousel = ({ 
  images = [], 
  autoPlay = true,
  showControls = false,
  showDots = false,
  className = '',
  imageClassName = ''
}) => {
  const {
    currentIndex,
    currentImage,
    isLoading,
    goToNext,
    goToPrevious,
    goToSlide,
    totalImages
  } = useImageCarousel(images, autoPlay);

  if (isLoading || !images.length) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <div className="w-full h-full bg-primary-gray animate-pulse" />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={currentImage.src}
          alt={currentImage.alt}
          className={`w-full h-full object-cover ${imageClassName}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      {/* Controls */}
      {showControls && totalImages > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-300"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && totalImages > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-secondary-gold' 
                  : 'bg-text-gray hover:bg-secondary-blue'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;