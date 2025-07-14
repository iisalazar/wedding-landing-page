import React from 'react';
import { Heart, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-6 h-6 text-rose-500 mr-2" />
            <span className="text-2xl font-light">Emma & James</span>
          </div>
          
          <p className="text-gray-400 mb-6">
            June 15, 2024 • Sunset Garden Venue
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm">
              Can't wait to celebrate with you! ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;