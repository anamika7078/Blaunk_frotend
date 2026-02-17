

const cards = [
  {
    title: "MAN WEAR",
    img: "https://images.unsplash.com/photo-1516257984-b1b4d707412e",
  },
  {
    title: "WOMAN WEAR",
    img: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
  },
  {
    title: "ACCESSORIES",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
  },
];

export default function CuratedCollectionsSection() {
  return (
    <section className="bg-[#f3f4f1] rounded-xl p-6 md:p-10 mt-8">



      <div className="mb-8">
        <p className="text-sm text-[#7b8464] font-semibold">
          CURATED COLLECTIONS
        </p>
        <h2 className="text-2xl md:text-4xl font-bold mt-2 text-[#111]">
          Premium Boutique Trade
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        <div className="relative h-[350px] rounded-xl overflow-hidden group shadow-xl border-3 border-transparent animate-ad-border">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
            alt="Boutique Advertisement"
            className="w-full h-full object-cover absolute inset-0 transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f2918] via-[#1f2918]/40 to-transparent"></div>

          {/* Advertisement Tags */}
          <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
            <div className="bg-[#d2a437] text-black text-[10px] font-black px-2 py-1 rounded animate-blink-fast shadow-lg inline-block w-fit">
              TRENDING NOW
            </div>
            <div className="bg-white/20 backdrop-blur-md text-white text-[8px] font-bold px-2 py-0.5 rounded border border-white/30 uppercase tracking-widest w-fit">
              Sponsored
            </div>
          </div>

          <div className="relative z-10 h-full p-6 flex flex-col justify-end">
            <h3 className="text-4xl font-black text-white leading-tight mb-2 italic tracking-tighter animate-text-glow">
              FASHION <br /> EVOLUTION
            </h3>
            <p className="text-gray-200 text-xs mb-5 font-medium opacity-90">
              Handpicked boutique collections from <span className="text-[#d2a437] font-bold">global designers</span>.
            </p>
            <button className="w-full bg-[#d2a437] text-white py-4 rounded-xl font-black text-xs hover:bg-white hover:text-[#4b5a0a] transition-all duration-300 shadow-2xl uppercase tracking-[0.2em] transform active:scale-95 border-2 border-transparent hover:border-[#d2a437]">
              Explore Hub
            </button>
          </div>
        </div>

        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 h-[350px]">
          {cards.map((item, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden group h-full"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute top-3 left-3 bg-black/60 text-white px-3 py-1 rounded text-sm font-semibold">
                {item.title}
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
