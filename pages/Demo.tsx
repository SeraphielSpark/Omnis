
import React, { useState } from 'react';

const Demo: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    useCase: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, send to API
  };

  if (submitted) {
    return (
      <div className="pt-40 pb-64 flex flex-col items-center justify-center text-center px-4">
        <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 mb-8">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h1 className="text-4xl font-bold mb-4">Request Received.</h1>
        <p className="text-slate-400 max-w-md">Our team will reach out within 24 hours to schedule a deep-dive demo and assess if Omnis is the right fit for your operational needs.</p>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <h1 className="text-5xl font-extrabold mb-8 gradient-text">Stop being the bottleneck.</h1>
            <p className="text-xl text-slate-400 mb-12 leading-relaxed">
              Experience how autonomous presence can multiply your operational capacity. We only partner with organizations where we can drive 10x ROI.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-indigo-600/10 flex items-center justify-center text-indigo-500 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">30-Minute Intro</h4>
                  <p className="text-slate-400 text-sm">A brief technical walkthrough and use-case mapping for your specific role.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-600/10 flex items-center justify-center text-emerald-500 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Security First</h4>
                  <p className="text-slate-400 text-sm">We'll review our data handling protocols and compliance standards with you.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 glass-panel rounded-3xl border-slate-800/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 tracking-wider uppercase">Full Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-slate-200 outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 tracking-wider uppercase">Work Email</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-slate-200 outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 tracking-wider uppercase">Company / Organization</label>
                <input
                  required
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-slate-200 outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 tracking-wider uppercase">Your Role</label>
                <select
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-slate-200 outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                >
                  <option value="">Select a role</option>
                  <option value="founder">Founder / CEO</option>
                  <option value="exec">Executive Leadership</option>
                  <option value="pm">Product Management</option>
                  <option value="consultant">Independent Consultant</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 tracking-wider uppercase">Primary Use Case</label>
                <textarea
                  required
                  value={formData.useCase}
                  onChange={(e) => setFormData({...formData, useCase: e.target.value})}
                  placeholder="Which meetings do you want to delegate first?"
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 h-32 text-slate-200 outline-none focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg shadow-xl shadow-indigo-600/20 transition-all"
              >
                Request Access
              </button>
              <p className="text-[10px] text-slate-500 text-center uppercase tracking-widest">By submitting, you agree to our privacy policy and beta terms.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
