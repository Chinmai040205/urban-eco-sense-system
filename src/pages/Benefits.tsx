
import React from 'react';
import Navbar from '../components/Navbar';
import BenefitsSection from '../components/BenefitsSection';
import Footer from '../components/Footer';

const Benefits = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <BenefitsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Benefits;
