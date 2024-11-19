import React from 'react';
import { FileText, Search, TrendingUp, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'Chytrá analýza životopisu',
    description: 'Naše AI analyzuje váš životopis a vytvoří detailní profesní profil přizpůsobený požadavkům českého pracovního trhu.'
  },
  {
    icon: Search,
    title: 'Inteligentní párování práce',
    description: 'Získejte personalizovaná doporučení pracovních pozic z předních českých pracovních portálů na základě vašich dovedností a preferencí.'
  },
  {
    icon: TrendingUp,
    title: 'Přehled trhu',
    description: 'Buďte informováni o trendech na pracovním trhu, platových rozmezích a žádaných dovednostech ve vašem oboru.'
  },
  {
    icon: MessageSquare,
    title: 'Příprava na pohovor',
    description: 'Procvičujte s naším AI simulátorem pohovorů a získejte zpětnou vazbu pro zlepšení vašeho výkonu.'
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Proč zvolit JobForMe?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md 
                                        transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};