import React from 'react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Globe2, 
  Layers, 
  Store, 
  CheckCircle2, 
  MapPin, 
  ChevronRight, 
  ShieldCheck, 
  Building, 
  Factory, 
  Wrench, 
  Truck,
  Sparkles,
  BadgeCheck,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { NavPage, QuoteFormData } from '../types';

// Authentic generated industrial images
const HERO_IMAGE = '/src/assets/images/hero_industrial_warehouse_1792133393557.jpg';
const CHEMICALS_IMAGE = '/src/assets/images/chemical_drums_storage_1792133395608.jpg';
const MACHINERY_IMAGE = '/src/assets/images/excavator_spare_parts_1792133394499.jpg';
const ALUMINIUM_IMAGE = '/src/assets/images/aluminium_profiles_systems_1792133395147.jpg';
const SHIPPING_IMAGE = '/src/assets/images/global_logistics_shipping_1792133395468.jpg';

interface HomePageProps {
  onNavigate: (page: NavPage) => void;
  onRequestQuote: (category?: QuoteFormData['category']) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onRequestQuote
}) => {
  return (
    <div className="space-y-24 pb-20">
      
      {/* SECTION B: HERO SECTION - Modernized with NOMAQ Royal Indigo/Purple Lighting */}
      <section className="relative bg-[#080C1A] text-white overflow-hidden">
        {/* Ambient Radial Glows aligned with brand purple/indigo */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />

        {/* Background Image with Dark Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE}
            alt="NOMAQ GROUP PLC Addis Ababa industrial logistics and warehouse operations"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-20 filter brightness-70 scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080C1A] via-[#080C1A]/90 to-[#080C1A]/60" />
          <div className="absolute inset-0 bg-radial-at-t from-transparent via-[#080C1A]/60 to-[#080C1A]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-7">
              {/* International Connectivity Indicator */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-700/50 text-xs font-semibold tracking-wide text-purple-300 font-mono shadow-xs">
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <span>Addis Ababa (HQ)</span>
                <span className="text-indigo-400">·</span>
                <span>Dubai (UAE)</span>
                <span className="text-indigo-400">·</span>
                <span>China</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Connecting Global Supply with Ethiopia's Industrial and Construction Needs
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
                NOMAQ GROUP PLC connects businesses with international sources for chemicals, machinery and excavator spare parts, aluminium systems, and building finishing materials. With a local operating base in Addis Ababa and sister companies in Dubai and China, we coordinate practical sourcing and supply solutions for industrial and construction requirements.
              </p>

              {/* Dual Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={() => onNavigate('products')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 hover:from-indigo-500 hover:to-purple-600 rounded-xl transition-all shadow-lg shadow-indigo-600/25"
                >
                  <span>Explore Our Products & Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onRequestQuote('general')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900/90 hover:bg-slate-800 border border-indigo-900/80 hover:border-indigo-600 rounded-xl transition-all"
                >
                  <span>Request a Quote</span>
                  <ArrowUpRight className="w-4 h-4 text-purple-300" />
                </button>
              </div>

              {/* Corporate Trust Strip */}
              <div className="pt-6 border-t border-indigo-950 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-purple-400" />
                  <span>Genuine Product Sourcing Focus</span>
                </div>
                <div className="flex items-center gap-2">
                  <Store className="w-4 h-4 text-purple-400" />
                  <span>Addis Ababa Spare Parts Shop</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-purple-400" />
                  <span>Sister Companies in UAE & China</span>
                </div>
              </div>
            </div>

            {/* Right Industrial Card / Modern Interactive Architecture Preview */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 backdrop-blur-md border border-indigo-900/60 rounded-2xl p-6 sm:p-7 shadow-2xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-full blur-xl pointer-events-none" />
                
                <div className="border-b border-indigo-950 pb-4">
                  <div className="text-xs font-mono text-purple-400 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                    Operational Footprint
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1">
                    Integrated Trade Architecture
                  </h3>
                </div>

                <div className="space-y-3.5 text-xs">
                  <div className="p-3.5 rounded-xl bg-[#080C1A]/80 border border-indigo-950/80 hover:border-purple-500/40 transition-colors flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center font-mono font-bold text-xs shrink-0 shadow-xs">
                      ETH
                    </span>
                    <div>
                      <div className="font-bold text-white text-sm">Addis Ababa, Ethiopia</div>
                      <p className="text-slate-400 mt-0.5 leading-normal">
                        Headquarters at Garad City Center, storage workshops, and machinery spare parts shop serving local Ethiopian buyers.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#080C1A]/80 border border-indigo-950/80 hover:border-purple-500/40 transition-colors flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-600 text-white flex items-center justify-center font-mono font-bold text-xs shrink-0 shadow-xs">
                      UAE
                    </span>
                    <div>
                      <div className="font-bold text-white text-sm">Dubai, United Arab Emirates</div>
                      <p className="text-slate-400 mt-0.5 leading-normal">
                        Sister-company trading link supporting supplier communication, commercial coordination & regional freight logistics.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#080C1A]/80 border border-indigo-950/80 hover:border-purple-500/40 transition-colors flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 text-white flex items-center justify-center font-mono font-bold text-xs shrink-0 shadow-xs">
                      CHN
                    </span>
                    <div>
                      <div className="font-bold text-white text-sm">China Manufacturing Base</div>
                      <p className="text-slate-400 mt-0.5 leading-normal">
                        Direct engagement with manufacturers for industrial raw chemicals, precision excavator parts & architectural aluminium systems.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs border-t border-indigo-950">
                  <span className="text-slate-400">Official Tagline:</span>
                  <span className="text-purple-300 font-medium italic">
                    "Locally stocked practicality."
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION C: COMPANY HIGHLIGHTS (4 Modern Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono font-semibold text-purple-700 uppercase tracking-wider">
            Operational Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Core Foundations of NOMAQ GROUP PLC
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Built on verified physical capabilities, established overseas entities, and local commercial infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-white border border-slate-200/90 rounded-2xl shadow-xs hover:shadow-md hover:border-indigo-300 transition-all group">
            <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:text-white transition-all shadow-xs">
              <Globe2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              International Sourcing
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Connections with supply partners and manufacturers in Dubai, China, and other relevant international markets to fulfill technical requirements.
            </p>
          </div>

          <div className="p-6 bg-white border border-slate-200/90 rounded-2xl shadow-xs hover:shadow-md hover:border-indigo-300 transition-all group">
            <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:text-white transition-all shadow-xs">
              <Factory className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              Industrial Supply
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Sourcing and supply coordination for industrial, manufacturing, infrastructure, and commercial construction requirements in Ethiopia.
            </p>
          </div>

          <div className="p-6 bg-white border border-slate-200/90 rounded-2xl shadow-xs hover:shadow-md hover:border-indigo-300 transition-all group">
            <div className="w-11 h-11 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:text-white transition-all shadow-xs">
              <Store className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              Local Presence
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Offices, workshops used to store imported materials, and an own machinery spare parts shop in Addis Ababa to serve local customers directly.
            </p>
          </div>

          <div className="p-6 bg-white border border-slate-200/90 rounded-2xl shadow-xs hover:shadow-md hover:border-indigo-300 transition-all group">
            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:text-white transition-all shadow-xs">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2">
              Customer-Focused Service
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Product identification, supplier coordination, import follow-up, and ongoing customer communication throughout each transaction.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION D: ABOUT NOMAQ GROUP PLC */}
      <section className="bg-slate-100/70 border-y border-slate-200/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono font-semibold text-purple-700 uppercase tracking-wider">
                  About NOMAQ GROUP PLC
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
                  Connecting Global Product Sources with Local Industrial & Construction Needs
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                NOMAQ GROUP PLC is an Ethiopia-based import and export company serving the industrial, manufacturing, infrastructure, and construction sectors. Through its international sourcing relationships and local operating capabilities in Addis Ababa, the Group helps customers access products that support day-to-day operations, maintenance, project delivery, and building finishing work.
              </p>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                The Group focuses on three principal product areas: chemicals, machinery and excavator spare parts, and aluminium and other building finishing materials. Its sister companies in Dubai and China strengthen international supplier communication and sourcing coordination, while its local offices, workshops, and machinery spare parts shop help maintain close relationships with customers in Ethiopia.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-500 hover:to-purple-600 rounded-xl transition-all shadow-sm shadow-indigo-500/20"
                >
                  <span>Discover Our Company</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  <span>Contact Our Addis Ababa Desk</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-purple-600" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-sm space-y-5">
                <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Company at a Glance
                </h3>
                <dl className="space-y-3 text-xs">
                  <div>
                    <dt className="text-slate-500 font-medium">Headquarters</dt>
                    <dd className="font-semibold text-slate-900 mt-0.5">
                      Garad City Center 6th Floor, Bole Wollo Sefer, Addis Ababa
                    </dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 font-medium">Sister Companies</dt>
                    <dd className="font-semibold text-slate-900 mt-0.5">
                      Dubai (UAE) & China
                    </dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 font-medium">Local Facilities</dt>
                    <dd className="font-semibold text-slate-900 mt-0.5">
                      Commercial offices, storage workshops & machinery spare parts shop
                    </dd>
                  </div>
                  <div>
                    <dt className="text-slate-500 font-medium">Core Sourcing Sectors</dt>
                    <dd className="font-semibold text-slate-900 mt-0.5">
                      Chemicals · Excavator & Machinery Parts · Aluminium & Finishes
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION E: MAIN PRODUCT CATEGORIES (3 Large Premium Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-mono font-semibold text-purple-700 uppercase tracking-wider">
              Core Sourcing Areas
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Three Principal Product Categories
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              Availability and technical specifications are confirmed for each transaction to ensure complete compatibility.
            </p>
          </div>
          <button
            onClick={() => onNavigate('products')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 hover:text-purple-700 transition-colors"
          >
            <span>View All Detailed Specifications</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* 1. Chemicals */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs flex flex-col group hover:shadow-xl hover:border-purple-200 transition-all">
            <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
              <img
                src={CHEMICALS_IMAGE}
                alt="Industrial chemical storage drums and IBC containers"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-gradient-to-r from-indigo-900 to-purple-900 text-white font-mono text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                CATEGORY 01
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900">
                  Chemicals Import & Supply
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Chemical sourcing and import coordination for industrial and commercial requirements, with product matching based on customer specifications and intended applications.
                </p>
                <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
                  <div className="font-semibold text-slate-900 text-[11px] uppercase tracking-wider">Focus Highlights:</div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                    <span>Chemical product sourcing & matching</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                    <span>Manufacturer & supplier liaison</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                    <span>Product specification review & COA matching</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                    <span>Project-based and recurring supply cycles</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => onRequestQuote('chemicals')}
                  className="w-full py-2.5 text-xs font-bold text-slate-900 bg-slate-100 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-700 hover:text-white rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>Enquire About Chemicals</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* 2. Machinery & Excavator Spare Parts */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs flex flex-col group hover:shadow-xl hover:border-purple-200 transition-all">
            <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
              <img
                src={MACHINERY_IMAGE}
                alt="Excavator spare parts, hydraulic cylinders, track links, and sprockets"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-gradient-to-r from-indigo-900 to-purple-900 text-white font-mono text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                CATEGORY 02
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900">
                  Machinery & Excavator Spare Parts
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Machinery and excavator spare parts sourcing to support equipment maintenance, replacement requirements, and operational continuity.
                </p>
                <div className="p-2.5 bg-indigo-50/80 border border-indigo-200/70 rounded-xl text-xs text-indigo-950">
                  <div className="font-semibold flex items-center gap-1.5">
                    <Store className="w-3.5 h-3.5 text-indigo-700" />
                    <span>Own Spare Parts Shop in Addis Ababa</span>
                  </div>
                  <div className="text-[11px] text-indigo-800 mt-0.5">
                    Local stock available for immediate inspection and pickup.
                  </div>
                </div>
                <div className="space-y-1.5 pt-1 text-xs text-slate-700">
                  <div className="font-semibold text-slate-900 text-[11px] uppercase tracking-wider">Example Parts:</div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                    <span>Hydraulic components, pumps & cylinders</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                    <span>Undercarriage parts, tracks & idlers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                    <span>Excavator buckets, pins & adapters</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                    <span>Filters, gears & transmission components</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => onRequestQuote('machinery')}
                  className="w-full py-2.5 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-500 hover:to-purple-600 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm shadow-indigo-500/20"
                >
                  <span>Enquire About Spare Parts</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-purple-200" />
                </button>
              </div>
            </div>
          </div>

          {/* 3. Aluminium & Building Finishing Materials */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs flex flex-col group hover:shadow-xl hover:border-purple-200 transition-all">
            <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
              <img
                src={ALUMINIUM_IMAGE}
                alt="Architectural aluminium profiles and window curtain-wall systems"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-gradient-to-r from-indigo-900 to-purple-900 text-white font-mono text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                CATEGORY 03
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900">
                  Aluminium & Building Finishing Materials
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Aluminium systems and building finishing materials for construction, renovation, fit-out, and architectural finishing applications.
                </p>
                <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
                  <div className="font-semibold text-slate-900 text-[11px] uppercase tracking-wider">Architectural Scope:</div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                    <span>Anodized & powder-coated aluminium profiles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                    <span>Aluminium doors & window systems</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                    <span>Curtain-wall structural framing components</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                    <span>Facade cladding & architectural finishing items</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => onRequestQuote('aluminium')}
                  className="w-full py-2.5 text-xs font-bold text-slate-900 bg-slate-100 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-700 hover:text-white rounded-xl transition-all flex items-center justify-center gap-2 shadow-xs"
                >
                  <span>Enquire About Building Materials</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION F: WHY CHOOSE NOMAQ GROUP PLC? */}
      <section className="bg-[#080C1A] text-white py-16 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-semibold text-purple-400 uppercase tracking-wider">
              Strategic Advantages
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
              International Access. Local Understanding. Practical Support.
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Why manufacturing plants, contractors, and project developers in Ethiopia partner with NOMAQ GROUP PLC.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_INFO.valuePropositions.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 bg-slate-900/80 border border-indigo-950 rounded-2xl space-y-3 hover:border-purple-500/50 transition-all hover:bg-slate-900/95"
              >
                <div className="text-xs font-mono text-purple-400 font-bold">
                  BENEFIT 0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}

            {/* Direct Consultation Card */}
            <div className="p-6 bg-gradient-to-br from-indigo-950/80 via-purple-950/50 to-slate-950 border border-purple-500/30 rounded-2xl space-y-3 flex flex-col justify-between">
              <div>
                <div className="text-xs font-mono text-purple-300 font-bold uppercase tracking-wider">
                  DIRECT ACCESS
                </div>
                <h3 className="text-base font-bold text-white mt-1">
                  Ready to Discuss Your Bill of Quantities?
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  Speak directly with our Addis Ababa team or submit your technical specifications for an itemized commercial review.
                </p>
              </div>
              <button
                onClick={() => onRequestQuote('general')}
                className="mt-4 w-full py-2.5 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl transition-all shadow-md shadow-indigo-600/20 flex items-center justify-center gap-2"
              >
                <span>Request Commercial Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION G: HOW WE WORK (6-Step Timeline) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-mono font-semibold text-purple-700 uppercase tracking-wider">
            Operational Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            How We Work
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            A disciplined six-stage trade and procurement process from customer requirement to local delivery and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY_INFO.howWeWorkSteps.map((step) => (
            <div
              key={step.step}
              className="p-6 bg-white border border-slate-200/90 rounded-2xl shadow-xs hover:border-indigo-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-700 text-white font-mono font-bold text-xs inline-flex items-center justify-center shadow-xs">
                    0{step.step}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 uppercase">
                    Stage {step.step} of 6
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs font-medium text-purple-900 mb-2">
                  {step.summary}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION H: INTERNATIONAL NETWORK */}
      <section className="bg-[#080C1A] text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-mono font-semibold text-purple-400 uppercase tracking-wider">
                  Connected Trade Geography
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                  A Connected Network Across Ethiopia, Dubai, and China
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                NOMAQ GROUP PLC bridges international production hubs with Ethiopian industrial and construction demand. By uniting sister company presences in Dubai and China with local Addis Ababa facilities, we provide direct commercial coordination without unnecessary intermediary layers.
              </p>

              <div className="space-y-3 text-xs">
                <div className="p-3.5 bg-slate-900/80 border border-indigo-950 rounded-xl hover:border-purple-500/40 transition-colors">
                  <div className="font-bold text-white text-sm">Addis Ababa, Ethiopia</div>
                  <div className="text-slate-400 mt-1">
                    Local operating base with offices, storage workshops for imported materials, and a machinery spare parts shop.
                  </div>
                </div>

                <div className="p-3.5 bg-slate-900/80 border border-indigo-950 rounded-xl hover:border-purple-500/40 transition-colors">
                  <div className="font-bold text-white text-sm">Dubai, United Arab Emirates</div>
                  <div className="text-slate-400 mt-1">
                    International trading connection supporting supplier communication and commercial coordination.
                  </div>
                </div>

                <div className="p-3.5 bg-slate-900/80 border border-indigo-950 rounded-xl hover:border-purple-500/40 transition-colors">
                  <div className="font-bold text-white text-sm">China</div>
                  <div className="text-slate-400 mt-1">
                    Manufacturing-market connection supporting product discovery and engagement with manufacturers and supply partners.
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('network')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl transition-all shadow-md shadow-indigo-600/20"
                >
                  <span>Learn About Our Global Network</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-indigo-900/50 shadow-2xl aspect-16/9 bg-slate-950">
                <img
                  src={SHIPPING_IMAGE}
                  alt="Global maritime container port symbolizing Dubai, China, and Ethiopia trade route"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080C1A] via-[#080C1A]/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-xs bg-slate-900/90 backdrop-blur-md p-3.5 rounded-xl border border-indigo-900/70 text-slate-300">
                  <span className="font-bold text-white">Multimodal Trade Corridor:</span> Direct manufacturer engagement in China and regional trade in Dubai, connecting seamlessly with Ethiopian customs clearance and local Addis Ababa storage.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION I: INDUSTRIES WE SERVE PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-mono font-semibold text-purple-700 uppercase tracking-wider">
              Market Sectors
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Industries We Serve
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              NOMAQ GROUP PLC supports recurring operational requirements and project-specific procurement needs across Ethiopia.
            </p>
          </div>
          <button
            onClick={() => onNavigate('industries')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 hover:text-purple-700 transition-colors"
          >
            <span>Explore All Sector Solutions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {COMPANY_INFO.industriesServed.slice(0, 4).map((ind) => (
            <div
              key={ind.id}
              className="p-5 bg-white border border-slate-200/90 rounded-2xl shadow-xs hover:border-indigo-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="text-[11px] font-mono text-purple-700 font-semibold mb-1">
                  {ind.role}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {ind.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {ind.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <button
                  onClick={() => onNavigate('industries')}
                  className="text-xs font-bold text-indigo-700 hover:text-purple-700 inline-flex items-center gap-1"
                >
                  <span>Learn more</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION J: CALL-TO-ACTION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#080C1A] via-indigo-950 to-purple-950 rounded-3xl p-8 sm:p-12 text-white border border-indigo-900/60 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-mono font-semibold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-purple-400" />
              Initiate Supply Discussion
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              Looking for a Reliable Supply Partner?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Tell us what your business or project requires. Our team can help coordinate product enquiries, sourcing requirements, and supply discussions.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onRequestQuote('general')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 rounded-xl transition-all shadow-lg shadow-purple-600/25"
              >
                <span>Request a Quote</span>
                <ArrowUpRight className="w-4 h-4 text-purple-200" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-slate-900/80 hover:bg-slate-800 border border-indigo-700/60 rounded-xl transition-all"
              >
                <span>Contact Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
