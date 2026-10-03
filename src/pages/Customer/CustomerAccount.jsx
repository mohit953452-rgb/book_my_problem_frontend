import React from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaShoppingBag,
  FaCheckCircle,
  FaClock,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCalendarAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const CustomerAccount = () => {
  const customer = JSON.parse(
    localStorage.getItem("customerProfile")
  ) || {
    name: "Hemraj",
    email: "customer@gmail.com",
    phone: "98XXXXXXXX",
    city: "Kathmandu",
    area: "Baneshwor",
  };

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
  ];

  const totalOrders = orders.length;
  const completedOrders = orders.filter(
    (order) => order.status === "Completed"
  ).length;
  const pendingOrders = orders.filter(
    (order) =>
      order.status === "Pending" ||
      order.status === "In Progress"
  ).length;

  const recentOrders = orders.slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-[#FCBC14] uppercase tracking-wider">
            My Account
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-[#072144] mt-2">
            Welcome back, {customer.name} 👋
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your profile, orders and saved addresses.
          </p>
        </div>

        {/* Profile Summary */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#072144] text-white flex items-center justify-center text-2xl font-bold">
                {customer.name?.charAt(0)?.toUpperCase() || "C"}
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#072144]">
                  {customer.name}
                </h2>

                <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                  <span className="flex items-center gap-2">
                    <FaEnvelope className="text-[#FCBC14]" />
                    {customer.email}
                  </span>

                  <span className="flex items-center gap-2">
                    <FaPhone className="text-[#FCBC14]" />
                    {customer.phone}
                  </span>
                </div>
              </div>
            </div>

            <Link
              to="/customer/profile"
              className="inline-flex items-center justify-center gap-2 bg-[#072144] hover:bg-[#0b315f] text-white px-5 py-3 rounded-lg font-semibold transition"
            >
              <FaUser />
              Edit Profile
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#072144] flex items-center justify-center text-xl mb-4">
              <FaShoppingBag />
            </div>

            <p className="text-gray-500 text-sm">
              Total Orders
            </p>

            <h3 className="text-3xl font-bold text-[#072144] mt-1">
              {totalOrders}
            </h3>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-yellow-50 text-[#FCBC14] flex items-center justify-center text-xl mb-4">
              <FaClock />
            </div>

            <p className="text-gray-500 text-sm">
              Active Orders
            </p>

            <h3 className="text-3xl font-bold text-[#072144] mt-1">
              {pendingOrders}
            </h3>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center text-xl mb-4">
              <FaCheckCircle />
            </div>

            <p className="text-gray-500 text-sm">
              Completed
            </p>

            <h3 className="text-3xl font-bold text-[#072144] mt-1">
              {completedOrders}
            </h3>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl mb-4">
              <FaMapMarkerAlt />
            </div>

            <p className="text-gray-500 text-sm">
              Location
            </p>

            <h3 className="text-lg font-bold text-[#072144] mt-2">
              {customer.area || "Not Added"}
            </h3>

            <p className="text-sm text-gray-500">
              {customer.city || ""}
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">

          <Link
            to="/customer/orders"
            className="bg-[#072144] text-white rounded-2xl p-6 hover:-translate-y-1 transition shadow-sm"
          >
            <FaShoppingBag className="text-[#FCBC14] text-2xl mb-4" />

            <h3 className="text-xl font-bold">
              My Orders
            </h3>

            <p className="text-gray-300 text-sm mt-2">
              View and track all your orders.
            </p>

            <span className="flex items-center gap-2 text-[#FCBC14] font-semibold mt-5">
              View Orders
              <FaArrowRight />
            </span>
          </Link>

          <Link
            to="/customer/addresses"
            className="bg-white border border-gray-100 rounded-2xl p-6 hover:-translate-y-1 transition shadow-sm"
          >
            <FaMapMarkerAlt className="text-[#FCBC14] text-2xl mb-4" />

            <h3 className="text-xl font-bold text-[#072144]">
              Saved Addresses
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              Manage your service locations.
            </p>

            <span className="flex items-center gap-2 text-[#072144] font-semibold mt-5">
              Manage Addresses
              <FaArrowRight />
            </span>
          </Link>

          <Link
            to="/customer/profile"
            className="bg-white border border-gray-100 rounded-2xl p-6 hover:-translate-y-1 transition shadow-sm"
          >
            <FaUser className="text-[#FCBC14] text-2xl mb-4" />

            <h3 className="text-xl font-bold text-[#072144]">
              My Profile
            </h3>

            <p className="text-gray-500 text-sm mt-2">
              Update your personal information.
            </p>

            <span className="flex items-center gap-2 text-[#072144] font-semibold mt-5">
              Edit Profile
              <FaArrowRight />
            </span>
          </Link>
        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-6 border-b">
            <div>
              <h2 className="text-xl font-bold text-[#072144]">
                Recent Orders
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Your latest service bookings
              </p>
            </div>

            <Link
              to="/customer/orders"
              className="text-[#072144] font-semibold flex items-center gap-2 hover:text-[#FCBC14] transition"
            >
              View All
              <FaArrowRight />
            </Link>
          </div>

          <div className="divide-y">

            {recentOrders.length > 0 ? (
              recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-bold text-[#072144]">
                        {order.id}
                      </h3>

                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full ${
                          order.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : order.status === "Cancelled"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>

                    <p className="text-gray-700 mt-2 font-medium">
                      {order.service}
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-2">
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

                  <div className="flex items-center justify-between lg:justify-end gap-6">
                    <p className="text-lg font-bold text-[#072144]">
                      Rs. {order.amount.toLocaleString()}
                    </p>

                    <Link
                      to={`/customer/orders/${order.id}`}
                      className="border-2 border-[#072144] text-[#072144] px-4 py-2 rounded-lg font-semibold hover:bg-[#072144] hover:text-white transition"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-10 text-center">
                <FaShoppingBag className="mx-auto text-4xl text-gray-300" />

                <h3 className="font-bold text-[#072144] mt-4">
                  No orders yet
                </h3>

                <p className="text-gray-500 mt-2">
                  Your orders will appear here.
                </p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default CustomerAccount;