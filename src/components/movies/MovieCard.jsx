import { ExternalLink, Play } from 'lucide-react';

const MovieCard = ({ movie, onClick }) => {
  return (
    <div 
      className="bg-gray-900 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
      onClick={onClick}
    >
      <div className="relative">
        <img 
          src={movie.thumbnail} 
          alt={movie.title}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x300/333/fff?text=Video+Thumbnail';
          }}
        />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-red-600 text-white p-3 rounded-full">
            <Play size={24} fill="currentColor" />
          </div>
        </div>
        
        {/* Duration Badge */}
        <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
          {movie.duration}
        </div>
        
        {/* YouTube Badge */}
        {movie.isYoutube && (
          <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-sm flex items-center gap-1">
            <ExternalLink size={12} />
            YouTube
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-white font-semibold mb-2 line-clamp-2 group-hover:text-red-400 transition-colors">
          {movie.title}
        </h3>
        <p className="text-gray-400 text-sm mb-2">{movie.artist}</p>
        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-xs">{movie.date}</p>
          <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
            {movie.category}
          </span>
        </div>
        
        {/* Tags */}
        {movie.tags && movie.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {movie.tags.slice(0, 2).map((tag, index) => (
              <span key={index} className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;