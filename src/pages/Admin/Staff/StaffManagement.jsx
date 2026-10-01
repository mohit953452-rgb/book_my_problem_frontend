
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaUserPlus,
  FaUsers,
  FaUserCheck,
  FaUserClock,
  FaUserSlash,
  FaEdit,
  FaPowerOff,
  FaShieldAlt,
  FaSearch,
  FaFilter,
} from "react-icons/fa";


// ======================================================
// DEMO STAFF DATA
// ======================================================

const initialStaff = [
  {
    id: "STF-1001",
    name: "Rahul Sharma",
    email: "rahul@bookmyproblem.com",
    phone: "9800000001",
    role: "support_staff",
    status: "active",
    joinedAt: "2026-09-10",
  },

  {
    id: "STF-1002",
    name: "Amit Singh",
    email: "amit@bookmyproblem.com",
    phone: "9800000002",
    role: "manager",
    status: "active",
    joinedAt: "2026-09-12",
  },

  {
    id: "STF-1003",
    name: "Sita Thapa",
    email: "sita@bookmyproblem.com",
    phone: "9800000003",
    role: "accountant",
    status: "active",
    joinedAt: "2026-09-15",
  },

  {
    id: "STF-1004",
    name: "Ramesh Kumar",
    email: "ramesh@bookmyproblem.com",
    phone: "9800000004",
    role: "operations_staff",
    status: "pending",
    joinedAt: "2026-09-28",
  },

  {
    id: "STF-1005",
    name: "Anita Joshi",
    email: "anita@bookmyproblem.com",
    phone: "9800000005",
    role: "support_staff",
    status: "inactive",
    joinedAt: "2026-08-20",
  },
];


// ======================================================
// ROLE LABEL
// ======================================================

const getRoleLabel = (role) => {
  const roles = {
    super_admin: "Super Admin",
    admin: "Admin",
    manager: "Manager",
    support_staff: "Support Staff",
    operations_staff: "Operations Staff",
    accountant: "Accountant",
  };

  return roles[role] || role;
};


// ======================================================
// STATUS STYLE
// ======================================================

const getStatusClasses = (status) => {
  if (status === "active") {
    return "bg-green-50 text-green-700 border-green-200";
  }

  if (status === "pending") {
    return "bg-yellow-50 text-yellow-700 border-yellow-200";
  }

  return "bg-gray-100 text-gray-600 border-gray-200";
};


// ======================================================
// MAIN COMPONENT
// ======================================================

const StaffManagement = () => {
  const [staff, setStaff] = useState(initialStaff);

  const [searchTerm, setSearchTerm] = useState("");

  const [statusFilter, setStatusFilter] =
    useState("all");

  const [roleFilter, setRoleFilter] =
    useState("all");


  // ====================================================
  // STATISTICS
  // ====================================================

  const totalStaff = staff.length;

  const activeStaff = staff.filter(
    (item) => item.status === "active"
  ).length;

  const pendingStaff = staff.filter(
    (item) => item.status === "pending"
  ).length;

  const inactiveStaff = staff.filter(
    (item) => item.status === "inactive"
  ).length;


  // ====================================================
  // FILTER STAFF
  // ====================================================

  const filteredStaff = useMemo(() => {
    return staff.filter((item) => {

      const search =
        searchTerm.trim().toLowerCase();

      const matchesSearch =
        !search ||
        item.name
          .toLowerCase()
          .includes(search) ||
        item.email
          .toLowerCase()
          .includes(search) ||
        item.id
          .toLowerCase()
          .includes(search);

      const matchesStatus =
        statusFilter === "all" ||
        item.status === statusFilter;

      const matchesRole =
        roleFilter === "all" ||
        item.role === roleFilter;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesRole
      );
    });
  }, [
    staff,
    searchTerm,
    statusFilter,
    roleFilter,
  ]);


  // ====================================================
  // TOGGLE STAFF STATUS
  // ====================================================

  const handleToggleStatus = (staffId) => {
    setStaff((previousStaff) =>
      previousStaff.map((item) => {
        if (item.id !== staffId) {
          return item;
        }

        return {
          ...item,
          status:
            item.status === "active"
              ? "inactive"
              : "active",
        };
      })
    );
  };


  // ====================================================
  // RENDER
  // ====================================================

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">

      {/* ==================================================
          HEADER
      ================================================== */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-[#072144]">
            Staff Management
          </h1>

          <p className="text-gray-500 mt-2">
            Manage your staff members, roles and access.
          </p>
        </div>


        <div className="flex flex-wrap gap-3">

          <Link
            to="/admin/staff/activity"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#072144] font-semibold hover:border-[#FCBC14] transition"
          >
            <FaUsers />
            Staff Activity
          </Link>

          <Link
            to="/admin/staff/roles"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#072144] font-semibold hover:border-[#FCBC14] transition"
          >
            <FaShieldAlt />
            Roles & Permissions
          </Link>

          <Link
            to="/admin/staff/invite"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#072144] text-white font-semibold hover:bg-[#FCBC14] hover:text-[#072144] transition"
          >
            <FaUserPlus />
            Invite Staff
          </Link>

        </div>
      </div>


      {/* ==================================================
          STAT CARDS
      ================================================== */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">

        {/* TOTAL */}

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Total Staff
              </p>

              <h2 className="text-3xl font-bold text-[#072144] mt-2">
                {totalStaff}
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
              <FaUsers className="text-blue-600 text-xl" />
            </div>

          </div>
        </div>


        {/* ACTIVE */}

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Active Staff
              </p>

              <h2 className="text-3xl font-bold text-[#072144] mt-2">
                {activeStaff}
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
              <FaUserCheck className="text-green-600 text-xl" />
            </div>

          </div>
        </div>


        {/* PENDING */}

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Pending Invitations
              </p>

              <h2 className="text-3xl font-bold text-[#072144] mt-2">
                {pendingStaff}
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center">
              <FaUserClock className="text-yellow-600 text-xl" />
            </div>

          </div>
        </div>


        {/* INACTIVE */}

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Inactive Staff
              </p>

              <h2 className="text-3xl font-bold text-[#072144] mt-2">
                {inactiveStaff}
              </h2>
            </div>

            <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
              <FaUserSlash className="text-gray-500 text-xl" />
            </div>

          </div>
        </div>

      </div>


      {/* ==================================================
          STAFF TABLE CARD
      ================================================== */}

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

        {/* TABLE HEADER */}

        <div className="p-5 sm:p-6 border-b border-gray-100">

          <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">

            <div>
              <h2 className="text-xl font-bold text-[#072144]">
                All Staff
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Manage staff accounts and their access.
              </p>
            </div>


            {/* SEARCH */}

            <div className="relative w-full xl:w-80">

              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(
                    event.target.value
                  )
                }
                placeholder="Search staff..."
                className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-[#FCBC14] focus:ring-2 focus:ring-[#FCBC14]/20"
              />

            </div>

          </div>


          {/* FILTERS */}

          <div className="flex flex-col sm:flex-row gap-3 mt-5">

            <div className="relative">

              <FaFilter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none" />

              <select
                value={statusFilter}
                onChange={(event) =>
                  setStatusFilter(
                    event.target.value
                  )
                }
                className="appearance-none pl-9 pr-9 py-2.5 rounded-lg border border-gray-200 bg-white text-sm outline-none focus:border-[#FCBC14]"
              >
                <option value="all">
                  All Status
                </option>

                <option value="active">
                  Active
                </option>

                <option value="pending">
                  Pending
                </option>

                <option value="inactive">
                  Inactive
                </option>
              </select>

            </div>


            <select
              value={roleFilter}
              onChange={(event) =>
                setRoleFilter(
                  event.target.value
                )
              }
              className="px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm outline-none focus:border-[#FCBC14]"
            >
              <option value="all">
                All Roles
              </option>

              <option value="admin">
                Admin
              </option>

              <option value="manager">
                Manager
              </option>

              <option value="support_staff">
                Support Staff
              </option>

              <option value="operations_staff">
                Operations Staff
              </option>

              <option value="accountant">
                Accountant
              </option>
            </select>

          </div>

        </div>


        {/* ==================================================
            MOBILE STAFF CARDS
        ================================================== */}

        <div className="block lg:hidden">

          {filteredStaff.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No staff found.
            </div>
          ) : (
            <div className="divide-y divide-gray-100">

              {filteredStaff.map((item) => (

                <div
                  key={item.id}
                  className="p-5"
                >

                  <div className="flex items-start justify-between gap-4">

                    <div className="flex items-center gap-3">

                      <div className="w-11 h-11 rounded-full bg-[#072144] text-white flex items-center justify-center font-bold">
                        {item.name
                          .charAt(0)
                          .toUpperCase()}
                      </div>

                      <div>
                        <h3 className="font-semibold text-[#072144]">
                          {item.name}
                        </h3>

                        <p className="text-sm text-gray-500">
                          {item.email}
                        </p>
                      </div>

                    </div>


                    <span
                      className={`px-3 py-1 rounded-full border text-xs font-semibold capitalize ${getStatusClasses(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>

                  </div>


                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm">

                    <div>
                      <p className="text-gray-400">
                        Staff ID
                      </p>

                      <p className="font-medium text-gray-700 mt-1">
                        {item.id}
                      </p>
                    </div>

                    <div>
                      <p className="text-gray-400">
                        Role
                      </p>

                      <p className="font-medium text-gray-700 mt-1">
                        {getRoleLabel(item.role)}
                      </p>
                    </div>

                  </div>


                  <div className="flex gap-2 mt-5">

                    <button
                      type="button"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg border border-gray-200 text-[#072144] text-sm font-semibold hover:border-[#FCBC14] transition"
                    >
                      <FaEdit />
                      Edit
                    </button>

                    {item.status !== "pending" && (
                      <button
                        type="button"
                        onClick={() =>
                          handleToggleStatus(
                            item.id
                          )
                        }
                        className={`flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold ${
                          item.status === "active"
                            ? "bg-red-50 text-red-600 hover:bg-red-100"
                            : "bg-green-50 text-green-600 hover:bg-green-100"
                        }`}
                      >
                        <FaPowerOff />

                        {item.status === "active"
                          ? "Deactivate"
                          : "Activate"}
                      </button>
                    )}

                  </div>

                </div>

              ))}

            </div>
          )}

        </div>


        {/* ==================================================
            DESKTOP TABLE
        ================================================== */}

        <div className="hidden lg:block overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr className="bg-gray-50 border-b border-gray-100">

                <th className="text-left px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wide">
                  Staff
                </th>

                <th className="text-left px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wide">
                  Staff ID
                </th>

                <th className="text-left px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wide">
                  Role
                </th>

                <th className="text-left px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wide">
                  Status
                </th>

                <th className="text-left px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wide">
                  Joined
                </th>

                <th className="text-right px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wide">
                  Actions
                </th>

              </tr>
            </thead>


            <tbody className="divide-y divide-gray-100">

              {filteredStaff.length === 0 ? (

                <tr>
                  <td
                    colSpan="6"
                    className="px-6 py-12 text-center text-gray-500"
                  >
                    No staff found.
                  </td>
                </tr>

              ) : (

                filteredStaff.map((item) => (

                  <tr
                    key={item.id}
                    className="hover:bg-gray-50/70 transition"
                  >

                    {/* STAFF */}

                    <td className="px-6 py-5">

                      <div className="flex items-center gap-3">

                        <div className="w-11 h-11 rounded-full bg-[#072144] text-white flex items-center justify-center font-bold flex-shrink-0">
                          {item.name
                            .charAt(0)
                            .toUpperCase()}
                        </div>

                        <div>
                          <p className="font-semibold text-[#072144]">
                            {item.name}
                          </p>

                          <p className="text-sm text-gray-500">
                            {item.email}
                          </p>

                        </div>

                      </div>

                    </td>


                    {/* ID */}

                    <td className="px-6 py-5 text-sm font-medium text-gray-700">
                      {item.id}
                    </td>


                    {/* ROLE */}

                    <td className="px-6 py-5">

                      <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-700">

                        <FaShieldAlt className="text-[#FCBC14]" />

                        {getRoleLabel(item.role)}

                      </span>

                    </td>


                    {/* STATUS */}

                    <td className="px-6 py-5">

                      <span
                        className={`inline-flex px-3 py-1 rounded-full border text-xs font-semibold capitalize ${getStatusClasses(
                          item.status
                        )}`}
                      >
                        {item.status}
                      </span>

                    </td>


                    {/* JOINED */}

                    <td className="px-6 py-5 text-sm text-gray-600">
                      {item.joinedAt}
                    </td>


                    {/* ACTIONS */}

                    <td className="px-6 py-5">

                      <div className="flex justify-end items-center gap-2">

                        <button
                          type="button"
                          className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-[#072144] hover:border-[#FCBC14] hover:bg-yellow-50 transition"
                          title="Edit Staff"
                        >
                          <FaEdit />
                        </button>


                        {item.status !== "pending" && (
                          <button
                            type="button"
                            onClick={() =>
                              handleToggleStatus(
                                item.id
                              )
                            }
                            className={`w-9 h-9 rounded-lg flex items-center justify-center transition ${
                              item.status === "active"
                                ? "bg-red-50 text-red-500 hover:bg-red-100"
                                : "bg-green-50 text-green-600 hover:bg-green-100"
                            }`}
                            title={
                              item.status === "active"
                                ? "Deactivate"
                                : "Activate"
                            }
                          >
                            <FaPowerOff />
                          </button>
                        )}

                      </div>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default StaffManagement;

