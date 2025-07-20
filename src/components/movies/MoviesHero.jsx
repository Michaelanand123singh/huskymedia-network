import { Play } from 'lucide-react';

const MoviesHero = () => {
  return (
    <section className="relative h-screen bg-gradient-dark flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-heading font-black mb-6">
          Visual <span className="gradient-text">Storytelling</span>
        </h1>
        <p className="text-xl md:text-2xl text-text-gray mb-8 max-w-2xl mx-auto">
          Premium video content that elevates your artistic journey
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary flex items-center gap-2">
            <Play size={20} />
            Watch Reel
          </button>
          <button className="btn-secondary">
            Start Your Project
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-secondary-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary-gold rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default MoviesHero;