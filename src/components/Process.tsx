import { Eye, Map, Layers, Code, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Discovery',
      desc: 'We understand your business, target audience, competitors, services, and growth goals to establish a strong foundational roadmap.',
      icon: <Eye className="w-5 h-5 text-current" />,
      gridSpan: 'col-span-1 md:col-span-3 lg:col-span-4'
    },
    {
      num: '02',
      title: 'Strategy',
      desc: 'We plan the website structure, content flow, design direction, and precise conversion path that drives real enquiries.',
      icon: <Map className="w-5 h-5 text-current" />,
      gridSpan: 'col-span-1 md:col-span-3 lg:col-span-4'
    },
    {
      num: '03',
      title: 'Design',
      desc: 'We create a premium, high-contrast website layout tailored to match your brand positioning and business objective.',
      icon: <Layers className="w-5 h-5 text-current" />,
      gridSpan: 'col-span-1 md:col-span-3 lg:col-span-4'
    },
    {
      num: '04',
      title: 'Build & Develop',
      desc: 'We build your asset using clean code, fluid mobile-responsive elements, lightning-fast navigation pathways, and clear visual components.',
      icon: <Code className="w-5 h-5 text-current" />,
      gridSpan: 'col-span-1 md:col-span-3 lg:col-span-6'
    },
    {
      num: '05',
      title: 'Launch & Growth Support',
      desc: 'We deploy your digital engine with high-converting setups, ready for optimized Meta & Google Ads, search visibility, and continuous performance scaling.',
      icon: <Rocket className="w-5 h-5 text-current" />,
      gridSpan: 'col-span-1 md:col-span-6 lg:col-span-6'
    }
  ];

  return (
    <section
      id="process"
      className="bg-[#F8FAFC] py-16 px-6 md:px-12 lg:px-20 border-t border-zinc-100 select-none text-left relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Title */}
        <div className="space-y-3 max-w-3xl">
          <span className="font-mono text-[9px] tracking-[0.2em] text-indigo-600 font-extrabold uppercase bg-indigo-50 px-3 py-1 rounded">
            OUR STRATEGIC WORKFLOW
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-tight text-[#0F172A] mt-2">
            Our Process
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-500 leading-relaxed">
            How we take your business from raw draft concepts to a fully functional, high-converting digital growth system.
          </p>
        </div>

        {/* Bento Grid Steps */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 relative">
          
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className={`bg-white border border-zinc-200/60 hover:border-indigo-500/30 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group relative overflow-hidden ${step.gridSpan}`}
            >
              
              {/* Subtle background gradient on card hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 via-indigo-50/0 to-indigo-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="space-y-5 relative z-10">
                {/* Step indicator circle & Number */}
                <div className="flex items-center justify-between w-full">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100/50 text-indigo-600 flex items-center justify-center transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                    {step.icon}
                  </div>
                  <span className="font-mono text-3xl font-black text-zinc-100 group-hover:text-indigo-100 transition-colors duration-300 select-none">
                    {step.num}
                  </span>
                </div>

                {/* Title & description */}
                <div className="space-y-2">
                  <h3 className="font-sans text-base font-black text-[#0F172A] tracking-tight group-hover:text-indigo-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="font-sans text-xs text-zinc-500 leading-relaxed font-semibold">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Action indicator at bottom */}
              <div className="pt-4 border-t border-zinc-100 mt-4 flex items-center justify-between text-zinc-400 group-hover:text-indigo-600 transition-colors">
                <span className="font-mono text-[8px] font-bold tracking-widest uppercase">Phase {step.num}</span>
                <span className="text-xs transform group-hover:translate-x-1 transition-transform">➔</span>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
