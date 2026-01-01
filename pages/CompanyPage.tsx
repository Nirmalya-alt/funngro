
import React from 'react';
import { TRUSTED_COMPANIES, CATEGORIES } from '../constants';
import { ArrowRight, Zap, Target, ShieldCheck, DollarSign, Clock } from 'lucide-react';

const CompanyPage: React.FC = () => {
  const benefits = [
    { title: 'Cost Effective', desc: 'Get quality work at competitive prices from digital natives.', icon: <DollarSign className="w-6 h-6" /> },
    { title: 'Timely Delivery', desc: 'Fast turnaround times with enthusiastic and dedicated talent.', icon: <Clock className="w-6 h-6" /> },
    { title: 'Innovative Ideas', desc: 'Fresh perspectives from the next generation of creators.', icon: <Zap className="w-6 h-6" /> },
    { title: 'Impact Driven', desc: 'Help shape the future by giving teens their first opportunity.', icon: <Target className="w-6 h-6" /> },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-green-500/5 blur-[120px] rounded-full -z-10" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 mb-8">
                <ShieldCheck className="w-4 h-4 text-green-400" />
                <span className="text-slate-300 text-sm font-bold">Trusted by 4,000+ Companies</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                Smart Talent for <span className="gradient-text">Smart Companies</span>
              </h1>
              <p className="text-slate-400 text-lg md:text-xl mb-10 leading-relaxed">
                Connect with talented teenagers for your next project. From social media management to video creation, get expert help while nurturing the future workforce.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-10 py-4 bg-green-500 text-slate-950 font-black rounded-full hover:bg-green-400 transition-all flex items-center justify-center gap-2">
                  Hire Teenlancer <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-10 py-4 glass border-white/10 text-white font-bold rounded-full hover:bg-white/5 transition-all">
                  Post a Project
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/10 blur-[80px] rounded-full" />
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                   <div className="p-4 rounded-3xl glass border-white/10 translate-x-4">
                      <img src="https://picsum.photos/seed/c1/300/400" className="rounded-2xl" />
                   </div>
                   <div className="p-4 rounded-3xl glass border-white/10">
                      <img src="https://picsum.photos/seed/c2/300/300" className="rounded-2xl" />
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="p-4 rounded-3xl glass border-white/10">
                      <img src="https://picsum.photos/seed/c3/300/300" className="rounded-2xl" />
                   </div>
                   <div className="p-4 rounded-3xl glass border-white/10 translate-x--4">
                      <img src="https://picsum.photos/seed/c4/300/400" className="rounded-2xl" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="py-12 border-y border-white/5 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
          <p className="text-center text-slate-500 text-sm font-bold uppercase tracking-widest mb-10">We are trusted by</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {TRUSTED_COMPANIES.map((company, i) => (
              <span key={i} className="text-2xl font-black text-white">{company}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work with Teens */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-black mb-6">Why work with <span className="text-green-400">Teens?</span></h2>
            <p className="text-slate-400">Teenagers are the smarter generations, more clued in to your customer mindset, not spoilt by years of experience hence being cost effective delivery of high quality of work.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="p-10 rounded-[40px] glass border-white/5 hover:bg-white/5 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(34,197,94,0.15)] transition-all duration-500 group">
                <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 mb-8 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-black mb-6">Talent for all <span className="text-green-400">your needs</span></h2>
              <p className="text-slate-400">Thousands of Talented Teenagers for all your business needs. Register your interest and start working with smartest talent around.</p>
            </div>
            <button className="px-8 py-4 bg-white text-slate-950 font-black rounded-full hover:bg-slate-200 transition-all">View All Categories</button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CATEGORIES.concat(CATEGORIES.slice(0, 2)).map((cat, i) => (
              <div key={i} className="p-8 rounded-3xl glass border-white/5 hover:border-green-500/30 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(34,197,94,0.15)] transition-all duration-500 text-center group cursor-pointer">
                <div className="inline-flex w-16 h-16 rounded-full bg-slate-800 items-center justify-center text-green-400 mb-6 group-hover:bg-green-500 group-hover:text-slate-950 transition-colors">
                  {cat.icon}
                </div>
                <h4 className="font-bold text-white">{cat.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Ideas */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-16">Popular <span className="text-green-400">Project Ideas</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Build your brand', price: '₹2000', desc: 'Get your logos, brochure designed professionally - 5 Samples' },
              { title: 'Customize your website', price: '₹5000-₹15000', desc: 'Get a professional website designed to increase business growth.' },
              { title: 'Reach more customers', price: '₹5000', desc: 'Get Teenlancers to manage your social media handles' },
            ].map((idea, i) => (
              <div key={i} className="p-10 rounded-[40px] border border-white/10 flex flex-col h-full hover:shadow-[0_20px_50px_rgba(34,197,94,0.1)] hover:scale-[1.02] transition-all duration-500">
                <h3 className="text-2xl font-bold mb-2">{idea.title}</h3>
                <div className="text-3xl font-black text-green-400 mb-6">{idea.price}</div>
                <p className="text-slate-400 mb-10 flex-grow">{idea.desc}</p>
                <button className="w-full py-4 border border-green-500/50 text-green-400 font-bold rounded-2xl hover:bg-green-500 hover:text-slate-950 transition-all">
                  Start Now →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyPage;
