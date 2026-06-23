const dishes = [
  {
    name: "Supreme Garlic Pizza",
    price: "88.99",
    img: "Supreme Pizza.png",
  },
  {
    name: "Loaded Beef Burger",
    price: "92.50",
    img: "Classic Burger.png",
  },
  {
    name: "Citrus Quinoa Bowl",
    price: "10.50",
    img: "Healthy Bowl.png",
  },
  {
    name: "Buffalo Glaze Wings",
    price: "9.99",
    img: "Spicy Wings.png",
  },
];

export default function TrendingDishes() {
  return (
    <section className="container-px mx-auto max-w-7xl py-12">
      <h2 className="font-display text-2xl font-bold tracking-tight sm:text-[1.7rem]">
        Trending Dishes
      </h2>

      <div className="mt-7 grid grid-cols-2 gap-5 sm:grid-cols-4">
        {dishes.map((d) => (
          <div
            key={d.name}
            className="group relative overflow-hidden rounded-2xl shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={d.img}
              alt={d.name}
              className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-3">
              <div>
                <h3 className="text-sm font-semibold text-white">{d.name}</h3>
                <p className="text-xs font-medium text-white/85">${d.price}</p>
              </div>
              <button
                aria-label={`Add ${d.name} to cart`}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange text-white shadow-md transition-colors hover:bg-orange-600"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
