import React, { useState } from "react";
import {
  FaMoneyBillWave,
  FaCheckCircle,
  FaClock,
  FaExclamationCircle,
  FaSearch,
  FaEye,
  FaTimes,
  FaCreditCard,
  FaUser,
  FaProjectDiagram,
  FaCalendarAlt,
  FaRupeeSign,
} from "react-icons/fa";

const initialPayments = [
  {
    id: "PAY-1001",
    projectId: "PRJ-1001",
    customer: "Ram Sharma",
    project: "House Renovation",
    amount: 150000,
    paidAmount: 150000,
    remainingAmount: 0,
    method: "Bank Transfer",
    date: "2026-09-20",
    status: "Paid",
  },
  {
    id: "PAY-1002",
    projectId: "PRJ-1002",
    customer: "Sita Thapa",
    project: "Interior Design",
    amount: 200000,
    paidAmount: 100000,
    remainingAmount: 100000,
    method: "eSewa",
    date: "2026-09-21",
    status: "Partial",
  },
  {
    id: "PAY-1003",
    projectId: "PRJ-1003",
    customer: "Hari KC",
    project: "Electrical Work",
    amount: 85000,
    paidAmount: 0,
    remainingAmount: 85000,
    method: "Cash",
    date: "2026-09-22",
    status: "Pending",
  },
  {
    id: "PAY-1004",
    projectId: "PRJ-1004",
    customer: "Bikash Gurung",
    project: "Home Construction",
    amount: 500000,
    paidAmount: 500000,
    remainingAmount: 0,
    method: "Bank Transfer",
    date: "2026-09-23",
    status: "Paid",
  },
  {
    id: "PAY-1005",
    projectId: "PRJ-1005",
    customer: "Anita Rai",
    project: "Painting Work",
    amount: 75000,
    paidAmount: 30000,
    remainingAmount: 45000,
    method: "Khalti",
    date: "2026-09-24",
    status: "Partial",
  },
  {
    id: "PAY-1006",
    projectId: "PRJ-1006",
    customer: "Suman Adhikari",
    project: "Plumbing Work",
    amount: 60000,
    paidAmount: 0,
    remainingAmount: 60000,
    method: "Cash",
    date: "2026-09-25",
    status: "Pending",
  },
];

const AdminPayments = () => {
  const [payments, setPayments] = useState(initialPayments);
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedPayment, setSelectedPayment] = useState(null);

  // ==========================================
  // FORMAT CURRENCY
  // ==========================================

  const formatCurrency = (amount) => {
    return `Rs. ${amount.toLocaleString("en-IN")}`;
  };

  // ==========================================
  // FILTER PAYMENTS
  // ==========================================

  const filteredPayments = payments.filter((payment) => {
    const matchesStatus =
      activeFilter === "All"
        ? true
        : payment.status === activeFilter;

    const searchText = search.toLowerCase();

    const matchesSearch =
      payment.id.toLowerCase().includes(searchText) ||
      payment.projectId.toLowerCase().includes(searchText) ||
      payment.customer.toLowerCase().includes(searchText) ||
      payment.project.toLowerCase().includes(searchText);

    return matchesStatus && matchesSearch;
  });

  // ==========================================
  // COUNTS
  // ==========================================

  const totalPayments = payments.length;

  const paidPayments = payments.filter(
    (payment) => payment.status === "Paid"
  ).length;

  const partialPayments = payments.filter(
    (payment) => payment.status === "Partial"
  ).length;

  const pendingPayments = payments.filter(
    (payment) => payment.status === "Pending"
  ).length;

  // ==========================================
  // MONEY CALCULATIONS
  // ==========================================

  const totalAmount = payments.reduce(
    (total, payment) => total + payment.amount,
    0
  );

  const totalReceived = payments.reduce(
    (total, payment) => total + payment.paidAmount,
    0
  );

  const totalPending = payments.reduce(
    (total, payment) => total + payment.remainingAmount,
    0
  );

  // ==========================================
  // UPDATE PAYMENT STATUS
  // ==========================================

  const updatePaymentStatus = (id, newStatus) => {
    setPayments((prev) =>
      prev.map((payment) => {
        if (payment.id !== id) {
          return payment;
        }

        if (newStatus === "Paid") {
          return {
            ...payment,
            status: "Paid",
            paidAmount: payment.amount,
            remainingAmount: 0,
          };
        }

        if (newStatus === "Pending") {
          return {
            ...payment,
            status: "Pending",
            paidAmount: 0,
            remainingAmount: payment.amount,
          };
        }

        return {
          ...payment,
          status: "Partial",
        };
      })
    );

    setSelectedPayment(null);
  };

  // ==========================================
  // STATUS STYLE
  // ==========================================

  const getStatusStyle = (status) => {
    if (status === "Paid") {
      return "bg-green-100 text-green-700";
    }

    if (status === "Partial") {
      return "bg-yellow-100 text-yellow-700";
    }

    return "bg-red-100 text-red-700";
  };

  // ==========================================
  // STATUS ICON
  // ==========================================

  const getStatusIcon = (status) => {
    if (status === "Paid") {
      return <FaCheckCircle />;
    }

    if (status === "Partial") {
      return <FaClock />;
    }

    return <FaExclamationCircle />;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">

      {/* ==========================================
          HEADER
      ========================================== */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#072144]">
            Payments
          </h1>

          <p className="text-gray-500 mt-1">
            Manage all project payments and transactions.
          </p>
        </div>

      </div>

      {/* ==========================================
          SUMMARY CARDS
      ========================================== */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">

        {/* TOTAL */}

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Total Payments
              </p>

              <h2 className="text-2xl font-bold text-[#072144] mt-1">
                {totalPayments}
              </h2>
            </div>

            <div className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
              <FaMoneyBillWave />
            </div>

          </div>

        </div>

        {/* RECEIVED */}

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Total Received
              </p>

              <h2 className="text-xl font-bold text-green-600 mt-1">
                {formatCurrency(totalReceived)}
              </h2>
            </div>

            <div className="w-11 h-11 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
              <FaCheckCircle />
            </div>

          </div>

        </div>

        {/* PENDING */}

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Pending Amount
              </p>

              <h2 className="text-xl font-bold text-red-600 mt-1">
                {formatCurrency(totalPending)}
              </h2>
            </div>

            <div className="w-11 h-11 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
              <FaExclamationCircle />
            </div>

          </div>

        </div>

        {/* TOTAL VALUE */}

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Total Project Value
              </p>

              <h2 className="text-xl font-bold text-[#072144] mt-1">
                {formatCurrency(totalAmount)}
              </h2>
            </div>

            <div className="w-11 h-11 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center">
              <FaRupeeSign />
            </div>

          </div>

        </div>

      </div>

      {/* ==========================================
          STATUS COUNTS
      ========================================== */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">

        <button
          onClick={() => setActiveFilter("Paid")}
          className={`text-left bg-white rounded-2xl border shadow-sm p-4 transition-all ${
            activeFilter === "Paid"
              ? "border-green-400 ring-2 ring-green-100"
              : "border-gray-100 hover:border-green-300"
          }`}
        >
          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
              <FaCheckCircle />
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Paid
              </p>

              <p className="text-xl font-bold text-[#072144]">
                {paidPayments}
              </p>
            </div>

          </div>
        </button>

        <button
          onClick={() => setActiveFilter("Partial")}
          className={`text-left bg-white rounded-2xl border shadow-sm p-4 transition-all ${
            activeFilter === "Partial"
              ? "border-yellow-400 ring-2 ring-yellow-100"
              : "border-gray-100 hover:border-yellow-300"
          }`}
        >
          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-lg bg-yellow-100 text-yellow-600 flex items-center justify-center">
              <FaClock />
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Partial
              </p>

              <p className="text-xl font-bold text-[#072144]">
                {partialPayments}
              </p>
            </div>

          </div>
        </button>

        <button
          onClick={() => setActiveFilter("Pending")}
          className={`text-left bg-white rounded-2xl border shadow-sm p-4 transition-all ${
            activeFilter === "Pending"
              ? "border-red-400 ring-2 ring-red-100"
              : "border-gray-100 hover:border-red-300"
          }`}
        >
          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center">
              <FaExclamationCircle />
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Pending
              </p>

              <p className="text-xl font-bold text-[#072144]">
                {pendingPayments}
              </p>
            </div>

          </div>
        </button>

      </div>

      {/* ==========================================
          FILTER + SEARCH
      ========================================== */}

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 mb-5">

        <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">

          {/* FILTER */}

          <div className="flex flex-wrap gap-2">

            {["All", "Paid", "Partial", "Pending"].map(
              (status) => (
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
              )
            )}

          </div>

          {/* SEARCH */}

          <div className="relative w-full lg:w-80">

            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              placeholder="Search payment..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-[#FCBC14] focus:ring-2 focus:ring-[#FCBC14]/20"
            />

          </div>

        </div>

      </div>

      {/* ==========================================
          PAYMENT TABLE
      ========================================== */}

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full min-w-[950px]">

            <thead className="bg-[#072144] text-white">

              <tr>

                <th className="text-left px-5 py-4 text-sm font-semibold">
                  Payment
                </th>

                <th className="text-left px-5 py-4 text-sm font-semibold">
                  Customer
                </th>

                <th className="text-left px-5 py-4 text-sm font-semibold">
                  Project
                </th>

                <th className="text-left px-5 py-4 text-sm font-semibold">
                  Amount
                </th>

                <th className="text-left px-5 py-4 text-sm font-semibold">
                  Paid
                </th>

                <th className="text-left px-5 py-4 text-sm font-semibold">
                  Remaining
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

              {filteredPayments.length === 0 ? (

                <tr>

                  <td
                    colSpan="8"
                    className="text-center py-12 text-gray-500"
                  >
                    No payments found.
                  </td>

                </tr>

              ) : (

                filteredPayments.map((payment) => (

                  <tr
                    key={payment.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-all"
                  >

                    {/* PAYMENT */}

                    <td className="px-5 py-4">

                      <p className="font-semibold text-[#072144]">
                        {payment.id}
                      </p>

                      <p className="text-xs text-gray-400">
                        {payment.projectId}
                      </p>

                    </td>

                    {/* CUSTOMER */}

                    <td className="px-5 py-4">

                      <div className="flex items-center gap-2">

                        <div className="w-9 h-9 rounded-full bg-[#FCBC14]/20 text-[#072144] flex items-center justify-center">
                          <FaUser />
                        </div>

                        <span className="font-medium text-gray-700">
                          {payment.customer}
                        </span>

                      </div>

                    </td>

                    {/* PROJECT */}

                    <td className="px-5 py-4">

                      <div className="flex items-center gap-2">

                        <FaProjectDiagram className="text-gray-400" />

                        <span className="text-gray-700">
                          {payment.project}
                        </span>

                      </div>

                    </td>

                    {/* AMOUNT */}

                    <td className="px-5 py-4 font-semibold text-[#072144]">
                      {formatCurrency(payment.amount)}
                    </td>

                    {/* PAID */}

                    <td className="px-5 py-4 font-semibold text-green-600">
                      {formatCurrency(payment.paidAmount)}
                    </td>

                    {/* REMAINING */}

                    <td className="px-5 py-4 font-semibold text-red-600">
                      {formatCurrency(payment.remainingAmount)}
                    </td>

                    {/* STATUS */}

                    <td className="px-5 py-4">

                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${getStatusStyle(
                          payment.status
                        )}`}
                      >
                        {getStatusIcon(payment.status)}
                        {payment.status}
                      </span>

                    </td>

                    {/* ACTION */}

                    <td className="px-5 py-4">

                      <div className="flex justify-center">

                        <button
                          onClick={() =>
                            setSelectedPayment(payment)
                          }
                          className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-[#FCBC14] hover:text-[#072144] transition-all"
                          title="View Payment Details"
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
          PAYMENT DETAILS MODAL
      ========================================== */}

      {selectedPayment && (

        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

          {/* BACKDROP */}

          <div
            onClick={() => setSelectedPayment(null)}
            className="absolute inset-0 bg-black/50"
          />

          {/* MODAL */}

          <div className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden">

            {/* MODAL HEADER */}

            <div className="bg-[#072144] text-white p-5 flex items-center justify-between">

              <div>

                <h2 className="text-xl font-bold">
                  Payment Details
                </h2>

                <p className="text-gray-300 text-sm mt-1">
                  {selectedPayment.id}
                </p>

              </div>

              <button
                onClick={() => setSelectedPayment(null)}
                className="w-9 h-9 rounded-lg hover:bg-[#FCBC14] hover:text-[#072144] flex items-center justify-center transition-all"
              >
                <FaTimes />
              </button>

            </div>

            {/* MODAL CONTENT */}

            <div className="p-6">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <Detail
                  icon={<FaUser />}
                  label="Customer"
                  value={selectedPayment.customer}
                />

                <Detail
                  icon={<FaProjectDiagram />}
                  label="Project"
                  value={selectedPayment.project}
                />

                <Detail
                  icon={<FaMoneyBillWave />}
                  label="Total Amount"
                  value={formatCurrency(
                    selectedPayment.amount
                  )}
                />

                <Detail
                  icon={<FaCheckCircle />}
                  label="Paid Amount"
                  value={formatCurrency(
                    selectedPayment.paidAmount
                  )}
                />

                <Detail
                  icon={<FaExclamationCircle />}
                  label="Remaining"
                  value={formatCurrency(
                    selectedPayment.remainingAmount
                  )}
                />

                <Detail
                  icon={<FaCreditCard />}
                  label="Payment Method"
                  value={selectedPayment.method}
                />

                <Detail
                  icon={<FaCalendarAlt />}
                  label="Payment Date"
                  value={selectedPayment.date}
                />

                <div>
                  <p className="text-xs text-gray-500 mb-1">
                    Status
                  </p>

                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${getStatusStyle(
                      selectedPayment.status
                    )}`}
                  >
                    {getStatusIcon(selectedPayment.status)}
                    {selectedPayment.status}
                  </span>
                </div>

              </div>

              {/* STATUS UPDATE */}

              <div className="mt-7 pt-5 border-t border-gray-100">

                <p className="text-sm font-semibold text-[#072144] mb-3">
                  Update Payment Status
                </p>

                <div className="flex flex-wrap gap-2">

                  <button
                    onClick={() =>
                      updatePaymentStatus(
                        selectedPayment.id,
                        "Paid"
                      )
                    }
                    className="px-4 py-2 rounded-lg bg-green-100 text-green-700 text-sm font-semibold hover:bg-green-600 hover:text-white transition-all"
                  >
                    Mark Paid
                  </button>

                  <button
                    onClick={() =>
                      updatePaymentStatus(
                        selectedPayment.id,
                        "Partial"
                      )
                    }
                    className="px-4 py-2 rounded-lg bg-yellow-100 text-yellow-700 text-sm font-semibold hover:bg-yellow-500 hover:text-white transition-all"
                  >
                    Mark Partial
                  </button>

                  <button
                    onClick={() =>
                      updatePaymentStatus(
                        selectedPayment.id,
                        "Pending"
                      )
                    }
                    className="px-4 py-2 rounded-lg bg-red-100 text-red-700 text-sm font-semibold hover:bg-red-600 hover:text-white transition-all"
                  >
                    Mark Pending
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

// ==========================================
// DETAIL COMPONENT
// ==========================================

const Detail = ({ icon, label, value }) => {
  return (
    <div className="border border-gray-100 rounded-xl p-4">

      <div className="flex items-center gap-2 text-gray-400 text-xs mb-1">
        {icon}
        <span>{label}</span>
      </div>

      <p className="font-semibold text-[#072144]">
        {value}
      </p>

    </div>
  );
};

export default AdminPayments;