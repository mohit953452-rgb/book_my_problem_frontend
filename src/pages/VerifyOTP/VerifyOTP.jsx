import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaArrowLeft,
  FaCheckCircle,
  FaEnvelope,
} from "react-icons/fa";

const VerifyOTP = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [pendingRegistration, setPendingRegistration] =
    useState(null);

  useEffect(() => {
    const savedRegistration =
      localStorage.getItem(
        "bookmyproblem_pending_registration"
      );

    if (!savedRegistration) {
      navigate("/register");
      return;
    }

    try {
      const data = JSON.parse(savedRegistration);

      setPendingRegistration(data);
    } catch (error) {
      console.error(
        "Invalid registration data:",
        error
      );

      localStorage.removeItem(
        "bookmyproblem_pending_registration"
      );

      navigate("/register");
    }
  }, [navigate]);

  // =====================================================
  // OTP INPUT
  // =====================================================

  const handleOtpChange = (e) => {
    const value = e.target.value
      .replace(/\D/g, "")
      .slice(0, 6);

    setOtp(value);
    setError("");
  };

  // =====================================================
  // VERIFY OTP
  // =====================================================

  const handleVerify = (e) => {
    e.preventDefault();

    setError("");

    if (!pendingRegistration) {
      setError(
        "Registration information not found."
      );
      return;
    }

    if (otp.length !== 6) {
      setError("Please enter the 6-digit OTP.");
      return;
    }

    setLoading(true);

    // =====================================================
    // CHECK OTP
    // =====================================================

    if (otp !== pendingRegistration.otp) {
      setError("Invalid OTP. Please try again.");
      setLoading(false);
      return;
    }

    // =====================================================
    // OTP EXPIRY
    // =====================================================

    const otpAge =
      Date.now() -
      pendingRegistration.otpCreatedAt;

    const OTP_EXPIRY_TIME = 5 * 60 * 1000;

    if (otpAge > OTP_EXPIRY_TIME) {
      setError(
        "OTP has expired. Please register again."
      );

      localStorage.removeItem(
        "bookmyproblem_pending_registration"
      );

      setLoading(false);

      return;
    }

    // =====================================================
    // GET CUSTOMERS
    // =====================================================

    const existingCustomers =
      JSON.parse(
        localStorage.getItem("bookmyproblem_customers")
      ) || [];

    // =====================================================
    // CREATE CUSTOMER
    // =====================================================

    const newCustomer = {
      id: pendingRegistration.id,

      name: pendingRegistration.name,

      email: pendingRegistration.email,

      phone: pendingRegistration.phone,

      // CUSTOMER INFORMATION
      projectNo: "Not Assigned",

      projectName: "No Project Yet",

      address: "Not Provided",

      city: "Not Provided",

      // ACCOUNT INFORMATION
      password: pendingRegistration.password,

      status: "Active",

      emailVerified: true,

      joined: new Date().toISOString(),

      // LOCATION
      location: {
        city: "",
        area: "",
        latitude: null,
        longitude: null,
      },

      // PROJECT COUNT
      totalProjects: 0,

      // PAYMENT
      totalSpent: 0,
    };

    // =====================================================
    // SAVE CUSTOMER
    // =====================================================

    const updatedCustomers = [
      ...existingCustomers,
      newCustomer,
    ];

    localStorage.setItem(
      "bookmyproblem_customers",
      JSON.stringify(updatedCustomers)
    );

    // =====================================================
    // REMOVE PENDING REGISTRATION
    // =====================================================

    localStorage.removeItem(
      "bookmyproblem_pending_registration"
    );

    // =====================================================
    // SUCCESS
    // =====================================================

    setLoading(false);

    navigate("/login", {
      state: {
        verified: true,
        email: newCustomer.email,
      },
    });
  };

  // =====================================================
  // RESEND OTP
  // =====================================================

  const handleResendOTP = () => {
    if (!pendingRegistration) {
      return;
    }

    const newOTP = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const updatedRegistration = {
      ...pendingRegistration,
      otp: newOTP,
      otpCreatedAt: Date.now(),
    };

    localStorage.setItem(
      "bookmyproblem_pending_registration",
      JSON.stringify(updatedRegistration)
    );

    setPendingRegistration(
      updatedRegistration
    );

    setOtp("");

    setError("");

    console.log(
      "BOOK MY PROBLEM NEW OTP:",
      newOTP
    );

    alert(
      "New OTP generated. Check the browser console for development OTP."
    );
  };

  if (!pendingRegistration) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="px-5 sm:px-8 py-6">

        <Link
          to="/"
          className="inline-flex items-center gap-2"
        >

          <div className="w-10 h-10 bg-[#072144] text-white rounded-lg flex items-center justify-center">
            <FaCheckCircle />
          </div>

          <span className="text-2xl font-bold text-gray-900">
            Book My
            <span className="text-[#FCBC14]">
              Problem
            </span>
          </span>

        </Link>

      </div>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="flex-1 flex items-center justify-center px-4 py-10">

        <div className="w-full max-w-md">

          <div className="bg-white rounded-2xl shadow-xl p-7 sm:p-10">

            {/* ICON */}

            <div className="w-16 h-16 mx-auto bg-[#072144] rounded-full flex items-center justify-center text-[#FCBC14] text-2xl">
              <FaEnvelope />
            </div>

            {/* TITLE */}

            <div className="text-center mt-6">

              <span className="text-[#072144] font-semibold text-sm">
                VERIFY YOUR ACCOUNT
              </span>

              <h1 className="mt-2 text-3xl font-bold text-gray-900">
                Enter OTP
              </h1>

              <p className="mt-3 text-gray-500 text-sm">
                We sent a verification code to
              </p>

              <p className="mt-1 font-semibold text-gray-900 break-all">
                {pendingRegistration.email}
              </p>

            </div>

            {/* DEVELOPMENT OTP */}

            <div className="mt-6 rounded-lg bg-yellow-50 border border-yellow-200 px-4 py-3">

              <p className="text-xs text-yellow-700">
                Development Mode
              </p>

              <p className="mt-1 text-sm text-yellow-900">
                OTP is available in your browser
                console.
              </p>

            </div>

            {/* ERROR */}

            {error && (
              <div className="mt-5 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* FORM */}

            <form
              onSubmit={handleVerify}
              className="mt-6"
            >

              <label className="block text-sm font-medium text-gray-700 mb-2">
                6-Digit OTP
              </label>

              <input
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                value={otp}
                onChange={handleOtpChange}
                maxLength={6}
                placeholder="Enter 6-digit OTP"
                className="w-full text-center tracking-[0.5em] text-2xl font-semibold border border-gray-300 rounded-lg px-4 py-4 outline-none focus:border-[#072144] focus:ring-1 focus:ring-[#072144]"
              />

              {/* VERIFY */}

              <button
                type="submit"
                disabled={loading}
                className="mt-5 w-full flex items-center justify-center gap-3 bg-[#072144] text-white py-3.5 rounded-lg font-semibold hover:bg-[#FCBC14] hover:text-[#072144] transition disabled:opacity-60"
              >

                {loading
                  ? "Verifying..."
                  : "Verify OTP"}

                {!loading && (
                  <FaCheckCircle />
                )}

              </button>

            </form>

            {/* RESEND */}

            <div className="text-center mt-6">

              <p className="text-sm text-gray-500">
                Didn't receive the OTP?
              </p>

              <button
                type="button"
                onClick={handleResendOTP}
                className="mt-1 text-sm font-semibold text-[#072144] hover:text-[#FCBC14]"
              >
                Resend OTP
              </button>

            </div>

            {/* BACK */}

            <Link
              to="/register"
              className="mt-7 flex items-center justify-center gap-2 text-sm text-gray-500 hover:text-[#072144]"
            >
              <FaArrowLeft />
              Back to Register
            </Link>

          </div>

        </div>

      </main>

    </div>
  );
};

export default VerifyOTP;