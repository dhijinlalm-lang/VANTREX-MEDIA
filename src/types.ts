export interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  deliverables: string[];
  duration: string;
  iconName: string; // references lucide-react icon name
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  description: string;
  impact: string;
  imageUrl: string;
  tags: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
  role: string;
  avatarUrl: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
}
