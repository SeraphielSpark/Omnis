
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-32">
          <h1 className="text-5xl font-extrabold mb-8 gradient-text">AI should multiply humans, not replace them.</h1>
          <p className="text-xl text-slate-400 leading-relaxed">
            Our mission is to end the era of human bottlenecks. We believe high-value individuals should spend their time on creativity and strategy, while their digital delegates handle the operational weight of 'being present'.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
          <div className="aspect-square bg-slate-900 rounded-3xl overflow-hidden relative border border-slate-800">
             <img src="https://picsum.photos/800/800?grayscale" alt="Team workspace" className="object-cover w-full h-full opacity-40" />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent"></div>
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">The Long-Term Vision</h2>
            <p className="text-slate-400 leading-relaxed">
              We envision a world where a founder's output is not limited by their physical presence. A world where meetings are for alignment, and action is autonomous. 
            </p>
            <p className="text-slate-400 leading-relaxed">
              Omnis is just the first step. We are building the infrastructure for a delegated digital future—one where control, integrity, and output coexist at a scale never before possible.
            </p>
            <div className="pt-8 border-t border-slate-900 flex space-x-12">
              <div>
                <p className="text-3xl font-bold text-white">2024</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Founded</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">San Francisco</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Headquarters</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
