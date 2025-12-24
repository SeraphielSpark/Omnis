
import React from 'react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Individual",
      price: "$49",
      period: "per month",
      description: "For founders and solo operators scaling their output.",
      features: [
        "Up to 20 meetings / month",
        "Voice modeling (1 voice)",
        "Slack & Email integration",
        "Human-in-the-loop controls",
        "7-day history storage"
      ],
      cta: "Join Waitlist",
      highlight: false
    },
    {
      name: "Professional",
      price: "$199",
      period: "per month",
      description: "For executives and consultants with heavy meeting loads.",
      features: [
        "Unlimited meetings",
        "Strategic intent mapping",
        "Advanced tool integration (Jira/SFDC)",
        "Real-time take-over capability",
        "Unlimited history storage",
        "Dedicated presence IP"
      ],
      cta: "Request Demo",
      highlight: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact sales",
      description: "For leadership teams and distributed organizations.",
      features: [
        "Team-wide presence management",
        "SSO & Role-based access",
        "Custom deployment (Private Cloud)",
        "Compliance & Audit suites",
        "SLA & Dedicated support",
        "API access for custom tools"
      ],
      cta: "Contact Sales",
      highlight: false
    }
  ];

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h1 className="text-5xl font-extrabold mb-6">Investment in your focus.</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Omnis pays for itself by returning your most valuable asset: time.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className={`p-10 rounded-3xl flex flex-col border ${plan.highlight ? 'bg-slate-900 border-indigo-500 shadow-2xl shadow-indigo-500/10 scale-105' : 'glass-panel border-slate-800'}`}>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-slate-500 text-sm">{plan.period}</span>
                </div>
                <p className="mt-4 text-sm text-slate-400">{plan.description}</p>
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm text-slate-300">
                    <svg className="w-5 h-5 text-indigo-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={plan.cta === "Request Demo" ? "/demo" : "/demo"}
                className={`w-full py-4 rounded-xl text-center font-bold transition-all ${plan.highlight ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20' : 'bg-slate-800 hover:bg-slate-700 text-white'}`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-slate-500 text-sm italic">Note: Omnis is currently in private beta. Pricing is subject to change based on usage patterns and compute intensity.</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
