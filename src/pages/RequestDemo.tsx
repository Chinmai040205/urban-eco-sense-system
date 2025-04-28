import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { toast } from '../components/ui/sonner';

const RequestDemo = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setShowSuccess(true);
    toast.success("Demo request submitted successfully! We'll be in touch soon.");
    
    // Reset form after delay
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 bg-gray-50 pt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className={`bg-white rounded-xl overflow-hidden shadow-xl transition-transform duration-500 ${isSubmitting ? 'scale-[0.98]' : 'scale-100'} ${showSuccess ? 'animate-bounce' : ''}`}>
              <div className="bg-gradient-to-br from-eco-600 to-tech-600 p-8 text-white">
                <h1 className="text-3xl font-bold mb-4">Request a Demo</h1>
                <p className="text-lg opacity-90">
                  Experience how our smart waste management system can transform your city's operations
                </p>
              </div>
              
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-opacity duration-300 ${isSubmitting ? 'opacity-50' : 'opacity-100'}`}>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <Input id="email" type="email" placeholder="Your email" required />
                    </div>
                  </div>
                  
                  <div className={`transition-opacity duration-300 ${isSubmitting ? 'opacity-50' : 'opacity-100'}`}>
                    <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                    <Input id="organization" placeholder="Your company or municipality" required />
                  </div>
                  
                  <div className={`transition-opacity duration-300 ${isSubmitting ? 'opacity-50' : 'opacity-100'}`}>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <Input id="phone" type="tel" placeholder="Your phone number" />
                  </div>
                  
                  <div className={`transition-opacity duration-300 ${isSubmitting ? 'opacity-50' : 'opacity-100'}`}>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your waste management needs and requirements" 
                      rows={4}
                      required 
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className={`w-full bg-gradient-to-r from-eco-600 to-tech-600 hover:from-eco-700 hover:to-tech-700 transition-all duration-300 ${isSubmitting ? 'animate-pulse' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Request'}
                  </Button>

                  {showSuccess && (
                    <div className="animate-fade-in text-center text-green-600 mt-4">
                      Thank you for your interest! We'll contact you soon.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default RequestDemo;
