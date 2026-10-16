import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { NavPage } from '../types';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  currentPage: NavPage;
  onNavigate: (page: NavPage) => void;
  onRequestQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onRequestQuote
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: NavPage }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Products & Services', page: 'products' },
    { label: 'Industries We Serve', page: 'industries' },
    { label: 'Global Network', page: 'network' },
    { label: 'Contact Us', page: 'contact' },
  ];

  const handleNavClick = (page: NavPage) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top micro-gradient bar matching the Nomaq purple-indigo gradient */}
      <div className="h-0.5 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark / Exact Logo */}
          <div 
            onClick={() => handleNavClick('home')}
            className="cursor-pointer group py-1 shrink-0"
          >
            <BrandLogo variant="dark" size="md" />
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[13.5px] font-semibold text-slate-700 tracking-tight">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`relative py-2 whitespace-nowrap shrink-0 transition-colors ${
                    isActive
                      ? 'text-indigo-950 font-bold'
                      : 'text-slate-600 hover:text-indigo-700'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action (Styled in Nomaq signature purple-indigo gradient) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onRequestQuote}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 hover:from-indigo-500 hover:to-purple-600 active:from-indigo-800 active:to-purple-800 rounded-lg transition-all shadow-sm shadow-indigo-500/20 whitespace-nowrap shrink-0"
            >
              <span>Request a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-purple-200" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onRequestQuote}
              className="sm:hidden px-3.5 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-xs"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-indigo-950 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 animate-fade-in shadow-xl">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-900 to-purple-900 text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestQuote();
              }}
              className="w-full py-2.5 text-center text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-700 rounded-lg shadow-sm"
            >
              Request a Commercial Quote
            </button>

            <a
              href="tel:0911136285"
              className="w-full py-2 text-center text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-indigo-600" />
              Direct Phone: 0911 136285
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
