import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileText, X, CheckCircle2, AlertCircle } from 'lucide-react';
import { LinkedInButton } from './LinkedInButton';
import { ResumeAnalysis } from './ResumeAnalysis';
import toast from 'react-hot-toast';
import clsx from 'clsx';

type FileStatus = 'idle' | 'uploading' | 'success' | 'error';

const mockAnalysis = {
  skills: ['React', 'TypeScript', 'Node.js', 'REST API', 'Git'],
  experience: [
    'Senior Frontend Developer - 3 roky',
    'Full Stack Developer - 2 roky',
    'JavaScript Developer - 2 roky'
  ],
  recommendations: [
    'Přidejte více konkrétních čísel a metrik k vašim úspěchům',
    'Zvýrazněte vaše zkušenosti s vedením týmu',
    'Doplňte sekci s certifikacemi'
  ]
};

export const ResumeUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<FileStatus>('idle');
  const [error, setError] = useState<string>('');

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const uploadedFile = acceptedFiles[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      handleFileUpload(uploadedFile);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'text/plain': ['.txt']
    },
    maxFiles: 1,
    multiple: false
  });

  const handleFileUpload = async (file: File) => {
    setStatus('uploading');
    setError('');

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStatus('success');
      toast.success('Životopis byl úspěšně nahrán');
    } catch (err) {
      setStatus('error');
      setError('Nepodařilo se nahrát soubor. Zkuste to prosím znovu.');
      toast.error('Chyba při nahrávání souboru');
    }
  };

  const handleLinkedInSuccess = async (code: string) => {
    setStatus('uploading');
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setStatus('success');
      toast.success('LinkedIn profil byl úspěšně propojen');
    } catch (err) {
      setStatus('error');
      toast.error('Chyba při propojení LinkedIn profilu');
    }
  };

  const removeFile = () => {
    setFile(null);
    setStatus('idle');
    setError('');
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-8">
        <LinkedInButton onSuccess={handleLinkedInSuccess} />
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">nebo</span>
          </div>
        </div>
      </div>

      <div
        {...getRootProps()}
        className={clsx(
          "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
          {
            'border-blue-400 bg-blue-50': isDragActive,
            'border-gray-300 hover:border-blue-400': !isDragActive,
            'pointer-events-none opacity-50': status === 'uploading'
          }
        )}
      >
        <input {...getInputProps()} />
        
        {status === 'idle' && (
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
              <Upload className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-700">
                Přetáhněte sem váš životopis
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Podporované formáty: PDF, DOC, DOCX, TXT
              </p>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Procházet soubory
            </button>
          </div>
        )}

        {status === 'uploading' && (
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto">
              <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            </div>
            <p className="text-lg font-semibold text-gray-700">
              Analyzuji váš životopis...
            </p>
          </div>
        )}

        {status === 'success' && file && (
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <div className="space-y-2">
              <p className="text-lg font-semibold text-gray-700">
                Životopis byl úspěšně nahrán
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <FileText className="w-4 h-4" />
                <span>{file.name}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile();
                  }}
                  className="text-red-500 hover:text-red-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {status === 'error' && (
          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
            <div className="space-y-2">
              <p className="text-lg font-semibold text-red-600">{error}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile();
                }}
                className="text-sm text-gray-600 hover:text-gray-700"
              >
                Zkusit znovu
              </button>
            </div>
          </div>
        )}
      </div>

      {status === 'success' && file && (
        <ResumeAnalysis file={file} analysis={mockAnalysis} />
      )}
    </div>
  );
};