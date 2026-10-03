import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaClock,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaPhone,
  FaUserTie,
  FaCreditCard,
} from "react-icons/fa";

const CustomerOrderDetails = () => {
  const { orderId } = useParams();

  const orders = JSON.parse(
    localStorage.getItem("customerOrders")
  ) || [
    {
      id: "BMP-1025",
      service: "Plumbing Service",
      city: "Kathmandu",
      area: "Baneshwor",
      address: "House No. 25, Near XYZ Chowk",
      amount: 4500,
      status: "In Progress",
      date: "01 Oct 2026",
      time: "10:00 AM - 12:00 PM",
      professional: "Ram Bahadur",
      professionalPhone: "98XXXXXXXX",
      paymentStatus: "Paid",
    },
  ];

  const order =
    orders.find((item) => item.id === orderId) || {
      id: orderId,
      service: "Service",
      city: "Kathmandu",
      area: "Not Available",
      address: "Address not available",
      amount: 0,
      status: "Pending",
      date: "Not Available",
      time: "Not Available",
      professional: "Not Assigned",
      professionalPhone: "Not Available",
      paymentStatus: "Pending",
    };

  const steps = [
    {
      title: "Booking Confirmed",
      description: "Your service booking has been confirmed.",
      completed: true,
    },
    {
      title: "Professional Assigned",
      description: "A professional has been assigned to your order.",
      completed: true,
    },
    {
      title: "Professional On The Way",
      description: "Your professional is on the way.",
      completed:
        order.status === "In Progress" ||
        order.status === "Completed",
    },
    {
      title: "Service Completed",
      description: "Your service will be marked completed after work.",
      completed: order.status === "Completed",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back */}
        <Link
          to="/customer/orders"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#072144] mb-6 font-medium"
        >
          <FaArrowLeft />
          Back to Orders
        </Link>

        {/* Header */}
        <div className="bg-[#072144] rounded-2xl p-6 md:p-8 text-white mb-6">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            <div>
              <p className="text-[#FCBC14] font-semibold text-sm">
                ORDER DETAILS
              </p>

              <h1 className="text-3xl font-bold mt-2">
                {order.id}
              </h1>

              <p className="text-gray-300 mt-2">
                {order.service}
              </p>
            </div>

            <span
              className={`self-start md:self-auto px-4 py-2 rounded-full text-sm font-bold ${
                order.status === "Completed"
                  ? "bg-green-500 text-white"
                  : order.status === "Cancelled"
                  ? "bg-red-500 text-white"
                  : "bg-[#FCBC14] text-[#072144]"
              }`}
            >
              {order.status}
            </span>

          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left */}
          <div className="lg:col-span-2 space-y-6">

            {/* Service Details */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">

              <h2 className="text-xl font-bold text-[#072144] mb-6">
                Service Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                  <p className="text-sm text-gray-500">
                    Service
                  </p>

                  <p className="font-semibold text-[#072144] mt-1">
                    {order.service}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Booking Date
                  </p>

                  <p className="font-semibold text-[#072144] mt-1 flex items-center gap-2">
                    <FaCalendarAlt className="text-[#FCBC14]" />
                    {order.date}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Preferred Time
                  </p>

                  <p className="font-semibold text-[#072144] mt-1">
                    {order.time}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Payment
                  </p>

                  <p className="font-semibold text-green-600 mt-1 flex items-center gap-2">
                    <FaCreditCard />
                    {order.paymentStatus}
                  </p>
                </div>

              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">

              <h2 className="text-xl font-bold text-[#072144] mb-6">
                Service Location
              </h2>

              <div className="flex gap-4">

                <div className="w-12 h-12 rounded-xl bg-yellow-50 text-[#FCBC14] flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="font-bold text-[#072144]">
                    {order.area}, {order.city}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    {order.address}
                  </p>
                </div>

              </div>
            </div>

            {/* Professional */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">

              <h2 className="text-xl font-bold text-[#072144] mb-6">
                Assigned Professional
              </h2>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-full bg-[#072144] text-white flex items-center justify-center text-xl">
                    <FaUserTie />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#072144]">
                      {order.professional}
                    </h3>

                    <p className="text-sm text-gray-500">
                      Service Professional
                    </p>
                  </div>

                </div>

                <a
                  href={`tel:${order.professionalPhone}`}
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#072144] text-[#072144] px-5 py-2.5 rounded-lg font-semibold hover:bg-[#072144] hover:text-white transition"
                >
                  <FaPhone />
                  Call Professional
                </a>

              </div>
            </div>

          </div>

          {/* Right */}
          <div className="space-y-6">

            {/* Amount */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">

              <h2 className="text-xl font-bold text-[#072144] mb-5">
                Payment Summary
              </h2>

              <div className="flex justify-between text-gray-500 mb-3">
                <span>Service Amount</span>

                <span>
                  Rs. {order.amount.toLocaleString()}
                </span>
              </div>

              <div className="border-t pt-4 flex justify-between">
                <span className="font-bold text-[#072144]">
                  Total
                </span>

                <span className="text-xl font-bold text-[#072144]">
                  Rs. {order.amount.toLocaleString()}
                </span>
              </div>

            </div>

            {/* Timeline */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">

              <h2 className="text-xl font-bold text-[#072144] mb-6">
                Order Progress
              </h2>

              <div className="space-y-6">

                {steps.map((step, index) => (
                  <div
                    key={step.title}
                    className="flex gap-4"
                  >

                    <div className="relative">

                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center ${
                          step.completed
                            ? "bg-[#FCBC14] text-[#072144]"
                            : "bg-gray-100 text-gray-400"
                        }`}
                      >
                        {step.completed ? (
                          <FaCheckCircle />
                        ) : (
                          <FaClock />
                        )}
                      </div>

                      {index !== steps.length - 1 && (
                        <div
                          className={`absolute left-1/2 -translate-x-1/2 top-9 w-0.5 h-8 ${
                            step.completed
                              ? "bg-[#FCBC14]"
                              : "bg-gray-200"
                          }`}
                        />
                      )}

                    </div>

                    <div>
                      <h3
                        className={`font-semibold ${
                          step.completed
                            ? "text-[#072144]"
                            : "text-gray-400"
                        }`}
                      >
                        {step.title}
                      </h3>

                      <p className="text-xs text-gray-500 mt-1">
                        {step.description}
                      </p>
                    </div>

                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerOrderDetails;