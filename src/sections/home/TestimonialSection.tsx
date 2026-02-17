import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Wholesale Buyer",
    rating: 5,
    msg: "Blaunk Global helped us connect with verified suppliers quickly.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sarah Khan",
    role: "Retail Partner",
    rating: 4,
    msg: "Smooth experience and trusted vendors. Highly recommended.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Amit Patel",
    role: "Export Manager",
    rating: 5,
    msg: "We scaled export operations easily using Blaunk Global.",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Neha Verma",
    role: "Business Owner",
    rating: 5,
    msg: "Professional marketplace with great logistics support.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Vikram Malhotra",
    role: "Logistics Head",
    rating: 5,
    msg: "The logistics integration is seamless. It has reduced our turnaround time significantly.",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Ananya Iyer",
    role: "Design Director",
    rating: 5,
    msg: "A very intuitive platform for sourcing quality materials for our projects.",
    img: "https://randomuser.me/api/portraits/women/33.jpg",
  },
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  const visibleCards = 3;
  const totalSlides = Math.ceil(testimonials.length / visibleCards);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <section className="relative rounded-[3rem] p-8 md:p-20 mt-16 bg-[#F9FAF8] overflow-hidden section-optimize">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#4b5a0a]/5 to-transparent rounded-full blur-3xl -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#4b5a0a]/5 to-transparent rounded-full blur-3xl -ml-20 -mb-20" />

      <div className="relative z-10 mb-16 text-center">
        <p className="text-xs text-[#7b8464] font-black uppercase tracking-[0.4em] mb-4">
          Testimonials
        </p>

        <h2 className="text-3xl md:text-5xl font-black mt-2 text-[#111] tracking-tight">
          What Our <span className="text-[#4b5a0a]">Clients</span> Say
        </h2>
        <div className="w-24 h-1 bg-[#4b5a0a]/20 mx-auto mt-8 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#4b5a0a] transition-all duration-700 ease-out"
            style={{ width: `${((current + 1) / totalSlides) * 100}%` }}
          />
        </div>
      </div>

      <div className="relative z-10 overflow-hidden">
        <div
          className="flex transition-transform duration-1000 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] animate-gpu"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div
              key={slideIndex}
              className="min-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2"
            >
              {testimonials
                .slice(
                  slideIndex * visibleCards,
                  slideIndex * visibleCards + visibleCards
                )
                .map((item, i) => (
                  <div
                    key={i}
                    className="group bg-white rounded-[2.5rem] p-8 shadow-[0_15px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] border border-gray-100 transition-all duration-500 hover:-translate-y-3 relative overflow-hidden animate-gpu"
                  >
                    {/* Background Decorative Quote */}
                    <Quote
                      className="absolute -right-4 -top-4 w-24 h-24 text-gray-50 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500 rotate-12"
                    />

                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#4b5a0a]/20 rounded-full blur-md group-hover:blur-lg transition-all" />
                        <img
                          src={item.img}
                          alt={item.name}
                          loading="lazy"
                          className="relative w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 leading-tight">{item.name}</h3>
                        <p className="text-xs font-semibold text-[#7b8464] uppercase tracking-wider mt-1">{item.role}</p>
                      </div>
                    </div>

                    <div className="flex gap-1 mb-5">
                      {[...Array(5)].map((_, idx) => (
                        <Star
                          key={idx}
                          size={16}
                          className={idx < item.rating ? "fill-[#d2a437] text-[#d2a437]" : "text-gray-200"}
                        />
                      ))}
                    </div>

                    <p className="text-gray-600 leading-relaxed text-[0.95rem] italic relative z-10">
                      "{item.msg}"
                    </p>

                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#4b5a0a]/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-12 relative z-10">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`group relative h-3 rounded-full transition-all duration-500 overflow-hidden ${current === i ? "w-12 bg-[#4b5a0a]" : "w-3 bg-gray-200 hover:bg-gray-300"
              }`}
          >
            {current === i && (
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
