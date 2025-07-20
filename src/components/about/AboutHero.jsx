

const AboutHero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-dark">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-heading font-black mb-6">
              Crafting Digital 
              <span className="gradient-text block">Success Stories</span>
              in Music
            </h1>
            <p className="text-xl text-text-gray mb-8 leading-relaxed">
              We are not just another digital agency. We're music industry veterans who understand 
              the unique challenges artists face in today's digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">Our Story</button>
              <button className="btn-secondary">Meet the Team</button>
            </div>
          </div>
          <div className="relative animate-slide-up">
            <img 
              src="/images/about/team-hero.jpg" 
              alt="Husky Media Network Team"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-secondary-gold text-primary-black p-4 rounded-xl">
              <div className="text-2xl font-bold">8+</div>
              <div className="text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;