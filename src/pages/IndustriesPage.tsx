import React from 'react';
import { 
  Factory, 
  Building2, 
  Wrench, 
  Cog, 
  FileCheck, 
  TrendingUp, 
  Layers, 
  ArrowRight, 
  ArrowUpRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { NavPage, QuoteFormData } from '../types';

interface IndustriesPageProps {
  onNavigate: (page: NavPage) => void;
  onRequestQuote: (category?: QuoteFormData['category']) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({
  onNavigate,
  onRequestQuote
}) => {
  const iconMap: Record<string, React.ReactNode> = {
    Factory: <Factory className="w-5 h-5" />,
    Building2: <Building2 className="w-5 h-5" />,
    Wrench: <Wrench className="w-5 h-5" />,
    Cog: <Cog className="w-5 h-5" />,
    FileCheck: <FileCheck className="w-5 h-5" />,
    TrendingUp: <TrendingUp className="w-5 h-5" />,
    Layers: <Layers className="w-5 h-5" />
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
            <span>Target Markets</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl">
            Industries We Serve
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Supporting organizations and professionals whose work depends on reliable products, genuine components, and responsive supply coordination.
          </p>
        </div>
      </section>

      {/* Intro strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <h2 className="text-xl font-bold text-slate-900">
              Recurring Operational Needs & Project-Specific Procurement
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              NOMAQ GROUP PLC is positioned to support both long-term recurring industrial supply cycles and project-specific procurement schedules with disciplined documentation and local stock availability.
            </p>
          </div>
          <button
            onClick={() => onRequestQuote('general')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-500 hover:to-purple-600 rounded-xl transition-all shrink-0 shadow-sm shadow-indigo-500/20"
          >
            <span>Discuss Sourcing Plan</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-purple-200" />
          </button>
        </div>
      </section>

      {/* The 7 Industry Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY_INFO.industriesServed.map((ind, idx) => (
            <div
              key={ind.id}
              className="p-6 bg-white border border-slate-200/90 rounded-3xl shadow-xs hover:border-purple-300 hover:shadow-lg transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:text-white transition-all shadow-xs">
                    {iconMap[ind.icon] || <Factory className="w-5 h-5" />}
                  </div>
                  <span className="text-xs font-mono text-purple-700 font-bold">
                    SECTOR 0{idx + 1}
                  </span>
                </div>

                <div>
                  <div className="text-xs font-mono text-purple-700 font-semibold uppercase tracking-wider mb-1">
                    {ind.role}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {ind.name}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {ind.description}
                </p>

                <div className="pt-2 border-t border-slate-100 space-y-2">
                  <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">
                    Common Procurement Areas:
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-700">
                    {ind.needs.map((need, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                        <span>{need}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => onRequestQuote('general')}
                  className="w-full py-2.5 text-xs font-bold text-slate-900 bg-slate-50 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-700 hover:text-white rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>Request RFQ for Sector</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Procurement Assurance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#080C1A] text-white rounded-3xl p-8 sm:p-10 border border-indigo-950 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-2xl">
          <div className="space-y-2 max-w-2xl relative z-10">
            <div className="text-xs font-mono text-purple-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              Procurement Assurance
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Structured Supply Agreements & Verification
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We collaborate with manufacturers and supply partners of genuine products, ensuring documentation, serial compatibility, and transit terms are confirmed before commercial commitment.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 rounded-xl transition-all shrink-0 shadow-lg shadow-purple-600/25 relative z-10"
          >
            <span>Contact Procurement Desk</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
