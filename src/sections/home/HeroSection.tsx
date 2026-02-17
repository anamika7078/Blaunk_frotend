import { useEffect, useState } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop",
    title: "Scale Your Business Globally with Blaunk Trade",
    subtitle:
      "Connect with verified manufacturers, suppliers, and logistics experts in one comprehensive marketplace.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1565891741441-64926e441838?q=80&w=2070&auto=format&fit=crop",
    title: "Global B2B Trading Made Simple",
    subtitle:
      "Source products faster and grow your international business with trusted partners.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    title: "Smart Logistics & Supply Chain",
    subtitle:
      "Manage shipments and suppliers with a single powerful platform.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[500px] w-full overflow-hidden  ">

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt="hero"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 text-white max-w-3xl">
            <p className="text-[#d2a437] font-semibold mb-3 text-sm md:text-base">
              GLOBAL B2B TRADING
            </p>

            <h1 className="text-3xl md:text-6xl font-bold leading-tight mb-5">
              {slide.title}
            </h1>

            <p className="text-sm md:text-2xl text-gray-200 mb-6">
              {slide.subtitle}
            </p>

            {/* <div className="flex gap-4">
              <button className="bg-[#d2a437] text-black px-6 py-3 rounded-md font-semibold">
                Start Trading
              </button>

              <button className="bg-white text-black px-6 py-3 rounded-md font-semibold">
                List Your Products
              </button>
            </div> */}
          </div>
        </div>
      ))}

    </section>
  );
}
