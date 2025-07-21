import { useState } from 'react';

// Simplified data structure - just what's needed
const artists = [
  {
    id: 1,
    name: "Ajay Devgan",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
    label: "Cutiest"
  },
  {
    id: 2,
    name: "Akshay Kumar", 
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face",
    label: "Shringaar Okay"
  },
  {
    id: 3,
    name: "Deepika Padukone",
    image: "https://images.unsplash.com/photo-1494790108755-2616c27da422?w=400&h=700&fit=crop&crop=face",
    label: "Gorgeous"
  },
  {
    id: 4,
    name: "Ranveer Singh",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=450&fit=crop&crop=face",
    label: "No Airbrush"
  },
  {
    id: 5,
    name: "Shahid Kapoor",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=550&fit=crop&crop=face",
    label: "Studio Setup"
  },
  {
    id: 6,
    name: "John Abraham",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=650&fit=crop&crop=face",
    label: "Behind Scenes"
  },
  {
    id: 7,
    name: "Priyanka Chopra",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=480&fit=crop&crop=face",
    label: "Natural Look"
  },
  {
    id: 8,
    name: "Hrithik Roshan",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=600&fit=crop&crop=face",
    label: "SHRINYA 202"
  }
];

const FeaturedArtists = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="py-10 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Masonry Grid Layout - Exact Pinterest Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {artists.map((artist, index) => (
            <div
              key={artist.id}
              className={`relative group cursor-pointer rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 ${
                index % 7 === 0 ? 'row-span-2' :
                index % 7 === 1 ? 'row-span-3' :
                index % 7 === 2 ? 'row-span-2' :
                index % 7 === 3 ? 'row-span-1' :
                index % 7 === 4 ? 'row-span-2' :
                index % 7 === 5 ? 'row-span-3' :
                'row-span-2'
              }`}
              onMouseEnter={() => setHoveredCard(artist.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image */}
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              
              {/* Label - Always visible in bottom center */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  {artist.label}
                </div>
              </div>

              {/* Hover Effect - Simple overlay */}
              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                hoveredCard === artist.id ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="bg-black/60 backdrop-blur-sm text-white px-6 py-3 rounded-full text-lg font-semibold">
                  {artist.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtists;