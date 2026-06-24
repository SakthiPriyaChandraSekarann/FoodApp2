# FoodGo — Food Delivery Landing Page

A pixel-inspired recreation of the FoodGo landing page design, built with **Next.js 15** (App Router) and **Tailwind CSS**.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
  layout.js         Root layout, fonts, metadata
  page.js            Home page — assembles all landing sections
  globals.css        Tailwind directives + base styles
  cart/page.js       Your Cart page — items, quantity steppers, promo code, order summary
  profile/page.js    Profile page — sidebar, editable personal details, account security
components/
  Navbar.js          Logo, nav links, search/cart/profile icons, Sign Up button
                      (accepts `active` prop: "Home" | "Cart" | "Profile" to highlight current page,
                       and `cartCount` to show the live cart badge)
  Hero.js            Headline, address search bar, hero food image
  Categories.js      "Explore Categories" icon grid (Pizza, Burger, Wraps, etc.)
  PromoBanners.js    "Get 50% Off" + "Weekend Feast" promo cards
  TopRestaurants.js  Restaurant cards with rating + delivery time
  TrendingDishes.js  Dish cards with price + add-to-cart button
  Testimonials.js    "What Our Foodies Say" review cards
  Footer.js          Links, newsletter signup, socials
```

## Pages

- **`/`** — the FoodGo landing page with hero, categories, top restaurants, trending dishes, testimonials.
- **`/restaurants`** — restaurant listing with sidebar filters (cuisine, rating, delivery time, price), 6-card grid, pagination, and recommended dishes.
- **`/categories`** — category grid with search filter and dietary preference pills (Vegan, Gluten-Free, Keto, Halal).
- **`/offers`** — hero promo banner, flash deals with live countdown timers, copyable promo codes, and newsletter signup.
- **`/partner`** — partner onboarding with hero, feature cards, stats, and working contact form for restaurant owners.
- **`/contact`** — support channels (email, phone, chat), contact form with category selector, and collapsible FAQ accordion.
- **`/cart`** — fully interactive: increase/decrease item quantity (removes the item at 0), live subtotal/tax/total recalculation, promo code field, and a disabled checkout state when the cart is empty.
- **`/profile`** — editable personal details form with a draft/save pattern: "Save Profile" and "Cancel Changes" only enable once you've actually changed a field.

## Notes

- Colors, type scale, and spacing are defined as Tailwind theme tokens in `tailwind.config.js` (cream background, ink text, orange accent).
- Food photography is pulled from Unsplash via `next/image`-friendly remote URLs — swap in your own restaurant/dish photography for production.
- Fully responsive: stacks to a single column on mobile, 2-column on tablet, full grid on desktop.
