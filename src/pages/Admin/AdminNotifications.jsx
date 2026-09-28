import React, { useState } from "react";
import {
  FaBell,
  FaEnvelope,
  FaUserPlus,
  FaProjectDiagram,
  FaMoneyBillWave,
  FaCog,
  FaCheck,
  FaTrash,
  FaCheckDouble,
  FaTimes,
} from "react-icons/fa";

const initialNotifications = [
  {
    id: 1,
    type: "enquiry",
    title: "New Enquiry Received",
    message:
      "A new project enquiry has been submitted through the contact form.",
    time: "5 minutes ago",
    read: false,
  },
  {
    id: 2,
    type: "customer",
    title: "New Customer Registered",
    message:
      "A new customer has successfully registered on Book My Problem.",
    time: "25 minutes ago",
    read: false,
  },
  {
    id: 3,
    type: "project",
    title: "New Project Created",
    message:
      "A new project has been created and is waiting for confirmation.",
    time: "1 hour ago",
    read: true,
  },
  {
    id: 4,
    type: "payment",
    title: "Payment Received",
    message:
      "A payment has been received for project PRJ-1004.",
    time: "2 hours ago",
    read: false,
  },
  {
    id: 5,
    type: "system",
    title: "System Notification",
    message:
      "Your admin settings were successfully updated.",
    time: "Yesterday",
    read: true,
  },
];

const AdminNotifications = () => {
  const [notifications, setNotifications] = useState(
    initialNotifications
  );

  const [filter, setFilter] = useState("all");

  // ==============================
  // FILTER
  // ==============================

  const filteredNotifications = notifications.filter((notification) => {
    if (filter === "unread") {
      return !notification.read;
    }

    if (filter === "read") {
      return notification.read;
    }

    return true;
  });

  // ==============================
  // COUNTS
  // ==============================

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  // ==============================
  // MARK AS READ
  // ==============================

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? {
              ...notification,
              read: true,
            }
          : notification
      )
    );
  };

  // ==============================
  // MARK ALL AS READ
  // ==============================

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({
        ...notification,
        read: true,
      }))
    );
  };

  // ==============================
  // DELETE
  // ==============================

  const deleteNotification = (id) => {
    setNotifications((prev) =>
      prev.filter(
        (notification) => notification.id !== id
      )
    );
  };

  // ==============================
  // CLEAR ALL
  // ==============================

  const clearAll = () => {
    setNotifications([]);
  };

  // ==============================
  // ICON
  // ==============================

  const getNotificationIcon = (type) => {
    switch (type) {
      case "enquiry":
        return (
          <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
            <FaEnvelope />
          </div>
        );

      case "customer":
        return (
          <div className="w-11 h-11 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
            <FaUserPlus />
          </div>
        );

      case "project":
        return (
          <div className="w-11 h-11 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
            <FaProjectDiagram />
          </div>
        );

      case "payment":
        return (
          <div className="w-11 h-11 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center">
            <FaMoneyBillWave />
          </div>
        );

      case "system":
        return (
          <div className="w-11 h-11 rounded-xl bg-gray-100 text-gray-600 flex items-center justify-center">
            <FaCog />
          </div>
        );

      default:
        return (
          <div className="w-11 h-11 rounded-xl bg-gray-100 text-gray-600 flex items-center justify-center">
            <FaBell />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">

      {/* ================= HEADER ================= */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#FCBC14] text-[#072144] flex items-center justify-center text-xl">
              <FaBell />
            </div>

            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#072144]">
                Notifications
              </h1>

              <p className="text-gray-500 mt-1">
                Manage all your admin notifications.
              </p>
            </div>
          </div>
        </div>

        {/* HEADER ACTIONS */}

        <div className="flex items-center gap-2">

          {unreadCount > 0 && (
            <button
              onClick={markAllAsRead}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#072144] text-white text-sm font-semibold hover:bg-[#FCBC14] hover:text-[#072144] transition-all duration-200"
            >
              <FaCheckDouble />
              Mark All Read
            </button>
          )}

          {notifications.length > 0 && (
            <button
              onClick={clearAll}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-50 text-red-600 text-sm font-semibold hover:bg-red-600 hover:text-white transition-all duration-200"
            >
              <FaTrash />
              Clear All
            </button>
          )}

        </div>
      </div>

      {/* ================= STATS ================= */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <p className="text-sm text-gray-500">
            Total Notifications
          </p>

          <h2 className="text-2xl font-bold text-[#072144] mt-1">
            {notifications.length}
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <p className="text-sm text-gray-500">
            Unread
          </p>

          <h2 className="text-2xl font-bold text-orange-500 mt-1">
            {unreadCount}
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
          <p className="text-sm text-gray-500">
            Read
          </p>

          <h2 className="text-2xl font-bold text-green-600 mt-1">
            {notifications.length - unreadCount}
          </h2>
        </div>

      </div>

      {/* ================= FILTER ================= */}

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-3 mb-5">

        <div className="flex flex-wrap gap-2">

          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              filter === "all"
                ? "bg-[#FCBC14] text-[#072144]"
                : "text-gray-600 hover:bg-[#FCBC14] hover:text-[#072144]"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setFilter("unread")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              filter === "unread"
                ? "bg-[#FCBC14] text-[#072144]"
                : "text-gray-600 hover:bg-[#FCBC14] hover:text-[#072144]"
            }`}
          >
            Unread
            {unreadCount > 0 && (
              <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                {unreadCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setFilter("read")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              filter === "read"
                ? "bg-[#FCBC14] text-[#072144]"
                : "text-gray-600 hover:bg-[#FCBC14] hover:text-[#072144]"
            }`}
          >
            Read
          </button>

        </div>
      </div>

      {/* ================= NOTIFICATIONS ================= */}

      <div className="space-y-3">

        {filteredNotifications.length === 0 ? (

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 text-center">

            <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-2xl">
              <FaBell />
            </div>

            <h3 className="text-lg font-semibold text-[#072144] mt-4">
              No Notifications
            </h3>

            <p className="text-gray-500 text-sm mt-1">
              There are no notifications in this section.
            </p>

          </div>

        ) : (

          filteredNotifications.map((notification) => (

            <div
              key={notification.id}
              className={`bg-white rounded-2xl border shadow-sm p-4 md:p-5 transition-all ${
                notification.read
                  ? "border-gray-100"
                  : "border-[#FCBC14]/50 bg-yellow-50/30"
              }`}
            >

              <div className="flex items-start gap-4">

                {/* ICON */}

                <div className="flex-shrink-0">
                  {getNotificationIcon(notification.type)}
                </div>

                {/* CONTENT */}

                <div className="flex-1 min-w-0">

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">

                    <div>

                      <div className="flex items-center gap-2">

                        <h3 className="font-semibold text-[#072144]">
                          {notification.title}
                        </h3>

                        {!notification.read && (
                          <span className="w-2 h-2 rounded-full bg-[#FCBC14]" />
                        )}

                      </div>

                      <p className="text-sm text-gray-600 mt-1">
                        {notification.message}
                      </p>

                      <p className="text-xs text-gray-400 mt-2">
                        {notification.time}
                      </p>

                    </div>

                    {/* ACTIONS */}

                    <div className="flex items-center gap-2">

                      {!notification.read && (
                        <button
                          onClick={() =>
                            markAsRead(notification.id)
                          }
                          title="Mark as read"
                          className="w-9 h-9 rounded-lg bg-green-50 text-green-600 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all"
                        >
                          <FaCheck />
                        </button>
                      )}

                      <button
                        onClick={() =>
                          deleteNotification(notification.id)
                        }
                        title="Delete notification"
                        className="w-9 h-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all"
                      >
                        <FaTrash />
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          ))

        )}

      </div>

    </div>
  );
};

export default AdminNotifications;