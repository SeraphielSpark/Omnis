
import React from 'react';
import { Link } from 'react-router-dom';
import GeminiPreview from '../components/GeminiPreview';

const Home: React.FC = () => {
  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-indigo-500/10 via-transparent to-transparent -z-10 pointer-events-none opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-slate-800 bg-slate-900/50 mb-8 animate-in fade-in slide-in-from-bottom-4">
            <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
            <span className="text-xs font-semibold text-slate-300 tracking-wider uppercase">Early Access Open</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            <span className="gradient-text">Your AI That Shows Up, Speaks,</span><br />
            <span className="text-slate-200">and Gets Work Done.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-slate-400 mb-12 leading-relaxed">
            An autonomous AI presence that attends meetings, communicates in your voice, and executes actions on your behalf. Stop being the bottleneck.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/demo" className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full text-lg hover:bg-slate-200 transition-all shadow-xl shadow-white/5 active:scale-95">
              Request Demo
            </Link>
            <Link to="/how-it-works" className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white font-bold rounded-full text-lg border border-slate-800 hover:border-slate-700 transition-all active:scale-95">
              How It Works
            </Link>
          </div>

          <div className="mt-20 relative max-w-5xl mx-auto">
            <div className="aspect-video glass-panel rounded-2xl overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-slate-950/20 pointer-events-none"></div>
              {/* This would be a high-quality product video / interactive demo */}
              <div className="w-full h-full flex flex-col items-center justify-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform backdrop-blur-md border border-white/20">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
                <p className="text-sm font-medium text-slate-500 tracking-widest uppercase">Watch Omnis in Action</p>
              </div>
            </div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-indigo-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-emerald-600/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">The bottleneck is you.</h2>
            <div className="space-y-8">
              {[
                { title: 'Missed Meetings', desc: 'Critical decisions are delayed because you can\'t be in two places at once.' },
                { title: 'Context Switching', desc: 'Moving from strategy to operational updates destroys your deep work focus.' },
                { title: 'Time Fragmentation', desc: 'Your calendar is a Swiss cheese of 30-minute blocks. You own your time, but don\'t control it.' }
              ].map((item, i) => (
                <div key={i} className="flex space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-12 glass-panel rounded-3xl border-slate-800/50">
            <h3 className="text-2xl font-bold mb-6 text-slate-300 italic">"I spent 6 hours today just 'being present' in meetings where I only needed to speak for 5 minutes. That's a failure of scaling."</h3>
            <p className="text-slate-500">— Series B Founder</p>
          </div>
        </div>
      </section>

      {/* Interactive Demo Preview (Gemini Powered) */}
      <section className="bg-slate-900/30 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Experience Operational Delegation</h2>
            <p className="text-slate-400">See how Omnis would represent you in a common business scenario.</p>
          </div>
          <GeminiPreview />
        </div>
      </section>

      {/* Trust/Authority Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-300">Operational Integrity</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Human-in-the-Loop", 
              desc: "Omnis proposes, you approve. High-stakes actions require manual override confirmation.", 
              icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            },
            { 
              title: "Permission Layers", 
              desc: "Granular control over which contexts Omnis can enter and what data it can reference.", 
              icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            },
            { 
              title: "Audit Logs", 
              desc: "Full transcript and action history for every meeting Omnis attends on your behalf.", 
              icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            }
          ].map((item, i) => (
            <div key={i} className="p-8 glass-panel rounded-2xl">
              <div className="w-12 h-12 rounded-lg bg-indigo-600/10 flex items-center justify-center text-indigo-500 mb-6">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} /></svg>
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="bg-indigo-600 rounded-3xl p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 relative z-10 text-white">Your time is non-renewable.<br />Scale your presence today.</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 relative z-10">
            <Link to="/demo" className="w-full sm:w-auto px-10 py-4 bg-white text-indigo-600 font-bold rounded-full text-lg shadow-xl hover:bg-slate-100 transition-all active:scale-95">
              Get Early Access
            </Link>
            <Link to="/pricing" className="w-full sm:w-auto px-10 py-4 bg-transparent text-white border-2 border-white/30 font-bold rounded-full text-lg hover:bg-white/10 transition-all active:scale-95">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
