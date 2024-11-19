import React from 'react';
import { useLinkedIn } from 'react-linkedin-login-oauth2';
import { Linkedin } from 'lucide-react';

export const LinkedInButton = ({ onSuccess }: { onSuccess: (code: string) => void }) => {
  const { linkedInLogin } = useLinkedIn({
    clientId: 'your-client-id',
    redirectUri: `${window.location.origin}/linkedin`,
    onSuccess: (code) => {
      onSuccess(code);
    },
    onError: (error) => {
      console.error('LinkedIn Login Error:', error);
    },
  });

  return (
    <button
      onClick={linkedInLogin}
      className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 
                 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white 
                 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 
                 focus:ring-blue-500"
    >
      <Linkedin className="w-5 h-5 mr-2 text-[#0A66C2]" />
      Připojit LinkedIn profil
    </button>
  );
};