
import ContactHero from '../components/contact/ContactHero';
import ContactMethods from '../components/contact/ContactMethods';
import ContactInfo from '../components/contact/ContactInfo';
import OfficeLocation from '../components/contact/OfficeLocation';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <ContactMethods />
      <ContactInfo />
      <OfficeLocation />
    </div>
  );
};

export default Contact;