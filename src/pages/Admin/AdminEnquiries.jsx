import React, { useState } from "react";

import {
  FaEnvelope,
  FaPhone,
  FaUser,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaEye,
  FaTrash,
  FaTimes,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaProjectDiagram,
  FaSearch,
  FaArrowRight,
} from "react-icons/fa";

const initialEnquiries = [
  {
    id: "ENQ-1001",
    name: "Ram Sharma",
    email: "ram@example.com",
    phone: "+977 9800000001",
    city: "Butwal",
    service: "Home Construction",
    type: "Project",
    message:
      "I want to build a two-storey residential house and need a complete construction estimate.",
    date: "2026-09-20",
    status: "New",
  },
  {
    id: "ENQ-1002",
    name: "Sita Thapa",
    email: "sita@example.com",
    phone: "+977 9800000002",
    city: "Kathmandu",
    service: "Interior Design",
    type: "Contact",
    message:
      "I would like to discuss interior design options for my new home.",
    date: "2026-09-21",
    status: "Follow Up",
  },
  {
    id: "ENQ-1003",
    name: "Hari KC",
    email: "hari@example.com",
    phone: "+977 9800000003",
    city: "Pokhara",
    service: "Painting",
    type: "Project",
    message:
      "Looking for a professional team for complete house painting.",
    date: "2026-09-22",
    status: "Converted",
  },
  {
    id: "ENQ-1004",
    name: "Anita Rai",
    email: "anita@example.com",
    phone: "+977 9800000004",
    city: "Lalitpur",
    service: "Electrical Work",
    type: "Contact",
    message:
      "Need an electrician for electrical installation and maintenance.",
    date: "2026-09-23",
    status: "New",
  },
  {
    id: "ENQ-1005",
    name: "Bikash Gurung",
    email: "bikash@example.com",
    phone: "+977 9800000005",
    city: "Chitwan",
    service: "Home Renovation",
    type: "Project",
    message:
      "I am planning a complete renovation of my existing house.",
    date: "2026-09-24",
    status: "Rejected",
  },
  {
    id: "ENQ-1006",
    name: "Suman Adhikari",
    email: "suman@example.com",
    phone: "+977 9800000006",
    city: "Butwal",
    service: "Plumbing",
    type: "Contact",
    message:
      "Need plumbing maintenance service for my residential property.",
    date: "2026-09-25",
    status: "Follow Up",
  },
];

const AdminEnquiries = () => {
  const [enquiries, setEnquiries] = useState(initialEnquiries);
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  // ==========================================
  // FILTER
  // ==========================================

  const filteredEnquiries = enquiries.filter((enquiry) => {
    const matchesFilter =
      activeFilter === "All"
        ? true
        : enquiry.status === activeFilter;

    const searchText = search.toLowerCase();

    const matchesSearch =
      enquiry.id.toLowerCase().includes(searchText) ||
      enquiry.name.toLowerCase().includes(searchText) ||
      enquiry.email.toLowerCase().includes(searchText) ||
      enquiry.phone.toLowerCase().includes(searchText) ||
      enquiry.city.toLowerCase().includes(searchText) ||
      enquiry.service.toLowerCase().includes(searchText);

    return matchesFilter && matchesSearch;
  });

  // ==========================================
  // COUNTS
  // ==========================================

  const newCount = enquiries.filter(
    (enquiry) => enquiry.status === "New"
  ).length;

  const contactCount = enquiries.filter(
    (enquiry) => enquiry.type === "Contact"
  ).length;

  const projectCount = enquiries.filter(
    (enquiry) => enquiry.type === "Project"
  ).length;

  const followUpCount = enquiries.filter(
    (enquiry) => enquiry.status === "Follow Up"
  ).length;

  const convertedCount = enquiries.filter(
    (enquiry) => enquiry.status === "Converted"
  ).length;

  const rejectedCount = enquiries.filter(
    (enquiry) => enquiry.status === "Rejected"
  ).length;

  // ==========================================
  // UPDATE STATUS
  // ==========================================

  const updateStatus = (id, newStatus) => {
    setEnquiries((prev) =>
      prev.map((enquiry) =>
        enquiry.id === id
          ? {
              ...enquiry,
              status: newStatus,
            }
          : enquiry
      )
    );

    setSelectedEnquiry(null);
  };

  // ==========================================
  // DELETE
  // ==========================================

  const deleteEnquiry = (id) => {
    setEnquiries((prev) =>
      prev.filter((enquiry) => enquiry.id !== id)
    );

    setSelectedEnquiry(null);
  };

  // ==========================================
  // STATUS STYLE
  // ==========================================

  const getStatusStyle = (status) => {
    switch (status) {
      case "New":
        return "bg-blue-100 text-blue-700";

      case "Follow Up":
        return "bg-yellow-100 text-yellow-700";

      case "Converted":
        return "bg-green-100 text-green-700";

      case "Rejected":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  // ==========================================
  // STATUS ICON
  // ==========================================

  const getStatusIcon = (status) => {
    switch (status) {
      case "New":
        return <FaEnvelope />;

      case "Follow Up":
        return <FaClock />;

      case "Converted":
        return <FaCheckCircle />;

      case "Rejected":
        return <FaTimesCircle />;

      default:
        return <FaEnvelope />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-4 md:p-6 lg:p-8">

        {/* ==========================================
            HEADER
        ========================================== */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#FCBC14] text-[#072144] flex items-center justify-center text-xl">
                <FaEnvelope />
              </div>

              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-[#072144]">
                  Enquiries
                </h1>

                <p className="text-gray-500 mt-1">
                  Manage customer enquiries and project leads.
                </p>
              </div>
            </div>
          </div>

          {/* NEW COUNT */}
          {newCount > 0 && (
            <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-3 rounded-xl font-semibold">
              <FaEnvelope />
              {newCount} New Enquiry
              {newCount > 1 ? "ies" : ""}
            </div>
          )}
        </div>

        {/* ==========================================
            SUMMARY CARDS
        ========================================== */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
          <SummaryCard
            title="New Enquiries"
            count={newCount}
            icon={<FaEnvelope />}
            iconBg="bg-blue-100"
            iconColor="text-blue-600"
            onClick={() => setActiveFilter("New")}
            active={activeFilter === "New"}
          />

          <SummaryCard
            title="Follow Up"
            count={followUpCount}
            icon={<FaClock />}
            iconBg="bg-yellow-100"
            iconColor="text-yellow-600"
            onClick={() => setActiveFilter("Follow Up")}
            active={activeFilter === "Follow Up"}
          />

          <SummaryCard
            title="Converted"
            count={convertedCount}
            icon={<FaCheckCircle />}
            iconBg="bg-green-100"
            iconColor="text-green-600"
            onClick={() => setActiveFilter("Converted")}
            active={activeFilter === "Converted"}
          />

          <SummaryCard
            title="Rejected"
            count={rejectedCount}
            icon={<FaTimesCircle />}
            iconBg="bg-red-100"
            iconColor="text-red-600"
            onClick={() => setActiveFilter("Rejected")}
            active={activeFilter === "Rejected"}
          />
        </div>

        {/* ==========================================
            ENQUIRY TYPES
        ========================================== */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => setActiveFilter("Contact")}
            className={`bg-white rounded-2xl border shadow-sm p-5 text-left transition-all ${
              activeFilter === "Contact"
                ? "border-[#FCBC14] ring-2 ring-[#FCBC14]/20"
                : "border-gray-100 hover:border-[#FCBC14]"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                  <FaPhone />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Contact Enquiries
                  </p>

                  <p className="text-2xl font-bold text-[#072144]">
                    {contactCount}
                  </p>
                </div>
              </div>

              <FaArrowRight className="text-gray-300" />
            </div>
          </button>

          <button
            onClick={() => setActiveFilter("Project")}
            className={`bg-white rounded-2xl border shadow-sm p-5 text-left transition-all ${
              activeFilter === "Project"
                ? "border-[#FCBC14] ring-2 ring-[#FCBC14]/20"
                : "border-gray-100 hover:border-[#FCBC14]"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
                  <FaProjectDiagram />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Project Enquiries
                  </p>

                  <p className="text-2xl font-bold text-[#072144]">
                    {projectCount}
                  </p>
                </div>
              </div>

              <FaArrowRight className="text-gray-300" />
            </div>
          </button>
        </div>

        {/* ==========================================
            SEARCH + FILTER
        ========================================== */}

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-5">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {[
                "All",
                "New",
                "Follow Up",
                "Converted",
                "Rejected",
              ].map((status) => (
                <button
                  key={status}
                  onClick={() => setActiveFilter(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                    activeFilter === status
                      ? "bg-[#FCBC14] text-[#072144]"
                      : "text-gray-600 hover:bg-[#FCBC14] hover:text-[#072144]"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>

            <div className="relative w-full lg:w-80">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder="Search enquiry..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-[#FCBC14] focus:ring-2 focus:ring-[#FCBC14]/20"
              />
            </div>
          </div>
        </div>

        {/* ==========================================
            ENQUIRY TABLE
        ========================================== */}

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1050px]">
              <thead className="bg-[#072144] text-white">
                <tr>
                  <th className="text-left px-5 py-4 text-sm font-semibold">
                    Enquiry
                  </th>

                  <th className="text-left px-5 py-4 text-sm font-semibold">
                    Customer
                  </th>

                  <th className="text-left px-5 py-4 text-sm font-semibold">
                    Service
                  </th>

                  <th className="text-left px-5 py-4 text-sm font-semibold">
                    Type
                  </th>

                  <th className="text-left px-5 py-4 text-sm font-semibold">
                    City
                  </th>

                  <th className="text-left px-5 py-4 text-sm font-semibold">
                    Date
                  </th>

                  <th className="text-left px-5 py-4 text-sm font-semibold">
                    Status
                  </th>

                  <th className="text-center px-5 py-4 text-sm font-semibold">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredEnquiries.length === 0 ? (
                  <tr>
                    <td
                      colSpan="8"
                      className="text-center py-12 text-gray-500"
                    >
                      No enquiries found.
                    </td>
                  </tr>
                ) : (
                  filteredEnquiries.map((enquiry) => (
                    <tr
                      key={enquiry.id}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-all"
                    >
                      {/* ENQUIRY ID */}
                      <td className="px-5 py-4">
                        <p className="font-semibold text-[#072144]">
                          {enquiry.id}
                        </p>

                        <p className="text-xs text-gray-400 mt-1">
                          {enquiry.email}
                        </p>
                      </td>

                      {/* CUSTOMER */}
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-[#FCBC14]/20 text-[#072144] flex items-center justify-center">
                            <FaUser />
                          </div>

                          <div>
                            <p className="font-medium text-gray-700">
                              {enquiry.name}
                            </p>

                            <p className="text-xs text-gray-400">
                              {enquiry.phone}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* SERVICE */}
                      <td className="px-5 py-4">
                        <span className="text-gray-700">
                          {enquiry.service}
                        </span>
                      </td>

                      {/* TYPE */}
                      <td className="px-5 py-4">
                        <span
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
                            enquiry.type === "Project"
                              ? "bg-orange-100 text-orange-700"
                              : "bg-purple-100 text-purple-700"
                          }`}
                        >
                          {enquiry.type}
                        </span>
                      </td>

                      {/* CITY */}
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaMapMarkerAlt className="text-[#FCBC14]" />
                          {enquiry.city}
                        </div>
                      </td>

                      {/* DATE */}
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <FaCalendarAlt className="text-gray-400" />
                          {enquiry.date}
                        </div>
                      </td>

                      {/* STATUS */}
                      <td className="px-5 py-4">
                        <span
                          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${getStatusStyle(
                            enquiry.status
                          )}`}
                        >
                          {getStatusIcon(enquiry.status)}
                          {enquiry.status}
                        </span>
                      </td>

                      {/* ACTION */}
                      <td className="px-5 py-4">
                        <div className="flex justify-center">
                          <button
                            onClick={() =>
                              setSelectedEnquiry(enquiry)
                            }
                            title="View Enquiry"
                            className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-[#FCBC14] hover:text-[#072144] transition-all"
                          >
                            <FaEye />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* ==========================================
            DETAILS MODAL
        ========================================== */}

        {selectedEnquiry && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* BACKDROP */}
            <div
              onClick={() => setSelectedEnquiry(null)}
              className="absolute inset-0 bg-black/50"
            />

            {/* MODAL */}
            <div className="relative bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl">
              {/* HEADER */}
              <div className="bg-[#072144] text-white p-5 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">
                    Enquiry Details
                  </h2>

                  <p className="text-gray-300 text-sm mt-1">
                    {selectedEnquiry.id}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedEnquiry(null)}
                  className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-[#FCBC14] hover:text-[#072144] transition-all"
                >
                  <FaTimes />
                </button>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                {/* CUSTOMER INFO */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Detail
                    icon={<FaUser />}
                    label="Customer"
                    value={selectedEnquiry.name}
                  />

                  <Detail
                    icon={<FaEnvelope />}
                    label="Email"
                    value={selectedEnquiry.email}
                  />

                  <Detail
                    icon={<FaPhone />}
                    label="Phone"
                    value={selectedEnquiry.phone}
                  />

                  <Detail
                    icon={<FaMapMarkerAlt />}
                    label="City"
                    value={selectedEnquiry.city}
                  />

                  <Detail
                    icon={<FaProjectDiagram />}
                    label="Service"
                    value={selectedEnquiry.service}
                  />

                  <Detail
                    icon={<FaCalendarAlt />}
                    label="Date"
                    value={selectedEnquiry.date}
                  />
                </div>

                {/* TYPE */}
                <div className="mt-5">
                  <p className="text-xs text-gray-500 mb-1">
                    Enquiry Type
                  </p>

                  <span
                    className={`inline-flex px-3 py-1.5 rounded-full text-xs font-semibold ${
                      selectedEnquiry.type === "Project"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {selectedEnquiry.type} Enquiry
                  </span>
                </div>

                {/* MESSAGE */}
                <div className="mt-5">
                  <p className="text-sm font-semibold text-[#072144] mb-2">
                    Customer Message
                  </p>

                  <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-sm text-gray-600 leading-relaxed">
                    {selectedEnquiry.message}
                  </div>
                </div>

                {/* STATUS */}
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <p className="text-sm font-semibold text-[#072144] mb-3">
                    Current Status
                  </p>

                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${getStatusStyle(
                      selectedEnquiry.status
                    )}`}
                  >
                    {getStatusIcon(selectedEnquiry.status)}
                    {selectedEnquiry.status}
                  </span>
                </div>

                {/* ACTIONS */}
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <p className="text-sm font-semibold text-[#072144] mb-3">
                    Update Enquiry
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() =>
                        updateStatus(
                          selectedEnquiry.id,
                          "Follow Up"
                        )
                      }
                      className="px-4 py-2 rounded-lg bg-yellow-100 text-yellow-700 text-sm font-semibold hover:bg-yellow-500 hover:text-white transition-all"
                    >
                      Follow Up
                    </button>

                    <button
                      onClick={() =>
                        updateStatus(
                          selectedEnquiry.id,
                          "Converted"
                        )
                      }
                      className="px-4 py-2 rounded-lg bg-green-100 text-green-700 text-sm font-semibold hover:bg-green-600 hover:text-white transition-all"
                    >
                      Converted
                    </button>

                    <button
                      onClick={() =>
                        updateStatus(
                          selectedEnquiry.id,
                          "Rejected"
                        )
                      }
                      className="px-4 py-2 rounded-lg bg-red-100 text-red-700 text-sm font-semibold hover:bg-red-600 hover:text-white transition-all"
                    >
                      Rejected
                    </button>

                    <button
                      onClick={() =>
                        deleteEnquiry(selectedEnquiry.id)
                      }
                      className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-semibold hover:bg-gray-700 hover:text-white transition-all"
                    >
                      <span className="flex items-center gap-2">
                        <FaTrash />
                        Delete
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ==========================================
// SUMMARY CARD
// ==========================================

const SummaryCard = ({
  title,
  count,
  icon,
  iconBg,
  iconColor,
  onClick,
  active,
}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-white rounded-2xl border shadow-sm p-5 text-left transition-all ${
        active
          ? "border-[#FCBC14] ring-2 ring-[#FCBC14]/20"
          : "border-gray-100 hover:border-[#FCBC14]"
      }`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h2 className="text-2xl font-bold text-[#072144] mt-1">
            {count}
          </h2>
        </div>

        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center ${iconBg} ${iconColor}`}
        >
          {icon}
        </div>
      </div>
    </button>
  );
};

// ==========================================
// DETAIL
// ==========================================

const Detail = ({ icon, label, value }) => {
  return (
    <div className="border border-gray-100 rounded-xl p-4">
      <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
        {icon}
        <span>{label}</span>
      </div>

      <p className="font-semibold text-[#072144] break-words">
        {value}
      </p>
    </div>
  );
};

// ==========================================
// STATUS STYLE
// ==========================================

const getStatusStyle = (status) => {
  switch (status) {
    case "New":
      return "bg-blue-100 text-blue-700";

    case "Follow Up":
      return "bg-yellow-100 text-yellow-700";

    case "Converted":
      return "bg-green-100 text-green-700";

    case "Rejected":
      return "bg-red-100 text-red-700";

    default:
      return "bg-gray-100 text-gray-700";
  }
};

// ==========================================
// STATUS ICON
// ==========================================

const getStatusIcon = (status) => {
  switch (status) {
    case "New":
      return <FaEnvelope />;

    case "Follow Up":
      return <FaClock />;

    case "Converted":
      return <FaCheckCircle />;

    case "Rejected":
      return <FaTimesCircle />;

    default:
      return <FaEnvelope />;
  }
};

export default AdminEnquiries;