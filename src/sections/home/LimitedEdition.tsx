import React from "react";

const products = [
  {
    title: "Luxury Chocolate Hampers",
    // price: "$45.00",
    img: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52",
  },
  {
    title: "Decorative LED Lightings",
    // price: "$12.99",
    img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38",
  },
];

const LimitedEdition: React.FC = () => {
  return (
    <section className="w-full  rounded-xl p-6 md:p-10 ">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

        <div className="space-y-5">
          <p className="text-sm text-[#7b8464] font-semibold uppercase tracking-wide">
            Limited Edition Collection
          </p>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-[#111]">
            Spread the <span className="text-[#d2a437] italic">Joy</span> of
            <br />
            the <span className="text-[#d2a437] italic">Season</span>
          </h1>

          <p className="text-gray-600 text-sm md:text-base leading-7 max-w-md">
            Make every celebration memorable with our exclusive festive range.
            From bulk gifting solutions to premium decor.
          </p>

          <div className="flex items-center gap-3">
            <div className="bg-[#e7e8e2] px-4 py-2 rounded-full text-sm">
              ⏱ 04d : 12h : 45m
            </div>

            <button className="bg-[#4b5a0a] text-white px-6 py-2 rounded-full font-semibold">
              SHOP NOW
            </button>
          </div>
        </div>

        {products.map((item, index) => (
          <div
            key={index}
            className="bg-[#f3f4f1] rounded-xl overflow-hidden shadow border"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#111]">
                {item.title}
              </h3>
              {/* <p className="text-gray-500 text-sm">{item.price}</p> */}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default LimitedEdition;
