
import React from 'react';

const TrustSafety: React.FC = () => {
  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h1 className="text-5xl font-extrabold mb-6">Security is not a feature.</h1>
          <p className="text-xl text-slate-400">It is the foundation of digital presence. Omnis is built with military-grade privacy at the core.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Data Stewardship</h2>
            <div className="p-8 bg-slate-900/50 rounded-2xl border border-slate-800">
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Encryption</h4>
              <p className="text-slate-400 leading-relaxed">All voice models and historic context are encrypted at rest using AES-256 and in transit via TLS 1.3. Your digital identity never leaves your tenant.</p>
            </div>
            <div className="p-8 bg-slate-900/50 rounded-2xl border border-slate-800">
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Retention</h4>
              <p className="text-slate-400 leading-relaxed">You have full control over data retention. Set automated purge cycles for sensitive meeting transcripts and action histories.</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Informed Consent</h2>
            <div className="p-8 bg-slate-900/50 rounded-2xl border border-slate-800">
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Disclosure</h4>
              <p className="text-slate-400 leading-relaxed">Omnis never hides its identity. Every session begins with a clear disclosure that you are being represented by your digital delegate.</p>
            </div>
            <div className="p-8 bg-slate-900/50 rounded-2xl border border-slate-800">
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Recording Policies</h4>
              <p className="text-slate-400 leading-relaxed">Omnis respects 'No Record' zones. If a meeting is flagged as off-the-record, Omnis will operate in a local-only, non-persistent mode.</p>
            </div>
          </div>
        </div>

        <div className="p-12 glass-panel rounded-3xl text-center">
          <h3 className="text-2xl font-bold mb-6 italic">"We built Omnis for ourselves first. We would never compromise our own digital integrity, and we won't compromise yours."</h3>
          <p className="text-slate-500">— Chief Security Officer, Omnis AI</p>
        </div>
      </div>
    </div>
  );
};

export default TrustSafety;
