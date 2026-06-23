import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-extrabold text-[#C84B11]">
              FoodGo
            </Link>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed">
              Bringing the world&apos;s best flavors to your home, one delivery at a time. Premium quality food, unmatched service.
            </p>
            <div className="flex gap-3 mt-4">
              {/* Social placeholders */}
              {["📱", "📘", "🐦"].map((icon, i) => (
                <button key={i} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs hover:bg-[#FDEEE6] transition-colors">
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "Restaurants", "Offers", "Become a Partner"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-500 hover:text-[#C84B11] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2">
              {["Help Center", "Privacy Policy", "Terms of Service", "Refund Policy"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-sm text-gray-500 hover:text-[#C84B11] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Newsletter</h3>
            <p className="text-sm text-gray-500 mb-3">Subscribe to get the latest deals and new restaurant alerts.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-0 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C84B11] focus:border-transparent"
              />
              <button className="bg-[#C84B11] text-white px-3 py-2 rounded-lg hover:bg-[#a83d0e] transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-100 text-center">
          <p className="text-sm text-gray-400">© 2024 FoodGo. All rights reserved. Premium Culinary Delivery.</p>
        </div>
      </div>
    </footer>
  );
}
