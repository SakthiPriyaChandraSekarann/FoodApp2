"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const restaurants = [
  {
    name: "Bella Italia Bistro",
    tags: "Italian · Gourmet · Pasta",
    rating: "4.8",
    time: "20-30 min",
    price: "$$",
    img: "Italian Bistro.png",
  },
  {
    name: "Sushi Zen Master",
    tags: "Japanese · Seafood · Sushi",
    rating: "4.6",
    time: "25-40 min",
    price: "$$$",
    img: "Sushi Zen.png",
  },
  {
    name: "The Burger Foundry",
    tags: "American · Grill · Burgers",
    rating: "4.4",
    time: "15-25 min",
    price: "$",
    img: "Burger House.png",
  },
  {
    name: "Taco Kingdom",
    tags: "Mexican · Street Food · Tacos",
    rating: "4.5",
    time: "20-35 min",
    price: "$$",
    img: "Taco Kingdom.png",
  },
  {
    name: "Wok & Fire Express",
    tags: "Asian · Stir Fry · Fast Casual",
    rating: "4.2",
    time: "15-30 min",
    price: "$",
    img: "Wok & Fire.png",
  },
  {
    name: "Purely Bowls",
    tags: "Healthy · Vegan Friendly · Poke",
    rating: "4.7",
    time: "25-35 min",
    price: "$$",
    img: "Healthy Bowls.png",
  },
];

const recommended = [
  {
    name: "Creamy Fettuccine",
    tags: "Pasta · 20 min",
    price: "16.00",
    img: "Pasta.png",
  },
  {
    name: "Dragon Roll Sushi",
    tags: "Japanese · 25 min",
    price: "22.00",
    img: "Sushi.png",
  },
  {
    name: "Greek Garden Bowl",
    tags: "Healthy · 15 min",
    price: "14.50",
    img: "Salad.png",
  },
  {
    name: "Molten Lava Cake",
    tags: "Dessert · 15 min",
    price: "12.00",
    img: "Dessert.png",
  },
];

const cuisines = ["Italian", "Japanese", "Mexican", "American", "Asian"];
const ratings = ["4.5+", "4.0+", "3.5+"];
const deliveryTimes = ["Under 20 min", "20 - 35 min", "Over 35 min"];
const priceRanges = ["$", "$$", "$$$"];

function FilterCheckbox({ label }) {
  return (
    <label className="flex items-center gap-2.5 py-1 text-sm text-ink/75">
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-ink/20 text-orange focus:ring-orange/40"
      />
      {label}
    </label>
  );
}

export default function RestaurantsPage() {
  const [activePrice, setActivePrice] = useState(null);
  const [page, setPage] = useState(1);
  const totalPages = 12;

  return (
    <main className="min-h-screen bg-cream">
      <Navbar active="Restaurants" />

      <section className="container-px mx-auto max-w-7xl py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-sub">
          <Link href="/" className="hover:text-orange">Home</Link>
          <span>/</span>
          <span className="text-ink">Restaurants</span>
        </nav>

        <div className="mt-6 grid gap-8 lg:grid-cols-[240px_1fr]">
          {/* Sidebar filters */}
          <aside className="h-fit space-y-7 rounded-2xl bg-white p-5 shadow-soft lg:sticky lg:top-24">
            <div>
              <h3 className="text-sm font-semibold text-ink">Filters</h3>
            </div>

            <div>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-sub">
                Cuisine
              </h4>
              {cuisines.map((c) => (
                <FilterCheckbox key={c} label={c} />
              ))}
            </div>

            <div className="border-t border-ink/5 pt-5">
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-sub">
                Rating
              </h4>
              {ratings.map((r) => (
                <FilterCheckbox key={r} label={r} />
              ))}
            </div>

            <div className="border-t border-ink/5 pt-5">
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-sub">
                Delivery Time
              </h4>
              {deliveryTimes.map((d) => (
                <FilterCheckbox key={d} label={d} />
              ))}
            </div>

            <div className="border-t border-ink/5 pt-5">
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-sub">
                Price Range
              </h4>
              <div className="flex gap-2">
                {priceRanges.map((p) => (
                  <button
                    key={p}
                    onClick={() => setActivePrice(activePrice === p ? null : p)}
                    className={`flex-1 rounded-xl border py-2 text-sm font-semibold transition-colors ${
                      activePrice === p
                        ? "border-orange bg-orange text-white"
                        : "border-ink/10 text-ink/70 hover:border-orange hover:text-orange"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-sub">
                Showing <span className="font-semibold text-ink">{restaurants.length}</span> of{" "}
                <span className="font-semibold text-ink">142</span> restaurants
              </p>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-sub">Sort by:</span>
                <select className="rounded-lg border border-ink/10 bg-white px-3 py-1.5 text-ink focus:outline-none focus:ring-2 focus:ring-orange/40">
                  <option>Popularity</option>
                  <option>Rating</option>
                  <option>Delivery Time</option>
                  <option>Price: Low to High</option>
                </select>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {restaurants.map((r) => (
                <Link
                  href="#"
                  key={r.name}
                  className="group overflow-hidden rounded-2xl bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={r.img}
                      alt={r.name}
                      className="h-36 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute left-2.5 top-2.5 flex items-center gap-1 rounded-full bg-white/95 px-2 py-0.5 text-[11px] font-semibold text-ink">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="#FF7A00" stroke="none">
                        <path d="M12 2l2.9 6.6 7.1.7-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.3l7.1-.7z" />
                      </svg>
                      {r.rating}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="truncate text-sm font-semibold text-ink">{r.name}</h3>
                    <p className="mt-0.5 truncate text-xs text-sub">{r.tags}</p>
                    <div className="mt-2 flex items-center justify-between text-xs text-sub">
                      <span>{r.time}</span>
                      <span className="font-semibold text-orange">{r.price}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex items-center justify-center gap-1.5">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                aria-label="Previous page"
                className="flex h-9 w-9 items-center justify-center rounded-full text-ink/60 transition-colors hover:bg-orange-50 hover:text-orange"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {[1, 2, 3].map((n) => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                    page === n ? "bg-orange text-white" : "text-ink/70 hover:bg-orange-50 hover:text-orange"
                  }`}
                >
                  {n}
                </button>
              ))}
              <span className="px-1 text-sm text-sub">…</span>
              <button
                onClick={() => setPage(totalPages)}
                className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                  page === totalPages ? "bg-orange text-white" : "text-ink/70 hover:bg-orange-50 hover:text-orange"
                }`}
              >
                {totalPages}
              </button>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                aria-label="Next page"
                className="flex h-9 w-9 items-center justify-center rounded-full text-ink/60 transition-colors hover:bg-orange-50 hover:text-orange"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Recommended for you */}
        <div className="mt-14">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-display text-xl font-bold tracking-tight">
                Recommended for You
              </h2>
              <p className="mt-1 text-sm text-sub">Based on your taste in Italian cuisine</p>
            </div>
            <Link href="#" className="text-sm font-semibold text-orange hover:underline">
              View all →
            </Link>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {recommended.map((d) => (
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
                <button
                  aria-label={`Save ${d.name}`}
                  className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-orange shadow-soft"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M12 21s-7-5.6-7-11a4.7 4.7 0 018-3 4.7 4.7 0 018 3c0 5.4-7 11-7 11z" strokeLinejoin="round" />
                  </svg>
                </button>
                <div className="p-3">
                  <h3 className="truncate text-sm font-semibold text-ink">{d.name}</h3>
                  <div className="mt-1 flex items-center justify-between text-xs">
                    <span className="text-sub">{d.tags}</span>
                    <span className="font-semibold text-orange">${d.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}