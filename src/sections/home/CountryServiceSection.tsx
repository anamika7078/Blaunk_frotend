const countries = [
  {
    name: "India",
    img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
    count: 45,
  },
  {
    name: "United States",
    img: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74",
    count: 32,
  },
  {
    name: "United Kingdom",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    count: 28,
  },
  {
    name: "Germany",
    img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    count: 22,
  },
  {
    name: "UAE",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    count: 18,
  },
  {
    name: "Singapore",
    img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd",
    count: 15,
  },
];

export default function CountryServiceSection() {
  return (
    <section className="bg-white rounded-[2.5rem] p-8 md:p-14 mt-12 border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] section-optimize">
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 px-2">
        <div>
          <p className="text-[10px] text-[#7b8464] font-black uppercase tracking-[0.4em] mb-4">
            Global Presence
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-[#111] tracking-tight">
            Countries Where We <span className="text-[#4b5a0a]">Provide Services</span>
          </h2>
        </div>
        <p className="text-gray-400 font-medium text-sm md:text-base max-w-xs md:text-right">
          Expanding our horizons to deliver excellence across borders.
        </p>
      </div>

      <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth no-scrollbar animate-gpu">
        {countries.map((item, i) => (
          <div
            key={i}
            className="group min-w-[280px] md:min-w-[320px] bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.02)] border border-gray-100 flex-shrink-0 snap-start hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 animate-gpu"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-sm">
                <p className="text-[#4b5a0a] font-bold text-xs uppercase tracking-wider">
                  {item.count}+ Services
                </p>
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-bold text-xl text-[#111] transition-colors group-hover:text-[#4b5a0a]">
                {item.name}
              </h3>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">Available Now</span>
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator for mobile */}
      <div className="md:hidden flex justify-center mt-2">
        <div className="w-12 h-1 bg-gray-100 rounded-full overflow-hidden">
          <div className="w-1/3 h-full bg-[#4b5a0a]/30 animate-[shimmer_2s_infinite]" />
        </div>
      </div>
    </section>
  );
}
