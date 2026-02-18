import React from 'react';
import { Bed, ChevronRight } from 'lucide-react';

const cities = [
    { name: 'Near Delhi', img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=100&auto=format&fit=crop' },
    { name: 'Near Mumbai', img: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=100&auto=format&fit=crop' },
    { name: 'Near Chennai', img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=100&auto=format&fit=crop' },
    { name: 'Near Bangalore', img: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=100&auto=format&fit=crop' },
    { name: 'Near Kolkata', img: 'https://images.unsplash.com/photo-1623492701902-47dc207df5dc?q=80&w=100&auto=format&fit=crop' },
    { name: 'Near Hyderabad', img: 'https://images.unsplash.com/photo-1608958435020-e8a7109ba407?q=80&w=100&auto=format&fit=crop' },
];

const HotelShowcaseSection: React.FC = () => {
    return (
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#fcfcfc] overflow-hidden section-optimize">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

                {/* Left Card: Corporate Hotel Rates */}
                <div className="relative bg-white border border-gray-100 rounded-[3rem] p-8 md:p-12 flex flex-col justify-between min-h-[480px] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 group">
                    <div className="absolute top-10 right-10 text-gray-100 group-hover:text-gray-200 transition-colors duration-500">
                        <Bed size={80} strokeWidth={1} />
                    </div>

                    <div className="relative z-10">
                        <p className="text-[#d2a437] font-black text-[10px] tracking-[0.3em] mb-6 uppercase">B2B Business Travel</p>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-[1.1] tracking-tight">
                            Exclusive Corporate <br />
                            <span className="text-gray-400">Hotel Rates</span>
                        </h2>
                        <p className="text-gray-500 text-sm md:text-base max-w-sm mb-10 leading-relaxed font-medium">
                            Planning a business trip or factory visit? Book premium stays at pre-negotiated corporate discounts.
                        </p>

                        <button className="relative overflow-hidden border-2 border-gray-900 text-gray-900 px-12 py-3 rounded-2xl font-black text-xs hover:text-white transition-all uppercase tracking-[0.2em] mb-12 group/btn">
                            <span className="relative z-10">View Details</span>
                            <div className="absolute inset-0 bg-gray-900 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                        </button>
                    </div>

                    <div className="flex items-center gap-4 md:gap-6 overflow-x-auto pb-4 hide-scrollbar border-t border-gray-50 pt-10">
                        {cities.map((city, index) => (
                            <div key={index} className="flex-shrink-0 flex flex-col items-center gap-3 group/city cursor-pointer">
                                <div className="w-16 h-16 rounded-full p-1 bg-white shadow-lg border border-gray-100 group-hover/city:border-[#d2a437] group-hover/city:scale-110 transition-all duration-300">
                                    <img src={city.img} alt={city.name} className="w-full h-full object-cover rounded-full" />
                                </div>
                                <span className="text-[9px] font-black text-gray-500 group-hover/city:text-gray-900 text-center uppercase tracking-wider transition-colors">
                                    {city.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Card: Boutique / Premium Hotels */}
                <div className="relative border border-gray-100 rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 min-h-[480px]">
                    {/* Orange Sidebar Info */}
                    <div className="bg-[#ff6b00] w-full md:w-[35%] p-10 flex flex-col justify-between items-center text-center relative overflow-hidden">
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />

                        <div className="bg-white p-6 rounded-2xl shadow-2xl mb-8 relative z-10 w-full">
                            <div className="flex flex-col items-center">
                                <div className="w-10 h-10 mb-2">
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#e60000] w-full h-full">
                                        <path d="M12 21C12 21 16 18 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 18 12 21 12 21Z" fill="currentColor" />
                                        <path d="M12 7C13.1046 7 14 6.10457 14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7Z" fill="currentColor" />
                                    </svg>
                                </div>
                                <span className="text-[#e60000] text-3xl font-serif italic font-black leading-tight">Boutique</span>
                                <span className="text-[8px] font-black tracking-[0.4em] text-gray-400 mt-2 uppercase">Beauty & Style</span>
                            </div>
                        </div>

                        <button className="w-full bg-white text-gray-900 py-4 rounded-xl font-black text-xs hover:bg-gray-100 transition-all uppercase tracking-[0.2em] shadow-xl relative z-10">
                            View Store
                        </button>

                        <div className="mt-8 opacity-10 hidden md:block">
                            <ChevronRight className="text-white" size={60} />
                        </div>
                    </div>

                    {/* Large Image Section */}
                    <div className="relative flex-1 group/img overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1000&auto=format&fit=crop"
                            alt="Boutique Store"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-110"
                        />
                        {/* Subtle overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                        <div className="absolute bottom-8 left-8 right-8 z-10">
                            <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 inline-block transform transition-transform duration-500 translate-y-2 group-hover/img:translate-y-0">
                                <p className="text-white font-black text-2xl tracking-tighter uppercase mb-1">VIRGIO</p>
                                <div className="h-0.5 w-8 bg-[#ff6b00] mb-3" />
                                <p className="text-gray-200 text-[9px] font-black uppercase tracking-[0.2em]">Premium Collection 2026</p>
                            </div>
                        </div>

                        {/* Animated Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#ff6b00]/10 opacity-0 group-hover/img:opacity-100 transition-opacity duration-700 blur-3xl rounded-full" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HotelShowcaseSection;
