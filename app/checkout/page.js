"use client";
 
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
 
const steps = [
  { label: "Address", number: 1 },
  { label: "Payment", number: 2 },
  { label: "Confirm", number: 3 },
];
 
export default function CheckoutPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(2);
  const [paymentMethod, setPaymentMethod] = useState("credit_card");
  const [cardData, setCardData] = useState({
    cardNumber: "4242 4242 4242 4242",
    cardHolder: "Your Name",
    expiryDate: "MM/YY",
    cvv: "123",
  });
 
  function handlePlaceOrder() {
    // Simulate order processing
    setTimeout(() => {
      router.push("/order-history");
    }, 1000);
  }
 
  const subtotal = 50.5;
  const deliveryFee = 2.99;
  const tax = 8.0;
  const total = subtotal + deliveryFee + tax;
 
  return (
    <main className="min-h-screen bg-cream">
      <Navbar active="Checkout" />
 
      <section className="container-px mx-auto max-w-7xl py-8">
        {/* Progress bar */}
        <div className="mb-10">
          <div className="flex items-center justify-between">
            {steps.map((step, i) => (
              <div key={step.number} className="flex flex-1 items-center gap-2">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                    currentStep >= step.number
                      ? "bg-orange-700 text-white"
                      : "border-2 border-ink/10 text-ink/40"
                  }`}
                >
                  {currentStep > step.number ? "✓" : step.number}
                </div>
                <span
                  className={`text-xs font-semibold ${
                    currentStep >= step.number ? "text-orange" : "text-ink/40"
                  }`}
                >
                  {step.label}
                </span>
                {i < steps.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-2 ${
                      currentStep > step.number ? "bg-orange-700" : "bg-ink/10"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
 
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left content */}
          <div className="space-y-6 lg:col-span-2">
            {/* Delivery Address */}
            <div className="rounded-2xl bg-white p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-lg font-bold text-orange-700">
                  Delivery Address
                </h2>
                <button className="text-sm font-semibold text-orange-700 hover:underline">
                  Edit
                </button>
              </div>
 
              <div className="mt-4 rounded-xl bg-cream2 p-4">
                <p className="text-xs font-semibold text-sub">HOME</p>
                <p className="mt-1 text-sm font-semibold text-ink">
                  3522 Park Avenue, West Wing
                </p>
                <p className="text-xs text-sub">New York, NY 10019</p>
                <p className="mt-2 text-xs text-sub">Apartment 42B</p>
              </div>
            </div>
 
            {/* Payment Method */}
            <div className="rounded-2xl bg-white p-6 shadow-soft">
              <h2 className="font-display text-lg font-bold text-orange-700">
                Payment Method
              </h2>
 
              <div className="mt-5 space-y-3">
                {/* Credit Card */}
                <label className="flex items-start gap-3 rounded-lg border-2 border-orange-700 bg-orange-50 p-4 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="credit_card"
                    checked={paymentMethod === "credit_card"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mt-1 h-4 w-4 accent-orange-700"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-orange-700"
                      >
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="M2 10h20" stroke="white" strokeWidth="2" />
                      </svg>
                      <span className="text-sm font-semibold text-ink">
                        Debit / Credit Card
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-sub">
                      Safe & secure payments. You won't be charged
                    </p>
 
                    {paymentMethod === "credit_card" && (
                      <div className="mt-4 space-y-3">
                        <div>
                          <label className="mb-1 block text-xs font-semibold text-ink/70">
                            Card Number
                          </label>
                          <input
                            type="text"
                            value={cardData.cardNumber}
                            readOnly
                            className="w-full rounded-lg border border-ink/10 bg-white px-3 py-2 text-sm text-ink/70"
                          />
                        </div>
 
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="mb-1 block text-xs font-semibold text-ink/70">
                              Expiry Date
                            </label>
                            <input
                              type="text"
                              value={cardData.expiryDate}
                              readOnly
                              className="w-full rounded-lg border border-ink/10 bg-white px-3 py-2 text-sm text-ink/70"
                            />
                          </div>
                          <div>
                            <label className="mb-1 block text-xs font-semibold text-ink/70">
                              CVV
                            </label>
                            <input
                              type="text"
                              value={cardData.cvv}
                              readOnly
                              className="w-full rounded-lg border border-ink/10 bg-white px-3 py-2 text-sm text-ink/70"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </label>
 
                {/* PayPal */}
                <label className="flex items-start gap-3 rounded-xl border-2 border-ink/10 bg-white p-4 cursor-pointer hover:border-orange hover:bg-orange-50">
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mt-1 h-4 w-4 accent-orange"
                  />
                  <div className="flex-1">
                    <span className="text-sm font-semibold text-ink">
                      PayPal
                    </span>
                    <p className="mt-1 text-xs text-sub">
                      Fast, secure, and buyer protection
                    </p>
                  </div>
                </label>
 
                {/* Cash on Delivery */}
                <label className="flex items-start gap-3 rounded-xl border-2 border-ink/10 bg-white p-4 cursor-pointer hover:border-orange hover:bg-orange-50">
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={paymentMethod === "cash"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mt-1 h-4 w-4 accent-orange"
                  />
                  <div className="flex-1">
                    <span className="text-sm font-semibold text-ink">
                      Cash on Delivery
                    </span>
                    <p className="mt-1 text-xs text-sub">
                      Pay when your order is delivered
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>
 
          {/* Right sidebar: Order Summary */}
          <div className="h-fit rounded-2xl bg-white p-6 shadow-soft lg:sticky lg:top-24">
            <h2 className="font-display text-lg font-bold text-ink">
              Order Summary
            </h2>
 
            {/* Items */}
            <div className="mt-4 space-y-3 border-b border-ink/5 pb-4">
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=60&q=80"
                  alt="Truffle Burger"
                  className="h-12 w-12 rounded-lg object-cover"
                />
                <div className="flex-1 text-sm">
                  <p className="font-semibold text-ink">Truffle Burger</p>
                  <p className="text-xs text-sub">Qty: 1</p>
                </div>
                <p className="font-semibold text-orange-700">$32.00</p>
              </div>
 
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=60&q=80"
                  alt="Quinoa Bowl"
                  className="h-12 w-12 rounded-lg object-cover"
                />
                <div className="flex-1 text-sm">
                  <p className="font-semibold text-ink">Quinoa Bowl</p>
                  <p className="text-xs text-sub">Qty: 1</p>
                </div>
                <p className="font-semibold text-orange-700">$18.50</p>
              </div>
            </div>
 
            {/* Pricing breakdown */}
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between text-sub">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sub">
                <span>Delivery Fee</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sub">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
            </div>
 
            {/* Total */}
            <div className="mt-4 border-t border-ink/5 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-ink">Total</span>
                <span className="text-xl font-bold text-ink">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>
 
            {/* CTA */}
            <button
              onClick={handlePlaceOrder}
              className="mt-5 w-full rounded-xl bg-orange-700 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
            >
              Place Order →
            </button>
 
            <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-sub">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="5" y="11" width="14" height="9" rx="2" />
                <path d="M8 11V7a4 4 0 018 0v4" strokeLinecap="round" />
              </svg>
              100% secure encrypted checkout
            </p>
          </div>
        </div>
      </section>
 
      <Footer />
    </main>
  );
}
