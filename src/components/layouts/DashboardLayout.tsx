import { Outlet, Link } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside
        style={{
          width: "220px",
          padding: "1rem",
          background: "#f4f4f4",
        }}
      >
        <h3>Admin</h3>
        <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <Link to="/dashboard">Overview</Link>
          <Link to="/dashboard/products">Products</Link>
          <Link to="/">Go to Store</Link>
        </nav>
      </aside>

      <main style={{ padding: "1rem", flex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;