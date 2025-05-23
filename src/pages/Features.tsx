
import React from 'react';
import Navbar from '../components/Navbar';
import FeaturesSection from '../components/FeaturesSection';
import Footer from '../components/Footer';

const Features = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <FeaturesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Features;
