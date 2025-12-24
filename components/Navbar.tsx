
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Product', path: '/product' },
    { label: 'How it Works', path: '/how-it-works' },
    { label: 'Use Cases', path: '/use-cases' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Trust & Safety', path: '/trust-safety' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 glass-panel border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                <span className="text-white font-bold text-xl">O</span>
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-white font-sans">OMNIS</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  isActive(link.path) ? 'text-white' : 'text-slate-400'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/demo"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-indigo-600/20 active:scale-95"
            >
              Request Demo
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-400 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 animate-in fade-in slide-in-from-top-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-400 hover:text-white hover:bg-slate-800 rounded-md"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/demo"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-indigo-600 text-white px-3 py-3 rounded-md text-base font-bold"
            >
              Request Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
