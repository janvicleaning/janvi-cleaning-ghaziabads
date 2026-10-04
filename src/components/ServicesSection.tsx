import React from 'react';
import { Home, Sparkles, Building2, Armchair, UtensilsCrossed, Bath, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/cleaningData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'Home':
      return <Home className="w-6 h-6 text-sky-600" />;
    case 'Sparkles':
      return <Sparkles className="w-6 h-6 text-emerald-600" />;
    case 'Building2':
      return <Building2 className="w-6 h-6 text-blue-600" />;
    case 'Armchair':
      return <Armchair className="w-6 h-6 text-amber-600" />;
    case 'UtensilsCrossed':
      return <UtensilsCrossed className="w-6 h-6 text-rose-600" />;
    case 'Bath':
      return <Bath className="w-6 h-6 text-cyan-600" />;
    default:
      return <Sparkles className="w-6 h-6 text-sky-600" />;
  }
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Text */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3 py-1 rounded-full mb-3">
            <span>Specialized Cleaning Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Professional Cleaning Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            From complete residential deep cleaning to specialized kitchen degreasing and corporate office sanitization in Ghaziabad.
          </p>
        </div>

        {/* Reference Layout: Left Signature Royal Blue Card + Right 2x3 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Royal Blue Anchor Card (matching reference image) */}
          <div className="lg:col-span-4 rounded-3xl bg-gradient-to-br from-sky-900 via-blue-900 to-sky-950 text-white p-8 sm:p-10 flex flex-col justify-between shadow-xl shadow-sky-950/20 relative overflow-hidden">
            {/* Background ambient shine */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <Sparkles className="w-6 h-6 text-emerald-400" />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  Our Cleaning Services
                </h3>
                <p className="mt-3 text-sky-100/80 text-sm sm:text-base leading-relaxed">
                  From standard regular cleaning to deep sanitization and heavy stain restoration — we've got your space completely covered in Ghaziabad.
                </p>
              </div>

              {/* Service guarantee checklist */}
              <div className="space-y-3 pt-2 text-sm text-sky-100">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Non-toxic, kid & pet-safe chemicals</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>High-pressure steam & scrub machines</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Same-day booking in Ghaziabad</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Trained, verified and uniformed staff</span>
                </div>
              </div>
            </div>

            <div className="pt-8 relative z-10">
              <button
                onClick={() => onSelectService('home-cleaning')}
                className="w-full py-3.5 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Now & Get 15% Off</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right 2x3 Grid of 6 Distinct Services (matching reference image cards) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {SERVICES.map((service: ServiceItem) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between group relative"
              >
                {service.popular && (
                  <span className="absolute top-4 right-4 bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    Most Booked
                  </span>
                )}

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-sky-50 transition-all duration-200">
                    {getServiceIcon(service.iconName)}
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                      {service.title}
                    </h4>
                    <p className="mt-1 text-sm text-slate-500 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Bullet features */}
                  <ul className="space-y-1.5 pt-1 text-xs text-slate-600">
                    {service.features.slice(0, 3).map((feat: string, i: number) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400 block font-medium">Starts from</span>
                    <span className="text-base font-extrabold text-slate-900">{service.startingPrice}</span>
                  </div>

                  <button
                    onClick={() => onSelectService(service.id)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-sky-50 hover:bg-sky-600 text-sky-700 hover:text-white text-xs font-bold transition-all cursor-pointer shadow-2xs"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
