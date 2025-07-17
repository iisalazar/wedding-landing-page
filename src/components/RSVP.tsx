import React from 'react';
import { ExternalLink, Heart } from 'lucide-react';

const RSVP = () => {
  return (
    <section id="rsvp" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            RSVP
          </h2>
          <p className="text-xl text-gray-600">
            Please let us know if you can join us for our special day
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
          <div className="mb-8">
            <Heart className="w-16 h-16 mx-auto mb-4" style={{color: '#191970'}} />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              We Can't Wait to Celebrate With You!
            </h3>
            <p className="text-gray-600 mb-6">
              Please click the button below to fill out our RSVP form and let us know if you'll be joining us on our special day.
            </p>
          </div>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white px-8 py-4 rounded-lg transition-colors font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            style={{backgroundColor: '#191970'}}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0f0f4a'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#191970'}
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            <span>RSVP via Google Form</span>
          </a>

          <p className="text-sm text-gray-500 mt-6">
            Please respond by August 27, 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default RSVP;