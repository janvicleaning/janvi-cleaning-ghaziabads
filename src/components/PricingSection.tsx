import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { PRICING_PACKAGES } from '../data/cleaningData';

interface PricingSectionProps {
  onSelectPackage: (serviceId: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPackage }) => {
  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full mb-3">
            <span>Honest & Upfront Rates</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Simple & Transparent Pricing
          </h2>
          <p className="mt-3 text-base text-slate-600">
            No surprise taxes, no hidden travel charges in Ghaziabad. High quality deep cleaning at guaranteed best prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PRICING_PACKAGES.map((pkg, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.popular
                  ? 'bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-white border-2 border-amber-400 shadow-xl shadow-amber-500/10 scale-105 z-10'
                  : 'bg-white border border-slate-200/90 shadow-sm hover:shadow-lg'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 font-extrabold text-xs px-4 py-1.5 rounded-full shadow-md uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Most Popular in Ghaziabad</span>
                </div>
              )}

              <div>
                <div className="text-center pb-6 border-b border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900">{pkg.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 min-h-[32px]">{pkg.subtitle}</p>
                  
                  <div className="mt-4 flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-extrabold text-slate-900 tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">{pkg.unit}</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="py-6 space-y-3">
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onSelectPackage(pkg.serviceId)}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all shadow-md cursor-pointer ${
                    pkg.popular
                      ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-amber-400/25'
                      : 'bg-sky-600 hover:bg-sky-700 text-white shadow-sky-600/20'
                  }`}
                >
                  Book This Plan
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-xs text-slate-400">
          * Custom quotes available for independent kothis, villas, schools and large commercial complexes in Ghaziabad.
        </div>

      </div>
    </section>
  );
};
