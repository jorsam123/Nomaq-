import React, { useState } from 'react';
import { 
  Building, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle, 
  ShieldAlert, 
  Globe2, 
  Store,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { QuoteFormData } from '../types';

interface ContactPageProps {
  onRequestQuote: (category?: QuoteFormData['category']) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onRequestQuote
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    category: 'chemicals',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inquiryCode, setInquiryCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setInquiryCode(`MSG-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="space-y-16 pb-20">
      
      {/* Header */}
      <section className="bg-[#080C1A] text-white py-16 sm:py-20 border-b border-indigo-950 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider">
            <span>NOMAQ GROUP PLC</span>
            <span className="text-slate-600">/</span>
            <span>Commercial Coordination</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl">
            Contact Us · Let's Work Together
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Reach out for product enquiries, commercial partnerships, bill of quantities review, and sourcing requirements.
          </p>
        </div>
      </section>

      {/* Contact Cards & Form Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Coordinates & Location Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono font-semibold text-purple-700 uppercase tracking-wider">
                Operating Base
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">
                Addis Ababa Headquarters
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Our main executive and commercial offices are conveniently located at Garad City Center on Bole Wollo Sefer.
              </p>
            </div>

            {/* Office Location Card */}
            <div className="p-5 bg-white border border-slate-200/90 rounded-2xl shadow-xs space-y-3 hover:border-indigo-300 transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-900 to-purple-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Building className="w-5 h-5 text-purple-300" />
                </div>
                <div>
                  <div className="text-xs font-mono text-purple-700 font-semibold uppercase">
                    Office Location
                  </div>
                  <div className="text-base font-bold text-slate-900 mt-0.5">
                    Garad City Center, 6th Floor
                  </div>
                  <div className="text-xs text-slate-600">
                    Bole Wollo Sefer, Addis Ababa
                  </div>
                </div>
              </div>
            </div>

            {/* Office Address Card */}
            <div className="p-5 bg-white border border-slate-200/90 rounded-2xl shadow-xs space-y-3 hover:border-indigo-300 transition-colors">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-indigo-700" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 font-semibold uppercase">
                    Official Registered Address
                  </div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">
                    Addis Ababa, Ethiopia
                  </div>
                  <div className="text-xs text-slate-600">
                    Kirkos Sub City, Woreda 09, House No.: New
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Communication Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-white border border-slate-200/90 rounded-2xl shadow-xs space-y-1 hover:border-indigo-300 transition-colors">
                <div className="text-xs font-mono text-purple-700 uppercase font-semibold">
                  Telephone
                </div>
                <a 
                  href="tel:0911136285"
                  className="text-sm font-bold text-slate-900 hover:text-indigo-600 block transition-colors font-mono"
                >
                  0911 136285
                </a>
                <div className="text-[11px] text-slate-500">
                  +251 911 136 285
                </div>
              </div>

              <div className="p-5 bg-white border border-slate-200/90 rounded-2xl shadow-xs space-y-1 hover:border-indigo-300 transition-colors">
                <div className="text-xs font-mono text-purple-700 uppercase font-semibold">
                  Email Desk
                </div>
                <a 
                  href="mailto:nomaqgroup@gmail.com"
                  className="text-sm font-bold text-indigo-700 hover:text-purple-700 hover:underline block break-all"
                >
                  nomaqgroup@gmail.com
                </a>
                <div className="text-[11px] text-slate-500">
                  Commercial inquiries
                </div>
              </div>
            </div>

            {/* International Links Info */}
            <div className="p-5 bg-[#080C1A] text-white rounded-2xl border border-indigo-950 space-y-3 text-xs">
              <div className="font-bold text-purple-400 uppercase tracking-wider font-mono flex items-center gap-1.5">
                <Globe2 className="w-3.5 h-3.5 text-purple-400" />
                International Sister Companies
              </div>
              <div className="space-y-2 text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  <span><strong>Dubai, UAE:</strong> Sister company for Middle East trade & logistics</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span><strong>China:</strong> Sister company for manufacturing engagement</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
              
              <div>
                <span className="text-xs font-mono font-semibold text-purple-700 uppercase tracking-wider">
                  Direct Commercial Desk
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  Send a Direct Message or Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Our commercial team responds promptly to product requests and technical inquiries.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto border border-purple-200">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <div className="text-xs font-mono uppercase text-slate-500">
                    Transmission Reference
                  </div>
                  <div className="text-2xl font-black font-mono text-indigo-950">
                    {inquiryCode}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Thank you for contacting NOMAQ GROUP PLC
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been routed to our commercial management team in Addis Ababa. We will reach back via <strong>{formData.email}</strong> or <strong>{formData.phone}</strong>.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          company: '',
                          email: '',
                          phone: '',
                          subject: '',
                          category: 'chemicals',
                          message: ''
                        });
                      }}
                      className="px-5 py-2 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl transition-all shadow-xs"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jordan Zewdu"
                        className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 text-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Company or Project <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Manufacturing / Construction PLC"
                        className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@domain.com"
                        className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 text-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0911 123456"
                        className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Interest Category
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 text-slate-900"
                      >
                        <option value="chemicals">Chemicals Import & Supply</option>
                        <option value="machinery">Machinery & Excavator Spare Parts</option>
                        <option value="aluminium">Aluminium & Building Finishing Materials</option>
                        <option value="sourcing">International Sourcing & Logistics</option>
                        <option value="shop">Addis Ababa Spare Parts Shop Counter</option>
                        <option value="general">General Commercial Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Inquiring on excavator parts availability"
                        className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 text-slate-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Message / Specifications Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Detail your requirements, quantities, machine models, or timing..."
                      className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600 text-slate-900 resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-slate-500">
                      Direct email: <strong className="text-indigo-950 font-medium">nomaqgroup@gmail.com</strong>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl transition-all shadow-sm shadow-indigo-600/20 disabled:opacity-50"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* Interactive Location Visualizer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#080C1A] text-white rounded-3xl p-6 sm:p-8 border border-indigo-950 space-y-4 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-purple-400 font-semibold uppercase">
                Addis Ababa Location Map
              </span>
              <h3 className="text-xl font-bold text-white mt-0.5">
                Garad City Center · Bole Wollo Sefer
              </h3>
            </div>
            <a
              href="https://maps.google.com/?q=Garad+City+Center+Addis+Ababa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl transition-all self-start sm:self-auto shadow-sm"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-indigo-950 bg-slate-950 flex items-center justify-center">
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#4338CA_1px,transparent_1px)] [background-size:16px_16px]"></div>
            
            <div className="relative text-center p-6 bg-slate-900/90 border border-indigo-900/80 rounded-2xl shadow-xl max-w-md">
              <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-2 animate-bounce" />
              <div className="text-base font-bold text-white">Garad City Center, 6th Floor</div>
              <div className="text-xs text-slate-300 mt-1">Bole Wollo Sefer, Addis Ababa, Ethiopia</div>
              <div className="text-[11px] text-purple-300 mt-2 font-mono">
                Kirkos Sub City · Woreda 09 · House No.: New
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
