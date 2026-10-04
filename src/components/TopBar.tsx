import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../data/cleaningData';

// Custom icons for the 4 social networks at the very top
const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const TwitterXIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const TopBar: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-sky-900/40 relative z-30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Contact info snippets */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 text-slate-300">
          <a
            href={`tel:${CONTACT_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>{CONTACT_INFO.phone}</span>
          </a>

          <a
            href={`mailto:${CONTACT_INFO.displayEmail}`}
            className="flex items-center gap-1.5 hover:text-sky-300 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-sky-400" />
            <span>{CONTACT_INFO.displayEmail}</span>
          </a>

          <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>Ghaziabad, Uttar Pradesh</span>
          </div>
        </div>

        {/* 4 Social Media Icons at the very top as requested */}
        <div className="flex items-center gap-3">
          <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">Follow Us:</span>
          <div className="flex items-center gap-1.5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-7 h-7 rounded-full bg-slate-800/80 hover:bg-sky-600 text-slate-200 hover:text-white flex items-center justify-center transition-all border border-slate-700/60"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-7 h-7 rounded-full bg-slate-800/80 hover:bg-gradient-to-tr hover:from-amber-600 hover:to-pink-600 text-slate-200 hover:text-white flex items-center justify-center transition-all border border-slate-700/60"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-7 h-7 rounded-full bg-slate-800/80 hover:bg-red-600 text-slate-200 hover:text-white flex items-center justify-center transition-all border border-slate-700/60"
            >
              <YoutubeIcon />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="w-7 h-7 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white flex items-center justify-center transition-all border border-slate-700/60"
            >
              <TwitterXIcon />
            </a>
          </div>

          <div className="h-3 w-px bg-slate-700 mx-1 hidden sm:block" />

          {/* WhatsApp top quick trigger */}
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Janvi Cleaning! I need deep cleaning services in Ghaziabad.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </div>
  );
};
