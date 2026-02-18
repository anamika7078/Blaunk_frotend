import {
    Shirt,
    User,
    Baby,
    Scissors,
    Footprints,
    Dna,
    Watch,
    Gamepad2,
    Dumbbell,
    Sparkles,
} from "lucide-react";
import { Link as RouterLink } from "react-router-dom";

const bgtCategories = [
    {
        title: "Apparel-Men",
        icon: User,
        items: ["Bandagalas", "Blazers", "Boxers", "Briefs", "Cargos", "Dhoti", "Dry fits", "Gym Wear", "Hoodies", "Jackets", "Jeans", "Joggers", "Kurtas", "Pajamas", "Sherwanis"],
        color: "bg-blue-100 text-blue-600"
    },
    {
        title: "Apparel-Women",
        icon: Shirt,
        items: ["Blazers", "Blouse", "Bottoms", "Bra", "Brief", "Camisoles", "Capris", "Cargos", "Chudidaar", "Dresses", "Dupattas", "Gym Wear", "Hijab", "Hoodies", "Jackets"],
        color: "bg-pink-100 text-pink-600"
    },
    {
        title: "Apparel Kids",
        icon: Baby,
        items: ["Blazers", "Cargo", "Dhoti", "Dresses", "Girls skirts", "Girls Tops", "GirlsFrocks", "Gowns", "Jackets", "Jeans", "Jeggings", "Jerseys", "Jumpsuits", "Kurta"],
        color: "bg-yellow-100 text-yellow-600"
    },
    {
        title: "Apparel-Fabric",
        icon: Scissors,
        items: ["Bleached", "Blended", "Brasso", "Cotton", "Ethnic", "Handmade", "Jute", "Knitted", "Linen", "Nano", "PolyCotton", "Polyster", "Printed", "Ramie", "Satin"],
        color: "bg-emerald-100 text-emerald-600"
    },
    {
        title: "Footwear",
        icon: Footprints,
        items: ["Bellies", "Boots", "Casuals", "Clogs", "Flats", "Flip Flops", "Floaters", "Formals", "Heels", "Mojris", "Sandals", "Skates", "Sneakers", "Sports"],
        color: "bg-stone-100 text-stone-600"
    },
    {
        title: "Threads & Laces",
        icon: Dna,
        items: ["Chemile", "Corset", "Cotton", "Crosia", "Georgette", "Gota", "Hand Embroidered", "Jute", "Lycra", "Name", "Nylon", "Polyster", "Rayon", "Ric Rac", "Saree Lace"],
        color: "bg-indigo-100 text-indigo-600"
    },
    {
        title: "Accessories",
        icon: Watch,
        items: ["Athletic", "Bandana", "Belly support", "Belt", "Brooches", "Caps", "Cufflinks", "Gift sets", "Gloves", "Hair clips", "Hairbands", "Handbags", "Handkerchief", "Hats", "Helmet"],
        color: "bg-amber-100 text-amber-600"
    },
    {
        title: "Toys",
        icon: Gamepad2,
        items: ["Activity", "Archery", "Badminton", "Ball", "Beach toys", "Beyblade", "Billiards", "Business", "Cards", "Carrom", "Chess", "Cricket", "Dolls", "Educational", "Fruit Toys"],
        color: "bg-purple-100 text-purple-600"
    },
    {
        title: "Gym",
        icon: Dumbbell,
        items: ["Weights"],
        color: "bg-slate-100 text-slate-600"
    },
    {
        title: "Cosmetic-Women",
        icon: Sparkles,
        items: ["Shampoo", "conditioner", "Hair oils", "Hair serum", "Hair mask", "Combos", "Haircare kit", "Dry shampoo", "hair Spa", "Shower gels", "Soaps", "Body lotion", "Hand wash", "Foot cream"],
        color: "bg-rose-100 text-rose-600"
    }
];

interface BGTMegaMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function BGTMegaMenu({ isOpen, onClose }: BGTMegaMenuProps) {
    if (!isOpen) return null;

    return (
        <div
            className="absolute top-[calc(100%-1px)] left-0 w-full bg-[#ffffff] opacity-100 shadow-[0_30px_70px_rgba(0,0,0,0.3)] z-[9999] overflow-y-auto max-h-[calc(100vh-80px)] transform origin-top animate-in fade-in slide-in-from-top-1 duration-200 border-t-2 border-[#b91c1c]/30 custom-scrollbar"
            onMouseLeave={onClose}
        >
            <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
                <div className="flex items-center gap-3 mb-8">
                    <h2 className="text-lg sm:text-xl font-black text-[#b91c1c] uppercase tracking-widest border-b-2 border-[#b91c1c] pb-1">BGT GLOBAL TRADING</h2>
                    <div className="flex-1 h-[1px] bg-gray-100"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-10">
                    {bgtCategories.map((category, index) => (
                        <div key={index} className="flex flex-col space-y-3">
                            <div className="flex items-center gap-2 group cursor-default">
                                <div className={`p-1.5 flex items-center justify-center rounded overflow-hidden ${category.color} w-8 h-8 shadow-sm`}>
                                    <category.icon size={16} strokeWidth={2.5} />
                                </div>
                                <span className="text-[#1f2918] font-bold text-sm uppercase tracking-tight group-hover:text-[#b91c1c] transition-colors">
                                    {category.title}
                                </span>
                            </div>
                            <ul className="space-y-1.5 pl-10 border-l border-gray-100">
                                {category.items.map((item, idx) => (
                                    <li key={idx}>
                                        <RouterLink to="#" className="text-gray-500 hover:text-[#b91c1c] text-xs font-semibold transition-colors flex items-center gap-2 py-0.5">
                                            <span className="text-gray-300">•</span> {item}
                                        </RouterLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Accent Bar */}
            <div className="h-1 bg-gradient-to-r from-[#b91c1c] via-[#ff6b00] to-[#b91c1c]" />
        </div>
    );
}
