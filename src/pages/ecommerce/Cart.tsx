import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { state, removeFromCart, clearCart } = useCart();

  const total = state.items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  if (state.items.length === 0) {
    return (
      <div className="p-8 text-center text-gray-600">
        Tu carrito está vacío
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Carrito</h1>

      <div className="space-y-4">
        {state.items.map((item) => (
          <div
            key={item.product.id}
            className="flex justify-between items-center border p-4 rounded"
          >
            <div>
              <h2 className="font-semibold">{item.product.title}</h2>
              <p className="text-sm text-gray-500">
                Cantidad: {item.quantity}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="font-semibold">
                ${(item.product.price * item.quantity).toFixed(2)}
              </span>

              <button
                onClick={() => removeFromCart(item.product.id)}
                className="text-red-600 hover:underline"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>

        <button
          onClick={clearCart}
          className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-700"
        >
          Vaciar carrito
        </button>
      </div>
    </div>
  );
};

export default Cart;