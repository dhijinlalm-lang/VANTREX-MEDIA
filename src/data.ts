import { Service, CaseStudy, TeamMember, Testimonial, FaqItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'media-production',
    title: 'Media Production',
    category: 'Production',
    description: 'We specialize in high-quality professional cinematography, organic brand films, and visual storytelling. From high-fidelity video production to elite audio post-processing, we capture the true essence of your business.',
    deliverables: [
      'High-Definition Corporate & Brand Films',
      'Multi-Cam Product Showcases & Reels',
      'Advanced Post-Production & Color Grading',
      'Cinematographic Social Media Ad Deliverables'
    ],
    duration: '3-4 weeks',
    iconName: 'Camera'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    category: 'Marketing',
    description: 'Grow your digital footprint with precision. We integrate conversion-centric SEO methodologies, strategic ad campaign curation, and metadata architectures designed to rank and engage high-intent users.',
    deliverables: [
      'Search Engine Optimization (SEO) Auditing',
      'Targeted Social Media & PPC Management',
      'Performance Content Curation Strategy',
      'Analytics Setup & Conversion Measurement'
    ],
    duration: '4-6 weeks',
    iconName: 'Globe'
  },
  {
    id: 'brand-strategy',
    title: 'Brand Strategy',
    category: 'Strategy',
    description: 'We construct minimalist, high-recall visual identities and brand ecosystems that command market authority. Establish a premium market position that captures instant audience trust and drives long-term results.',
    deliverables: [
      'Comprehensive Brand Audit & Positioning',
      'Minimalist Logo Systems & Typography Schemes',
      'Unified Visual Curation Guidelines',
      'Brand Equity & Authority Roadmaps'
    ],
    duration: '4-5 weeks',
    iconName: 'Sparkles'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'nordic-labs',
    title: 'Nordic Labs: Reinventing Biotechnology',
    client: 'Nordic BioLabs',
    category: 'Branding & CGI',
    year: '2026',
    description: 'Constructing a pristine, scientific-minimal brand system paired with slow-motion liquid CGI simulations for their zero-plastic glass serum bottles.',
    impact: '+240% organic reach, selected as Winner of Agency Brand Excellence Award 2026.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    tags: ['Brand Identity', 'CGI Simulation', 'Product Launch']
  },
  {
    id: 'axis-automotive',
    title: 'Axis EV: A New Paradigm of Velocity',
    client: 'Axis Automotive Group',
    category: 'Digital & Motion',
    year: '2026',
    description: 'Creating an interactive spatial website with immersive scroll-triggered dark 3D elements for their premium autonomous electric supercar release.',
    impact: 'Rebuilt website loaded in <0.4 seconds, converting over 18,000 reservation expressions.',
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    tags: ['Web Design', 'Micro-Interactions', 'Web Performance']
  },
  {
    id: 'aero-horology',
    title: 'Aero Chrono: Titanium in Motion',
    client: 'Aero Horology Studio',
    category: 'Production & CGI',
    year: '2025',
    description: 'An abstract, high-fashion promotional motion campaign that visualizes titanium alloy components floating in cosmic gravity fields, exploring timeless luxury.',
    impact: 'Increased engagement by 86% across multi-channel campaign feeds, driving physical boutique sell-outs.',
    imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80',
    tags: ['3D Rendering', 'Sound Design', 'Luxury Marketing']
  },
  {
    id: 'verdant-estate',
    title: 'Verdant: Architectural Poetry of Space',
    client: 'Verdant Estate Group',
    category: 'Branding & Video',
    year: '2025',
    description: 'Delivering editorial visual design, real estate cinematography and minimal typography systems for an ultra-sustainable woodland development concept.',
    impact: "All properties sold within 14 days of the online digital catalogue launch, breaking regional records.",
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    tags: ['Art Direction', 'Film Curation', 'Editorial Design']
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Devon Vane',
    role: 'Managing Partner & Executive Director',
    bio: 'Devon oversees creative alignment, ensuring that minimal form constantly serves elevated business strategy. Formerly leading art directions in Paris and Tokyo.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&h=600&q=80'
  },
  {
    name: 'Elena Rostova',
    role: 'Principal CGI Director',
    bio: 'Elena translates abstract architecture into photo-realistic spatial storytelling. Specializing in high-precision organic fluid physics and light scattering.',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&h=600&q=80'
  },
  {
    name: 'Marcus Carter',
    role: 'Lead Digital Architect',
    bio: 'Marcus constructs the digital structures Vantrex visualizes. Believes that a website load time is a brand luxury statement. Expert in React & GPU shaders.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=600&q=80'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: "Vantrex understood exactly what we wanted before we did. Their commitment to clean, high-concept visual discipline redefined how our product is received globally.",
    author: 'Karl Soderberg',
    company: 'Nordic BioLabs',
    role: 'Chief Executive Officer',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 't2',
    quote: "Their web development is pure art. Our site doesn't load — it manifests. The performance results speaks clearly on the luxury conversion figures we are observing.",
    author: 'Clara Delacroix',
    company: 'Axis Automotive',
    role: 'Global VP of Brand Strategy',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "What makes Vantrex Media's minimal approach more premium than traditional marketing?",
    answer: "Minimalism is not the absence of elements — it is the absolute concentration of intent. By stripping away visual noise, we expose the essence of your product. This establishes a high-Recall, luxury atmosphere that evokes customer trust and premium value perception.",
    category: "Philosophy"
  },
  {
    question: "How long does a typical complete visual alignment campaign take?",
    answer: "Most of our comprehensive brand identity & custom web systems range between 6 to 10 weeks of high-focus execution. This includes strategic exploration, high-fidelity draft approvals, detailed high-end asset creation (CGI/Videos), and rigorous performance engineering.",
    category: "Process"
  },
  {
    question: "Do we get native access to the master high-resolution 3D source files?",
    answer: "Yes, once finalized, all structured master assets, high-resolution textures, raw C4D/Blender project scopes, and Figma development canvases are systematically compiled, documented, and delivered with full unlimited commercial licenses.",
    category: "Delivery"
  },
  {
    question: "Do you offer localized optimization or ongoing campaign consulting?",
    answer: "Absolutely. We provide strategic retention retainer partnerships for selected partners (Vantrex Core). This includes ongoing aesthetic refinements, seasonal product launch collateral, and SEO-guided digital design optimizations.",
    category: "Collaboration"
  }
];

export const SEO_OUTLINE = {
  strategies: [
    {
      title: "Clean Semantic Code Hierarchy",
      detail: "Our code uses semantic HTML elements (<header>, <main>, <section>, <article>) to ensure web spiders easily parse key brand topics, boosting organic readability.",
      metric: "W3C Valid & Section-Rich"
    },
    {
      title: "Ultimate Speed Performance",
      detail: "Under-the-hood microsecond asset compression, standard lightweight modern web fonts, and deferred loading logic for high-quality images guarantees an instant PageSpeed rating.",
      metric: "Vite Hot-Compiled Assets"
    },
    {
      title: "Responsive Responsive Layout",
      detail: "Perfect mobile fluid layouts, touch target dimensions (44px min), and structural modular cards optimized to rank excellently on mobile-first search algorithms.",
      metric: "100% Mobile Fluid Compliance"
    },
    {
      title: "Content & Copy SEO Architecture",
      detail: "Keyword insertion of critical service nodes ('CGI Motion Design', 'Brand Identity Ecosystems', 'Luxury Cinematography') matching elite user search phrases organically.",
      metric: "High-Intent Keyword-Mapped Copy"
    }
  ]
};
