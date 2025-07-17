import React from 'react';
import Countdown from './Countdown';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23e0e7ff%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30"></div>

      <div className="text-center z-10 px-4">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-light text-gray-800 mb-4">
            Ian <span style={{color: '#191970'}}>&</span> Darlene
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light">
            are getting married
          </p>
        </div>

        <div className="mb-8">
          <p className="text-lg text-gray-700 mb-2">Save the Date</p>
          <p className="text-3xl md:text-4xl font-light" style={{color: '#191970'}}>
            September 27, 2025
          </p>
        </div>

        <Countdown targetDate="2025-09-27T10:00:00" />

        <div className="mt-12">
          <a
            href="#rsvp"
            className="text-white px-8 py-3 rounded-full transition-colors inline-block text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            style={{backgroundColor: '#191970'}}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0f0f4a'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#191970'}
          >
            RSVP Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;