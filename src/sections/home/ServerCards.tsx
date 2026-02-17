const serverData = [
  {
    name: "Global Trade Server",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  },
  {
    name: "Industrial Supply Server",
    img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
  },
  {
    name: "Agri Export Server",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
];

export default function ServerCards() {
  return (
    <div className="flex gap-4 overflow-x-auto hide-scrollbar mt-6 pb-2">
      {serverData.map((item, i) => (
        <div
          key={i}
          className="relative min-w-[220px] sm:min-w-[260px] rounded-xl overflow-hidden shadow"
        >
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-40 object-cover"
          />

          <div className="absolute bottom-0 left-0 bg-black/70 text-white px-3 py-2 text-sm w-full">
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );
}
