"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const flashDeals = [
  {
    id: 1,
    restaurant: "Burger King – Family Pack",
    badge: "25% OFF",
    badgeColor: "bg-red-500",
    rating: 4.8,
    initialSeconds: 7197, // ~2h
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    restaurant: "Pizza Hut Specials",
    badge: "Free Delivery",
    badgeColor: "bg-green-600",
    rating: 4.5,
    initialSeconds: 15397, // ~4h
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    restaurant: "The Salad Lab",
    badge: "Buy 1 Get 1",
    badgeColor: "bg-[#C84B11]",
    rating: 4.9,
    initialSeconds: 3597, // ~1h
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop",
  },
];

const promoCodes = [
  {
    label: "$10 OFF",
    desc: "Min. order $30",
    code: "SAVE10NOW",
    color: "text-[#C84B11]",
  },
  {
    label: "FREE DEL",
    desc: "No min. required",
    code: "FREEDEL",
    color: "text-[#C84B11]",
  },
  {
    label: "WEEKEND",
    desc: "20% Off Sat–Sun",
    code: "WKND20",
    color: "text-[#C84B11]",
  },
  {
    label: "DESSERT",
    desc: "Free Pie with Order",
    code: "SWEET60",
    color: "text-[#C84B11]",
  },
];

function CountdownTimer({ initialSeconds }: { initialSeconds: number }) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");

  return (
    <span className="font-mono text-sm font-semibold text-gray-700">
      {h}:{m}:{s}
    </span>
  );
}

function PromoCard({ label, desc, code, color }: (typeof promoCodes)[0]) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white border border-dashed border-gray-200 rounded-2xl p-5 relative overflow-hidden group hover:border-[#C84B11]/40 transition-colors">
      {/* Notch effect */}
      <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-50 rounded-full border border-gray-200" />
      <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-50 rounded-full border border-gray-200" />
      <p className={`text-xl font-extrabold ${color}`}>{label}</p>
      <p className="text-xs text-gray-500 mt-0.5 mb-3">{desc}</p>
      <div className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2 gap-2">
        <span className="text-sm font-mono font-semibold text-gray-700">{code}</span>
        <button
          onClick={handleCopy}
          className="text-gray-400 hover:text-[#C84B11] transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export default function OffersPage() {
  const [startIndex, setStartIndex] = useState(0);

  const prev = () => setStartIndex((i) => Math.max(0, i - 1));
  const next = () => setStartIndex((i) => Math.min(flashDeals.length - 1, i + 1));

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-gray-900 via-[#3a1a06] to-[#C84B11]/60 min-h-[220px] sm:min-h-[280px] flex items-center">
            {/* Background food image */}
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&h=400&fit=crop"
              alt="Food background"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative z-10 px-8 py-10 max-w-xl">
              <span className="inline-block bg-[#C84B11] text-white text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wide">
                LIMITED TIME
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Get <span className="text-[#f97316]">50% OFF</span> on your
                <br />first 3 orders!
              </h1>
              <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                Indulge in your favorite flavors from top-rated restaurants across the city. Use code{" "}
                <span className="font-bold text-white">WELCOME50</span> at checkout.
              </p>
              <button className="mt-6 inline-flex items-center gap-2 bg-[#C84B11] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#a83d0e] transition-colors">
                Order Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Flash Deals */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">Flash Deals</h2>
              <p className="text-sm text-gray-500 mt-0.5">Hurry up! These mouth-watering deals disappear soon.</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                disabled={startIndex === 0}
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#C84B11] hover:text-[#C84B11] disabled:opacity-30 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                disabled={startIndex >= flashDeals.length - 1}
                className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#C84B11] hover:text-[#C84B11] disabled:opacity-30 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {flashDeals.map((deal) => (
              <div
                key={deal.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[4/3]">
                  <img
                    src={deal.img}
                    alt={deal.restaurant}
                    className="w-full h-full object-cover"
                  />
                  <span className={`absolute top-3 left-3 ${deal.badgeColor} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
                    {deal.badge}
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-gray-900 text-sm">{deal.restaurant}</h3>
                    <div className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-xs font-semibold text-gray-700">{deal.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-500 mb-4">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs">Ends in:</span>
                    <CountdownTimer initialSeconds={deal.initialSeconds} />
                  </div>
                  <button className="w-full bg-[#C84B11] text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-[#a83d0e] transition-colors">
                    Claim Deal
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Promo Codes */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="mb-6 border-l-4 border-[#C84B11] pl-4">
            <h2 className="text-2xl font-extrabold text-gray-900">Promo Codes</h2>
            <p className="text-sm text-gray-500 mt-0.5">Copy these codes and save big on your checkout.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {promoCodes.map((promo) => (
              <PromoCard key={promo.code} {...promo} />
            ))}
          </div>
        </section>

        {/* Newsletter / Never Miss Deal */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-[#C84B11] rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white max-w-md">
              <h2 className="text-2xl sm:text-3xl font-extrabold">Never miss a tasty deal again!</h2>
              <p className="mt-2 text-red-100 text-sm leading-relaxed">
                Get exclusive offers, restaurant openings, and promotional codes delivered straight to your inbox.
              </p>
            </div>
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 sm:w-64 px-4 py-3 bg-white/10 backdrop-blur border border-white/30 text-white placeholder-red-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
