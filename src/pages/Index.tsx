
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HowItWorksSection from '../components/HowItWorksSection';
import BenefitsSection from '../components/BenefitsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <HeroSection />
        
        <div className="bg-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-center space-x-4">
              <Button asChild variant="outline">
                <Link to="/features">Explore Features</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/how-it-works">Learn How It Works</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/benefits">See Benefits</Link>
              </Button>
              <Button asChild>
                <Link to="/dashboard">Try Dashboard Demo</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <FeaturesSection />
        <HowItWorksSection />
        <BenefitsSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
