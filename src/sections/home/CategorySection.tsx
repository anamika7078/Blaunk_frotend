

const categories = [
  { name: "ELECTRONICS", img: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
  { name: "AGRI", img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6" },
  { name: "MANUFACTURAL", img: "https://images.unsplash.com/photo-1581092335397-9583eb92d232" },
  { name: "MEDICAL", img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54" },
  { name: "TEXTILE", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab" },
  { name: "KITCHEN", img: "https://images.unsplash.com/photo-1556911220-bff31c812dba" },
  { name: "GIFTS", img: "https://images.unsplash.com/photo-1512909006721-3d6018887383" },
  { name: "LOGISTICS", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d" },
  { name: "SOFTWARE", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97" },
];

export default function CategorySection() {
  return (
    <section className="p-4 sm:p-10">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 text-center md:text-left">
        <div>
          <p className="text-[10px] sm:text-xs text-[#7b8464] font-black uppercase tracking-[0.2em] mb-2">
            A SERVICE TO EVERY INDIAN MARKET PLACE
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black mt-2 text-[#111] leading-tight max-w-4xl mx-auto md:mx-0">
            Indian BIZ Registered Market Place. Direct Source From Manufacturer & Wholesaler
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        <div className="bg-white text-black rounded-xl p-0 flex flex-col justify-end min-h-[360px] relative overflow-hidden group shadow-lg border border-gray-200">
          <img
            src="https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=2070&auto=format&fit=crop"
            alt="Big Sale Advertisement"
            loading="lazy"
            className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

          <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-20">
            LIVE NOW
          </div>

          <div className="relative z-10 p-6 text-center">
            <div className="inline-block bg-[#d2a437] text-[#1f2918] text-xs font-black px-3 py-1 rounded mb-2">
              LIMITED TIME DEAL
            </div>
            <h3 className="text-3xl font-black text-white leading-tight mb-2 drop-shadow-md">
              MEGA SALE
            </h3>
            <p className="text-gray-200 text-sm mb-4 font-medium drop-shadow-sm">
              Get up to <span className="text-[#d2a437] font-bold text-lg">60% OFF</span> on Bulk Orders
            </p>
            <button className="w-full bg-white text-[#4b5a0a] py-3 rounded font-bold text-sm hover:bg-[#d2a437] hover:text-white transition-all duration-300 shadow-lg uppercase tracking-wider">
              Explore Offers
            </button>
          </div>
        </div>

        <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="text-center group cursor-pointer">
              <div className="w-28 h-28 md:w-32 md:h-32 mx-auto mb-3 rounded-full overflow-hidden border border-gray-500 group-hover:border-[#d2a437] transition-all duration-300">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <p className="font-semibold text-sm md:text-base text-[#222] group-hover:text-[#4b5a0a]">
                {cat.name}
              </p>
            </div>
          ))}

          <div className="text-center cursor-pointer group">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gray-200 flex items-center justify-center mx-auto mb-3 text-xl font-bold group-hover:bg-[#d2a437] group-hover:text-white transition-colors duration-300">
              MORE +
            </div>
            <p className="font-semibold text-sm md:text-base group-hover:text-[#4b5a0a]">VIEW ALL</p>
          </div>
        </div>

      </div>
    </section>
  );
}
