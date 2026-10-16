import React from 'react';
import { MapPin, Phone, Mail, Building, Globe, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { NavPage } from '../types';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onNavigate: (page: NavPage) => void;
  onRequestQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onRequestQuote
}) => {
  const handleNav = (page: NavPage) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080C1A] text-slate-300 border-t border-indigo-950/60 relative overflow-hidden">
      {/* Subtle purple-indigo ambient glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Pre-footer CTA Strip */}
      <div className="border-b border-indigo-950/80 bg-indigo-950/30 py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs font-semibold text-purple-400 uppercase tracking-wider font-mono">
              {COMPANY_INFO.legalName} · Addis Ababa
            </div>
            <div className="text-lg font-bold text-white tracking-tight">
              {COMPANY_INFO.tagline}
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => handleNav('contact')}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors"
            >
              <span>Contact Addis Ababa Desk</span>
            </button>
            <button
              onClick={onRequestQuote}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-lg transition-all shadow-sm shadow-indigo-500/20"
            >
              <span>Request a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-purple-200" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Company Profile (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="light" size="md" />
            <p className="text-xs text-slate-400 leading-relaxed pr-4">
              NOMAQ GROUP PLC connects Ethiopian businesses with international product sources for chemicals, machinery and excavator spare parts, aluminium systems, and building finishing materials. Sourcing relationships in Dubai and China, backed by local storage workshops and a machinery spare parts shop in Addis Ababa.
            </p>
            <div className="pt-2 text-xs text-slate-400">
              <span className="text-purple-400 font-mono font-semibold">PRIMARY MARKET:</span> Ethiopia
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-purple-300 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-purple-300 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-purple-300 transition-colors">
                  Products & Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('industries')} className="hover:text-purple-300 transition-colors">
                  Industries We Serve
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('network')} className="hover:text-purple-300 transition-colors">
                  Global Network
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-purple-300 transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Product Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100 font-mono">
              Core Categories
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-purple-300 transition-colors text-left">
                  Chemicals Import & Supply
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-purple-300 transition-colors text-left">
                  Machinery & Excavator Spare Parts
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-purple-300 transition-colors text-left">
                  Aluminium & Building Finishing Materials
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('network')} className="hover:text-purple-300 transition-colors text-left">
                  International Sourcing & Trade Coordination
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-purple-300 transition-colors text-left">
                  Local Storage & Spare Parts Shop
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Coordinates (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100 font-mono">
              Addis Ababa Office
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <Building className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Garad City Center, 6th Floor</div>
                  <div className="text-slate-400">Bole Wollo Sefer, Addis Ababa</div>
                  <div className="text-[11px] text-slate-500">Kirkos Sub City, Woreda 09, House No.: New</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-purple-400 shrink-0" />
                <a href="tel:0911136285" className="hover:text-white font-medium">
                  0911 136285 (+251 911 136 285)
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <a href="mailto:nomaqgroup@gmail.com" className="hover:text-white font-medium">
                  nomaqgroup@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Globe className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div className="text-slate-400">
                  <span className="text-white font-semibold">International Network:</span> Ethiopia · Dubai (UAE) · China
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {COMPANY_INFO.year} {COMPANY_INFO.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Import & Export Trading Company</span>
            <span>·</span>
            <span>Addis Ababa, Ethiopia</span>
            <span>·</span>
            <span>Garad City Center 6th Floor</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
