
import React from 'react';

const Product: React.FC = () => {
  const capabilities = [
    { title: "Voice Modeling", desc: "Omnis learns your speech patterns, vocabulary, and diplomatic style to represent you authentically." },
    { title: "Strategic Intent", desc: "Define goals for specific meetings. Omnis will guide conversations toward these outcomes." },
    { title: "Tool Integration", desc: "Natively integrated with Slack, Jira, Salesforce, and Google Workspace to execute work post-meeting." },
    { title: "Real-time Monitoring", desc: "Watch Omnis live. Intervene via text or take over voice instantly if a conversation becomes high-stakes." }
  ];

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-24">
          <h1 className="text-5xl font-extrabold mb-8 gradient-text">Built for the high-value individual.</h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Omnis is not a chatbot. It's an operational layer that bridges the gap between your intent and real-world execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {capabilities.map((cap, i) => (
            <div key={i} className="group p-10 glass-panel rounded-3xl hover:border-indigo-500/50 transition-all">
              <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">{cap.title}</h3>
              <p className="text-slate-400 leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-900 pt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Guardrails & Ethics</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">We believe in human multiplication, not human replacement. Omnis is designed with hard boundaries.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-slate-900/40 rounded-2xl border border-slate-800">
              <h4 className="text-indigo-400 font-bold mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                What Omnis Will Do
              </h4>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>• Attend routine syncs and updates</li>
                <li>• Represent your known stances and data</li>
                <li>• Commit to deadlines within approved ranges</li>
                <li>• Draft follow-up documentation</li>
              </ul>
            </div>
            <div className="p-8 bg-slate-900/40 rounded-2xl border border-slate-800">
              <h4 className="text-red-400 font-bold mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                What Omnis Will Never Do
              </h4>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>• Sign legal contracts autonomously</li>
                <li>• Terminate personnel or lead disciplinary actions</li>
                <li>• Access data outside its specific permission context</li>
                <li>• Mimic you without clear disclosure of AI presence</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
