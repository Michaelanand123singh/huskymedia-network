import HeroSection from '../components/home/HeroSection';
import ServicesPreview from '../components/home/ServicesPreview';
import FeaturedArtist from '../components/artists/FeaturedArtist';
import SuccessStories from '../components/home/SuccessStories';
import PartnersSection from '../components/home/PartnerSection';
import FeaturedArtists from '../components/home/FeaturedArtists';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesPreview />
      <PartnersSection />
    </div>
  );
};

export default Home;