import React from 'react';
import { CheckCircle2, Calendar, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../data/cleaningData';

interface SparkleBannerProps {
  onBookNow: () => void;
}

export const SparkleBanner: React.FC<SparkleBannerProps> = ({ onBookNow }) => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
          
          {/* Left: Cleaner Photography */}
          <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-[420px] bg-slate-900">
            <img
              src="./images/sofa_clean.jpg"
              alt="Professional Cleaner Deep Cleaning"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src.includes('./images/sofa_clean.jpg')) {
                  target.src = '/src/assets/images/sofa_carpet_wash_1791124090580.jpg';
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent lg:hidden" />
          </div>

          {/* Right: Signature Deep Blue Content Card */}
          <div className="lg:col-span-6 bg-gradient-to-br from-sky-900 via-blue-900 to-sky-950 text-white p-8 sm:p-12 flex flex-col justify-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              We Make Your Space Sparkle
            </h2>
            
            <p className="text-sky-100/90 text-sm sm:text-base leading-relaxed">
              Experience the joy of stepping into a spotless, fresh-smelling home without lifting a finger. Our trained cleaning pros handle the grime so you can enjoy your time.
            </p>

            {/* Checklist matching reference */}
            <div className="space-y-3.5 pt-1">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-sm sm:text-base font-semibold text-white">Safe & Non-Toxic Cleaning Products</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-sm sm:text-base font-semibold text-white">Detail-Oriented Professional Cleaners</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-sm sm:text-base font-semibold text-white">Flexible Scheduling & Easy Booking</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <button
                onClick={onBookNow}
                className="px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-lg hover:shadow-xl transition-all flex items-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Now</span>
              </button>

              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="px-6 py-3.5 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Us: {CONTACT_INFO.phone}</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
