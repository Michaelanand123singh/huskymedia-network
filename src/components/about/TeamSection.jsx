

const TeamSection = () => {
  const team = [
    {
      name: 'Alex Rodriguez',
      role: 'Founder & CEO',
      image: '/images/team/founder.jpg',
      bio: 'Former A&R executive with 15 years of music industry experience.',
      linkedin: '#'
    },
    {
      name: 'Sarah Chen',
      role: 'Head of Digital Strategy',
      image: '/images/team/sarah.jpg',
      bio: 'Digital marketing expert specializing in music streaming platforms.',
      linkedin: '#'
    },
    {
      name: 'Marcus Johnson',
      role: 'Creative Director',
      image: '/images/team/marcus.jpg',
      bio: 'Award-winning music video director and visual storyteller.',
      linkedin: '#'
    },
    {
      name: 'Emily Davis',
      role: 'Artist Relations Manager',
      image: '/images/team/emily.jpg',
      bio: 'Passionate about connecting artists with their perfect audiences.',
      linkedin: '#'
    }
  ];

  return (
    <section className="py-20 bg-primary-black">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold mb-6">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-text-gray">
            Music industry veterans dedicated to your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group text-center">
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <a href={member.linkedin} className="inline-block p-2 bg-secondary-blue rounded-full hover:bg-secondary-gold transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-text-white mb-2">{member.name}</h3>
              <p className="text-secondary-gold font-semibold mb-3">{member.role}</p>
              <p className="text-text-gray text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;