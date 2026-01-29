import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
        {/* Text Section */}
        <div>
          <p className="uppercase tracking-widest text-sm text-neutral-500 mb-4">
            Premium Technology Store
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-8">
            Technology designed
            <br />
            for modern life
          </h1>

          <p className="text-neutral-600 text-lg mb-10 max-w-xl">
            Discover carefully curated products focused on performance,
            simplicity and timeless design. A professional digital commerce
            experience built with modern frontend architecture.
          </p>

          <div className="flex gap-4">
            <Link
              to="/products"
              className="bg-neutral-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-neutral-800 transition"
            >
              Browse products
            </Link>

            <Link
              to="/dashboard"
              className="border border-neutral-300 px-8 py-4 rounded-lg font-medium hover:bg-neutral-200 transition"
            >
              View dashboard
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            alt="Modern workspace"
            className="rounded-2xl shadow-xl w-full h-[420px] object-cover"
          />

          <div className="absolute -bottom-6 -right-6 bg-white border border-neutral-200 rounded-xl p-6 shadow-lg">
            <p className="text-sm text-neutral-500">Trusted by teams</p>
            <p className="text-2xl font-semibold">+12,000 users</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-12 grid sm:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-semibold mb-2">Fast delivery</h3>
            <p className="text-neutral-600 text-sm">
              Reliable logistics and instant order tracking.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Secure payments</h3>
            <p className="text-neutral-600 text-sm">
              Industry-standard encrypted checkout.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Premium support</h3>
            <p className="text-neutral-600 text-sm">
              Real humans ready to help 24/7.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;