import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Product } from "../../types/product.types";
import { getProductById } from "../../services/products.service";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetchProduct = async () => {
      const data = await getProductById(id);
      setProduct(data);
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <p className="text-center mt-10 text-gray-500 text-lg">Cargando producto...</p>
    );
  }

  if (!product) {
    return (
      <p className="text-center mt-10 text-red-500 text-lg">Producto no encontrado.</p>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col md:flex-row max-w-6xl mx-auto gap-8">
      {/* Imagen */}
      <div className="flex-1">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Detalles */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.title}</h1>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <span className="text-3xl font-extrabold text-indigo-600">${product.price}</span>
          <div className="mt-4">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                product.stock > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}
            >
              {product.stock > 0 ? "En stock" : "Agotado"}
            </span>
          </div>
        </div>

        <button
          disabled={product.stock === 0}
          className={`mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 ${
            product.stock === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {product.stock > 0 ? "Agregar al carrito" : "Producto agotado"}
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;