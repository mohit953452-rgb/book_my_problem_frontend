
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
} from "react-icons/fa";

import bookmyprob from "../../assets/bookmyprob.jpg";
import bmptext from "../../assets/bmptext.jpg";

import { loginAdmin } from "../../utils/auth";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // =====================================================
  // HANDLE INPUT CHANGE
  // =====================================================

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setError("");
  };

  // =====================================================
  // HANDLE LOGIN
  // =====================================================

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    const result = loginAdmin(
      formData.email.trim(),
      formData.password
    );

    console.log("ADMIN LOGIN RESULT:", result);

    // ===================================================
    // LOGIN SUCCESS
    // ===================================================

    if (result.success) {
      /*
       * IMPORTANT:
       *
       * loginAdmin() already saves:
       *
       * bookmyproblem_admin
       * bookmyproblem_current_admin
       *
       * Isliye yahan dobara localStorage.setItem()
       * nahi karna hai.
       */

      console.log(
        "ADMIN LOGIN SUCCESS:",
        result.user
      );

      /*
       * Admin Dashboard par redirect
       *
       * replace: true ka matlab login page
       * browser history mein unnecessary nahi rahega.
       */
      navigate("/admin/dashboard", {
        replace: true,
      });

      return;
    }

    // ===================================================
    // LOGIN FAILED
    // ===================================================

    setError(
      result.message ||
        "Invalid admin email or password."
    );

    setLoading(false);
  };

  // =====================================================
  // UI
  // =====================================================

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="px-5 sm:px-8 py-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2"
        >
          {/* Logo */}
          <div className="w-12 h-12 bg-[#072144] rounded-full flex items-center justify-center overflow-hidden">
            <img
              src={bookmyprob}
              alt="Book My Problem"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Logo Text */}
          <img
            src={bmptext}
            alt="Book My Problem"
            className="w-30 h-12 object-contain"
          />
        </Link>
      </div>

      {/* =================================================
          MAIN
      ================================================= */}

      <main className="flex-1 flex items-center justify-center px-4 py-10">

        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-2">

          {/* =================================================
              LEFT IMAGE
          ================================================= */}

          <div className="hidden lg:block relative min-h-[620px]">

            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
              alt="Modern home"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/45" />

            <div className="relative z-10 h-full flex flex-col justify-end p-10 text-white">

              <span className="text-blue-200 font-semibold text-sm">
                ADMIN PORTAL
              </span>

              <h2 className="mt-3 text-4xl font-bold">
                Manage Book My Problem.
              </h2>

              <p className="mt-5 text-gray-200">
                Access projects, customers,
                professionals, payments and reports
                from your admin dashboard.
              </p>

            </div>
          </div>

          {/* =================================================
              LOGIN FORM
          ================================================= */}

          <div className="p-6 sm:p-10 lg:p-12 flex items-center">

            <div className="w-full max-w-md mx-auto">

              <span className="text-[#072144] font-semibold text-sm">
                ADMIN LOGIN
              </span>

              <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
                Welcome Back
              </h1>

              <p className="mt-3 text-gray-500">
                Login to access your admin account.
              </p>

              {/* =================================================
                  ERROR
              ================================================= */}

              {error && (
                <div className="mt-5 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              )}

              {/* =================================================
                  FORM
              ================================================= */}

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >

                {/* =================================================
                    EMAIL
                ================================================= */}

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
                      placeholder="Enter admin email"
                      className="w-full border border-gray-300 rounded-lg pl-11 pr-4 py-3.5 outline-none focus:border-[#072144] focus:ring-1 focus:ring-[#072144]"
                    />

                  </div>
                </div>

                {/* =================================================
                    PASSWORD
                ================================================= */}

                <div>

                  <div className="flex items-center justify-between mb-2">

                    <label className="text-sm font-medium text-gray-700">
                      Password
                    </label>

                    <Link
                      to="/forgot-password"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      Forgot Password?
                    </Link>

                  </div>

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
                      placeholder="Enter admin password"
                      className="w-full border border-gray-300 rounded-lg pl-11 pr-12 py-3.5 outline-none focus:border-[#072144] focus:ring-1 focus:ring-[#072144]"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(
                          !showPassword
                        )
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                    >
                      {showPassword ? (
                        <FaEyeSlash />
                      ) : (
                        <FaEye />
                      )}
                    </button>

                  </div>
                </div>

                {/* =================================================
                    LOGIN BUTTON
                ================================================= */}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 bg-[#072144] text-white py-3.5 rounded-lg font-semibold hover:bg-[#FCBC14] hover:text-[#072144] transition disabled:opacity-60"
                >

                  {loading
                    ? "Logging in..."
                    : "Login"}

                  {!loading && (
                    <FaArrowRight />
                  )}

                </button>

              </form>

              {/* =================================================
                  CUSTOMER LOGIN
              ================================================= */}

              <div className="mt-7 text-center">

                <Link
                  to="/login"
                  className="text-sm font-semibold text-[#072144] hover:text-[#FCBC14]"
                >
                  ← Customer Login
                </Link>

              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminLogin;

