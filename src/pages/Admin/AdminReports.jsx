import React from "react";
import {
  FaChartBar,
  FaRupeeSign,
  FaProjectDiagram,
  FaUsers,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

const AdminReports = () => {

  const monthlyRevenue = [
    { month: "Jan", value: "85,000" },
    { month: "Feb", value: "1,10,000" },
    { month: "Mar", value: "95,000" },
    { month: "Apr", value: "1,35,000" },
    { month: "May", value: "1,20,000" },
    { month: "Jun", value: "1,50,000" },
    { month: "Jul", value: "1,25,000" },
    { month: "Aug", value: "1,80,000" },
    { month: "Sep", value: "1,85,500" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HEADER */}
      <div className="bg-white border-b border-gray-200 px-6 py-5">

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
            <FaChartBar />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Reports
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              Business performance and project reports.
            </p>
          </div>

        </div>

      </div>

      <div className="p-6">

        {/* REPORT STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

          {/* REVENUE */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">

            <div className="flex justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  Total Revenue
                </p>

                <h2 className="text-2xl font-bold mt-2">
                  Rs. 12,85,500
                </h2>
              </div>

              <div className="w-11 h-11 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
                <FaRupeeSign />
              </div>

            </div>

          </div>

          {/* PROJECTS */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">

            <div className="flex justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  Total Projects
                </p>

                <h2 className="text-2xl font-bold mt-2">
                  370
                </h2>
              </div>

              <div className="w-11 h-11 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                <FaProjectDiagram />
              </div>

            </div>

          </div>

          {/* CUSTOMERS */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">

            <div className="flex justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  Total Customers
                </p>

                <h2 className="text-2xl font-bold mt-2">
                  460
                </h2>
              </div>

              <div className="w-11 h-11 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                <FaUsers />
              </div>

            </div>

          </div>

          {/* COMPLETED */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">

            <div className="flex justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  Completed Projects
                </p>

                <h2 className="text-2xl font-bold mt-2">
                  322
                </h2>
              </div>

              <div className="w-11 h-11 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
                <FaCheckCircle />
              </div>

            </div>

          </div>

        </div>

        {/* MONTHLY REVENUE */}
        <div className="bg-white border border-gray-200 rounded-xl mt-6 p-6">

          <div className="mb-6">
            <h2 className="text-lg font-bold text-gray-900">
              Monthly Revenue
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Revenue generated during the current year.
            </p>
          </div>

          <div className="space-y-4">

            {monthlyRevenue.map((item) => (

              <div
                key={item.month}
                className="flex items-center gap-4"
              >

                <span className="w-10 text-sm font-medium text-gray-600">
                  {item.month}
                </span>

                <div className="flex-1 h-8 bg-gray-100 rounded-lg overflow-hidden">

                  <div
                    className="h-full bg-[#072144] rounded-lg"
                    style={{
                      width: `${Math.min(
                        (parseInt(item.value.replace(",", "")) /
                          200000) *
                          100,
                        100
                      )}%`,
                    }}
                  />

                </div>

                <span className="w-24 text-right text-sm font-semibold text-gray-800">
                  Rs. {item.value}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* PROJECT STATUS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

          <div className="bg-white border border-gray-200 rounded-xl p-6">

            <h2 className="text-lg font-bold text-gray-900">
              Project Status
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Current project distribution.
            </p>

            <div className="space-y-5 mt-6">

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Completed</span>
                  <span className="font-semibold">
                    322
                  </span>
                </div>

                <div className="h-3 bg-gray-100 rounded-full">
                  <div
                    className="h-3 bg-green-500 rounded-full"
                    style={{ width: "87%" }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>In Progress</span>
                  <span className="font-semibold">
                    32
                  </span>
                </div>

                <div className="h-3 bg-gray-100 rounded-full">
                  <div
                    className="h-3 bg-blue-500 rounded-full"
                    style={{ width: "45%" }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Pending</span>
                  <span className="font-semibold">
                    16
                  </span>
                </div>

                <div className="h-3 bg-gray-100 rounded-full">
                  <div
                    className="h-3 bg-yellow-500 rounded-full"
                    style={{ width: "25%" }}
                  />
                </div>
              </div>

            </div>

          </div>

          {/* SERVICE REPORT */}
          <div className="bg-white border border-gray-200 rounded-xl p-6">

            <h2 className="text-lg font-bold text-gray-900">
              Service Performance
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Projects by service category.
            </p>

            <div className="space-y-4 mt-6">

              {[
                ["Home Renovation", "92"],
                ["Electrical", "76"],
                ["Plumbing", "64"],
                ["Interior Design", "58"],
                ["Maintenance", "45"],
              ].map(([service, count]) => (

                <div
                  key={service}
                  className="flex items-center justify-between border-b border-gray-100 pb-3"
                >

                  <span className="text-sm text-gray-700">
                    {service}
                  </span>

                  <span className="font-semibold text-gray-900">
                    {count} Projects
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default AdminReports;