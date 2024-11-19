import React from 'react';
import { Crown } from 'lucide-react';

export const ProBadge = () => (
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-yellow-400 to-yellow-600 text-white">
    <Crown className="w-3 h-3 mr-1" />
    PRO
  </span>
);