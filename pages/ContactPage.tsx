
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, HelpCircle, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="pt-20">
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/5 blur-[100px] rounded-full -z-10" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h1 className="text-5xl font-black mb-6">Get in <span className="text-green-400">Touch</span></h1>
              <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                Have questions about how Funngro works? Whether you're a teen looking to earn or a company wanting to hire, our team is here to help.
              </p>

              <div className="space-y-8 mb-16">
                <div className="flex items-start gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl glass border-white/10 flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-slate-950 transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Email Us</h4>
                    <p className="text-slate-400">hello@funngro.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl glass border-white/10 flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-slate-950 transition-colors">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Live Chat</h4>
                    <p className="text-slate-400">Available 10 AM - 6 PM IST</p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl glass border-white/5">
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-green-400" />
                  Common Questions
                </h4>
                <div className="space-y-4">
                  {[
                    'How do I start earning?',
                    'Is Funngro safe for teenagers?',
                    'How much can I earn per project?',
                    'What payment methods are supported?'
                  ].map((q, i) => (
                    <button key={i} className="w-full text-left p-4 rounded-xl border border-white/5 hover:bg-white/5 transition-all text-slate-400 hover:text-white flex justify-between items-center group">
                      <span>{q}</span>
                      <span className="text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 p-10 md:p-12 rounded-[40px] border border-white/10 relative">
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-green-500 rounded-3xl -rotate-12 -z-10 opacity-20" />
              
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4">Message Sent!</h3>
                  <p className="text-slate-400 mb-8">Thanks for reaching out. Our team will get back to you within 24 hours.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="px-8 py-3 glass border-white/10 text-white font-bold rounded-xl hover:bg-white/5 transition-all"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-400 mb-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-6 py-4 rounded-2xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-green-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-400 mb-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full px-6 py-4 rounded-2xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-green-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-400 mb-2">I am a...</label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-slate-950 border border-white/10 text-slate-400 focus:outline-none focus:border-green-500 transition-colors">
                      <option>Teenlancer</option>
                      <option>Company Representative</option>
                      <option>Parent</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-400 mb-2">Message</label>
                    <textarea 
                      required
                      rows={4} 
                      placeholder="How can we help you?" 
                      className="w-full px-6 py-4 rounded-2xl bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-green-500 transition-colors"
                    />
                  </div>
                  <button 
                    disabled={isLoading}
                    className="w-full py-5 bg-green-500 text-slate-950 font-black rounded-2xl hover:bg-green-400 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 border-2 border-slate-950/20 border-t-slate-950 rounded-full animate-spin" />
                    ) : (
                      <>Send Message <Send className="w-5 h-5" /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
