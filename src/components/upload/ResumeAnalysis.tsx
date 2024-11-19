import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { ProBadge } from '../ProBadge';

interface ResumeAnalysisProps {
  file: File;
  analysis: {
    skills: string[];
    experience: string[];
    recommendations: string[];
  };
}

export const ResumeAnalysis = ({ file, analysis }: ResumeAnalysisProps) => {
  const { isPro } = useStore();

  return (
    <div className="mt-8 space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Analýza životopisu</h3>
        
        <div className="space-y-4">
          <div className="flex items-center text-gray-700">
            <CheckCircle2 className="w-5 h-5 text-green-600 mr-2" />
            <span>Formát: {file.type}</span>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <h4 className="font-medium text-gray-800 mb-2">Detekované dovednosti</h4>
            <div className="flex flex-wrap gap-2">
              {analysis.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <h4 className="font-medium text-gray-800 mb-2">Pracovní zkušenosti</h4>
            <ul className="space-y-2 text-gray-600">
              {analysis.experience.map((exp, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-1" />
                  {exp}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-medium text-gray-800">Doporučení pro vylepšení</h4>
              {!isPro && <ProBadge />}
            </div>
            
            {isPro ? (
              <ul className="space-y-2 text-gray-600">
                {analysis.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start">
                    <AlertCircle className="w-4 h-4 text-blue-600 mr-2 mt-1" />
                    {rec}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-600 mb-3">
                  Získejte přístup k detailním doporučením pro vylepšení vašeho životopisu s PRO účtem.
                </p>
                <button
                  onClick={() => useStore.getState().setIsPro(true)}
                  className="text-blue-600 font-medium hover:text-blue-700"
                >
                  Aktivovat PRO →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};