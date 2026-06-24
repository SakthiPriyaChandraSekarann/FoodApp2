"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  {
    title: "Increased Reach",
    description:
      "Expand your customer base and reach hungry diners in your neighborhood every single day.",
    icon: "arrow-up",
  },
  {
    title: "Fast Delivery",
    description:
      "Our reliable logistics network ensures your food reaches customers hot and fresh.",
    icon: "zap",
  },
  {
    title: "Business Insights",
    description:
      "Get real-time analytics and dashboards to track your restaurant's performance.",
    icon: "chart",
  },
];

const stats = [
  { number: "15,000+", label: "Active Restaurants" },
  { number: "2M+", label: "Monthly Orders" },
  { number: "30min", label: "Avg. Delivery" },
  { number: "98%", label: "Partner Satisfaction" },
];

const benefits = [
  "Zero commission for the first 3 months",
  "Dedicated account manager assigned",
  "Custom menu management dashboard",
  "Free marketing and promotional support",
  "24/7 customer support for partners",
];

export default function PartnerPage() {
  const [formData, setFormData] = useState({
    restaurantName: "",
    ownerName: "",
    email: "",
    location: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      formData.restaurantName &&
      formData.ownerName &&
      formData.email &&
      formData.location
    ) {
      setSubmitted(true);
      setFormData({
        restaurantName: "",
        ownerName: "",
        email: "",
        location: "",
        phone: "",
      });
      setTimeout(() => setSubmitted(false), 3000);
    }
  }

  return (
    <main className="min-h-screen bg-cream">
      <Navbar active="Partner With Us" />

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="Professional Restaurant Kitchen.png"
          alt="Restaurant kitchen"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/50 to-transparent" />

        <div className="container-px relative mx-auto max-w-7xl py-16 sm:py-24">
          <span className="w-fit rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-semibold text-orange-700">
            JOIN OUR NETWORK
          </span>
          <h1 className="mt-5 max-w-2xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
            Grow Your Business with FoodGo
          </h1>
          <p className="mt-4 max-w-md text-lg text-white/85">
            Tap into our vast customer base and streamlined delivery
            logistics to scale your restaurant's revenue today.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="flex items-center justify-center gap-2 rounded-2xl bg-orange px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600">
              Get Started Today
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="rounded-2xl border-2 border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight">
            Why Partner with Us?
          </h2>
          <p className="mt-2 text-sub">
            Unlock growth opportunities and increase your revenue.
          </p>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl bg-white p-6 shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50">
                {f.icon === "arrow-up" && (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-orange"
                  >
                    <path
                      d="M12 19V5M5 12l7-7 7 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                {f.icon === "zap" && (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-orange"
                  >
                    <path
                      d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
                {f.icon === "chart" && (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-orange"
                  >
                    <rect x="3" y="12" width="4" height="8" rx="1" />
                    <rect x="10" y="5" width="4" height="15" rx="1" />
                    <rect x="17" y="2" width="4" height="18" rx="1" />
                  </svg>
                )}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm text-sub">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ink">
        <div className="container-px mx-auto max-w-7xl py-12">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-3xl font-bold text-orange sm:text-4xl">
                  {s.number}
                </p>
                <p className="mt-1 text-xs text-white/70 sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Revolution */}
      <section className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left */}
          
          <div className="flex flex-col justify-center rounded-2xl bg-orange-600 p-8 text-white">
            <span className="w-fit rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
              PARTNER WITH US
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight">
              Join the Revolution
            </h2>
            <p className="mt-3 text-sm text-white/85">
              Ready to take your restaurant to the next level? Get access to
              our comprehensive support program and unlock new revenue streams.
            </p>

            <ul className="mt-6 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="mt-0.5 shrink-0"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white p-8 shadow-soft"
          >
            <h3 className="font-display text-xl font-bold text-ink">
              Get Started
            </h3>
            <p className="mt-1 text-sm text-sub">
              Fill in your details and our team will contact you shortly.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-ink/70">
                  Restaurant Name
                </label>
                <input
                  type="text"
                  name="restaurantName"
                  value={formData.restaurantName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-ink/10 bg-cream2 px-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-orange/40"
                  placeholder="Your restaurant name"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-ink/70">
                  Owner Name
                </label>
                <input
                  type="text"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-ink/10 bg-cream2 px-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-orange/40"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-ink/70">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-ink/10 bg-cream2 px-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-orange/40"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-ink/70">
                  City / Locality
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-ink/10 bg-cream2 px-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-orange/40"
                  placeholder="Where is your restaurant?"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold text-ink/70">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-ink/10 bg-cream2 px-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-orange/40"
                  placeholder="+1 (555) 000-1234"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-orange-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
            >
              Submit Application →
            </button>

            <p className="mt-3 text-center text-xs text-sub">
              By submitting, you agree to our{" "}
              <Link href="#" className="text-orange-700 hover:underline">
                Partner Policy
              </Link>
            </p>

            {submitted && (
              <p className="mt-4 rounded-lg bg-green-50 p-3 text-center text-sm font-medium text-green-700">
                Thank you! We'll review your application and be in touch soon.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-px mx-auto max-w-7xl py-12 text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight">
          Ready to cook something great together?
        </h2>
        <p className="mt-3 text-sub">
          Join thousands of successful restaurant partners on FoodGo.
        </p>
        <button className="mt-6 rounded-full bg-orange-700 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600">
          Start Your Journey Today
        </button>
      </section>

      <Footer />
    </main>
  );
}
