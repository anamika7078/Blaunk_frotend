import { useEffect, useState } from 'react';
import { Sparkles, TrendingUp, Zap } from 'lucide-react';
import api from '../services/api';

interface AdvertisementBannerProps {
    variant?: 'primary' | 'secondary' | 'accent' | 'orange';
    message?: string;
    link?: string;
    animation?: 'scroll' | 'blink' | 'pulse';
}

const defaultMessages = [
    "🎉 Limited Time Offer - Up to 60% OFF on Bulk Orders!",
    "⚡ Flash Sale - Exclusive Deals Available Now!",
    "🔥 Hot Deal - Premium Products at Unbeatable Prices!",
    "💎 Special Offer - Register Your Shop Today & Get Benefits!",
    "🌟 New Arrivals - Check Out Our Latest Collection!",
];

export default function AdvertisementBanner({
    variant = 'primary',
    message,
    link = '#',
    animation = 'scroll'
}: AdvertisementBannerProps) {
    const [ads, setAds] = useState<any[]>([]);
    const [currentMessage, setCurrentMessage] = useState(0);

    useEffect(() => {
        const fetchAds = async () => {
            try {
                const response = await api.get('/ads');
                if (response.data && response.data.length > 0) {
                    const bannerAds = response.data.filter((ad: any) => ad.type === 'banner' && ad.isActive);
                    if (bannerAds.length > 0) {
                        setAds(bannerAds);
                    }
                }
            } catch (error) {
                console.error("Error fetching ads:", error);
            }
        };
        fetchAds();
    }, []);

    useEffect(() => {
        const count = ads.length > 0 ? ads.length : defaultMessages.length;
        if (!message) {
            const interval = setInterval(() => {
                setCurrentMessage((prev) => (prev + 1) % count);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [message, ads.length]);

    const displayMessage = message || (ads.length > 0 ? ads[currentMessage].title : defaultMessages[currentMessage]);
    const displayLink = ads.length > 0 ? (ads[currentMessage].link || link) : link;

    const variantStyles = {
        primary: 'bg-gradient-to-r from-[#d2a437] via-[#f0c14b] to-[#d2a437] text-[#1f2918]',
        secondary: 'bg-gradient-to-r from-[#1f2918] via-[#4b5a0a] to-[#1f2918] text-white',
        accent: 'bg-gradient-to-r from-[#ff4d00] via-[#ff9500] to-[#ff4d00] text-white',
        orange: 'bg-gradient-to-r from-[#ff6b00] via-[#ff9e00] to-[#ff6b00] text-white'
    };

    const animationClass = {
        scroll: 'animate-horizontal-scroll',
        blink: 'animate-blink-fast',
        pulse: 'animate-pulse'
    };

    return (
        <div className={`relative overflow-hidden ${variantStyles[variant === 'accent' ? 'orange' : variant]} py-2.5 w-full shadow-lg border-y border-white/10 z-30`}>
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.1)_10px,rgba(255,255,255,0.1)_20px)]" />
            </div>

            {/* Scrolling Content */}
            <div className="relative flex items-center overflow-hidden">
                <div className={`flex items-center gap-12 whitespace-nowrap ${animation === 'scroll' ? 'animate-horizontal-scroll' : animationClass[animation]}`}>
                    {/* Repeat the message multiple times for seamless scroll */}
                    {[...Array(8)].map((_, index) => (
                        <a
                            key={index}
                            href={displayLink}
                            className="flex items-center gap-4 font-black text-[11px] md:text-sm tracking-widest uppercase hover:scale-105 transition-all duration-300 cursor-pointer group"
                        >
                            <Sparkles className="w-4 h-4 text-yellow-200 animate-spin-slow" />
                            <span className="group-hover:text-yellow-100 transition-colors drop-shadow-md">{displayMessage}</span>
                            <TrendingUp className="w-4 h-4 group-hover:translate-x-1 transition-transform opacity-70" />
                            <Zap className="w-4 h-4 text-white animate-pulse" />
                        </a>
                    ))}
                </div>
            </div>

            {/* Glowing edges overlay */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/10 to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/10 to-transparent pointer-events-none" />
        </div>
    );
}
