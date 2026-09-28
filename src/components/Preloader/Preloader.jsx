import React from "react";
import bookmyprob1 from "../../assets/bookmyprob1.jpg";

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center">

      {/* Logo + Rotating Circle */}
      <div className="relative w-80 h-80 flex items-center justify-center">

        {/* Rotating Ring */}
        <div className="absolute inset-0 rounded-full border-4 border-gray-200 border-t-blue-600 animate-spin"></div>

        {/* Logo */}
        <div className="w-60 h-60 rounded-full overflow-hidden shadow-lg">
          <img
            src={bookmyprob1}
            alt="Book My Problem"
            className="w-full h-full object-cover"
          />
        </div>

      </div>

      {/* Brand Name */}
      <h2 className="mt-6 text-2xl font-bold text-gray-900">
        Book<span className="text-blue-600">My</span> Problem
      </h2>

      {/* Loading Text */}
      <p className="mt-2 text-sm text-gray-500 animate-pulse">
        Loading...
      </p>

    </div>
  );
};

export default Preloader;