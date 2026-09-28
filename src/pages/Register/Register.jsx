
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUser,
  FaPhone,
  FaArrowRight,
  FaHome,
} from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // =====================================================
  // HANDLE INPUT
  // =====================================================

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
    setSuccess("");
  };

  // =====================================================
  // GENERATE CUSTOMER ID
  // =====================================================

  const generateCustomerId = () => {
    const existingCustomers =
      JSON.parse(localStorage.getItem("bookmyproblem_customers")) || [];

    const nextNumber = existingCustomers.length + 1001;

    return `CUS-${nextNumber}`;
  };

  // =====================================================
  // REGISTER
  // =====================================================

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    // PASSWORD CHECK
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // PASSWORD LENGTH
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    // TERMS CHECK
    if (!formData.terms) {
      setError("Please accept the Terms & Conditions.");
      return;
    }

    // GET EXISTING CUSTOMERS
    const existingCustomers =
      JSON.parse(localStorage.getItem("bookmyproblem_customers")) || [];

    // CHECK DUPLICATE EMAIL
    const emailExists = existingCustomers.some(
      (customer) =>
        customer.email.toLowerCase() ===
        formData.email.trim().toLowerCase()
    );

    if (emailExists) {
      setError("An account with this email already exists.");
      return;
    }

    // =====================================================
    // CUSTOMER OBJECT
    // =====================================================

    const newCustomer = {
      id: generateCustomerId(),

      name: formData.name.trim(),

      email: formData.email.trim().toLowerCase(),

      phone: formData.phone.trim(),

      // CUSTOMER INFORMATION
      projectNo: "Not Assigned",
      projectName: "No Project Yet",
      address: "Not Provided",
      city: "Not Provided",

      // ACCOUNT INFORMATION
      password: formData.password,

      status: "Active",

      joined: new Date().toISOString(),

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
    // SAVE CURRENT CUSTOMER
    // =====================================================

    localStorage.setItem(
      "bookmyproblem_current_customer",
      JSON.stringify(newCustomer)
    );

    // =====================================================
    // SUCCESS
    // =====================================================

    setSuccess(
      "Account created successfully! Redirecting to login..."
    );

    // CLEAR FORM
    setFormData({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      terms: false,
    });

    // GO TO LOGIN
    setTimeout(() => {
      navigate("/login");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* =====================================================
          TOP LOGO
      ===================================================== */}

      <div className="px-5 sm:px-8 py-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-[#072144] text-white rounded-lg flex items-center justify-center">
            <FaHome />
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

      <main className="flex-1 flex items-center justify-center px-4 py-8">

        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-2">

          {/* =================================================
              LEFT IMAGE
          ================================================= */}

          <div className="hidden lg:block relative min-h-[720px]">

            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
              alt="Beautiful home interior"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/45" />

            <div className="relative z-10 h-full flex flex-col justify-end p-10 text-white">

              <span className="text-yellow-300 font-semibold text-sm">
                START YOUR JOURNEY
              </span>

              <h2 className="mt-3 text-4xl font-bold">
                Your dream home starts here.
              </h2>

              <p className="mt-5 text-gray-200">
                Create your account and connect with
                professional home services.
              </p>

            </div>

          </div>

          {/* =================================================
              RIGHT FORM
          ================================================= */}

          <div className="p-6 sm:p-10 lg:p-12">

            <div className="w-full max-w-md mx-auto">

              <span className="text-[#072144] font-semibold text-sm">
                CREATE ACCOUNT
              </span>

              <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
                Get Started
              </h1>

              <p className="mt-3 text-gray-500">
                Create your account and start your home journey.
              </p>

              {/* =================================================
                  ERROR
              ================================================= */}

              {error && (
                <div className="mt-5 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              {/* =================================================
                  SUCCESS
              ================================================= */}

              {success && (
                <div className="mt-5 bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg text-sm">
                  {success}
                </div>
              )}

              {/* =================================================
                  FORM
              ================================================= */}

              <form
                onSubmit={handleSubmit}
                className="mt-7 space-y-4"
              >

                {/* ================= NAME ================= */}

                <div>

                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>

                  <div className="relative">

                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="
                        w-full
                        border
                        border-gray-300
                        rounded-lg
                        pl-11
                        pr-4
                        py-3.5
                        outline-none
                        focus:border-[#072144]
                        focus:ring-1
                        focus:ring-[#072144]
                      "
                    />

                  </div>

                </div>

                {/* ================= EMAIL ================= */}

                <div>

                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>

                  <div className="relative">

                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                      className="
                        w-full
                        border
                        border-gray-300
                        rounded-lg
                        pl-11
                        pr-4
                        py-3.5
                        outline-none
                        focus:border-[#072144]
                        focus:ring-1
                        focus:ring-[#072144]
                      "
                    />

                  </div>

                </div>

                {/* ================= PHONE ================= */}

                <div>

                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>

                  <div className="relative">

                    <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Enter your phone number"
                      className="
                        w-full
                        border
                        border-gray-300
                        rounded-lg
                        pl-11
                        pr-4
                        py-3.5
                        outline-none
                        focus:border-[#072144]
                        focus:ring-1
                        focus:ring-[#072144]
                      "
                    />

                  </div>

                </div>

                {/* ================= PASSWORD ================= */}

                <div>

                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>

                  <div className="relative">

                    <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      minLength="6"
                      placeholder="Enter password"
                      className="
                        w-full
                        border
                        border-gray-300
                        rounded-lg
                        pl-11
                        pr-12
                        py-3.5
                        outline-none
                        focus:border-[#072144]
                        focus:ring-1
                        focus:ring-[#072144]
                      "
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      className="
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        text-gray-400
                        hover:text-gray-700
                      "
                    >
                      {showPassword ? (
                        <FaEyeSlash />
                      ) : (
                        <FaEye />
                      )}
                    </button>

                  </div>

                </div>

                {/* ================= CONFIRM PASSWORD ================= */}

                <div>

                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password
                  </label>

                  <div className="relative">

                    <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      type={
                        showConfirmPassword
                          ? "text"
                          : "password"
                      }
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      minLength="6"
                      placeholder="Confirm password"
                      className="
                        w-full
                        border
                        border-gray-300
                        rounded-lg
                        pl-11
                        pr-12
                        py-3.5
                        outline-none
                        focus:border-[#072144]
                        focus:ring-1
                        focus:ring-[#072144]
                      "
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(
                          !showConfirmPassword
                        )
                      }
                      className="
                        absolute
                        right-4
                        top-1/2
                        -translate-y-1/2
                        text-gray-400
                        hover:text-gray-700
                      "
                    >
                      {showConfirmPassword ? (
                        <FaEyeSlash />
                      ) : (
                        <FaEye />
                      )}
                    </button>

                  </div>

                </div>

                {/* ================= TERMS ================= */}

                <div className="flex items-start gap-3">

                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    className="w-4 h-4 mt-1 accent-[#FCBC14]"
                  />

                  <label
                    htmlFor="terms"
                    className="text-sm text-gray-500"
                  >
                    I agree to the{" "}
                    <Link
                      to="/terms"
                      className="text-[#072144] font-medium hover:underline"
                    >
                      Terms & Conditions
                    </Link>{" "}
                    and{" "}
                    <Link
                      to="/privacy"
                      className="text-[#072144] font-medium hover:underline"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </label>

                </div>

                {/* ================= SUBMIT ================= */}

                <button
                  type="submit"
                  className="
                    w-full
                    flex
                    items-center
                    justify-center
                    gap-3
                    bg-[#072144]
                    text-white
                    py-3.5
                    rounded-lg
                    font-semibold
                    hover:bg-[#FCBC14]
                    hover:text-[#072144]
                    transition
                  "
                >
                  Create Account
                  <FaArrowRight />
                </button>

              </form>

              {/* =================================================
                  LOGIN
              ================================================= */}

              <p className="mt-7 text-center text-sm text-gray-500">

                Already have an account?{" "}

                <Link
                  to="/login"
                  className="font-semibold text-[#072144] hover:text-[#FCBC14]"
                >
                  Login
                </Link>

              </p>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
};

export default Register;

