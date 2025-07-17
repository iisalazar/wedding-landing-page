import React from 'react';
import { Heart, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Heart className="w-6 h-6 mr-2" style={{color: '#191970'}} />
            <span className="text-2xl font-light">Ian & Darlene</span>
          </div>

          <p className="text-gray-400 mb-6">
            September 27, 2025 • Señorito Nature Resort
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-400 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#191970'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#191970'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#191970'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
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