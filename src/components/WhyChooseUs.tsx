import React from 'react';
import { Leaf, ShieldCheck, DollarSign, Award, ThumbsUp, Sparkles, Clock, Check } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching reference */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Janvi Cleaning?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            We deliver quality deep cleaning with utmost care, punctuality & professionalism.
          </p>
        </div>

        {/* 4 Pillars Grid (matching reference icon style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="text-center space-y-3 group">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm">
              <Leaf className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Eco-Friendly Products</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Safe for your family, babies & pets. Biodegradable, zero harsh fumes or damaging acids.
            </p>
          </div>

          <div className="text-center space-y-3 group">
            <div className="w-16 h-16 rounded-2xl bg-sky-50 text-sky-600 mx-auto flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-sm">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Verified & Trained Cleaners</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Experienced, police verified & background checked staff with uniform & ID proof.
            </p>
          </div>

          <div className="text-center space-y-3 group">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-600 mx-auto flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-sm">
              <DollarSign className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Affordable Pricing</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              High quality cleaning at honest, transparent rates in Ghaziabad. No hidden post-job fees.
            </p>
          </div>

          <div className="text-center space-y-3 group">
            <div className="w-16 h-16 rounded-2xl bg-rose-50 text-rose-600 mx-auto flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-all duration-300 shadow-sm">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Satisfaction Guaranteed</h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              We're not happy until you are! If you find any missed spot, we re-clean within 24 hours free.
            </p>
          </div>

        </div>

        {/* Counter Stats Banner (matching reference mockup: 500+, 120+, 1,000+, 100%) */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-sky-900 via-blue-900 to-sky-950 text-white p-8 sm:p-10 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">2,500+</div>
              <div className="text-xs sm:text-sm font-medium text-sky-100 mt-1">Happy Homes Cleaned</div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">45+</div>
              <div className="text-xs sm:text-sm font-medium text-sky-100 mt-1">Expert Trained Staff</div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">3,800+</div>
              <div className="text-xs sm:text-sm font-medium text-sky-100 mt-1">Completed Jobs</div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">100%</div>
              <div className="text-xs sm:text-sm font-medium text-sky-100 mt-1">Hygiene Guaranteed</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
