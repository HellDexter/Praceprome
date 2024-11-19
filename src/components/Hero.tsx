import React from 'react';
import { Link } from 'react-router-dom';
import { Upload, Search } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Najděte svou vysněnou práci v České republice
          </h1>
          <p className="text-xl mb-12 text-blue-100">
            Nahrajte svůj životopis, odpovězte na několik otázek a nechte naši AI najít pro vás perfektní pracovní příležitosti.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/upload"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold 
                       hover:bg-blue-50 transition-colors flex items-center justify-center"
            >
              <Upload className="w-5 h-5 mr-2" />
              Nahrát životopis
            </Link>
            <Link
              to="/jobs"
              className="bg-blue-500 text-white px-8 py-3 rounded-full font-semibold 
                       hover:bg-blue-400 transition-colors border-2 border-blue-400
                       flex items-center justify-center"
            >
              <Search className="w-5 h-5 mr-2" />
              Procházet nabídky
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};