import { Outlet, Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const PublicLayout = () => {
  const { state } = useCart();
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold drop-shadow-lg">TechStore</h1>

          <nav className="flex gap-6">
            <Link
              to="/"
              className="hover:text-indigo-300 transition-colors duration-200 font-semibold"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="hover:text-indigo-300 transition-colors duration-200 font-semibold"
            >
              Products
            </Link>
            <Link
              to="/dashboard"
              className="hover:text-indigo-300 transition-colors duration-200 font-semibold"
            >
              Dashboard
            </Link>
            <Link to="/cart">
              Cart ({state.items.length})
            </Link>

          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-0">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-4 mt-auto">
        © 2026 TechStore. Innovación al alcance de tu mano.
      </footer>
    </div>
  );
};

export default PublicLayout;