"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const orderStatuses = [
  {
    title: "Order Placed",
    time: "2:30 PM",
    completed: true,
  },
  {
    title: "Preparing",
    time: "2:45 PM",
    completed: true,
  },
  {
    title: "Out for Delivery",
    time: "3:00 PM",
    completed: true,
  },
  {
    title: "Delivered",
    time: "Arriving in ~15 mins",
    completed: false,
  },
];

export default function OrderTrackingPage() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <main className="min-h-screen bg-cream">
      <Navbar active="Order Tracking" />

      <section className="container-px mx-auto max-w-7xl py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-sub">
          <span className="text-ink text-xl font-bold">Order Tracking</span>
          <span>/</span>
          <span className="text-sub">Order #12345 • 2:30 PM • Taj Food Palace</span>
        </nav>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {/* Map section */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl shadow-card">
              {/* Map placeholder */}
              <div className="relative h-96 w-full bg-gradient-to-br from-slate-400 via-slate-500 to-slate-600">
                {/* Orange delivery route visualization */}
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 400 400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#FF7A00", stopOpacity: 0.8 }} />
                      <stop offset="100%" style={{ stopColor: "#FF9A2A", stopOpacity: 0.4 }} />
                    </linearGradient>
                  </defs>

                  {/* Route lines */}
                  <path
                    d="M 80 320 Q 150 280, 200 200 T 320 100"
                    stroke="url(#routeGradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                  />

                  {/* Delivery location pins */}
                  <circle cx="80" cy="320" r="20" fill="#FF7A00" opacity="0.9" />
                  <circle cx="80" cy="320" r="12" fill="white" />
                  <text x="80" y="326" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#FF7A00">
                    📍
                  </text>

                  <circle cx="320" cy="100" r="20" fill="#FF7A00" opacity="0.6" />
                  <circle cx="320" cy="100" r="12" fill="white" opacity="0.8" />
                </svg>

                {/* Map controls */}
                <div className="absolute right-4 top-4 flex flex-col gap-2">
                  <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-soft transition-colors hover:bg-orange-50">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-soft transition-colors hover:bg-orange-50">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 19h14M12 5v14" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="space-y-5">
            {/* Order info card */}
            <div className="rounded-2xl bg-white p-5 shadow-soft">
              <p className="text-xs text-sub">Order ID</p>
              <p className="mt-0.5 text-sm font-semibold text-ink">#12345 • 2:30 PM • Taj Food Palace</p>

              <div className="mt-4 flex items-center gap-2 rounded-lg bg-orange-50 px-3 py-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-700 text-white">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs text-sub">Estimated time</p>
                  <p className="text-sm font-bold text-orange-700">~15 mins</p>
                </div>
              </div>
            </div>

            {/* Status timeline */}
            <div className="rounded-2xl bg-white p-5 shadow-soft">
              <h3 className="text-sm font-semibold text-ink">ORDER PROGRESS</h3>
              <div className="mt-4 space-y-3">
                {orderStatuses.map((status, i) => (
                  <div key={status.title} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div
                        className={`flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold ${
                          status.completed
                            ? "bg-orange-700 text-white"
                            : "border-2 border-orange bg-white text-orange-700"
                        }`}
                      >
                        {status.completed ? "✓" : i + 1}
                      </div>
                      {i < orderStatuses.length - 1 && (
                        <div
                          className={`h-8 w-0.5 ${
                            status.completed ? "bg-orange-700" : "bg-ink/10"
                          }`}
                        />
                      )}
                    </div>
                    <div className="flex-1 pt-1">
                      <p className="text-xs font-semibold text-ink">{status.title}</p>
                      <p className="text-[11px] text-sub">{status.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Driver info card */}
            <div className="rounded-2xl bg-orange-50 p-5">
              <p className="text-xs font-semibold text-orange-700">DELIVERY PARTNER</p>
              <div className="mt-3 flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                  alt="Driver David Wilson"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-ink">David Wilson</p>
                  <p className="flex items-center gap-1 text-xs text-sub">
                    <span>4.9</span>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="#FF7A00" stroke="none">
                      <path d="M12 2l2.9 6.6 7.1.7-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.3l7.1-.7z" />
                    </svg>
                    <span>(241 reviews)</span>
                  </p>
                </div>
              </div>

              <div className="mt-4 flex gap-2">
                <button className="flex-1 rounded-full border-2 border-orange-700 bg-white py-2 text-center text-xs font-semibold text-orange transition-colors hover:bg-orange-100">
                  <span className="flex items-center justify-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Call
                  </span>
                </button>
                <button className="flex-1 rounded-full bg-orange-700 py-2 text-center text-xs font-semibold text-white transition-colors hover:bg-orange-600">
                  <span className="flex items-center justify-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Chat
                  </span>
                </button>
              </div>

              <button className="mt-3 w-full rounded-lg bg-white py-2 text-center text-xs font-semibold text-ink transition-colors hover:bg-gray-50">
                View Route
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
