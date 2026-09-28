import React, { useState } from "react";
import {
  FaUsers,
  FaSearch,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaProjectDiagram,
} from "react-icons/fa";

const AdminCustomers = () => {
  const [search, setSearch] = useState("");

  const customers = [
    {
      id: "CUS-1001",
      name: "Rajesh Sharma",
      email: "rajesh@gmail.com",
      phone: "9800000001",
      projectNo: "BMP-1025",
      projectName: "Home Renovation",
      service: "Home Renovation",
      address: "Baneshwor, Kathmandu",
      location: "Kathmandu",
    },
    {
      id: "CUS-1002",
      name: "Sita Construction",
      email: "sita@gmail.com",
      phone: "9800000002",
      projectNo: "BMP-1024",
      projectName: "Electrical Work",
      service: "Electrical",
      address: "Jawalakhel, Lalitpur",
      location: "Lalitpur",
    },
    {
      id: "CUS-1003",
      name: "Aarav Hotel",
      email: "aaravhotel@gmail.com",
      phone: "9800000003",
      projectNo: "BMP-1023",
      projectName: "Plumbing",
      service: "Plumbing",
      address: "Lakeside, Pokhara",
      location: "Pokhara",
    },
    {
      id: "CUS-1004",
      name: "Ramesh Thapa",
      email: "ramesh@gmail.com",
      phone: "9800000004",
      projectNo: "BMP-1022",
      projectName: "Interior Design",
      service: "Interior Design",
      address: "Suryabinayak, Bhaktapur",
      location: "Bhaktapur",
    },
  ];

  const filteredCustomers = customers.filter((customer) => {
    const value = search.toLowerCase();

    return (
      customer.name.toLowerCase().includes(value) ||
      customer.email.toLowerCase().includes(value) ||
      customer.projectNo.toLowerCase().includes(value) ||
      customer.projectName.toLowerCase().includes(value) ||
      customer.location.toLowerCase().includes(value)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <div className="bg-white border-b border-gray-200 px-6 py-5">
        <h1 className="text-2xl font-bold text-gray-900">
          Customers
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          View and manage all Book My Problem customers.
        </p>
      </div>

      <div className="p-6">

        {/* CUSTOMER COUNT */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6 flex items-center gap-4">

          <div className="w-12 h-12 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
            <FaUsers />
          </div>

          <div>
            <p className="text-sm text-gray-500">
              Total Customers
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              {customers.length}
            </h2>
          </div>

        </div>

        {/* SEARCH */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6">

          <div className="relative max-w-lg">

            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search customer, email, project..."
              className="w-full border border-gray-300 rounded-lg pl-11 pr-4 py-3 outline-none focus:border-[#072144]"
            />

          </div>

        </div>

        {/* CUSTOMER CARDS */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">

          {filteredCustomers.map((customer) => (

            <div
              key={customer.id}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
            >

              {/* TOP */}
              <div className="flex items-start justify-between gap-4">

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-full bg-[#072144] text-white flex items-center justify-center font-bold text-lg">
                    {customer.name.charAt(0)}
                  </div>

                  <div>
                    <h2 className="font-bold text-gray-900">
                      {customer.name}
                    </h2>

                    <p className="text-xs text-gray-500">
                      {customer.id}
                    </p>
                  </div>

                </div>

                <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  Customer
                </span>

              </div>

              {/* DETAILS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">

                <div className="flex gap-3">
                  <FaEnvelope className="text-gray-400 mt-1" />

                  <div>
                    <p className="text-xs text-gray-400">
                      Email
                    </p>

                    <p className="text-sm font-medium text-gray-800 break-all">
                      {customer.email}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FaPhone className="text-gray-400 mt-1" />

                  <div>
                    <p className="text-xs text-gray-400">
                      Phone
                    </p>

                    <p className="text-sm font-medium text-gray-800">
                      {customer.phone}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FaProjectDiagram className="text-gray-400 mt-1" />

                  <div>
                    <p className="text-xs text-gray-400">
                      Project No.
                    </p>

                    <p className="text-sm font-semibold text-[#072144]">
                      {customer.projectNo}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Project Name
                  </p>

                  <p className="text-sm font-medium text-gray-800">
                    {customer.projectName}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Service
                  </p>

                  <p className="text-sm font-medium text-gray-800">
                    {customer.service}
                  </p>
                </div>

                <div className="flex gap-3">
                  <FaMapMarkerAlt className="text-gray-400 mt-1" />

                  <div>
                    <p className="text-xs text-gray-400">
                      Location
                    </p>

                    <p className="text-sm font-medium text-gray-800">
                      {customer.location}
                    </p>
                  </div>
                </div>

              </div>

              {/* ADDRESS */}
              <div className="mt-5 pt-5 border-t border-gray-100">

                <p className="text-xs text-gray-400">
                  Address
                </p>

                <p className="text-sm font-medium text-gray-800 mt-1">
                  {customer.address}
                </p>

              </div>

            </div>

          ))}

        </div>

        {filteredCustomers.length === 0 && (
          <div className="bg-white border border-gray-200 rounded-xl p-10 text-center">
            <p className="text-gray-500">
              No customers found.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminCustomers;