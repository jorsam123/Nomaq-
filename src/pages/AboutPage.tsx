import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Compass, 
  Building2, 
  Globe2, 
  Store, 
  Users, 
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Layers,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { NavPage, QuoteFormData } from '../types';

const WAREHOUSE_PHOTO = '/src/assets/images/hero_industrial_warehouse_1792133393557.jpg';

interface AboutPageProps {
  onNavigate: (page: NavPage) => void;
  onRequestQuote: (category?: QuoteFormData['category']) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onRequestQuote
}) => {
  return (
    <div className="space-y-20 pb-20">
      
      {/* Page Header */}
      <section className="bg-[#080C1A] text-white py-16 sm:py-20 border-b border-indigo-950 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider">
            <span>NOMAQ GROUP PLC</span>
            <span className="text-slate-600">/</span>
            <span>Corporate Identity</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl">
            About NOMAQ GROUP PLC
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Trade connectivity, locally stocked practicality, and customer-focused industrial supply across Ethiopia.
          </p>
        </div>
      </section>

      {/* 1. Company Overview & Background */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-mono font-semibold text-purple-700 uppercase tracking-wider">
                Corporate Foundations
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                Our Background & Business Focus
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              NOMAQ GROUP PLC is an Ethiopia-based import and export company serving the industrial, manufacturing, infrastructure, and construction sectors. From its offices, workshops and own machinery spare parts shop in Addis Ababa, the company helps customers access essential products that support day-to-day operations, maintenance, project delivery, and finishing work.
            </p>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              The Group's business is built around three principal areas: the import of chemicals, the supply of machinery spare parts, and the provision of aluminium and other building finishing materials. By combining product sourcing with local commercial, storage and spare-parts shop capabilities, NOMAQ GROUP PLC is positioned to support customers not only at the point of purchase, but also through the practical requirements that follow—product selection, coordination, maintenance needs, and continuity of supply.
            </p>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Its international network strengthens this local presence. Sister companies in Dubai and China extend the Group's reach into important global trading and manufacturing markets, allowing NOMAQ GROUP PLC to serve as a practical link between international manufacturers and local businesses seeking dependable industrial and construction supplies.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-500 hover:to-purple-600 rounded-xl transition-all shadow-sm shadow-indigo-500/20"
              >
                <span>Connect With Addis Ababa Headquarters</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-4/3 bg-slate-100">
              <img
                src={WAREHOUSE_PHOTO}
                alt="NOMAQ GROUP PLC warehouse facility in Addis Ababa"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 bg-purple-50/60 border border-purple-200/60 rounded-2xl text-xs text-purple-950">
              <div className="font-bold text-slate-900 mb-1">Authentic Local Footprint:</div>
              Addis Ababa operations combine corporate offices at Garad City Center with storage workshops and a dedicated machinery spare parts shop.
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="bg-[#080C1A] text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="p-8 bg-slate-900/80 border border-indigo-950 rounded-2xl space-y-4 hover:border-purple-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-semibold text-purple-400 uppercase tracking-wider block">
                Our Mission
              </span>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                "{COMPANY_INFO.mission}"
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 bg-slate-900/80 border border-indigo-950 rounded-2xl space-y-4 hover:border-indigo-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-semibold text-indigo-400 uppercase tracking-wider block">
                Our Vision
              </span>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                "{COMPANY_INFO.vision}"
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. The Six Guiding Commitments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-semibold text-purple-700 uppercase tracking-wider">
            Operational Principles
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Our Guiding Commitments
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            The core values that direct our supplier relationships, customer interactions, and day-to-day coordination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY_INFO.guidingCommitments.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-slate-200/90 rounded-2xl shadow-xs hover:border-purple-300 hover:shadow-md transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-purple-700">
                  0{idx + 1}. COMMITMENT
                </span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Organizational Structure */}
      <section className="bg-slate-100/70 border-y border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-mono font-semibold text-purple-700 uppercase tracking-wider">
              Governance & Management
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Organizational Structure
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              NOMAQ GROUP PLC is led by the Group General Manager, supported by the Office Manager, Operations Manager, and Procurement Head.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm max-w-5xl mx-auto space-y-8">
            
            {/* Tier 1: Executive Direction */}
            <div className="text-center">
              <div className="inline-block bg-gradient-to-r from-indigo-900 via-indigo-950 to-purple-950 text-white px-8 py-4 rounded-2xl shadow-md border border-indigo-800/80">
                <div className="text-sm font-extrabold tracking-tight uppercase">Group General Manager</div>
                <div className="text-xs text-purple-300 font-medium mt-0.5">Executive Direction</div>
              </div>
            </div>

            {/* Connecting Vertical Line */}
            <div className="w-px h-6 bg-indigo-200 mx-auto" />

            {/* Tier 2: Management Level (3 columns) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Office Manager */}
              <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-slate-400 font-semibold mb-1">ADMINISTRATION</div>
                  <h4 className="text-base font-bold text-slate-900">Office Manager</h4>
                  <div className="text-xs text-slate-600 font-medium mb-3">Finance, HR, Admin</div>
                  <div className="border-t border-slate-200 pt-3 space-y-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      <span>Finance & HR Officer</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      <span>Admin Officer</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operations Manager */}
              <div className="p-5 bg-indigo-50/50 border border-indigo-100 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-indigo-700 font-semibold mb-1">OVERSEAS & FREIGHT</div>
                  <h4 className="text-base font-bold text-slate-900">Operations Manager</h4>
                  <div className="text-xs text-indigo-950 font-medium mb-3">Overseas & Logistics</div>
                  <div className="border-t border-indigo-200/60 pt-3 space-y-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                      <span>Dubai & China Team</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                      <span>Supplier Follow-up</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                      <span>Shipments & Freight Liaison</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                      <span>Port & Clearance</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Procurement Head */}
              <div className="p-5 bg-purple-50/50 border border-purple-100 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-purple-700 font-semibold mb-1">SOURCING DIVISION</div>
                  <h4 className="text-base font-bold text-slate-900">Procurement Head</h4>
                  <div className="text-xs text-purple-950 font-medium mb-3">Sourcing Division</div>
                  <div className="border-t border-purple-200/60 pt-3 space-y-2 text-xs text-slate-700">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                      <span>Chemicals Sourcing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                      <span>Spare Parts Sourcing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                      <span>Aluminium Sourcing</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Connecting dashed bridge */}
            <div className="border-t border-dashed border-slate-300 pt-6">
              <div className="text-xs font-mono text-center text-slate-500 uppercase tracking-wider mb-4">
                Joint Operational Units (Supervised by Group General Manager & Procurement Head)
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
                  <div className="font-bold text-slate-900 text-sm">Sales Team</div>
                  <div className="text-xs text-slate-500 mt-0.5">Local Sales & Service</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
                  <div className="font-bold text-slate-900 text-sm">Warehouse</div>
                  <div className="text-xs text-slate-500 mt-0.5">Supervisor & Staff</div>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
                  <div className="font-bold text-slate-900 text-sm">Spare Parts Shop</div>
                  <div className="text-xs text-slate-500 mt-0.5">Shop Officer</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Approach to Customer Relationships */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#080C1A] text-white rounded-3xl p-8 sm:p-12 border border-indigo-950 space-y-6 relative overflow-hidden">
          <div className="max-w-3xl space-y-3 relative z-10">
            <span className="text-xs font-mono font-semibold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              Customer-Focused Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Our Approach to Customer Relationships
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              The company's approach is deliberately relationship-led: understand the customer's need, identify a suitable product or source, coordinate the supply process, and remain available to support the customer's operational objectives. This enables NOMAQ GROUP PLC to serve as a practical link between international manufacturers and local businesses seeking dependable industrial and construction supplies.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-4 relative z-10">
            <button
              onClick={() => onRequestQuote('general')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl transition-all shadow-md shadow-indigo-600/20"
            >
              <span>Submit a Procurement Inquiry</span>
              <ArrowUpRight className="w-4 h-4 text-purple-200" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-indigo-900/80 rounded-xl transition-colors"
            >
              <span>Visit our Addis Ababa Office</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
