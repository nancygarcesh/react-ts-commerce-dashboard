import { useEffect, useState } from "react";
import { productsMock } from "../../services/products.service";
import type { Product } from "../../types/product.types";

const DashboardProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(productsMock);
  }, []);

  const handleDelete = (id: number) => {
    if (confirm("¿Estás seguro que quieres eliminar este producto?")) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="bg-neutral-100 min-h-screen p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold text-neutral-900 mb-6">
          Manage Products
        </h1>

        <div className="overflow-x-auto bg-white rounded-xl shadow">
          <table className="min-w-full">
            <thead className="bg-neutral-900 text-white">
              <tr>
                <th className="px-6 py-3 text-left">Image</th>
                <th className="px-6 py-3 text-left">Title</th>
                <th className="px-6 py-3 text-left">Category</th>
                <th className="px-6 py-3 text-left">Price</th>
                <th className="px-6 py-3 text-left">Stock</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b hover:bg-neutral-100 transition-colors">
                  <td className="px-6 py-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-16 h-16 object-cover rounded border border-neutral-200"
                    />
                  </td>
                  <td className="px-6 py-4 font-medium text-neutral-900">{product.title}</td>
                  <td className="px-6 py-4 text-neutral-600">{product.category}</td>
                  <td className="px-6 py-4 font-semibold text-indigo-600">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-sm font-medium ${
                        product.stock > 0
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {product.stock > 0 ? product.stock : "Agotado"}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex gap-2">
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded transition-colors">
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition-colors"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardProducts;