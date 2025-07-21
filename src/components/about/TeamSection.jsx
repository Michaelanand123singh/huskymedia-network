import React from 'react';

const TeamSection = () => {
  const team = [
    {
      name: 'Prince Raj',
      role: 'Founder & CEO',
      image: '/images/team/founder.jpg',
      bio: 'Former A&R executive with 15 years of music industry experience.',
      linkedin: '#'
    },
    {
      name: 'Prince kumar',
      role: 'Head of Digital Strategy',
      image: '/images/team/sarah.jpg',
      bio: 'Digital marketing expert specializing in music streaming platforms.',
      linkedin: '#'
    },
    {
      name: 'Prince kumar',
      role: 'Creative Director',
      image: '/images/team/marcus.jpg',
      bio: 'Award-winning music video director and visual storyteller.',
      linkedin: '#'
    },
    {
      name: 'Prince raj',
      role: 'Artist Relations Manager',
      image: '/images/team/emily.jpg',
      bio: 'Passionate about connecting artists with their perfect audiences.',
      linkedin: '#'
    }
  ];

  return (
    <section className="py-32 bg-black">
      <div className="max-w-6xl mx-auto px-16">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl font-bold mb-6 text-white tracking-wide">
            Meet Our <span className="text-red-500">Team</span>
          </h2>
          <div className="w-16 h-0.5 bg-red-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-400 font-light max-w-xl mx-auto">
            Music industry veterans dedicated to your success
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
          {team.map((member, index) => (
            <div key={index} className="group text-center">
              {/* Image Container */}
              <div className="relative mb-8 overflow-hidden">
                <div className="w-48 h-48 mx-auto bg-gray-900 border border-gray-800 group-hover:border-red-500 transition-all duration-300">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Placeholder for missing images */}
                  <div className="hidden w-full h-full bg-gray-900 items-center justify-center">
                    <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* LinkedIn Overlay */}
                <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href={member.linkedin} 
                    className="w-12 h-12 bg-red-500 hover:bg-red-600 transition-colors duration-200 flex items-center justify-center"
                    aria-label={`LinkedIn profile of ${member.name}`}
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Team Member Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {member.name}
                </h3>
                
                <p className="text-red-500 font-medium text-sm tracking-widest uppercase">
                  {member.role}
                </p>
                
                <div className="w-8 h-px bg-gray-700 mx-auto"></div>
                
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;