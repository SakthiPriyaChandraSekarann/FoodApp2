"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const supportChannels = [
  {
    title: "Email Us",
    subtitle: "We respond within 2 hours",
    detail: "support@foodgo.com",
    icon: "mail",
  },
  {
    title: "Call Support",
    subtitle: "Chat with our team live",
    detail: "+1 (800) FOODGO-50",
    icon: "phone",
  },
  {
    title: "Live Chat",
    subtitle: "Start conversation now",
    detail: "Start Conversation →",
    icon: "chat",
  },
];

const faqs = [
  {
    question: "How can I track my order in real-time?",
    answer:
      "You can track your order using the order tracker in your account. A real-time map shows your delivery partner's location and estimated arrival time. Notifications are sent at each stage of delivery.",
  },
  {
    question: "What's the estimated delivery time?",
    answer:
      "Estimated delivery times vary by restaurant and location, typically ranging from 15 to 45 minutes. You'll see the exact estimate during checkout based on your delivery address and current demand.",
  },
  {
    question: "Do you offer refunds for cancelled orders?",
    answer:
      "Yes, we offer full refunds for orders cancelled before the restaurant starts preparing your food. If the order is already being prepared, you may receive a partial refund depending on the circumstances.",
  },
];

const icons = {
  mail: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  phone: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" strokeLinecap="round" />
    </svg>
  ),
  chat: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 8l9 6 9-6M3 8v10a2 2 0 002 2h14a2 2 0 002-2V8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-ink/5 py-4 first:pt-0 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-4 text-left transition-colors hover:text-orange"
      >
        <span className="text-sm font-semibold text-ink">{q}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`mt-0.5 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <p className="mt-3 text-sm leading-relaxed text-sub">{a}</p>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "General Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        category: "General Inquiry",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 3000);
    }
  }

  return (
    <main className="min-h-screen bg-cream">
      <Navbar active="Contact Us" />

      <section className="container-px mx-auto max-w-7xl py-12">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl text-orange-700">
              Get in Touch
            </h1>
            <p className="mt-3 text-sm text-black">
              Have a question about your order or want to partner with us?
              We&apos;d love to hear from you. Our team is here to help you
              every step of the way.
            </p>

            <div className="mt-8 space-y-3">
              {supportChannels.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl bg-white p-4 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-700">
                      {icons[c.icon]}
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-ink">{c.title}</h3>
                      <p className="text-xs text-sub">{c.subtitle}</p>
                      <p className="mt-1 text-sm font-semibold text-orange-700">{c.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Support agent image */}
          <div className="flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="Contact Support.png"
              alt="Support agent with headset"
              className="h-64 w-64 rounded-2xl object-cover shadow-card sm:h-72 sm:w-72"
            />
          </div>
        </div>

        {/* Contact form */}
        <div className="mt-16">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            Send us a Message
          </h2>

          <form onSubmit={handleSubmit} className="mt-6 rounded-2xl bg-white p-6 shadow-soft sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm text-bold font-semibold text-ink/70">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-ink/10 bg-cream2 px-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-orange/40"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm text-bold font-semibold text-ink/70">
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
            </div>

            <div className="mt-5">
              <label className="mb-1.5 block text-sm text-bold font-semibold text-ink/70">
                Order Support
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full rounded-xl border border-ink/10 bg-cream2 px-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-orange/40"
              >
                <option>General Inquiry</option>
                <option>Order Issue</option>
                <option>Delivery Problem</option>
                <option>Payment Issue</option>
                <option>Partnership Inquiry</option>
              </select>
            </div>

            <div className="mt-5">
              <label className="mb-1.5 block text-sm text-bold font-semibold text-ink/70">
                How can we help you?
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full resize-none rounded-xl border border-ink/10 bg-cream2 px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-orange/40"
                placeholder="Tell us about your issue or question..."
              />
            </div>

            <button
              type="submit"
              className="mt-6 rounded-xl bg-orange-700 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
            >
              Send Message
            </button>

            {submitted && (
              <p className="mt-4 rounded-lg bg-green-50 p-3 text-center text-sm font-medium text-green-700">
                Thank you! We received your message and will get back to you
                shortly.
              </p>
            )}
          </form>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>

          <div className="mt-6 rounded-2xl bg-white p-6 shadow-soft">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} q={faq.question} a={faq.answer} />
            ))}
            <div className="mt-6 border-t border-ink/5 pt-6">
              <button className="text-sm font-semibold text-orange-700 hover:underline">
                View all FAQs →
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
