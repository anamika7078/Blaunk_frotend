import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Globe, User, Menu, ChevronDown, ChevronLeftCircle, ChevronRightCircleIcon, ShieldCheck } from "lucide-react";
import MegaMenu from "./MegaMenu";
import BGTMegaMenu from "./BGTMegaMenu";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState<"bgt" | "product" | null>(null);

  return (
    <header className="w-full relative z-50">

      <div className="bg-[#4b5a0a] text-[#e7d37a] text-xs sm:text-sm flex items-center justify-center gap-2 px-3 h-9 text-center border-b border-[#d2a437]/20">
        <span className="bg-[#d2a437] text-black px-2 py-1 font-semibold rounded text-xs">
          INTRODUCING
        </span>
        <span className="hidden sm:block">
          Get up to 25% off on Industrial Machinery trade this summer season.
        </span>
        <button className="underline text-xs">View More</button>
      </div>

      <nav
        className="bg-[#4b5a0a] text-white flex justify-between items-center px-4 sm:px-6 h-16 sm:h-20 relative"
        onMouseLeave={() => setActiveMenu(null)}
      >

        <div className="flex items-center gap-4 min-w-[300px]">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white text-[#4b5a0a] flex items-center justify-center font-bold text-xl shadow-inner">
              <img src="https://static.vecteezy.com/system/resources/previews/010/160/674/non_2x/glitter-sparkle-star-icon-logo-design-free-vector.jpg" alt="logo" className="w-6 h-6 rounded-full" />
            </div>
            <span className="text-xl sm:text-2xl font-black tracking-tight text-white drop-shadow-sm">
              Blaunk Global
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-2 ml-4">
            <button
              onMouseEnter={() => setActiveMenu("bgt")}
              className={`bg-white text-[#b91c1c] font-black text-[11px] px-4 py-1.5 rounded-full uppercase tracking-tighter shadow-md hover:bg-gray-100 transition-all ${activeMenu === "bgt" ? "ring-2 ring-white/30" : ""}`}
            >
              BGT
            </button>
            <button
              onMouseEnter={() => setActiveMenu("product")}
              className={`bg-transparent text-white font-bold text-[11px] px-4 py-1.5 border-2 border-white/60 rounded-md uppercase tracking-tighter hover:bg-white/10 transition-all ${activeMenu === "product" ? "bg-white/10" : ""}`}
            >
              Product
            </button>
          </div>
        </div>

        <div className="hidden md:flex flex-1 max-w-2xl mx-6">
          <div className="flex items-center bg-white rounded-md overflow-hidden w-full shadow-lg border border-white/20">
            <input
              type="text"
              placeholder="Search for products, brands or companies..."
              className="w-full px-4 h-11 text-black outline-none text-[15px] placeholder:text-gray-400 font-medium"
            />
            <button className="bg-[#d2a437] h-11 px-6 flex items-center justify-center text-[#1f2918] hover:bg-white transition-colors">
              <Search size={18} strokeWidth={3} />
            </button>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-6 text-sm font-semibold">
          <div className="flex items-center gap-1.5 cursor-pointer hover:text-[#d2a437] transition-colors">
            <Globe size={16} />
            <span>EN/USD</span>
          </div>

          {localStorage.getItem("token") ? (
            <div className="flex items-center gap-4">
              <Link to="/dashboard" className="flex items-center gap-1.5 text-[#d2a437] hover:scale-105 transition-transform">
                <ShieldCheck size={16} />
                <span>Dashboard</span>
              </Link>
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  localStorage.removeItem("user");
                  window.location.reload();
                }}
                className="flex items-center gap-1.5 hover:text-[#d2a437] transition-colors"
              >
                <User size={16} />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <Link to="/login" className="flex items-center gap-1.5 hover:text-[#d2a437] transition-colors">
              <User size={16} />
              <span>Login</span>
            </Link>
          )}

          <div className="flex items-center gap-2 pl-2 border-l border-white/20">
            <span className="text-lg">🇮🇳</span>
            <span className="text-xs uppercase tracking-widest text-white/80">India</span>
          </div>
        </div>

        <button className="ml-auto md:hidden text-white" onClick={() => setActiveMenu(activeMenu ? null : "product")}>
          <Menu size={26} />
        </button>

        <MegaMenu isOpen={activeMenu === "product"} onClose={() => setActiveMenu(null)} />
        <BGTMegaMenu isOpen={activeMenu === "bgt"} onClose={() => setActiveMenu(null)} />

      </nav>

      <div className="md:hidden bg-[#4b5a0a] px-4 pb-4">
        <div className="flex items-center bg-white rounded-md overflow-hidden shadow-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 h-10 text-black outline-none text-sm"
          />
          <button className="bg-[#d2a437] h-10 px-4 flex items-center justify-center text-[#1f2918]">
            <Search size={16} strokeWidth={3} />
          </button>
        </div>
      </div>

    </header>
  );
}
