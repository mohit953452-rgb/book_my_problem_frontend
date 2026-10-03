
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import {
  FaCog,
  FaBuilding,
  FaPhone,
  FaTools,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBell,
  FaUserShield,
  FaSave,
  FaCamera,
  FaTrash,
  FaEye,
  FaEyeSlash,
  FaLock,
  FaEnvelope,
  FaUser,
  FaBriefcase,
  FaInfoCircle,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

const AdminSettings = () => {
  const location = useLocation();

  // =====================================================
  // ACTIVE SECTION
  // /admin/profile => Admin Account
  // /admin/settings => General Settings
  // =====================================================

  const [activeSection, setActiveSection] = useState(
    location.pathname === "/admin/profile"
      ? "admin"
      : "general"
  );

  // =====================================================
  // SETTINGS
  // =====================================================

  const [settings, setSettings] = useState({
    // General
    websiteName: "Book My Problem",
    currency: "NPR",
    timezone: "Asia/Kathmandu",

    // Business
    businessName: "Book My Problem",
    businessAddress: "Kohalpur-08, Banke, Nepal",
    panVat: "",
    registrationNumber: "",

    // Contact
    phone: "+977 9868219045",
    email: "bookmyproblem999@gmail.com",
    supportEmail: "bookmyproblem999@gmail.com",

    // Payment
    tax: "13",
    paymentMethods: [
      "Cash",
      "Bank Transfer",
      "eSewa",
      "Khalti",
    ],
    advancePayment: "30",

    // Notifications
    newEnquiry: true,
    newCustomer: true,
    newProject: true,
    paymentReceived: true,

    // Admin
    adminName: "Administrator",
    adminEmail: "admin@bookmyproblem.com",
    adminPhone: "+977 9868219045",
    adminRole: "Administrator",
    adminDepartment: "Management",
    adminBio:
      "Administrator of Book My Problem. Responsible for managing projects, customers, professionals and platform operations.",
    adminPhoto: "",
  });

  // =====================================================
  // PASSWORD
  // =====================================================

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showCurrentPassword, setShowCurrentPassword] =
    useState(false);

  const [showNewPassword, setShowNewPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  // =====================================================
  // LOAD SAVED SETTINGS
  // =====================================================

  useEffect(() => {
    const savedSettings = localStorage.getItem(
      "bookmyproblem_admin_settings"
    );

    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings);

        setSettings((prev) => ({
          ...prev,
          ...parsedSettings,
        }));
      } catch (error) {
        console.error(
          "Failed to load admin settings:",
          error
        );
      }
    }
  }, []);

  // =====================================================
  // CHANGE ACTIVE SECTION WHEN URL CHANGES
  // =====================================================

  useEffect(() => {
    if (location.pathname === "/admin/profile") {
      setActiveSection("admin");
    } else if (location.pathname === "/admin/settings") {
      setActiveSection("general");
    }
  }, [location.pathname]);

  // =====================================================
  // HANDLE SETTINGS CHANGE
  // =====================================================

  const handleChange = (e) => {
    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setSettings((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  // =====================================================
  // HANDLE PASSWORD CHANGE
  // =====================================================

  const handlePasswordChange = (e) => {
    const {
      name,
      value,
    } = e.target;

    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =====================================================
  // PROFILE IMAGE UPLOAD
  // =====================================================

  const handleProfileImage = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    // Maximum 2MB
    if (file.size > 2 * 1024 * 1024) {
      alert("Profile image must be less than 2MB.");
      return;
    }

    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image.");
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      setSettings((prev) => ({
        ...prev,
        adminPhoto: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  // =====================================================
  // REMOVE PROFILE IMAGE
  // =====================================================

  const handleRemovePhoto = () => {
    setSettings((prev) => ({
      ...prev,
      adminPhoto: "",
    }));
  };

  // =====================================================
  // SAVE ALL SETTINGS
  // =====================================================

  const handleSave = () => {
    localStorage.setItem(
      "bookmyproblem_admin_settings",
      JSON.stringify(settings)
    );

    alert("Settings saved successfully!");
  };

  // =====================================================
  // SAVE ADMIN PROFILE
  // =====================================================

  const handleSaveProfile = () => {
    localStorage.setItem(
      "bookmyproblem_admin_settings",
      JSON.stringify(settings)
    );

    alert("Admin profile updated successfully!");
  };

  // =====================================================
  // CHANGE PASSWORD
  // =====================================================

  const handleChangePassword = () => {
    if (!passwordData.currentPassword) {
      alert("Please enter your current password.");
      return;
    }

    if (!passwordData.newPassword) {
      alert("Please enter a new password.");
      return;
    }

    if (passwordData.newPassword.length < 6) {
      alert(
        "New password must contain at least 6 characters."
      );
      return;
    }

    if (
      passwordData.newPassword !==
      passwordData.confirmPassword
    ) {
      alert(
        "New password and confirm password do not match."
      );
      return;
    }

    /*
      NOTE:
      This is frontend-only for now.
      Connect this function with your backend
      authentication API before production.
    */

    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

    alert("Password updated successfully!");
  };

  // =====================================================
  // SETTINGS SECTIONS
  // =====================================================

  const sections = [
    {
      id: "general",
      title: "General Settings",
      icon: <FaCog />,
    },
    {
      id: "business",
      title: "Business Information",
      icon: <FaBuilding />,
    },
    {
      id: "contact",
      title: "Contact Information",
      icon: <FaPhone />,
    },
    {
      id: "services",
      title: "Services",
      icon: <FaTools />,
    },
    {
      id: "cities",
      title: "Cities",
      icon: <FaMapMarkerAlt />,
    },
    {
      id: "payment",
      title: "Payment Settings",
      icon: <FaMoneyBillWave />,
    },
    {
      id: "notification",
      title: "Notification Settings",
      icon: <FaBell />,
    },
    {
      id: "admin",
      title: "Admin Account",
      icon: <FaUserShield />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#072144]">
          Settings
        </h1>

        <p className="text-gray-500 mt-1">
          Manage your website, business, payment and
          administrator settings.
        </p>
      </div>

      {/* =================================================
          MAIN GRID
      ================================================= */}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* =================================================
            SETTINGS SIDEBAR
        ================================================= */}

        <div className="lg:col-span-3">

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-3">

            {sections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() =>
                  setActiveSection(section.id)
                }
                className={`
                  w-full
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  rounded-xl
                  mb-1
                  text-left
                  transition-all
                  duration-200

                  ${
                    activeSection === section.id
                      ? "bg-[#FCBC14] text-[#072144] font-semibold shadow-sm"
                      : "text-gray-600 hover:bg-[#FCBC14] hover:text-[#072144]"
                  }
                `}
              >
                <span className="text-lg">
                  {section.icon}
                </span>

                <span>
                  {section.title}
                </span>
              </button>
            ))}

          </div>

        </div>

        {/* =================================================
            SETTINGS CONTENT
        ================================================= */}

        <div className="lg:col-span-9">

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-7">

            {/* =================================================
                GENERAL
            ================================================= */}

            {activeSection === "general" && (
              <div>

                <SectionHeader
                  icon={<FaCog />}
                  title="General Settings"
                  description="Basic settings for your Book My Problem website."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <Input
                    label="Website Name"
                    name="websiteName"
                    value={settings.websiteName}
                    onChange={handleChange}
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Currency
                    </label>

                    <select
                      name="currency"
                      value={settings.currency}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#FCBC14] focus:ring-2 focus:ring-[#FCBC14]/20"
                    >
                      <option value="NPR">
                        NPR - Nepalese Rupee
                      </option>

                      <option value="INR">
                        INR - Indian Rupee
                      </option>

                      <option value="USD">
                        USD - US Dollar
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Timezone
                    </label>

                    <select
                      name="timezone"
                      value={settings.timezone}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#FCBC14] focus:ring-2 focus:ring-[#FCBC14]/20"
                    >
                      <option value="Asia/Kathmandu">
                        Asia/Kathmandu
                      </option>
                    </select>
                  </div>

                </div>

              </div>
            )}

            {/* =================================================
                BUSINESS
            ================================================= */}

            {activeSection === "business" && (
              <div>

                <SectionHeader
                  icon={<FaBuilding />}
                  title="Business Information"
                  description="Manage your business details."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <Input
                    label="Business Name"
                    name="businessName"
                    value={settings.businessName}
                    onChange={handleChange}
                  />

                  <Input
                    label="PAN / VAT Number"
                    name="panVat"
                    value={settings.panVat}
                    onChange={handleChange}
                    placeholder="Enter PAN / VAT number"
                  />

                  <Input
                    label="Registration Number"
                    name="registrationNumber"
                    value={settings.registrationNumber}
                    onChange={handleChange}
                    placeholder="Enter registration number"
                  />

                  <div className="md:col-span-2">
                    <Input
                      label="Business Address"
                      name="businessAddress"
                      value={settings.businessAddress}
                      onChange={handleChange}
                    />
                  </div>

                </div>

              </div>
            )}

            {/* =================================================
                CONTACT
            ================================================= */}

            {activeSection === "contact" && (
              <div>

                <SectionHeader
                  icon={<FaPhone />}
                  title="Contact Information"
                  description="Manage customer support and contact details."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <Input
                    label="Phone Number"
                    name="phone"
                    value={settings.phone}
                    onChange={handleChange}
                  />

                  <Input
                    label="Business Email"
                    name="email"
                    value={settings.email}
                    onChange={handleChange}
                  />

                  <Input
                    label="Support Email"
                    name="supportEmail"
                    value={settings.supportEmail}
                    onChange={handleChange}
                  />

                </div>

              </div>
            )}

            {/* =================================================
                SERVICES
            ================================================= */}

            {activeSection === "services" && (
              <div>

                <SectionHeader
                  icon={<FaTools />}
                  title="Services"
                  description="Manage the services available on your platform."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  {[
                    "Home Construction",
                    "Interior Design",
                    "Painting",
                    "Electrical Work",
                    "Plumbing",
                    "Home Renovation",
                    "Custom Furniture",
                    "Annual Maintenance",
                  ].map((service) => (
                    <div
                      key={service}
                      className="flex items-center justify-between border border-gray-200 rounded-xl px-4 py-4"
                    >
                      <span className="font-medium text-gray-700">
                        {service}
                      </span>

                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                        Active
                      </span>
                    </div>
                  ))}

                </div>

              </div>
            )}

            {/* =================================================
                CITIES
            ================================================= */}

            {activeSection === "cities" && (
              <div>

                <SectionHeader
                  icon={<FaMapMarkerAlt />}
                  title="Cities"
                  description="Manage cities where Book My Problem operates."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  {[
                    "Kathmandu",
                    "Lalitpur",
                    "Bhaktapur",
                    "Pokhara",
                    "Chitwan",
                    "Biratnagar",
                    "Butwal",
                    "Dharan",
                  ].map((city) => (
                    <div
                      key={city}
                      className="flex items-center justify-between border border-gray-200 rounded-xl px-4 py-4"
                    >

                      <div className="flex items-center gap-3">

                        <FaMapMarkerAlt className="text-[#FCBC14]" />

                        <span className="font-medium text-gray-700">
                          {city}
                        </span>

                      </div>

                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                        Active
                      </span>

                    </div>
                  ))}

                </div>

              </div>
            )}

            {/* =================================================
                PAYMENT
            ================================================= */}

            {activeSection === "payment" && (
              <div>

                <SectionHeader
                  icon={<FaMoneyBillWave />}
                  title="Payment Settings"
                  description="Configure payment and tax settings."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <Input
                    label="Tax / VAT (%)"
                    name="tax"
                    type="number"
                    value={settings.tax}
                    onChange={handleChange}
                  />

                  <Input
                    label="Default Advance Payment (%)"
                    name="advancePayment"
                    type="number"
                    value={settings.advancePayment}
                    onChange={handleChange}
                  />

                </div>

                <div className="mt-6">

                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Payment Methods
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                    {settings.paymentMethods.map(
                      (method) => (
                        <div
                          key={method}
                          className="border border-gray-200 rounded-xl px-4 py-3 flex items-center justify-between"
                        >
                          <span>{method}</span>

                          <span className="text-green-600 text-sm font-medium">
                            Enabled
                          </span>
                        </div>
                      )
                    )}

                  </div>

                </div>

              </div>
            )}

            {/* =================================================
                NOTIFICATIONS
            ================================================= */}

            {activeSection === "notification" && (
              <div>

                <SectionHeader
                  icon={<FaBell />}
                  title="Notification Settings"
                  description="Control admin notifications."
                />

                <div className="space-y-4">

                  <Toggle
                    label="New Enquiry"
                    description="Notify admin when a new enquiry is submitted."
                    name="newEnquiry"
                    checked={settings.newEnquiry}
                    onChange={handleChange}
                  />

                  <Toggle
                    label="New Customer"
                    description="Notify admin when a new customer registers."
                    name="newCustomer"
                    checked={settings.newCustomer}
                    onChange={handleChange}
                  />

                  <Toggle
                    label="New Project"
                    description="Notify admin when a new project is created."
                    name="newProject"
                    checked={settings.newProject}
                    onChange={handleChange}
                  />

                  <Toggle
                    label="Payment Received"
                    description="Notify admin when a payment is received."
                    name="paymentReceived"
                    checked={settings.paymentReceived}
                    onChange={handleChange}
                  />

                </div>

              </div>
            )}

            {/* =================================================
                PREMIUM ADMIN ACCOUNT
            ================================================= */}

            {activeSection === "admin" && (
              <div>

                <SectionHeader
                  icon={<FaUserShield />}
                  title="Admin Account"
                  description="Manage your administrator profile, account details and security."
                />

                {/* =================================================
                    PROFILE CARD
                ================================================= */}

                <div className="relative overflow-hidden rounded-2xl bg-[#072144] p-6 md:p-7 mb-7">

                  {/* Decorative Background */}
                  <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-[#FCBC14]/10" />

                  <div className="absolute -bottom-20 -left-10 w-44 h-44 rounded-full bg-white/5" />

                  <div className="relative flex flex-col md:flex-row md:items-center gap-6">

                    {/* PROFILE IMAGE */}

                    <div className="relative shrink-0">

                      <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#FCBC14] bg-white shadow-xl">

                        {settings.adminPhoto ? (
                          <img
                            src={settings.adminPhoto}
                            alt="Admin Profile"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-[#FCBC14] text-[#072144] text-4xl font-bold">
                            {settings.adminName
                              ?.charAt(0)
                              ?.toUpperCase() || "A"}
                          </div>
                        )}

                      </div>

                      {/* CAMERA BUTTON */}

                      <label
                        htmlFor="adminProfileImage"
                        className="
                          absolute
                          bottom-0
                          right-0
                          w-9
                          h-9
                          rounded-full
                          bg-[#FCBC14]
                          text-[#072144]
                          flex
                          items-center
                          justify-center
                          cursor-pointer
                          border-2
                          border-[#072144]
                          shadow-lg
                          hover:scale-110
                          transition
                        "
                        title="Change profile photo"
                      >
                        <FaCamera />

                        <input
                          id="adminProfileImage"
                          type="file"
                          accept="image/*"
                          onChange={handleProfileImage}
                          className="hidden"
                        />
                      </label>

                    </div>

                    {/* PROFILE SUMMARY */}

                    <div className="text-white flex-1">

                      <div className="flex flex-wrap items-center gap-2 mb-2">

                        <h3 className="text-2xl font-bold">
                          {settings.adminName ||
                            "Administrator"}
                        </h3>

                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#FCBC14] text-[#072144] text-xs font-bold">
                          <FaCheckCircle />
                          Active
                        </span>

                      </div>

                      <p className="text-white/70 text-sm flex items-center gap-2">
                        <FaEnvelope />
                        {settings.adminEmail ||
                          "admin@bookmyproblem.com"}
                      </p>

                      <p className="text-white/60 text-sm mt-2 flex items-center gap-2">
                        <FaBriefcase />
                        {settings.adminRole}
                        {" • "}
                        {settings.adminDepartment}
                      </p>

                    </div>

                    {/* REMOVE PHOTO */}

                    {settings.adminPhoto && (
                      <button
                        type="button"
                        onClick={handleRemovePhoto}
                        className="
                          self-start
                          md:self-center
                          flex
                          items-center
                          gap-2
                          px-4
                          py-2
                          rounded-lg
                          bg-white/10
                          text-white
                          text-sm
                          hover:bg-red-500
                          transition
                        "
                      >
                        <FaTrash />
                        Remove Photo
                      </button>
                    )}

                  </div>

                </div>

                {/* =================================================
                    PERSONAL INFORMATION
                ================================================= */}

                <div className="mb-7">

                  <div className="flex items-center gap-3 mb-5">

                    <div className="w-10 h-10 rounded-xl bg-[#FCBC14]/15 text-[#072144] flex items-center justify-center">
                      <FaUser />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-[#072144]">
                        Personal Information
                      </h3>

                      <p className="text-sm text-gray-500">
                        Update your administrator profile details.
                      </p>
                    </div>

                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <Input
                      label="Full Name"
                      name="adminName"
                      value={settings.adminName}
                      onChange={handleChange}
                      icon={<FaUser />}
                    />

                    <Input
                      label="Email Address"
                      name="adminEmail"
                      type="email"
                      value={settings.adminEmail}
                      onChange={handleChange}
                      icon={<FaEnvelope />}
                    />

                    <Input
                      label="Phone Number"
                      name="adminPhone"
                      value={settings.adminPhone}
                      onChange={handleChange}
                      icon={<FaPhone />}
                    />

                    <Input
                      label="Role"
                      name="adminRole"
                      value={settings.adminRole}
                      onChange={handleChange}
                      icon={<FaUserShield />}
                    />

                    <Input
                      label="Department"
                      name="adminDepartment"
                      value={settings.adminDepartment}
                      onChange={handleChange}
                      icon={<FaBriefcase />}
                    />

                    <div className="md:col-span-2">

                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        About / Bio
                      </label>

                      <textarea
                        name="adminBio"
                        value={settings.adminBio}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Write something about the administrator..."
                        className="
                          w-full
                          border
                          border-gray-200
                          rounded-xl
                          px-4
                          py-3
                          outline-none
                          resize-none
                          focus:border-[#FCBC14]
                          focus:ring-2
                          focus:ring-[#FCBC14]/20
                        "
                      />

                    </div>

                  </div>

                  {/* SAVE PROFILE */}

                  <div className="flex justify-end mt-5">

                    <button
                      type="button"
                      onClick={handleSaveProfile}
                      className="
                        flex
                        items-center
                        gap-2
                        bg-[#072144]
                        text-white
                        px-6
                        py-3
                        rounded-xl
                        font-semibold
                        hover:bg-[#FCBC14]
                        hover:text-[#072144]
                        transition-all
                        duration-200
                      "
                    >
                      <FaSave />
                      Save Profile
                    </button>

                  </div>

                </div>

                {/* =================================================
                    ACCOUNT INFORMATION
                ================================================= */}

                <div className="border-t border-gray-100 pt-7 mb-7">

                  <div className="flex items-center gap-3 mb-5">

                    <div className="w-10 h-10 rounded-xl bg-[#072144]/5 text-[#072144] flex items-center justify-center">
                      <FaInfoCircle />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-[#072144]">
                        Account Information
                      </h3>

                      <p className="text-sm text-gray-500">
                        Basic information about this administrator account.
                      </p>
                    </div>

                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    <AccountInfo
                      icon={<FaUserShield />}
                      label="Account Type"
                      value="Administrator"
                    />

                    <AccountInfo
                      icon={<FaCheckCircle />}
                      label="Account Status"
                      value="Active"
                      success
                    />

                    <AccountInfo
                      icon={<FaClock />}
                      label="Last Login"
                      value="Today"
                    />

                  </div>

                </div>

                {/* =================================================
                    SECURITY
                ================================================= */}

                <div className="border-t border-gray-100 pt-7">

                  <div className="flex items-center gap-3 mb-5">

                    <div className="w-10 h-10 rounded-xl bg-[#FCBC14]/15 text-[#072144] flex items-center justify-center">
                      <FaLock />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-[#072144]">
                        Password & Security
                      </h3>

                      <p className="text-sm text-gray-500">
                        Keep your administrator account secure.
                      </p>
                    </div>

                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                      {/* CURRENT PASSWORD */}

                      <PasswordInput
                        label="Current Password"
                        name="currentPassword"
                        value={
                          passwordData.currentPassword
                        }
                        onChange={handlePasswordChange}
                        show={showCurrentPassword}
                        setShow={
                          setShowCurrentPassword
                        }
                      />

                      {/* NEW PASSWORD */}

                      <PasswordInput
                        label="New Password"
                        name="newPassword"
                        value={
                          passwordData.newPassword
                        }
                        onChange={handlePasswordChange}
                        show={showNewPassword}
                        setShow={setShowNewPassword}
                      />

                      {/* CONFIRM PASSWORD */}

                      <div className="md:col-span-2">

                        <PasswordInput
                          label="Confirm New Password"
                          name="confirmPassword"
                          value={
                            passwordData.confirmPassword
                          }
                          onChange={handlePasswordChange}
                          show={showConfirmPassword}
                          setShow={
                            setShowConfirmPassword
                          }
                        />

                      </div>

                    </div>

                    <div className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                      <div className="flex items-start gap-2 text-sm text-gray-500">

                        <FaInfoCircle className="mt-0.5 text-[#FCBC14]" />

                        <p>
                          Use at least 6 characters for your new
                          password.
                        </p>

                      </div>

                      <button
                        type="button"
                        onClick={handleChangePassword}
                        className="
                          flex
                          items-center
                          justify-center
                          gap-2
                          bg-[#072144]
                          text-white
                          px-5
                          py-3
                          rounded-xl
                          font-semibold
                          hover:bg-[#FCBC14]
                          hover:text-[#072144]
                          transition-all
                        "
                      >
                        <FaLock />
                        Update Password
                      </button>

                    </div>

                  </div>

                </div>

              </div>
            )}

            {/* =================================================
                SAVE SETTINGS BUTTON
            ================================================= */}

            {activeSection !== "admin" && (
              <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">

                <button
                  type="button"
                  onClick={handleSave}
                  className="
                    flex
                    items-center
                    gap-2
                    bg-[#072144]
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    font-semibold
                    hover:bg-[#FCBC14]
                    hover:text-[#072144]
                    transition-all
                    duration-200
                  "
                >
                  <FaSave />
                  Save Settings
                </button>

              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
};

/* =====================================================
   SECTION HEADER
===================================================== */

const SectionHeader = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="mb-7 flex items-start gap-4">

      <div className="w-12 h-12 rounded-xl bg-[#FCBC14]/15 text-[#072144] flex items-center justify-center text-xl shrink-0">
        {icon}
      </div>

      <div>

        <h2 className="text-xl md:text-2xl font-bold text-[#072144]">
          {title}
        </h2>

        <p className="text-gray-500 text-sm mt-1">
          {description}
        </p>

      </div>

    </div>
  );
};

/* =====================================================
   INPUT
===================================================== */

const Input = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  icon,
}) => {
  return (
    <div>

      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>

      <div className="relative">

        {icon && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </span>
        )}

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`
            w-full
            border
            border-gray-200
            rounded-xl
            py-3
            outline-none
            focus:border-[#FCBC14]
            focus:ring-2
            focus:ring-[#FCBC14]/20
            ${icon ? "pl-11 pr-4" : "px-4"}
          `}
        />

      </div>

    </div>
  );
};

/* =====================================================
   PASSWORD INPUT
===================================================== */

const PasswordInput = ({
  label,
  name,
  value,
  onChange,
  show,
  setShow,
}) => {
  return (
    <div>

      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>

      <div className="relative">

        <FaLock
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-gray-400
          "
        />

        <input
          type={show ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={label}
          className="
            w-full
            border
            border-gray-200
            rounded-xl
            pl-11
            pr-12
            py-3
            outline-none
            focus:border-[#FCBC14]
            focus:ring-2
            focus:ring-[#FCBC14]/20
          "
        />

        <button
          type="button"
          onClick={() => setShow(!show)}
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            w-8
            h-8
            rounded-lg
            flex
            items-center
            justify-center
            text-gray-400
            hover:text-[#072144]
            hover:bg-gray-100
            transition
          "
          aria-label={
            show
              ? "Hide password"
              : "Show password"
          }
        >
          {show ? (
            <FaEyeSlash />
          ) : (
            <FaEye />
          )}
        </button>

      </div>

    </div>
  );
};

/* =====================================================
   ACCOUNT INFO
===================================================== */

const AccountInfo = ({
  icon,
  label,
  value,
  success = false,
}) => {
  return (
    <div className="border border-gray-200 rounded-xl p-4 bg-white">

      <div className="flex items-center gap-3">

        <div
          className={`
            w-10
            h-10
            rounded-lg
            flex
            items-center
            justify-center
            ${
              success
                ? "bg-green-100 text-green-600"
                : "bg-[#FCBC14]/15 text-[#072144]"
            }
          `}
        >
          {icon}
        </div>

        <div>

          <p className="text-xs text-gray-500">
            {label}
          </p>

          <p className="font-semibold text-gray-800 mt-0.5">
            {value}
          </p>

        </div>

      </div>

    </div>
  );
};

/* =====================================================
   TOGGLE
===================================================== */

const Toggle = ({
  label,
  description,
  name,
  checked,
  onChange,
}) => {
  return (
    <div className="flex items-center justify-between gap-4 border border-gray-200 rounded-xl p-4">

      <div>

        <h3 className="font-semibold text-gray-800">
          {label}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          {description}
        </p>

      </div>

      <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">

        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className="sr-only peer"
        />

        <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#FCBC14] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />

      </label>

    </div>
  );
};

export default AdminSettings;
