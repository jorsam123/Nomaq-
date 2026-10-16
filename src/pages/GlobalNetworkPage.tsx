import React, { useState } from 'react';
import { 
  Globe2, 
  MapPin, 
  Building, 
  Store, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle, 
  FileText, 
  Ship, 
  Layers,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { NavPage, QuoteFormData } from '../types';

const SHIPPING_IMG = '/src/assets/images/global_logistics_shipping_1792133395468.jpg';
const WAREHOUSE_IMG = '/src/assets/images/hero_industrial_warehouse_1792133393557.jpg';

interface GlobalNetworkPageProps {
  onNavigate: (page: NavPage) => void;
  onRequestQuote: (category?: QuoteFormData['category']) => void;
}

export const GlobalNetworkPage: React.FC<GlobalNetworkPageProps> = ({
  onNavigate,
  onRequestQuote
}) => {
  const [selectedHub, setSelectedHub] = useState<'ethiopia' | 'dubai' | 'china'>('ethiopia');

  return (
    <div className="space-y-16 pb-20">
      
      {/* Header */}
      <section className="bg-[#080C1A] text-white py-16 sm:py-20 border-b border-indigo-950 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider">
            <span>NOMAQ GROUP PLC</span>
            <span className="text-slate-600">/</span>
            <span>Trade Footprint</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl">
            Our Global Network
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            A connected operating model combining local customer understanding in Ethiopia with direct sourcing relationships in Dubai and China.
          </p>
        </div>
      </section>

      {/* Network Core Architecture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Interactive Hub Selector / Map Visualization */}
        <div className="bg-[#080C1A] text-white rounded-3xl border border-indigo-950 p-6 sm:p-10 space-y-8 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-indigo-950 pb-6 relative z-10">
            <div>
              <span className="text-xs font-mono font-semibold text-purple-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                Connected Operating Model
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                The Three Pillars of Our Trade Corridor
              </h2>
            </div>
            
            {/* Hub tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-2xl border border-indigo-950 self-start md:self-auto">
              <button
                onClick={() => setSelectedHub('ethiopia')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all ${
                  selectedHub === 'ethiopia'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                1. Addis Ababa (HQ)
              </button>
              <button
                onClick={() => setSelectedHub('dubai')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all ${
                  selectedHub === 'dubai'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                2. Dubai (Trading)
              </button>
              <button
                onClick={() => setSelectedHub('china')}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all ${
                  selectedHub === 'china'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-xs'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                3. China (Manufacturing)
              </button>
            </div>
          </div>

          {/* Hub Visual Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Interactive Schematic Diagram */}
            <div className="lg:col-span-7 bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-indigo-950 space-y-6">
              <div className="text-xs font-mono text-purple-400 uppercase tracking-wider mb-2">
                Supply Route & Coordination Topology
              </div>

              {/* Graphic Flow Nodes */}
              <div className="space-y-4">
                
                {/* Node 1: China */}
                <div 
                  onClick={() => setSelectedHub('china')}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    selectedHub === 'china'
                      ? 'bg-indigo-950/70 border-purple-400 shadow-md shadow-purple-600/10'
                      : 'bg-slate-950/60 border-indigo-950 hover:border-indigo-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 flex items-center justify-center font-mono font-bold text-xs">
                        CHN
                      </span>
                      <div>
                        <div className="text-sm font-bold text-white">China Manufacturing Base</div>
                        <div className="text-xs text-slate-400">Sister-company access to factories & raw materials</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-purple-300">Stage 1: Production</span>
                  </div>
                </div>

                {/* Arrow connector */}
                <div className="flex items-center justify-center text-slate-500">
                  <div className="h-4 w-px bg-indigo-800"></div>
                </div>

                {/* Node 2: Dubai */}
                <div 
                  onClick={() => setSelectedHub('dubai')}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    selectedHub === 'dubai'
                      ? 'bg-indigo-950/70 border-purple-400 shadow-md shadow-purple-600/10'
                      : 'bg-slate-950/60 border-indigo-950 hover:border-indigo-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-blue-500/15 text-blue-300 border border-blue-500/30 flex items-center justify-center font-mono font-bold text-xs">
                        UAE
                      </span>
                      <div>
                        <div className="text-sm font-bold text-white">Dubai Trading & Logistics Hub</div>
                        <div className="text-xs text-slate-400">Commercial coordination, regional trade & freight liaison</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-purple-300">Stage 2: Coordination</span>
                  </div>
                </div>

                {/* Arrow connector */}
                <div className="flex items-center justify-center text-slate-500">
                  <div className="h-4 w-px bg-indigo-800"></div>
                </div>

                {/* Node 3: Addis Ababa */}
                <div 
                  onClick={() => setSelectedHub('ethiopia')}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    selectedHub === 'ethiopia'
                      ? 'bg-indigo-950/70 border-purple-400 shadow-md shadow-purple-600/10'
                      : 'bg-slate-950/60 border-indigo-950 hover:border-indigo-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-lg bg-purple-500/15 text-purple-300 border border-purple-500/30 flex items-center justify-center font-mono font-bold text-xs">
                        ETH
                      </span>
                      <div>
                        <div className="text-sm font-bold text-white">Addis Ababa Local Base & Retail Shop</div>
                        <div className="text-xs text-slate-400">Garad City Center offices, workshops & machinery spare parts shop</div>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-purple-300">Stage 3: Local Handover</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Hub Detail Panel */}
            <div className="lg:col-span-5 bg-slate-900/90 p-6 sm:p-7 rounded-2xl border border-indigo-950 space-y-4">
              {selectedHub === 'ethiopia' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center gap-2 text-xs font-mono text-purple-400 font-bold uppercase">
                    <MapPin className="w-4 h-4" />
                    <span>ETHIOPIA · LOCAL BASE</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Addis Ababa, Ethiopia
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Addis Ababa is the Group's local operating base, with offices at Garad City Center, own workshops used to store imported materials, and its own machinery spare parts shop, supporting customer relationships, commercial coordination, and local product availability.
                  </p>
                  <div className="pt-2 border-t border-indigo-950 space-y-2 text-xs text-slate-400">
                    <div><strong>Key Facilities:</strong> Offices, storage workshops, spare parts shop</div>
                    <div><strong>Focus:</strong> Local customer consultation, order clarification, dispatch & shop counter sales</div>
                  </div>
                </div>
              )}

              {selectedHub === 'dubai' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center gap-2 text-xs font-mono text-purple-400 font-bold uppercase">
                    <Globe2 className="w-4 h-4" />
                    <span>UNITED ARAB EMIRATES · TRADING</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Dubai, United Arab Emirates
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    The Group's sister-company presence in Dubai provides an important connection to a major international trading and logistics center. It supports communication with suppliers, manufacturers, and commercial partners serving regional markets, including sources for aluminium systems and heavy-equipment parts.
                  </p>
                  <div className="pt-2 border-t border-indigo-950 space-y-2 text-xs text-slate-400">
                    <div><strong>Key Function:</strong> International trading link & logistics channel</div>
                    <div><strong>Focus:</strong> Supplier liaison, commercial negotiations & regional freight coordination</div>
                  </div>
                </div>
              )}

              {selectedHub === 'china' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="flex items-center gap-2 text-xs font-mono text-purple-400 font-bold uppercase">
                    <Layers className="w-4 h-4" />
                    <span>CHINA · MANUFACTURING</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    China Manufacturing Base
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    The Group's sister-company presence in China extends its access to a major manufacturing base. It supports engagement with manufacturers and product sources, particularly for industrial supplies, excavator and machinery-related requirements, aluminium systems, and construction-related materials.
                  </p>
                  <div className="pt-2 border-t border-indigo-950 space-y-2 text-xs text-slate-400">
                    <div><strong>Key Function:</strong> Direct access to industrial manufacturing ecosystems</div>
                    <div><strong>Focus:</strong> Factory production checks, specification matching & export dispatch</div>
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-indigo-950">
                <button
                  onClick={() => onRequestQuote('sourcing')}
                  className="w-full py-2.5 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm shadow-indigo-600/20"
                >
                  <span>Inquire About International Sourcing</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-purple-200" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* Sourcing Workflow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono font-semibold text-purple-700 uppercase tracking-wider">
            Execution Lifecycle
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            End-to-End Sourcing & Supply Workflow
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            How NOMAQ GROUP PLC bridges global suppliers with local project execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY_INFO.howWeWorkSteps.map((step) => (
            <div
              key={step.step}
              className="p-6 bg-white border border-slate-200/90 rounded-2xl shadow-xs hover:border-indigo-300 hover:shadow-md transition-all space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-700 text-white font-mono font-bold text-xs inline-flex items-center justify-center shadow-xs">
                  0{step.step}
                </span>
                <span className="text-[11px] font-mono text-purple-700 font-semibold">
                  STAGE 0{step.step}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="text-xs text-purple-900 font-medium">
                {step.summary}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                {step.details}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
