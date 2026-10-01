
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext();

const CART_STORAGE_KEY = "bookmyproblem_cart";

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);

      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error loading cart:", error);
      return [];
    }
  });

  // ================= SAVE CART =================

  useEffect(() => {
    localStorage.setItem(
      CART_STORAGE_KEY,
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  // ================= ADD TO CART =================

  const addToCart = (service) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === service.id
      );

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === service.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...prevItems,
        {
          ...service,
          quantity: 1,
        },
      ];
    });
  };

  // ================= REMOVE FROM CART =================

  const removeFromCart = (serviceId) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => item.id !== serviceId
      )
    );
  };

  // ================= INCREASE QUANTITY =================

  const increaseQuantity = (serviceId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === serviceId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // ================= DECREASE QUANTITY =================

  const decreaseQuantity = (serviceId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === serviceId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // ================= CLEAR CART =================

  const clearCart = () => {
    setCartItems([]);
  };

  // ================= CART COUNT =================

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // ================= SUBTOTAL =================

  const cartSubtotal = cartItems.reduce(
    (total, item) =>
      total +
      Number(item.price || 0) * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// ================= CUSTOM HOOK =================

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
};

export default CartContext;

