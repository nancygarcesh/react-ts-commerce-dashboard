import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { state, removeFromCart, clearCart } = useCart();

  const total = state.items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-100">
        <div className="text-center">
          <h1 className="text-xl font-semibold text-neutral-800 mb-2">
            Your cart is empty
          </h1>
          <p className="text-neutral-500">
            Add products to begin your purchase.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-100 py-12 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Items */}
        <div className="md:col-span-2 bg-white border border-neutral-200 rounded-xl">
          <h1 className="text-xl font-semibold px-6 py-5 border-b border-neutral-200">
            Shopping Cart
          </h1>

          <div className="divide-y divide-neutral-100">
            {state.items.map((item) => (
              <div
                key={item.product.id}
                className="flex items-center justify-between px-6 py-5"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.product.image}
                    alt={item.product.title}
                    className="w-16 h-16 object-cover rounded-lg border border-neutral-200"
                  />

                  <div>
                    <h2 className="font-medium text-neutral-900">
                      {item.product.title}
                    </h2>
                    <p className="text-sm text-neutral-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <span className="font-medium text-neutral-900">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>

                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-sm text-neutral-500 hover:text-neutral-900 transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="bg-white border border-neutral-200 rounded-xl p-6 h-fit">
          <h2 className="text-lg font-semibold mb-6">Summary</h2>

          <div className="flex justify-between mb-3 text-neutral-600">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-6 text-neutral-600">
            <span>Taxes</span>
            <span>$0.00</span>
          </div>

          <div className="flex justify-between font-semibold text-neutral-900 text-lg border-t border-neutral-200 pt-4">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button className="w-full mt-6 bg-neutral-900 text-white py-3 rounded-lg font-medium hover:bg-neutral-800 transition">
            Checkout
          </button>

          <button
            onClick={clearCart}
            className="w-full mt-3 border border-neutral-300 py-3 rounded-lg font-medium text-neutral-700 hover:bg-neutral-100 transition"
          >
            Clear cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;