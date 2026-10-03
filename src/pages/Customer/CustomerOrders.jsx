import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaShoppingBag,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const CustomerOrders = () => {
  const [filter, setFilter] = useState("All");

  const orders = JSON.parse(
    localStorage.getItem("customerOrders")
  ) || [
    {
      id: "BMP-1025",
      service: "Plumbing Service",
      city: "Kathmandu",
      amount: 4500,
      status: "In Progress",
      date: "01 Oct 2026",
    },
    {
      id: "BMP-1021",
      service: "Home Painting",
      city: "Lalitpur",
      amount: 18500,
      status: "Completed",
      date: "25 Sep 2026",
    },
    {
      id: "BMP-1018",
      service: "Electrical Work",
      city: "Kathmandu",
      amount: 6500,
      status: "Completed",
      date: "18 Sep 2026",
    },
    {
      id: "BMP-1014",
      service: "AC Fitting & Repairs",
      city: "Bhaktapur",
      amount: 3500,
      status: "Cancelled",
      date: "10 Sep 2026",
    },
  ];

  const filters = [
    "All",
    "Pending",
    "In Progress",
    "Completed",
    "Cancelled",
  ];

  const filteredOrders =
    filter === "All"
      ? orders
      : orders.filter((order) => order.status === filter);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-[#FCBC14] uppercase tracking-wider">
            Customer Account
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-[#072144] mt-2">
            My Orders
          </h1>

          <p className="text-gray-500 mt-2">
            Track your current and previous service orders.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-6 overflow-x-auto">

          <div className="flex gap-2 min-w-max">

            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition ${
                  filter === item
                    ? "bg-[#072144] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {item}
              </button>
            ))}

          </div>
        </div>

        {/* Orders */}
        <div className="space-y-5">

          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
              >

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

                  {/* Order Info */}
                  <div className="flex gap-4">

                    <div className="w-14 h-14 rounded-xl bg-blue-50 text-[#072144] flex items-center justify-center text-xl flex-shrink-0">
                      <FaShoppingBag />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">

                        <h2 className="font-bold text-lg text-[#072144]">
                          {order.id}
                        </h2>

                        <span
                          className={`text-xs font-bold px-3 py-1 rounded-full ${
                            order.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : order.status === "Cancelled"
                              ? "bg-red-100 text-red-700"
                              : order.status === "Pending"
                              ? "bg-orange-100 text-orange-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {order.status}
                        </span>

                      </div>

                      <h3 className="text-gray-800 font-semibold mt-2">
                        {order.service}
                      </h3>

                      <div className="flex flex-wrap gap-5 text-sm text-gray-500 mt-3">

                        <span className="flex items-center gap-2">
                          <FaCalendarAlt />
                          {order.date}
                        </span>

                        <span className="flex items-center gap-2">
                          <FaMapMarkerAlt />
                          {order.city}
                        </span>

                      </div>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex items-center justify-between lg:justify-end gap-6">

                    <div>
                      <p className="text-xs text-gray-500">
                        Total Amount
                      </p>

                      <p className="text-xl font-bold text-[#072144]">
                        Rs. {order.amount.toLocaleString()}
                      </p>
                    </div>

                    <Link
                      to={`/customer/orders/${order.id}`}
                      className="flex items-center gap-2 bg-[#072144] hover:bg-[#0b315f] text-white px-5 py-3 rounded-lg font-semibold transition"
                    >
                      Details
                      <FaArrowRight />
                    </Link>

                  </div>

                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center">

              <FaShoppingBag className="mx-auto text-5xl text-gray-300" />

              <h2 className="text-xl font-bold text-[#072144] mt-5">
                No {filter !== "All" ? filter.toLowerCase() : ""} orders
              </h2>

              <p className="text-gray-500 mt-2">
                Your orders will appear here.
              </p>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default CustomerOrders;