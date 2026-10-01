
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaShoppingCart,
  FaTrash,
} from "react-icons/fa";

import { useCart } from "../../context/CartContext";
import CartItem from "../../components/Cart/CartItem";

const Cart = () => {
  const navigate = useNavigate();

  const {
    cartItems,
    cartCount,
    cartSubtotal,
    clearCart,
  } = useCart();

  return (
    <div className="min-h-screen bg-gray-50 py-10">

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* ================= BACK ================= */}

        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#072144] mb-6"
        >
          <FaArrowLeft />
          Continue Shopping
        </Link>

        {/* ================= HEADER ================= */}

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

          <div>

            <h1 className="text-3xl sm:text-4xl font-bold text-[#072144]">
              Your Cart
            </h1>

            <p className="text-gray-500 mt-2">
              Review the services you want to book together.
            </p>

          </div>

          {cartItems.length > 0 && (
            <span className="text-sm text-gray-500">
              {cartCount} service
              {cartCount !== 1 ? "s" : ""}
            </span>
          )}

        </div>

        {/* ================= EMPTY ================= */}

        {cartItems.length === 0 ? (

          <div className="bg-white rounded-2xl shadow-sm p-10 text-center">

            <div className="w-20 h-20 mx-auto rounded-full bg-gray-100 flex items-center justify-center">
              <FaShoppingCart className="text-gray-400 text-3xl" />
            </div>

            <h2 className="text-2xl font-bold text-[#072144] mt-5">
              Your cart is empty
            </h2>

            <p className="text-gray-500 mt-2">
              Add some services before proceeding to booking.
            </p>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 mt-6 bg-[#072144] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FCBC14] hover:text-[#072144] transition"
            >
              Browse Services
              <FaArrowRight />
            </Link>

          </div>

        ) : (

          <div className="grid lg:grid-cols-[1fr_360px] gap-6">

            {/* ================= ITEMS ================= */}

            <div className="bg-white rounded-2xl shadow-sm px-5 sm:px-7">

              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                />
              ))}

            </div>

            {/* ================= SUMMARY ================= */}

            <div className="bg-white rounded-2xl shadow-sm p-6 h-fit lg:sticky lg:top-24">

              <h2 className="text-xl font-bold text-[#072144]">
                Booking Summary
              </h2>

              <div className="mt-6 space-y-4">

                <div className="flex justify-between text-gray-600">
                  <span>Services</span>
                  <span>{cartCount}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Estimated Total</span>

                  <span>
                    Rs. {cartSubtotal.toLocaleString()}
                  </span>
                </div>

                <div className="border-t border-gray-200 pt-4">

                  <div className="flex justify-between">

                    <span className="font-semibold text-[#072144]">
                      Estimated Amount
                    </span>

                    <span className="font-bold text-xl text-[#072144]">
                      Rs. {cartSubtotal.toLocaleString()}
                    </span>

                  </div>

                </div>

              </div>

              <p className="text-xs text-gray-500 mt-5 leading-5">
                The final service price can change after professional
                inspection or measurement.
              </p>

              <button
                type="button"
                onClick={() => navigate("/booking")}
                className="w-full mt-6 flex items-center justify-center gap-3 bg-[#072144] text-white py-3.5 rounded-lg font-semibold hover:bg-[#FCBC14] hover:text-[#072144] transition"
              >
                Proceed to Booking
                <FaArrowRight />
              </button>

              <button
                type="button"
                onClick={clearCart}
                className="w-full mt-3 flex items-center justify-center gap-2 text-sm text-red-500 hover:text-red-700"
              >
                <FaTrash />
                Clear Cart
              </button>

            </div>

          </div>

        )}

      </div>

    </div>
  );
};

export default Cart;
