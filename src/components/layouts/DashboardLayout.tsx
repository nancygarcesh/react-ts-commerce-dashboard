import { Outlet, Link, useLocation } from "react-router-dom";

const DashboardLayout = () => {
  const location = useLocation();

  const linkStyle = (path: string) =>
    `px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
      location.pathname === path
        ? "bg-neutral-800 text-white"
        : "text-neutral-400 hover:text-white hover:bg-neutral-800/60"
    }`;

  return (
    <div className="flex min-h-screen bg-neutral-100 text-neutral-900">
      {/* Sidebar */}
      <aside className="w-64 bg-neutral-900 text-neutral-200 flex flex-col px-6 py-8 border-r border-neutral-800">
        <h2 className="text-lg font-semibold tracking-wide mb-10 text-white">
          Admin Panel
        </h2>

        <nav className="flex flex-col gap-2">
          <Link to="/dashboard" className={linkStyle("/dashboard")}>
            Overview
          </Link>

          <Link
            to="/dashboard/products"
            className={linkStyle("/dashboard/products")}
          >
            Products
          </Link>

          <div className="mt-8 border-t border-neutral-800 pt-6">
            <Link to="/products" className={linkStyle("/products")}>
              Go to Store
            </Link>
          </div>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-10 bg-neutral-100">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;