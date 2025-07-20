
import ServicesHero from '../components/services/ServicesHero';
import ServicesList from '../components/services/ServicesList';
import MultichannelNetwork from '../components/services/MultiChannelNetwork';

const Services = () => {
  return (
    <div className="min-h-screen">
      <ServicesHero />
      <ServicesList />
      <MultichannelNetwork />   
    </div>
  );
};

export default Services;