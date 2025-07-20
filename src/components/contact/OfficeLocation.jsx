import { MapPin, Navigation, Clock, Car } from 'lucide-react';

const OfficeLocation = () => {
  const officeFeatures = [
    {
      icon: MapPin,
      title: 'Prime Location',
      description: 'Heart of Music Row, Nashville'
    },
    {
      icon: Car,
      title: 'Easy Access',
      description: 'Free parking available'
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'By appointment 24/7'
    },
    {
      icon: Navigation,
      title: 'Public Transport',
      description: 'Bus and metro accessible'
    }
  ];

  return (
    <section className="py-16 px-6 bg-primary-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold mb-4">
            Visit Our <span className="gradient-text">Studio</span>
          </h2>
          <p className="text-text-gray text-lg">
            Located in the heart of Nashville's music district
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Map Placeholder */}
          <div className="bg-primary-gray rounded-lg overflow-hidden h-96">
            <div className="w-full h-full bg-gradient-to-br from-primary-gray to-primary-black flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-secondary-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                <p className="text-text-gray">123 Music Row, Nashville, TN 37203</p>
                <button className="btn-primary mt-4">
                  Get Directions
                </button>
              </div>
            </div>
          </div>

          {/* Office Details */}
          <div className="space-y-6">
            <div className="bg-primary-black p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Studio Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {officeFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-secondary-gold text-primary-black p-2 rounded">
                        <Icon size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{feature.title}</h4>
                        <p className="text-text-gray text-sm">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-primary-black p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Schedule a Visit</h3>
              <p className="text-text-gray mb-4">
                Experience our state-of-the-art facilities and meet our team in person.
              </p>
              <div className="space-y-3">
                <button className="btn-primary w-full">
                  Book Studio Tour
                </button>
                <button className="btn-secondary w-full">
                  Virtual Tour
                </button>
              </div>
            </div>

            <div className="bg-primary-black p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Contact Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-gray">Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-gray">Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-gray">Sunday:</span>
                  <span>By appointment</span>
                </div>
                <div className="flex justify-between border-t border-primary-gray pt-2">
                  <span className="text-secondary-gold">Emergency Support:</span>
                  <span className="text-secondary-gold">24/7 Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocation;