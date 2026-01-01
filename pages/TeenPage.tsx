
import React from 'react';
import { CATEGORIES, TESTIMONIALS } from '../constants';
import { ArrowRight, Star, CheckCircle2, Trophy, Rocket, Users } from 'lucide-react';

const TeenPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-green-500/10 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-white/10 mb-8 animate-bounce">
            <span className="text-green-400 text-sm font-bold">Featured on Shark Tank India</span>
            <Trophy className="w-4 h-4 text-yellow-400" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Earn your <span className="gradient-text">First Income</span><br />
            before you turn 18
          </h1>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Real projects from real companies. Learn professional skills, build your portfolio, and earn money for your hard work.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-10 py-4 bg-green-500 text-slate-950 font-black rounded-full hover:bg-green-400 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
              Start Earning Now <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-10 py-4 glass border-white/10 text-white font-bold rounded-full hover:bg-white/5 transition-all">
              Watch How it Works
            </button>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Teens earning', value: '50,00,000+', icon: <Users className="w-5 h-5 text-green-400" /> },
              { label: 'Live Projects', value: '1,000+', icon: <Rocket className="w-5 h-5 text-green-400" /> },
              { label: 'Categories', value: '12+', icon: <Star className="w-5 h-5 text-green-400" /> },
              { label: 'Trusted Partners', value: '4,000+', icon: <CheckCircle2 className="w-5 h-5 text-green-400" /> },
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-3xl glass border-white/5 text-center">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Choose your <span className="text-green-400">Passion</span></h2>
            <p className="text-slate-400">Discover projects that match your skills and interests</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((cat) => (
              <div key={cat.id} className="group p-8 rounded-3xl glass border-white/5 hover:border-green-500/50 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(34,197,94,0.15)] transition-all duration-500 cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 mb-6 group-hover:bg-green-500 group-hover:text-slate-950 transition-colors">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{cat.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{cat.description}</p>
                <div className="flex items-center gap-2 text-green-400 text-sm font-bold group-hover:gap-3 transition-all">
                  Explore Projects <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works - Teens */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black mb-12">The path to your <span className="text-green-400">First Job</span></h2>
              <div className="space-y-12">
                {[
                  { step: '01', title: 'Download & Register', desc: 'Create your profile and showcase your skills to the world.' },
                  { step: '02', title: 'Complete Evaluations', desc: 'Pass simple skill tests to prove you are ready for real projects.' },
                  { step: '03', title: 'Apply to Projects', desc: 'Browse hundreds of live projects and pick what interests you.' },
                  { step: '04', title: 'Submit & Get Paid', desc: 'Complete the work, get feedback, and see money in your Funngro wallet.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-8">
                    <div className="text-4xl font-black text-slate-800 shrink-0">{item.step}</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-green-500/20 blur-[100px] rounded-full" />
              <img 
                src="https://picsum.photos/seed/teen-mobile/800/1000" 
                alt="App Screenshot" 
                className="relative rounded-3xl border-8 border-slate-800 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-black text-center mb-16">Trusted by <span className="text-green-400">Thousands</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="p-8 rounded-3xl glass border-white/5 flex flex-col h-full">
                <p className="text-slate-300 italic mb-8 leading-relaxed">"{t.content}"</p>
                <div className="mt-auto flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <h5 className="font-bold text-white">{t.name}</h5>
                    <p className="text-slate-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative p-12 md:p-20 rounded-[40px] bg-gradient-to-br from-green-500 to-green-600 text-slate-950 text-center overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
             <h2 className="text-4xl md:text-5xl font-black mb-8 relative z-10">Ready to build your career?</h2>
             <p className="text-slate-900/80 text-lg mb-12 max-w-xl mx-auto font-medium relative z-10">
               Join 5 Million+ teens who are already learning professional skills and earning money.
             </p>
             <button className="px-12 py-5 bg-slate-950 text-white font-black rounded-full hover:bg-slate-900 transition-all transform hover:scale-105 active:scale-95 relative z-10">
               Get Started for Free
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeenPage;
