import { useEffect, useState } from 'react';
import { Sparkles, TrendingUp, Zap } from 'lucide-react';
import { getAds } from '../services/adService';

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
                const data = await getAds();
                if (data && data.length > 0) {
                    const bannerAds = data.filter((ad: any) => ad.type === 'banner' && ad.isActive);
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
            }, 6000);
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
        blink: 'animate-pulse', // Replaced blink-fast with pulse for smoother feel
        pulse: 'animate-pulse'
    };

    return (
        <div className={`relative overflow-hidden ${variantStyles[variant === 'accent' ? 'orange' : variant]} py-2 w-full shadow-md border-y border-white/5 z-30 transform-gpu`}>
            {/* Animated Background Pattern - Simplified */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(255,255,255,0.1)_20px,rgba(255,255,255,0.1)_40px)]" />
            </div>

            {/* Scrolling Content */}
            <div className="relative flex items-center overflow-hidden">
                <div className={`flex items-center gap-16 whitespace-nowrap ${animation === 'scroll' ? 'animate-horizontal-scroll' : animationClass[animation]}`}>
                    {/* Reduced to 4 repeats for better performance while maintaining seamlessness */}
                    {[...Array(4)].map((_, index) => (
                        <a
                            key={index}
                            href={displayLink}
                            className="flex items-center gap-6 font-bold text-[10px] md:text-xs tracking-[0.15em] uppercase hover:scale-[1.02] transition-transform duration-300 cursor-pointer group"
                        >
                            <Sparkles className="w-3.5 h-3.5 text-yellow-200" />
                            <span className="group-hover:text-yellow-100 transition-colors">{displayMessage}</span>
                            <TrendingUp className="w-3.5 h-3.5 opacity-50" />
                            <Zap className="w-3.5 h-3.5 text-white" />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

