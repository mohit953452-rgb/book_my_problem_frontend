import React, { useState } from "react";
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
} from "react-icons/fa";

const AdminSettings = () => {
  const [activeSection, setActiveSection] = useState("general");

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
    paymentMethods: ["Cash", "Bank Transfer", "eSewa", "Khalti"],
    advancePayment: "30",

    // Notifications
    newEnquiry: true,
    newCustomer: true,
    newProject: true,
    paymentReceived: true,

    // Admin
    adminName: "Administrator",
    adminEmail: "admin@bookmyproblem.com",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = () => {
    localStorage.setItem(
      "bookmyproblem_admin_settings",
      JSON.stringify(settings)
    );

    alert("Settings saved successfully!");
  };

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

      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-[#072144]">
          Settings
        </h1>

        <p className="text-gray-500 mt-1">
          Manage your website, business, payment and admin settings.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* SETTINGS SIDEBAR */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-3">

            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-1 text-left transition-all duration-200 ${
                  activeSection === section.id
                    ? "bg-[#FCBC14] text-[#072144] font-semibold"
                    : "text-gray-600 hover:bg-[#FCBC14] hover:text-[#072144]"
                }`}
              >
                <span className="text-lg">
                  {section.icon}
                </span>

                <span>{section.title}</span>
              </button>
            ))}

          </div>
        </div>

        {/* SETTINGS CONTENT */}
        <div className="lg:col-span-9">

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-7">

            {/* ================= GENERAL ================= */}
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
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#FCBC14]"
                    >
                      <option value="NPR">NPR - Nepalese Rupee</option>
                      <option value="INR">INR - Indian Rupee</option>
                      <option value="USD">USD - US Dollar</option>
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
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#FCBC14]"
                    >
                      <option value="Asia/Kathmandu">
                        Asia/Kathmandu
                      </option>
                    </select>
                  </div>

                </div>
              </div>
            )}

            {/* ================= BUSINESS ================= */}
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

            {/* ================= CONTACT ================= */}
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

            {/* ================= SERVICES ================= */}
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

            {/* ================= CITIES ================= */}
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

            {/* ================= PAYMENT ================= */}
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

                    {settings.paymentMethods.map((method) => (
                      <div
                        key={method}
                        className="border border-gray-200 rounded-xl px-4 py-3 flex items-center justify-between"
                      >
                        <span>{method}</span>

                        <span className="text-green-600 text-sm font-medium">
                          Enabled
                        </span>
                      </div>
                    ))}

                  </div>
                </div>
              </div>
            )}

            {/* ================= NOTIFICATIONS ================= */}
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

            {/* ================= ADMIN ================= */}
            {activeSection === "admin" && (
              <div>
                <SectionHeader
                  icon={<FaUserShield />}
                  title="Admin Account"
                  description="Manage administrator account information."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <Input
                    label="Admin Name"
                    name="adminName"
                    value={settings.adminName}
                    onChange={handleChange}
                  />

                  <Input
                    label="Admin Email"
                    name="adminEmail"
                    value={settings.adminEmail}
                    onChange={handleChange}
                  />

                </div>

                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                  <p className="text-sm text-yellow-800">
                    Password management should be connected to the backend
                    authentication system before production.
                  </p>
                </div>
              </div>
            )}

            {/* SAVE BUTTON */}
            <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">

              <button
                onClick={handleSave}
                className="flex items-center gap-2 bg-[#072144] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#FCBC14] hover:text-[#072144] transition-all duration-200"
              >
                <FaSave />
                Save Settings
              </button>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};


/* ================= COMPONENTS ================= */

const SectionHeader = ({ icon, title, description }) => {
  return (
    <div className="mb-7 flex items-start gap-4">
      <div className="w-12 h-12 rounded-xl bg-[#FCBC14]/15 text-[#072144] flex items-center justify-center text-xl">
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


const Input = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#FCBC14] focus:ring-2 focus:ring-[#FCBC14]/20"
      />
    </div>
  );
};


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