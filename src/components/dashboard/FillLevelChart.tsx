
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Sample data for fill level chart
const data = [
  { date: 'Mon', fillLevel: 20 },
  { date: 'Tue', fillLevel: 32 },
  { date: 'Wed', fillLevel: 45 },
  { date: 'Thu', fillLevel: 59 },
  { date: 'Fri', fillLevel: 49 },
  { date: 'Sat', fillLevel: 65 },
  { date: 'Sun', fillLevel: 80 },
  { date: 'Mon', fillLevel: 35 },
  { date: 'Tue', fillLevel: 45 },
  { date: 'Wed', fillLevel: 55 },
  { date: 'Thu', fillLevel: 68 },
  { date: 'Fri', fillLevel: 85 },
  { date: 'Sat', fillLevel: 30 },
  { date: 'Sun', fillLevel: 42 },
];

const FillLevelChart = () => {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Fill Level Trends</CardTitle>
        <CardDescription>Average fill level across all bins over time</CardDescription>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis 
                dataKey="date" 
                axisLine={false} 
                tickLine={false}
                tick={{ fontSize: 12, fill: '#888' }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false}
                tick={{ fontSize: 12, fill: '#888' }}
                domain={[0, 100]}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Fill Level']}
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '0.375rem',
                  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="fillLevel" 
                stroke="#22c55e" 
                fillOpacity={1} 
                fill="url(#colorFill)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default FillLevelChart;
