import { Outlet, Link, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const PublicLayout = () => {
  const { state } = useCart();
  const location = useLocation();

  const linkStyle = (path: string) =>
    `relative text-sm font-medium transition-colors duration-200 ${
      location.pathname === path
        ? "text-black"
        : "text-neutral-500 hover:text-black"
    }`;

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900">
      {/* Header */}
      <header className="border-b border-neutral-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-8">
          <h1 className="text-lg font-semibold tracking-wide">
            TechStore
          </h1>

          <nav className="flex items-center gap-8">
            <Link to="/" className={linkStyle("/")}>
              Home
            </Link>

            <Link to="/products" className={linkStyle("/products")}>
              Products
            </Link>

            <Link to="/dashboard" className={linkStyle("/dashboard")}>
              Dashboard
            </Link>

            <Link
              to="/cart"
              className="ml-4 px-4 py-2 rounded-lg border border-neutral-300 text-sm font-medium hover:bg-neutral-100 transition-colors"
            >
              Cart ({state.items.length})
            </Link>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white text-neutral-500 text-sm text-center py-6">
        © 2026 TechStore. All rights reserved.
      </footer>
    </div>
  );
};

export default PublicLayout;