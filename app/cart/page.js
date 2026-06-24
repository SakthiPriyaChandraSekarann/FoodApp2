"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const initialItems = [
  {
    id: "truffle-beef-burger",
    name: "Truffle Beef Burger",
    restaurant: "The Burger House",
    customization: "Custom: No Pickles",
    tag: "Gluten-Free Option",
    price: 18.5,
    qty: 1,
    img: "Truffle Burger.png",
  },
  {
    id: "quinoa-power-bowl",
    name: "Quinoa Power Bowl",
    restaurant: "Green Garden Deli",
    customization: "",
    tag: "Vegan",
    price: 16.0,
    qty: 2,
    img: "Quinoa Salad.png",
  },
];

const DELIVERY_FEE = 2.99;
const TAX_RATE = 0.05;

function money(n) {
  return `$${n.toFixed(2)}`;
}

export default function CartPage() {
  const [items, setItems] = useState(initialItems);
  const [promo, setPromo] = useState("");
  const [promoMessage, setPromoMessage] = useState(null);

  function updateQty(id, delta) {
    setItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, qty: Math.max(0, item.qty + delta) }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  }

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.qty, 0),
    [items]
  );
  const tax = subtotal * TAX_RATE;
  const total = subtotal + DELIVERY_FEE + tax;

  function handleApplyPromo(e) {
    e.preventDefault();
    if (!promo.trim()) {
      setPromoMessage({ type: "error", text: "Enter a promo code first." });
      return;
    }
    if (promo.trim().toUpperCase() === "FOODGO20") {
      setPromoMessage({ type: "success", text: "20% off applied!" });
    } else {
      setPromoMessage({ type: "error", text: "That code isn't valid." });
    }
  }

  return (
    <main className="min-h-screen bg-cream">
      <Navbar active="Cart" cartCount={items.reduce((sum, item) => sum + item.qty, 0)} />

      <section className="container-px mx-auto max-w-7xl py-8">
        <h1 className="font-display text-3xl font-bold tracking-tight">Your Cart</h1>
        <p className="mt-1 text-sm text-sub">
          Review your selected delicacies before checkout.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_360px]">
          {/* Cart items */}
          <div className="flex flex-col gap-4">
            {items.length === 0 && (
              <div className="rounded-2xl bg-white p-8 text-center shadow-soft">
                <p className="text-sm text-sub">
                  Your cart is empty. Add a dish to get started.
                </p>
              </div>
            )}

            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-wrap items-center gap-4 rounded-2xl bg-white p-4 shadow-soft sm:flex-nowrap"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-16 w-16 shrink-0 rounded-xl object-cover"
                />

                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-ink">{item.name}</h3>
                  <p className="mt-0.5 truncate text-xs text-sub">
                    {item.restaurant}
                    {item.customization ? ` · ${item.customization}` : ""}
                  </p>
                  <span className="mt-1.5 inline-block rounded-full bg-orange-50 px-2.5 py-0.5 text-[11px] font-medium text-orange">
                    {item.tag}
                  </span>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-orange-50 px-2 py-1">
                  <button
                    aria-label={`Decrease quantity of ${item.name}`}
                    onClick={() => updateQty(item.id, -1)}
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-ink/70 shadow-soft transition-colors hover:text-orange"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                      <path d="M5 12h14" strokeLinecap="round" />
                    </svg>
                  </button>
                  <span className="w-4 text-center text-sm font-semibold text-ink">
                    {item.qty}
                  </span>
                  <button
                    aria-label={`Increase quantity of ${item.name}`}
                    onClick={() => updateQty(item.id, 1)}
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-ink/70 shadow-soft transition-colors hover:text-orange"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>

                <p className="w-20 shrink-0 text-right text-sm font-semibold text-orange">
                  {money(item.price * item.qty)}
                </p>
              </div>
            ))}

            <button className="flex items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-orange/30 py-4 text-sm font-semibold text-orange transition-colors hover:bg-orange-50">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M12 5v14M5 12h14" strokeLinecap="round" />
              </svg>
              Add more items from your favorites
            </button>
          </div>

          {/* Summary */}
          <div className="flex flex-col gap-5">
            <div className="rounded-2xl bg-white p-5 shadow-soft">
              <h3 className="text-sm font-semibold text-ink">Apply Promo Code</h3>
              <form onSubmit={handleApplyPromo} className="mt-3 flex items-center gap-2">
                <input
                  type="text"
                  value={promo}
                  onChange={(e) => setPromo(e.target.value)}
                  placeholder="E.g. FOODGO20"
                  className="w-full rounded-full bg-cream2 px-4 py-2.5 text-sm placeholder:text-sub/70 focus:outline-none focus:ring-2 focus:ring-orange/40"
                />
                <button
                  type="submit"
                  className="shrink-0 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange"
                >
                  Apply
                </button>
              </form>
              {promoMessage && (
                <p
                  className={`mt-2 text-xs font-medium ${
                    promoMessage.type === "success" ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {promoMessage.text}
                </p>
              )}
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-soft">
              <h3 className="text-base font-semibold text-ink">Order Summary</h3>
              <div className="mt-4 space-y-2.5 text-sm">
                <div className="flex justify-between text-sub">
                  <span>Subtotal</span>
                  <span className="font-medium text-ink">{money(subtotal)}</span>
                </div>
                <div className="flex justify-between text-sub">
                  <span>Delivery Fee</span>
                  <span className="font-medium text-ink">{money(DELIVERY_FEE)}</span>
                </div>
                <div className="flex justify-between text-sub">
                  <span>Service Tax (5%)</span>
                  <span className="font-medium text-ink">{money(tax)}</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-ink/10 pt-4">
                <span className="text-base font-semibold text-ink">Total</span>
                <span className="text-xl font-bold text-orange">{money(total)}</span>
              </div>
                
              <button
                disabled={items.length === 0}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-orange py-3.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50"
              >
              <Link href="/checkout">
                  Proceed to Checkout →
                </Link>

               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
              </button>
              <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-sub">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="11" width="14" height="9" rx="2" />
                  <path d="M8 11V7a4 4 0 118 0v4" strokeLinecap="round" />
                </svg>
                Secure encrypted checkout
              </p>
            </div>

            <div className="flex items-start gap-3 rounded-2xl bg-orange-50 p-4">
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange text-white">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">Estimated Delivery</p>
                <p className="text-xs text-sub">25-35 minutes to your current location</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}