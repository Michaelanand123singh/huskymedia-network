import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Play, ExternalLink, TrendingUp, Users, Music } from 'lucide-react';
import { artists } from '../../data/artists';

const FeaturedArtists = () => {
  const [currentFeatured, setCurrentFeatured] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Get top 4 featured artists
  const featuredArtists = artists.filter(artist => artist.featured).slice(0, 4);
  const currentArtist = featuredArtists[currentFeatured];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatured((prev) => (prev + 1) % featuredArtists.length);
      setIsPlaying(false);
    }, 6000);

    return () => clearInterval(interval);
  }, [featuredArtists.length]);

  const handleArtistChange = (index) => {
    setCurrentFeatured(index);
    setIsPlaying(false);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  if (!currentArtist) return null;

  return (
    <section className="py-20 bg-gradient-to-b from-primary-charcoal to-primary-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Featured <span className="gradient-text">Artists</span>
          </h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            Discover the talented artists we're proud to represent and the incredible journeys we've shared together.
          </p>
        </div>

        {/* Main Featured Artist Display */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            
            {/* Artist Image & Play Button */}
            <div className="relative group">
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                <img
                  src={currentArtist.image}
                  alt={currentArtist.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={togglePlay}
                    className="w-20 h-20 bg-secondary-gold rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all"
                  >
                    <Play className={`w-8 h-8 text-primary-black ${isPlaying ? 'animate-pulse' : ''}`} />
                  </button>
                </div>

                {/* Artist Badge */}
                <div className="absolute top-4 left-4 bg-secondary-gold text-primary-black px-3 py-1 rounded-full text-sm font-semibold">
                  Featured Artist
                </div>

                {/* Genre Tags */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {currentArtist.genres?.slice(0, 2).map((genre, index) => (
                    <span key={index} className="bg-primary-black/60 backdrop-blur text-white px-2 py-1 rounded text-xs">
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Artist Info */}
            <div>
              <h3 className="text-4xl font-heading font-bold mb-2 text-text-white">
                {currentArtist.name}
              </h3>
              <p className="text-secondary-blue text-lg mb-4">{currentArtist.role}</p>
              <p className="text-text-gray text-lg mb-6 leading-relaxed">
                {currentArtist.bio}
              </p>

              {/* Success Metrics */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <TrendingUp className="w-5 h-5 text-secondary-gold mr-2" />
                    <span className="text-2xl font-bold text-secondary-gold">
                      {currentArtist.metrics?.streams || '1M+'}
                    </span>
                  </div>
                  <p className="text-text-gray text-sm">Monthly Streams</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-5 h-5 text-secondary-blue mr-2" />
                    <span className="text-2xl font-bold text-secondary-blue">
                      {currentArtist.metrics?.followers || '500K+'}
                    </span>
                  </div>
                  <p className="text-text-gray text-sm">Followers</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Music className="w-5 h-5 text-accent-purple mr-2" />
                    <span className="text-2xl font-bold text-accent-purple">
                      {currentArtist.metrics?.releases || '12+'}
                    </span>
                  </div>
                  <p className="text-text-gray text-sm">Releases</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Link
                  to={`/artists/${currentArtist.id}`}
                  className="btn-primary flex items-center justify-center space-x-2"
                >
                  <span>View Profile</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
                <a
                  href={currentArtist.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center justify-center space-x-2"
                >
                  <Play className="w-4 h-4" />
                  <span>Listen on Spotify</span>
                </a>
              </div>
            </div>
          </div>

          {/* Artist Selector */}
          <div className="flex justify-center space-x-4">
            {featuredArtists.map((artist, index) => (
              <button
                key={artist.id}
                onClick={() => handleArtistChange(index)}
                className={`relative group ${
                  index === currentFeatured ? 'ring-2 ring-secondary-gold' : ''
                }`}
              >
                <img
                  src={artist.image}
                  alt={artist.name}
                  className={`w-16 h-16 rounded-full object-cover transition-all duration-300 ${
                    index === currentFeatured
                      ? 'scale-110 brightness-100'
                      : 'brightness-75 hover:brightness-100 hover:scale-105'
                  }`}
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className={`w-2 h-2 rounded-full transition-all ${
                    index === currentFeatured ? 'bg-secondary-gold scale-125' : 'bg-transparent'
                  }`}></div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-primary-charcoal px-8 py-4 rounded-full border border-primary-gray">
            <span className="text-text-gray">Ready to join our network?</span>
            <Link to="/contact" className="btn-primary-sm">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtists;