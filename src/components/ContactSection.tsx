import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/cleaningData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-100/70 px-3 py-1 rounded-full mb-3">
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact Janvi Cleaning
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Have questions or need emergency cleaning? We are available 7 days a week across Ghaziabad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Cards Left Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* Phone Card */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3 hover:border-emerald-300 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Call Anytime</span>
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="text-lg font-bold text-slate-900 hover:text-emerald-600 transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
                <p className="text-xs text-slate-500 mt-1">Direct supervisor helpline</p>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3 hover:border-emerald-300 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">WhatsApp Chat</span>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent('Hello! I would like to book cleaning services in Ghaziabad.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-slate-900 hover:text-emerald-600 transition-colors"
                >
                  +91 9289385933
                </a>
                <p className="text-xs text-slate-500 mt-1">Instant photo estimation & quotes</p>
              </div>
            </div>

            {/* Email Display Card */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3 hover:border-sky-300 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Official Email</span>
                <a
                  href={`mailto:${CONTACT_INFO.displayEmail}`}
                  className="text-base font-bold text-slate-900 hover:text-sky-600 transition-colors"
                >
                  {CONTACT_INFO.displayEmail}
                </a>
                <p className="text-xs text-slate-500 mt-1">For corporate & partnership inquiries</p>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3 hover:border-amber-300 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Working Hours</span>
                <div className="text-base font-bold text-slate-900">
                  8:00 AM – 9:00 PM
                </div>
                <p className="text-xs text-slate-500 mt-1">Open all 7 days including holidays</p>
              </div>
            </div>

            {/* Address Full Width */}
            <div className="sm:col-span-2 bg-slate-50 rounded-2xl p-6 border border-slate-200/80 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Office Location</span>
                <div className="text-base font-bold text-slate-900">
                  {CONTACT_INFO.address}
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Serving Raj Nagar, Indirapuram, Vaishali, Vasundhara, Raj Nagar Extension, Crossings Republik, Kaushambi and surrounding NCR.
                </p>
              </div>
            </div>

          </div>

          {/* Interactive Map / Coverage Panel Right Column */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-sky-900 to-slate-900 text-white p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="space-y-5 relative z-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-white/10 px-3 py-1 rounded-full">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Ghaziabad Verified Hub</span>
              </div>

              <h3 className="text-2xl font-extrabold text-white">
                Doorstep Service in 60 Minutes
              </h3>

              <p className="text-sm text-sky-100/80 leading-relaxed">
                Our mobile cleaning teams are stationed across major residential zones in Ghaziabad with fully equipped vans carrying commercial scrubbers, vacs, and eco-safe supplies.
              </p>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-bold text-sky-300 uppercase tracking-wider">Fast Service Hubs:</div>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-200">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>RDC Raj Nagar</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Indirapuram (Ahinsa Khand)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Vaishali Sector 1-9</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Vasundhara Sector 1-19</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Raj Nagar Extension</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Crossings Republik</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 relative z-10">
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now: {CONTACT_INFO.phone}</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
