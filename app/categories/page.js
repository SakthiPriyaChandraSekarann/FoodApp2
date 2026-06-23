"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  {
    name: "Pizza",
    img: "Pizza.png",
  },
  {
    name: "Burgers",
    img: "Burgers.png",
  },
  {
    name: "Biryani",
    img: "Biryani (1).png",
  },
  {
    name: "Desserts",
    img: "Desserts.png",
  },
  {
    name: "South Indian",
    img: "South Indian.png",
  },
  {
    name: "Chinese",
    img: "Chinese.png",
  },
  {
    name: "Beverages",
    img: "Beverages.png",
  },
];

const dietaryTags = ["Vegan", "Gluten-Free", "Keto", "Halal"];

export default function CategoriesPage() {
  const [query, setQuery] = useState("");
  const [activeTags, setActiveTags] = useState([]);

  const filtered = categories.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  function toggleTag(tag) {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }

  return (
    <main className="min-h-screen bg-cream">
      <Navbar active="Categories" />

      <section className="container-px mx-auto max-w-7xl py-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="font-display text-3xl font-bold tracking-tight">
              Cravings <span className="text-orange">Sorted</span>
            </h1>
            <p className="mt-2 max-w-md text-sm text-sub">
              Explore our curated culinary categories and find exactly what
              your appetite is calling for today.
            </p>
          </div>

          <div className="relative w-full sm:w-72">
            <svg
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sub"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search categories..."
              className="w-full rounded-full bg-white py-2.5 pl-11 pr-4 text-sm shadow-soft placeholder:text-sub/70 focus:outline-none focus:ring-2 focus:ring-orange/40"
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((c) => (
            <Link
              href="#"
              key={c.name}
              className="group relative aspect-square overflow-hidden rounded-2xl shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.img}
                alt={c.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <span className="absolute bottom-4 left-4 text-lg font-bold text-white">
                {c.name}
              </span>
            </Link>
          ))}

          <Link
            href="#"
            className="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl bg-orange-100 text-center transition-colors hover:bg-orange-50"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-orange text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" rx="1.5" />
                <rect x="14" y="3" width="7" height="7" rx="1.5" />
                <rect x="3" y="14" width="7" height="7" rx="1.5" />
                <rect x="14" y="14" width="7" height="7" rx="1.5" />
              </svg>
            </span>
            <span className="text-sm font-semibold text-ink">Explore More</span>
            <span className="text-xs text-sub">15+ More categories</span>
          </Link>
        </div>

        {filtered.length === 0 && (
          <p className="mt-8 text-center text-sm text-sub">
            No categories match "{query}".
          </p>
        )}

        {/* Dietary preferences banner */}
        <div className="mt-10 flex flex-col gap-5 rounded-2xl bg-orange-50 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-bold text-ink">
              Get tailored <span className="text-orange">recommendations</span>
            </h3>
            <p className="mt-1 text-sm text-sub">
              Tell us your dietary preferences and we'll show you
              categories that match your lifestyle.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {dietaryTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  activeTags.includes(tag)
                    ? "border-orange bg-orange text-white"
                    : "border-ink/10 bg-white text-ink/70 hover:border-orange hover:text-orange"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}