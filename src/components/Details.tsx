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
                  <p className="text-gray-800 font-medium">Saturday, June 15, 2024</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-gray-600 mr-3 mt-1" />
                <div>
                  <p className="text-gray-800 font-medium">4:00 PM</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-600 mr-3 mt-1" />
                <div>
                  <p className="text-gray-800 font-medium">Sunset Garden Venue</p>
                  <p className="text-gray-600">123 Garden Lane, Somewhere, ST 12345</p>
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
                  <p className="text-gray-800 font-medium">Saturday, June 15, 2024</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-gray-600 mr-3 mt-1" />
                <div>
                  <p className="text-gray-800 font-medium">6:00 PM - 11:00 PM</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-600 mr-3 mt-1" />
                <div>
                  <p className="text-gray-800 font-medium">Sunset Garden Venue</p>
                  <p className="text-gray-600">123 Garden Lane, Somewhere, ST 12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-200">
            <h4 className="text-xl font-semibold text-amber-800 mb-2">Dress Code</h4>
            <p className="text-amber-700">
              Cocktail attire requested. We'll be celebrating outdoors, so please dress comfortably.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;