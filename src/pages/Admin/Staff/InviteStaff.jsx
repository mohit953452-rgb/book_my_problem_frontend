
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaArrowLeft,
  FaEnvelope,
  FaPhone,
  FaUser,
  FaShieldAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaInfoCircle,
} from "react-icons/fa";

import {
  DEFAULT_ROLES,
  PERMISSIONS,
} from "../../../utils/permissions";


// ======================================================
// STORAGE KEY
// ======================================================

const STAFF_STORAGE_KEY =
  "bookmyproblem_staff";


// ======================================================
// INITIAL FORM
// ======================================================

const initialForm = {
  name: "",
  email: "",
  phone: "",
  role: "support_staff",
};


// ======================================================
// ROLE PERMISSION LABELS
// ======================================================

const permissionLabels = {

  [PERMISSIONS.DASHBOARD_VIEW]:
    "View Dashboard",

  [PERMISSIONS.ORDERS_VIEW]:
    "View Orders",

  [PERMISSIONS.ORDERS_CREATE]:
    "Create Orders",

  [PERMISSIONS.ORDERS_EDIT]:
    "Edit Orders",

  [PERMISSIONS.ORDERS_DELETE]:
    "Delete Orders",

  [PERMISSIONS.ORDERS_ASSIGN]:
    "Assign Orders",

  [PERMISSIONS.CUSTOMERS_VIEW]:
    "View Customers",

  [PERMISSIONS.CUSTOMERS_CREATE]:
    "Create Customers",

  [PERMISSIONS.CUSTOMERS_EDIT]:
    "Edit Customers",

  [PERMISSIONS.CUSTOMERS_DELETE]:
    "Delete Customers",

  [PERMISSIONS.ENQUIRIES_VIEW]:
    "View Enquiries",

  [PERMISSIONS.ENQUIRIES_MANAGE]:
    "Manage Enquiries",

  [PERMISSIONS.PROFESSIONALS_VIEW]:
    "View Professionals",

  [PERMISSIONS.PROFESSIONALS_CREATE]:
    "Create Professionals",

  [PERMISSIONS.PROFESSIONALS_EDIT]:
    "Edit Professionals",

  [PERMISSIONS.PROFESSIONALS_DELETE]:
    "Delete Professionals",

  [PERMISSIONS.PROFESSIONALS_ASSIGN]:
    "Assign Professionals",

  [PERMISSIONS.PAYMENTS_VIEW]:
    "View Payments",

  [PERMISSIONS.PAYMENTS_MANAGE]:
    "Manage Payments",

  [PERMISSIONS.PAYMENTS_REFUND]:
    "Process Refunds",

  [PERMISSIONS.REPORTS_VIEW]:
    "View Reports",

  [PERMISSIONS.REPORTS_EXPORT]:
    "Export Reports",

  [PERMISSIONS.NOTIFICATIONS_VIEW]:
    "View Notifications",

  [PERMISSIONS.NOTIFICATIONS_MANAGE]:
    "Manage Notifications",

  [PERMISSIONS.STAFF_VIEW]:
    "View Staff",

  [PERMISSIONS.STAFF_INVITE]:
    "Invite Staff",

  [PERMISSIONS.STAFF_EDIT]:
    "Edit Staff",

  [PERMISSIONS.STAFF_DELETE]:
    "Delete Staff",

  [PERMISSIONS.ROLES_VIEW]:
    "View Roles",

  [PERMISSIONS.ROLES_CREATE]:
    "Create Roles",

  [PERMISSIONS.ROLES_EDIT]:
    "Edit Roles",

  [PERMISSIONS.ROLES_DELETE]:
    "Delete Roles",

  [PERMISSIONS.SETTINGS_VIEW]:
    "View Settings",

  [PERMISSIONS.SETTINGS_MANAGE]:
    "Manage Settings",
};


// ======================================================
// ROLE LABEL
// ======================================================

const getRoleLabel = (role) => {
  const roleData = Object.values(
    DEFAULT_ROLES
  ).find(
    (item) => item.id === role
  );

  return (
    roleData?.name ||
    role ||
    "Staff"
  );
};


// ======================================================
// GET SAVED STAFF
// ======================================================

const getSavedStaff = () => {
  try {
    const savedStaff =
      localStorage.getItem(
        STAFF_STORAGE_KEY
      );

    if (!savedStaff) {
      return [];
    }

    const parsedStaff =
      JSON.parse(savedStaff);

    return Array.isArray(parsedStaff)
      ? parsedStaff
      : [];
  } catch (error) {
    console.error(
      "Staff load error:",
      error
    );

    return [];
  }
};


// ======================================================
// GENERATE STAFF ID
// ======================================================

const generateStaffId = () => {
  const staff = getSavedStaff();

  let maxNumber = 1000;

  staff.forEach((item) => {
    const match = String(
      item.id || ""
    ).match(/STF-(\d+)/);

    if (match) {
      const number =
        Number(match[1]);

      if (number > maxNumber) {
        maxNumber = number;
      }
    }
  });

  return `STF-${maxNumber + 1}`;
};


// ======================================================
// MAIN COMPONENT
// ======================================================

const InviteStaff = () => {
  const navigate = useNavigate();

  const [form, setForm] =
    useState(initialForm);

  const [errors, setErrors] =
    useState({});

  const [success, setSuccess] =
    useState(false);

  const [isSubmitting, setIsSubmitting] =
    useState(false);


  // ====================================================
  // CURRENT ROLE DATA
  // ====================================================

  const selectedRole =
    Object.values(DEFAULT_ROLES).find(
      (role) =>
        role.id === form.role
    );

  const selectedPermissions =
    selectedRole?.permissions || [];


  // ====================================================
  // HANDLE INPUT
  // ====================================================

  const handleChange = (event) => {
    const {
      name,
      value,
    } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }));
  };


  // ====================================================
  // VALIDATION
  // ====================================================

  const validateForm = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name =
        "Full name is required.";
    }

    if (!form.email.trim()) {
      newErrors.email =
        "Email address is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        form.email
      )
    ) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    if (!form.phone.trim()) {
      newErrors.phone =
        "Phone number is required.";
    } else if (
      !/^[0-9+\-\s]{7,15}$/.test(
        form.phone
      )
    ) {
      newErrors.phone =
        "Please enter a valid phone number.";
    }

    if (!form.role) {
      newErrors.role =
        "Please select a role.";
    }

    return newErrors;
  };


  // ====================================================
  // SUBMIT
  // ====================================================

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors =
      validateForm();

    if (
      Object.keys(validationErrors)
        .length > 0
    ) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const existingStaff =
        getSavedStaff();

      // Check duplicate email
      const emailExists =
        existingStaff.some(
          (staff) =>
            staff.email.toLowerCase() ===
            form.email
              .trim()
              .toLowerCase()
        );

      if (emailExists) {
        setErrors({
          email:
            "A staff member with this email already exists.",
        });

        setIsSubmitting(false);
        return;
      }


      // ------------------------------------------------
      // CREATE STAFF
      // ------------------------------------------------

      const newStaff = {
        id: generateStaffId(),

        name: form.name.trim(),

        email: form.email
          .trim()
          .toLowerCase(),

        phone: form.phone.trim(),

        role: form.role,

        permissions:
          selectedPermissions,

        status: "pending",

        invitationStatus: "pending",

        invitedAt:
          new Date().toISOString(),

        joinedAt: null,
      };


      // ------------------------------------------------
      // SAVE
      // ------------------------------------------------

      const updatedStaff = [
        ...existingStaff,
        newStaff,
      ];

      localStorage.setItem(
        STAFF_STORAGE_KEY,
        JSON.stringify(
          updatedStaff
        )
      );


      // ------------------------------------------------
      // SUCCESS
      // ------------------------------------------------

      setSuccess(true);

      setForm(initialForm);

    } catch (error) {
      console.error(
        "Staff invitation error:",
        error
      );

      setErrors({
        submit:
          "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  // ====================================================
  // SUCCESS SCREEN
  // ====================================================

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">

        <div className="max-w-2xl mx-auto">

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-10 text-center">

            <div className="w-20 h-20 mx-auto rounded-full bg-green-50 flex items-center justify-center">
              <FaCheckCircle className="text-green-500 text-4xl" />
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-[#072144] mt-6">
              Invitation Created
            </h1>

            <p className="text-gray-500 mt-3 leading-6">
              Staff invitation has been created
              successfully.
            </p>

            <div className="mt-6 bg-gray-50 rounded-xl p-5 text-left">

              <div className="flex items-start gap-3">

                <FaInfoCircle className="text-[#FCBC14] mt-1 flex-shrink-0" />

                <div>
                  <p className="font-semibold text-[#072144]">
                    Invitation status
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    The staff member has been added
                    with a pending invitation status.
                    Email sending will be connected
                    when the backend/email service is
                    added.
                  </p>
                </div>

              </div>

            </div>


            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-7">

              <button
                type="button"
                onClick={() =>
                  setSuccess(false)
                }
                className="px-5 py-3 rounded-lg border border-gray-200 text-[#072144] font-semibold hover:border-[#FCBC14] transition"
              >
                Invite Another
              </button>

              <button
                type="button"
                onClick={() =>
                  navigate(
                    "/admin/staff"
                  )
                }
                className="px-5 py-3 rounded-lg bg-[#072144] text-white font-semibold hover:bg-[#FCBC14] hover:text-[#072144] transition"
              >
                View All Staff
              </button>

            </div>

          </div>

        </div>

      </div>
    );
  }


  // ====================================================
  // MAIN FORM
  // ====================================================

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">

      <div className="max-w-6xl mx-auto">

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

          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#072144]">
              Invite Staff
            </h1>

            <p className="text-gray-500 mt-2">
              Create a staff invitation and assign
              a role with predefined permissions.
            </p>
          </div>

        </div>


        {/* ==================================================
            FORM + PERMISSION PREVIEW
        ================================================== */}

        <div className="grid lg:grid-cols-[1fr_380px] gap-6">

          {/* ==================================================
              FORM
          ================================================== */}

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-7">

            <div className="flex items-center gap-3 mb-7">

              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
                <FaUser className="text-blue-600" />
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#072144]">
                  Staff Information
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  Enter the staff member's details.
                </p>
              </div>

            </div>


            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* NAME */}

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>

                <div className="relative">

                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    className={`w-full pl-11 pr-4 py-3 rounded-lg border outline-none transition ${
                      errors.name
                        ? "border-red-400 focus:ring-2 focus:ring-red-100"
                        : "border-gray-200 focus:border-[#FCBC14] focus:ring-2 focus:ring-[#FCBC14]/20"
                    }`}
                  />

                </div>

                {errors.name && (
                  <p className="text-sm text-red-500 mt-1.5">
                    {errors.name}
                  </p>
                )}

              </div>


              {/* EMAIL */}

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>

                <div className="relative">

                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="staff@example.com"
                    className={`w-full pl-11 pr-4 py-3 rounded-lg border outline-none transition ${
                      errors.email
                        ? "border-red-400 focus:ring-2 focus:ring-red-100"
                        : "border-gray-200 focus:border-[#FCBC14] focus:ring-2 focus:ring-[#FCBC14]/20"
                    }`}
                  />

                </div>

                {errors.email && (
                  <p className="text-sm text-red-500 mt-1.5">
                    {errors.email}
                  </p>
                )}

              </div>


              {/* PHONE */}

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>

                <div className="relative">

                  <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="98XXXXXXXX"
                    className={`w-full pl-11 pr-4 py-3 rounded-lg border outline-none transition ${
                      errors.phone
                        ? "border-red-400 focus:ring-2 focus:ring-red-100"
                        : "border-gray-200 focus:border-[#FCBC14] focus:ring-2 focus:ring-[#FCBC14]/20"
                    }`}
                  />

                </div>

                {errors.phone && (
                  <p className="text-sm text-red-500 mt-1.5">
                    {errors.phone}
                  </p>
                )}

              </div>


              {/* ROLE */}

              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Role
                </label>

                <div className="relative">

                  <FaShieldAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />

                  <select
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    className={`w-full pl-11 pr-4 py-3 rounded-lg border bg-white outline-none transition appearance-none ${
                      errors.role
                        ? "border-red-400 focus:ring-2 focus:ring-red-100"
                        : "border-gray-200 focus:border-[#FCBC14] focus:ring-2 focus:ring-[#FCBC14]/20"
                    }`}
                  >

                    {Object.values(
                      DEFAULT_ROLES
                    )
                      .filter(
                        (role) =>
                          role.id !==
                          "super_admin"
                      )
                      .map((role) => (
                        <option
                          key={role.id}
                          value={role.id}
                        >
                          {role.name}
                        </option>
                      ))}

                  </select>

                </div>

                {errors.role && (
                  <p className="text-sm text-red-500 mt-1.5">
                    {errors.role}
                  </p>
                )}

                {selectedRole && (
                  <p className="text-xs text-gray-500 mt-2">
                    {selectedRole.description}
                  </p>
                )}

              </div>


              {/* SUBMIT ERROR */}

              {errors.submit && (
                <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
                  {errors.submit}
                </div>
              )}


              {/* SUBMIT */}

              <div className="pt-3 flex flex-col sm:flex-row gap-3">

                <Link
                  to="/admin/staff"
                  className="w-full sm:w-auto px-6 py-3 rounded-lg border border-gray-200 text-[#072144] font-semibold text-center hover:border-[#FCBC14] transition"
                >
                  Cancel
                </Link>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#072144] text-white font-semibold hover:bg-[#FCBC14] hover:text-[#072144] transition disabled:opacity-60 disabled:cursor-not-allowed"
                >

                  <FaPaperPlane />

                  {isSubmitting
                    ? "Creating Invitation..."
                    : "Send Invitation"}

                </button>

              </div>

            </form>

          </div>


          {/* ==================================================
              PERMISSION PREVIEW
          ================================================== */}

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-7 h-fit lg:sticky lg:top-24">

            <div className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-xl bg-yellow-50 flex items-center justify-center">
                <FaShieldAlt className="text-[#FCBC14]" />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Selected Role
                </p>

                <h2 className="text-xl font-bold text-[#072144]">
                  {getRoleLabel(
                    form.role
                  )}
                </h2>
              </div>

            </div>


            <div className="border-t border-gray-100 mt-6 pt-5">

              <div className="flex items-center justify-between mb-4">

                <h3 className="font-bold text-[#072144]">
                  Permissions
                </h3>

                <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                  {selectedPermissions.includes("*")
                    ? "Full Access"
                    : `${selectedPermissions.length} Access`}
                </span>

              </div>


              {selectedPermissions.includes("*") ? (

                <div className="rounded-xl bg-green-50 border border-green-200 p-4">

                  <div className="flex gap-3">

                    <FaCheckCircle className="text-green-500 mt-0.5 flex-shrink-0" />

                    <div>
                      <p className="font-semibold text-green-700">
                        Full System Access
                      </p>

                      <p className="text-sm text-green-600 mt-1">
                        This role has access to all
                        available features and actions.
                      </p>
                    </div>

                  </div>

                </div>

              ) : (

                <div className="space-y-2 max-h-[520px] overflow-y-auto pr-1">

                  {selectedPermissions.map(
                    (permission) => (
                      <div
                        key={permission}
                        className="flex items-center gap-3 bg-gray-50 rounded-lg px-3 py-2.5"
                      >

                        <FaCheckCircle className="text-green-500 flex-shrink-0" />

                        <span className="text-sm text-gray-700">
                          {permissionLabels[
                            permission
                          ] || permission}
                        </span>

                      </div>
                    )
                  )}

                </div>

              )}

            </div>


            <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-4">

              <div className="flex gap-3">

                <FaInfoCircle className="text-blue-500 mt-0.5 flex-shrink-0" />

                <p className="text-sm text-blue-700 leading-5">
                  Staff members will only be able
                  to access the features allowed by
                  their assigned role and permissions.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default InviteStaff;

