import { useState } from "react";
import ServerCards from "./ServerCards";
import LogisticsCards from "./LogisticsCards";

export default function LogisticsHeroSection() {
  const [active, setActive] = useState("server");

  return (
    <section className="bg-[#eef2f5] rounded-xl p-6 md:p-10 ">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

        <div>
          <p className="text-sm text-[#6b7b1e] font-semibold">
            LOGISTICS EXCELLENCE
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Smart Logistics Solutions For Global Trade
          </h2>

          <p className="text-gray-600 mt-4">
            Connect with trusted logistics partners and servers for seamless
            supply chain management.
          </p>

          <div className="flex gap-4 mt-6">
            <button
              onClick={() => setActive("server")}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${active === "server"
                  ? "bg-[#d2a437] text-black shadow-md border-[#d2a437]"
                  : "bg-white border border-gray-300 hover:bg-gray-50"
                }`}
            >
              Find Services
            </button>

            <button
              onClick={() => setActive("logistics")}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${active === "logistics"
                  ? "bg-[#1f2918] text-white shadow-md border-[#1f2918]"
                  : "bg-white border border-gray-300 hover:bg-gray-50"
                }`}
            >
              Find Logistics
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
            className="w-full md:w-[400px] h-[320px] md:h-[320px] object-cover rounded-xl shadow-lg border border-white"
            alt="logistics"
          />
        </div>
      </div>

      <div className="mt-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
        {active === "server" && <ServerCards />}
        {active === "logistics" && <LogisticsCards />}
      </div>
    </section>
  );
}
