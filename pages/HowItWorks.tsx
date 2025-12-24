
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: "01",
      title: "Training Phase",
      desc: "Connect your historic meeting transcripts, Slack history, and documentation. Omnis learns the nuances of your decision-making framework."
    },
    {
      id: "02",
      title: "Voice & Intent Modeling",
      desc: "Complete a short calibration session where you review Omnis's proposed responses to common scenarios. Refine its tone to match your authority level."
    },
    {
      id: "03",
      title: "Meeting Participation",
      desc: "Omnis joins your calendar invites as a 'Digital Delegate'. It listens in real-time and interjects when its context matches the conversation flow."
    },
    {
      id: "04",
      title: "Action Execution",
      desc: "Post-meeting, Omnis generates a recap and automatically drafts the Jira tickets, emails, or docs it committed to during the session."
    },
    {
      id: "05",
      title: "Feedback Loop",
      desc: "You review the outcome. If Omnis deviated from your intent, a single correction updates its model for all future interactions."
    }
  ];

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h1 className="text-5xl font-extrabold mb-6">Operational Delegation.</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">From intent to execution in five structured steps.</p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 hidden md:block"></div>
          
          <div className="space-y-24">
            {steps.map((step, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <span className="text-6xl font-black text-slate-900 leading-none mb-4 block">{step.id}</span>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed max-w-lg mx-auto md:mx-0">{step.desc}</p>
                </div>
                <div className="z-10 w-12 h-12 rounded-full bg-slate-950 border-4 border-slate-800 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                </div>
                <div className="flex-1 hidden md:block">
                  {/* Placeholder for technical illustration */}
                  <div className="h-40 bg-slate-900/50 rounded-2xl border border-slate-800/50 shimmer"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
