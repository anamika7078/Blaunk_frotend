const logisticsData = [
  {
    name: "Express Cargo Logistics",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
  },
  {
    name: "Smart Warehouse Network",
    img: "https://images.unsplash.com/photo-1565891741441-64926e441838",
  },
  {
    name: "Global Shipping Partner",
    img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec",
  },
  {
    name: "Express Cargo Logistics",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
  },
  {
    name: "Smart Warehouse Network",
    img: "https://images.unsplash.com/photo-1565891741441-64926e441838",
  },
  {
    name: "Global Shipping Partner",
    img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec",
  },
  
];

export default function LogisticsCards() {
  return (
    <div className="flex gap-4 overflow-x-auto hide-scrollbar mt-6 pb-2">
      {logisticsData.map((item, i) => (
        <div
          key={i}
          className="relative min-w-[220px] sm:min-w-[260px] rounded-xl overflow-hidden shadow"
        >
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-40 object-cover"
          />

          <div className="absolute bottom-0 left-0 bg-[#1f2918]/85 text-white px-3 py-2 text-sm w-full">
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );
}
