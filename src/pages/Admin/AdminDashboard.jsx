import React from "react";

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
  FaChartBar,
  FaMoneyBillWave,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  // ================= NAVIGATION =================

  const handleNavigation = (path) => {
    navigate(path);
  };

  // ================= DASHBOARD STATS =================

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

  // ================= RECENT PROJECTS =================

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

  // ================= STATUS CLASS =================

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
    <div className="p-4 sm:p-6 lg:p-8">

      {/* =====================================================
          WELCOME BANNER
      ====================================================== */}

      <div
        className="
          bg-[#072144]
          rounded-2xl
          p-5 sm:p-7
          text-white
          mb-6
          relative
          overflow-hidden
        "
      >
        <div className="relative z-10">

          <p
            className="
              text-[#FCBC14]
              text-sm
              font-semibold
              mb-2
            "
          >
            ADMIN DASHBOARD
          </p>

          <h1
            className="
              text-2xl sm:text-3xl
              font-bold
              mb-2
            "
          >
            Welcome to Book My Problem
          </h1>

          <p
            className="
              text-gray-300
              text-sm sm:text-base
              max-w-2xl
            "
          >
            Manage professionals, customers,
            projects, payments and all your
            platform activities from one place.
          </p>

          <button
            type="button"
            onClick={() =>
              handleNavigation("/admin/projects")
            }
            className="
              mt-5
              inline-flex
              items-center
              gap-2
              bg-[#FCBC14]
              text-[#072144]
              px-5
              py-2.5
              rounded-lg
              font-semibold
              text-sm
              hover:bg-yellow-400
              transition
            "
          >
            View Projects
            <FaArrowRight />
          </button>

        </div>

        {/* Decorative Circle */}

        <div
          className="
            absolute
            -right-10
            -top-10
            w-48
            h-48
            rounded-full
            bg-white/5
          "
        />

        <div
          className="
            absolute
            right-10
            -bottom-20
            w-60
            h-60
            rounded-full
            bg-white/5
          "
        />

      </div>

      {/* =====================================================
          STATS
      ====================================================== */}

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-5
          gap-4
          mb-8
        "
      >
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="
              bg-white
              rounded-xl
              p-5
              border border-gray-100
              shadow-sm
              hover:shadow-md
              transition
            "
          >

            <div
              className="
                flex
                items-center
                justify-between
                mb-4
              "
            >
              <div
                className="
                  w-11
                  h-11
                  rounded-lg
                  bg-[#072144]/10
                  text-[#072144]
                  flex
                  items-center
                  justify-center
                  text-lg
                "
              >
                {stat.icon}
              </div>
            </div>

            <p className="text-sm text-gray-500 mb-1">
              {stat.title}
            </p>

            <h3
              className="
                text-xl
                font-bold
                text-[#072144]
              "
            >
              {stat.value}
            </h3>

            <p className="text-xs text-gray-400 mt-1">
              {stat.description}
            </p>

          </div>
        ))}
      </div>

      {/* =====================================================
          QUICK ACTIONS
      ====================================================== */}

      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-6
          mb-8
        "
      >

        {/* ================= ADD PROFESSIONAL ================= */}

        <div
          className="
            bg-white
            rounded-xl
            border border-gray-100
            shadow-sm
            p-6
          "
        >

          <div className="flex items-center gap-4 mb-4">

            <div
              className="
                w-12
                h-12
                rounded-xl
                bg-[#072144]
                text-white
                flex
                items-center
                justify-center
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
              w-full
              flex
              items-center
              justify-center
              gap-2
              bg-[#072144]
              text-white
              py-2.5
              rounded-lg
              text-sm
              font-semibold
              hover:bg-[#0b315f]
              transition
            "
          >
            <FaPlus />
            Add Professional
          </button>

        </div>

        {/* ================= CREATE PROJECT ================= */}

        <div
          className="
            bg-white
            rounded-xl
            border border-gray-100
            shadow-sm
            p-6
          "
        >

          <div className="flex items-center gap-4 mb-4">

            <div
              className="
                w-12
                h-12
                rounded-xl
                bg-[#FCBC14]
                text-[#072144]
                flex
                items-center
                justify-center
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
              w-full
              flex
              items-center
              justify-center
              gap-2
              bg-[#FCBC14]
              text-[#072144]
              py-2.5
              rounded-lg
              text-sm
              font-semibold
              hover:bg-yellow-400
              transition
            "
          >
            <FaPlus />
            Create Project
          </button>

        </div>

        {/* ================= REPORTS ================= */}

        <div
          className="
            bg-white
            rounded-xl
            border border-gray-100
            shadow-sm
            p-6
          "
        >

          <div className="flex items-center gap-4 mb-4">

            <div
              className="
                w-12
                h-12
                rounded-xl
                bg-green-100
                text-green-600
                flex
                items-center
                justify-center
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
              handleNavigation(
                "/admin/reports"
              )
            }
            className="
              w-full
              flex
              items-center
              justify-center
              gap-2
              bg-gray-100
              text-[#072144]
              py-2.5
              rounded-lg
              text-sm
              font-semibold
              hover:bg-gray-200
              transition
            "
          >
            View Reports
            <FaArrowRight />
          </button>

        </div>

      </div>

      {/* =====================================================
          RECENT PROJECTS
      ====================================================== */}

      <div
        className="
          bg-white
          rounded-xl
          border border-gray-100
          shadow-sm
          overflow-hidden
        "
      >

        {/* HEADER */}

        <div
          className="
            p-5 sm:p-6
            border-b border-gray-100
            flex
            items-center
            justify-between
            gap-4
          "
        >

          <div>
            <h2
              className="
                text-lg
                font-bold
                text-[#072144]
              "
            >
              Recent Projects
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Latest projects added to the platform
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              handleNavigation(
                "/admin/projects"
              )
            }
            className="
              flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-[#072144]
              hover:text-[#FCBC14]
              transition
            "
          >
            View All
            <FaArrowRight />
          </button>

        </div>

        {/* ================= DESKTOP TABLE ================= */}

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

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        text-sm
                        text-gray-600
                      "
                    >
                      <FaMapMarkerAlt className="text-[#FCBC14]" />

                      {project.location}
                    </div>

                  </td>

                  <td className="px-6 py-4">

                    <span
                      className={`
                        inline-flex
                        px-3
                        py-1
                        rounded-full
                        text-xs
                        font-semibold
                        ${getStatusClass(
                          project.status
                        )}
                      `}
                    >
                      {project.status}
                    </span>

                  </td>

                  <td
                    className="
                      px-6
                      py-4
                      font-semibold
                      text-[#072144]
                    "
                  >
                    {project.amount}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

        {/* ================= MOBILE PROJECTS ================= */}

        <div className="md:hidden divide-y divide-gray-100">

          {recentProjects.map((project) => (
            <div
              key={project.id}
              className="p-5"
            >

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
                    h-fit
                    px-2.5
                    py-1
                    rounded-full
                    text-xs
                    font-semibold
                    ${getStatusClass(
                      project.status
                    )}
                  `}
                >
                  {project.status}
                </span>

              </div>

              <p className="text-sm text-gray-600 mb-2">
                {project.customer}
              </p>

              <div className="flex items-center justify-between">

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-gray-500
                  "
                >
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

      {/* =====================================================
          PAYMENT + LOCATIONS
      ====================================================== */}

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
          mt-6
        "
      >

        {/* ================= PAYMENT SUMMARY ================= */}

        <div
          className="
            bg-white
            rounded-xl
            border border-gray-100
            shadow-sm
            p-6
          "
        >

          <div className="flex items-center gap-3 mb-5">

            <div
              className="
                w-11
                h-11
                rounded-lg
                bg-green-100
                text-green-600
                flex
                items-center
                justify-center
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

        {/* ================= SERVICE LOCATIONS ================= */}

        <div
          className="
            bg-white
            rounded-xl
            border border-gray-100
            shadow-sm
            p-6
          "
        >

          <div className="flex items-center gap-3 mb-5">

            <div
              className="
                w-11
                h-11
                rounded-lg
                bg-[#FCBC14]/20
                text-[#072144]
                flex
                items-center
                justify-center
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
                  flex
                  items-center
                  gap-2
                  bg-gray-50
                  rounded-lg
                  px-3
                  py-2.5
                  text-sm
                  text-gray-600
                "
              >

                <FaMapMarkerAlt
                  className="
                    text-[#FCBC14]
                    text-xs
                  "
                />

                {city}

              </div>
            ))}

          </div>

        </div>

      </div>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <div
        className="
          mt-8
          pt-6
          border-t border-gray-200
          text-center
        "
      >
        <p className="text-sm text-gray-500">
          © 2026 Book My Problem. Admin Panel.
        </p>
      </div>

    </div>
  );
};

export default AdminDashboard;