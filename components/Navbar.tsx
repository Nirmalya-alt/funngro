
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Smartphone, Apple } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Teen', path: '/' },
    { name: 'Company', path: '/company' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-extrabold tracking-tighter text-white">Funngro</span>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors hover:text-green-400 ${
                    isActive(link.path) ? 'text-green-400' : 'text-slate-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-2 mr-4 text-slate-400">
              <Smartphone className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Apple className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            </div>
            <button className="px-5 py-2 text-sm font-bold text-slate-300 hover:text-white transition-colors">
              Company Login
            </button>
            <button className="px-6 py-2.5 bg-green-500 text-slate-950 text-sm font-bold rounded-full hover:bg-green-400 transition-all transform hover:scale-105 active:scale-95">
              Earn Now →
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/5 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 text-base font-medium border-b border-white/5 ${
                  isActive(link.path) ? 'text-green-400' : 'text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="p-4 space-y-4">
              <button className="w-full px-6 py-3 bg-green-500 text-slate-950 font-bold rounded-xl">
                Earn Now →
              </button>
              <button className="w-full px-6 py-3 border border-white/10 text-white font-bold rounded-xl">
                Company Login
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
