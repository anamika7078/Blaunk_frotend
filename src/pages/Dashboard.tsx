import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LayoutDashboard, Users, ShoppingBag, BarChart3, Package, MessageSquare } from "lucide-react";
import api from "../services/api";

export default function Dashboard() {
  const navigate = useNavigate();
  const [inquiryCount, setInquiryCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const res = await api.get("/contacts");
        setInquiryCount(res.data.length);
      } catch (error) {
        console.error("Dashboard fetch error:", error);
      }
    };
    fetchCounts();
  }, []);

  const stats = [
    { label: "Total Products", value: "1,284", icon: Package, color: "bg-blue-500" },
    { label: "Active Orders", value: "43", icon: ShoppingBag, color: "bg-emerald-500" },
    { label: "Total Inquiries", value: inquiryCount.toString(), icon: MessageSquare, color: "bg-amber-500" },
    { label: "Monthly Revenue", value: "$42,500", icon: BarChart3, color: "bg-purple-500" },
  ];

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
          <div>
            <h1 className="text-4xl font-black text-[#1f2918] tracking-tight">System Overview</h1>
            <p className="text-gray-500 font-medium">Global operations and inventory status.</p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => navigate("/dashboard/products")}
              className="bg-[#d2a437] text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-[#d2a437]/20 hover:bg-black transition-all transform hover:-translate-y-1"
            >
              + New Product
            </button>
            <button
              onClick={() => navigate("/dashboard/sections")}
              className="bg-[#1f2918] text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-[#d2a437] transition-all transform hover:-translate-y-1"
            >
              Add Section
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white p-6 rounded-[32px] shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-2xl ${stat.color} bg-opacity-10`}>
                  <stat.icon size={24} className={stat.color.replace('bg-', 'text-')} />
                </div>
                <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-lg">+12.5%</span>
              </div>
              <h3 className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-1">{stat.label}</h3>
              <p className="text-3xl font-black text-[#1f2918]">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-[40px] p-8 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-black text-[#1f2918]">Recent Activity</h2>
              <button className="text-[#d2a437] font-bold text-sm hover:underline">View All</button>
            </div>
            <div className="space-y-6">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-3xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                  <div className="w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400">
                    <LayoutDashboard size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-gray-900">New product entry: Industrial Drill X-200</p>
                    <p className="text-xs text-gray-500">2 hours ago • By System Admin</p>
                  </div>
                  <span className="text-xs font-black text-gray-400">PENDING</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1f2918] to-[#0f140a] rounded-[40px] p-8 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#d2a437]/20 rounded-full blur-3xl" />
            <h2 className="text-2xl font-black mb-4 italic tracking-tighter">BGT Cloud <br /> <span className="text-[#d2a437]">Optimization</span></h2>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">Your global supply chain nodes are currently performing at 98.4% efficiency. Optimize your routes now.</p>
            <button className="w-full bg-[#d2a437] text-black font-black py-4 rounded-2xl hover:bg-white transition-all duration-300 uppercase tracking-widest text-xs">
              Run Analysis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
