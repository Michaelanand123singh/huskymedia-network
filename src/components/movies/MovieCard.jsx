import { Play, Calendar, User } from 'lucide-react';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-primary-charcoal rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 group">
      <div className="relative">
        <img 
          src={movie.thumbnail} 
          alt={movie.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="bg-secondary-gold text-black p-3 rounded-full hover:scale-110 transition-transform">
            <Play size={24} />
          </button>
        </div>
        <div className="absolute top-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
          {movie.duration}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{movie.title}</h3>
        <p className="text-text-gray text-sm mb-3 line-clamp-2">{movie.description}</p>
        
        <div className="flex items-center justify-between text-sm text-text-gray">
          <div className="flex items-center gap-1">
            <User size={16} />
            <span>{movie.artist}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{movie.date}</span>
          </div>
        </div>
        
        <div className="mt-3 flex gap-2">
          {movie.tags?.map((tag, index) => (
            <span 
              key={index}
              className="bg-primary-gray text-secondary-blue px-2 py-1 rounded text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;