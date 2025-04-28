
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';

const CollectionMap = () => {
  return (
    <Card className="col-span-3 lg:col-span-3">
      <CardHeader>
        <CardTitle>Collection Map</CardTitle>
        <CardDescription>Current bin locations and collection routes</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="aspect-square relative rounded-md overflow-hidden bg-gray-100 flex items-center justify-center">
          {/* This would be a real map integration in a production app */}
          <div className="absolute inset-0 p-4">
            {/* Simulated map with dots */}
            <div className="w-3 h-3 rounded-full bg-green-500 absolute top-[20%] left-[30%]"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 absolute top-[25%] left-[45%]"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 absolute top-[35%] left-[25%]"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 absolute top-[40%] left-[60%]"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 absolute top-[50%] left-[40%]"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 absolute top-[60%] left-[35%]"></div>
            <div className="w-3 h-3 rounded-full bg-red-500 absolute top-[65%] left-[55%]"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 absolute top-[70%] left-[30%]"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 absolute top-[75%] left-[50%]"></div>
            <div className="w-3 h-3 rounded-full bg-red-500 absolute top-[30%] left-[70%]"></div>
            
            {/* Route lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M30,20 L45,25 L25,35 L60,40 L40,50 L35,60 L55,65 L30,70 L50,75 L70,30" 
                fill="none" 
                stroke="#3b82f6" 
                strokeWidth="0.5" 
                strokeDasharray="1,1" 
              />
            </svg>
            
            {/* Truck icon */}
            <div className="absolute top-[30%] left-[70%] transform -translate-x-1/2 -translate-y-1/2">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h2a2 2 0 012 2v3a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1v-2a4 4 0 00-3-3.87V7a1 1 0 00-1-1h-8a1 1 0 00-1 1v1H3V5a1 1 0 00-1-1z" />
              </svg>
            </div>
          </div>
          
          <div className="text-gray-400 text-center px-4">
            <svg className="w-12 h-12 mx-auto mb-2 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <div className="text-sm font-medium">Interactive Map</div>
            <p className="text-xs mt-1">Live collection routes and bin status</p>
          </div>
          
          {/* Map legend */}
          <div className="absolute bottom-2 right-2 bg-white bg-opacity-80 rounded-md p-2 shadow-sm text-xs">
            <div className="flex items-center mb-1">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-1"></div>
              <span>Normal</span>
            </div>
            <div className="flex items-center mb-1">
              <div className="w-2 h-2 rounded-full bg-yellow-500 mr-1"></div>
              <span>Warning</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-red-500 mr-1"></div>
              <span>Critical</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CollectionMap;
