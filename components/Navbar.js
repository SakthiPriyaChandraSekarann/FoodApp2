import Link from "next/link";

export default function Navbar({ active = "Home", cartCount = 2 }) {
  const links = [
    { label: "Home", href: "/" },
    { label: "Restaurants", href: "/restaurants" },
    { label: "Categories", href: "/categories" },
    { label: "Offers", href: "#" },
    { label: "Partner With Us", href: "#" },
    { label: "Contact Us", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm">
      <div className="container-px mx-auto flex max-w-7xl items-center justify-between py-5">
        <Link href="/" className="font-display text-xl font-bold tracking-tight">
          Food<span className="text-orange">Go</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-ink/80 lg:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={
                link.label === active
                  ? "text-orange"
                  : "transition-colors hover:text-orange"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            aria-label="Search"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-ink/70 transition-colors hover:bg-cream2 hover:text-orange sm:flex"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
            </svg>
          </button>
          <Link
            href="/cart"
            aria-label="Cart"
            className={`relative flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-cream2 hover:text-orange ${
              active === "Cart" ? "text-orange" : "text-ink/70"
            }`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 3h2l2.4 12.2a2 2 0 002 1.8h8.4a2 2 0 002-1.6L20 8H6" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="9" cy="20" r="1" />
              <circle cx="17" cy="20" r="1" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-orange text-[10px] font-semibold text-white">
                {cartCount}
              </span>
            )}
          </Link>
          <Link
           href="/profile"
           aria-label="Account"
           className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-cream2 hover:text-orange ${
           active === "Profile" ? "text-orange" : "text-ink/70"
         }`}
         >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="8" r="3.2" />
              <path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" strokeLinecap="round" />
            </svg>
          </Link>
          <button className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
