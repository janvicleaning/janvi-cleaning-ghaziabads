import React from 'react';
import { Phone, Mail, MapPin, ArrowUp, Sparkles } from 'lucide-react';
import { JanviLogo } from './JanviLogo';
import { CONTACT_INFO, SERVICES } from '../data/cleaningData';

interface FooterProps {
  onBookNowClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBookNowClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Logo & Mission Statement (No text beside logo as requested) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <JanviLogo size="md" />
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Professional, reliable, and eco-friendly home & commercial deep cleaning services across Ghaziabad and NCR. Clean spaces for healthy lives.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-950/50 border border-emerald-800/60 px-3 py-1.5 rounded-xl">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Government-Approved Eco Disinfectants</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about-us')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-emerald-400 transition-colors"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={onBookNowClick}
                  className="text-amber-400 font-semibold hover:text-amber-300 transition-colors"
                >
                  Book Now
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services Catalog */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="hover:text-sky-400 transition-colors text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-2.5 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="hover:text-white font-medium text-slate-200 transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <a
                  href={`mailto:${CONTACT_INFO.displayEmail}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT_INFO.displayEmail}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onBookNowClick}
                className="w-full py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-md transition-all"
              >
                Instant Enquiry Form
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Janvi Cleaning. All rights reserved. Clean Spaces | Healthy Lives.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-slate-400">Serving Ghaziabad & NCR</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 flex items-center justify-center transition-colors border border-slate-800"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
