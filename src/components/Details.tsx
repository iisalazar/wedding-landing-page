import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

const Details = () => {
  return (
    <section id="details" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            Wedding Details
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us for a celebration of love, laughter, and happily ever after
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-rose-500 mr-3" />
              <h3 className="text-2xl font-semibold text-gray-800">Ceremony</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <Calendar className="w-5 h-5 text-gray-600 mr-3 mt-1" />
                <div>
                  <p className="text-gray-800 font-medium">Saturday, September 27, 2025</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-gray-600 mr-3 mt-1" />
                <div>
                  <p className="text-gray-800 font-medium">10:00 AM</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-600 mr-3 mt-1" />
                <div>
                  <p className="text-gray-800 font-medium">St. Agustin Parish Church</p>
                  <p className="text-gray-600">Bay, Laguna</p>
                  <a
                    href="https://maps.app.goo.gl/9Zy3HexyKQkW8t9AA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-rose-500 hover:text-rose-600 text-sm"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center mb-6">
              <Users className="w-8 h-8 text-blue-500 mr-3" />
              <h3 className="text-2xl font-semibold text-gray-800">Reception</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <Calendar className="w-5 h-5 text-gray-600 mr-3 mt-1" />
                <div>
                  <p className="text-gray-800 font-medium">Saturday, September 27, 2025</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-gray-600 mr-3 mt-1" />
                <div>
                  <p className="text-gray-800 font-medium">12:00 PM</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-600 mr-3 mt-1" />
                <div>
                  <p className="text-gray-800 font-medium">Señorito Nature Resort</p>
                  <p className="text-gray-600">Brgy. Masaya, Bay, Laguna</p>
                  <a
                    href="https://maps.app.goo.gl/Sx6i889uDJMSaBWr7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 text-sm"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
            <h4 className="text-xl font-semibold text-amber-800 mb-2">Dress Code</h4>
            <p className="text-amber-700">
              We kindly encourage our guests to wear formal attire and any color of your choice except white and dark blue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;