import React from 'react';
import { Heart } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="w-6 h-6" style={{color: '#191970'}} />
            <span className="text-xl font-semibold text-gray-800">Ian & Darlene</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 transition-colors" style={{'--hover-color': '#191970'}} onMouseEnter={(e) => e.currentTarget.style.color = '#191970'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Home</a>
            <a href="#details" className="text-gray-600 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#191970'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Details</a>
            <a href="#rsvp" className="text-gray-600 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#191970'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>RSVP</a>
            <a href="#location" className="text-gray-600 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#191970'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>Location</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;