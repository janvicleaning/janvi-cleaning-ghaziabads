import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Phone, Calendar, Clock, MapPin, Sparkles, MessageSquare, AlertCircle } from 'lucide-react';
import { SERVICES, CONTACT_INFO } from '../data/cleaningData';

interface EnquiryFormProps {
  preselectedServiceId?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ preselectedServiceId }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceId: preselectedServiceId || 'home-cleaning',
    propertyType: '3 BHK Apartment',
    locality: 'Raj Nagar Extension',
    preferredDate: '',
    preferredTime: 'Morning (09:00 AM - 12:00 PM)',
    specialInstructions: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  // Update selected service if parent prop changes
  useEffect(() => {
    if (preselectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: preselectedServiceId }));
    }
  }, [preselectedServiceId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const selectedServiceObj = SERVICES.find((s) => s.id === formData.serviceId) || SERVICES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert('Please fill in your Name and Phone Number.');
      return;
    }

    const refCode = 'JC-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(refCode);
    setSubmitted(true);

    // Prepare email payload to valmikivikash824@gmail.com as explicitly requested:
    // "and jo Enquary form me jo attach rehega aur oo ye gmail rehega valmikivikash824@gmail.com"
    const subject = encodeURIComponent(`New Cleaning Booking [${refCode}] - ${formData.fullName} (Ghaziabad)`);
    const body = encodeURIComponent(
      `Hello Janvi Cleaning Team,\n\n` +
      `You have received a new cleaning booking enquiry from the website:\n\n` +
      `Booking Reference: ${refCode}\n` +
      `Customer Name: ${formData.fullName}\n` +
      `Customer Phone: ${formData.phone}\n` +
      `Customer Email: ${formData.email || 'Not provided'}\n` +
      `Selected Service: ${selectedServiceObj.title}\n` +
      `Property Type: ${formData.propertyType}\n` +
      `Locality / Area: ${formData.locality}, Ghaziabad\n` +
      `Preferred Date: ${formData.preferredDate || 'Earliest available'}\n` +
      `Preferred Time Slot: ${formData.preferredTime}\n` +
      `Special Instructions: ${formData.specialInstructions || 'None'}\n\n` +
      `-- Sent from Janvi Cleaning Website Enquiry Form`
    );

    // Automatically trigger mailto link to valmikivikash824@gmail.com
    const mailtoUrl = `mailto:${CONTACT_INFO.enquiryEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  };

  const getWhatsAppBookingUrl = () => {
    const text = encodeURIComponent(
      `*New Janvi Cleaning Booking Enquiry*\n` +
      `*Ref:* ${bookingRef || 'JC-DIRECT'}\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Service:* ${selectedServiceObj.title}\n` +
      `*Property:* ${formData.propertyType}\n` +
      `*Locality:* ${formData.locality}, Ghaziabad\n` +
      `*Date/Time:* ${formData.preferredDate || 'Flexible'} (${formData.preferredTime})\n` +
      `*Notes:* ${formData.specialInstructions || 'Please share quote.'}`
    );
    return `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${text}`;
  };

  return (
    <section id="enquiry-form" className="py-16 sm:py-24 bg-gradient-to-b from-white via-sky-50/50 to-white relative scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Form Container Card with Royal Blue & Fresh Green accents */}
        <div className="bg-white rounded-3xl shadow-2xl border border-sky-100 overflow-hidden">
          
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-sky-900 via-blue-900 to-sky-950 text-white p-6 sm:p-10 relative">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-white/10 px-3 py-1 rounded-full mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Instant Booking & Free Quote</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Schedule Your Deep Cleaning Service
                </h2>
                <p className="text-sky-200 text-sm mt-1">
                  Serving all sectors & colonies in Ghaziabad · Direct response within 15 minutes!
                </p>
              </div>

              {/* Direct call tag */}
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call +91 9289385933</span>
              </a>
            </div>
          </div>

          {/* Form Content / Success State */}
          <div className="p-6 sm:p-10">
            {submitted ? (
              <div className="text-center py-8 space-y-6 animate-in fade-in zoom-in duration-300">
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-12 h-12" />
                </div>

                <div className="space-y-2 max-w-lg mx-auto">
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    Enquiry Submitted Successfully!
                  </h3>
                  <p className="text-sm text-slate-600">
                    Thank you, <strong className="text-slate-800">{formData.fullName}</strong>. 
                    Your booking reference is <strong className="text-sky-700 font-mono">{bookingRef}</strong>.
                  </p>
                  <p className="text-xs text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-200">
                    An email has been dispatched to <strong>valmikivikash824@gmail.com</strong>. Our team supervisor will call you on <strong>{formData.phone}</strong> shortly to confirm the appointment.
                  </p>
                </div>

                {/* Instant WhatsApp confirmation CTA */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={getWhatsAppBookingUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 transition-all"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Confirm Instantly on WhatsApp (+91 9289385933)</span>
                  </a>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 font-semibold text-sm transition-all"
                  >
                    Submit Another Booking
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Row 1: Name and Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent text-sm text-slate-900 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Phone Number (Call / WhatsApp) <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent text-sm text-slate-900 bg-slate-50/50"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2: Email and Service Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. rahul@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent text-sm text-slate-900 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Service Required <span className="text-rose-500">*</span>
                    </label>
                    <select
                      name="serviceId"
                      value={formData.serviceId}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent text-sm text-slate-900 bg-slate-50/50"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.title} ({s.startingPrice})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 3: Property Type & Locality in Ghaziabad */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Property Size / Type <span className="text-rose-500">*</span>
                    </label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent text-sm text-slate-900 bg-slate-50/50"
                    >
                      <option value="1 BHK Flat / Studio">1 BHK Flat / Studio</option>
                      <option value="2 BHK Flat">2 BHK Flat</option>
                      <option value="3 BHK Apartment">3 BHK Apartment</option>
                      <option value="4 BHK / Duplex">4 BHK / Duplex</option>
                      <option value="Independent Villa / Kothi">Independent Villa / Kothi</option>
                      <option value="Commercial Office / Showroom">Commercial Office / Showroom</option>
                      <option value="Single Kitchen / Bathroom only">Single Kitchen / Bathroom only</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Locality in Ghaziabad <span className="text-rose-500">*</span>
                    </label>
                    <select
                      name="locality"
                      value={formData.locality}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent text-sm text-slate-900 bg-slate-50/50"
                    >
                      <option value="Raj Nagar & RDC">Raj Nagar & RDC</option>
                      <option value="Raj Nagar Extension">Raj Nagar Extension</option>
                      <option value="Indirapuram">Indirapuram</option>
                      <option value="Vaishali">Vaishali</option>
                      <option value="Vasundhara">Vasundhara</option>
                      <option value="Crossings Republik">Crossings Republik</option>
                      <option value="Kaushambi">Kaushambi</option>
                      <option value="Govindpuram & Shastri Nagar">Govindpuram & Shastri Nagar</option>
                      <option value="Pratap Vihar & Vijay Nagar">Pratap Vihar & Vijay Nagar</option>
                      <option value="Mohan Nagar & Sahibabad">Mohan Nagar & Sahibabad</option>
                      <option value="Siddharth Vihar">Siddharth Vihar</option>
                      <option value="Noida / Greater Noida NCR">Noida / Greater Noida NCR</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Preferred Date and Preferred Time Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent text-sm text-slate-900 bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Preferred Time Slot
                    </label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent text-sm text-slate-900 bg-slate-50/50"
                    >
                      <option value="Morning (09:00 AM - 12:00 PM)">Morning (09:00 AM - 12:00 PM)</option>
                      <option value="Afternoon (12:00 PM - 03:00 PM)">Afternoon (12:00 PM - 03:00 PM)</option>
                      <option value="Evening (03:00 PM - 07:00 PM)">Evening (03:00 PM - 07:00 PM)</option>
                      <option value="Urgent / Same Day (Immediate)">Urgent / Same Day (Immediate)</option>
                    </select>
                  </div>
                </div>

                {/* Row 5: Address details / Special instructions */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Complete Address & Special Instructions
                  </label>
                  <textarea
                    name="specialInstructions"
                    rows={3}
                    placeholder="Enter flat / house number, society name, landmark, or specific requests (e.g. balcony pigeon poop cleaning, deep chimney grease, extra sofa seats)..."
                    value={formData.specialInstructions}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent text-sm text-slate-900 bg-slate-50/50"
                  />
                </div>

                {/* Note about target email */}
                <div className="flex items-center gap-2 text-xs text-slate-500 bg-sky-50/70 p-3 rounded-xl border border-sky-100">
                  <AlertCircle className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>
                    Your booking request will be received at <strong>valmikivikash824@gmail.com</strong> and you can also send it to our WhatsApp helpline (+91 9289385933) for instant verification.
                  </span>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-sky-600 via-blue-600 to-sky-700 hover:from-sky-700 hover:to-blue-800 text-white font-bold text-base shadow-xl shadow-sky-600/30 hover:shadow-2xl transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5"
                  >
                    <Send className="w-5 h-5" />
                    <span>Submit Booking Enquiry & Get 15% Off</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
