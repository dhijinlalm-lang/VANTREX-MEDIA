import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Process from './components/Process';
import TrustSection from './components/TrustSection';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Privacy from './components/Privacy';
import { MessageCircle } from 'lucide-react';

export default function App({ ssrPath }: { ssrPath?: string }) {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (ssrPath) return ssrPath;
    if (typeof window !== 'undefined') {
      return window.location.pathname || '/';
    }
    return '/';
  });
  const [activeSection, setActiveSection] = useState<string>('home');

  // URL-based routing initialization & listener
  useEffect(() => {
    const path = window.location.pathname || '/';
    setCurrentPath(path);

    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const handleNavigate = (path: string, sectionId?: string) => {
    // If we're changing route (e.g., from /about to / or vice versa)
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
    }

    // Scroll to the top or specific section
    if (sectionId) {
      setTimeout(() => {
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70, // offset Navbar height
            behavior: 'smooth',
          });
          setActiveSection(sectionId);
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // High Precision Scroll Section Tracking for active navbar indicator (only on Home page)
  useEffect(() => {
    if (currentPath !== '/') return;

    const sections = ['home', 'services', 'process', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [currentPath]);

  return (
    <div id="app-root-wrapper" className="min-h-screen bg-white text-[#0F172A] antialiased select-none font-sans relative">
      
      {/* Premium Sticky Navigation Glass Panel */}
      <Navbar
        currentPath={currentPath}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Single-Page Editorial Content Grid */}
      <main id="main-content-stream" className="relative">
        {currentPath === '/about' ? (
          // Dedicated Standalone About Page
          <div className="pt-16">
            <About onNavigate={(sec) => handleNavigate('/', sec)} />
            <Contact />
          </div>
        ) : currentPath === '/privacy' ? (
          // Dedicated Standalone Privacy Policy Page
          <div className="pt-16">
            <Privacy onNavigate={handleNavigate} />
          </div>
        ) : (
          // Home Page / All other paths
          <>
            {/* 1. Hero Section (Deep Blue Gradient) */}
            <Hero onNavigate={(sec) => handleNavigate('/', sec)} />

            {/* 2. Services Section (White background - Bento Grid style) */}
            <Services onNavigate={(sec) => handleNavigate('/', sec)} />

            {/* 3. Process Section / Strategic Workflow (Light grey background - Redesigned Bento Grid) */}
            <Process />

            {/* 4. Trust Section (Light grey background) */}
            <TrustSection />

            {/* 5. Testimonials Section (White background) */}
            <Testimonials />

            {/* 6. Brief Form & Contact Section (Deep Navy background) */}
            <Contact />
          </>
        )}
      </main>

      {/* Premium Carbon Brand Footer */}
      <Footer
        onNavigate={handleNavigate}
      />

      {/* Floating WhatsApp Icon with Pulse Effect */}
      <a
        id="floating-whatsapp-trigger"
        href="https://wa.me/916353539425?text=Hi%20Vantrex%20Media!%20I'd%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group animate-pulse"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366] group-hover:rotate-6 transition-transform duration-300" />
        <span className="absolute right-16 bg-[#0F172A] text-white font-sans text-[11px] font-extrabold tracking-wide px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md whitespace-nowrap border border-white/10 pointer-events-none">
          Chat with Us
        </span>
      </a>
    </div>
  );
}
