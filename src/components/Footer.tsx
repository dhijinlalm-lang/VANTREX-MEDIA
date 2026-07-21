import { useState } from 'react';
import { Instagram, Facebook, Youtube, Linkedin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string, sectionId?: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer
      id="main-footer"
      className="bg-[#FAFBF9] border-t border-zinc-150 py-12 px-6 md:px-12 lg:px-20 text-left select-none text-zinc-600"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-zinc-150">
        
        {/* Col 1: Brand details & socials (4 cols wide) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <button
            onClick={() => onNavigate('/')}
            className="flex items-center group cursor-pointer focus:outline-none self-start text-left"
          >
            {/* Logo Typography Group */}
            <div className="flex flex-col items-start leading-none">
              <span className="font-sans font-extrabold tracking-[0.2em] text-[12px] sm:text-[13px] uppercase leading-tight text-[#0F172A]">
                VANTREX
              </span>
              <div className="flex items-baseline gap-0.5 leading-none mt-0.5">
                <span className="font-sans font-black tracking-[0.16em] text-[14px] sm:text-[15px] uppercase leading-none text-[#0F172A]">
                  MEDIA
                </span>
                <span className="font-sans font-extrabold text-[8px] text-amber-500 align-super leading-none">TM</span>
              </div>
              <span className="font-sans text-[6px] sm:text-[6.5px] tracking-[0.16em] font-extrabold uppercase mt-1.5 text-zinc-500">
                ACCELERATE YOUR DIGITAL PRESENCE
              </span>
            </div>
          </button>

          <p className="font-sans text-xs text-zinc-500 leading-relaxed max-w-xs mt-2">
            Empowering brands with innovative digital marketing strategies that drive growth and deliver real results.
          </p>

          {/* Social Icons row */}
          <div className="flex gap-3 mt-2">
            {[
              { icon: <Instagram className="w-3.5 h-3.5" />, link: '#' },
              { icon: <Facebook className="w-3.5 h-3.5" />, link: '#' },
              { icon: <Youtube className="w-3.5 h-3.5" />, link: '#' },
              { icon: <Linkedin className="w-3.5 h-3.5" />, link: '#' }
            ].map((social, i) => (
              <a
                key={i}
                href={social.link}
                className="w-8 h-8 rounded-full border border-zinc-200 hover:border-[#4F46E5] hover:text-[#4F46E5] flex items-center justify-center text-zinc-500 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2: Quick Links (2 cols wide) */}
        <div className="lg:col-span-2 flex flex-col gap-3">
          <h4 className="font-display text-[9px] font-black tracking-widest text-[#4F46E5] uppercase pb-2">
            QUICK LINKS
          </h4>
          <ul className="space-y-2 flex flex-col">
            {[
              { label: 'Home', path: '/', id: 'home' },
              { label: 'About Us', path: '/about', id: 'about' },
              { label: 'Services', path: '/', id: 'services' },
              { label: 'Contact', path: '/', id: 'contact' }
            ].map((link) => (
              <li key={link.id}>
                <button
                  id={`footer-quick-${link.id}`}
                  onClick={() => onNavigate(link.path, link.id === 'about' ? undefined : link.id)}
                  className="font-sans text-xs text-zinc-500 hover:text-[#4F46E5] focus:outline-none cursor-pointer transition-colors text-left"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Services (2 cols wide) */}
        <div className="lg:col-span-2 flex flex-col gap-3">
          <h4 className="font-display text-[9px] font-black tracking-widest text-[#4F46E5] uppercase pb-2">
            SERVICES
          </h4>
          <ul className="space-y-2 flex flex-col text-xs text-zinc-500">
            <li>
              <button onClick={() => onNavigate('/', 'services')} className="hover:text-[#4F46E5] text-left cursor-pointer">
                Website Design
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('/', 'services')} className="hover:text-[#4F46E5] text-left cursor-pointer">
                Digital Advertising
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('/', 'services')} className="hover:text-[#4F46E5] text-left cursor-pointer">
                Meta Ads & Google Ads
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('/', 'services')} className="hover:text-[#4F46E5] text-left cursor-pointer">
                Branding & Creative Design
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact Core (2 cols wide) */}
        <div className="lg:col-span-2 flex flex-col gap-3 text-xs text-zinc-500">
          <h4 className="font-display text-[9px] font-black tracking-widest text-[#4F46E5] uppercase pb-2">
            CONTACT
          </h4>
          <p className="font-sans hover:text-[#4F46E5] transition-colors leading-[1.8]">
            <a href="tel:+916353539425">+91 63535 39425</a>
          </p>
          <p className="font-sans hover:text-[#4F46E5] transition-colors leading-[1.8] break-all">
            <a href="mailto:contact@vantrexmedias.com">contact@vantrexmedias.com</a>
          </p>
          <p className="font-sans leading-[1.8]">
            Kannur, Kerala, India
          </p>
        </div>

        {/* Col 5: Stay Updated input (2 cols wide) */}
        <div className="lg:col-span-2 flex flex-col gap-3">
          <h4 className="font-display text-[9px] font-black tracking-widest text-[#4F46E5] uppercase pb-2">
            STAY UPDATED
          </h4>
          <p className="font-sans text-xs text-zinc-500 leading-relaxed">
            Insights, tips & trends straight to your inbox.
          </p>
          
          {/* Email input field with inside teal arrow button */}
          <div className="flex flex-col gap-2">
            <div className="flex bg-white border border-zinc-150 rounded p-1 shadow-2xs">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-0 text-xs text-zinc-800 px-2 py-1.5 w-full focus:outline-none placeholder-zinc-300"
              />
              <button
                id="footer-send-arrow-btn"
                onClick={() => setSubscribed(true)}
                className="w-8 h-8 rounded bg-[#1E3A8A] hover:bg-[#1E40AF] text-white flex items-center justify-center shrink-0 cursor-pointer transition-colors focus:outline-none"
              >
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
            {subscribed && (
              <span className="text-[10px] text-[#4F46E5] font-mono font-medium">
                ✓ Thank you for subscribing!
              </span>
            )}
          </div>
        </div>

      </div>

      {/* Sub footer Section */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-zinc-400">
        <div>
          © 2024 Vantrex Media. All Rights Reserved.
        </div>
        <div className="flex gap-4 items-center">
          <button 
            onClick={() => onNavigate('/privacy')} 
            className="hover:text-[#4F46E5] transition-colors cursor-pointer focus:outline-none"
          >
            Privacy Policy
          </button>
          <span>|</span>
          <button 
            onClick={() => onNavigate('/', 'services')} 
            className="hover:text-[#4F46E5] transition-colors cursor-pointer focus:outline-none"
          >
            Terms & Conditions
          </button>
        </div>
      </div>
    </footer>
  );
}
