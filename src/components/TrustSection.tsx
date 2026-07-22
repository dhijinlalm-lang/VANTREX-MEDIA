import { Sparkles, TrendingUp, Smartphone, HelpCircle } from 'lucide-react';

export default function TrustSection() {
  const cards = [
    {
      icon: <Sparkles className="w-5 h-5 text-indigo-600" />,
      title: 'Premium Design',
      desc: 'Clean, modern layouts that make your business look professional.'
    },
    {
      icon: <TrendingUp className="w-5 h-5 text-indigo-600" />,
      title: 'Growth Strategy',
      desc: 'Content and structure planned for enquiries, bookings, and sales.'
    },
    {
      icon: <Smartphone className="w-5 h-5 text-indigo-600" />,
      title: 'Mobile Ready',
      desc: 'Every design is optimized for mobile, tablet, and desktop.'
    },
    {
      icon: <HelpCircle className="w-5 h-5 text-indigo-600" />,
      title: 'Clear Support',
      desc: 'Simple communication, clear delivery, and practical guidance.'
    }
  ];

  return (
    <section
      className="bg-[#F8FAFC] py-20 px-6 md:px-12 lg:px-20 border-t border-zinc-100 select-none text-center"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Title */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <span className="font-mono text-[9px] tracking-[0.2em] text-indigo-600 font-extrabold uppercase bg-indigo-50 px-3 py-1 rounded inline-block">
            BUILT FOR IMPACT
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Built for Businesses That Want Better Online Growth
          </h2>
        </div>

        {/* 4 small cards layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-zinc-200/60 rounded-xl p-6 text-left space-y-4 hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-2.5 bg-indigo-50 border border-indigo-100 rounded-lg text-indigo-600 w-fit">
                {card.icon}
              </div>
              <div className="space-y-1.5">
                <h3 className="font-sans text-sm font-black text-[#0F172A] tracking-tight">
                  {card.title}
                </h3>
                <p className="font-sans text-xs text-zinc-500 leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
