import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative w-full h-[calc(75vh-80px)] min-h-[550px] pt-20 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
        alt="Modern home"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-3xl text-white">

          {/* Small Badge */}
          <span className="inline-block bg-white/25 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-semibold">
            Complete Home Solutions
          </span>

          {/* Heading */}
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Build Your{" "}
            <span className="text-blue-400">Dream Home</span>
          </h1>

          {/* Description */}
          <p className="mt-5 text-base sm:text-lg lg:text-xl text-gray-200 leading-8 max-w-2xl">
            From planning and construction to interiors, painting,
            electrical work and final handover — we take care of
            your complete home project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 bg-[#072144] text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-[#FCBC14] transition"
            >
              Start Your Project
              <FaArrowRight />
            </Link>

            <Link 
                to="/projects" 
                className="inline-flex items-center justify-center border border-[#072144] bg-[#072144] text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-[#FCBC14] hover:border-[#FCBC14] transition"
              >
                View Projects
              </Link>
          </div>

          {/* Features */}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm sm:text-base text-gray-200">
            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-blue-400" />
              Expert Team
            </span>

            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-blue-400" />
              Quality Work
            </span>

            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-blue-400" />
              Clear Process
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;