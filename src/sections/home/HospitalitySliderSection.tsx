import { useState, useEffect, useRef } from "react";
import { MapPin, Star, Wifi, Coffee, ChevronLeft, ChevronRight, ArrowRight, Waves } from "lucide-react";
import api from "../../services/api";

interface Hotel {
    _id: string;
    name: string;
    location: string;
    rating: number;
    pricePerNight: number;
    images: { url: string }[];
    description?: string;
    amenities?: string[];
}

const FALLBACK_HOTELS: Hotel[] = [
    {
        _id: "1",
        name: "The Grand Blaunk Palace",
        location: "Mumbai, India",
        rating: 4.9,
        pricePerNight: 12500,
        images: [{ url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop" }],
        description: "An iconic luxury retreat in the heart of the city with world-class amenities.",
        amenities: ["WiFi", "Spa", "Pool"],
    },
    {
        _id: "2",
        name: "Blaunk Ocean Residences",
        location: "Goa, India",
        rating: 4.8,
        pricePerNight: 9800,
        images: [{ url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop" }],
        description: "Beachfront luxury with panoramic ocean views and private cabanas.",
        amenities: ["WiFi", "Beach", "Restaurant"],
    },
    {
        _id: "3",
        name: "Blaunk Heritage Haveli",
        location: "Jaipur, India",
        rating: 4.7,
        pricePerNight: 7500,
        images: [{ url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=2049&auto=format&fit=crop" }],
        description: "A royal heritage experience steeped in Rajasthani culture and grandeur.",
        amenities: ["WiFi", "Heritage Tour", "Rooftop"],
    },
];

const AMENITY_ICONS: Record<string, JSX.Element> = {
    WiFi: <Wifi size={11} />,
    Beach: <Waves size={11} />,
    default: <Coffee size={11} />,
};

export default function HospitalitySliderSection() {
    const [hotels, setHotels] = useState<Hotel[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);
    const [fading, setFading] = useState(false);
    const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        const fetchHotels = async () => {
            try {
                const response = await api.get("/hotels");
                if (response.data && response.data.length > 0) {
                    setHotels(response.data);
                } else {
                    setHotels(FALLBACK_HOTELS);
                }
            } catch {
                setHotels(FALLBACK_HOTELS);
            } finally {
                setLoading(false);
            }
        };
        fetchHotels();
    }, []);

    const displayHotels = hotels.length > 0 ? hotels : FALLBACK_HOTELS;

    const goTo = (index: number) => {
        setFading(true);
        setTimeout(() => {
            setActiveIndex(index);
            setFading(false);
        }, 300);
    };

    const goToNext = () => goTo((activeIndex + 1) % displayHotels.length);
    const goToPrev = () => goTo((activeIndex - 1 + displayHotels.length) % displayHotels.length);

    const resetAutoPlay = () => {
        if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        autoPlayRef.current = setInterval(goToNext, 5000);
    };

    useEffect(() => {
        if (displayHotels.length === 0) return;
        autoPlayRef.current = setInterval(goToNext, 5000);
        return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
    }, [displayHotels.length, activeIndex]);

    const active = displayHotels[activeIndex];

    if (loading) {
        return (
            <section className="relative rounded-[40px] my-10 overflow-hidden bg-[#0a0f1e] p-6 sm:p-10 md:p-14">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1 aspect-[4/3] bg-white/5 animate-pulse rounded-3xl" />
                    <div className="flex-1 space-y-4 py-8">
                        <div className="h-3 w-24 bg-white/10 animate-pulse rounded" />
                        <div className="h-10 w-64 bg-white/10 animate-pulse rounded" />
                        <div className="h-5 w-80 bg-white/10 animate-pulse rounded" />
                        <div className="h-5 w-60 bg-white/10 animate-pulse rounded" />
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="relative rounded-[40px] my-10 overflow-hidden bg-[#07090f] section-optimize">
            {/* Ambient Background */}
            <div className="absolute inset-0 z-0 opacity-20 animate-gpu">
                <img
                    src={active?.images?.[0]?.url}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover blur-2xl scale-110 transition-all duration-1000"
                />
            </div>
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#07090f]/90 via-[#07090f]/70 to-[#0d1b3e]/80" />

            <div className="relative z-10 p-6 sm:p-10 md:p-14">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
                    <div>
                        <p className="text-[9px] sm:text-[10px] text-[#d2a437] font-black uppercase tracking-[0.4em] mb-3">
                            Blaunk Hospitality
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-3">
                            Luxury <span className="text-[#d2a437]">Hotels</span> & Stays
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base font-medium max-w-md opacity-80">
                            Handpicked premium properties for an unforgettable experience.
                        </p>
                    </div>
                    <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#d2a437] text-black px-7 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-xl shadow-[#d2a437]/30 self-center md:self-start group animate-gpu">
                        <span>Find Hotels</span>
                        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Slider Layout */}
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Featured Card */}
                    <div className="relative flex-1 rounded-3xl overflow-hidden min-h-[380px] sm:min-h-[460px] group">
                        <img
                            src={active?.images?.[0]?.url}
                            alt={active?.name}
                            loading="lazy"
                            className={`w-full h-full object-cover absolute inset-0 transition-all duration-700 group-hover:scale-105 ${fading ? "opacity-0" : "opacity-100"}`}
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                        {/* Featured Badge */}
                        <div className="absolute top-5 left-5 z-10">
                            <span className="bg-[#d2a437] text-black text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest animate-blink-soft shadow-lg">
                                ✦ Featured Stay
                            </span>
                        </div>

                        {/* Rating */}
                        <div className="absolute top-5 right-5 z-10 flex items-center gap-1.5 bg-black/50 backdrop-blur-md text-[#d2a437] text-xs font-bold px-3 py-1.5 rounded-full border border-[#d2a437]/30">
                            <Star size={12} fill="currentColor" />
                            <span>{active?.rating?.toFixed(1) ?? "4.9"}</span>
                        </div>

                        {/* Info Overlay */}
                        <div className={`absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-10 transition-opacity duration-300 ${fading ? "opacity-0" : "opacity-100"}`}>
                            <div className="flex items-center gap-1.5 text-gray-300 text-xs mb-2">
                                <MapPin size={12} className="text-[#d2a437]" />
                                <span>{active?.location}</span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-2">
                                {active?.name}
                            </h3>
                            <p className="text-gray-400 text-sm mb-4 line-clamp-2">{active?.description}</p>

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                {/* Amenities */}
                                <div className="flex flex-wrap gap-2">
                                    {(active?.amenities ?? []).slice(0, 3).map((a) => (
                                        <span key={a} className="flex items-center gap-1 bg-white/10 backdrop-blur-sm text-white text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/10">
                                            {AMENITY_ICONS[a] ?? AMENITY_ICONS.default}
                                            {a}
                                        </span>
                                    ))}
                                </div>

                                {/* Price + Book */}
                                <div className="flex items-center gap-4">
                                    <div className="text-right">
                                        <p className="text-gray-400 text-[10px]">from</p>
                                        <p className="text-[#d2a437] text-xl font-black">
                                            ₹{(active?.pricePerNight ?? 9999).toLocaleString("en-IN")}
                                            <span className="text-gray-400 text-xs font-normal">/night</span>
                                        </p>
                                    </div>
                                    <button className="bg-[#d2a437] text-black px-5 py-3 rounded-xl font-black text-xs uppercase tracking-wider hover:bg-white transition-all shadow-lg shadow-[#d2a437]/30 whitespace-nowrap animate-gpu">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={() => { goToPrev(); resetAutoPlay(); }}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 backdrop-blur-md text-white p-2.5 rounded-full border border-white/10 hover:bg-[#d2a437] hover:text-black hover:border-[#d2a437] transition-all opacity-0 group-hover:opacity-100 animate-gpu"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            onClick={() => { goToNext(); resetAutoPlay(); }}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 backdrop-blur-md text-white p-2.5 rounded-full border border-white/10 hover:bg-[#d2a437] hover:text-black hover:border-[#d2a437] transition-all opacity-0 group-hover:opacity-100 animate-gpu"
                        >
                            <ChevronRight size={18} />
                        </button>

                        {/* Dot Indicators */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                            {displayHotels.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => { goTo(i); resetAutoPlay(); }}
                                    className={`rounded-full transition-all duration-300 ${i === activeIndex ? "w-6 h-2 bg-[#d2a437]" : "w-2 h-2 bg-white/40 hover:bg-white/70"}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Thumbnail Strip */}
                    <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible lg:overflow-y-auto lg:max-h-[460px] pb-2 lg:pb-0 hide-scrollbar lg:w-56 xl:w-64">
                        {displayHotels.map((hotel, i) => (
                            <button
                                key={hotel._id}
                                onClick={() => { goTo(i); resetAutoPlay(); }}
                                className={`relative flex-shrink-0 w-44 lg:w-full h-28 lg:h-32 rounded-2xl overflow-hidden group/thumb transition-all duration-300 border-2 ${i === activeIndex ? "border-[#d2a437] shadow-lg shadow-[#d2a437]/30" : "border-transparent opacity-60 hover:opacity-90"}`}
                            >
                                <img
                                    src={hotel.images?.[0]?.url}
                                    alt={hotel.name}
                                    loading="lazy"
                                    className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-3">
                                    <p className="text-white text-xs font-bold leading-tight line-clamp-1">{hotel.name}</p>
                                    <p className="text-gray-300 text-[10px] flex items-center gap-1 mt-0.5">
                                        <MapPin size={9} className="text-[#d2a437]" />
                                        {hotel.location}
                                    </p>
                                </div>
                                {i === activeIndex && (
                                    <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#d2a437] animate-pulse" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
