
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowRight } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 pt-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-2xl w-full text-center">
        <div className="relative inline-block mb-8">
          <h1 className="text-[150px] md:text-[200px] font-black leading-none opacity-10 text-white select-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center animate-pulse">
              <Search className="w-12 h-12 text-green-400" />
            </div>
          </div>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-black mb-6">Lost in <span className="text-green-400">Cyberspace?</span></h2>
        <p className="text-slate-400 text-lg mb-12 max-w-lg mx-auto">
          The page you're looking for has moved to a better neighborhood or never existed. Let's get you back on track to earning.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/" 
            className="w-full sm:w-auto px-10 py-4 bg-green-500 text-slate-950 font-black rounded-full hover:bg-green-400 transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" /> Back to Home
          </Link>
          <button className="w-full sm:w-auto px-10 py-4 glass border-white/10 text-white font-bold rounded-full hover:bg-white/5 transition-all flex items-center justify-center gap-2">
            Contact Support <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
