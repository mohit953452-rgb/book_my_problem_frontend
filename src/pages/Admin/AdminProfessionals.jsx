import React, { useMemo, useState } from "react";
import {
  FaSearch,
  FaUserTie,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaEye,
  FaTrash,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBriefcase,
  FaCalendarAlt,
  FaTimes,
  FaCheck,
  FaBan,
} from "react-icons/fa";

const initialProfessionals = [
  {
    id: "PRO-1001",
    name: "Rajesh Sharma",
    email: "rajesh@example.com",
    phone: "9812345678",
    service: "Plumbing",
    city: "Kathmandu",
    experience: 8,
    status: "Active",
    joined: "2026-09-10",
    projects: 12,
    rating: 4.8,
    address: "Baneshwor, Kathmandu",
    skills: "Pipe Installation, Bathroom Fitting, Water Tank",
  },
  {
    id: "PRO-1002",
    name: "Suresh Thapa",
    email: "suresh@example.com",
    phone: "9823456789",
    service: "Electrical",
    city: "Lalitpur",
    experience: 5,
    status: "Pending Approval",
    joined: "2026-09-18",
    projects: 0,
    rating: 0,
    address: "Patan, Lalitpur",
    skills: "Wiring, Switch Installation, Lighting",
  },
  {
    id: "PRO-1003",
    name: "Amit Kumar",
    email: "amit@example.com",
    phone: "9834567890",
    service: "Painting",
    city: "Pokhara",
    experience: 6,
    status: "Active",
    joined: "2026-08-25",
    projects: 9,
    rating: 4.6,
    address: "Lakeside, Pokhara",
    skills: "Interior Painting, Exterior Painting, Texture",
  },
  {
    id: "PRO-1004",
    name: "Bikash Gurung",
    email: "bikash@example.com",
    phone: "9845678901",
    service: "Carpentry",
    city: "Butwal",
    experience: 10,
    status: "Inactive",
    joined: "2026-07-15",
    projects: 18,
    rating: 4.7,
    address: "Traffic Chowk, Butwal",
    skills: "Furniture, Doors, Modular Kitchen",
  },
  {
    id: "PRO-1005",
    name: "Deepak KC",
    email: "deepak@example.com",
    phone: "9856789012",
    service: "Home Renovation",
    city: "Bharatpur",
    experience: 7,
    status: "Pending Approval",
    joined: "2026-09-20",
    projects: 0,
    rating: 0,
    address: "Narayangarh, Bharatpur",
    skills: "Civil Work, Renovation, Flooring",
  },
  {
    id: "PRO-1006",
    name: "Manoj Adhikari",
    email: "manoj@example.com",
    phone: "9867890123",
    service: "AC & Appliance",
    city: "Dharan",
    experience: 4,
    status: "Active",
    joined: "2026-08-10",
    projects: 7,
    rating: 4.5,
    address: "Bhanuchowk, Dharan",
    skills: "AC Repair, Refrigerator, Washing Machine",
  },
];

const AdminProfessionals = () => {
  const [professionals, setProfessionals] = useState(initialProfessionals);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [serviceFilter, setServiceFilter] = useState("All");
  const [selectedProfessional, setSelectedProfessional] = useState(null);

  const services = [
    "All",
    ...new Set(professionals.map((professional) => professional.service)),
  ];

  const filteredProfessionals = useMemo(() => {
    return professionals.filter((professional) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        professional.name.toLowerCase().includes(searchText) ||
        professional.email.toLowerCase().includes(searchText) ||
        professional.phone.includes(search) ||
        professional.id.toLowerCase().includes(searchText) ||
        professional.city.toLowerCase().includes(searchText);

      const matchesStatus =
        statusFilter === "All" ||
        professional.status === statusFilter;

      const matchesService =
        serviceFilter === "All" ||
        professional.service === serviceFilter;

      return matchesSearch && matchesStatus && matchesService;
    });
  }, [professionals, search, statusFilter, serviceFilter]);

  const totalProfessionals = professionals.length;

  const pendingProfessionals = professionals.filter(
    (professional) => professional.status === "Pending Approval"
  ).length;

  const activeProfessionals = professionals.filter(
    (professional) => professional.status === "Active"
  ).length;

  const inactiveProfessionals = professionals.filter(
    (professional) => professional.status === "Inactive"
  ).length;

  const updateStatus = (id, newStatus) => {
    setProfessionals((prev) =>
      prev.map((professional) =>
        professional.id === id
          ? {
              ...professional,
              status: newStatus,
            }
          : professional
      )
    );

    setSelectedProfessional((prev) =>
      prev
        ? {
            ...prev,
            status: newStatus,
          }
        : null
    );
  };

  const deleteProfessional = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this professional?"
    );

    if (!confirmed) return;

    setProfessionals((prev) =>
      prev.filter((professional) => professional.id !== id)
    );

    setSelectedProfessional(null);
  };

  const getStatusClasses = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700";

      case "Pending Approval":
        return "bg-yellow-100 text-yellow-700";

      case "Inactive":
        return "bg-gray-100 text-gray-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Active":
        return <FaCheckCircle />;

      case "Pending Approval":
        return <FaClock />;

      case "Inactive":
        return <FaTimesCircle />;

      default:
        return null;
    }
  };

  const SummaryCard = ({ title, value, icon, filter }) => {
    const isActive = statusFilter === filter;

    return (
      <button
        onClick={() => setStatusFilter(filter)}
        className={`text-left bg-white rounded-xl border p-5 shadow-sm transition-all hover:shadow-md ${
          isActive && filter !== "All"
            ? "border-[#FCBC14] ring-2 ring-[#FCBC14]/20"
            : "border-gray-200"
        }`}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">{title}</p>
            <h3 className="text-2xl font-bold text-[#072144] mt-1">
              {value}
            </h3>
          </div>

          <div className="w-11 h-11 rounded-lg bg-[#072144] text-[#FCBC14] flex items-center justify-center text-lg">
            {icon}
          </div>
        </div>
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-[#072144]">
              Professionals
            </h1>

            <p className="text-gray-500 mt-1">
              Manage service professionals and their approvals.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <FaUserTie />
            <span>{totalProfessionals} Professionals</span>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        <SummaryCard
          title="All Professionals"
          value={totalProfessionals}
          icon={<FaUserTie />}
          filter="All"
        />

        <SummaryCard
          title="Pending Approval"
          value={pendingProfessionals}
          icon={<FaClock />}
          filter="Pending Approval"
        />

        <SummaryCard
          title="Active"
          value={activeProfessionals}
          icon={<FaCheckCircle />}
          filter="Active"
        />

        <SummaryCard
          title="Inactive"
          value={inactiveProfessionals}
          icon={<FaTimesCircle />}
          filter="Inactive"
        />
      </div>

      {/* Filters */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="md:col-span-2 relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              placeholder="Search by name, email, phone, ID or city..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#FCBC14] focus:border-[#FCBC14]"
            />
          </div>

          {/* Service Filter */}
          <select
            value={serviceFilter}
            onChange={(e) => setServiceFilter(e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#FCBC14]"
          >
            {services.map((service) => (
              <option key={service} value={service}>
                {service === "All" ? "All Services" : service}
              </option>
            ))}
          </select>
        </div>

        {/* Status Buttons */}
        <div className="flex flex-wrap gap-2 mt-4">
          {[
            "All",
            "Pending Approval",
            "Active",
            "Inactive",
          ].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                statusFilter === status
                  ? "bg-[#072144] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-[#FCBC14] hover:text-[#072144]"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Professionals Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-200">
          <h2 className="font-semibold text-[#072144]">
            Professional List
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Showing {filteredProfessionals.length} of{" "}
            {professionals.length} professionals
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1100px]">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Professional
                </th>

                <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Service
                </th>

                <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Location
                </th>

                <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Experience
                </th>

                <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Projects
                </th>

                <th className="text-left px-5 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Status
                </th>

                <th className="text-right px-5 py-4 text-xs font-semibold text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {filteredProfessionals.length > 0 ? (
                filteredProfessionals.map((professional) => (
                  <tr
                    key={professional.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    {/* Professional */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-full bg-[#072144] text-[#FCBC14] flex items-center justify-center font-bold">
                          {professional.name
                            .split(" ")
                            .map((name) => name[0])
                            .join("")
                            .slice(0, 2)}
                        </div>

                        <div>
                          <p className="font-semibold text-[#072144]">
                            {professional.name}
                          </p>

                          <p className="text-xs text-gray-400">
                            {professional.id}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Service */}
                    <td className="px-5 py-4">
                      <p className="font-medium text-gray-700">
                        {professional.service}
                      </p>
                    </td>

                    {/* Location */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaMapMarkerAlt className="text-gray-400" />
                        {professional.city}
                      </div>
                    </td>

                    {/* Experience */}
                    <td className="px-5 py-4 text-gray-600">
                      {professional.experience} years
                    </td>

                    {/* Projects */}
                    <td className="px-5 py-4">
                      <span className="font-semibold text-[#072144]">
                        {professional.projects}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="px-5 py-4">
                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${getStatusClasses(
                          professional.status
                        )}`}
                      >
                        {getStatusIcon(professional.status)}
                        {professional.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() =>
                            setSelectedProfessional(professional)
                          }
                          title="View Details"
                          className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-100 transition"
                        >
                          <FaEye />
                        </button>

                        {professional.status === "Pending Approval" && (
                          <button
                            onClick={() =>
                              updateStatus(professional.id, "Active")
                            }
                            title="Approve"
                            className="w-9 h-9 rounded-lg bg-green-50 text-green-600 flex items-center justify-center hover:bg-green-100 transition"
                          >
                            <FaCheck />
                          </button>
                        )}

                        {professional.status === "Active" && (
                          <button
                            onClick={() =>
                              updateStatus(professional.id, "Inactive")
                            }
                            title="Deactivate"
                            className="w-9 h-9 rounded-lg bg-yellow-50 text-yellow-600 flex items-center justify-center hover:bg-yellow-100 transition"
                          >
                            <FaBan />
                          </button>
                        )}

                        {professional.status === "Inactive" && (
                          <button
                            onClick={() =>
                              updateStatus(professional.id, "Active")
                            }
                            title="Activate"
                            className="w-9 h-9 rounded-lg bg-green-50 text-green-600 flex items-center justify-center hover:bg-green-100 transition"
                          >
                            <FaCheckCircle />
                          </button>
                        )}

                        <button
                          onClick={() =>
                            deleteProfessional(professional.id)
                          }
                          title="Delete"
                          className="w-9 h-9 rounded-lg bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-100 transition"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="px-5 py-12 text-center"
                  >
                    <div className="flex flex-col items-center">
                      <FaUserTie className="text-4xl text-gray-300 mb-3" />

                      <h3 className="font-semibold text-gray-600">
                        No professionals found
                      </h3>

                      <p className="text-sm text-gray-400 mt-1">
                        Try changing your search or filters.
                      </p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Professional Details Modal */}
      {selectedProfessional && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
              <div>
                <h2 className="text-xl font-bold text-[#072144]">
                  Professional Details
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {selectedProfessional.id}
                </p>
              </div>

              <button
                onClick={() => setSelectedProfessional(null)}
                className="w-9 h-9 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200"
              >
                <FaTimes />
              </button>
            </div>

            {/* Profile */}
            <div className="p-6">
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                <div className="w-20 h-20 rounded-full bg-[#072144] text-[#FCBC14] flex items-center justify-center text-2xl font-bold">
                  {selectedProfessional.name
                    .split(" ")
                    .map((name) => name[0])
                    .join("")
                    .slice(0, 2)}
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <h3 className="text-2xl font-bold text-[#072144]">
                      {selectedProfessional.name}
                    </h3>

                    <span
                      className={`w-fit inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${getStatusClasses(
                        selectedProfessional.status
                      )}`}
                    >
                      {getStatusIcon(selectedProfessional.status)}
                      {selectedProfessional.status}
                    </span>
                  </div>

                  <p className="text-gray-500 mt-1">
                    {selectedProfessional.service}
                  </p>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-7">
                <DetailItem
                  icon={<FaEnvelope />}
                  label="Email"
                  value={selectedProfessional.email}
                />

                <DetailItem
                  icon={<FaPhone />}
                  label="Phone"
                  value={selectedProfessional.phone}
                />

                <DetailItem
                  icon={<FaMapMarkerAlt />}
                  label="City"
                  value={selectedProfessional.city}
                />

                <DetailItem
                  icon={<FaBriefcase />}
                  label="Experience"
                  value={`${selectedProfessional.experience} years`}
                />

                <DetailItem
                  icon={<FaCalendarAlt />}
                  label="Joined"
                  value={selectedProfessional.joined}
                />

                <DetailItem
                  icon={<FaUserTie />}
                  label="Completed Projects"
                  value={selectedProfessional.projects}
                />

                <DetailItem
                  icon={<FaCheckCircle />}
                  label="Rating"
                  value={
                    selectedProfessional.rating
                      ? `${selectedProfessional.rating} / 5`
                      : "Not Rated"
                  }
                />

                <DetailItem
                  icon={<FaBriefcase />}
                  label="Service"
                  value={selectedProfessional.service}
                />
              </div>

              {/* Address */}
              <div className="mt-5 p-4 bg-gray-50 rounded-xl">
                <p className="text-xs font-semibold text-gray-400 uppercase mb-2">
                  Address
                </p>

                <div className="flex items-start gap-3 text-gray-700">
                  <FaMapMarkerAlt className="mt-1 text-[#FCBC14]" />
                  <span>{selectedProfessional.address}</span>
                </div>
              </div>

              {/* Skills */}
              <div className="mt-5 p-4 bg-gray-50 rounded-xl">
                <p className="text-xs font-semibold text-gray-400 uppercase mb-2">
                  Skills & Expertise
                </p>

                <p className="text-gray-700">
                  {selectedProfessional.skills}
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 mt-6">
                {selectedProfessional.status === "Pending Approval" && (
                  <>
                    <button
                      onClick={() =>
                        updateStatus(
                          selectedProfessional.id,
                          "Active"
                        )
                      }
                      className="flex items-center gap-2 px-5 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
                    >
                      <FaCheck />
                      Approve Professional
                    </button>

                    <button
                      onClick={() =>
                        updateStatus(
                          selectedProfessional.id,
                          "Inactive"
                        )
                      }
                      className="flex items-center gap-2 px-5 py-3 rounded-lg bg-gray-700 text-white hover:bg-gray-800 transition"
                    >
                      <FaBan />
                      Reject
                    </button>
                  </>
                )}

                {selectedProfessional.status === "Active" && (
                  <button
                    onClick={() =>
                      updateStatus(
                        selectedProfessional.id,
                        "Inactive"
                      )
                    }
                    className="flex items-center gap-2 px-5 py-3 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600 transition"
                  >
                    <FaBan />
                    Deactivate
                  </button>
                )}

                {selectedProfessional.status === "Inactive" && (
                  <button
                    onClick={() =>
                      updateStatus(
                        selectedProfessional.id,
                        "Active"
                      )
                    }
                    className="flex items-center gap-2 px-5 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
                  >
                    <FaCheckCircle />
                    Activate
                  </button>
                )}

                <button
                  onClick={() =>
                    deleteProfessional(selectedProfessional.id)
                  }
                  className="flex items-center gap-2 px-5 py-3 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
                >
                  <FaTrash />
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const DetailItem = ({ icon, label, value }) => {
  return (
    <div className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl">
      <div className="w-9 h-9 rounded-lg bg-[#072144] text-[#FCBC14] flex items-center justify-center flex-shrink-0">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs text-gray-400 uppercase font-semibold">
          {label}
        </p>

        <p className="text-sm font-medium text-gray-700 mt-1 break-words">
          {value}
        </p>
      </div>
    </div>
  );
};

export default AdminProfessionals;