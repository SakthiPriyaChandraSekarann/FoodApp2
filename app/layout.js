import "./globals.css";

export const metadata = {
  title: "FoodGo — Delicious Food Delivered to Your Doorstep",
  description:
    "Order from the finest cuisines from top-rated restaurants near you. Fast delivery, fresh ingredients, unforgettable food.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
