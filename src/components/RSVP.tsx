import React, { useState } from 'react';
import { Send, Check } from 'lucide-react';

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '1',
    attending: '',
    dietary: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a server
    console.log('RSVP Data:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="rsvp" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 p-4 rounded-full">
                <Check className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Thank You!
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Your RSVP has been received. We can't wait to celebrate with you!
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="text-rose-500 hover:text-rose-600 font-medium"
            >
              Submit Another RSVP
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
            RSVP
          </h2>
          <p className="text-xl text-gray-600">
            Please let us know if you can join us for our special day
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Guests *
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Will you attend? *
                </label>
                <select
                  name="attending"
                  value={formData.attending}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                >
                  <option value="">Please select</option>
                  <option value="yes">Yes, I'll be there!</option>
                  <option value="no">Sorry, can't make it</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dietary Restrictions
              </label>
              <input
                type="text"
                name="dietary"
                value={formData.dietary}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                placeholder="Any dietary restrictions or allergies"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message for the Couple
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                placeholder="Share your well wishes or any special requests"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-rose-500 text-white py-3 px-6 rounded-lg hover:bg-rose-600 transition-colors font-medium text-lg flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Send className="w-5 h-5" />
              <span>Send RSVP</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RSVP;