

const CompanyStory = () => {
  const milestones = [
    { year: '2016', event: 'Founded with a vision to revolutionize music marketing' },
    { year: '2018', event: 'Launched first major artist development program' },
    { year: '2020', event: 'Expanded to digital distribution and streaming optimization' },
    { year: '2022', event: 'Reached 500+ artists in our network' },
    { year: '2024', event: 'Introduced AI-powered analytics platform' }
  ];

  return (
    <section className="py-20 bg-primary-charcoal">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Our <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            From humble beginnings to industry leaders, we've been at the forefront 
            of music industry digital transformation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-purple-blue"></div>
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex items-center mb-12">
                <div className="absolute left-0 w-8 h-8 bg-secondary-gold rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-primary-black rounded-full"></div>
                </div>
                <div className="ml-16">
                  <div className="text-secondary-blue font-bold text-lg">{milestone.year}</div>
                  <div className="text-text-white text-lg">{milestone.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;