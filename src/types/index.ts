export type NavPage = 'home' | 'about' | 'products' | 'industries' | 'network' | 'contact';

export interface ProductItem {
  id: string;
  name: string;
  category: 'chemicals' | 'machinery' | 'aluminium' | 'sourcing';
  description: string;
  specifications: string[];
  applications: string[];
  availabilityNote: string;
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  category: 'chemicals' | 'machinery' | 'aluminium' | 'sourcing' | 'general';
  specificItem: string;
  quantity: string;
  destination: string;
  notes: string;
}
