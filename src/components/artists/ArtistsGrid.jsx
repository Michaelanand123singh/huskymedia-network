// ArtistsGrid.jsx
import { useState, useMemo } from 'react';
import ArtistCard from './ArtistCard';
import { artists } from '../../data/artists';
import { Users, Search } from 'lucide-react';

// Randomized card variants for dynamic layouts
const cardVariants = [
  { span: 'col-span-1', height: 'h-64', size: 'small' },
  { span: 'col-span-1', height: 'h-72', size: 'medium' },
  { span: 'col-span-1', height: 'h-80', size: 'large' },
  { span: 'col-span-2', height: 'h-64', size: 'wide' },
  { span: 'col-span-2', height: 'h-48', size: 'wide-short' },
  { span: 'col-span-1', height: 'h-56', size: 'compact' }
];

const ArtistsGrid = ({ searchTerm = '', filter = 'all', selectedGenre = 'all' }) => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid', 'list', or 'masonry'
  
  const filteredArtists = useMemo(() => {
    return artists.filter(artist => {
      // Search filter - matches name or genre
      const matchesSearch = !searchTerm || 
        artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artist.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artist.genre.some(g => g.toLowerCase().includes(searchTerm.toLowerCase()));
      
      // Status filter
      const matchesFilter = filter === 'all' || artist.status.toLowerCase() === filter.toLowerCase();
      
      // Genre filter
      const matchesGenre = !selectedGenre || selectedGenre === 'all' || 
                          artist.genre.includes(selectedGenre);
      
      return matchesSearch && matchesFilter && matchesGenre;
    });
  }, [searchTerm, filter, selectedGenre]);

  // Sort and randomize artists with variants
  const sortedArtistsWithVariants = useMemo(() => {
    const sorted = [...filteredArtists].sort((a, b) => {
      // Featured first, then by follower count
      if (a.status === 'Featured' && b.status !== 'Featured') return -1;
      if (b.status === 'Featured' && a.status !== 'Featured') return 1;
      
      // Then by follower count (convert strings like "2.5M" to numbers for comparison)
      const aFollowers = parseFloat(a.stats.followers.replace('M', '').replace('K', '')) * 
                        (a.stats.followers.includes('M') ? 1000000 : 1000);
      const bFollowers = parseFloat(b.stats.followers.replace('M', '').replace('K', '')) * 
                        (b.stats.followers.includes('M') ? 1000000 : 1000);
      
      return bFollowers - aFollowers;
    });

    // Assign random variants to each artist
    return sorted.map((artist, index) => ({
      ...artist,
      variant: cardVariants[Math.floor(Math.random() * cardVariants.length)],
      // Add some randomization to positioning
      delay: Math.random() * 0.5,
      rotation: (Math.random() - 0.5) * 2 // Subtle rotation between -1 and 1 degree
    }));
  }, [filteredArtists]);

  if (sortedArtistsWithVariants.length === 0) {
    return (
      <div className="text-center py-16">
        <Users className="mx-auto h-16 w-16 text-gray-600 mb-4" />
        <h3 className="text-2xl font-semibold text-gray-400 mb-3">No artists found</h3>
        <p className="text-gray-500 mb-6">
          {searchTerm ? `No results for "${searchTerm}"` : 'Try adjusting your search or filters'}
        </p>
        <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-400">
          <span>Available filters:</span>
          <span className="px-2 py-1 bg-gray-800 rounded">Featured</span>
          <span className="px-2 py-1 bg-gray-800 rounded">Rising</span>
          <span className="px-2 py-1 bg-gray-800 rounded">Established</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Results header */}
      <div className="flex items-center justify-between">
        <div className="text-gray-400">
          <span className="text-white font-semibold">{sortedArtistsWithVariants.length}</span> 
          {sortedArtistsWithVariants.length === 1 ? ' artist' : ' artists'} found
          {searchTerm && <span className="ml-2">for "<span className="text-white">{searchTerm}</span>"</span>}
        </div>
        
        {/* View mode toggle */}
        <div className="flex bg-gray-900 border border-gray-800 rounded-lg p-1">
          <button
            onClick={() => setViewMode('grid')}
            className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
              viewMode === 'grid' 
                ? 'bg-red-500 text-white' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Grid
          </button>
          <button
            onClick={() => setViewMode('masonry')}
            className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
              viewMode === 'masonry' 
                ? 'bg-red-500 text-white' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Masonry
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
              viewMode === 'list' 
                ? 'bg-red-500 text-white' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            List
          </button>
        </div>
      </div>

      {/* Artists display */}
      {viewMode === 'grid' ? (
        // Regular grid view
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedArtistsWithVariants.map(artist => (
            <ArtistCard 
              key={artist.id} 
              artist={artist} 
              size="medium" 
              showDetails={true}
            />
          ))}
        </div>
      ) : viewMode === 'masonry' ? (
        // Randomized masonry layout
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 auto-rows-min">
          {sortedArtistsWithVariants.map((artist, index) => (
            <div 
              key={artist.id}
              className={`${artist.variant.span} ${artist.variant.height} group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 hover:z-10`}
              style={{ 
                animationDelay: `${artist.delay}s`,
                transform: `rotate(${artist.rotation}deg)`,
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* Custom card layout for masonry */}
              <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-red-500/50 rounded-2xl overflow-hidden group-hover:shadow-2xl group-hover:shadow-red-500/20">
                <div className="absolute inset-0">
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                </div>
                
                {/* Status badge */}
                <div className="absolute top-3 right-3 z-10">
                  <span className={`px-2 py-1 text-xs font-bold rounded-full backdrop-blur-sm ${
                    artist.status === 'Featured' ? 'bg-red-500/80 text-white' :
                    artist.status === 'Rising' ? 'bg-yellow-500/80 text-black' :
                    'bg-blue-500/80 text-white'
                  }`}>
                    {artist.status}
                  </span>
                </div>

                {/* Content overlay */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-red-400 transition-colors line-clamp-2">
                    {artist.name}
                  </h3>
                  
                  {/* Show more details on larger cards */}
                  {(artist.variant.size === 'wide' || artist.variant.size === 'large') && (
                    <>
                      <p className="text-gray-300 text-sm mb-3 line-clamp-2 opacity-90">
                        {artist.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {artist.genre.slice(0, 2).map((genre, idx) => (
                          <span key={idx} className="px-2 py-1 text-xs bg-red-500/20 text-red-300 rounded backdrop-blur-sm">
                            {genre}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                  
                  <div className="flex justify-between items-end text-sm">
                    <div className="text-gray-300">
                      <div className="font-semibold">{artist.stats.followers}</div>
                      <div className="text-xs text-gray-400">followers</div>
                    </div>
                    <div className="text-green-400 text-xs font-medium">
                      {artist.stats.growth}
                    </div>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        // List view (unchanged)
        <div className="space-y-4">
          {sortedArtistsWithVariants.map(artist => (
            <div 
              key={artist.id} 
              className="group flex bg-gray-900 border border-gray-800 hover:border-red-500/50 rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
                <img 
                  src={artist.image} 
                  alt={artist.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute top-2 right-2">
                  <span className={`px-1.5 py-0.5 text-xs font-semibold rounded ${
                    artist.status === 'Featured' ? 'bg-red-500 text-white' :
                    artist.status === 'Rising' ? 'bg-yellow-500 text-black' :
                    'bg-blue-500 text-white'
                  }`}>
                    {artist.status}
                  </span>
                </div>
              </div>
              
              <div className="flex-1 p-4 sm:p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                    {artist.name}
                  </h3>
                  <div className="text-right text-sm text-gray-400">
                    <div>{artist.stats.followers} followers</div>
                    <div className="text-green-400">{artist.stats.growth}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                  {artist.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  {artist.genre.map((genre, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs bg-red-500/20 text-red-300 rounded">
                      {genre}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400">
                    {artist.stats.streams} streams
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {artist.achievements.slice(0, 2).map((achievement, idx) => (
                      <span key={idx} className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Load more button for large datasets */}
      {sortedArtistsWithVariants.length > 12 && (
        <div className="text-center pt-8">
          <button className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors">
            Load More Artists
          </button>
        </div>
      )}
    </div>
  );
};

export default ArtistsGrid;