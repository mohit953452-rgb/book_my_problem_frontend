import React, { useState } from "react";

import {
  FaUsers,
  FaProjectDiagram,
  FaClock,
  FaCheckCircle,
  FaRupeeSign,
  FaUserPlus,
  FaPlus,
  FaArrowRight,
  FaMapMarkerAlt,
  FaBars,
  FaBell,
  FaSignOutAlt,
  FaHome,
  FaCog,
  FaChartBar,
  FaTimes,
  FaEnvelope,
  FaUserTie,
  FaMoneyBillWave,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { logoutAdmin } from "../../utils/auth";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Navigation
  const handleNavigation = (path) => {
    navigate(path);

    // Mobile par menu click ke baad sidebar close
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  // Logout
  const handleLogout = () => {
    logoutAdmin();
    navigate("/login");
  };

  // Dashboard Stats
  const stats = [
    {
      title: "Total Professionals",
      value: "460+",
      icon: <FaUsers />,
      description: "Registered professionals",
    },
    {
      title: "Total Projects",
      value: "370+",
      icon: <FaProjectDiagram />,
      description: "Projects completed",
    },
    {
      title: "Pending Projects",
      value: "86",
      icon: <FaClock />,
      description: "Projects in progress",
    },
    {
      title: "Completed Projects",
      value: "284+",
      icon: <FaCheckCircle />,
      description: "Successfully completed",
    },
    {
      title: "Total Revenue",
      value: "Rs. 8,42,500",
      icon: <FaRupeeSign />,
      description: "This month revenue",
    },
  ];

  // Sidebar Menu
  const menuItems = [
    // Dashboard - Admin dashboard
    {
      label: "Dashboard",
      icon: <FaChartBar />,
      path: "/admin/dashboard",
    },

    // Home - Public website home page
    {
      label: "Home",
      icon: <FaHome />,
      path: "/",
    },

    {
      label: "Projects",
      icon: <FaProjectDiagram />,
      path: "/admin/projects",
    },
    {
      label: "Professionals",
      icon: <FaUsers />,
      path: "/admin/professionals",
    },
    {
      label: "Customers",
      icon: <FaUserTie />,
      path: "/admin/customers",
    },
    {
      label: "Enquiries",
      icon: <FaEnvelope />,
      path: "/admin/enquiries",
    },
    {
      label: "Payments",
      icon: <FaMoneyBillWave />,
      path: "/admin/payments",
    },
    {
      label: "Reports",
      icon: <FaChartBar />,
      path: "/admin/reports",
    },
    {
      label: "Notifications",
      icon: <FaBell />,
      path: "/admin/notifications",
    },
    {
      label: "Settings",
      icon: <FaCog />,
      path: "/admin/settings",
    },
  ];

  // Recent Projects
  const recentProjects = [
    {
      id: "PRJ-1001",
      project: "Kitchen Renovation",
      customer: "Ram Bahadur",
      location: "Kathmandu",
      status: "In Progress",
      amount: "Rs. 85,000",
    },
    {
      id: "PRJ-1002",
      project: "Plumbing Work",
      customer: "Sita Sharma",
      location: "Lalitpur",
      status: "Completed",
      amount: "Rs. 32,500",
    },
    {
      id: "PRJ-1003",
      project: "House Painting",
      customer: "Hari Prasad",
      location: "Bhaktapur",
      status: "Pending",
      amount: "Rs. 48,000",
    },
  ];

  // Status Classes
  const getStatusClass = (status) => {
    if (status === "Completed") {
      return "bg-green-100 text-green-700";
    }

    if (status === "In Progress") {
      return "bg-yellow-100 text-yellow-700";
    }

    if (status === "Pending") {
      return "bg-blue-100 text-blue-700";
    }

    return "bg-gray-100 text-gray-700";
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
          fixed top-0 left-0 h-screen bg-[#072144] text-white z-50
          transition-all duration-300 ease-in-out flex flex-col

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
            h-20 flex items-center border-b border-white/10 flex-shrink-0
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
            onClick={() => handleNavigation("/admin/dashboard")}
            className="flex items-center gap-3"
            title="Admin Dashboard"
          >
            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center overflow-hidden flex-shrink-0">
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
            className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center bg-white/10 hover:bg-white/20 transition"
          >
            <FaTimes />
          </button>
        </div>

        {/* ================= COLLAPSE BUTTON ================= */}

        <button
          type="button"
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          title={
            sidebarCollapsed
              ? "Expand Sidebar"
              : "Minimize Sidebar"
          }
          className="
            hidden lg:flex absolute top-24 -right-3 w-7 h-7 rounded-full
            bg-[#FCBC14] text-[#072144] items-center justify-center
            shadow-lg hover:scale-110 transition-all duration-200 z-[100]
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
            flex-1 px-3 py-3 overflow-y-auto
            [scrollbar-width:none]
            [-ms-overflow-style:none]
            [&::-webkit-scrollbar]:hidden
          "
        >
          <div className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavigation(item.path)}
                title={sidebarCollapsed ? item.label : ""}
                className={`
                  w-full flex items-center gap-3 rounded-lg
                  transition-all duration-200

                  hover:bg-[#FCBC14]
                  hover:text-[#072144]

                  ${
                    sidebarCollapsed
                      ? "justify-center px-2 py-3"
                      : "px-4 py-3"
                  }
                `}
              >
                <span className="text-lg flex-shrink-0">
                  {item.icon}
                </span>

                {!sidebarCollapsed && (
                  <span className="text-sm font-medium">
                    {item.label}
                  </span>
                )}
              </button>
            ))}
          </div>
        </nav>

        {/* ================= LOGOUT ================= */}

        <div className="p-3 border-t border-white/10 flex-shrink-0">
          <button
            type="button"
            onClick={handleLogout}
            title={sidebarCollapsed ? "Logout" : ""}
            className={`
              w-full flex items-center gap-3 rounded-lg py-3
              text-red-300 hover:bg-red-500/10
              hover:text-red-200 transition-all

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
          </button>
        </div>
      </aside>

      {/* ================= MAIN ================= */}

      <main
        className={`
          min-h-screen transition-all duration-300

          ${
            sidebarCollapsed
              ? "lg:ml-20"
              : "lg:ml-64"
          }
        `}
      >
        {/* ================= HEADER ================= */}

        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 lg:px-8 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}

            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="
                lg:hidden w-10 h-10 rounded-lg
                bg-[#072144] text-white
                flex items-center justify-center
              "
            >
              <FaBars />
            </button>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#072144]">
                Dashboard
              </h2>

              <p className="text-xs sm:text-sm text-gray-500">
                Welcome back, Admin
              </p>
            </div>
          </div>

          {/* Header Right */}

          <div className="flex items-center gap-2 sm:gap-4">
            {/* Notification */}

            <button
              type="button"
              onClick={() =>
                handleNavigation("/admin/notifications")
              }
              className="
                relative w-10 h-10 rounded-full
                flex items-center justify-center
                text-gray-600 hover:bg-gray-100
                transition
              "
              title="Notifications"
            >
              <FaBell className="text-lg" />

              <span
                className="
                  absolute top-1 right-1
                  w-2 h-2 rounded-full
                  bg-red-500
                "
              />
            </button>

            {/* Admin Profile */}

            <div className="hidden sm:flex items-center gap-3">
              <div
                className="
                  w-10 h-10 rounded-full
                  bg-[#072144] text-white
                  flex items-center justify-center
                  font-bold
                "
              >
                A
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Admin
                </p>

                <p className="text-xs text-gray-500">
                  Administrator
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* ================= DASHBOARD CONTENT ================= */}

        <div className="p-4 sm:p-6 lg:p-8">
          {/* ================= WELCOME BANNER ================= */}

          <div className="bg-[#072144] rounded-2xl p-5 sm:p-7 text-white mb-6 relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-[#FCBC14] text-sm font-semibold mb-2">
                ADMIN DASHBOARD
              </p>

              <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                Welcome to Book My Problem
              </h1>

              <p className="text-gray-300 text-sm sm:text-base max-w-2xl">
                Manage professionals, customers, projects,
                payments and all your platform activities from
                one place.
              </p>

              <button
                type="button"
                onClick={() =>
                  handleNavigation("/admin/projects")
                }
                className="
                  mt-5 inline-flex items-center gap-2
                  bg-[#FCBC14] text-[#072144]
                  px-5 py-2.5 rounded-lg
                  font-semibold text-sm
                  hover:bg-yellow-400 transition
                "
              >
                View Projects
                <FaArrowRight />
              </button>
            </div>

            <div
              className="
                absolute -right-10 -top-10
                w-48 h-48 rounded-full
                bg-white/5
              "
            />

            <div
              className="
                absolute right-10 -bottom-20
                w-60 h-60 rounded-full
                bg-white/5
              "
            />
          </div>

          {/* ================= STATS ================= */}

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 mb-8">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="
                  bg-white rounded-xl p-5
                  border border-gray-100
                  shadow-sm hover:shadow-md
                  transition
                "
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="
                      w-11 h-11 rounded-lg
                      bg-[#072144]/10
                      text-[#072144]
                      flex items-center justify-center
                      text-lg
                    "
                  >
                    {stat.icon}
                  </div>
                </div>

                <p className="text-sm text-gray-500 mb-1">
                  {stat.title}
                </p>

                <h3 className="text-xl font-bold text-[#072144]">
                  {stat.value}
                </h3>

                <p className="text-xs text-gray-400 mt-1">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* ================= QUICK ACTIONS ================= */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Add Professional */}

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="
                    w-12 h-12 rounded-xl
                    bg-[#072144] text-white
                    flex items-center justify-center
                    text-xl
                  "
                >
                  <FaUserPlus />
                </div>

                <div>
                  <h3 className="font-bold text-[#072144]">
                    Add Professional
                  </h3>

                  <p className="text-sm text-gray-500">
                    Register a new professional
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  handleNavigation(
                    "/admin/professionals/add"
                  )
                }
                className="
                  w-full flex items-center justify-center
                  gap-2 bg-[#072144] text-white
                  py-2.5 rounded-lg
                  text-sm font-semibold
                  hover:bg-[#0b315f] transition
                "
              >
                <FaPlus />
                Add Professional
              </button>
            </div>

            {/* Create Project */}

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="
                    w-12 h-12 rounded-xl
                    bg-[#FCBC14] text-[#072144]
                    flex items-center justify-center
                    text-xl
                  "
                >
                  <FaProjectDiagram />
                </div>

                <div>
                  <h3 className="font-bold text-[#072144]">
                    Create Project
                  </h3>

                  <p className="text-sm text-gray-500">
                    Create a new customer project
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  handleNavigation(
                    "/admin/projects/create"
                  )
                }
                className="
                  w-full flex items-center justify-center
                  gap-2 bg-[#FCBC14]
                  text-[#072144]
                  py-2.5 rounded-lg
                  text-sm font-semibold
                  hover:bg-yellow-400 transition
                "
              >
                <FaPlus />
                Create Project
              </button>
            </div>

            {/* Reports */}

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="
                    w-12 h-12 rounded-xl
                    bg-green-100 text-green-600
                    flex items-center justify-center
                    text-xl
                  "
                >
                  <FaChartBar />
                </div>

                <div>
                  <h3 className="font-bold text-[#072144]">
                    View Reports
                  </h3>

                  <p className="text-sm text-gray-500">
                    Check platform performance
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  handleNavigation("/admin/reports")
                }
                className="
                  w-full flex items-center justify-center
                  gap-2 bg-gray-100
                  text-[#072144]
                  py-2.5 rounded-lg
                  text-sm font-semibold
                  hover:bg-gray-200 transition
                "
              >
                View Reports
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* ================= RECENT PROJECTS ================= */}

          <div
            className="
              bg-white rounded-xl
              border border-gray-100
              shadow-sm overflow-hidden
            "
          >
            <div
              className="
                p-5 sm:p-6
                border-b border-gray-100
                flex items-center
                justify-between gap-4
              "
            >
              <div>
                <h2 className="text-lg font-bold text-[#072144]">
                  Recent Projects
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Latest projects added to the platform
                </p>
              </div>

              <button
                type="button"
                onClick={() =>
                  handleNavigation("/admin/projects")
                }
                className="
                  flex items-center gap-2
                  text-sm font-semibold
                  text-[#072144]
                  hover:text-[#FCBC14]
                  transition
                "
              >
                View All
                <FaArrowRight />
              </button>
            </div>

            {/* Desktop Table */}

            <div className="hidden md:block overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 text-left">
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                      Project
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                      Customer
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                      Location
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                      Status
                    </th>

                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">
                      Amount
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {recentProjects.map((project) => (
                    <tr
                      key={project.id}
                      className="hover:bg-gray-50"
                    >
                      <td className="px-6 py-4">
                        <p className="font-semibold text-[#072144]">
                          {project.project}
                        </p>

                        <p className="text-xs text-gray-400">
                          {project.id}
                        </p>
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-600">
                        {project.customer}
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <FaMapMarkerAlt className="text-[#FCBC14]" />
                          {project.location}
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`
                            inline-flex px-3 py-1
                            rounded-full
                            text-xs font-semibold
                            ${getStatusClass(project.status)}
                          `}
                        >
                          {project.status}
                        </span>
                      </td>

                      <td className="px-6 py-4 font-semibold text-[#072144]">
                        {project.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Projects */}

            <div className="md:hidden divide-y divide-gray-100">
              {recentProjects.map((project) => (
                <div key={project.id} className="p-5">
                  <div className="flex justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-semibold text-[#072144]">
                        {project.project}
                      </h3>

                      <p className="text-xs text-gray-400">
                        {project.id}
                      </p>
                    </div>

                    <span
                      className={`
                        h-fit px-2.5 py-1
                        rounded-full
                        text-xs font-semibold
                        ${getStatusClass(project.status)}
                      `}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 mb-2">
                    {project.customer}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <FaMapMarkerAlt className="text-[#FCBC14]" />
                      {project.location}
                    </div>

                    <span className="font-semibold text-[#072144]">
                      {project.amount}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ================= PAYMENT + LOCATIONS ================= */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Payment Summary */}

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="
                    w-11 h-11 rounded-lg
                    bg-green-100
                    text-green-600
                    flex items-center justify-center
                  "
                >
                  <FaMoneyBillWave />
                </div>

                <div>
                  <h3 className="font-bold text-[#072144]">
                    Payment Summary
                  </h3>

                  <p className="text-sm text-gray-500">
                    Current payment overview
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Total Collected
                  </span>

                  <span className="font-semibold text-green-600">
                    Rs. 6,82,500
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    Pending Payment
                  </span>

                  <span className="font-semibold text-orange-500">
                    Rs. 1,60,000
                  </span>
                </div>

                <div className="h-px bg-gray-100" />

                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#072144]">
                    Total Revenue
                  </span>

                  <span className="font-bold text-[#072144]">
                    Rs. 8,42,500
                  </span>
                </div>
              </div>
            </div>

            {/* Service Locations */}

            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="
                    w-11 h-11 rounded-lg
                    bg-[#FCBC14]/20
                    text-[#072144]
                    flex items-center justify-center
                  "
                >
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="font-bold text-[#072144]">
                    Service Locations
                  </h3>

                  <p className="text-sm text-gray-500">
                    Active service cities
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "Kathmandu",
                  "Lalitpur",
                  "Bhaktapur",
                  "Pokhara",
                  "Chitwan",
                  "Butwal",
                ].map((city) => (
                  <div
                    key={city}
                    className="
                      flex items-center gap-2
                      bg-gray-50 rounded-lg
                      px-3 py-2.5
                      text-sm text-gray-600
                    "
                  >
                    <FaMapMarkerAlt className="text-[#FCBC14] text-xs" />
                    {city}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= FOOTER ================= */}

          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              © 2026 Book My Problem. Admin Panel.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;