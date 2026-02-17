import { Users, Globe, Package, TrendingUp } from "lucide-react";

const stats = [
    { value: "400+", label: "B2B Clients Served", icon: Users, color: "from-blue-500 to-cyan-500" },
    { value: "26+", label: "Customers Served", icon: TrendingUp, color: "from-emerald-500 to-teal-500" },
    { value: "29+", label: "Countries", icon: Globe, color: "from-purple-500 to-pink-500" },
    { value: "825+", label: "Products & Services", icon: Package, color: "from-amber-500 to-orange-500" },
];

export default function StatsSection() {
    return (
        <section className="my-20 section-optimize">
            <div className="relative bg-gradient-to-br from-[#1f2918] via-[#2a3a1f] to-[#1f2918] rounded-[40px] p-12 md:p-16 overflow-hidden shadow-2xl border border-[#d2a437]/20">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#d2a437]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d2a437]/5 rounded-full blur-3xl" />

                {/* Content */}
                <div className="relative z-10">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 mb-4">
                            <span className="h-px w-12 bg-[#d2a437]" />
                            <p className="text-[10px] text-[#d2a437] font-black uppercase tracking-[0.3em]">
                                Global Impact Metrics
                            </p>
                            <span className="h-px w-12 bg-[#d2a437]" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4 italic tracking-tight">
                            Powering <span className="text-[#d2a437]">Global Trade</span>
                        </h2>
                        <p className="text-gray-400 font-medium max-w-2xl mx-auto">
                            Trusted by businesses worldwide to deliver excellence across borders and industries.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="group relative bg-[#0f1410]/60 backdrop-blur-md rounded-3xl p-8 border border-white/5 hover:border-[#d2a437]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#d2a437]/10"
                            >
                                {/* Subtle Glow on Hover */}
                                <div className="absolute inset-0 bg-[#d2a437]/5 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500" />

                                {/* Icon */}
                                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 shadow-lg`}>
                                    <stat.icon size={24} className="text-white" />
                                </div>

                                {/* Value */}
                                <div className="relative mb-2">
                                    <h3 className="text-5xl font-black text-white tracking-tight">
                                        {stat.value}
                                    </h3>
                                </div>

                                {/* Label */}
                                <p className="relative text-xs font-bold text-gray-400 uppercase tracking-widest">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
