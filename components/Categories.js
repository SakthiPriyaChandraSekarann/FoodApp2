const categories = [
  {
    name: "Pizza",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 11L12 3l9 8H3z" strokeLinejoin="round" />
        <path d="M5 11l7 10 7-10" strokeLinejoin="round" />
        <circle cx="11" cy="9" r="0.9" fill="currentColor" stroke="none" />
        <circle cx="14.5" cy="11.5" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Burger",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 10c0-3.3 3.6-6 8-6s8 2.7 8 6" strokeLinecap="round" />
        <path d="M3 11h18" strokeLinecap="round" />
        <path d="M4 14h16" strokeLinecap="round" />
        <path d="M3 17h18a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Wraps",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6 4l13 13-3 3L3 7z" strokeLinejoin="round" />
        <path d="M14 6l4 4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Desserts",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3v3" strokeLinecap="round" />
        <path d="M5 10a7 7 0 0114 0c0 .7-.6 1-1.2 1H6.2C5.6 11 5 10.7 5 10z" strokeLinejoin="round" />
        <path d="M5 11l1.2 8.4a2 2 0 002 1.6h7.6a2 2 0 002-1.6L19 11" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Asian",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 8h16l-1.4 9.8A2 2 0 0116.6 20H7.4a2 2 0 01-2-1.7L4 8z" strokeLinejoin="round" />
        <path d="M9 8a3 3 0 116 0" strokeLinecap="round" />
        <path d="M9 12v4M12 12v4M15 12v4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Drinks",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M7 3h10l-1 6a4 4 0 01-8 0L7 3z" strokeLinejoin="round" />
        <path d="M12 13v8M9 21h6" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Categories() {
  return (
    <section className="container-px mx-auto max-w-7xl py-10">
      <h2 className="font-display text-2xl font-bold tracking-tight sm:text-[1.7rem]">
        Explore Categories
      </h2>

      <div className="mt-7 grid grid-cols-3 gap-4 sm:grid-cols-6">
        {categories.map((cat) => (
          <button
            key={cat.name}
            className="group flex flex-col items-center gap-3 rounded-2xl bg-white py-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-50 text-orange transition-colors group-hover:bg-orange group-hover:text-white">
              {cat.icon}
            </span>
            <span className="text-sm font-medium text-ink/80">{cat.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
