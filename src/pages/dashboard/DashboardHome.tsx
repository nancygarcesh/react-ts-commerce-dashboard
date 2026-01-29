import { useEffect, useState } from "react";
import { productsMock } from "../../services/products.service";

const DashboardHome = () => {
  const [totalProducts, setTotalProducts] = useState(0);
  const [inStock, setInStock] = useState(0);
  const [outOfStock, setOutOfStock] = useState(0);
  const [averagePrice, setAveragePrice] = useState(0);

  useEffect(() => {
    const total = productsMock.length;
    const stock = productsMock.filter((p) => p.stock > 0).length;
    const out = productsMock.filter((p) => p.stock === 0).length;
    const avgPrice =
      productsMock.reduce((acc, p) => acc + p.price, 0) / total || 0;

    setTotalProducts(total);
    setInStock(stock);
    setOutOfStock(out);
    setAveragePrice(avgPrice);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard Overview</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Total Products */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-gray-500 font-semibold">Total Products</h2>
          <p className="text-2xl font-bold text-indigo-600 mt-2">{totalProducts}</p>
        </div>

        {/* In Stock */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-gray-500 font-semibold">In Stock</h2>
          <p className="text-2xl font-bold text-green-600 mt-2">{inStock}</p>
        </div>

        {/* Out of Stock */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-gray-500 font-semibold">Out of Stock</h2>
          <p className="text-2xl font-bold text-red-600 mt-2">{outOfStock}</p>
        </div>

        {/* Average Price */}
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h2 className="text-gray-500 font-semibold">Average Price</h2>
          <p className="text-2xl font-bold text-indigo-600 mt-2">
            ${averagePrice.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;