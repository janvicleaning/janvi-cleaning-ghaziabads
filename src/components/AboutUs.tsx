import React from 'react';
import { ShieldCheck, Sparkles, HeartHandshake, MapPin, Users, CheckCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/cleaningData';

export const AboutUs: React.FC = () => {
  return (
    <section id="about-us" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image collage & stats */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 aspect-[4/3] bg-slate-100">
              <img
                src="./images/home_clean.jpg"
                alt="Janvi Cleaning Team at Work"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src.includes('./images/home_clean.jpg')) {
                    target.src = '/src/assets/images/home_deep_clean_1791124054725.jpg';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-sky-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-sky-700 uppercase tracking-wide">Janvi Cleaning Service</div>
                  <div className="text-sm font-extrabold text-slate-900">Clean Spaces | Healthy Lives</div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                    Ghaziabad & NCR
                  </span>
                </div>
              </div>
            </div>

            {/* Overlapping stat pill */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-4 shadow-xl items-center gap-3 border-2 border-white">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center font-bold text-xl">
                5+
              </div>
              <div>
                <div className="text-xs uppercase font-bold text-emerald-100">Years Of Trust</div>
                <div className="text-sm font-extrabold">Serving 10,000+ Happy Homes</div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>About Janvi Cleaning</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Ghaziabad’s Most Trusted Home & Commercial Deep Cleaning Specialists
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Founded with a mission to bring true hygiene, freshness, and germ-free living to families across Ghaziabad and NCR, 
              <strong> Janvi Cleaning</strong> delivers specialized deep cleaning tailored to modern lifestyle standards.
            </p>

            <p className="text-base text-slate-600 leading-relaxed">
              Unlike ordinary housekeeping, our specialized crew uses heavy-duty single disc scrubbing machines, 
              organic degreasers, German steam extraction, and government-approved eco-friendly disinfectants safe for infants, seniors, and pets.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-700">100% Background-Checked Staff</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-700">No Harsh Acid or Toxic Bleach</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-700">Fixed & Transparent Quotes</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-700">Free Re-clean Guarantee</span>
              </div>
            </div>

            {/* Service Localities Tag Cloud */}
            <div className="pt-4 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                Active Service Coverage In Ghaziabad:
              </span>
              <div className="flex flex-wrap gap-2">
                {CONTACT_INFO.serviceAreas.map((area, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
