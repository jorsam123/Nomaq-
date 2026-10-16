import React, { useState } from 'react';
import { 
  CheckCircle, 
  ArrowUpRight, 
  ShieldAlert, 
  Store, 
  Phone,
  Search,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { NavPage, QuoteFormData } from '../types';

const CHEMICALS_IMG = '/src/assets/images/chemical_drums_storage_1792133395608.jpg';
const MACHINERY_IMG = '/src/assets/images/excavator_spare_parts_1792133394499.jpg';
const ALUMINIUM_IMG = '/src/assets/images/aluminium_profiles_systems_1792133395147.jpg';
const WAREHOUSE_IMG = '/src/assets/images/hero_industrial_warehouse_1792133393557.jpg';
const LOGISTICS_IMG = '/src/assets/images/global_logistics_shipping_1792133395468.jpg';

interface ProductsPageProps {
  onNavigate: (page: NavPage) => void;
  onRequestQuote: (category?: QuoteFormData['category'], item?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onNavigate,
  onRequestQuote
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const services = COMPANY_INFO.coreServices;

  const categoryImages: Record<string, string> = {
    chemicals: CHEMICALS_IMG,
    machinery: MACHINERY_IMG,
    aluminium: ALUMINIUM_IMG,
    sourcing: LOGISTICS_IMG,
    storage: WAREHOUSE_IMG
  };

  const filteredServices = services.filter((serv) => {
    const matchesTab = activeTab === 'all' || serv.id === activeTab;
    const matchesSearch = 
      searchQuery.trim() === '' ||
      serv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      serv.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      serv.examples.some((ex) => ex.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-20">
      
      {/* Page Header */}
      <section className="bg-[#080C1A] text-white py-16 sm:py-20 border-b border-indigo-950 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <div className="flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-wider">
            <span>NOMAQ GROUP PLC</span>
            <span className="text-slate-600">/</span>
            <span>Commercial Portfolio</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl">
            Products & Core Services
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Coordinated import, international manufacturer sourcing, and practical local supply across chemicals, machinery spare parts, and aluminium systems.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Mandatory Requirement & Specification Notice Box */}
        <div className="p-4 sm:p-5 bg-purple-50/80 border border-purple-200/80 rounded-2xl text-xs sm:text-sm text-purple-950 flex items-start gap-3 shadow-xs">
          <ShieldAlert className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold">Technical & Availability Note:</strong> Product availability, technical specifications, material certificates (TDS/COA), compatibility, and regulatory handling requirements must be confirmed for each order and application.
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-2 bg-slate-100 rounded-2xl border border-slate-200">
          {/* Segmented Category Buttons */}
          <div className="flex flex-wrap items-center gap-1 w-full md:w-auto">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all whitespace-nowrap ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              All Categories
            </button>
            <button
              onClick={() => setActiveTab('chemicals')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all whitespace-nowrap ${
                activeTab === 'chemicals'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              Chemicals
            </button>
            <button
              onClick={() => setActiveTab('machinery')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all whitespace-nowrap ${
                activeTab === 'machinery'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              Machinery Parts
            </button>
            <button
              onClick={() => setActiveTab('aluminium')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all whitespace-nowrap ${
                activeTab === 'aluminium'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              Aluminium & Finishes
            </button>
            <button
              onClick={() => setActiveTab('sourcing')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all whitespace-nowrap ${
                activeTab === 'sourcing'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              International Sourcing
            </button>
            <button
              onClick={() => setActiveTab('storage')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all whitespace-nowrap ${
                activeTab === 'storage'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              Addis Ababa Shop
            </button>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by part, alloy, spec..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-indigo-600 text-slate-900"
            />
          </div>
        </div>

        {/* Detailed Service Cards */}
        <div className="space-y-12">
          {filteredServices.map((service) => {
            const imgSrc = categoryImages[service.id] || WAREHOUSE_IMG;
            const quoteCategory = (service.id === 'chemicals' || service.id === 'machinery' || service.id === 'aluminium' || service.id === 'sourcing')
              ? service.id
              : 'general';

            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-xs hover:border-indigo-300 hover:shadow-lg transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  
                  {/* Photo Column */}
                  <div className="lg:col-span-5 relative bg-slate-100 min-h-[300px] lg:min-h-full">
                    <img
                      src={imgSrc}
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-indigo-900 to-purple-900 text-white font-mono text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm">
                      PILLAR {service.number}
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div>
                        <div className="text-xs font-mono font-semibold text-purple-700 uppercase tracking-wider">
                          NOMAQ GROUP PLC · Service Focus
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mt-1">
                          {service.title}
                        </h2>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {service.summary}
                      </p>

                      {/* Service Focus Points */}
                      <div className="space-y-2 pt-2">
                        <div className="text-xs font-bold uppercase tracking-wider text-slate-900">
                          Scope & Operations:
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-600">
                          {service.serviceFocus.map((focus, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0 mt-1.5" />
                              <span>{focus}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Product Examples */}
                      <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                        <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                          Example Material & Component Specifications:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                          {service.examples.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Category Requirement Note */}
                      <div className="text-[11px] text-slate-500 italic">
                        {service.disclaimer}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
                      <button
                        onClick={() => onRequestQuote(quoteCategory, service.title)}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-500 hover:to-purple-600 rounded-xl transition-all shadow-sm shadow-indigo-500/20"
                      >
                        <span>Enquire Now / Request Quote</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-purple-200" />
                      </button>

                      <button
                        onClick={() => onNavigate('contact')}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 rounded-xl transition-colors"
                      >
                        <span>Speak with Addis Ababa Team</span>
                      </button>

                      <div className="sm:ml-auto text-xs text-slate-500 flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-purple-600" />
                        <span className="font-mono text-slate-800 font-semibold">0911 136285</span>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}

          {filteredServices.length === 0 && (
            <div className="p-12 text-center bg-white rounded-2xl border border-slate-200">
              <p className="text-sm text-slate-600 mb-3">
                No matching product categories found for "{searchQuery}".
              </p>
              <button
                onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
                className="px-4 py-2 text-xs font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

      </section>

    </div>
  );
};
