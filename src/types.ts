export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  energyRating: string; // e.g. "5-Star" or "A+++"
  brief: string;
  description: string;
  features: string[];
  specs: Record<string, string>;
  gallery: string[];
  rating: number;
  reviewsCount: number;
}

export interface Review {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface SupportManual {
  productId: string;
  productName: string;
  fileSize: string;
  version: string;
  downloadUrl: string;
}

export interface CareerOpportunity {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string; // "Full-time" | "Contract" | "Internship"
  experience: string;
  description: string;
  requirements: string[];
}

export interface EmployeeBenefit {
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface TimelineStep {
  title: string;
  description: string;
  status: 'completed' | 'ongoing' | 'future';
  meta: string;
  details: string[];
}
