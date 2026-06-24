"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const flashDeals = [
  {
    name: "Burger King - Family Pack",
    badge: "35% OFF",
    rating: "4.6",
    endsInSeconds: 1 * 3600 + 59 * 60 + 57,
    img: "crispyburger.png",
  },
  {
    name: "Pizza Hut Specials",
    badge: "Free Delivery",
    rating: "4.5",
    endsInSeconds: 4 * 3600 + 16 * 60 + 37,
    img: "tomatoburger.png",
  },
  {
    name: "The Salad Lab",
    badge: "Buy 1 Get 1",
    rating: "4.9",
    endsInSeconds: 8 * 3600 + 9 * 60 + 57,
    img: "vegesbowl.png",
  },
];

const promoCodes = [
  { title: "$10 OFF", subtitle: "Min. order $30", code: "SAVE10NOW" },
  { title: "FREE DEL", subtitle: "No min. required", code: "FREEDEL" },
  { title: "WEEKEND", subtitle: "20% off Sat-Sun", code: "WKND20" },
  { title: "DESSERT", subtitle: "Free pie with order", code: "SWEET69" },
];

function formatCountdown(totalSeconds) {
  if (totalSeconds <= 0) return "00:00:00";
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return [h, m, s].map((n) => String(n).padStart(2, "0")).join(":");
}

function FlashDealCard({ deal }) {
  const [secondsLeft, setSecondsLeft] = useState(deal.endsInSeconds);

  useEffect(() => {
    const id = setInterval(() => {
      setSecondsLeft((s) => Math.max(0, s - 1));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
      <div className="relative">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={deal.img} alt={deal.name} className="h-36 w-full object-cover" />
        <span className="absolute left-2.5 top-2.5 rounded-full bg-orange-700 px-2.5 py-1 text-[11px] font-semibold text-white">
          {deal.badge}
        </span>
        <span className="absolute right-2.5 top-2.5 flex items-center gap-1 rounded-full bg-white/95 px-2 py-0.5 text-[11px] font-semibold text-ink">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="#FF7A00" stroke="none">
            <path d="M12 2l2.9 6.6 7.1.7-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.3l7.1-.7z" />
          </svg>
          {deal.rating}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-ink">{deal.name}</h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-sub">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Ends in <span className="font-semibold text-orange-700">{formatCountdown(secondsLeft)}</span>
        </p>
        <button className="mt-3 w-full rounded-xl bg-orange-700 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange">
          Claim Deal
        </button>
      </div>
    </div>
  );
}

function PromoCodeCard({ promo }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(promo.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="rounded-2xl bg-white p-4 shadow-soft">
      <p className="text-base font-bold text-orange-700">{promo.title}</p>
      <p className="mt-0.5 text-xs text-sub">{promo.subtitle}</p>
      <button
        onClick={handleCopy}
        className="mt-3 flex w-full items-center justify-between rounded-lg border border-dashed border-orange/40 bg-orange-50 px-3 py-2 text-left transition-colors hover:bg-orange-100"
      >
        <span className="text-sm font-semibold tracking-wide text-orange-700">
          {promo.code}
        </span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-700">
          {copied ? (
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          ) : (
            <>
              <rect x="9" y="9" width="11" height="11" rx="1.5" />
              <path d="M5 15V6a2 2 0 012-2h9" strokeLinecap="round" />
            </>
          )}
        </svg>
      </button>
      {copied && (
        <p className="mt-1.5 text-[11px] font-medium text-green-600">Copied!</p>
      )}
    </div>
  );
}

export default function OffersPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <main className="min-h-screen bg-cream">
      <Navbar active="Offers" />

      <section className="container-px mx-auto max-w-7xl py-8">
        {/* Hero promo banner */}
        <div className="relative overflow-hidden rounded-2xl shadow-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="Image.png"
            alt="Fifty percent off your first three orders"
            className="h-56 w-full object-cover sm:h-72"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/50 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center gap-3 px-7 sm:px-10">
            <span className="w-fit rounded-full bg-orange-700 px-3 py-1 text-xs font-semibold text-white">
              LIMITED TIME
            </span>
            <h1 className="max-w-md font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
              Get 50% Off on your first 3 orders!
            </h1>
            <p className="max-w-sm text-sm text-white/85">
              Indulge in your favorite flavors from top-rated restaurants
              across the city. Use code WELCOME50 at checkout.
            </p>
            <button className="mt-1 flex w-fit items-center gap-2 rounded-lg bg-orange-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600">
              Order Now
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Flash deals */}
        <div className="mt-12">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-display text-xl font-bold tracking-tight">Flash Deals</h2>
              <p className="mt-1 text-sm text-sub">
                Hurry up! These mouth-watering deals disappear soon.
              </p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {flashDeals.map((deal) => (
              <FlashDealCard key={deal.name} deal={deal} />
            ))}
          </div>
        </div>

        {/* Promo codes */}
        <div className="mt-12">
          <h2 className="font-display text-xl font-bold tracking-tight">Promo Codes</h2>
          <p className="mt-1 text-sm text-sub">
            Copy these codes and save big on your checkout.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {promoCodes.map((promo) => (
              <PromoCodeCard key={promo.code} promo={promo} />
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-12 flex flex-col gap-5 rounded-2xl bg-orange-600 p-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-bold text-white">
              Never miss a tasty deal again!
            </h3>
            <p className="mt-1 max-w-md text-sm text-white/85">
              Get exclusive offers, restaurant openings, and promotional
              codes delivered straight to your inbox.
            </p>
          </div>
          <form
            onSubmit={handleSubscribe}
            className="flex w-full max-w-sm items-center gap-2 rounded-full bg-white p-1.5 shadow-soft sm:w-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full bg-transparent px-3 text-sm text-ink placeholder:text-sub/70 focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange"
            >
              Subscribe
            </button>
          </form>
        </div>
        {subscribed && (
          <p className="mt-3 text-center text-sm font-medium text-green-600 sm:text-right">
            You&apos;re subscribed! Watch your inbox for deals.
          </p>
        )}
      </section>

      <Footer />
    </main>
  );
}
