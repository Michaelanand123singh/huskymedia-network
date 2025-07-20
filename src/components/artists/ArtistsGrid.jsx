import { useState, useMemo } from 'react';
import ArtistCard from './ArtistCard';
import { artists } from '../../data/artists';

const ArtistsGrid = ({ searchTerm, filter }) => {
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredArtists = useMemo(() => {
    let filtered = artists;

    // Apply status filter
    if (filter !== 'All') {
      filtered = filtered.filter(artist => artist.status === filter);
    }

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(artist =>
        artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artist.genre.some(g => g.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    return filtered;
  }, [searchTerm, filter]);

  const visibleArtists = filteredArtists.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArtists.length;

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, filteredArtists.length));
  };

  if (filteredArtists.length === 0) {
    return (
      <div className="text-center py-20">
        <h3 className="text-2xl font-bold text-text-gray mb-4">No Artists Found</h3>
        <p className="text-text-gray">Try adjusting your search or filter criteria</p>
      </div>
    );
  }

  return (
    <section className="py-20 bg-primary-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Results Info */}
        <div className="mb-8 text-center">
          <p className="text-text-gray">
            Showing {visibleArtists.length} of {filteredArtists.length} artists
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleArtists.map(artist => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center">
            <button 
              onClick={loadMore}
              className="btn-primary"
            >
              Load More Artists
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ArtistsGrid;