const testimonials = [
  {
    quote:
      "The delivery service is fast and reliable. I've tried almost every dish on the menu and they're all consistently delicious.",
    name: "Sarah Johnson",
    role: "Food Blogger",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
  },
  {
    quote:
      "FoodGo has completely changed how I order food. The variety of restaurants is incredible, and the app is so easy to use.",
    name: "David Chen",
    role: "Software Engineer",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=120&q=80",
  },
  {
    quote:
      "I love the bakery-fresh feeling every time my order arrives still warm. The customer support team is also fantastic.",
    name: "Elena Rodriguez",
    role: "Marketing Manager",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-orange">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.9 6.6 7.1.7-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 9.3l7.1-.7z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="container-px mx-auto max-w-7xl py-14">
      <div className="text-center">
        <h2 className="font-display text-2xl font-bold tracking-tight sm:text-[1.7rem]">
          What Our Foodies Say
        </h2>
        <p className="mt-1 text-sm text-sub">
          Real reviews from real, happy customers
        </p>
      </div>

      <div className="mt-9 grid gap-5 sm:grid-cols-3">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-soft"
          >
            <Stars />
            <p className="text-sm leading-relaxed text-ink/80">“{t.quote}”</p>
            <div className="mt-auto flex items-center gap-3 pt-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={t.img}
                alt={t.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="leading-tight">
                <p className="text-sm font-semibold text-ink">{t.name}</p>
                <p className="text-xs text-sub">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
