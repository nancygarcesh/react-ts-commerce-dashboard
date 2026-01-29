import { useEffect, useState } from "react";
import type { Product } from "../../types/product.types";
import { getProducts } from "../../services/products.service";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p className="text-center mt-10 text-gray-500">Cargando productos...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Productos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">{product.title}</h2>
            <p className="text-gray-600 text-sm mt-1">{product.description}</p>
            <div className="flex justify-between items-center mt-3">
              <span className="font-bold text-indigo-600">${product.price}</span>
              <span
                className={`text-sm font-medium px-2 py-1 rounded ${
                  product.stock > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                }`}
              >
                {product.stock > 0 ? "En stock" : "Agotado"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;