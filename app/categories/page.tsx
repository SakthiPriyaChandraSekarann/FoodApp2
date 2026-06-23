import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  {
    name: "Pizza",
    emoji: "🍕",
    gradient: "from-red-800 to-red-600",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop",
  },
  {
    name: "Burgers",
    emoji: "🍔",
    gradient: "from-yellow-800 to-yellow-600",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
  },
  {
    name: "Biryani",
    emoji: "🍛",
    gradient: "from-orange-800 to-orange-600",
    img:"https://media.istockphoto.com/id/1410130688/photo/mutton-biryani-served-in-a-golden-dish-isolated-on-dark-background-side-view-indian-food.jpg?s=612x612&w=0&k=20&c=ueFrghYZuKAty-rFVe5dtMtNIbn0jaUsSvCUwTVOmd8="
    // img: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=400&h=300&fit=crop",
  },
  {
    name: "Desserts",
    emoji: "🍮",
    gradient: "from-amber-800 to-amber-600",
    img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop",
  },
  {
    name: "South Indian",
    emoji: "🫓",
    gradient: "from-green-800 to-green-700",
    img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&h=300&fit=crop",
  },
  {
    name: "Chinese",
    emoji: "🍜",
    gradient: "from-red-900 to-red-700",
    img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
  },
  {
    name: "Beverages",
    emoji: "🧋",
    gradient: "from-teal-800 to-teal-600",
    img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop",
  },
];

const dietaryFilters = ["Vegan", "Gluten-Free", "Keto", "Halal"];

export default function CategoriesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
                Cravings{" "}
                <span className="text-[#C84B11]">Sorted</span>
              </h1>
              <p className="mt-3 text-gray-500 text-base max-w-lg">
                Explore our curated culinary categories and find exactly what your appetite is calling for today.
              </p>
            </div>
            {/* Search */}
            <div className="w-full md:w-80">
              <div className="relative">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search categories..."
                  className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C84B11] focus:border-transparent shadow-sm"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.name}
                href={`/categories/${cat.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="group relative rounded-2xl overflow-hidden aspect-square block cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                {/* Background Image */}
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-bold text-lg sm:text-xl drop-shadow-lg">{cat.name}</p>
                </div>
              </Link>
            ))}

            {/* Explore More Card */}
            <Link
              href="/categories/all"
              className="group relative rounded-2xl overflow-hidden aspect-square flex flex-col items-center justify-center bg-[#FDEEE6] border-2 border-dashed border-[#C84B11]/30 hover:border-[#C84B11] transition-colors duration-300 cursor-pointer"
            >
              <div className="w-12 h-12 bg-[#C84B11]/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-[#C84B11]/20 transition-colors">
                <svg className="w-6 h-6 text-[#C84B11]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </div>
              <p className="text-gray-800 font-bold text-base">Explore More</p>
              <p className="text-gray-500 text-xs mt-0.5">15+ More categories</p>
            </Link>
          </div>
        </section>

        {/* Tailored Recommendations */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-[#FDEEE6] rounded-2xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-md">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Get tailored{" "}
                <span className="text-[#C84B11]">recommendations</span>
              </h2>
              <p className="mt-2 text-gray-500 text-sm leading-relaxed">
                Tell us your dietary preferences and we&apos;ll show you categories that match your lifestyle.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center md:justify-end">
              {dietaryFilters.map((filter) => (
                <button
                  key={filter}
                  className="px-5 py-2 bg-white text-gray-700 text-sm font-medium rounded-full border border-gray-200 hover:border-[#C84B11] hover:text-[#C84B11] transition-colors shadow-sm"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
