const columns = [
  {
    title: "Quick Links",
    links: ["About Us", "Restaurants", "Become a Partner"],
  },
  {
    title: "Support",
    links: ["Help Center", "Privacy Policy", "Terms of Service", "Refund Policy"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/5 bg-cream2">
      <div className="container-px mx-auto max-w-7xl py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#" className="text-orange-700 font-display text-xl font-bold tracking-tight">
              Food<span className="text-black">Go</span>
            </a>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-sub">
              Delicious food, delivered fast. Discover and order from the best
              restaurants in your city.
            </p>
            <div className="mt-4 flex gap-3">
              {["F", "T", "I"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-semibold text-ink/70 shadow-soft transition-colors hover:bg-orange hover:text-white"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-ink">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-sub transition-colors hover:text-orange">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-semibold text-ink">Newsletter</h4>
            <p className="mt-4 text-sm text-sub">
              Get the latest offers straight to your inbox.
            </p>
            <form className="mt-3 flex items-center gap-2 rounded-full bg-white p-1 shadow-soft">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent px-3 text-sm text-ink placeholder:text-sub/70 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange text-white transition-colors hover:bg-orange-600"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 border-t border-ink/5 pt-6 text-center text-xs text-sub">
          © 2026 FoodGo. All rights reserved. Crafted with appetite.
        </div>
      </div>
    </footer>
  );
}
