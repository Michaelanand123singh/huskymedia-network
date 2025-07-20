import { useState, useEffect } from 'react';
import { animationDurations } from '../utils/constants';

export const useImageCarousel = (images, autoPlay = true) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!autoPlay || !images?.length) return;

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, animationDurations.imageTransition);

    return () => clearInterval(interval);
  }, [images?.length, autoPlay]);

  useEffect(() => {
    if (images?.length) {
      setIsLoading(false);
    }
  }, [images]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return {
    currentIndex,
    currentImage: images?.[currentIndex],
    isLoading,
    goToSlide,
    goToNext,
    goToPrevious,
    totalImages: images?.length || 0
  };
};