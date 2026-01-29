import { useEffect, useState } from "react";
import { productsMock } from "../../services/products.service";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

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

  // Datos para gráfico de stock
  const stockData = [
    { name: "In Stock", value: inStock },
    { name: "Out of Stock", value: outOfStock },
  ];

  // Datos para gráfico de precios
  const priceData = productsMock.map(p => ({ name: p.title, price: p.price }));

  const COLORS = ["#4f46e5", "#ef4444"]; // Azul y rojo profesional

  return (
    <div className="min-h-screen bg-neutral-100 p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-10">
          Dashboard Overview
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <StatCard label="Total Products" value={totalProducts} />
          <StatCard label="In Stock" value={inStock} />
          <StatCard label="Out of Stock" value={outOfStock} />
          <StatCard label="Average Price" value={`$${averagePrice.toFixed(2)}`} />
        </div>

        {/* Gráficos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Stock Pie Chart */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-shadow">
            <h2 className="text-lg font-semibold mb-4 text-neutral-900">Stock Distribution</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie data={stockData} dataKey="value" nameKey="name" outerRadius={80} label>
                  {stockData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Price Bar Chart */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition-shadow">
            <h2 className="text-lg font-semibold mb-4 text-neutral-900">Product Prices</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={priceData}>
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="price" fill="#4f46e5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ label, value }: { label: string; value: number | string }) => {
  return (
    <div className="bg-white border border-neutral-200 rounded-xl p-7 hover:shadow-md transition-shadow duration-200">
      <p className="text-sm text-neutral-500 font-medium">{label}</p>
      <p className="text-3xl font-semibold text-neutral-900 mt-3">{value}</p>
    </div>
  );
};

export default DashboardHome;