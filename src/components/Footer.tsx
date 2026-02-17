export default function Footer() {
  return (
    <footer className="bg-[#1f2918] text-white ">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold">
              B
            </div>
            <h2 className="text-xl md:text-2xl font-bold">Blaunk Global</h2>
          </div>

          <p className="text-gray-300 leading-6 text-sm">
            India’s leading multi-business aggregator platform connecting
            trade, logistics, and retail.
          </p>
        </div>

        <div>
          <h3 className="text-[#d2a437] font-semibold mb-3 text-sm">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>About Us</li>
            <li>Contact Support</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#d2a437] font-semibold mb-3 text-sm">
            User Dashboard
          </h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>B2B Trade Portal</li>
            <li>Logistics & Supply Chain</li>
            <li>Become a Partner</li>
            <li>Gifts & Gifting</li>
          </ul>
        </div>

        <div>
          <h3 className="text-[#d2a437] font-semibold mb-3 text-sm">
            Newsletter
          </h3>
          <p className="text-gray-300 mb-3 text-sm">
            Subscribe to get the latest trade updates.
          </p>

          <div className="flex overflow-hidden rounded-md">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 bg-[#2b3523] px-3 py-2 text-white outline-none text-sm"
            />
            <button className="bg-[#d2a437] text-black px-4 font-bold text-sm">
              JOIN
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-[#2e3827] px-4 sm:px-6 md:px-10 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-gray-400 text-xs">
        <span>© 2026 BLAUNK GLOBAL. ALL RIGHTS RESERVED.</span>
        <span>INDIA . USA . GLOBAL</span>
      </div>
    </footer>
  );
}
