
import ArtistsHero from '../components/artists/ArtistsHero';
import FeaturedArtist from '../components/artists/FeaturedArtist';
import ArtistsGrid from '../components/artists/ArtistsGrid';

const Artists = () => {
  return (
    <div className="min-h-screen">
      <ArtistsHero />
      <FeaturedArtist />
      <ArtistsGrid />
    </div>
  );
};

export default Artists;