import { ArrowRight, Sparkles, Laptop, Smartphone, BarChart3, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-[#090D1A] via-[#0F172A] to-[#1E3A8A] pt-24 pb-16 lg:pt-32 lg:pb-24 px-6 md:px-12 lg:px-20 overflow-hidden text-left"
    >
      {/* Dynamic ambient lights and mesh gradients */}
      <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-indigo-500/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-blue-600/10 rounded-full filter blur-[120px] pointer-events-none" />
      
      {/* Subtle tech background patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left side: Premium Content */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] xl:text-[64px] font-extrabold leading-[1.1] tracking-tight text-white">
              Premium Digital Assets <br />
              <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 bg-clip-text text-transparent italic font-bold">
                Tailored for Scale &
              </span>{' '}
              <span className="text-white">
                Enquiries
              </span>
            </h1>
          </div>

          {/* Short paragraph */}
          <div className="space-y-4 max-w-xl">
            <p className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed font-medium">
              We help small and medium businesses build premium websites, launch smart advertising campaigns, and create strong brand identities that attract the right customers.
            </p>
            <p className="font-sans text-xs text-zinc-400 leading-relaxed border-t border-white/10 pt-4">
              From website design to digital ads and branding, <strong className="text-white font-bold">VANTREX MEDIA</strong> creates online growth systems that make your business look professional, trustworthy, and ready to convert visitors into enquiries.
            </p>
          </div>

          {/* Dual Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-3">
            <button
              id="hero-free-consultation-btn"
              onClick={() => onNavigate('contact')}
              className="group font-sans text-sm font-semibold tracking-wide bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-[#090D1A] px-7 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-amber-500/10 flex items-center justify-center gap-2 cursor-pointer focus:outline-none w-full sm:w-auto border border-amber-300/35"
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4 text-[#090D1A] group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
            <button
              id="hero-services-btn"
              onClick={() => onNavigate('services')}
              className="group font-sans text-sm font-semibold tracking-wide bg-transparent hover:bg-white text-white hover:text-[#090D1A] border-2 border-white/30 px-7 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer focus:outline-none w-full sm:w-auto"
            >
              View Our Services
            </button>
          </div>

          {/* Trust line */}
          <div className="pt-6 border-t border-white/10 w-full">
            <p className="font-mono text-[10px] uppercase font-bold text-zinc-500 tracking-widest">
              No confusing tech. No generic templates. Just clean strategy, premium design, and measurable growth.
            </p>
          </div>

        </div>

        {/* Right side: High-Fidelity Mockup Demonstration with Interactive Look */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center pt-8 lg:pt-0">
          
          {/* Main Container Wrapper */}
          <div className="relative w-full max-w-[450px] aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center">
            
            {/* Ambient Back Glow */}
            <div className="absolute inset-0 bg-blue-500/20 rounded-full filter blur-[60px]" />

            {/* Laptop Mockup Box */}
            <div className="absolute top-[10%] left-[5%] w-[80%] aspect-[1.6/1] bg-slate-900 rounded-xl border-4 border-slate-700/80 shadow-2xl overflow-hidden z-10 flex flex-col">
              {/* Laptop Header */}
              <div className="h-4 bg-slate-800 border-b border-slate-700/50 flex items-center px-3 gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="font-mono text-[6px] text-slate-500 ml-2">vantrexmedia.com</span>
              </div>
              {/* Laptop Screen Content - High Fidelity Digital Marketing Dashboard & Beautiful UI mockup */}
              <div className="flex-1 bg-[#090D1A] p-2.5 flex flex-col gap-2 font-sans overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/5 pb-1">
                  <span className="text-[8px] font-bold text-white tracking-wide">VANTREX HUB</span>
                  <span className="text-[6px] text-emerald-400 font-mono font-bold bg-emerald-500/10 px-1 py-0.5 rounded">ONLINE ●</span>
                </div>
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-1">
                  <div className="bg-white/5 border border-white/10 rounded p-1">
                    <span className="text-[5px] text-zinc-400 block">WEBSITE TRAFFIC</span>
                    <span className="text-[8px] font-extrabold text-white font-mono block mt-0.5">+248%</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded p-1">
                    <span className="text-[5px] text-zinc-400 block">META AD ENQUIRIES</span>
                    <span className="text-[8px] font-extrabold text-amber-300 font-mono block mt-0.5">182 Leads</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded p-1">
                    <span className="text-[5px] text-zinc-400 block">ROAS RATIO</span>
                    <span className="text-[8px] font-extrabold text-emerald-400 font-mono block mt-0.5">4.8x</span>
                  </div>
                </div>
                {/* Visual Chart Graphic Demo */}
                <div className="flex-1 bg-white/5 border border-white/10 rounded p-1.5 flex flex-col justify-between">
                  <span className="text-[5px] text-zinc-400 font-mono">CONVERSIONS & ENGAGEMENT TREND</span>
                  <div className="flex items-end justify-between h-12 pt-2 px-1">
                    <div className="w-[10%] bg-blue-500/30 h-[20%] rounded-t" />
                    <div className="w-[10%] bg-blue-500/40 h-[40%] rounded-t" />
                    <div className="w-[10%] bg-indigo-500/50 h-[35%] rounded-t" />
                    <div className="w-[10%] bg-indigo-500/60 h-[55%] rounded-t" />
                    <div className="w-[10%] bg-purple-500/70 h-[70%] rounded-t" />
                    <div className="w-[10%] bg-indigo-500/80 h-[65%] rounded-t" />
                    <div className="w-[10%] bg-amber-400 h-[95%] rounded-t animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* Smartphone Mockup Overlapping the Laptop */}
            <div className="absolute bottom-[8%] right-[8%] w-[25%] aspect-[0.5/1] bg-slate-950 rounded-[20px] border-[3.5px] border-slate-800 shadow-2xl overflow-hidden z-20 flex flex-col">
              {/* Speaker & Sensor */}
              <div className="h-3 bg-slate-850 flex items-center justify-center relative">
                <div className="w-6 h-1 bg-slate-900 rounded-full" />
              </div>
              {/* Smartphone Screen Content */}
              <div className="flex-1 bg-slate-900 p-1.5 flex flex-col gap-1.5 font-sans justify-between text-left overflow-hidden">
                <div className="text-[6px] font-extrabold text-white tracking-tight">Luxury Spa Kerala</div>
                <div className="aspect-[4/3] bg-[#090D1A] rounded overflow-hidden flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-indigo-900/40 z-10" />
                  <img
                    src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=150&q=80"
                    alt="Smartphone display mockup"
                    className="w-full h-full object-cover scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute z-20 font-serif text-[4px] text-amber-200 font-bold uppercase tracking-wider text-center">Relax & Rejuvenate</span>
                </div>
                <div className="space-y-0.5">
                  <div className="w-full h-[3px] bg-white/20 rounded" />
                  <div className="w-[80%] h-[3px] bg-white/20 rounded" />
                </div>
                <div className="bg-amber-400 text-[#090D1A] font-extrabold text-[5px] py-0.5 rounded text-center font-sans tracking-wide uppercase">
                  Book Enquiry ➔
                </div>
              </div>
            </div>

            {/* Floating Card 1: Website Design */}
            <div className="absolute top-[5%] right-0 bg-white/95 backdrop-blur-md rounded-lg p-2.5 shadow-xl border border-zinc-200 z-30 flex items-center gap-2 hover:-translate-y-1 transition-transform cursor-default">
              <div className="p-1.5 bg-blue-50 text-blue-600 rounded-md">
                <Laptop className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="block text-[9px] font-extrabold text-[#090D1A] uppercase tracking-wide leading-none">Website Design</span>
                <span className="block text-[7px] text-zinc-500 mt-0.5">Premium & Customized</span>
              </div>
            </div>

            {/* Floating Card 2: Meta Ads */}
            <div className="absolute bottom-[20%] left-[-4%] bg-white/95 backdrop-blur-md rounded-lg p-2.5 shadow-xl border border-zinc-200 z-30 flex items-center gap-2 hover:-translate-y-1 transition-transform cursor-default">
              <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded-md">
                <BarChart3 className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="block text-[9px] font-extrabold text-[#090D1A] uppercase tracking-wide leading-none">Meta & Google Ads</span>
                <span className="block text-[7px] text-zinc-500 mt-0.5">Lead Generation Systems</span>
              </div>
            </div>

            {/* Floating Card 3: Branding */}
            <div className="absolute top-[55%] right-[-5%] bg-white/95 backdrop-blur-md rounded-lg p-2.5 shadow-xl border border-zinc-200 z-30 flex items-center gap-2 hover:-translate-y-1 transition-transform cursor-default">
              <div className="p-1.5 bg-amber-50 text-amber-600 rounded-md">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="block text-[9px] font-extrabold text-[#090D1A] uppercase tracking-wide leading-none">Branding</span>
                <span className="block text-[7px] text-zinc-500 mt-0.5">Logo & Visual Identity</span>
              </div>
            </div>

            {/* Floating Card 4: SEO Ready / Lead Gen */}
            <div className="absolute bottom-0 left-[35%] bg-zinc-900/90 backdrop-blur-md text-white rounded-lg p-2 px-3 shadow-xl border border-white/10 z-30 flex items-center gap-1.5 hover:-translate-y-1 transition-transform cursor-default">
              <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
              <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-emerald-300">Lead Gen & SEO Ready</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
