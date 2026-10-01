
import React from "react";
import {
  FaTrash,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

import { useCart } from "../../context/CartContext";

const CartItem = ({ item }) => {
  const {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const quantity = Number(item.quantity || 1);
  const price = Number(item.price || 0);

  const itemTotal = price * quantity;

  return (
    <div className="py-6 border-b border-gray-200 last:border-b-0">
      <div className="flex flex-col sm:flex-row gap-5">

        {/* IMAGE */}
        <div className="w-full sm:w-28 h-28 flex-shrink-0">
          <img
            src={
              item.image ||
              "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=500&q=80"
            }
            alt={item.title || item.name || "Service"}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* CONTENT */}
        <div className="flex-1">

          <div className="flex flex-col sm:flex-row sm:justify-between gap-3">

            <div>
              <h3 className="text-lg font-bold text-[#072144]">
                {item.title || item.name || "Service"}
              </h3>

              {item.category && (
                <p className="text-sm text-gray-500 mt-1">
                  {item.category}
                </p>
              )}

              {item.description && (
                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                  {item.description}
                </p>
              )}
            </div>

            {/* PRICE */}
            <div className="sm:text-right">
              <p className="text-lg font-bold text-[#072144]">
                Rs. {price.toLocaleString()}
              </p>

              {quantity > 1 && (
                <p className="text-xs text-gray-500 mt-1">
                  Rs. {price.toLocaleString()} × {quantity}
                </p>
              )}
            </div>

          </div>

          {/* DATE + TIME */}
          {(item.bookingDate || item.bookingTime) && (
            <div className="mt-4 flex flex-wrap gap-3">

              {item.bookingDate && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                  <p className="text-xs text-gray-500">
                    Booking Date
                  </p>
                  <p className="text-sm font-semibold text-[#072144]">
                    {item.bookingDate}
                  </p>
                </div>
              )}

              {item.bookingTime && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                  <p className="text-xs text-gray-500">
                    Booking Time
                  </p>
                  <p className="text-sm font-semibold text-[#072144]">
                    {item.bookingTime}
                  </p>
                </div>
              )}

            </div>
          )}

          {/* BOTTOM */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">

            {/* QUANTITY */}
            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">

              <button
                type="button"
                onClick={() => decreaseQuantity(item.id)}
                className="w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition"
              >
                <FaMinus className="text-xs" />
              </button>

              <span className="w-10 text-center font-semibold text-[#072144]">
                {quantity}
              </span>

              <button
                type="button"
                onClick={() => increaseQuantity(item.id)}
                className="w-9 h-9 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition"
              >
                <FaPlus className="text-xs" />
              </button>

            </div>

            {/* TOTAL + REMOVE */}
            <div className="flex items-center gap-5">

              <div className="text-right">
                <p className="text-xs text-gray-500">
                  Total
                </p>

                <p className="font-bold text-[#072144]">
                  Rs. {itemTotal.toLocaleString()}
                </p>
              </div>

              <button
                type="button"
                onClick={() => removeFromCart(item.id)}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-red-500 hover:bg-red-50 transition"
                title="Remove"
                aria-label="Remove service"
              >
                <FaTrash />
              </button>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default CartItem;

