
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DashboardStats from '../components/dashboard/DashboardStats';
import FillLevelChart from '../components/dashboard/FillLevelChart';
import BinStatusTable from '../components/dashboard/BinStatusTable';
import CollectionMap from '../components/dashboard/CollectionMap';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 bg-gray-50 pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Dashboard Demo</h1>
              <p className="text-gray-500">Real-time waste management insights</p>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center gap-3">
              <div className="bg-white border border-gray-200 rounded-md px-3 py-1 text-sm flex items-center">
                <span className="text-gray-500 mr-2">Demo City</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-md px-3 py-1 text-sm flex items-center">
                <span className="text-gray-500 mr-2">Last 7 days</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <DashboardStats />
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <FillLevelChart />
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <CollectionMap />
              <BinStatusTable />
            </div>
          </div>
          
          <div className="mt-10 bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-blue-700">
            <div className="flex items-start">
              <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="font-medium">This is a demo dashboard</p>
                <p className="mt-1">In a real implementation, this dashboard would display live data from your smart bin network, with interactive controls and detailed analytics.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
