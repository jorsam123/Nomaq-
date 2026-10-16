import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { GlobalNetworkPage } from './pages/GlobalNetworkPage';
import { ContactPage } from './pages/ContactPage';
import { NavPage, QuoteFormData } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteCategory, setQuoteCategory] = useState<QuoteFormData['category']>('general');
  const [quoteItem, setQuoteItem] = useState<string>('');

  // Sync hash with browser navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as NavPage;
      const validPages: NavPage[] = ['home', 'about', 'products', 'industries', 'network', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: NavPage) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (category: QuoteFormData['category'] = 'general', item: string = '') => {
    setQuoteCategory(category);
    setQuoteItem(item);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-slate-800 font-sans selection:bg-purple-100 selection:text-purple-900">
      {/* Top Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onRequestQuote={() => handleOpenQuote('general')}
      />

      {/* Main Page Router */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onRequestQuote={(cat) => handleOpenQuote(cat || 'general')}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onRequestQuote={(cat) => handleOpenQuote(cat || 'general')}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            onNavigate={handleNavigate}
            onRequestQuote={(cat, item) => handleOpenQuote(cat || 'general', item)}
          />
        )}

        {currentPage === 'industries' && (
          <IndustriesPage
            onNavigate={handleNavigate}
            onRequestQuote={(cat) => handleOpenQuote(cat || 'general')}
          />
        )}

        {currentPage === 'network' && (
          <GlobalNetworkPage
            onNavigate={handleNavigate}
            onRequestQuote={(cat) => handleOpenQuote(cat || 'general')}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onRequestQuote={(cat) => handleOpenQuote(cat || 'general')}
          />
        )}
      </main>

      {/* Corporate Footer */}
      <Footer
        onNavigate={handleNavigate}
        onRequestQuote={() => handleOpenQuote('general')}
      />

      {/* Interactive Quotation Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialCategory={quoteCategory}
        initialItem={quoteItem}
      />
    </div>
  );
}
