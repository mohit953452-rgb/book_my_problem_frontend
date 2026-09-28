import React from "react";
import {
  FaProjectDiagram,
  FaClock,
  FaCheckCircle,
  FaSpinner,
  FaMapMarkerAlt,
  FaRupeeSign,
  FaSearch,
} from "react-icons/fa";

const AdminProjects = () => {
  const projects = [
    {
      id: "BMP-1025",
      customer: "Rajesh Sharma",
      service: "Home Renovation",
      location: "Kathmandu",
      amount: "Rs. 2,45,000",
      status: "In Progress",
      date: "27 Sep 2026",
    },
    {
      id: "BMP-1024",
      customer: "Sita Construction",
      service: "Electrical Work",
      location: "Lalitpur",
      amount: "Rs. 85,000",
      status: "Completed",
      date: "26 Sep 2026",
    },
    {
      id: "BMP-1023",
      customer: "Aarav Hotel",
      service: "Plumbing",
      location: "Pokhara",
      amount: "Rs. 1,25,000",
      status: "Pending",
      date: "25 Sep 2026",
    },
    {
      id: "BMP-1022",
      customer: "Ramesh Thapa",
      service: "Interior Design",
      location: "Bhaktapur",
      amount: "Rs. 3,20,000",
      status: "In Progress",
      date: "24 Sep 2026",
    },
    {
      id: "BMP-1021",
      customer: "Sunrise School",
      service: "Maintenance",
      location: "Chitwan",
      amount: "Rs. 95,000",
      status: "Completed",
      date: "23 Sep 2026",
    },
    {
      id: "BMP-1020",
      customer: "Everest Residence",
      service: "Painting",
      location: "Kathmandu",
      amount: "Rs. 75,000",
      status: "Pending",
      date: "22 Sep 2026",
    },
  ];

  const totalProjects = projects.length;

  const pendingProjects = projects.filter(
    (project) => project.status === "Pending"
  ).length;

  const progressProjects = projects.filter(
    (project) => project.status === "In Progress"
  ).length;

  const completedProjects = projects.filter(
    (project) => project.status === "Completed"
  ).length;

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <div className="bg-white border-b border-gray-200 px-6 py-5">
        <h1 className="text-2xl font-bold text-gray-900">
          Projects
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Manage and monitor all Book My Problem projects.
        </p>
      </div>

      <div className="p-6">

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-7">

          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  Total Projects
                </p>
                <h2 className="text-2xl font-bold mt-2">
                  {totalProjects}
                </h2>
              </div>

              <div className="w-11 h-11 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                <FaProjectDiagram />
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  Pending
                </p>
                <h2 className="text-2xl font-bold mt-2">
                  {pendingProjects}
                </h2>
              </div>

              <div className="w-11 h-11 rounded-lg bg-yellow-100 text-yellow-600 flex items-center justify-center">
                <FaClock />
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  In Progress
                </p>
                <h2 className="text-2xl font-bold mt-2">
                  {progressProjects}
                </h2>
              </div>

              <div className="w-11 h-11 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                <FaSpinner />
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  Completed
                </p>
                <h2 className="text-2xl font-bold mt-2">
                  {completedProjects}
                </h2>
              </div>

              <div className="w-11 h-11 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
                <FaCheckCircle />
              </div>
            </div>
          </div>

        </div>

        {/* SEARCH */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 mb-5">
          <div className="relative max-w-md">

            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              placeholder="Search project, customer or service..."
              className="w-full border border-gray-300 rounded-lg pl-11 pr-4 py-3 outline-none focus:border-[#072144]"
            />

          </div>
        </div>

        {/* PROJECT TABLE */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">

          <div className="px-6 py-5 border-b border-gray-200">
            <h2 className="font-bold text-lg text-gray-900">
              Recent Projects
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Latest projects received through Book My Problem.
            </p>
          </div>

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>
                <tr className="bg-gray-50 text-left text-xs uppercase text-gray-500">

                  <th className="px-6 py-4">
                    Project
                  </th>

                  <th className="px-6 py-4">
                    Customer
                  </th>

                  <th className="px-6 py-4">
                    Service
                  </th>

                  <th className="px-6 py-4">
                    Location
                  </th>

                  <th className="px-6 py-4">
                    Amount
                  </th>

                  <th className="px-6 py-4">
                    Status
                  </th>

                  <th className="px-6 py-4">
                    Date
                  </th>

                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">

                {projects.map((project) => (

                  <tr
                    key={project.id}
                    className="hover:bg-gray-50 transition"
                  >

                    <td className="px-6 py-4">
                      <p className="font-semibold text-gray-900">
                        {project.id}
                      </p>
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-700">
                      {project.customer}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {project.service}
                    </td>

                    <td className="px-6 py-4">

                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <FaMapMarkerAlt className="text-gray-400" />
                        {project.location}
                      </div>

                    </td>

                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {project.amount}
                    </td>

                    <td className="px-6 py-4">

                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          project.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : project.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {project.status}
                      </span>

                    </td>

                    <td className="px-6 py-4 text-sm text-gray-500">
                      {project.date}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>
    </div>
  );
};

export default AdminProjects;