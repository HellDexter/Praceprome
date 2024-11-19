import React from 'react';

const partners = [
  { name: 'Jobs.cz', logo: 'https://www.jobs.cz/images/logo/jobs-logo.svg' },
  { name: 'Prace.cz', logo: 'https://www.prace.cz/images/logo/prace-logo.svg' },
  { name: 'Profesia.cz', logo: 'https://www.profesia.cz/images/logo_profesia.svg' }
];

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold text-gray-600 mb-6">
            Spolupracujeme s předními pracovními portály
          </h3>
          <div className="flex justify-center items-center space-x-12">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={`https://www.${partner.name.toLowerCase()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="grayscale hover:grayscale-0 transition-all"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 object-contain"
                />
              </a>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">O nás</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-blue-600">O PráceProMě</a></li>
              <li><a href="#" className="hover:text-blue-600">Kontakt</a></li>
              <li><a href="#" className="hover:text-blue-600">Kariéra</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Pro uchazeče</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Jak to funguje</a></li>
              <li><a href="#" className="hover:text-blue-600">Cenník PRO</a></li>
              <li><a href="#" className="hover:text-blue-600">Časté dotazy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Pro firmy</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Inzerce</a></li>
              <li><a href="#" className="hover:text-blue-600">Služby</a></li>
              <li><a href="#" className="hover:text-blue-600">Ceník</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Sledujte nás</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-blue-600">LinkedIn</a></li>
              <li><a href="#" className="hover:text-blue-600">Facebook</a></li>
              <li><a href="#" className="hover:text-blue-600">Twitter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
          <p>© {new Date().getFullYear()} PráceProMě. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
};