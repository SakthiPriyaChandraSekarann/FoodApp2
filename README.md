# FoodGo – Next.js + Tailwind CSS

A pixel-perfect recreation of the FoodGo food delivery website with two pages: **Categories** and **Offers**.

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Categories page with image grid and search
- ✅ Offers page with hero banner, live countdown timers, promo code copy
- ✅ Sticky navbar with active link highlighting
- ✅ Mobile hamburger menu
- ✅ `/` redirects to `/categories`
- ✅ Dietary preference filter pills
- ✅ Newsletter signup sections

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects to `/categories`.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Redirects to `/categories` |
| `/categories` | Food categories grid page |
| `/offers` | Flash deals, promo codes, newsletter |

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Brand Orange | `#C84B11` | Primary CTAs, active links, accents |
| Peach | `#FDEEE6` | Backgrounds, cards |
| Dark Overlay | `#000` at 70% | Category card gradients |

## Project Structure

```
foodgo/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Redirect → /categories
│   ├── globals.css         # Tailwind + Google Fonts
│   ├── categories/
│   │   └── page.tsx        # Categories page
│   └── offers/
│       └── page.tsx        # Offers page
├── components/
│   ├── Navbar.tsx          # Sticky nav with mobile menu
│   └── Footer.tsx          # Footer with newsletter
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```
