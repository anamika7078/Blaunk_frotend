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
} from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

const productCategories = [
    {
        title: "Cake",
        image: "/cake.jpeg",
        items: [
            "Bento Cakes", "Bomb Cakes", "Designer Cakes",
            "Cheesecake", "Cupcakes", "Heart Cakes",
            "Eggless Cakes", "Jar Cakes", "Midnight Cakes",
            "Photo Cakes", "Pinata Cakes", "Rainbow Cakes",
            "Fruit Cakes", "Tea Cakes", "Pastry"
        ],
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
        items: ["HR Drives", "Book Taxi", "Helicopter", "Air series", "Cargo & Logistic", "Courier", "Vehicle on rent"],
        color: "bg-green-100 text-green-600"
    },
    {
        title: "Boutique",
        icon: Shirt,
        items: ["Mens Collection", "Women Collection", "Kids Collection", "Embroidery & ELITE"],
        color: "bg-purple-100 text-purple-600"
    },
    {
        title: "Hotel",
        icon: Hotel,
        items: ["Hotel Booking", "Marriage Hall", "Caterers"],
        color: "bg-rose-100 text-rose-600"
    }
];

const dialCategories = [
    {
        title: "Business",
        icon: Phone,
        items: ["Business Listings", "Lead Generation", "Verified Sellers"],
        color: "bg-cyan-100 text-cyan-600"
    },
    {
        title: "Leisure",
        icon: Coffee,
        items: ["Spa", "Artist", "Events", "Tours"],
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
        items: ["Buy & Sell Items", "Electronics", "Furniture"],
        color: "bg-lime-100 text-lime-600"
    },
    {
        title: "B Connect",
        icon: Link,
        items: ["Community", "Networking", "Forum"],
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
            className="absolute top-[calc(100%-1px)] left-0 w-full bg-[#ffffff] opacity-100 shadow-[0_30px_70px_rgba(0,0,0,0.3)] z-[9999] overflow-y-auto max-h-[calc(100vh-80px)] transform origin-top animate-in fade-in slide-in-from-top-1 duration-200 border-t-2 border-[#d2a437]/30 custom-scrollbar"
            onMouseLeave={onClose}
        >
            <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">

                {/* Product Section */}
                <div className="mb-8 sm:mb-10">
                    <div className="flex items-center gap-3 mb-6">
                        <h2 className="text-lg sm:text-xl font-black text-[#b91c1c] uppercase tracking-widest border-b-2 border-[#b91c1c] pb-1">Product</h2>
                        <div className="flex-1 h-[1px] bg-gray-100"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
                        {productCategories.map((category, index) => (
                            <div key={index} className="flex flex-col space-y-3">
                                <div className="flex items-center gap-2 group cursor-default">
                                    <div className={`p-1.5 flex items-center justify-center rounded overflow-hidden ${category.color} w-9 h-9 sm:w-8 sm:h-8 shadow-sm`}>
                                        {(category as any).image ? (
                                            <img src={(category as any).image} alt={category.title} className="w-full h-full object-cover rounded-sm" />
                                        ) : (
                                            <category.icon size={18} strokeWidth={2.5} />
                                        )}
                                    </div>
                                    <span className="text-[#1f2918] font-bold text-sm sm:text-base lg:text-sm uppercase tracking-tight group-hover:text-[#4b5a0a]">
                                        {category.title}
                                    </span>
                                </div>
                                <ul className="space-y-2 sm:space-y-1.5 pl-11 sm:pl-9 border-l-2 border-gray-50 ml-4 sm:ml-0">
                                    {category.items.map((item, idx) => (
                                        <li key={idx}>
                                            <RouterLink to="#" className="text-gray-500 hover:text-[#d2a437] text-xs sm:text-sm lg:text-xs font-semibold transition-colors flex items-center gap-2 py-1 sm:py-0">
                                                <span className="text-[#d2a437]">•</span> {item}
                                            </RouterLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dial Section */}
                <div className="mb-4">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="bg-[#1f2918] text-white px-4 py-1.5 rounded-md">
                            <h2 className="text-lg sm:text-xl font-black uppercase tracking-widest">Dial</h2>
                        </div>
                        <div className="flex-1 h-[1px] bg-gray-100"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
                        {dialCategories.map((category, index) => (
                            <div key={index} className="flex flex-col space-y-3">
                                <div className="flex items-center gap-2 group cursor-default">
                                    <div className={`p-1.5 flex items-center justify-center rounded overflow-hidden ${category.color} w-9 h-9 sm:w-8 sm:h-8 shadow-sm`}>
                                        {(category as any).image ? (
                                            <img src={(category as any).image} alt={category.title} className="w-full h-full object-cover rounded-sm" />
                                        ) : (
                                            <category.icon size={18} strokeWidth={2.5} />
                                        )}
                                    </div>
                                    <span className="text-[#1f2918] font-bold text-sm sm:text-base lg:text-sm uppercase tracking-tight group-hover:text-[#4b5a0a]">
                                        {category.title}
                                    </span>
                                </div>
                                <ul className="space-y-2 sm:space-y-1.5 pl-11 sm:pl-9 border-l-2 border-gray-50 ml-4 sm:ml-0">
                                    {category.items.map((item, idx) => (
                                        <li key={idx}>
                                            <RouterLink to="#" className="text-gray-500 hover:text-[#d2a437] text-xs sm:text-sm lg:text-xs font-semibold transition-colors flex items-center gap-2 py-1 sm:py-0">
                                                <span className="text-[#d2a437]">•</span> {item}
                                            </RouterLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Bottom Accent Bar */}
            <div className="h-1 bg-gradient-to-r from-[#4b5a0a] via-[#d2a437] to-[#4b5a0a]" />
        </div>
    );
}
