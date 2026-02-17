import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    LayoutDashboard,
    Package,
    Settings,
    LogOut,
    ChevronLeft,
    ChevronRight,
    Monitor,
    Tag,
    Star,
    Users,
    ShieldCheck,
    MessageSquare
} from "lucide-react";

interface SidebarItemProps {
    icon: any;
    label: string;
    path: string;
    collapsed: boolean;
    active: boolean;
}

const SidebarItem = ({ icon: Icon, label, path, collapsed, active }: SidebarItemProps) => (
    <Link
        to={path}
        className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 group ${active
            ? "bg-[#d2a437] text-white shadow-lg shadow-[#d2a437]/20"
            : "text-gray-400 hover:text-white hover:bg-white/5"
            }`}
    >
        <Icon size={22} className={`${active ? "text-white" : "group-hover:text-[#d2a437] transition-colors"}`} />
        {!collapsed && <span className="font-bold text-sm tracking-wide">{label}</span>}
    </Link>
);

export default function AdminLayout({ children }: { children: ReactNode }) {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    const menuItems = [
        { icon: LayoutDashboard, label: "Overview", path: "/dashboard" },
        { icon: Package, label: "Products", path: "/dashboard/products" },
        { icon: Monitor, label: "Homepage Sections", path: "/dashboard/sections" },
        { icon: Tag, label: "Advertisements", path: "/dashboard/ads" },
        { icon: Star, label: "Festivals", path: "/dashboard/festivals" },
        { icon: MessageSquare, label: "Inquiries", path: "/dashboard/contacts" },
        { icon: Users, label: "Users & Admins", path: "/dashboard/users" },
    ];

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/login";
    };

    return (
        <div className="flex min-h-screen bg-[#0f140a]">
            {/* Sidebar */}
            <aside
                className={`bg-[#1a2113] border-r border-white/5 flex flex-col transition-all duration-500 ease-in-out z-50 ${collapsed ? "w-20" : "w-72"
                    }`}
            >
                {/* Brand */}
                <div className="p-6 mb-4 flex items-center justify-between">
                    {!collapsed && (
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#d2a437] to-[#a38a44] flex items-center justify-center font-black text-white shadow-xl">
                                B
                            </div>
                            <div>
                                <h1 className="text-white font-black text-lg tracking-tighter">BLAUNK</h1>
                                <p className="text-[#d2a437] text-[8px] font-black uppercase tracking-[0.2em]">Quantum Admin</p>
                            </div>
                        </div>
                    )}
                    {collapsed && (
                        <div className="mx-auto w-10 h-10 rounded-2xl bg-[#d2a437] flex items-center justify-center font-black text-white shadow-xl">
                            B
                        </div>
                    )}
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-4 space-y-2 overflow-y-auto hide-scrollbar">
                    {menuItems.map((item) => (
                        <SidebarItem
                            key={item.path}
                            {...item}
                            collapsed={collapsed}
                            active={location.pathname === item.path}
                        />
                    ))}
                </nav>

                {/* Sidebar Footer */}
                <div className="p-4 border-t border-white/5 space-y-2">
                    <button
                        onClick={() => setCollapsed(!collapsed)}
                        className="w-full flex items-center gap-4 px-4 py-3 text-gray-400 hover:text-white transition-colors"
                    >
                        {collapsed ? <ChevronRight size={22} /> : <ChevronLeft size={22} />}
                        {!collapsed && <span className="text-xs font-bold uppercase tracking-widest">Collapse Menu</span>}
                    </button>

                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all duration-300"
                    >
                        <LogOut size={22} />
                        {!collapsed && <span className="font-bold text-sm tracking-wide">Logout</span>}
                    </button>
                </div>
            </aside>

            {/* Content Area */}
            <main className="flex-1 overflow-x-hidden">
                {/* Top Header for Admin */}
                <header className="h-20 bg-[#1a2113]/50 backdrop-blur-xl border-b border-white/5 px-8 flex items-center justify-between sticky top-0 z-40">
                    <div className="flex items-center gap-2">
                        <ShieldCheck size={18} className="text-[#d2a437]" />
                        <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                            Security Protocol Level 4 Active
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex flex-col text-right mr-2">
                            <span className="text-white text-sm font-black">{user.name || "Admin"}</span>
                            <span className="text-[#d2a437] text-[10px] uppercase font-bold tracking-widest">{user.role || "Super Administrator"}</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-[#d2a437] border-2 border-white/10 flex items-center justify-center text-black font-black">
                            {user.name?.charAt(0) || "A"}
                        </div>
                    </div>
                </header>

                <section className="bg-[#f8f9fa] min-h-[calc(100vh-80px)]">
                    {children}
                </section>
            </main>
        </div>
    );
}
