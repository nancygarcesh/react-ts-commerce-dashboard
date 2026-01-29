import { HashRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "../components/layouts/PublicLayout";
import DashboardLayout from "../components/layouts/DashboardLayout";

import Home from "../pages/ecommerce/Home";
import Products from "../pages/ecommerce/Products";
import ProductDetail from "../pages/ecommerce/ProductDetail";

import DashboardHome from "../pages/dashboard/DashboardHome";
import DashboardProducts from "../pages/dashboard/DashboardProducts";
import Cart from "../pages/ecommerce/Cart";

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Para: ECOMMERCE */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Route>

        {/* Para: DASHBOARD */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="products" element={<DashboardProducts />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default AppRouter;