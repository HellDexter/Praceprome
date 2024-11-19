import React from 'react';
import { TrendingUp, Users, Building, Award } from 'lucide-react';

export const MarketOverviewPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Přehled pracovního trhu
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <TrendingUp className="h-8 w-8 text-blue-600 mr-3" />
            <h3 className="text-lg font-semibold">Průměrná mzda IT</h3>
          </div>
          <p className="text-2xl font-bold text-gray-800">75 000 Kč</p>
          <p className="text-sm text-gray-500">měsíčně</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Users className="h-8 w-8 text-blue-600 mr-3" />
            <h3 className="text-lg font-semibold">Volných pozic</h3>
          </div>
          <p className="text-2xl font-bold text-gray-800">15 420</p>
          <p className="text-sm text-gray-500">aktuálně</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Building className="h-8 w-8 text-blue-600 mr-3" />
            <h3 className="text-lg font-semibold">Aktivních firem</h3>
          </div>
          <p className="text-2xl font-bold text-gray-800">3 250</p>
          <p className="text-sm text-gray-500">tento měsíc</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Award className="h-8 w-8 text-blue-600 mr-3" />
            <h3 className="text-lg font-semibold">Nejžádanější</h3>
          </div>
          <p className="text-lg font-semibold text-gray-800">React Developer</p>
          <p className="text-sm text-gray-500">pozice</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Trendy v oboru</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Nejžádanější dovednosti</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span>React</span>
                <span className="text-blue-600">85%</span>
              </li>
              <li className="flex items-center justify-between">
                <span>TypeScript</span>
                <span className="text-blue-600">78%</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Node.js</span>
                <span className="text-blue-600">72%</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Rostoucí odvětví</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span>Umělá inteligence</span>
                <span className="text-green-600">↑ 45%</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Kybernetická bezpečnost</span>
                <span className="text-green-600">↑ 38%</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Cloud Computing</span>
                <span className="text-green-600">↑ 32%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};