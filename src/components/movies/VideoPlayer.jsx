import { useState } from 'react';
import { Play, Pause, Volume2, Maximize } from 'lucide-react';

const VideoPlayer = ({ src, poster, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div 
      className="relative bg-black rounded-lg overflow-hidden group cursor-pointer"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <video
        className="w-full h-full object-cover"
        poster={poster}
        onClick={togglePlay}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {showControls && (
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300">
          <button
            onClick={togglePlay}
            className="bg-secondary-gold text-black p-4 rounded-full hover:scale-110 transition-transform"
          >
            {isPlaying ? <Pause size={32} /> : <Play size={32} />}
          </button>
        </div>
      )}
      
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <h3 className="text-white font-semibold mb-2">{title}</h3>
        <div className="flex items-center gap-4">
          <button className="text-white hover:text-secondary-gold">
            <Volume2 size={20} />
          </button>
          <button className="text-white hover:text-secondary-gold">
            <Maximize size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;