import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { state, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = state.items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí normalmente enviarías la info a un backend
    setOrderPlaced(true);
    clearCart();
  };

  if (state.items.length === 0 && !orderPlaced) {
    return (
      <div className="p-8 text-center text-gray-600">
        Tu carrito está vacío. <Link to="/products" className="text-indigo-600 hover:underline">Explora productos</Link>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center p-8 bg-gray-50">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">¡Compra realizada con éxito!</h1>
        <p className="text-gray-600 mb-6">Gracias por confiar en TechStore.</p>
        <Link to="/" className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow transition-all duration-300">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Carrito */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Resumen de tu compra</h2>
          <div className="space-y-4">
            {state.items.map((item) => (
              <div key={item.product.id} className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-800">{item.product.title}</p>
                  <p className="text-gray-500 text-sm">Cantidad: {item.quantity}</p>
                </div>
                <p className="font-bold text-indigo-600">${(item.product.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-between items-center font-bold text-gray-800 text-lg">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Formulario de envío */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-lg flex flex-col gap-4"
        >
          <h2 className="text-xl font-semibold mb-4">Datos de envío</h2>

          <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Dirección"
            value={formData.address}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="text"
            name="city"
            placeholder="Ciudad"
            value={formData.city}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Código postal"
            value={formData.postalCode}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <input
            type="text"
            name="country"
            placeholder="País"
            value={formData.country}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

          <button
            type="submit"
            className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-lg font-semibold transition-all duration-300"
          >
            Finalizar compra
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;