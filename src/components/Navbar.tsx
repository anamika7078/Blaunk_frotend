import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Globe, User, Menu, ChevronDown, ChevronLeftCircle, ChevronRightCircleIcon, ShieldCheck } from "lucide-react";
import MegaMenu from "./MegaMenu";

export default function Navbar() {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  return (
    <header className="w-full relative z-50">

      <div className="bg-[#4b5a0a] text-[#e7d37a] text-xs sm:text-sm flex items-center justify-center gap-2 px-3 h-9 text-center">
        <span className="bg-[#d2a437] text-black px-2 py-1 font-semibold rounded text-xs">
          INTRODUCING
        </span>
        <span className="hidden sm:block">
          Get up to 25% off on Industrial Machinery trade this summer season.
        </span>
        <button className="underline text-xs">View More</button>
      </div>

      <nav className="bg-[#1f2918] text-white flex justify-between  items-center px-4 sm:px-6 h-16 sm:h-20 relative">

        <div className="flex items-center gap-2 min-w-[160px]">

          <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold">
            B
          </div>
          <span className="text-lg sm:text-2xl font-bold">
            Blaunk Global
          </span>

          <button
            onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
            className={`focus:outline-none ml-1 p-1 rounded-full transition-all duration-300 flex items-center justify-center shadow-[0_0_10px_rgba(210,164,55,0.6)] ${isMegaMenuOpen ? 'bg-white text-[#4b5a0a] rotate-180' : 'bg-[#d2a437] text-[#1f2918] animate-pulse hover:animate-none hover:scale-110'}`}
          >
            <ChevronRightCircleIcon size={22} strokeWidth={3} />
          </button>
        </div>

        <div className="hidden md:flex flex-1 max-w-3xl mx-6">
          <div className="flex items-center bg-white rounded-md overflow-hidden w-full">
            <input
              type="text"
              placeholder="Search for products, brands and companies..."
              className="w-full px-4 h-10 text-black outline-none text-sm"
            />
            <button className="bg-[#6b7b1e] h-10 px-4 flex items-center justify-center">
              <Search size={16} />
            </button>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-6 text-sm">
          <div className="flex items-center gap-1 cursor-pointer">
            <Globe size={14} />
            <span>EN/USD</span>
          </div>

          {localStorage.getItem("token") ? (
            <div className="flex items-center gap-4">
              <Link to="/dashboard" className="flex items-center gap-1 text-[#d2a437] font-bold">
                <ShieldCheck size={14} />
                <span>Dashboard</span>
              </Link>
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("user");
                  window.location.reload();
                }}
                className="flex items-center gap-1 hover:text-[#d2a437] transition-colors"
              >
                <User size={14} />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <Link to="/login" className="flex items-center gap-1 hover:text-[#d2a437] transition-colors">
              <User size={14} />
              <span>Login</span>
            </Link>
          )}

          <Link to="/contact" className="hover:text-[#d2a437] transition-colors">
            Contact
          </Link>

          <div className="flex items-center gap-1">
            <span>🇮🇳 India</span>
          </div>
        </div>

        <button className="ml-auto md:hidden">
          <Menu size={22} />
        </button>

      </nav>

      <div className="md:hidden bg-[#1f2918] px-4 pb-3">
        <div className="flex items-center bg-white rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 h-9 text-black outline-none text-sm"
          />
          <button className="bg-[#6b7b1e] h-9 px-3 flex items-center justify-center">
            <Search size={14} />
          </button>
        </div>
      </div>

      <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />

    </header>
  );
}
