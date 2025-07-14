import React from 'react';
import { MapPin, Phone, Globe } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            Location
          </h2>
          <p className="text-xl text-gray-600">
            Join us at our beautiful venue
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Sunset Garden Venue
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-gray-600 mr-3 mt-1" />
                  <div>
                    <p className="text-gray-800 font-medium">Address</p>
                    <p className="text-gray-600">123 Garden Lane<br />Somewhere, ST 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-gray-600 mr-3 mt-1" />
                  <div>
                    <p className="text-gray-800 font-medium">Phone</p>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Globe className="w-5 h-5 text-gray-600 mr-3 mt-1" />
                  <div>
                    <p className="text-gray-800 font-medium">Website</p>
                    <a href="#" className="text-rose-500 hover:text-rose-600">
                      www.sunsetgardenvenue.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Parking & Directions
                </h4>
                <ul className="text-gray-600 space-y-2">
                  <li>• Free parking available on-site</li>
                  <li>• Valet parking provided</li>
                  <li>• GPS coordinates: 40.7128, -74.0060</li>
                  <li>• Shuttle service from nearby hotels</li>
                </ul>
              </div>
              
              <div className="mt-6">
                <a 
                  href="https://maps.google.com/?q=123+Garden+Lane,+Somewhere,+ST+12345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
          
          <div className="h-96 lg:h-auto">
            <div className="w-full h-full bg-gray-200 rounded-2xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9663153832125!2d-74.00597!3d40.71278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a31640e1f85%3A0xc889234b4fdd4e98!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1625151234567!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wedding Venue Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;