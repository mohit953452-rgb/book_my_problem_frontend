
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaMoneyBillWave,
  FaCreditCard,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaShoppingCart,
} from "react-icons/fa";

import { useCart } from "../../context/CartContext";
import { useOrder } from "../../context/OrderContext";

const BookingCheckout = () => {
  const navigate = useNavigate();

  // IMPORTANT:
  // CartContext mein cartItems hai, cart nahi.
  const {
    cartItems,
    cartSubtotal,
    clearCart,
  } = useCart();

  const { createOrder } = useOrder();

  const [paymentMethod, setPaymentMethod] = useState(
    "Cash on Service"
  );

  const [isSubmitting, setIsSubmitting] = useState(false);

  // =====================================================
  // SAVED LOCATION
  // =====================================================

  const savedLocation = useMemo(() => {
    try {
      const possibleKeys = [
        "bookmyproblem_location",
        "bookmyproblem_user_location",
        "bookmyproblem_selected_location",
        "bookmyproblem_address",
      ];

      for (const key of possibleKeys) {
        const value = localStorage.getItem(key);

        if (!value) continue;

        try {
          const parsed = JSON.parse(value);

          if (typeof parsed === "string") {
            return parsed;
          }

          if (parsed?.address) {
            return parsed.address;
          }

          if (parsed?.location) {
            return parsed.location;
          }

          if (parsed?.area && parsed?.city) {
            return `${parsed.area}, ${parsed.city}`;
          }

          if (parsed?.city) {
            return parsed.city;
          }

          return JSON.stringify(parsed);
        } catch {
          return value;
        }
      }

      return "Location already selected";
    } catch (error) {
      console.error("Location load error:", error);

      return "Location already selected";
    }
  }, []);

  // =====================================================
  // TOTAL
  // =====================================================

  const totalAmount = Number(cartSubtotal || 0);

  // =====================================================
  // CONFIRM ORDER
  // =====================================================

  const handleConfirmOrder = () => {
    if (!cartItems || cartItems.length === 0) {
      alert("Your cart is empty.");
      navigate("/cart");
      return;
    }

    try {
      setIsSubmitting(true);

      const newOrder = createOrder({
        cartItems: cartItems,
        paymentMethod: paymentMethod,
        location: savedLocation,
      });

      if (!newOrder || !newOrder.orderId) {
        throw new Error("Order was not created.");
      }

      // Cart clear
      clearCart();

      // Order details page
      navigate(`/orders/${newOrder.orderId}`);
    } catch (error) {
      console.error("Order creation error:", error);

      alert(
        "Something went wrong while creating your order."
      );

      setIsSubmitting(false);
    }
  };

  // =====================================================
  // EMPTY CART
  // =====================================================

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4">

        <div className="bg-white rounded-2xl shadow-md p-8 text-center max-w-md w-full">

          <FaShoppingCart className="text-5xl text-gray-300 mx-auto mb-4" />

          <h2 className="text-2xl font-bold text-[#072144]">
            Your Cart is Empty
          </h2>

          <p className="text-gray-500 mt-2 mb-6">
            Add a service to your cart before proceeding.
          </p>

          <button
            type="button"
            onClick={() => navigate("/services")}
            className="bg-[#072144] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#0b315f] transition"
          >
            Browse Services
          </button>

        </div>

      </div>
    );
  }

  // =====================================================
  // MAIN
  // =====================================================

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-10 px-4">

      <div className="max-w-6xl mx-auto">

        {/* =================================================
            BACK
        ================================================= */}

        <button
          type="button"
          onClick={() => navigate("/cart")}
          className="flex items-center gap-2 text-[#072144] font-semibold mb-7 hover:text-[#FCBC14] transition"
        >
          <FaArrowLeft />
          Back to Cart
        </button>

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mb-8">

          <p className="text-sm font-semibold text-[#FCBC14] uppercase tracking-wide">
            Final Step
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-[#072144] mt-1">
            Payment & Confirmation
          </h1>

          <p className="text-gray-500 mt-2">
            Your location, date and time are already saved.
            Select your payment method and confirm your service request.
          </p>

        </div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-8">

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="space-y-6">

            {/* =================================================
                LOCATION
            ================================================= */}

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">

              <div className="flex items-center gap-3 mb-4">

                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-[#072144]" />
                </div>

                <div>

                  <h2 className="text-lg font-bold text-[#072144]">
                    Service Location
                  </h2>

                  <p className="text-sm text-gray-500">
                    Previously selected location
                  </p>

                </div>

              </div>

              <div className="bg-gray-50 rounded-xl p-4 text-gray-700">
                {savedLocation}
              </div>

            </div>

            {/* =================================================
                SELECTED SERVICES
            ================================================= */}

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">

              <h2 className="text-lg font-bold text-[#072144] mb-5">
                Selected Services
              </h2>

              <div className="space-y-4">

                {cartItems.map((item) => (

                  <div
                    key={item.id}
                    className="border border-gray-100 rounded-xl p-4"
                  >

                    <div className="flex gap-4">

                      <img
                        src={
                          item.image ||
                          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=300&q=80"
                        }
                        alt={item.title || item.name || "Service"}
                        className="w-20 h-20 rounded-xl object-cover"
                      />

                      <div className="flex-1 min-w-0">

                        <div className="flex justify-between gap-3">

                          <div>

                            <h3 className="font-bold text-[#072144]">
                              {item.title || item.name || "Service"}
                            </h3>

                            {item.category && (
                              <p className="text-sm text-gray-500">
                                {item.category}
                              </p>
                            )}

                          </div>

                          <p className="font-bold text-[#072144] whitespace-nowrap">

                            Rs.{" "}

                            {(
                              Number(item.price || 0) *
                              Number(item.quantity || 1)
                            ).toLocaleString()}

                          </p>

                        </div>

                        {/* DATE / TIME */}
                        <div className="flex flex-wrap gap-3 mt-3 text-sm">

                          {item.bookingDate && (
                            <span className="flex items-center gap-2 text-gray-600">

                              <FaCalendarAlt className="text-[#FCBC14]" />

                              {item.bookingDate}

                            </span>
                          )}

                          {item.bookingTime && (
                            <span className="flex items-center gap-2 text-gray-600">

                              <FaClock className="text-[#FCBC14]" />

                              {item.bookingTime}

                            </span>
                          )}

                          <span className="text-gray-600">
                            Qty: {item.quantity || 1}
                          </span>

                        </div>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

            {/* =================================================
                PAYMENT METHOD
            ================================================= */}

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">

              <h2 className="text-xl font-bold text-[#072144]">
                Payment Method
              </h2>

              <p className="text-sm text-gray-500 mt-1 mb-5">
                Select how you want to pay for your service.
              </p>

              <div className="grid md:grid-cols-2 gap-4">

                {/* =================================================
                    CASH
                ================================================= */}

                <button
                  type="button"
                  onClick={() =>
                    setPaymentMethod("Cash on Service")
                  }
                  className={`text-left border-2 rounded-2xl p-5 transition ${
                    paymentMethod === "Cash on Service"
                      ? "border-[#FCBC14] bg-yellow-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >

                  <div className="flex items-start gap-4">

                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        paymentMethod === "Cash on Service"
                          ? "bg-[#FCBC14]"
                          : "bg-gray-100"
                      }`}
                    >
                      <FaMoneyBillWave className="text-xl text-[#072144]" />
                    </div>

                    <div className="flex-1">

                      <div className="flex items-center justify-between gap-2">

                        <h3 className="font-bold text-[#072144]">
                          Cash on Service
                        </h3>

                        {paymentMethod === "Cash on Service" && (
                          <FaCheckCircle className="text-green-500" />
                        )}

                      </div>

                      <p className="text-sm text-gray-500 mt-1">
                        Pay after the professional completes the service.
                      </p>

                    </div>

                  </div>

                </button>

                {/* =================================================
                    ONLINE
                ================================================= */}

                <button
                  type="button"
                  onClick={() =>
                    setPaymentMethod("Online Payment")
                  }
                  className={`text-left border-2 rounded-2xl p-5 transition ${
                    paymentMethod === "Online Payment"
                      ? "border-[#FCBC14] bg-yellow-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >

                  <div className="flex items-start gap-4">

                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        paymentMethod === "Online Payment"
                          ? "bg-[#FCBC14]"
                          : "bg-gray-100"
                      }`}
                    >
                      <FaCreditCard className="text-xl text-[#072144]" />
                    </div>

                    <div className="flex-1">

                      <div className="flex items-center justify-between gap-2">

                        <h3 className="font-bold text-[#072144]">
                          Online Payment
                        </h3>

                        {paymentMethod === "Online Payment" && (
                          <FaCheckCircle className="text-green-500" />
                        )}

                      </div>

                      <p className="text-sm text-gray-500 mt-1">
                        Pay online using the available payment gateway.
                      </p>

                    </div>

                  </div>

                </button>

              </div>

            </div>

          </div>

          {/* =================================================
              RIGHT - ORDER SUMMARY
          ================================================= */}

          <div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:sticky lg:top-6">

              <h2 className="text-xl font-bold text-[#072144] mb-6">
                Order Summary
              </h2>

              {/* SERVICES */}
              <div className="space-y-4 mb-6">

                {cartItems.map((item) => (

                  <div
                    key={item.id}
                    className="flex justify-between gap-3 text-sm"
                  >

                    <div>

                      <p className="font-medium text-gray-700">
                        {item.title || item.name || "Service"}
                      </p>

                      <p className="text-gray-400">
                        × {item.quantity || 1}
                      </p>

                    </div>

                    <p className="font-semibold text-gray-700 whitespace-nowrap">

                      Rs.{" "}

                      {(
                        Number(item.price || 0) *
                        Number(item.quantity || 1)
                      ).toLocaleString()}

                    </p>

                  </div>

                ))}

              </div>

              {/* TOTAL */}
              <div className="border-t pt-5">

                <div className="flex justify-between text-gray-500 mb-2">

                  <span>
                    Services
                  </span>

                  <span>
                    {cartItems.length}
                  </span>

                </div>

                <div className="flex justify-between text-gray-500 mb-4">

                  <span>
                    Service Charge
                  </span>

                  <span>
                    Rs. 0
                  </span>

                </div>

                <div className="border-t pt-4 flex justify-between">

                  <span className="font-bold text-[#072144]">
                    Total
                  </span>

                  <span className="font-bold text-xl text-[#072144]">
                    Rs. {totalAmount.toLocaleString()}
                  </span>

                </div>

              </div>

              {/* SELECTED PAYMENT */}
              <div className="mt-5 bg-gray-50 rounded-xl p-4">

                <p className="text-xs text-gray-500">
                  Selected Payment
                </p>

                <p className="font-semibold text-[#072144] mt-1">
                  {paymentMethod}
                </p>

              </div>

              {/* =================================================
                  CONFIRM
              ================================================= */}

              <button
                type="button"
                onClick={handleConfirmOrder}
                disabled={isSubmitting}
                className="w-full mt-6 bg-[#FCBC14] text-[#072144] py-4 rounded-xl font-bold hover:bg-yellow-400 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >

                {isSubmitting
                  ? "Creating Order..."
                  : "Confirm Service Request"}

              </button>

              <p className="text-xs text-center text-gray-400 mt-3">
                By confirming, your service request will be created.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default BookingCheckout;

