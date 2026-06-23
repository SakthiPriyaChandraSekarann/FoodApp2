export default function Hero() {
  return (
    <section className="container-px mx-auto max-w-7xl pt-6 pb-16 sm:pt-10">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left: copy */}
        <div>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Delicious Food
            <br />
            <span className="text-orange-700">Delivered</span> to Your
            <br />
            Doorstep
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-sub">
            Savor the finest cuisines from top-rated restaurants near you.
            Fast delivery, fresh ingredients, and unforgettable taste — every
            single time.
          </p>

          <form className="mt-8 flex max-w-md items-center gap-2 rounded-full bg-white p-1.5 shadow-card">
            <svg
              className="ml-3 shrink-0 text-sub"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M12 21s-7-5.6-7-11a7 7 0 1114 0c0 5.4-7 11-7 11z"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="10" r="2.4" />
            </svg>
            <input
              type="text"
              placeholder="Enter your delivery address"
              className="w-full bg-transparent text-sm text-ink placeholder:text-sub/70 focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 whitespace-nowrap rounded-full bg-orange-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600"
            >
              Search Food
            </button>
          </form>
        </div>

        {/* Right: image */}
        <div className="relative mx-auto w-full max-w-lg">
          <div className="overflow-hidden rounded-[2rem] shadow-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="Gourmet Burger.png"
              alt="Loaded gourmet cheeseburger with melted cheese and fresh toppings"
              className="aspect-[4/4] w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-5 left-6 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-card sm:left-10">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-orange">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-ink">Super Fast</p>
              <p className="text-xs text-sub">25min Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
