
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaArrowLeft,
  FaLock,
} from "react-icons/fa";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("");
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    // Temporary frontend logic
    // Backend/API can be connected later
    setMessage(
      "If an account exists with this email, password reset instructions will be sent."
    );
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">

        {/* Back */}
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 text-gray-600 hover:text-[#072144] mb-6 transition"
        >
          <FaArrowLeft />
          Back to Login
        </button>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">

          {/* Icon */}
          <div className="flex justify-center mb-5">
            <div className="w-16 h-16 rounded-full bg-[#FCBC14]/15 flex items-center justify-center">
              <FaLock className="text-[#FCBC14] text-2xl" />
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-7">
            <h1 className="text-2xl font-bold text-[#072144]">
              Forgot Password?
            </h1>

            <p className="text-gray-500 mt-2 text-sm leading-6">
              Enter your registered email address and we'll help you reset
              your password.
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
              {error}
            </div>
          )}

          {/* Success */}
          {message && (
            <div className="mb-4 p-3 rounded-lg bg-green-50 border border-green-200 text-green-600 text-sm">
              {message}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>

              <div className="relative">
                <FaEnvelope
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-[#FCBC14] focus:ring-2 focus:ring-[#FCBC14]/20 transition"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#072144] text-white py-3 rounded-lg font-semibold hover:bg-[#0b315f] transition"
            >
              Send Reset Link
            </button>
          </form>

          {/* Login */}
          <div className="text-center mt-6">
            <span className="text-gray-500 text-sm">
              Remember your password?{" "}
            </span>

            <Link
              to="/login"
              className="text-[#072144] font-semibold hover:text-[#FCBC14] transition"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

