import { useEffect, useState } from "react";
import { Hotel, CreditCard, Clock } from "lucide-react";

const slides = [
  {
    title: "Flexible Stays for the Modern Traveler",
    desc: "Book direct and save with verified hospitality partners.",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    points: [
      {
        icon: Hotel,
        title: "Book Direct & Save",
        short: "Direct hotel connection for best pricing.",
      },
      {
        icon: CreditCard,
        title: "No Advance / Pay at Hotel",
        short: "Risk-free booking with pay at property.",
      },
      {
        icon: Clock,
        title: "Hourly Flexible Stays",
        short: "6hr, 12hr & 24hr stay options available.",
      },
    ],
  },
  {
    title: "Corporate Travel Made Easy",
    desc: "Flexible booking options for business travelers.",
    img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    points: [
      {
        icon: Hotel,
        title: "Book Direct & Save",
        short: "Direct hotel connection for best pricing.",
      },
      {
        icon: CreditCard,
        title: "No Advance / Pay at Hotel",
        short: "Risk-free booking with pay at property.",
      },
      {
        icon: Clock,
        title: "Hourly Flexible Stays",
        short: "6hr, 12hr & 24hr stay options available.",
      },
    ],
  },
  {
    title: "Smart Hourly Stay Options",
    desc: "Perfect for layovers, meetings and quick stays.",
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
    points: [
      {
        icon: Hotel,
        title: "Book Direct & Save",
        short: "Direct hotel connection for best pricing.",
      },
      {
        icon: CreditCard,
        title: "No Advance / Pay at Hotel",
        short: "Risk-free booking with pay at property.",
      },
      {
        icon: Clock,
        title: "Hourly Flexible Stays",
        short: "6hr, 12hr & 24hr stay options available.",
      },
    ],
  },
];

export default function HospitalitySliderSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#f3f4f1] rounded-2xl p-6 md:p-10 ">
      <p className="text-sm text-[#7b8464] font-semibold mb-3">
        GLOBAL HOSPITALITY
      </p>

      <div className="relative  overflow-hidden  min-h-[520px] ">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              current === index ? "opacity-100 z-10" : "opacity-0"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full ">
              <div className=" flex flex-col justify-center">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[#111] mb-4">
                  {slide.title}
                </h2>

                <p className="text-gray-600 text-sm md:text-base mb-7 leading-7">
                  {slide.desc}
                </p>

                <div className="space-y-4 mb-8">
                  {slide.points.map((p, i) => {
                    const Icon = p.icon;

                    return (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#4b5a0a] text-white flex items-center justify-center mt-1">
                          <Icon size={18} />
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#111] text-base">
                            {p.title}
                          </h4>
                          <p className="text-sm text-gray-600">{p.short}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <button className="bg-[#4b5a0a] text-white px-6 py-3 rounded-lg font-semibold w-fit hover:opacity-90 transition">
                  FIND HOTELS
                </button>
              </div>

              <div className="h-full">
                <img
                  src={slide.img}
                  alt="hotel"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${
              current === i ? "w-8 bg-[#4b5a0a]" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
