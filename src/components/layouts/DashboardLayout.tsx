import { Outlet, Link } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 text-white flex flex-col p-6">
        <h2 className="text-2xl font-bold mb-8 drop-shadow-lg">Admin Panel</h2>

        <nav className="flex flex-col gap-4">
          <Link
            to="/dashboard"
            className="px-3 py-2 rounded hover:bg-indigo-700 transition-colors duration-200 font-semibold"
          >
            Overview
          </Link>
          <Link
            to="/dashboard/products"
            className="px-3 py-2 rounded hover:bg-indigo-700 transition-colors duration-200 font-semibold"
          >
            Products
          </Link>
          <Link
            to="/Products"
            className="px-3 py-2 rounded hover:bg-indigo-700 transition-colors duration-200 font-semibold mt-4"
          >
            Go to Store
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;