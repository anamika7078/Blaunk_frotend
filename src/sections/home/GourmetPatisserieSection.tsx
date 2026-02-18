import { useState, useEffect } from "react";
import { Heart, ShoppingBag, LayoutGrid } from "lucide-react";
import api from "../../services/api";

interface Product {
  name: string;
  price: number;
  images: { url: string }[];
  description?: string;
}

export default function GourmetPatisserieSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products?category=Cakes");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching cakes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="relative rounded-[40px] my-10 overflow-hidden bg-gray-50 p-14">
        <div className="flex flex-col md:flex-row justify-between gap-6 mb-12">
          <div className="space-y-4">
            <div className="h-4 w-32 bg-gray-200 animate-pulse rounded" />
            <div className="h-12 w-64 bg-gray-200 animate-pulse rounded" />
            <div className="h-6 w-96 bg-gray-200 animate-pulse rounded" />
          </div>
          <div className="h-14 w-48 bg-gray-200 animate-pulse rounded-2xl" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white rounded-[40px] p-5 pb-8 space-y-4">
              <div className="aspect-square bg-gray-100 animate-pulse rounded-[32px]" />
              <div className="h-8 w-3/4 bg-gray-50 animate-pulse rounded mx-auto" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="relative rounded-[40px] my-10 overflow-hidden bg-[#FFF0F5] section-optimize">
      {/* Decorative Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 animate-gpu">
        <img
          src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=2070&auto=format&fit=crop"
          alt="Bakery Background"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 p-6 sm:p-8 md:p-14">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 sm:mb-12">
          <div className="max-w-2xl">
            <p className="text-[9px] sm:text-[10px] text-[#E84C89] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-3 sm:mb-4 text-center md:text-left">
              Gourmet Patisserie
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#222] leading-tight mb-4 text-center md:text-left">
              Blaunk <span className="text-[#E84C89]">Cakes</span> & Bakes
            </h2>
            <p className="text-gray-500 text-sm sm:text-base md:text-xl font-medium max-w-lg mx-auto md:mx-0 opacity-80 italic text-center md:text-left">
              Indulge in our handcrafted range of designer cakes, pastries, and sweet treats.
            </p>
          </div>

          <button className="w-full sm:w-auto bg-[#E84C89] text-white px-8 py-4 rounded-2xl font-bold text-xs flex items-center justify-center gap-3 hover:bg-[#d43d78] transition-all shadow-xl shadow-[#E84C89]/30 self-center md:self-start group animate-gpu">
            <LayoutGrid size={18} className="group-hover:rotate-90 transition-transform duration-300" />
            <span className="uppercase tracking-widest">Explore Full Menu</span>
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((item, i) => (
            <div
              key={i}
              className="group bg-white/90 backdrop-blur-sm rounded-[40px] p-5 pb-8 shadow-[0_20px_50px_rgba(232,76,137,0.1)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_40px_80px_rgba(232,76,137,0.15)] animate-gpu"
            >
              {/* Image Container */}
              <div className="relative rounded-[32px] overflow-hidden aspect-square bg-pink-50/50 mb-6 border border-pink-100/50">
                <img
                  src={item.images[0]?.url || "https://images.unsplash.com/photo-1563805042-7684c019e1cb"}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <button className="absolute top-5 right-5 bg-white/80 backdrop-blur-md p-3 rounded-full text-gray-400 hover:text-[#E84C89] transition-all shadow-lg hover:scale-110">
                  <Heart size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="px-3 flex flex-col gap-3 pb-4">
                <h3 className="text-2xl font-black text-[#222] group-hover:text-[#E84C89] transition-colors leading-tight tracking-tight text-center">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
