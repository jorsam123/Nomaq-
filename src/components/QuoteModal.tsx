import React, { useState } from 'react';
import { X, CheckCircle, Send, Phone, ShieldAlert, Sparkles } from 'lucide-react';
import { QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: QuoteFormData['category'];
  initialItem?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialCategory = 'general',
  initialItem = ''
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    category: initialCategory,
    specificItem: initialItem,
    quantity: '',
    destination: 'Addis Ababa',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [rfqNumber, setRfqNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      const generatedCode = `NMQ-${Math.floor(100000 + Math.random() * 900000)}`;
      setRfqNumber(generatedCode);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      category: 'general',
      specificItem: '',
      quantity: '',
      destination: 'Addis Ababa',
      notes: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-indigo-100 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Header */}
        <div className="bg-[#0B1021] px-6 py-5 text-white flex items-center justify-between border-b border-indigo-950 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-32 bg-indigo-600/10 rounded-full blur-2xl pointer-events-none" />
          <div className="relative z-10">
            <span className="text-purple-400 text-xs font-semibold tracking-wider uppercase font-mono flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              NOMAQ GROUP PLC · Procurement Desk
            </span>
            <h2 className="text-xl font-bold text-white tracking-tight mt-0.5">
              Request a Commercial Supply Quote
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors relative z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-purple-200">
              <CheckCircle className="w-8 h-8" />
            </div>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500">
              Inquiry Reference Code
            </span>
            <div className="text-2xl font-black font-mono text-indigo-950 mt-1 mb-3">
              {rfqNumber}
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Commercial Inquiry Received
            </h3>
            <p className="text-sm text-slate-600 max-w-lg mx-auto mb-6 leading-relaxed">
              Thank you, <strong>{formData.fullName}</strong>. Your quotation request for{' '}
              <strong>{formData.specificItem || formData.category}</strong> has been logged with our Addis Ababa procurement and sourcing team.
            </p>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-left text-xs text-slate-700 space-y-2 mb-6">
              <div className="font-semibold text-slate-900">Next Steps:</div>
              <div>1. Our technical sourcing desk in Addis Ababa will review compatibility & specifications.</div>
              <div>2. Sister company liaisons in Dubai / China will confirm international batch pricing & transit options.</div>
              <div>3. You will receive an official proforma invoice or call at <strong>{formData.phone}</strong>.</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <button
                onClick={resetForm}
                className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-medium text-xs rounded-lg hover:from-indigo-500 hover:to-purple-600 transition-all shadow-sm"
              >
                Close & Return
              </button>
              <a
                href="tel:0911136285"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-slate-300 text-slate-700 font-medium text-xs rounded-lg hover:bg-slate-100 transition-colors"
              >
                <Phone className="w-4 h-4 text-purple-600" />
                Call Directly: 0911 136285
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            {/* Specification Notice */}
            <div className="flex items-start gap-2.5 p-3.5 bg-purple-50/80 border border-purple-200/80 rounded-xl text-xs text-purple-950">
              <ShieldAlert className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
              <span>
                <strong>Specification Notice:</strong> Specific product availability, technical specifications, handling requirements, and regulatory documentation are confirmed for each order and application.
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Jordan Zewdu"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Company / Project Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="e.g. Blue Nile Construction PLC"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Telephone (Ethiopia / Int'l) <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. 0911 123456"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-slate-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Product Category <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value as QuoteFormData['category'] })}
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-slate-900"
                >
                  <option value="chemicals">Chemicals Import & Supply</option>
                  <option value="machinery">Machinery & Excavator Spare Parts</option>
                  <option value="aluminium">Aluminium & Building Finishing Materials</option>
                  <option value="sourcing">International Sourcing & Trade Coordination</option>
                  <option value="general">General Commercial Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Destination / Delivery Site
                </label>
                <input
                  type="text"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  placeholder="e.g. Addis Ababa / Project site"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-slate-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Specific Item / Part Description / Model
                </label>
                <input
                  type="text"
                  value={formData.specificItem}
                  onChange={(e) => setFormData({ ...formData, specificItem: e.target.value })}
                  placeholder="e.g. CAT 320D Track Links / Anodized Curtain Wall 6063-T5"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Estimated Quantity
                </label>
                <input
                  type="text"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  placeholder="e.g. 2 Sets / 10 Tons"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-slate-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Technical Specifications, Drawings, or Commercial Notes
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Include part numbers, required alloy grades, chemical CAS numbers, machine serial numbers, or timeline requirements..."
                className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-slate-900 resize-none"
              ></textarea>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-slate-100">
              <div className="text-xs text-slate-500">
                Direct phone: <strong className="text-indigo-950 font-mono">0911 136285</strong>
              </div>
              <div className="flex gap-2.5">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-500 hover:to-purple-600 active:from-indigo-800 rounded-lg transition-all shadow-sm shadow-indigo-500/20 disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  {isSubmitting ? 'Transmitting...' : 'Submit Quotation Request'}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
