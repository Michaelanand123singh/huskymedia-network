import { MapPin, Navigation, Clock, Car } from 'lucide-react';

const OfficeLocation = () => {
  const officeFeatures = [
    {
      icon: MapPin,
      title: 'Prime Location',
      description: 'Heart of Hyderabad, India'
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
    <section className="py-12 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
            Visit Our <span className="text-red-500">Studio</span>
          </h2>
          <p className="text-gray-400 text-base">
            Located in the heart of Hyderabad's business district
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Embedded Google Map */}
          <div className="bg-black rounded-lg overflow-hidden h-80 border border-gray-800">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253799.31501047517!2d78.24289063344436!3d17.412280734631775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e1!3m2!1sen!2sin!4v1753112255998!5m2!1sen!2sin"
              width="100%" 
              height="100%" 
              style={{border: 0, filter: 'invert(0.9) contrast(1.2) hue-rotate(180deg)'}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Hyderabad Office Location"
            />
          </div>

          {/* Office Details */}
          <div className="space-y-4">
            <div className="bg-black p-5 rounded-lg border border-gray-800">
              <h3 className="text-lg font-medium mb-3 text-white">Studio Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {officeFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex items-start gap-2">
                      <div className="bg-red-600 text-white p-1.5 rounded">
                        <Icon size={14} />
                      </div>
                      <div>
                        <h4 className="font-medium text-xs text-white">{feature.title}</h4>
                        <p className="text-gray-400 text-xs">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            

            <div className="bg-black p-5 rounded-lg border border-gray-800">
              <h3 className="text-lg font-medium mb-3 text-white">Contact Hours</h3>
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Monday - Friday:</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Saturday:</span>
                  <span className="text-white">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sunday:</span>
                  <span className="text-white">By appointment</span>
                </div>
                <div className="flex justify-between border-t border-gray-700 pt-1.5">
                  <span className="text-red-500">Emergency Support:</span>
                  <span className="text-red-500">24/7 Available</span>
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