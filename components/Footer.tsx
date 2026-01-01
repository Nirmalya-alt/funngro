
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-3xl font-extrabold tracking-tighter text-white">Funngro</span>
              <div className="w-2 h-2 rounded-full bg-green-500" />
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed mb-8">
              Enable Smart Teenagers and Smart Companies to realize their full potentials. It's fun to grow. Join thousands of teens already earning while learning.
            </p>
            <div className="flex space-x-6">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="text-slate-400 hover:text-green-400 transition-colors">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/" className="hover:text-green-400 transition-colors">Home (Teens)</Link></li>
              <li><Link to="/company" className="hover:text-green-400 transition-colors">Company</Link></li>
              <li><Link to="/contact" className="hover:text-green-400 transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Blogs</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
          <p>© All Copyrights reserved 2025 by FUNNGRO - Wishbane Technologies Private Limited</p>
          <div className="flex items-center gap-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
