"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sidebarLinks = [
  { label: "Profile", icon: "user", active: true },
  { label: "Saved Addresses", icon: "pin", active: false },
  { label: "Payments", icon: "card", active: false },
  { label: "Notifications", icon: "bell", active: false },
];

const initialProfile = {
  firstName: "Alex",
  lastName: "Thompson",
  email: "alex.thompson@example.com",
  phone: "+1 (555) 000-1234",
  bio: "Food enthusiast and city explorer. Always looking for the best sushi in town!",
};

const icons = {
  user: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" strokeLinecap="round" />
    </svg>
  ),
  pin: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 21s-7-5.6-7-11a7 7 0 1114 0c0 5.4-7 11-7 11z" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  ),
  card: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18" strokeLinecap="round" />
    </svg>
  ),
  bell: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 10a6 6 0 1112 0c0 3 1 4.5 1.5 5.3a.9.9 0 01-.8 1.4H5.3a.9.9 0 01-.8-1.4C5 14.5 6 13 6 10z" strokeLinejoin="round" />
      <path d="M10 19a2 2 0 004 0" strokeLinecap="round" />
    </svg>
  ),
  logout: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 17l5-5-5-5M21 12H9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export default function ProfilePage() {
  const [profile, setProfile] = useState(initialProfile);
  const [draft, setDraft] = useState(initialProfile);
  const dirty = JSON.stringify(profile) !== JSON.stringify(draft);

  function handleChange(field, value) {
    setDraft((prev) => ({ ...prev, [field]: value }));
  }

  function handleSave(e) {
    e.preventDefault();
    setProfile(draft);
  }

  function handleCancel() {
    setDraft(profile);
  }

  return (
    <main className="min-h-screen bg-cream">
      <Navbar active="Profile" />

      <section className="container-px mx-auto max-w-7xl py-8">
        <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
          {/* Sidebar */}
          <aside className="h-fit rounded-2xl bg-white p-5 shadow-soft">
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="Profile.png"
                  alt={`${profile.firstName} ${profile.lastName}`}
                  className="h-20 w-20 rounded-full object-cover"
                />
                <button
                  aria-label="Change profile photo"
                  className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-orange text-white shadow-soft transition-colors hover:bg-orange-600"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M4 16V8a2 2 0 012-2h2l1.4-2h5.2L16 6h2a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2z" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
              </div>
              <h2 className="mt-3 text-base font-semibold text-ink">
                {profile.firstName} {profile.lastName}
              </h2>
              <p className="text-xs text-sub">{profile.email}</p>
            </div>

            <nav className="mt-6 flex flex-col gap-1.5">
              {sidebarLinks.map((link) => (
                <button
                  key={link.label}
                  className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
                    link.active
                      ? "bg-orange text-white"
                      : "text-ink/70 hover:bg-cream2"
                  }`}
                >
                  {icons[link.icon]}
                  {link.label}
                </button>
              ))}
            </nav>

            <div className="mt-3 border-t border-ink/10 pt-3">
              <button className="flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-orange transition-colors hover:bg-orange-50">
                {icons.logout}
                Logout
              </button>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex flex-col gap-6">
            <form
              onSubmit={handleSave}
              className="rounded-2xl bg-white p-6 shadow-soft"
            >
              <h1 className="font-display text-xl font-bold text-ink">
                Personal Details
              </h1>
              <p className="mt-1 text-sm text-sub">
                Update your information and manage your account settings.
              </p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <Field label="First Name">
                  <input
                    type="text"
                    value={draft.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    className="w-full rounded-xl bg-cream2 px-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-orange/40"
                  />
                </Field>
                <Field label="Last Name">
                  <input
                    type="text"
                    value={draft.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    className="w-full rounded-xl bg-cream2 px-4 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-orange/40"
                  />
                </Field>

                <Field label="Email Address" icon="mail">
                  <input
                    type="email"
                    value={draft.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="w-full rounded-xl bg-cream2 px-4 py-2.5 pl-10 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-orange/40"
                  />
                </Field>
                <Field label="Phone Number" icon="phone">
                  <input
                    type="tel"
                    value={draft.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="w-full rounded-xl bg-cream2 px-4 py-2.5 pl-10 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-orange/40"
                  />
                </Field>
              </div>

              <div className="mt-5">
                <label className="mb-1.5 block text-xs font-semibold text-ink/70">
                  Bio
                </label>
                <textarea
                  value={draft.bio}
                  onChange={(e) => handleChange("bio", e.target.value)}
                  rows={3}
                  className="w-full resize-none rounded-xl bg-cream2 px-4 py-3 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-orange/40"
                />
              </div>

              <div className="mt-6 flex items-center justify-end gap-4 border-t border-ink/10 pt-5">
                <button
                  type="button"
                  onClick={handleCancel}
                  disabled={!dirty}
                  className="text-sm font-semibold text-orange transition-opacity hover:underline disabled:opacity-40 disabled:hover:no-underline"
                >
                  Cancel Changes
                </button>
                <button
                  type="submit"
                  disabled={!dirty}
                  className="rounded-full bg-orange px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Save Profile
                </button>
              </div>
            </form>

            <div className="rounded-2xl bg-white p-6 shadow-soft">
              <h3 className="text-base font-semibold text-ink">Account Security</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <SecurityRow
                  icon="lock"
                  title="Change Password"
                  subtitle="Last updated 3 months ago"
                />
                <SecurityRow
                  icon="shield"
                  title="Two-Factor Auth"
                  subtitle="Currently Disabled"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Field({ label, icon, children }) {
  const fieldIcons = {
    mail: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    phone: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" strokeLinecap="round" />
      </svg>
    ),
  };

  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-ink/70">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-sub">
            {fieldIcons[icon]}
          </span>
        )}
        {children}
      </div>
    </div>
  );
}

function SecurityRow({ icon, title, subtitle }) {
  const rowIcons = {
    lock: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="5" y="11" width="14" height="9" rx="2" />
        <path d="M8 11V7a4 4 0 118 0v4" strokeLinecap="round" />
      </svg>
    ),
    shield: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" strokeLinejoin="round" />
      </svg>
    ),
  };

  return (
    <button className="flex items-center gap-3 rounded-xl bg-cream2 px-4 py-3.5 text-left transition-colors hover:bg-orange-50">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-ink/70">
        {rowIcons[icon]}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-ink">{title}</p>
        <p className="text-xs text-sub">{subtitle}</p>
      </div>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-sub">
        <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}