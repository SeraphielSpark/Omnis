
import React from 'react';

const UseCases: React.FC = () => {
  const cases = [
    {
      title: "Founder Operational Syncs",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      benefit: "Save 10+ hours/week on internal updates.",
      impact: "High-value focus on strategy and growth."
    },
    {
      title: "Client Status Updates",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      benefit: "Ensure client satisfaction without constant direct involvement.",
      impact: "Maintain white-glove service at scale."
    },
    {
      title: "Internal Project Stand-ups",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
      benefit: "Remove yourself from being the bottleneck for team approvals.",
      impact: "Accelerate development velocity."
    }
  ];

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h1 className="text-5xl font-extrabold mb-6">Real-world execution.</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Omnis is applied across the most time-intensive operational sectors.</p>
        </div>

        <div className="space-y-12">
          {cases.map((c, i) => (
            <div key={i} className="glass-panel p-12 rounded-3xl flex flex-col md:flex-row items-center gap-12">
              <div className="w-20 h-20 rounded-2xl bg-indigo-600/10 flex items-center justify-center text-indigo-500 flex-shrink-0">
                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={c.icon} /></svg>
              </div>
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-3xl font-bold mb-4">{c.title}</h3>
                <p className="text-slate-300 text-lg mb-2">{c.benefit}</p>
                <p className="text-indigo-400 font-semibold tracking-wide uppercase text-xs">{c.impact}</p>
              </div>
              <div className="flex-shrink-0 w-full md:w-auto">
                <button className="w-full md:w-auto px-8 py-3 bg-slate-800 hover:bg-slate-700 rounded-full font-bold transition-all">Read Story</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCases;
