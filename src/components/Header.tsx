import React from 'react';
import { Heart } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Heart className="w-6 h-6 text-rose-500" />
            <span className="text-xl font-semibold text-gray-800">Emma & James</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-rose-500 transition-colors">Home</a>
            <a href="#details" className="text-gray-600 hover:text-rose-500 transition-colors">Details</a>
            <a href="#rsvp" className="text-gray-600 hover:text-rose-500 transition-colors">RSVP</a>
            <a href="#location" className="text-gray-600 hover:text-rose-500 transition-colors">Location</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;