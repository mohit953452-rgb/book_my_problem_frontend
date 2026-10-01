import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBoxOpen,
  FaChevronRight,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { useOrder } from "../../context/OrderContext";

const Orders = () => {
  const navigate = useNavigate();
  const { getCustomerOrders } = useOrder();

  const orders = getCustomerOrders();

  const currentOrders = orders.filter(
    (order) =>
      !["Completed", "Cancelled"].includes(order.status)
  );

  const previousOrders = orders.filter((order) =>
    ["Completed", "Cancelled"].includes(order.status)
  );

  const formatDate = (date) => {
    if (!date) return "-";

    try {
      return new Date(date).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    } catch {
      return date;
    }
  };

  const getStatusIcon = (status) => {
    if (status === "Completed") {
      return <FaCheckCircle className="text-green-500" />;
    }

    if (status === "Cancelled") {
      return <FaTimesCircle className="text-red-500" />;
    }

    return <FaClock className="text-[#FCBC14]" />;
  };

  const OrderCard = ({ order }) => (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 hover:shadow-md transition">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-[#072144]">
              {order.orderId}
            </span>

            <span className="flex items-center gap-1 text-sm">
              {getStatusIcon(order.status)}
              {order.status}
            </span>
          </div>

          <p className="text-sm text-gray-500 mt-1">
            Placed on {formatDate(order.createdAt)}
          </p>
        </div>

        <div className="text-left md:text-right">
          <p className="text-sm text-gray-500">
            Total Amount
          </p>

          <p className="text-xl font-bold text-[#072144]">
            Rs. {Number(order.total || 0).toLocaleString()}
          </p>
        </div>

      </div>

      <div className="border-t border-gray-100 my-5" />

      <div className="space-y-3">

        {order.services.map((service, index) => (
          <div
            key={`${order.orderId}-${index}`}
            className="flex justify-between gap-4"
          >
            <div>
              <p className="font-semibold text-gray-700">
                {service.title || service.name}
              </p>

              <p className="text-sm text-gray-400">
                Quantity: {service.quantity}
              </p>
            </div>

            <p className="font-semibold text-gray-700">
              Rs.{" "}
              {(
                Number(service.price || 0) *
                Number(service.quantity || 1)
              ).toLocaleString()}
            </p>
          </div>
        ))}

      </div>

      <div className="mt-5 bg-gray-50 rounded-xl p-4">

        <div className="flex items-start gap-2 text-sm text-gray-600">
          <FaMapMarkerAlt className="text-[#FCBC14] mt-1" />

          <span>
            {order.location || "Location saved"}
          </span>
        </div>

      </div>

      <button
        onClick={() =>
          navigate(`/orders/${order.orderId}`)
        }
        className="w-full mt-5 flex items-center justify-center gap-2 bg-[#072144] text-white py-3 rounded-xl font-semibold hover:bg-[#0b315f] transition"
      >
        View & Track Order
        <FaChevronRight />
      </button>

    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-10 px-4">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10">

          <p className="text-sm font-semibold text-[#FCBC14] uppercase tracking-wide">
            My Account
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-[#072144]">
            My Orders
          </h1>

          <p className="text-gray-500 mt-2">
            View your current and previous service requests.
          </p>

        </div>

        {/* Current Orders */}
        <section className="mb-12">

          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center">
              <FaClock className="text-[#FCBC14]" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#072144]">
                Current Orders
              </h2>

              <p className="text-sm text-gray-500">
                Active service requests
              </p>
            </div>
          </div>

          {currentOrders.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-100 p-10 text-center">

              <FaBoxOpen className="text-5xl text-gray-300 mx-auto mb-4" />

              <h3 className="text-xl font-bold text-[#072144]">
                No Current Orders
              </h3>

              <p className="text-gray-500 mt-2">
                Your active service requests will appear here.
              </p>

            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-5">
              {currentOrders.map((order) => (
                <OrderCard
                  key={order.orderId}
                  order={order}
                />
              ))}
            </div>
          )}

        </section>

        {/* Previous Orders */}
        <section>

          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
              <FaCheckCircle className="text-gray-500" />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#072144]">
                Previous Orders
              </h2>

              <p className="text-sm text-gray-500">
                Completed or cancelled requests
              </p>
            </div>
          </div>

          {previousOrders.length === 0 ? (
            <div className="bg-white rounded-2xl border border-gray-100 p-10 text-center">

              <FaBoxOpen className="text-5xl text-gray-300 mx-auto mb-4" />

              <h3 className="text-xl font-bold text-[#072144]">
                No Previous Orders
              </h3>

              <p className="text-gray-500 mt-2">
                Your order history will appear here.
              </p>

            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-5">
              {previousOrders.map((order) => (
                <OrderCard
                  key={order.orderId}
                  order={order}
                />
              ))}
            </div>
          )}

        </section>

      </div>
    </div>
  );
};

export default Orders;