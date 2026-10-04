import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { ServicesSection } from './components/ServicesSection';
import { AboutUs } from './components/AboutUs';
import { WhyChooseUs } from './components/WhyChooseUs';
import { SparkleBanner } from './components/SparkleBanner';
import { HowItWorks } from './components/HowItWorks';
import { PricingSection } from './components/PricingSection';
import { Testimonials } from './components/Testimonials';
import { EnquiryForm } from './components/EnquiryForm';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>('home-cleaning');

  const scrollToEnquiryForm = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceForBooking(serviceId);
    }
    const formElement = document.getElementById('enquiry-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-sky-500 selection:text-white">
      {/* 4 Social Media links & Quick Contact at the very top */}
      <TopBar />

      {/* Main Navigation with Logo (No text next to it) + Home, About Us, Services, Contact, Book Now */}
      <Navbar onBookNowClick={scrollToEnquiryForm} />

      <main className="flex-grow">
        {/* 4-5 Image Hero Slider with dynamic headlines matching services */}
        <HeroSlider onBookService={scrollToEnquiryForm} />

        {/* 6 Specialized Cleaning Services (Reference Layout with Signature Navy Card) */}
        <ServicesSection onSelectService={scrollToEnquiryForm} />

        {/* About Us Section */}
        <AboutUs />

        {/* Why Choose Us & Key Metrics */}
        <WhyChooseUs />

        {/* "We Make Your Space Sparkle" Feature Banner */}
        <SparkleBanner onBookNow={() => scrollToEnquiryForm()} />

        {/* How It Works (3 Steps) */}
        <HowItWorks onBookNow={() => scrollToEnquiryForm()} />

        {/* Simple & Transparent Pricing */}
        <PricingSection onSelectPackage={scrollToEnquiryForm} />

        {/* Client Reviews / Testimonials */}
        <Testimonials />

        {/* Dedicated Enquiry & Booking Form (Attached to valmikivikash824@gmail.com) */}
        <EnquiryForm preselectedServiceId={selectedServiceForBooking} />

        {/* Contact Info (info@janvicleaning.com, +91 9289385933, Ghaziabad) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onBookNowClick={() => scrollToEnquiryForm()} />

      {/* Sticky Floating Call & WhatsApp Buttons */}
      <FloatingActions onBookNowClick={() => scrollToEnquiryForm()} />
    </div>
  );
}
