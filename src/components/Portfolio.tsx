import { ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  const caseStudiesList = [
    {
      title: 'Luxury Spa Website',
      description: 'Premium website design focused on service presentation, trust-building, and booking enquiries.',
      result: 'Improved online presence and stronger booking-focused structure.',
      imageUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Boutique Campaign',
      description: 'Creative digital campaign strategy for a local boutique brand.',
      result: 'Better product presentation, stronger audience attention, and improved enquiry flow.',
      imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Service Business Landing Page',
      description: 'High-converting landing page with strong CTA placement and clear service explanation.',
      result: 'Cleaner user journey and better lead generation potential.',
      imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section
      id="work"
      className="bg-white py-24 px-6 md:px-12 lg:px-20 border-t border-zinc-100 select-none text-left"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Title */}
        <div className="space-y-4 max-w-3xl">
          <span className="font-mono text-[9px] tracking-[0.2em] text-indigo-600 font-extrabold uppercase bg-indigo-50 px-3 py-1 rounded">
            CASE STUDIES & PROOF
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-tight text-[#0F172A] mt-2">
            Real Work. Real Outcomes.
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-500 leading-relaxed">
            Take a look at how we have helped local businesses in Kerala build high-converting digital assets and smart advertising setups.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudiesList.map((study, idx) => (
            <div
              key={idx}
              className="group flex flex-col bg-[#F8FAFC] overflow-hidden rounded-2xl border border-zinc-200/50 hover:border-indigo-500/10 shadow-xs hover:shadow-xl transition-all duration-500"
            >
              
              {/* Visual image wrapper with floating tag */}
              <div className="aspect-[4/3] w-full overflow-hidden relative bg-zinc-150">
                <img
                  src={study.imageUrl}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-all duration-500 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 bg-[#0F172A] text-white text-[8px] font-mono font-black tracking-widest px-2.5 py-1 rounded">
                  CASE STUDY
                </div>
              </div>

              {/* Content and result display */}
              <div className="p-6 flex flex-col flex-1 justify-between gap-6">
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-sans text-lg font-black text-[#0F172A] tracking-tight leading-tight group-hover:text-indigo-600 transition-colors">
                      {study.title}
                    </h4>
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-indigo-600 transition-colors duration-200 shrink-0" />
                  </div>
                  <p className="font-sans text-xs text-zinc-500 leading-relaxed">
                    {study.description}
                  </p>
                </div>

                <div className="border-t border-zinc-200/60 pt-4">
                  <p className="font-sans text-[9px] font-black text-indigo-600 uppercase tracking-widest leading-none mb-1.5">
                    RESULT OUTCOME:
                  </p>
                  <p className="font-sans text-xs font-semibold text-zinc-700 leading-relaxed">
                    {study.result}
                  </p>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
