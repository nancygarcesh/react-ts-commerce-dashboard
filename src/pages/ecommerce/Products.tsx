import { useEffect, useState } from "react";
import type { Product } from "../../types/product.types";
import { getProducts } from "../../services/products.service";
import { useCart } from "../../context/CartContext";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <p className="text-center mt-10 text-neutral-500 text-lg">
        Cargando productos...
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-neutral-900">Productos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          >
            <div className="flex-1">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h2 className="text-xl font-semibold text-neutral-900 mb-2">
                {product.title}
              </h2>
              <p className="text-neutral-600 text-sm mb-4">{product.description}</p>
            </div>

            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-bold text-neutral-900">
                ${product.price.toFixed(2)}
              </span>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  product.stock > 0
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {product.stock > 0 ? "En stock" : "Agotado"}
              </span>
            </div>

            <button
              onClick={() => addToCart(product)}
              disabled={product.stock === 0}
              className={`mt-auto w-full bg-neutral-900 text-white font-semibold py-3 rounded-xl shadow-lg transition-all duration-300 hover:bg-neutral-800 ${
                product.stock === 0 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {product.stock > 0 ? "Agregar al carrito" : "Producto agotado"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;