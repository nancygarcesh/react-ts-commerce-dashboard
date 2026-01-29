import {
  createContext,
  useContext,
  useReducer,
  type ReactNode,
} from "react";
import type { Product } from "../types/product.types";
import type { CartState } from "../types/cart.types";

type CartAction =
  | { type: "ADD"; payload: Product }
  | { type: "REMOVE"; payload: number }
  | { type: "CLEAR" };

const initialState: CartState = {
  items: [],
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD": {
      const existing = state.items.find(
        (i) => i.product.id === action.payload.id
      );

      if (existing) {
        return {
          items: state.items.map((i) =>
            i.product.id === action.payload.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }

      return {
        items: [...state.items, { product: action.payload, quantity: 1 }],
      };
    }

    case "REMOVE":
      return {
        items: state.items.filter((i) => i.product.id !== action.payload),
      };

    case "CLEAR":
      return initialState;

    default:
      return state;
  }
}

const CartContext = createContext<{
  state: CartState;
  addToCart: (p: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
} | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider
      value={{
        state,
        addToCart: (p) => dispatch({ type: "ADD", payload: p }),
        removeFromCart: (id) => dispatch({ type: "REMOVE", payload: id }),
        clearCart: () => dispatch({ type: "CLEAR" }),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};