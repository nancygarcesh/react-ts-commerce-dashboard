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
    <div className="min-h-screen bg-neutral-100 p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-10">
          Dashboard Overview
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card */}
          <StatCard label="Total Products" value={totalProducts} />

          <StatCard label="In Stock" value={inStock} />

          <StatCard label="Out of Stock" value={outOfStock} />

          <StatCard
            label="Average Price"
            value={`$${averagePrice.toFixed(2)}`}
          />
        </div>
      </div>
    </div>
  );
};

const StatCard = ({
  label,
  value,
}: {
  label: string;
  value: number | string;
}) => {
  return (
    <div className="bg-white border border-neutral-200 rounded-xl p-7 hover:shadow-md transition-shadow duration-200">
      <p className="text-sm text-neutral-500 font-medium">{label}</p>
      <p className="text-3xl font-semibold text-neutral-900 mt-3">
        {value}
      </p>
    </div>
  );
};

export default DashboardHome;