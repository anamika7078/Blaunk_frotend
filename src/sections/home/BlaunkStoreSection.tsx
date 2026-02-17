import { useState } from "react";
import { storeCategories } from "../../utils/data/storeData";
import { House, ArrowRight } from "lucide-react";
import ShopRegistrationModal from "../../components/ShopRegistrationModal";

const tabs = ["PET SHOP", "FLOWER SHOP", "ELECTRONICS"];

export default function BlaunkStoreSection() {
  const [active, setActive] = useState("PET SHOP");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-white rounded-2xl p-6 md:p-10 my-10 shadow-sm border border-gray-100 section-optimize">
      <ShopRegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Header Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 p-6 border-2 border-dashed border-[#a38a44]/30 rounded-2xl mb-12 bg-[#fdfaf3]">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-[#a38a44] rounded-xl text-white shadow-lg animate-bounce">
            <House size={32} />
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-[#1f2918] tracking-tight text-center lg:text-left">BLAUNK STORE</h2>
            <p className="text-[#a38a44] font-bold text-xs uppercase tracking-widest mt-1 text-center lg:text-left">Your Local Marketplace, Global Reach</p>
          </div>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="group bg-[#a38a44] text-white px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-[0_20px_40px_-15px_rgba(163,138,68,0.5)] hover:scale-105 transition-all duration-300 whitespace-nowrap flex items-center gap-3"
        >
          Register Your Shop
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* Left Ad Column */}
        <div className="relative h-[450px] lg:h-auto rounded-2xl overflow-hidden group shadow-xl border-4 border-transparent animate-ad-border">
          <img
            src="https://images.unsplash.com/photo-1601333144130-8cbb312386b6?q=80&w=1974&auto=format&fit=crop"
            alt="Store Advertisement"
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f2918] via-[#1f2918]/60 to-transparent"></div>

          {/* Advertisement Tags */}
          <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
            <div className="bg-red-600 text-white text-[10px] font-black px-2 py-1 rounded animate-blink-fast shadow-lg w-fit">
              LIVE DEALS
            </div>
            <div className="bg-white/20 backdrop-blur-md text-white text-[8px] font-bold px-2 py-0.5 rounded border border-white/30 uppercase tracking-widest w-fit">
              Sponsored
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-8 text-white z-10">
            <h3 className="text-4xl font-black mb-2 leading-none italic animate-text-glow">LOCAL <br /> GEMS</h3>
            <p className="text-xs mb-6 font-medium text-gray-300 leading-relaxed">Discover verified shops in your city with <span className="text-[#d2a437] font-bold">Exclusive Discounts</span>.</p>
            <button className="w-full bg-[#d2a437] text-white py-4 rounded-xl font-black text-xs hover:bg-white hover:text-[#a38a44] transition-all duration-300 uppercase tracking-widest shadow-2xl border-2 border-transparent hover:border-[#d2a437]">
              Explore Now
            </button>
          </div>
        </div>

        {/* Right Content Column */}
        <div className="lg:col-span-3">
          {/* Navigation Tabs */}
          <div className="flex items-center gap-1 bg-gray-100 p-1.5 rounded-2xl w-fit mb-8 shadow-inner">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className={`px-6 py-2.5 rounded-xl text-xs font-black transition-all duration-300 uppercase tracking-wider ${active === tab
                  ? "bg-[#1f2918] text-white shadow-lg scale-105"
                  : "text-gray-500 hover:text-[#1f2918] hover:bg-white"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {storeCategories[active].map((item: any, i: number) => (
              <div
                key={i}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col animate-gpu"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold text-[#1f2918] shadow-sm">
                    Verified Shop
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-black text-[#1f2918] group-hover:text-[#a38a44] transition-colors">{item.title}</h3>
                  <p className="text-xs text-gray-500 mt-1 mb-4 font-medium italic">{item.sub}</p>

                  <div className="bg-[#fdfaf3] border border-[#a38a44]/20 rounded-xl p-3 text-[11px] text-[#7a6834] font-bold mb-5 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#a38a44] animate-pulse" />
                    {item.offer}
                  </div>

                  <button className="mt-auto w-full group/btn relative overflow-hidden bg-white border-2 border-[#1f2918] text-[#1f2918] py-2.5 rounded-xl font-black text-xs transition-all duration-300 hover:text-white uppercase tracking-widest">
                    <span className="relative z-10">Visit Shop</span>
                    <div className="absolute inset-0 bg-[#1f2918] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
