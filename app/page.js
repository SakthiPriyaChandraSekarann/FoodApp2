import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import PromoBanners from "@/components/PromoBanners";
import TopRestaurants from "@/components/TopRestaurants";
import TrendingDishes from "@/components/TrendingDishes";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      <Categories />
      <PromoBanners />
      <TopRestaurants />
      <TrendingDishes />
      <Testimonials />
      <Footer />
    </main>
  );
}