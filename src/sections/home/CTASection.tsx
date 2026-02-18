import { ArrowRight } from "lucide-react";


export default function CTASection() {
  return (
    <section className="w-full mt-6 px-4 sm:px-5">
      <div className="relative h-[320px] sm:h-[350px] rounded-2xl sm:rounded-xl overflow-hidden shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2070&auto=format&fit=crop"
          alt="cta"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start px-6 sm:px-12 text-center md:text-left text-white max-w-4xl mx-auto md:mx-0">
          <p className="text-[#d2a437] text-[10px] sm:text-sm font-black tracking-[0.2em] mb-3">
            STRATEGIC B2B
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black leading-tight mb-4 tracking-tight">
            Global Supply Chain Excellence
          </h2>

          <p className="text-xs sm:text-sm md:text-xl text-gray-200 mb-8 max-w-xl font-medium opacity-90">
            Optimize your global trade logistics with Blaunk for your shipping
            solutions.
          </p>

          <button className="flex items-center gap-3 bg-white text-[#1f2918] px-8 py-3.5 rounded-xl font-black text-xs hover:bg-[#d2a437] hover:text-white transition-all shadow-2xl uppercase tracking-widest">
            <span>Learn More</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
