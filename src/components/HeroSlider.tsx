import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Phone, Calendar, Sparkles, ShieldCheck, Leaf, Award } from 'lucide-react';
import { HERO_SLIDES, CONTACT_INFO } from '../data/cleaningData';

interface HeroSliderProps {
  onBookService: (serviceId: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ onBookService }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, currentSlide]);

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-sky-50/70 via-white to-white overflow-hidden pt-4 pb-12 sm:pt-6 sm:pb-16"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative clean gradient background orbs */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-sky-200/25 to-emerald-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Slider Grid: Left Content (Heading & CTAs) + Right Visual (Slide Image & Overlays) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[500px]">
          
          {/* Left Text Column: Dynamically changes heading & info with current slide */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Category / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs sm:text-sm font-bold shadow-2xs">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>{activeSlide.category}</span>
              <span className="text-slate-400">·</span>
              <span className="text-emerald-700 font-semibold">Ghaziabad & NCR</span>
            </div>

            {/* Dynamic Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] transition-all duration-300">
              {activeSlide.title}
            </h1>

            {/* Dynamic Subheading */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {activeSlide.subtitle}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onBookService(activeSlide.serviceId)}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 hover:from-sky-700 hover:to-blue-800 text-white font-bold text-base shadow-lg shadow-sky-600/30 hover:shadow-xl hover:shadow-sky-600/40 transform hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>{activeSlide.ctaText}</span>
              </button>

              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl border-2 border-emerald-600 bg-white hover:bg-emerald-50 text-emerald-800 font-bold text-base shadow-xs hover:border-emerald-700 transition-all"
              >
                <Phone className="w-5 h-5 text-emerald-600" />
                <span>Call: {CONTACT_INFO.phone}</span>
              </a>
            </div>

            {/* Three key trust badges matching reference design (Eco-Friendly, Verified Cleaners, Satisfaction Guaranteed) */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-3 text-center sm:text-left">
              <div className="space-y-1">
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto sm:mx-0">
                  <Leaf className="w-5 h-5" />
                </div>
                <h2 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">Eco-Friendly Products</h2>
                <p className="text-[11px] text-slate-500 hidden sm:block">Safe for kids & pets</p>
              </div>

              <div className="space-y-1">
                <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center mx-auto sm:mx-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h2 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">Verified Cleaners</h2>
                <p className="text-[11px] text-slate-500 hidden sm:block">Trained & background-checked</p>
              </div>

              <div className="space-y-1">
                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mx-auto sm:mx-0">
                  <Award className="w-5 h-5" />
                </div>
                <h2 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">100% Satisfaction</h2>
                <p className="text-[11px] text-slate-500 hidden sm:block">Re-clean guarantee</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Slider Image with Navigation & Overlays */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-sky-950/15 border-4 border-white aspect-[16/10] sm:aspect-[16/10] bg-slate-900">
              {/* Slides Container */}
              {HERO_SLIDES.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transform scale-100 hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src.includes('home_clean.jpg')) {
                        target.src = '/src/assets/images/home_deep_clean_1791124054725.jpg';
                      } else if (target.src.includes('kitchen_clean.jpg')) {
                        target.src = '/src/assets/images/kitchen_cleaning_1791124067324.jpg';
                      } else if (target.src.includes('bathroom_clean.jpg')) {
                        target.src = '/src/assets/images/bathroom_cleaning_1791124077909.jpg';
                      } else if (target.src.includes('sofa_clean.jpg')) {
                        target.src = '/src/assets/images/sofa_carpet_wash_1791124090580.jpg';
                      }
                    }}
                  />
                  {/* Subtle vignette gradient for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-900/20" />

                  {/* Slide text overlay bottom badge */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white z-20 flex justify-between items-end">
                    <div className="bg-slate-900/75 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 max-w-sm">
                      <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                        Service Highlight
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-white truncate">
                        {slide.title}
                      </p>
                    </div>

                    <button
                      onClick={() => onBookService(slide.serviceId)}
                      className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md cursor-pointer transition-colors"
                    >
                      <span>Book This</span>
                    </button>
                  </div>
                </div>
              ))}

              {/* 100% Satisfaction Floating Stamp Badge (matching reference mockup!) */}
              <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 shadow-lg border border-sky-100 flex items-center gap-2 sm:gap-2.5 animate-bounce-subtle">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center font-extrabold text-xs shadow-sm">
                  100%
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Quality Assurance</div>
                  <div className="text-xs sm:text-sm font-extrabold text-slate-900">Satisfaction Guaranteed</div>
                </div>
              </div>

              {/* Slider Arrow Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg backdrop-blur-sm transition-all hover:scale-110 active:scale-95 cursor-pointer"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center shadow-lg backdrop-blur-sm transition-all hover:scale-110 active:scale-95 cursor-pointer"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Slider Dots & Indicators */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {HERO_SLIDES.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentSlide
                      ? 'w-8 bg-sky-600 shadow-xs'
                      : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Progress status & pause note */}
            <div className="text-center mt-1 text-[11px] text-slate-400">
              Slide {currentSlide + 1} of {HERO_SLIDES.length} · Auto-sliding (Hover to pause)
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
