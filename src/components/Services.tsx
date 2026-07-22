import { Laptop, MousePointerClick, Palette, CheckCircle2 } from 'lucide-react';

interface ServicesProps {
  onNavigate: (sectionId: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  const servicesList = [
    {
      icon: <Laptop className="w-5 h-5 text-current" />,
      title: 'Premium Website Design',
      description: 'We design modern, mobile-friendly websites that make your business look professional and trustworthy. Every website is built with clean layout, strong content flow, fast navigation, and clear call-to-action sections.',
      includes: [
        'Business website design',
        'Landing page design',
        'Mobile responsive layout',
        'Contact form setup',
        'WhatsApp button integration',
        'Basic SEO setup',
        'Fast and clean user experience'
      ]
    },
    {
      icon: <MousePointerClick className="w-5 h-5 text-current" />,
      title: 'Digital Advertising',
      description: 'We plan and manage digital ad campaigns that help your business reach the right audience and generate quality enquiries. Our focus is on clear messaging, proper targeting, creative testing, and performance improvement.',
      includes: [
        'Meta ads (Facebook & Instagram)',
        'Google ads (Search & Display)',
        'Lead generation campaigns',
        'Ad creatives & visuals',
        'Campaign copywriting',
        'Audience targeting & research',
        'Performance tracking'
      ]
    },
    {
      icon: <Palette className="w-5 h-5 text-current" />,
      title: 'Branding & Creative Design',
      description: 'We create premium brand visuals that help your business look consistent, memorable, and professional across all platforms.',
      includes: [
        'Logo direction & visual assets',
        'Brand colors & theme research',
        'Typography guidance',
        'Digital Posters & graphics',
        'Social media creatives',
        'Campaign visuals & ads',
        'Business profile design'
      ]
    }
  ];

  return (
    <section
      id="services"
      className="bg-white py-16 px-6 md:px-12 lg:px-20 border-t border-zinc-100 select-none text-left"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Title */}
        <div className="space-y-3 max-w-3xl">
          <span className="font-mono text-[9px] tracking-[0.2em] text-indigo-600 font-extrabold uppercase bg-indigo-50 px-3 py-1 rounded">
            WHAT WE DO
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-tight text-[#0F172A] mt-2">
            Services Built to Grow Your Business
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-500 leading-relaxed">
            From modern website design to high-converting advertising campaigns and robust visual identity, we create custom systems that attract customers and accelerate your revenue.
          </p>
        </div>

        {/* Services Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Website Design (Spans 6 cols on MD+) */}
          <div className="bg-[#F8FAFC] border border-zinc-200/60 hover:border-indigo-500/20 rounded-2xl p-6 md:col-span-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden">
            <div className="space-y-5">
              <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-600 inline-block group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                {servicesList[0].icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-sans text-lg font-black text-[#0F172A] tracking-tight group-hover:text-indigo-600 transition-colors duration-200">
                  {servicesList[0].title}
                </h3>
                <p className="font-sans text-xs text-zinc-600 leading-relaxed">
                  {servicesList[0].description}
                </p>
              </div>
              <div className="h-[1px] bg-zinc-200/70" />
              <div className="space-y-2.5">
                <span className="font-mono text-[9px] font-extrabold text-zinc-400 uppercase tracking-widest block">What's Included:</span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {servicesList[0].includes.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-zinc-700 font-semibold leading-tight">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="pt-6">
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full font-sans text-xs font-bold tracking-widest uppercase border border-indigo-600 hover:bg-indigo-600 text-indigo-600 hover:text-white py-3 rounded-xl transition-all duration-300 cursor-pointer text-center"
              >
                Discuss Service ➔
              </button>
            </div>
          </div>

          {/* Card 2: Digital Advertising (Spans 6 cols on MD+) */}
          <div className="bg-[#F8FAFC] border border-zinc-200/60 hover:border-indigo-500/20 rounded-2xl p-6 md:col-span-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden">
            <div className="space-y-5">
              <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-600 inline-block group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                {servicesList[1].icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-sans text-lg font-black text-[#0F172A] tracking-tight group-hover:text-indigo-600 transition-colors duration-200">
                  {servicesList[1].title}
                </h3>
                <p className="font-sans text-xs text-zinc-600 leading-relaxed">
                  {servicesList[1].description}
                </p>
              </div>
              <div className="h-[1px] bg-zinc-200/70" />
              <div className="space-y-2.5">
                <span className="font-mono text-[9px] font-extrabold text-zinc-400 uppercase tracking-widest block">What's Included:</span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {servicesList[1].includes.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-zinc-700 font-semibold leading-tight">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="pt-6">
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full font-sans text-xs font-bold tracking-widest uppercase border border-indigo-600 hover:bg-indigo-600 text-indigo-600 hover:text-white py-3 rounded-xl transition-all duration-300 cursor-pointer text-center"
              >
                Discuss Service ➔
              </button>
            </div>
          </div>

          {/* Card 3: Branding & Creative Design (Full width 12 cols on MD+, horizontally balanced) */}
          <div className="bg-[#F8FAFC] border border-zinc-200/60 hover:border-indigo-500/20 rounded-2xl p-6 md:col-span-12 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column of Branding card */}
              <div className="lg:col-span-7 space-y-4">
                <div className="p-3 bg-indigo-50 border border-indigo-100 rounded-xl text-indigo-600 inline-block group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  {servicesList[2].icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-sans text-lg font-black text-[#0F172A] tracking-tight group-hover:text-indigo-600 transition-colors duration-200">
                    {servicesList[2].title}
                  </h3>
                  <p className="font-sans text-xs text-zinc-600 leading-relaxed">
                    {servicesList[2].description}
                  </p>
                </div>
              </div>

              {/* Right Column of Branding card */}
              <div className="lg:col-span-5 space-y-3 lg:border-l lg:border-zinc-200/80 lg:pl-6 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[9px] font-extrabold text-zinc-400 uppercase tracking-widest block mb-2">What's Included:</span>
                  <ul className="space-y-1.5">
                    {servicesList[2].includes.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-zinc-700 font-semibold leading-tight">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
            
            <div className="pt-6">
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full font-sans text-xs font-bold tracking-widest uppercase border border-indigo-600 hover:bg-indigo-600 text-indigo-600 hover:text-white py-3 rounded-xl transition-all duration-300 cursor-pointer text-center"
              >
                Discuss Service ➔
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
