import React from 'react';
import { BarChart2 } from 'lucide-react';

export function Dashboard() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back, here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white rounded-xl shadow-sm p-6">
            <div className="h-32 flex items-center justify-center bg-gray-50 rounded-lg mb-4">
              <BarChart2 className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="font-semibold text-gray-900">Card Title {item}</h3>
            <p className="text-gray-600 mt-2">
              This is a sample card with some placeholder content. You can replace this with actual data.
            </p>
          </div>
        ))}
      </div>
    </>
  );
}