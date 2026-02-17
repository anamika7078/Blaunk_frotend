import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="w-full mt-6 px-5">
      <div className="relative h-[300px] sm:h-[350px] rounded-xl overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2070&auto=format&fit=crop"
          alt="cta"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 text-white max-w-2xl">
          <p className="text-[#d2a437] text-sm font-semibold mb-3">
            STRATEGIC B2B
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Global Supply Chain Excellence
          </h2>

          <p className="text-sm md:text-2xl text-gray-200 mb-6">
            Optimize your global trade logistics with Blaunk for your shipping
            solutions.
          </p>

          <button className="flex bg-white text-black px-6 py-3 rounded-md font-semibold w-fit">
           <span>
            
             Learn More 
            </span>
            <span>

             <ArrowRight />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
