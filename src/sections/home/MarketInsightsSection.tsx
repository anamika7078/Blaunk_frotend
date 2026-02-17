export default function MarketInsightsSection() {
  return (
    <section className="bg-[#f3f4f1] rounded-xl p-6 md:p-8 mt-8">

      <div className="bg-[#6b7b1e] text-white text-center text-xs md:text-sm font-semibold py-2 rounded-md mb-6 tracking-wide">
        INDIAN BIZ REGISTERED MARKET PLACE DIRECT SOURCE FROM MANUFACTURER & WHOLESALER
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        <div className="bg-gradient-to-br from-[#4b5a0a] to-[#2f3b18] text-white rounded-xl p-6 min-h-[320px] flex flex-col justify-between">
          <div>
            <p className="text-xs bg-black/20 inline-block px-3 py-1 rounded mb-3">
              BLAUNK GLOBAL TRADE (BGT) B2B PLATFORM
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
              Scale Your Factory Output
            </h2>

            <p className="text-gray-200 text-sm">
              Join thousands of manufacturers using Blaunk Global for supply
              chain optimization and raw material sourcing.
            </p>
          </div>

          <div className="flex gap-3 mt-6">
            <button className="bg-white text-black px-4 py-2 rounded-md text-sm font-semibold">
              Find wholesalers
            </button>
            <button className="bg-white text-black px-4 py-2 rounded-md text-sm font-semibold">
              Find manufacturers
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:col-span-2">

          <div className="bg-[#e6b71e] rounded-lg p-4">
            <p className="text-xs font-semibold border border-black rounded px-2 py-1 inline-block mb-3">
              Unlimited leads
            </p>
            <p className="text-sm mb-4">
              Connect with verified suppliers in under 24 hours.
            </p>
            <button className="bg-black text-white px-4 py-2 rounded text-sm">
              Explore Now
            </button>
          </div>

          <div className="bg-[#5f6b1b] text-white rounded-lg p-4">
            <p className="text-xs border border-white rounded px-2 py-1 inline-block mb-3">
              International marketplace
            </p>
            <p className="text-sm mb-4">
              Quality and ethical trade practices globally.
            </p>
            <button className="bg-[#d2a437] text-black px-4 py-2 rounded text-sm">
              View Directory
            </button>
          </div>

          <div className="bg-white rounded-lg p-4 border">
            <p className="text-xs border rounded px-2 py-1 inline-block mb-3">
              Empowering MSME
            </p>
            <p className="text-sm mb-4">
              Helping small and medium enterprises grow globally.
            </p>
            <button className="bg-[#6b7b1e] text-white px-4 py-2 rounded text-sm">
              Request Quote
            </button>
          </div>

          <div className="bg-white rounded-lg p-4 border">
            <p className="text-xs border rounded px-2 py-1 inline-block mb-3">
              Trade with 0% commission
            </p>
            <p className="text-sm">
              Free for farmers and agricultural products.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
