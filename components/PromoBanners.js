export default function PromoBanners() {
  return (
    <section className="container-px mx-auto max-w-7xl py-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="relative overflow-hidden rounded-2xl shadow-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="Gourmet Platter.png"
            alt="Fresh sushi platter promotion"
            className="h-44 w-full object-cover sm:h-52"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/30 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center gap-3 px-7">
            <span className="w-fit rounded-full bg-orange-700 px-3 py-1 text-xs font-semibold text-white">
              LIMITED TIME
            </span>
            <h3 className="font-display text-2xl font-bold text-white">
              Get 50% Off
            </h3>
             <p className="font-display text-smaller font-sans text-white">
              on your first 3 orders
            </p>
            <button className="w-fit rounded-full bg-white px-5 py-2 text-sm font-semibold text-ink transition-colors hover:bg-orange hover:text-white">
              Order Now
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl shadow-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="Pepperoni Pizza.png"
            alt="Pasta dish promotion for the weekend"
            className="h-44 w-full object-cover sm:h-52"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/30 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center gap-3 px-7">
            <span className="w-fit rounded-full bg-sky-700 px-3 py-1 text-xs font-semibold text-pink-50">
              FREE DELIVERY
            </span>
            <h3 className="font-display text-2xl font-bold text-white">
              Weekend Feast
            </h3>
             <p className="font-display text-smaller font-sans text-white">
              Free delivery on orders above $30
            </p>
            <button className="w-fit rounded-full bg-white px-5 py-2 text-sm font-semibold text-ink transition-colors hover:bg-orange hover:text-white">
              Check Deal
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
