

export default function SustainabilitySection() {
  return (
    <section className="bg-[#f5f2d8] rounded-xl p-6 md:p-10">



      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

        <div>
          <p className="inline-block bg-[#e8e2b8] text-[#4b5a0a] text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Sustainable Commerce
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-[#111] leading-tight mb-4">
            Blaunk for the Planet: Ethical & Green Trading
          </h2>

          <p className="text-gray-700 text-sm md:text-base leading-7 mb-6">
            We prioritize suppliers who adhere to strict environmental
            standards. Join our network of eco-conscious businesses reducing
            carbon footprints through smart logistics and sustainable sourcing.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            <button className="bg-white border px-4 py-2 rounded-md text-sm font-semibold">
              ♻ Carbon Neutral Shipping
            </button>

            <button className="bg-white border px-4 py-2 rounded-md text-sm font-semibold">
              🌿 Ethical Sourcing Verified
            </button>
          </div>

          <button className="text-[#1f2918] font-semibold underline">
            Read Our Ethical Commitment →
          </button>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070&auto=format&fit=crop"
            alt="sustainability"
            className="w-full h-[300px] md:h-[380px] object-cover rounded-xl"
          />

          <div className="absolute bottom-4 left-4 bg-white shadow-lg rounded-lg p-4 max-w-[280px]">
            <p className="text-sm text-gray-700">
              “We helped 4,000+ businesses transition to zero-waste packaging
              solutions in 2023 alone.”
            </p>
            <p className="text-xs text-gray-500 mt-2">
              — Sarah Chen, Head of Sustainability
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
