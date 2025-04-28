
import React from 'react';
import Navbar from '../components/Navbar';
import HowItWorksSection from '../components/HowItWorksSection';
import Footer from '../components/Footer';

const HowItWorks = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <HowItWorksSection />
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorks;
