import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '../data/cleaningData';

interface FloatingActionsProps {
  onBookNowClick: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onBookNowClick }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-5 sm:right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto w-11 h-11 rounded-full bg-slate-800/90 hover:bg-slate-900 text-white flex items-center justify-center shadow-lg backdrop-blur-sm transition-all hover:scale-110 active:scale-95 cursor-pointer border border-slate-700"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${CONTACT_INFO.phoneRaw}`}
        className="pointer-events-auto group flex items-center gap-2 px-4 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xl shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white"
        aria-label="Call +91 9289385933"
      >
        <div className="w-5 h-5 flex items-center justify-center animate-pulse">
          <Phone className="w-4 h-4 fill-current" />
        </div>
        <span className="hidden sm:inline font-bold">Call Us</span>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Janvi Cleaning! I would like to book cleaning services in Ghaziabad.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-xl shadow-emerald-500/35 hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white"
        aria-label="WhatsApp +91 9289385933"
      >
        <div className="w-5 h-5 flex items-center justify-center">
          <MessageSquare className="w-5 h-5 fill-current" />
        </div>
        <span className="hidden sm:inline font-bold">WhatsApp</span>
      </a>

    </div>
  );
};
