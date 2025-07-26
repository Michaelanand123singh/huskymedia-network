import AboutHero from '../components/about/AboutHero';
import CompanyStory from '../components/about/CompanyStory';
import BenefitsSection from '../components/about/BenifitsSection';
import StatsSection from '../components/about/StatsSection';

const About = () => {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <CompanyStory />
      <BenefitsSection />
      <StatsSection />
    </div>
  );
};

export default About;