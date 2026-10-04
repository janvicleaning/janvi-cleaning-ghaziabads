import React from 'react';
import { CalendarCheck2, Sparkles, Smile, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onBookNow: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onBookNow }) => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-100/70 px-3 py-1 rounded-full mb-3">
            <span>Seamless Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Booking professional deep cleaning in Ghaziabad is as simple as 1-2-3.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-dashed border-t-2 border-dashed border-slate-200 -translate-y-8 z-0" />

          {/* Step 01 */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow relative z-10 text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-sky-50 text-sky-600 font-extrabold text-lg flex items-center justify-center mx-auto border border-sky-100">
              01
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900">Book Online or Call</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Choose your service, property size, and preferred date & time slot. Get instant confirmation.
              </p>
            </div>
          </div>

          {/* Step 02 */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow relative z-10 text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 font-extrabold text-lg flex items-center justify-center mx-auto border border-emerald-100">
              02
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900">We Clean Thoroughly</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Our verified, trained crew arrives on time with commercial single-disc scrubbers and eco-friendly products.
              </p>
            </div>
          </div>

          {/* Step 03 */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow relative z-10 text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 font-extrabold text-lg flex items-center justify-center mx-auto border border-amber-100">
              03
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-slate-900">Inspect & You Relax</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Inspect every corner with our team supervisor. Pay securely only after 100% satisfaction.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={onBookNow}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
          >
            <span>Start Your Booking Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
