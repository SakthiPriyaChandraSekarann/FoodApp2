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
  layout.js        Root layout, fonts, metadata
  page.js           Assembles all sections
  globals.css       Tailwind directives + base styles
components/
  Navbar.js         Logo, nav links, search/cart icons, Sign Up button
  Hero.js           Headline, address search bar, hero food image
  Categories.js     "Explore Categories" icon grid (Pizza, Burger, Wraps, etc.)
  PromoBanners.js   "Get 50% Off" + "Weekend Feast" promo cards
  TopRestaurants.js Restaurant cards with rating + delivery time
  TrendingDishes.js Dish cards with price + add-to-cart button
  Testimonials.js   "What Our Foodies Say" review cards
  Footer.js         Links, newsletter signup, socials
```

## Notes

- Colors, type scale, and spacing are defined as Tailwind theme tokens in `tailwind.config.js` (cream background, ink text, orange accent).
- Food photography is pulled from Unsplash via `next/image`-friendly remote URLs — swap in your own restaurant/dish photography for production.
- Fully responsive: stacks to a single column on mobile, 2-column on tablet, full grid on desktop.
