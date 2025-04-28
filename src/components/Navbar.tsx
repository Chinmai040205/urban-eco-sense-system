
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-eco-600 to-tech-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">E</span>
          </div>
          <span className="font-bold text-xl">EcoSense</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
          <Link to="/#features" className="text-foreground hover:text-primary transition-colors">Features</Link>
          <Link to="/#how-it-works" className="text-foreground hover:text-primary transition-colors">How It Works</Link>
          <Link to="/#benefits" className="text-foreground hover:text-primary transition-colors">Benefits</Link>
          <Link to="/dashboard" className="text-foreground hover:text-primary transition-colors">Dashboard Demo</Link>
        </div>
        
        <div>
          <Button className="bg-gradient-to-r from-eco-600 to-tech-600 hover:from-eco-700 hover:to-tech-700">
            Request Demo
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
