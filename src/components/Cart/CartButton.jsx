
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../../context/CartContext";

const CartButton = ({ onClick }) => {
  const { cartCount } = useCart();

  return (
    <button
      type="button"
      onClick={onClick}
      className="relative flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-100 transition"
      aria-label="Shopping cart"
    >
      <FaShoppingCart className="text-[#072144] text-xl" />

      {cartCount > 0 && (
        <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 rounded-full bg-[#FCBC14] text-[#072144] text-xs font-bold flex items-center justify-center">
          {cartCount > 99 ? "99+" : cartCount}
        </span>
      )}
    </button>
  );
};

export default CartButton;

