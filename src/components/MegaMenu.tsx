import {
    ShoppingBag,
    Store,
    Truck,
    Shirt,
    Hotel,
    Phone,
    Coffee,
    Home,
    Car,
    Tag,
    Link,
    ChevronRight,
    Sparkles
} from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

const categories = [
    {
        title: "Product",
        icon: ShoppingBag,
        items: ["Cake", "Pastry", "Oven Bread", "Cookies", "Chocolate", "Gift Items"],
        color: "bg-orange-100 text-orange-600"
    },
    {
        title: "Store",
        icon: Store,
        items: ["Visit Store", "New Arrivals", "Best Sellers"],
        color: "bg-blue-100 text-blue-600"
    },
    {
        title: "Logistic",
        icon: Truck,
        items: ["HR Drives", "Book Taxi", "Helicopter", "Air series", "Cargo/Logistic", "Courier", "Vehicle on rent"],
        color: "bg-green-100 text-green-600"
    },
    {
        title: "Boutique",
        icon: Shirt,
        items: ["Mens Collection", "Women Collection", "Kids Collection", "Embroidery & Elite"],
        color: "bg-purple-100 text-purple-600"
    },
    {
        title: "Hotel",
        icon: Hotel,
        items: ["Hotel Booking", "Marriage Hall", "Caterers"],
        color: "bg-rose-100 text-rose-600"
    },
    {
        title: "Dial",
        icon: Phone,
        items: ["Business"],
        color: "bg-cyan-100 text-cyan-600"
    },
    {
        title: "Leisure",
        icon: Coffee,
        items: ["Spa", "Artist"],
        color: "bg-amber-100 text-amber-600"
    },
    {
        title: "Home Solution",
        icon: Home,
        items: ["Repair & Services", "Cleaning", "Gardening", "Helper"],
        color: "bg-teal-100 text-teal-600"
    },
    {
        title: "Automobile",
        icon: Car,
        items: ["Mechanic", "EV Station", "Fuel Station", "EV charging", "Car modify"],
        color: "bg-indigo-100 text-indigo-600"
    },
    {
        title: "Pre owned sell",
        icon: Tag,
        items: ["Buy & Sell"],
        color: "bg-lime-100 text-lime-600"
    },
    {
        title: "B Connect",
        icon: Link,
        items: ["Community"],
        color: "bg-fuchsia-100 text-fuchsia-600"
    }
];

interface MegaMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
    if (!isOpen) return null;

    return (
        <div
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-t border-[#d2a437]/30 shadow-2xl z-50 overflow-hidden transform origin-top animate-in fade-in slide-in-from-top-4 duration-300"
            onMouseLeave={onClose}
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4b5a0a] via-[#d2a437] to-[#4b5a0a]" />

            <div className="container mx-auto px-6 py-10">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-8 gap-y-10">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="group flex flex-col space-y-4 p-3 rounded-xl transition-all duration-300 hover:bg-gray-50 hover:shadow-sm border border-transparent hover:border-gray-100"
                        >
                            <div className="flex items-center gap-3 border-b border-dashed border-gray-200 pb-3 group-hover:border-[#d2a437]/50 transition-colors">
                                <div className={`p-2 rounded-lg ${category.color} shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                                    <category.icon size={20} strokeWidth={2.5} />
                                </div>
                                <span className="text-[#1f2918] font-bold text-lg tracking-wide group-hover:text-[#d2a437] transition-colors">
                                    {category.title}
                                </span>
                            </div>

                            <ul className="space-y-2.5">
                                {category.items.map((item, idx) => (
                                    <li key={idx} className="relative">
                                        <RouterLink
                                            to="#"
                                            className="group/item flex items-center gap-2 text-gray-600 hover:text-[#4b5a0a] text-sm font-medium transition-all duration-200 hover:translate-x-1"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover/item:bg-[#d2a437] transition-colors" />
                                            {item}
                                            <ChevronRight
                                                size={14}
                                                className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-[#d2a437]"
                                            />
                                        </RouterLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Featured / Promo Box */}
                    <div className="col-span-1 hidden xl:flex flex-col justify-between bg-gradient-to-br from-[#4b5a0a] to-[#1f2918] rounded-2xl p-6 text-white text-center shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                        <div>
                            <div className="mx-auto w-12 h-12 bg-[#d2a437] rounded-full flex items-center justify-center mb-4 text-[#1f2918] animate-pulse">
                                <Sparkles size={24} fill="currentColor" />
                            </div>
                            <h3 className="font-bold text-xl mb-2 text-[#e7d37a]">Summer Sale</h3>
                            <p className="text-xs text-gray-300 leading-relaxed opacity-90">
                                Get up to <span className="text-white font-bold text-sm">25% OFF</span> on all industrial machinery. Limited time offer!
                            </p>
                        </div>

                        <button className="w-full mt-4 py-2 bg-white text-[#4b5a0a] font-bold text-xs rounded shadow-md hover:bg-[#d2a437] hover:text-white transition-colors uppercase tracking-wider">
                            Explore Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
