import React, { useEffect, useRef, useState } from 'react';

interface LazySectionProps {
    children: React.ReactNode;
    threshold?: number;
    rootMargin?: string;
    minHeight?: string;
}

export default function LazySection({
    children,
    threshold = 0.01,
    rootMargin = '1000px',
    minHeight = '300px'
}: LazySectionProps) {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold, rootMargin }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [threshold, rootMargin]);

    return (
        <div
            ref={sectionRef}
            style={{ minHeight: isVisible ? 'auto' : minHeight }}
            className={`w-full transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            {isVisible ? children : null}
        </div>
    );
}
