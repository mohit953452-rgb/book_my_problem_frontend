
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

import {
  useNavigate,
  Link,
} from "react-router-dom";

const AdminSidebar = ({
  sidebarOpen,
  setSidebarOpen,
  sidebarCollapsed,
  setSidebarCollapsed,
}) => {
  const navigate = useNavigate();

  // ================= LOGOUT =================

  const handleLogout = () => {
    logoutAdmin();
    setSidebarOpen(false);
    navigate("/login");
  };

  // ================= MENU =================

  const menuItems = [
    {
      label: "Home",
      path: "/",
      icon: FaHome,
    },
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
      {/* =================================================
          MOBILE OVERLAY
      ================================================= */}

      {sidebarOpen && (
        <div
          className="
            fixed
            inset-0
            bg-black/50
            z-40
            lg:hidden
          "
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* =================================================
          SIDEBAR
          NAVBAR KE 80px KE NICHE SE START HOGA
      ================================================= */}

      <aside
        className={`
          fixed
          top-15
          left-0
          h-[calc(100vh-5rem)]
          bg-[#072144]
          text-white
          z-50
          flex
          flex-col
          transition-all
          duration-300
          ease-in-out
          shadow-xl

          ${sidebarCollapsed ? "lg:w-20" : "lg:w-60"}

          w-64

          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >

        {/* =================================================
            MOBILE CLOSE BUTTON
        ================================================= */}

        <button
          type="button"
          onClick={() => setSidebarOpen(false)}
          className="
            lg:hidden
            absolute
            top-3
            right-3
            w-9
            h-9
            rounded-lg
            flex
            items-center
            justify-center
            bg-white/10
            hover:bg-[#FCBC14]
            hover:text-[#072144]
            transition
            z-[100]
          "
          title="Close Menu"
        >
          <FaTimes />
        </button>

        {/* =================================================
            COLLAPSE BUTTON
        ================================================= */}

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
            hidden
            lg:flex
            absolute
            top-6
            -right-3
            w-7
            h-7
            rounded-full
            bg-[#FCBC14]
            text-[#072144]
            items-center
            justify-center
            shadow-lg
            hover:scale-110
            transition-all
            duration-200
            z-[100]
            border-2
            border-white
          "
        >
          {sidebarCollapsed ? (
            <FaChevronRight className="text-xs" />
          ) : (
            <FaChevronLeft className="text-xs" />
          )}
        </button>

        {/* =================================================
            MENU
        ================================================= */}

        <nav
          className="
            flex-1
            px-2.5
            py-4
            overflow-hidden
          "
        >
          <div className="space-y-0.5">

            {menuItems
              .filter(
                (item) =>
                  !item.permission ||
                  hasPermission(item.permission)
              )
              .map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => {

                      /*
                        Kisi bhi menu par click karne se
                        sidebar close nahi hoga.

                        Sirf mobile Settings par close hoga.
                      */

                      if (
                        item.path === "/admin/settings" &&
                        window.innerWidth < 1024
                      ) {
                        setSidebarOpen(false);
                      }
                    }}
                    className={`
                      group
                      relative
                      w-full
                      flex
                      items-center
                      gap-2.5
                      rounded-lg
                      py-2.5

                      text-gray-200

                      hover:bg-white/10
                      hover:text-white

                      transition-all
                      duration-200

                      ${
                        sidebarCollapsed
                          ? "justify-center px-2"
                          : "px-3"
                      }
                    `}
                  >

                    {/* ICON */}

                    <Icon
                      className="
                        text-[17px]
                        flex-shrink-0
                      "
                    />

                    {/* LABEL */}

                    {!sidebarCollapsed && (
                      <span
                        className="
                          text-[13px]
                          font-medium
                          whitespace-nowrap
                        "
                      >
                        {item.label}
                      </span>
                    )}

                    {/* =================================================
                        COLLAPSED TOOLTIP
                    ================================================= */}

                    {sidebarCollapsed && (
                      <span
                        className="
                          absolute
                          left-full
                          ml-3
                          top-1/2
                          -translate-y-1/2

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

                          pointer-events-none
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

        {/* =================================================
            LOGOUT
        ================================================= */}

        <div
          className="
            p-2.5
            border-t
            border-white/10
            flex-shrink-0
          "
        >
          <button
            type="button"
            onClick={handleLogout}
            className={`
              group
              relative
              w-full
              flex
              items-center
              gap-2.5
              rounded-lg
              py-2.5

              text-red-300

              hover:bg-red-500/10
              hover:text-red-200

              transition

              ${
                sidebarCollapsed
                  ? "justify-center px-2"
                  : "px-3"
              }
            `}
          >

            {/* ICON */}

            <FaSignOutAlt
              className="
                text-[17px]
                flex-shrink-0
              "
            />

            {/* TEXT */}

            {!sidebarCollapsed && (
              <span
                className="
                  text-[13px]
                  font-medium
                "
              >
                Logout
              </span>
            )}

            {/* =================================================
                LOGOUT TOOLTIP
            ================================================= */}

            {sidebarCollapsed && (
              <span
                className="
                  absolute
                  left-full
                  ml-3
                  top-1/2
                  -translate-y-1/2

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

                  pointer-events-none
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

