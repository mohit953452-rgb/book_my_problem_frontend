
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaArrowLeft,
  FaHistory,
  FaUser,
  FaSearch,
  FaFilter,
  FaSignInAlt,
  FaSignOutAlt,
  FaEdit,
  FaPlus,
  FaTrash,
  FaUserCheck,
  FaCreditCard,
  FaUserTie,
  FaClipboardList,
  FaClock,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";


// ======================================================
// STORAGE KEY
// ======================================================

const ACTIVITY_STORAGE_KEY =
  "bookmyproblem_staff_activity";


// ======================================================
// DEMO ACTIVITIES
// ======================================================

const demoActivities = [
  {
    id: "ACT-1001",
    staffId: "STF-1001",
    staffName: "Rahul Sharma",
    role: "Support Staff",
    action: "Customer enquiry updated",
    description:
      "Updated enquiry details for customer Ram Bahadur.",
    module: "Enquiries",
    type: "edit",
    status: "success",
    ipAddress: "192.168.1.20",
    location: "Kathmandu",
    createdAt: "2026-09-30T09:15:00",
  },

  {
    id: "ACT-1002",
    staffId: "STF-1002",
    staffName: "Amit Singh",
    role: "Manager",
    action: "Order assigned",
    description:
      "Assigned order BMP-REQ-1005 to a professional.",
    module: "Orders",
    type: "assign",
    status: "success",
    ipAddress: "192.168.1.21",
    location: "Lalitpur",
    createdAt: "2026-09-30T08:45:00",
  },

  {
    id: "ACT-1003",
    staffId: "STF-1003",
    staffName: "Sita Thapa",
    role: "Accountant",
    action: "Payment updated",
    description:
      "Updated payment status for order BMP-REQ-1003.",
    module: "Payments",
    type: "payment",
    status: "success",
    ipAddress: "192.168.1.25",
    location: "Bhaktapur",
    createdAt: "2026-09-29T17:30:00",
  },

  {
    id: "ACT-1004",
    staffId: "STF-1004",
    staffName: "Ramesh Kumar",
    role: "Operations Staff",
    action: "Professional assigned",
    description:
      "Assigned a plumbing professional to project BMP-1024.",
    module: "Professionals",
    type: "professional",
    status: "success",
    ipAddress: "192.168.1.31",
    location: "Pokhara",
    createdAt: "2026-09-29T15:20:00",
  },

  {
    id: "ACT-1005",
    staffId: "STF-1001",
    staffName: "Rahul Sharma",
    role: "Support Staff",
    action: "Logged in",
    description:
      "Staff member successfully logged into the admin panel.",
    module: "Authentication",
    type: "login",
    status: "success",
    ipAddress: "192.168.1.20",
    location: "Kathmandu",
    createdAt: "2026-09-29T09:05:00",
  },

  {
    id: "ACT-1006",
    staffId: "STF-1005",
    staffName: "Anita Joshi",
    role: "Support Staff",
    action: "Customer created",
    description:
      "Created a new customer account.",
    module: "Customers",
    type: "create",
    status: "success",
    ipAddress: "192.168.1.42",
    location: "Chitwan",
    createdAt: "2026-09-28T14:10:00",
  },

  {
    id: "ACT-1007",
    staffId: "STF-1002",
    staffName: "Amit Singh",
    role: "Manager",
    action: "Project updated",
    description:
      "Updated project status from Pending to Confirmed.",
    module: "Projects",
    type: "edit",
    status: "success",
    ipAddress: "192.168.1.21",
    location: "Lalitpur",
    createdAt: "2026-09-28T11:35:00",
  },

  {
    id: "ACT-1008",
    staffId: "STF-1003",
    staffName: "Sita Thapa",
    role: "Accountant",
    action: "Exported report",
    description:
      "Exported monthly payment report.",
    module: "Reports",
    type: "report",
    status: "success",
    ipAddress: "192.168.1.25",
    location: "Bhaktapur",
    createdAt: "2026-09-27T16:40:00",
  },

  {
    id: "ACT-1009",
    staffId: "STF-1004",
    staffName: "Ramesh Kumar",
    role: "Operations Staff",
    action: "Order status updated",
    description:
      "Updated service request status to In Progress.",
    module: "Orders",
    type: "edit",
    status: "success",
    ipAddress: "192.168.1.31",
    location: "Pokhara",
    createdAt: "2026-09-27T13:25:00",
  },

  {
    id: "ACT-1010",
    staffId: "STF-1005",
    staffName: "Anita Joshi",
    role: "Support Staff",
    action: "Logged out",
    description:
      "Staff member logged out from the admin panel.",
    module: "Authentication",
    type: "logout",
    status: "success",
    ipAddress: "192.168.1.42",
    location: "Chitwan",
    createdAt: "2026-09-26T18:05:00",
  },
];


// ======================================================
// LOAD ACTIVITIES
// ======================================================

const getSavedActivities = () => {
  try {
    const saved =
      localStorage.getItem(
        ACTIVITY_STORAGE_KEY
      );

    if (!saved) {
      return demoActivities;
    }

    const parsed =
      JSON.parse(saved);

    if (!Array.isArray(parsed)) {
      return demoActivities;
    }

    return parsed;
  } catch (error) {
    console.error(
      "Staff activity load error:",
      error
    );

    return demoActivities;
  }
};


// ======================================================
// FORMAT DATE
// ======================================================

const formatDateTime = (dateValue) => {
  if (!dateValue) {
    return "Unknown";
  }

  const date =
    new Date(dateValue);

  if (Number.isNaN(date.getTime())) {
    return "Unknown";
  }

  return date.toLocaleString(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }
  );
};


// ======================================================
// ACTIVITY ICON
// ======================================================

const getActivityIcon = (
  type
) => {
  switch (type) {
    case "login":
      return <FaSignInAlt />;

    case "logout":
      return <FaSignOutAlt />;

    case "create":
      return <FaPlus />;

    case "delete":
      return <FaTrash />;

    case "assign":
      return <FaUserCheck />;

    case "payment":
      return <FaCreditCard />;

    case "professional":
      return <FaUserTie />;

    case "report":
      return <FaClipboardList />;

    case "edit":
    default:
      return <FaEdit />;
  }
};


// ======================================================
// ACTIVITY ICON STYLE
// ======================================================

const getActivityIconStyle = (
  type
) => {
  switch (type) {
    case "login":
      return "bg-green-50 text-green-600";

    case "logout":
      return "bg-gray-100 text-gray-600";

    case "create":
      return "bg-blue-50 text-blue-600";

    case "delete":
      return "bg-red-50 text-red-600";

    case "assign":
      return "bg-purple-50 text-purple-600";

    case "payment":
      return "bg-yellow-50 text-yellow-600";

    case "professional":
      return "bg-indigo-50 text-indigo-600";

    case "report":
      return "bg-orange-50 text-orange-600";

    case "edit":
    default:
      return "bg-cyan-50 text-cyan-600";
  }
};


// ======================================================
// MAIN COMPONENT
// ======================================================

const StaffActivity = () => {

  // ----------------------------------------------------
  // ACTIVITIES
  // ----------------------------------------------------

  const [activities] =
    useState(getSavedActivities);


  // ----------------------------------------------------
  // SEARCH
  // ----------------------------------------------------

  const [searchTerm, setSearchTerm] =
    useState("");


  // ----------------------------------------------------
  // STAFF FILTER
  // ----------------------------------------------------

  const [staffFilter, setStaffFilter] =
    useState("all");


  // ----------------------------------------------------
  // MODULE FILTER
  // ----------------------------------------------------

  const [moduleFilter, setModuleFilter] =
    useState("all");


  // ----------------------------------------------------
  // TYPE FILTER
  // ----------------------------------------------------

  const [typeFilter, setTypeFilter] =
    useState("all");


  // ====================================================
  // UNIQUE STAFF
  // ====================================================

  const staffList = useMemo(() => {

    const map =
      new Map();

    activities.forEach(
      (activity) => {
        map.set(
          activity.staffId,
          activity.staffName
        );
      }
    );

    return Array.from(
      map.entries()
    ).map(
      ([id, name]) => ({
        id,
        name,
      })
    );

  }, [activities]);


  // ====================================================
  // UNIQUE MODULES
  // ====================================================

  const moduleList = useMemo(() => {

    return [
      ...new Set(
        activities.map(
          (activity) =>
            activity.module
        )
      ),
    ];

  }, [activities]);


  // ====================================================
  // FILTER ACTIVITIES
  // ====================================================

  const filteredActivities =
    useMemo(() => {

      const search =
        searchTerm
          .trim()
          .toLowerCase();

      return activities
        .filter(
          (activity) => {

            const matchesSearch =
              !search ||
              activity.staffName
                ?.toLowerCase()
                .includes(search) ||
              activity.action
                ?.toLowerCase()
                .includes(search) ||
              activity.description
                ?.toLowerCase()
                .includes(search) ||
              activity.module
                ?.toLowerCase()
                .includes(search) ||
              activity.staffId
                ?.toLowerCase()
                .includes(search);

            const matchesStaff =
              staffFilter === "all" ||
              activity.staffId ===
                staffFilter;

            const matchesModule =
              moduleFilter === "all" ||
              activity.module ===
                moduleFilter;

            const matchesType =
              typeFilter === "all" ||
              activity.type ===
                typeFilter;

            return (
              matchesSearch &&
              matchesStaff &&
              matchesModule &&
              matchesType
            );
          }
        )
        .sort(
          (a, b) =>
            new Date(
              b.createdAt
            ) -
            new Date(
              a.createdAt
            )
        );

    }, [
      activities,
      searchTerm,
      staffFilter,
      moduleFilter,
      typeFilter,
    ]);


  // ====================================================
  // STATS
  // ====================================================

  const totalActivities =
    activities.length;

  const loginActivities =
    activities.filter(
      (activity) =>
        activity.type ===
        "login"
    ).length;

  const orderActivities =
    activities.filter(
      (activity) =>
        activity.module ===
        "Orders"
    ).length;

  const paymentActivities =
    activities.filter(
      (activity) =>
        activity.module ===
        "Payments"
    ).length;


  // ====================================================
  // RESET FILTERS
  // ====================================================

  const resetFilters = () => {

    setSearchTerm("");

    setStaffFilter("all");

    setModuleFilter("all");

    setTypeFilter("all");
  };


  // ====================================================
  // RENDER
  // ====================================================

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">

      <div className="max-w-7xl mx-auto">


        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="mb-8">

          <Link
            to="/admin/staff"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#072144] transition mb-5"
          >
            <FaArrowLeft />
            Back to Staff Management
          </Link>


          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

            <div>

              <h1 className="text-2xl sm:text-3xl font-bold text-[#072144]">
                Staff Activity
              </h1>

              <p className="text-gray-500 mt-2">
                Monitor staff actions and admin panel activity.
              </p>

            </div>


            <div className="inline-flex items-center gap-2 px-4 py-3 bg-white border border-gray-100 rounded-xl shadow-sm text-sm text-gray-600 w-fit">

              <FaHistory className="text-[#FCBC14]" />

              Activity Log

            </div>

          </div>

        </div>


        {/* ==================================================
            STATS
        ================================================== */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">


          {/* TOTAL */}

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-gray-500">
                  Total Activities
                </p>

                <h2 className="text-2xl font-bold text-[#072144] mt-1">
                  {totalActivities}
                </h2>

              </div>


              <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <FaHistory />
              </div>

            </div>

          </div>


          {/* LOGINS */}

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-gray-500">
                  Login Activities
                </p>

                <h2 className="text-2xl font-bold text-[#072144] mt-1">
                  {loginActivities}
                </h2>

              </div>


              <div className="w-11 h-11 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                <FaSignInAlt />
              </div>

            </div>

          </div>


          {/* ORDERS */}

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-gray-500">
                  Order Activities
                </p>

                <h2 className="text-2xl font-bold text-[#072144] mt-1">
                  {orderActivities}
                </h2>

              </div>


              <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <FaClipboardList />
              </div>

            </div>

          </div>


          {/* PAYMENTS */}

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-gray-500">
                  Payment Activities
                </p>

                <h2 className="text-2xl font-bold text-[#072144] mt-1">
                  {paymentActivities}
                </h2>

              </div>


              <div className="w-11 h-11 rounded-xl bg-yellow-50 text-yellow-600 flex items-center justify-center">
                <FaCreditCard />
              </div>

            </div>

          </div>

        </div>


        {/* ==================================================
            FILTERS
        ================================================== */}

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-6">

          <div className="flex items-center gap-2 mb-5">

            <FaFilter className="text-[#FCBC14]" />

            <h2 className="font-bold text-[#072144]">
              Filter Activity
            </h2>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">


            {/* SEARCH */}

            <div className="relative">

              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

              <input
                type="text"
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(
                    event.target.value
                  )
                }
                placeholder="Search activity..."
                className="w-full pl-9 pr-3 py-3 rounded-lg border border-gray-200 text-sm outline-none focus:border-[#FCBC14] focus:ring-2 focus:ring-[#FCBC14]/20"
              />

            </div>


            {/* STAFF */}

            <select
              value={staffFilter}
              onChange={(event) =>
                setStaffFilter(
                  event.target.value
                )
              }
              className="w-full px-3 py-3 rounded-lg border border-gray-200 text-sm text-gray-700 outline-none focus:border-[#FCBC14]"
            >

              <option value="all">
                All Staff
              </option>

              {staffList.map(
                (staff) => (
                  <option
                    key={staff.id}
                    value={staff.id}
                  >
                    {staff.name}
                  </option>
                )
              )}

            </select>


            {/* MODULE */}

            <select
              value={moduleFilter}
              onChange={(event) =>
                setModuleFilter(
                  event.target.value
                )
              }
              className="w-full px-3 py-3 rounded-lg border border-gray-200 text-sm text-gray-700 outline-none focus:border-[#FCBC14]"
            >

              <option value="all">
                All Modules
              </option>

              {moduleList.map(
                (module) => (
                  <option
                    key={module}
                    value={module}
                  >
                    {module}
                  </option>
                )
              )}

            </select>


            {/* TYPE */}

            <select
              value={typeFilter}
              onChange={(event) =>
                setTypeFilter(
                  event.target.value
                )
              }
              className="w-full px-3 py-3 rounded-lg border border-gray-200 text-sm text-gray-700 outline-none focus:border-[#FCBC14]"
            >

              <option value="all">
                All Actions
              </option>

              <option value="login">
                Login
              </option>

              <option value="logout">
                Logout
              </option>

              <option value="create">
                Create
              </option>

              <option value="edit">
                Edit / Update
              </option>

              <option value="assign">
                Assignment
              </option>

              <option value="payment">
                Payment
              </option>

              <option value="professional">
                Professional
              </option>

              <option value="report">
                Report
              </option>

              <option value="delete">
                Delete
              </option>

            </select>

          </div>


          {/* RESET */}

          {(searchTerm ||
            staffFilter !== "all" ||
            moduleFilter !== "all" ||
            typeFilter !== "all") && (

            <button
              type="button"
              onClick={resetFilters}
              className="mt-4 text-sm font-semibold text-[#072144] hover:text-[#FCBC14] transition"
            >
              Reset Filters
            </button>

          )}

        </div>


        {/* ==================================================
            ACTIVITY LIST
        ================================================== */}

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">


          {/* HEADER */}

          <div className="px-5 sm:px-6 py-5 border-b border-gray-100">

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

              <div>

                <h2 className="text-xl font-bold text-[#072144]">
                  Activity History
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {filteredActivities.length} activity
                  {filteredActivities.length !== 1
                    ? "ies"
                    : ""}{" "}
                  found
                </p>

              </div>

            </div>

          </div>


          {/* DESKTOP TABLE */}

          <div className="hidden lg:block overflow-x-auto">

            <table className="w-full">

              <thead className="bg-gray-50 border-b border-gray-100">

                <tr>

                  <th className="text-left px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wide">
                    Staff
                  </th>

                  <th className="text-left px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wide">
                    Activity
                  </th>

                  <th className="text-left px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wide">
                    Module
                  </th>

                  <th className="text-left px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wide">
                    Location
                  </th>

                  <th className="text-left px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wide">
                    Date & Time
                  </th>

                </tr>

              </thead>


              <tbody className="divide-y divide-gray-100">

                {filteredActivities.length === 0 ? (

                  <tr>

                    <td
                      colSpan="5"
                      className="px-6 py-14 text-center"
                    >

                      <FaHistory className="mx-auto text-gray-300 text-4xl" />

                      <h3 className="font-bold text-[#072144] mt-4">
                        No activity found
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        Try changing your filters.
                      </p>

                    </td>

                  </tr>

                ) : (

                  filteredActivities.map(
                    (activity) => (

                      <tr
                        key={activity.id}
                        className="hover:bg-gray-50 transition"
                      >

                        {/* STAFF */}

                        <td className="px-6 py-5">

                          <div className="flex items-center gap-3">

                            <div className="w-10 h-10 rounded-full bg-[#072144] text-[#FCBC14] flex items-center justify-center flex-shrink-0">
                              <FaUser />
                            </div>


                            <div>

                              <p className="font-semibold text-[#072144]">
                                {activity.staffName}
                              </p>

                              <p className="text-xs text-gray-500 mt-1">
                                {activity.staffId}
                              </p>

                              <p className="text-xs text-gray-400 mt-0.5">
                                {activity.role}
                              </p>

                            </div>

                          </div>

                        </td>


                        {/* ACTIVITY */}

                        <td className="px-6 py-5">

                          <div className="flex items-start gap-3">

                            <div
                              className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${getActivityIconStyle(
                                activity.type
                              )}`}
                            >
                              {getActivityIcon(
                                activity.type
                              )}
                            </div>


                            <div>

                              <p className="font-semibold text-[#072144]">
                                {activity.action}
                              </p>

                              <p className="text-sm text-gray-500 mt-1 max-w-md">
                                {activity.description}
                              </p>

                            </div>

                          </div>

                        </td>


                        {/* MODULE */}

                        <td className="px-6 py-5">

                          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold">
                            {activity.module}
                          </span>

                        </td>


                        {/* LOCATION */}

                        <td className="px-6 py-5">

                          <div className="text-sm text-gray-600">

                            <div className="flex items-center gap-2">

                              <FaMapMarkerAlt className="text-gray-400" />

                              {activity.location ||
                                "Unknown"}

                            </div>

                            <p className="text-xs text-gray-400 mt-1">
                              IP:{" "}
                              {activity.ipAddress ||
                                "N/A"}
                            </p>

                          </div>

                        </td>


                        {/* DATE */}

                        <td className="px-6 py-5">

                          <div className="flex items-start gap-2 text-sm text-gray-600">

                            <FaClock className="text-gray-400 mt-0.5" />

                            <span>
                              {formatDateTime(
                                activity.createdAt
                              )}
                            </span>

                          </div>

                        </td>

                      </tr>

                    )
                  )

                )}

              </tbody>

            </table>

          </div>


          {/* ==================================================
              MOBILE / TABLET CARDS
          ================================================== */}

          <div className="lg:hidden divide-y divide-gray-100">

            {filteredActivities.length === 0 ? (

              <div className="px-5 py-14 text-center">

                <FaHistory className="mx-auto text-gray-300 text-4xl" />

                <h3 className="font-bold text-[#072144] mt-4">
                  No activity found
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Try changing your filters.
                </p>

              </div>

            ) : (

              filteredActivities.map(
                (activity) => (

                  <div
                    key={activity.id}
                    className="p-5"
                  >

                    {/* TOP */}

                    <div className="flex items-start gap-3">

                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${getActivityIconStyle(
                          activity.type
                        )}`}
                      >
                        {getActivityIcon(
                          activity.type
                        )}
                      </div>


                      <div className="min-w-0 flex-1">

                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">

                          <div>

                            <h3 className="font-bold text-[#072144]">
                              {activity.action}
                            </h3>

                            <p className="text-sm text-gray-500 mt-1">
                              {activity.description}
                            </p>

                          </div>


                          <span className="inline-flex items-center gap-1.5 text-xs text-gray-500 whitespace-nowrap">

                            <FaClock />

                            {formatDateTime(
                              activity.createdAt
                            )}

                          </span>

                        </div>


                        {/* STAFF */}

                        <div className="mt-4 flex flex-wrap items-center gap-2">

                          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#072144] text-white text-xs font-semibold">

                            <FaUser />

                            {activity.staffName}

                          </span>


                          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold">
                            {activity.staffId}
                          </span>


                          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold">
                            {activity.role}
                          </span>


                          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                            {activity.module}
                          </span>

                        </div>


                        {/* DETAILS */}

                        <div className="grid sm:grid-cols-2 gap-3 mt-4">

                          <div className="bg-gray-50 rounded-lg p-3">

                            <p className="text-xs text-gray-400">
                              Location
                            </p>

                            <p className="text-sm font-semibold text-gray-700 mt-1 flex items-center gap-2">

                              <FaMapMarkerAlt className="text-gray-400" />

                              {activity.location ||
                                "Unknown"}

                            </p>

                          </div>


                          <div className="bg-gray-50 rounded-lg p-3">

                            <p className="text-xs text-gray-400">
                              IP Address
                            </p>

                            <p className="text-sm font-semibold text-gray-700 mt-1">
                              {activity.ipAddress ||
                                "N/A"}
                            </p>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                )
              )

            )}

          </div>

        </div>


        {/* ==================================================
            SECURITY NOTE
        ================================================== */}

        <div className="mt-6 bg-green-50 border border-green-100 rounded-2xl p-5">

          <div className="flex items-start gap-3">

            <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />

            <div>

              <h3 className="font-bold text-green-800">
                Activity Monitoring
              </h3>

              <p className="text-sm text-green-700 mt-1 leading-6">
                This activity page is currently using frontend
                localStorage data for the prototype. In the
                production version, staff activity should be
                recorded by the backend with authenticated
                user identity, timestamps and server-side
                audit logs.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default StaffActivity;

