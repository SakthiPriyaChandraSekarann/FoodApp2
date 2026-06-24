"use client";
 
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
 
const filterCategories = [
  { label: "Fast Brunch", checked: false },
  { label: "European", checked: false },
  { label: "Verified", checked: false },
  { label: "Cooking", checked: false },
];
 
const orders = [
  {
    id: 1,
    restaurant: "Artisan Pizza Co.",
    status: "Delivered",
    statusColor: "green",
    rating: "4.8",
    reviews: 127,
    date: "Jun 2025 • 7:30 PM",
    price: "$42.50",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    restaurant: "The Salad Bowl",
    status: "Delivered",
    statusColor: "green",
    rating: "4.6",
    reviews: 89,
    date: "May 2025 • 12:45 PM",
    price: "$28.50",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    restaurant: "Burger Haven",
    status: "Delivered",
    statusColor: "green",
    rating: "4.9",
    reviews: 201,
    date: "Apr 2025 • 6:15 PM",
    price: "$35.20",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=200&q=80",
  },
];
 
export default function OrderHistoryPage() {
  const router = useRouter();
  const [filters, setFilters] = useState(filterCategories);
  const [expandFilters, setExpandFilters] = useState(false);
 
  function toggleFilter(index) {
    const newFilters = [...filters];
    newFilters[index].checked = !newFilters[index].checked;
    setFilters(newFilters);
  }
 
  return (
    <main className="min-h-screen bg-cream">
      <Navbar active="Order History" />
 
      <section className="container-px mx-auto max-w-7xl py-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-3xl font-bold tracking-tight">
              Order History
            </h1>
            <p className="mt-2 text-sm text-sub">
              Manage your orders here and favorite restaurants
            </p>
          </div>
          <button
            onClick={() => router.push("/order-tracking")}
            className="flex items-center gap-2 rounded-full bg-orange-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Order Tracking
          </button>
        </div>
 
        <div className="mt-8 grid gap-8 lg:grid-cols-[200px_1fr]">
          {/* Left sidebar: Filters */}
          <aside>
            <div className="space-y-4">
              {/* Filters heading */}
              <h3 className="text-sm font-semibold text-ink">Filters</h3>
 
              {/* Filter checkboxes */}
              <div className={`space-y-2 overflow-hidden transition-all ${expandFilters ? "max-h-96" : "max-h-32"}`}>
                {filters.map((filter, i) => (
                  <label
                    key={filter.label}
                    className="flex items-center gap-2 cursor-pointer py-1 text-sm text-ink/75 hover:text-ink"
                  >
                    <input
                      type="checkbox"
                      checked={filter.checked}
                      onChange={() => toggleFilter(i)}
                      className="h-4 w-4 rounded border-ink/20 accent-orange"
                    />
                    {filter.label}
                  </label>
                ))}
              </div>
 
              {/* Expand/Collapse filters */}
              <button
                onClick={() => setExpandFilters(!expandFilters)}
                className="mt-3 flex w-full items-center justify-between rounded-full bg-orange-700 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-orange-600"
              >
                <span className="text-xs font-bold">VIEWED HISTORY?</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`transition-transform ${expandFilters ? "rotate-180" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <p className="text-center text-xs text-sub">Expand Filters</p>
            </div>
          </aside>
 
          {/* Main content: Orders list */}
          <div className="space-y-4">
            {orders.length === 0 ? (
              <div className="rounded-2xl bg-white p-8 text-center shadow-soft">
                <p className="text-sm text-sub">No orders found.</p>
              </div>
            ) : (
              orders.map((order) => (
                <div
                  key={order.id}
                  className="flex flex-col gap-4 rounded-2xl bg-white p-4 shadow-soft transition-all hover:shadow-card sm:flex-row sm:items-center"
                >
                  {/* Restaurant image */}
                  <div className="h-32 w-full shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-32">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={order.img}
                      alt={order.restaurant}
                      className="h-full w-full object-cover"
                    />
                  </div>
 
                  {/* Order details */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-sm font-semibold text-ink">
                          {order.restaurant}
                        </h3>
                        <div className="mt-1 flex items-center gap-2">
                          <span
                            className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold text-white ${
                              order.statusColor === "green"
                                ? "bg-green-500"
                                : "bg-gray-400"
                            }`}
                          >
                            {order.status}
                          </span>
                          <span className="text-xs text-sub">
                            {order.rating}
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 24 24"
                              fill="#FF7A00"
                              stroke="none"
                              className="mb-0.5 inline-block ml-0.5"
                            >
                              <path d="M12 2l2.9 6.6 7.1.7-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.3l7.1-.7z" />
                            </svg>
                            ({order.reviews} reviews)
                          </span>
                        </div>
                        <p className="mt-2 text-xs text-sub">{order.date}</p>
                      </div>
                      <p className="text-lg font-bold text-orange-700">
                        {order.price}
                      </p>
                    </div>
                  </div>
 
                  {/* Actions */}
                  <div className="flex gap-2 sm:flex-col">
                    <button className="flex-1 rounded-lg bg-gray-100 px-4 py-2.5 text-xs font-semibold text-ink transition-colors hover:bg-gray-200">
                      View Details
                    </button>
                    <button className="flex-1 rounded-lg bg-orange-700 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-orange-600">
                      Reorder
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
 
      <Footer />
    </main>
  );
}