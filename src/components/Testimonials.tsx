import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      quote: "Vantrex Media transformed our online presence completely. Our luxury wellness booking inquiry volume grew significantly since our new website went live. Highly recommended!",
      author: "Rohith Nair",
      role: "Founder, FitZone Wellness",
      location: "Kochi, Kerala"
    },
    {
      id: 2,
      quote: "The team designed custom landing pages and Meta ad creatives for our premium boutique brand. We received exceptional audience response with a clear conversion tracking setup.",
      author: "Anjali Menon",
      role: "Managing Director, Luxora Design",
      location: "Kannur, Kerala"
    },
    {
      id: 3,
      quote: "Their clean communication style and structured process make working with them extremely smooth. Best digital design and marketing team in North Malabar.",
      author: "Gautham Krishna",
      role: "Director, Eduport Group",
      location: "Calicut, Kerala"
    }
  ];

  return (
    <section
      id="testimonials"
      className="bg-white py-24 px-6 md:px-12 lg:px-20 border-t border-zinc-150 select-none text-left"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Title */}
        <div className="space-y-4 max-w-3xl">
          <span className="font-mono text-[9px] tracking-[0.2em] text-indigo-600 font-extrabold uppercase bg-indigo-50 px-3 py-1 rounded">
            REAL OUTCOMES & FEEDBACK
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-extrabold leading-tight text-[#0F172A] mt-2">
            What Our Clients Say
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-500 leading-relaxed">
            Don't just take our word for it. Here is what business owners in Kerala say about VANTREX MEDIA's strategic and visual execution.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#F8FAFC] border border-zinc-200/60 rounded-2xl p-8 flex flex-col justify-between space-y-6 hover:shadow-lg transition-all duration-300 relative group"
            >
              {/* Float quote icon */}
              <Quote className="absolute top-6 right-8 w-10 h-10 text-indigo-200/30 group-hover:text-indigo-200/50 transition-colors pointer-events-none" />

              {/* Star Rating & Quote */}
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="font-sans text-xs sm:text-[13px] text-zinc-600 leading-relaxed italic font-medium">
                  "{rev.quote}"
                </p>
              </div>

              {/* Client Info */}
              <div className="border-t border-zinc-200 pt-5 flex items-center justify-between">
                <div>
                  <h4 className="font-sans text-sm font-black text-[#0F172A] tracking-tight">
                    {rev.author}
                  </h4>
                  <p className="font-sans text-[11px] text-zinc-500 font-semibold mt-0.5">
                    {rev.role}
                  </p>
                </div>
                <span className="font-sans text-[10px] text-indigo-600 font-bold bg-indigo-50 px-2.5 py-1 rounded border border-indigo-100">
                  {rev.location}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
