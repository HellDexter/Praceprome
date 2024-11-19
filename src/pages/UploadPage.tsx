import React from 'react';
import { ResumeUpload } from '../components/upload/ResumeUpload';

export const UploadPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Nahrajte svůj životopis
      </h1>
      <ResumeUpload />
    </div>
  );
};