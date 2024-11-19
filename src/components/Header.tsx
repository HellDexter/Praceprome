import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Briefcase, Crown } from 'lucide-react';
import clsx from 'clsx';
import { useStore } from '../store/useStore';

export const Header = () => {
  const location = useLocation();
  const { isPro, setIsPro } = useStore();

  const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
    <Link
      to={to}
      className={clsx(
        'hover:text-blue-200 transition-colors',
        location.pathname === to && 'text-blue-200'
      )}
    >
      {children}
    </Link>
  );

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Briefcase className="h-8 w-8" />
            <span className="text-2xl font-bold">PráceProMě</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <NavLink to="/upload">Nahrát životopis</NavLink>
            <NavLink to="/jobs">Nabídky práce</NavLink>
            <NavLink to="/market">Přehled trhu</NavLink>
            <NavLink to="/interview">Příprava na pohovor</NavLink>
          </div>
          <div className="flex items-center space-x-4">
            {isPro ? (
              <span className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded-full">
                <Crown className="w-4 h-4 mr-2" />
                PRO účet
              </span>
            ) : (
              <button
                onClick={() => setIsPro(true)}
                className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-2 rounded-full font-semibold 
                         hover:from-yellow-500 hover:to-yellow-700 transition-colors flex items-center"
              >
                <Crown className="w-4 h-4 mr-2" />
                Získat PRO
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};