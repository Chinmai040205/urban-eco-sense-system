
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

// Sample data for bin status
const bins = [
  {
    id: 'SB-100482',
    location: 'Central Park, East Entrance',
    fillLevel: 82,
    battery: 85,
    lastUpdated: '10 min ago',
    status: 'Warning',
  },
  {
    id: 'SB-100187',
    location: 'Main Street & 5th Avenue',
    fillLevel: 94,
    battery: 72,
    lastUpdated: '5 min ago',
    status: 'Critical',
  },
  {
    id: 'SB-100295',
    location: 'City Hall Plaza',
    fillLevel: 41,
    battery: 90,
    lastUpdated: '3 min ago',
    status: 'Normal',
  },
  {
    id: 'SB-100356',
    location: 'Riverside Park',
    fillLevel: 68,
    battery: 63,
    lastUpdated: '7 min ago',
    status: 'Normal',
  },
  {
    id: 'SB-100512',
    location: 'Shopping Mall Entrance',
    fillLevel: 87,
    battery: 91,
    lastUpdated: '2 min ago',
    status: 'Warning',
  },
];

const BinStatusTable = () => {
  return (
    <Card className="col-span-2 lg:col-span-3">
      <CardHeader>
        <CardTitle>Bin Status</CardTitle>
        <CardDescription>Current status of bins needing attention</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left font-medium text-gray-500 py-3 px-4">ID</th>
                <th className="text-left font-medium text-gray-500 py-3 px-4">Location</th>
                <th className="text-left font-medium text-gray-500 py-3 px-4">Fill Level</th>
                <th className="text-left font-medium text-gray-500 py-3 px-4">Battery</th>
                <th className="text-left font-medium text-gray-500 py-3 px-4">Last Updated</th>
                <th className="text-left font-medium text-gray-500 py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {bins.map((bin) => {
                // Determine fill level color
                let fillLevelColor = 'bg-green-500';
                if (bin.fillLevel >= 80 && bin.fillLevel < 90) {
                  fillLevelColor = 'bg-yellow-500';
                } else if (bin.fillLevel >= 90) {
                  fillLevelColor = 'bg-red-500';
                }
                
                // Determine status badge color
                let statusClass = 'bg-green-100 text-green-800';
                if (bin.status === 'Warning') {
                  statusClass = 'bg-yellow-100 text-yellow-800';
                } else if (bin.status === 'Critical') {
                  statusClass = 'bg-red-100 text-red-800';
                }
                
                return (
                  <tr key={bin.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4">{bin.id}</td>
                    <td className="py-3 px-4">{bin.location}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                          <div 
                            className={`${fillLevelColor} h-2 rounded-full`} 
                            style={{ width: `${bin.fillLevel}%` }}
                          ></div>
                        </div>
                        <span className="text-gray-700 text-xs font-medium">{bin.fillLevel}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full" 
                            style={{ width: `${bin.battery}%` }}
                          ></div>
                        </div>
                        <span className="text-gray-700 text-xs font-medium">{bin.battery}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-500">{bin.lastUpdated}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusClass}`}>
                        {bin.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default BinStatusTable;
