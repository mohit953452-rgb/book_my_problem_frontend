
import React from "react";
import {
  FaArrowRight,
  FaShoppingCart,
  FaTimes,
  FaTrash,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import CartItem from "./CartItem";

const CartDrawer = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const {
    cartItems,
    cartCount,
    cartSubtotal,
    clearCart,
  } = useCart();

  const handleBooking = () => {
    onClose();

    navigate("/booking");
  };

  return (
    <>
      {/* ================= OVERLAY ================= */}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[999]"
          onClick={onClose}
        />
      )}

      {/* ================= DRAWER ================= */}

      <div
        className={`fixed top-0 right-0 h-full w-full sm:max-w-md bg-white z-[1000] shadow-2xl transform transition-transform duration-300 flex flex-col ${
          isOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        {/* ================= HEADER ================= */}

        <div className="flex items-center justify-between px-5 py-5 border-b border-gray-200">

          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-full bg-[#FCBC14]/20 flex items-center justify-center">
              <FaShoppingCart className="text-[#072144]" />
            </div>

            <div>
              <h2 className="text-lg font-bold text-[#072144]">
                Your Cart
              </h2>

              <p className="text-xs text-gray-500">
                {cartCount} service
                {cartCount !== 1 ? "s" : ""}
              </p>
            </div>

          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center"
          >
            <FaTimes />
          </button>

        </div>

        {/* ================= ITEMS ================= */}

        <div className="flex-1 overflow-y-auto px-5">

          {cartItems.length === 0 ? (

            <div className="h-full flex flex-col items-center justify-center text-center">

              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-5">
                <FaShoppingCart className="text-gray-400 text-3xl" />
              </div>

              <h3 className="text-lg font-semibold text-[#072144]">
                Your cart is empty
              </h3>

              <p className="text-sm text-gray-500 mt-2 max-w-xs">
                Add services to your cart and book multiple services together.
              </p>

              <button
                type="button"
                onClick={onClose}
                className="mt-5 bg-[#072144] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-[#FCBC14] hover:text-[#072144] transition"
              >
                Browse Services
              </button>

            </div>

          ) : (

            <div>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                />
              ))}
            </div>

          )}

        </div>

        {/* ================= FOOTER ================= */}

        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 p-5 bg-white">

            {/* SUBTOTAL */}

            <div className="flex items-center justify-between mb-4">

              <span className="text-gray-600">
                Estimated Total
              </span>

              <span className="text-xl font-bold text-[#072144]">
                Rs. {cartSubtotal.toLocaleString()}
              </span>

            </div>

            <p className="text-xs text-gray-500 mb-4">
              Final price may vary after service inspection.
            </p>

            {/* BOOKING */}

            <button
              type="button"
              onClick={handleBooking}
              className="w-full flex items-center justify-center gap-3 bg-[#072144] text-white py-3.5 rounded-lg font-semibold hover:bg-[#FCBC14] hover:text-[#072144] transition"
            >
              Proceed to Booking
              <FaArrowRight />
            </button>

            {/* CLEAR */}

            <button
              type="button"
              onClick={clearCart}
              className="w-full mt-3 flex items-center justify-center gap-2 text-sm text-red-500 hover:text-red-700"
            >
              <FaTrash />
              Clear Cart
            </button>

          </div>
        )}

      </div>
    </>
  );
};

export default CartDrawer;

