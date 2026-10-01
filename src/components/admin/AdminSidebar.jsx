
import React from "react";

import { logoutAdmin } from "../../utils/auth";

import {
  PERMISSIONS,
  hasPermission,
} from "../../utils/permissions";

import {
  FaUsers,
  FaProjectDiagram,
  FaSignOutAlt,
  FaHome,
  FaCog,
  FaChartBar,
  FaTimes,
  FaEnvelope,
  FaUserTie,
  FaMoneyBillWave,
  FaBell,
  FaUserCog,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import { useNavigate, Link } from "react-router-dom";

const AdminSidebar = ({
  sidebarOpen,
  setSidebarOpen,
  sidebarCollapsed,
  setSidebarCollapsed,
}) => {
  const navigate = useNavigate();

  // ================= LOGO NAVIGATION =================

  const handleNavigation = (path) => {
    navigate(path);
  };

  // ================= LOGOUT =================

  const handleLogout = () => {
    logoutAdmin();
    navigate("/login");
  };

  // ================= SIDEBAR MENU =================

  const menuItems = [
    {
      label: "Dashboard",
      path: "/admin/dashboard",
      permission: PERMISSIONS.DASHBOARD_VIEW,
      icon: FaHome,
    },
    {
      label: "Projects / Orders",
      path: "/admin/projects",
      permission: PERMISSIONS.ORDERS_VIEW,
      icon: FaProjectDiagram,
    },
    {
      label: "Customers",
      path: "/admin/customers",
      permission: PERMISSIONS.CUSTOMERS_VIEW,
      icon: FaUsers,
    },
    {
      label: "Enquiries",
      path: "/admin/enquiries",
      permission: PERMISSIONS.ENQUIRIES_VIEW,
      icon: FaEnvelope,
    },
    {
      label: "Professionals",
      path: "/admin/professionals",
      permission: PERMISSIONS.PROFESSIONALS_VIEW,
      icon: FaUserTie,
    },
    {
      label: "Payments",
      path: "/admin/payments",
      permission: PERMISSIONS.PAYMENTS_VIEW,
      icon: FaMoneyBillWave,
    },
    {
      label: "Reports",
      path: "/admin/reports",
      permission: PERMISSIONS.REPORTS_VIEW,
      icon: FaChartBar,
    },
    {
      label: "Notifications",
      path: "/admin/notifications",
      permission: PERMISSIONS.NOTIFICATIONS_VIEW,
      icon: FaBell,
    },
    {
      label: "Staff Management",
      path: "/admin/staff",
      permission: PERMISSIONS.STAFF_VIEW,
      icon: FaUserCog,
    },
    {
      label: "Settings",
      path: "/admin/settings",
      permission: PERMISSIONS.SETTINGS_VIEW,
      icon: FaCog,
    },
  ];

  return (
    <>
      {/* ================= MOBILE OVERLAY ================= */}

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ================= SIDEBAR ================= */}

      <aside
        className={`
          fixed top-0 left-0 h-screen
          bg-[#072144] text-white z-50
          transition-all duration-300 ease-in-out
          flex flex-col

          ${sidebarCollapsed ? "lg:w-20" : "lg:w-64"}

          w-64

          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* ================= SIDEBAR HEADER ================= */}

        <div
          className={`
            h-20 flex items-center
            border-b border-white/10
            flex-shrink-0

            ${
              sidebarCollapsed
                ? "justify-center px-2"
                : "justify-between px-5"
            }
          `}
        >
          {/* Logo */}

          <button
            type="button"
            onClick={() =>
              handleNavigation("/admin/dashboard")
            }
            className="flex items-center gap-3"
            title="Admin Dashboard"
          >
            <div
              className="
                w-10 h-10 rounded-lg
                bg-white
                flex items-center justify-center
                overflow-hidden
                flex-shrink-0
              "
            >
              <img
                src="/Logo.png"
                alt="Book My Problem"
                className="w-full h-full object-contain"
              />
            </div>

            {!sidebarCollapsed && (
              <div className="text-left">
                <h1 className="text-lg font-bold leading-none">
                  Book My Problem
                </h1>

                <p className="text-xs text-gray-300 mt-1">
                  Admin Panel
                </p>
              </div>
            )}
          </button>

          {/* Mobile Close Button */}

          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="
              lg:hidden
              w-9 h-9 rounded-lg
              flex items-center justify-center
              bg-white/10
              hover:bg-white/20
              transition
            "
          >
            <FaTimes />
          </button>
        </div>

        {/* ================= COLLAPSE BUTTON ================= */}

        <button
          type="button"
          onClick={() =>
            setSidebarCollapsed(!sidebarCollapsed)
          }
          title={
            sidebarCollapsed
              ? "Expand Sidebar"
              : "Minimize Sidebar"
          }
          className="
            hidden lg:flex
            absolute top-24 -right-3
            w-7 h-7 rounded-full
            bg-[#FCBC14]
            text-[#072144]
            items-center justify-center
            shadow-lg
            hover:scale-110
            transition-all duration-200
            z-[100]
          "
        >
          {sidebarCollapsed ? (
            <FaChevronRight className="text-xs" />
          ) : (
            <FaChevronLeft className="text-xs" />
          )}
        </button>

        {/* ================= SIDEBAR MENU ================= */}

        <nav
          className="
            flex-1
            px-3 py-3
            overflow-y-auto

            [scrollbar-width:none]
            [-ms-overflow-style:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          <div className="space-y-1">
            {menuItems
              .filter((item) =>
                hasPermission(item.permission)
              )
              .map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => {
                      // Sirf Settings par mobile sidebar close hoga
                      if (
                        item.path === "/admin/settings" &&
                        window.innerWidth < 1024
                      ) {
                        setSidebarOpen(false);
                      }
                    }}
                    title={
                      sidebarCollapsed
                        ? item.label
                        : ""
                    }
                    className={`
                      group
                      relative
                      w-full
                      flex items-center
                      gap-3
                      rounded-lg
                      py-3
                      text-gray-200
                      hover:bg-white/10
                      hover:text-white
                      transition-all duration-200

                      ${
                        sidebarCollapsed
                          ? "justify-center px-2"
                          : "px-4"
                      }
                    `}
                  >
                    <Icon className="text-lg flex-shrink-0" />

                    {!sidebarCollapsed && (
                      <span className="text-sm font-medium whitespace-nowrap">
                        {item.label}
                      </span>
                    )}

                    {/* ================= COLLAPSED TOOLTIP ================= */}

                    {sidebarCollapsed && (
                      <span
                        className="
                          absolute
                          left-full
                          ml-3
                          px-3
                          py-2
                          rounded-md
                          bg-[#FCBC14]
                          text-[#072144]
                          text-xs
                          font-semibold
                          whitespace-nowrap

                          opacity-0
                          invisible

                          group-hover:opacity-100
                          group-hover:visible

                          transition-all
                          duration-200

                          z-[200]
                          shadow-lg
                        "
                      >
                        {item.label}
                      </span>
                    )}
                  </Link>
                );
              })}
          </div>
        </nav>

        {/* ================= LOGOUT ================= */}

        <div
          className="
            p-3
            border-t border-white/10
            flex-shrink-0
          "
        >
          <button
            type="button"
            onClick={handleLogout}
            title={
              sidebarCollapsed
                ? "Logout"
                : ""
            }
            className={`
              group
              relative
              w-full
              flex items-center
              gap-3
              rounded-lg
              py-3

              text-red-300
              hover:bg-red-500/10
              hover:text-red-200
              transition-all

              ${
                sidebarCollapsed
                  ? "justify-center px-2"
                  : "px-4"
              }
            `}
          >
            <FaSignOutAlt className="text-lg flex-shrink-0" />

            {!sidebarCollapsed && (
              <span className="text-sm font-medium">
                Logout
              </span>
            )}

            {/* ================= LOGOUT TOOLTIP ================= */}

            {sidebarCollapsed && (
              <span
                className="
                  absolute
                  left-full
                  ml-3
                  px-3
                  py-2
                  rounded-md
                  bg-[#FCBC14]
                  text-[#072144]
                  text-xs
                  font-semibold
                  whitespace-nowrap

                  opacity-0
                  invisible

                  group-hover:opacity-100
                  group-hover:visible

                  transition-all
                  duration-200

                  z-[200]
                  shadow-lg
                "
              >
                Logout
              </span>
            )}
          </button>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
