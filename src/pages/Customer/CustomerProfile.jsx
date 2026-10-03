import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaSave,
  FaArrowLeft,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const CustomerProfile = () => {
  const savedProfile = JSON.parse(
    localStorage.getItem("customerProfile")
  ) || {
    name: "Hemraj",
    email: "customer@gmail.com",
    phone: "98XXXXXXXX",
    city: "Kathmandu",
    area: "Baneshwor",
    address: "House No. 25, Near XYZ Chowk",
    landmark: "Near ABC School",
    postalCode: "44600",
  };

  const [formData, setFormData] = useState(savedProfile);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem(
      "customerProfile",
      JSON.stringify(formData)
    );

    setMessage("Profile updated successfully.");

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">

          <div>
            <Link
              to="/customer"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#072144] mb-3"
            >
              <FaArrowLeft />
              Back to Account
            </Link>

            <h1 className="text-3xl font-bold text-[#072144]">
              My Profile
            </h1>

            <p className="text-gray-500 mt-2">
              Manage your personal information and service location.
            </p>
          </div>

        </div>

        {/* Success Message */}
        {message && (
          <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-5 py-4 rounded-xl">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          {/* Personal Information */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-6">

            <div className="flex items-center gap-3 mb-7">
              <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#072144] flex items-center justify-center">
                <FaUser />
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#072144]">
                  Personal Information
                </h2>

                <p className="text-sm text-gray-500">
                  Update your basic account information.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>

                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-[#FCBC14] focus:ring-2 focus:ring-yellow-100"
                    placeholder="Enter your name"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>

                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-[#FCBC14] focus:ring-2 focus:ring-yellow-100"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </label>

                <div className="relative">
                  <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-[#FCBC14] focus:ring-2 focus:ring-yellow-100"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>

            </div>
          </div>

          {/* Location */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-6">

            <div className="flex items-center gap-3 mb-7">
              <div className="w-11 h-11 rounded-xl bg-yellow-50 text-[#FCBC14] flex items-center justify-center">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#072144]">
                  Service Location
                </h2>

                <p className="text-sm text-gray-500">
                  This address can be used while booking services.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* City */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  City
                </label>

                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-[#FCBC14] focus:ring-2 focus:ring-yellow-100 bg-white"
                >
                  <option value="">Select City</option>
                  <option value="Kathmandu">Kathmandu</option>
                  <option value="Lalitpur">Lalitpur</option>
                  <option value="Bhaktapur">Bhaktapur</option>
                  <option value="Pokhara">Pokhara</option>
                  <option value="Chitwan">Chitwan</option>
                  <option value="Biratnagar">Biratnagar</option>
                  <option value="Butwal">Butwal</option>
                  <option value="Dharan">Dharan</option>
                </select>
              </div>

              {/* Area */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Area
                </label>

                <input
                  type="text"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-[#FCBC14] focus:ring-2 focus:ring-yellow-100"
                  placeholder="e.g. Baneshwor"
                />
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Address
                </label>

                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-[#FCBC14] focus:ring-2 focus:ring-yellow-100 resize-none"
                  placeholder="Enter your complete address"
                />
              </div>

              {/* Landmark */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Landmark
                </label>

                <input
                  type="text"
                  name="landmark"
                  value={formData.landmark}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-[#FCBC14] focus:ring-2 focus:ring-yellow-100"
                  placeholder="Near school, chowk, mall..."
                />
              </div>

              {/* Postal Code */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Postal Code
                </label>

                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl outline-none focus:border-[#FCBC14] focus:ring-2 focus:ring-yellow-100"
                  placeholder="Postal code"
                />
              </div>

            </div>
          </div>

          {/* Save */}
          <div className="flex justify-end">

            <button
              type="submit"
              className="flex items-center gap-2 bg-[#FCBC14] hover:bg-[#e9aa08] text-[#072144] px-7 py-3 rounded-xl font-bold transition shadow-sm"
            >
              <FaSave />
              Save Changes
            </button>

          </div>

        </form>
      </div>
    </div>
  );
};

export default CustomerProfile;