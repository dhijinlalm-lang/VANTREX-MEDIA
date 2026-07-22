import { CheckCircle2, Star, Target, Zap, ShieldAlert } from 'lucide-react';

interface AboutProps {
  onNavigate: (sectionId: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const whatMakesUsDifferent = [
    { text: 'Premium and modern design style' },
    { text: 'Mobile-responsive website layouts' },
    { text: 'Clear business-focused content' },
    { text: 'Conversion-focused page structure' },
    { text: 'Strong CTA placement' },
    { text: 'Digital marketing strategy support' },
    { text: 'Ad-ready landing pages' },
    { text: 'Simple communication and practical execution' }
  ];

  return (
    <section
      id="about"
      className="bg-[#0F172A] py-16 px-6 md:px-12 lg:px-20 border-t border-white/5 select-none text-left relative overflow-hidden"
    >
      {/* Soft background accents for visual richness */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-blue-500/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-indigo-600/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Main "Why Choose Vantrex Media" Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Content - High Impact Text Layout */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-tight text-white">
              Your business does not just need a website. <br />
              <span className="bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent italic font-bold">
                It needs a strategic digital presence.
              </span>
            </h2>

            {/* Core copy explanation */}
            <div className="space-y-4">
              <p className="font-sans text-xs sm:text-[14px] text-zinc-300 leading-relaxed">
                Your business needs a digital presence that builds trust, explains your offer clearly, and converts visitors into real customers.
              </p>
              <p className="font-sans text-xs sm:text-[14px] text-zinc-400 leading-relaxed border-l-2 border-amber-400/40 pl-4">
                At <strong className="text-white font-bold">VANTREX MEDIA</strong>, we combine design, strategy, content, and marketing to create digital assets that support business growth.
              </p>
            </div>

            {/* What Makes Us Different checklist */}
            <div className="w-full pt-4 border-t border-white/10 mt-2">
              <h3 className="font-sans text-[11px] font-extrabold tracking-widest text-amber-400 uppercase mb-4">
                WHAT MAKES US DIFFERENT?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 w-full">
                {whatMakesUsDifferent.map((val, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <div className="p-1 bg-amber-400/10 border border-amber-400/20 rounded-md text-amber-400 shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-sans text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors duration-200">
                      {val.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium Gold Accent Action Button */}
            <button
              onClick={() => onNavigate('services')}
              className="group font-sans text-xs font-bold tracking-wide bg-amber-400 hover:bg-amber-300 text-[#0F172A] px-7 py-4 rounded-xl mt-6 transition-all duration-300 shadow-md flex items-center gap-2 cursor-pointer focus:outline-none"
            >
              View Our Services
              <span className="text-xs group-hover:translate-x-1 transition-transform">➔</span>
            </button>

          </div>

          {/* Right Column Layout: Beautiful Showcase Card & Stats */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-2xl group flex flex-col justify-between p-8 min-h-[380px] md:min-h-[420px] border border-white/10">
            {/* Backing image with elegant slate overlay */}
            <div className="absolute inset-0 bg-[#0F172A]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Vantrex Media Strategy & Planning"
                className="w-full h-full object-cover brightness-[0.35] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Brand Logo Watermark Tag */}
            <div className="relative z-10 self-start bg-amber-400 text-[#0F172A] text-[9px] font-mono font-black tracking-widest px-3.5 py-1.5 rounded-md uppercase">
              VANTREX GROWTH LAB
            </div>

            {/* Overlaid Badges Displaying Experience and Strategy focus */}
            <div className="relative z-10 space-y-4 mt-auto w-full">
              
              {/* Card 1 */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 flex items-start gap-3.5">
                <div className="p-2 bg-amber-400/10 text-amber-400 border border-amber-400/20 rounded-lg">
                  <Star className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-serif text-lg font-bold text-white">8+ Years of Craft</p>
                  <p className="font-sans text-[10px] text-zinc-400 mt-0.5 leading-relaxed">
                    Helping businesses in Kannur and across Kerala grow with premium design & marketing.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 flex items-start gap-3.5">
                <div className="p-2 bg-amber-400/10 text-amber-400 border border-amber-400/20 rounded-lg">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <p className="font-serif text-lg font-bold text-white">100% Growth Focus</p>
                  <p className="font-sans text-[10px] text-zinc-400 mt-0.5 leading-relaxed">
                    We focus on the metrics that matter: premium layout, solid branding, and qualified leads.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
