import { TrendingUp, Users, Music } from 'lucide-react';

const ArtistCard = ({ artist }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Featured': return 'text-secondary-gold';
      case 'Rising': return 'text-secondary-blue';
      case 'Established': return 'text-green-400';
      default: return 'text-text-gray';
    }
  };

  const getStatusBg = (status) => {
    switch (status) {
      case 'Featured': return 'bg-secondary-gold/10 border-secondary-gold';
      case 'Rising': return 'bg-secondary-blue/10 border-secondary-blue';
      case 'Established': return 'bg-green-400/10 border-green-400';
      default: return 'bg-primary-gray/10 border-primary-gray';
    }
  };

  return (
    <div className="artist-card group cursor-pointer">
      {/* Artist Image */}
      <div className="relative overflow-hidden rounded-t-lg">
        <img 
          src={artist.image} 
          alt={artist.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        
        {/* Status Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusBg(artist.status)}`}>
          <span className={getStatusColor(artist.status)}>{artist.status}</span>
        </div>
        
        {/* Growth Indicator */}
        <div className="absolute bottom-4 right-4 flex items-center gap-1 bg-black/60 rounded-full px-2 py-1">
          <TrendingUp className="w-3 h-3 text-secondary-gold" />
          <span className="text-xs text-secondary-gold font-semibold">{artist.stats.growth}</span>
        </div>
      </div>

      {/* Artist Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-secondary-gold transition-colors">
          {artist.name}
        </h3>
        
        {/* Genres */}
        <div className="flex flex-wrap gap-2 mb-3">
          {artist.genre.map((g, index) => (
            <span key={index} className="text-xs bg-primary-gray px-2 py-1 rounded text-text-gray">
              {g}
            </span>
          ))}
        </div>

        <p className="text-sm text-text-gray mb-4 line-clamp-2">
          {artist.description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-primary-gray">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Users className="w-4 h-4 text-secondary-blue" />
            </div>
            <p className="text-sm font-semibold">{artist.stats.followers}</p>
            <p className="text-xs text-text-gray">Followers</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Music className="w-4 h-4 text-secondary-gold" />
            </div>
            <p className="text-sm font-semibold">{artist.stats.streams}</p>
            <p className="text-xs text-text-gray">Streams</p>
          </div>
          <div className="text-center">
            <p className="text-sm font-semibold text-secondary-gold">{artist.stats.growth}</p>
            <p className="text-xs text-text-gray">Growth</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;