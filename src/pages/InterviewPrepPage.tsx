import React from 'react';
import { MessageSquare, Book, CheckCircle, AlertCircle } from 'lucide-react';

export const InterviewPrepPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Příprava na pohovor
      </h1>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Časté otázky u pohovoru</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <div className="flex items-start">
                <MessageSquare className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Řekněte nám něco o sobě</h3>
                  <p className="text-gray-600 mb-3">
                    Připravte si stručný přehled vaší kariéry, vzdělání a relevantních zkušeností.
                    Zaměřte se na úspěchy a dovednosti související s pozicí.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Tip:</strong> Strukturujte odpověď pomocí formátu STAR (Situace, Úkol, Akce, Výsledek)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <div className="flex items-start">
                <Book className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">Kde se vidíte za 5 let?</h3>
                  <p className="text-gray-600 mb-3">
                    Ukažte své ambice a plány profesního růstu, ale zůstaňte realistický.
                    Propojte své cíle s možnostmi růstu ve společnosti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
              Co dělat
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                Přijďte včas, ideálně 10 minut předem
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                Připravte si otázky na zaměstnavatele
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                Researchujte si společnost předem
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <AlertCircle className="h-6 w-6 text-red-600 mr-2" />
              Čemu se vyhnout
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                Negativním komentářům o předchozích zaměstnavatelích
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                Nepřipravenosti na základní otázky
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                Lhaní o zkušenostech a dovednostech
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};