import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  activeSection: string;
  onNavigate: (path: string, sectionId?: string) => void;
}

export default function Navbar({ currentPath, activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/', id: 'home' },
    { label: 'About Us', path: '/about', id: 'about' },
    { label: 'Services', path: '/', id: 'services' },
    { label: 'Contact', path: '/', id: 'contact' },
  ];

  const handleLinkClick = (path: string, id?: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(path, id);
  };

  return (
    <nav
      id="navbar-container"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-[#F8FAFC]/95 backdrop-blur-md border-b border-zinc-200/60 py-3 shadow-xs'
          : 'bg-[#0B0F19]/65 backdrop-blur-xs border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Elite Minimal Logo */}
        <button
          id="navbar-logo-btn"
          onClick={() => handleLinkClick('/')}
          className="flex items-center group cursor-pointer focus:outline-none text-left"
        >
          {/* Logo Typography Group */}
          <div className="flex flex-col items-start leading-none">
            <span className={`font-sans font-extrabold tracking-[0.2em] text-[13px] sm:text-[14px] uppercase leading-tight transition-colors duration-300 ${isScrolled ? 'text-[#0F172A]' : 'text-white'}`}>
              VANTREX
            </span>
            <div className="flex items-baseline gap-0.5 leading-none mt-0.5">
              <span className={`font-sans font-black tracking-[0.16em] text-[15px] sm:text-[16px] uppercase leading-none transition-colors duration-300 ${isScrolled ? 'text-[#0F172A]' : 'text-white'}`}>
                MEDIA
              </span>
              <span className="font-sans font-extrabold text-[8px] text-amber-500 align-super leading-none">TM</span>
            </div>
            <span className={`font-sans text-[6px] sm:text-[7px] tracking-[0.16em] font-extrabold uppercase mt-1.5 transition-colors duration-300 ${isScrolled ? 'text-zinc-500' : 'text-zinc-400'}`}>
              ACCELERATE YOUR DIGITAL PRESENCE
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div id="desktop-nav-links" className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = link.id === 'about' 
                ? currentPath === '/about'
                : currentPath === '/' && activeSection === link.id;

              return (
                <button
                  id={`nav-link-${link.id}`}
                  key={link.id}
                  onClick={() => handleLinkClick(link.path, link.id === 'about' ? undefined : link.id)}
                  className={`relative font-sans text-xs font-extrabold tracking-widest transition-all duration-300 focus:outline-none cursor-pointer py-1.5 uppercase ${
                    isActive
                      ? (isScrolled ? 'text-[#4F46E5] scale-105' : 'text-amber-400 scale-105')
                      : (isScrolled ? 'text-zinc-800 hover:text-[#4F46E5]' : 'text-zinc-200 hover:text-amber-400')
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className={`absolute bottom-0 left-0 w-full h-[2px] rounded-full ${isScrolled ? 'bg-[#4F46E5]' : 'bg-amber-400'}`} />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <button
            id="navbar-mobile-toggle-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`focus:outline-none p-1 ${isScrolled ? 'text-[#0F172A]' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop & Drawer */}
      {isMobileMenuOpen && (
        <div id="mobile-menu-drawer" className="md:hidden absolute top-full left-0 w-full bg-white border-b border-zinc-200 shadow-lg py-6 px-6 transition-all duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = link.id === 'about' 
                ? currentPath === '/about'
                : currentPath === '/' && activeSection === link.id;

              return (
                <button
                  id={`mobile-nav-link-${link.id}`}
                  key={link.id}
                  onClick={() => handleLinkClick(link.path, link.id === 'about' ? undefined : link.id)}
                  className={`text-left font-display text-xs font-bold tracking-widest py-2.5 border-b border-zinc-100 transition-colors ${
                    isActive
                      ? 'text-[#4F46E5]'
                      : 'text-zinc-600 hover:text-zinc-955'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <button
              id="mobile-talk-btn"
              onClick={() => handleLinkClick(currentPath === '/about' ? '/' : currentPath, 'contact')}
              className="font-display text-xs font-bold tracking-widest bg-[#1E3A8A] text-white py-3 rounded-md mt-2 flex items-center justify-center gap-1"
            >
              LET'S TALK ↗
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
