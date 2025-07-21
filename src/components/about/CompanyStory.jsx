import React, { useState, useEffect, useRef } from 'react';

const CompanyStory = () => {
  const [visible, setVisible] = useState(new Set());
  const [headerVisible, setHeaderVisible] = useState(false);
  const pathRef = useRef();

  const milestones = [
    { year: '2016', event: 'Founded with a vision to revolutionize music marketing' },
    { year: '2018', event: 'Launched first major artist development program' },
    { year: '2020', event: 'Expanded to digital distribution and streaming optimization' },
    { year: '2022', event: 'Reached 500+ artists in our network' },
    { year: '2024', event: 'Introduced AI-powered analytics platform' }
  ];

  useEffect(() => {
    setTimeout(() => setHeaderVisible(true), 200);
    
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && 
        setVisible(prev => new Set([...prev, e.target.dataset.index]))),
      { threshold: 0.3 }
    );

    document.querySelectorAll('[data-item]').forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      const progress = visible.size / milestones.length;
      pathRef.current.style.strokeDasharray = length;
      pathRef.current.style.strokeDashoffset = length * (1 - progress);
    }
  }, [visible]);

  return (
    <section className="py-16 bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-red-500/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-5xl lg:text-6xl font-light text-white tracking-tight mb-6">
            Our <span className="text-red-500 font-medium">Journey</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            From humble beginnings to industry leaders, transforming music marketing for nearly a decade.
          </p>
        </div>

        {/* S-Curve Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* SVG Path */}
          <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 600 800" fill="none">
            <defs>
              <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="100%" stopColor="#b91c1c" />
              </linearGradient>
            </defs>
            <path
              ref={pathRef}
              d="M120 80 Q480 160 120 280 Q480 400 120 520 Q480 640 120 720"
              stroke="url(#grad)"
              strokeWidth="2"
              fill="none"
              className="transition-all duration-1000"
            />
            {/* Dots */}
            {[80, 220, 360, 500, 640].map((y, i) => (
              <circle
                key={i}
                cx={120}
                cy={y}
                r="6"
                fill="#ef4444"
                className={`transition-all duration-500 ${visible.has(i.toString()) ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              />
            ))}
          </svg>

          {/* Timeline Items */}
          <div className="relative z-10 space-y-20 py-16">
            {milestones.map((milestone, i) => {
              const isLeft = i % 2 === 0;
              const isVisible = visible.has(i.toString());
              
              return (
                <div key={i} data-item data-index={i} className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-sm transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : `opacity-0 translate-y-8 ${isLeft ? '-translate-x-8' : 'translate-x-8'}`
                  }`} style={{ transitionDelay: `${i * 150}ms` }}>
                    <div className="group relative">
                      <div className="absolute inset-0 bg-red-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                      <div className="relative bg-gray-900/80 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10">
                        {/* Year Badge */}
                        <div className="absolute -top-3 left-6 px-4 py-1 bg-red-500 rounded-full">
                          <span className="text-white font-bold text-sm">{milestone.year}</span>
                        </div>
                        {/* Content */}
                        <div className="pt-4">
                          <p className="text-white text-base leading-relaxed">{milestone.event}</p>
                        </div>
                        {/* Accent */}
                        <div className={`mt-4 flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
                          <div className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                            <div className="w-6 h-px bg-red-500/50" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;