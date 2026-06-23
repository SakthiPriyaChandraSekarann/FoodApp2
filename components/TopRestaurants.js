const restaurants = [
  {
    name: "The Burger Grill",
    tags: "American · Fast Food",
    rating: "4.8",
    time: "20-30 min",
    img: "Fine Dining.png",
  },
  {
    name: "Spice Garden",
    tags: "Indian · Curry",
    rating: "4.6",
    time: "25-35 min",
    img: "Sushi Bar.png",
  },
  {
    name: "Bella Italia",
    tags: "Italian · Pizza",
    rating: "4.9",
    time: "15-25 min",
    img: "Cafe Interior.png",
  },
  {
    name: "Tokyo Kitchen",
    tags: "Japanese · Sushi",
    rating: "4.7",
    time: "30-40 min",
    img: "Pizza Kitchen.png",
  },
];

export default function TopRestaurants() {
  return (
    <section className="container-px mx-auto max-w-7xl py-12">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-[1.7rem]">
            Top Restaurants
          </h2>
          <p className="mt-1 text-sm text-sub">
            Handpicked favorites near you
          </p>
        </div>
        <a href="#" className="text-sm font-semibold text-orange hover:underline">
          View All
        </a>
      </div>

      <div className="mt-7 grid grid-cols-2 gap-5 sm:grid-cols-4">
        {restaurants.map((r) => (
          <div
            key={r.name}
            className="group overflow-hidden rounded-2xl bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
          >
            <div className="relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={r.img}
                alt={r.name}
                className="h-28 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-32"
              />
              <span className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-white/95 px-2 py-0.5 text-[11px] font-semibold text-ink">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="#FF7A00" stroke="none">
                  <path d="M12 2l2.9 6.6 7.1.7-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.3l7.1-.7z" />
                </svg>
                {r.rating}
              </span>
            </div>
            <div className="p-3">
              <h3 className="truncate text-sm font-semibold text-ink">{r.name}</h3>
              <p className="mt-0.5 truncate text-xs text-sub">{r.tags}</p>
              <p className="mt-1.5 text-xs text-sub">{r.time}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
