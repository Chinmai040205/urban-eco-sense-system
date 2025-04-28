
import React from 'react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 pt-16">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-60 h-60 bg-tech-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-eco-100 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-eco-700 via-eco-600 to-tech-600 bg-clip-text text-transparent">
          Smart Waste Management for Smarter Cities
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Revolutionizing waste collection with IoT-enabled smart bins, real-time monitoring, 
          and data-driven collection routes for cleaner, more efficient cities.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-gradient-to-r from-eco-600 to-tech-600 hover:from-eco-700 hover:to-tech-700 px-8 py-6 text-lg">
            Get Started
          </Button>
          <Button variant="outline" className="border-tech-500 text-tech-700 hover:bg-tech-50 px-8 py-6 text-lg">
            Learn More
          </Button>
        </div>
        
        {/* Stats showcase */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow animate-fade-in">
            <h3 className="text-5xl font-bold text-eco-600 mb-2">40%</h3>
            <p className="text-gray-600">Reduction in collection costs</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow animate-fade-in" style={{animationDelay: "200ms"}}>
            <h3 className="text-5xl font-bold text-tech-600 mb-2">85%</h3>
            <p className="text-gray-600">Fill level accuracy</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow animate-fade-in" style={{animationDelay: "400ms"}}>
            <h3 className="text-5xl font-bold text-eco-600 mb-2">60%</h3>
            <p className="text-gray-600">Less vehicle emissions</p>
          </div>
        </div>
      </div>
      
      {/* Down arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
