
import React from 'react';

const HowItWorksSection = () => {
  return (
    <div id="how-it-works" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Our System Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive end-to-end solution powered by IoT technology and data analytics
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-eco-500 to-tech-500 transform -translate-y-1/2 z-0"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center border-4 border-eco-500 mb-4">
                <span className="text-2xl font-bold text-eco-700">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Smart Bin Deployment</h3>
              <div className="bg-white rounded-lg p-5 shadow-md w-full">
                <p className="text-gray-600">
                  Our smart bins are equipped with ultrasonic sensors that continuously measure waste levels. 
                  These sensors are powered by energy-efficient components with backup power sources.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center border-4 border-eco-500 mb-4">
                <span className="text-2xl font-bold text-eco-700">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Data Transmission & Processing</h3>
              <div className="bg-white rounded-lg p-5 shadow-md w-full">
                <p className="text-gray-600">
                  Fill level data is transmitted via IoT networks to our secure cloud infrastructure.
                  Advanced algorithms analyze the data to predict fill rates and optimize collection schedules.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center border-4 border-eco-500 mb-4">
                <span className="text-2xl font-bold text-eco-700">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Smart Collection & Insights</h3>
              <div className="bg-white rounded-lg p-5 shadow-md w-full">
                <p className="text-gray-600">
                  Collection teams receive optimized routes based on real-time data, reducing unnecessary pickups.
                  Management gains valuable insights through our analytics dashboard for long-term planning.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Detailed visualization */}
        <div className="mt-24 bg-white rounded-xl overflow-hidden shadow-lg">
          <div className="p-6 md:p-10">
            <h3 className="text-2xl font-bold mb-6 text-center">System Architecture</h3>
            
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 p-4">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-32 h-32 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Smart Bin Components</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Ultrasonic fill-level sensors</li>
                  <li>Temperature & humidity sensors</li>
                  <li>Wireless communication module</li>
                  <li>Solar-powered battery system</li>
                  <li>Secure mounting hardware</li>
                </ul>
              </div>
              
              <div className="flex-1 p-4">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-32 h-32 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Cloud Infrastructure</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Secure data storage</li>
                  <li>Real-time processing engine</li>
                  <li>Predictive analytics algorithms</li>
                  <li>API integration layer</li>
                  <li>Automatic scaling capabilities</li>
                </ul>
              </div>
              
              <div className="flex-1 p-4">
                <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-32 h-32 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">User Applications</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Administrative dashboard</li>
                  <li>Mobile driver application</li>
                  <li>Planning & reporting tools</li>
                  <li>Alert management system</li>
                  <li>Integration with city platforms</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
