import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Play } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-primary-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            Real results from real artists. See how we've helped transform careers and amplify voices.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-primary-charcoal rounded-2xl p-8 md:p-12 border border-primary-gray">
            <div className="flex items-center justify-between mb-8">
              
              {/* Navigation */}
              <div className="flex space-x-2">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-primary-gray hover:bg-secondary-gold hover:text-primary-black transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-primary-gray hover:bg-secondary-gold hover:text-primary-black transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary-gold text-secondary-gold" />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              
              {/* Artist Photo & Info */}
              <div className="text-center">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-secondary-gold"
                />
                <h3 className="text-xl font-heading font-bold text-text-white">
                  {currentTestimonial.name}
                </h3>
                <p className="text-secondary-blue text-sm">{currentTestimonial.role}</p>
                <p className="text-text-gray text-xs mt-1">{currentTestimonial.project}</p>
              </div>

              {/* Testimonial Content */}
              <div className="md:col-span-2">
                <blockquote className="text-lg text-text-gray italic mb-6">
                  "{currentTestimonial.content}"
                </blockquote>
                
                {currentTestimonial.videoUrl && (
                  <button className="flex items-center space-x-2 text-secondary-blue hover:text-secondary-gold transition-colors">
                    <Play className="w-4 h-4" />
                    <span className="text-sm">Watch Video Testimonial</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-secondary-gold' : 'bg-primary-gray'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;