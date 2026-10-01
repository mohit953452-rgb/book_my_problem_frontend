import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaClock,
  FaUser,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCreditCard,
  FaTimesCircle,
} from "react-icons/fa";

import { useOrder } from "../../context/OrderContext";

const OrderDetails = () => {
  const navigate = useNavigate();
  const { orderId } = useParams();

  const {
    getOrderById,
    cancelOrder,
  } = useOrder();

  const order = getOrderById(orderId);

  if (!order) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4">

        <div className="bg-white rounded-2xl shadow-sm p-10 text-center max-w-md w-full">

          <FaTimesCircle className="text-5xl text-red-400 mx-auto mb-4" />

          <h2 className="text-2xl font-bold text-[#072144]">
            Order Not Found
          </h2>

          <p className="text-gray-500 mt-2 mb-6">
            This service request could not be found.
          </p>

          <button
            onClick={() => navigate("/orders")}
            className="bg-[#072144] text-white px-6 py-3 rounded-xl font-semibold"
          >
            Back to Orders
          </button>

        </div>

      </div>
    );
  }

  const handleCancel = () => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this order?"
    );

    if (!confirmed) return;

    cancelOrder(order.orderId);
  };

  const formatDate = (date) => {
    if (!date) return "-";

    try {
      return new Date(date).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    } catch {
      return date;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-10 px-4">

      <div className="max-w-5xl mx-auto">

        {/* Back */}
        <button
          onClick={() => navigate("/orders")}
          className="flex items-center gap-2 text-[#072144] font-semibold mb-7 hover:text-[#FCBC14] transition"
        >
          <FaArrowLeft />
          Back to Orders
        </button>

        {/* Header */}
        <div className="bg-[#072144] rounded-2xl p-6 md:p-8 text-white mb-6">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            <div>
              <p className="text-[#FCBC14] text-sm font-semibold">
                SERVICE REQUEST
              </p>

              <h1 className="text-3xl font-bold mt-1">
                {order.orderId}
              </h1>

              <p className="text-gray-300 mt-2">
                Created on {formatDate(order.createdAt)}
              </p>
            </div>

            <div className="bg-white/10 rounded-xl px-5 py-3">

              <p className="text-sm text-gray-300">
                Status
              </p>

              <p className="font-bold text-[#FCBC14]">
                {order.status}
              </p>

            </div>

          </div>

        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Main */}
          <div className="lg:col-span-2 space-y-6">

            {/* Timeline */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">

              <h2 className="text-xl font-bold text-[#072144] mb-7">
                Track Your Order
              </h2>

              <div className="space-y-6">

                {order.timeline.map((step, index) => (
                  <div
                    key={step.status}
                    className="flex gap-4"
                  >

                    <div className="flex flex-col items-center">

                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          step.completed
                            ? "bg-green-100 text-green-600"
                            : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        {step.completed ? (
                          <FaCheckCircle />
                        ) : (
                          <FaClock />
                        )}
                      </div>

                      {index !== order.timeline.length - 1 && (
                        <div
                          className={`w-0.5 h-10 mt-1 ${
                            step.completed
                              ? "bg-green-200"
                              : "bg-gray-200"
                          }`}
                        />
                      )}

                    </div>

                    <div className="pt-2">

                      <p
                        className={`font-semibold ${
                          step.completed
                            ? "text-[#072144]"
                            : "text-gray-400"
                        }`}
                      >
                        {step.status}
                      </p>

                      <p className="text-sm text-gray-400 mt-1">
                        {step.completed
                          ? "Completed"
                          : "Waiting for update"}
                      </p>

                    </div>

                  </div>
                ))}

              </div>

            </div>

            {/* Services */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">

              <h2 className="text-xl font-bold text-[#072144] mb-5">
                Services
              </h2>

              <div className="space-y-4">

                {order.services.map((service, index) => (
                  <div
                    key={index}
                    className="flex justify-between gap-4 border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                  >

                    <div>
                      <p className="font-semibold text-gray-700">
                        {service.title || service.name}
                      </p>

                      <p className="text-sm text-gray-400">
                        Quantity: {service.quantity}
                      </p>

                      {service.bookingDate && (
                        <p className="text-sm text-gray-500 mt-2">
                          <FaCalendarAlt className="inline mr-2 text-[#FCBC14]" />
                          {service.bookingDate}
                        </p>
                      )}

                      {service.bookingTime && (
                        <p className="text-sm text-gray-500 mt-1">
                          <FaClock className="inline mr-2 text-[#FCBC14]" />
                          {service.bookingTime}
                        </p>
                      )}
                    </div>

                    <p className="font-bold text-[#072144]">
                      Rs.{" "}
                      {(
                        Number(service.price || 0) *
                        Number(service.quantity || 1)
                      ).toLocaleString()}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* Customer */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">

              <h2 className="font-bold text-[#072144] mb-5">
                Customer
              </h2>

              <div className="flex gap-3">

                <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center">
                  <FaUser className="text-[#072144]" />
                </div>

                <div>
                  <p className="font-semibold text-gray-700">
                    {order.customer?.name || "Customer"}
                  </p>

                  <p className="text-sm text-gray-500">
                    {order.customer?.email || ""}
                  </p>

                  <p className="text-sm text-gray-500">
                    {order.customer?.phone || ""}
                  </p>
                </div>

              </div>

            </div>

            {/* Location */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">

              <h2 className="font-bold text-[#072144] mb-4">
                Service Location
              </h2>

              <div className="flex gap-3 text-gray-600">

                <FaMapMarkerAlt className="text-[#FCBC14] mt-1" />

                <p className="text-sm">
                  {order.location || "Location saved"}
                </p>

              </div>

            </div>

            {/* Payment */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">

              <h2 className="font-bold text-[#072144] mb-4">
                Payment
              </h2>

              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                  <FaCreditCard className="text-[#072144]" />
                </div>

                <div>

                  <p className="font-semibold text-gray-700">
                    {order.paymentMethod}
                  </p>

                  <p className="text-sm text-gray-500">
                    Payment: {order.paymentStatus}
                  </p>

                </div>

              </div>

              <div className="border-t mt-5 pt-5 flex justify-between">

                <span className="font-semibold text-gray-600">
                  Total
                </span>

                <span className="text-xl font-bold text-[#072144]">
                  Rs.{" "}
                  {Number(order.total || 0).toLocaleString()}
                </span>

              </div>

            </div>

            {/* Professional */}
            <div className="bg-white rounded-2xl border border-gray-100 p-6">

              <h2 className="font-bold text-[#072144] mb-3">
                Professional
              </h2>

              {order.professional ? (
                <div>
                  <p className="font-semibold">
                    {order.professional.name}
                  </p>

                  <p className="text-sm text-gray-500">
                    {order.professional.phone}
                  </p>
                </div>
              ) : (
                <p className="text-sm text-gray-500">
                  Professional will be assigned soon.
                </p>
              )}

            </div>

            {/* Cancel */}
            {order.status !== "Completed" &&
              order.status !== "Cancelled" && (
                <button
                  onClick={handleCancel}
                  className="w-full border border-red-200 text-red-500 py-3 rounded-xl font-semibold hover:bg-red-50 transition"
                >
                  Cancel Service Request
                </button>
              )}

          </div>

        </div>

      </div>
    </div>
  );
};

export default OrderDetails;