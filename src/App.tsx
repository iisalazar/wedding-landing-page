import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Details from './components/Details';
import RSVP from './components/RSVP';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Details />
      <RSVP />
      <Location />
      <Footer />
    </div>
  );
}

export default App;