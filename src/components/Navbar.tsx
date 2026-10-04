import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, ChevronDown } from 'lucide-react';
import { JanviLogo } from './JanviLogo';
import { CONTACT_INFO, SERVICES } from '../data/cleaningData';

interface NavbarProps {
  onBookNowClick: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookNowClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookNow = (serviceId?: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    onBookNowClick(serviceId);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-22">
          {/* Logo alone - Notice: NO business name text next to the logo as requested: "Logo ke pass business name nahi hona chaiye" */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="flex items-center group py-2"
            aria-label="Janvi Cleaning Home"
          >
            <JanviLogo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-slate-700">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:text-sky-600 transition-colors cursor-pointer py-2"
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection('about-us')}
              className="hover:text-sky-600 transition-colors cursor-pointer py-2"
            >
              About us
            </button>

            {/* Services with subtle clean dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={() => scrollToSection('services')}
                className="flex items-center gap-1 hover:text-sky-600 transition-colors cursor-pointer"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-sky-600 transition-transform duration-200" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-100 py-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-4 py-1 text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Our Cleaning Services
                  </div>
                  <div className="divide-y divide-slate-50 mt-1">
                    {SERVICES.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => {
                          scrollToSection('services');
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-sky-50 hover:text-sky-700 transition-colors flex items-center justify-between"
                      >
                        <span className="font-medium">{s.title}</span>
                        <span className="text-xs font-semibold text-emerald-600">{s.startingPrice}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="hover:text-sky-600 transition-colors cursor-pointer py-2"
            >
              Contact
            </button>
          </nav>

          {/* Right Action: Call Us + BOOK NOW Button (right after Contact) */}
          <div className="hidden sm:flex items-center gap-5">
            {/* Quick Call Header Widget */}
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="flex items-center gap-2.5 text-right group"
            >
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200 shadow-xs">
                <Phone className="w-4 h-4" />
              </div>
              <div className="hidden xl:block text-left">
                <span className="block text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                  Call Us Anytime
                </span>
                <span className="block text-sm font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">
                  {CONTACT_INFO.phone}
                </span>
              </div>
            </a>

            {/* Book Now Button right after Contact / Call */}
            <button
              onClick={() => handleBookNow()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white font-bold text-sm shadow-md shadow-sky-600/25 hover:shadow-lg hover:shadow-sky-600/30 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => handleBookNow()}
              className="sm:hidden px-3.5 py-2 rounded-lg bg-sky-600 text-white font-bold text-xs shadow-xs"
            >
              Book Now
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-4 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3 font-semibold text-slate-700">
            <button
              onClick={() => scrollToSection('home')}
              className="text-left px-3 py-2 rounded-lg hover:bg-sky-50 hover:text-sky-600"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about-us')}
              className="text-left px-3 py-2 rounded-lg hover:bg-sky-50 hover:text-sky-600"
            >
              About us
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-left px-3 py-2 rounded-lg hover:bg-sky-50 hover:text-sky-600"
            >
              Services (6 Professional Services)
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left px-3 py-2 rounded-lg hover:bg-sky-50 hover:text-sky-600"
            >
              Contact
            </button>
          </nav>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-3">
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-800 font-bold text-sm"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>Call: {CONTACT_INFO.phone}</span>
            </a>

            <button
              onClick={() => handleBookNow()}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Now (Enquiry Form)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
