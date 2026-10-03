
import React from "react";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#061a35] text-gray-300">

      {/* =====================================================
          PREMIUM BACKGROUND EFFECTS
      ===================================================== */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Top glow */}
        <div className="absolute -top-40 left-1/4 w-96 h-96 bg-[#FCBC14]/10 rounded-full blur-3xl" />

        {/* Right glow */}
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        {/* Large background text */}
        <div className="absolute right-0 bottom-0 overflow-hidden select-none">
          <h2
            className="
              whitespace-nowrap
              font-black
              italic
              uppercase
              tracking-tighter
              text-[clamp(50px,11vw,160px)]
              leading-none
              text-white/[0.035]
            "
          >
            BOOK MY PROBLEM
          </h2>
        </div>

      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* ===================================================
            TOP CTA
        =================================================== */}

        

        {/* ===================================================
            FOOTER GRID
        =================================================== */}

        <div className="border-t border-white/10 pt-14 pb-14">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">

            {/* =================================================
                BRAND
            ================================================= */}

            <div className="lg:pr-8">

              <Link
                to="/"
                className="inline-flex items-center group"
              >

                <span className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                  Book My{" "}
                  <span className="text-[#FCBC14]">
                    Problem
                  </span>
                </span>

              </Link>

              <p className="mt-5 text-sm leading-7 text-gray-400 max-w-sm">
                Complete home construction, interior, renovation and
                home improvement solutions — all in one place.
              </p>

              {/* Social icons */}

              <div className="mt-7 flex items-center gap-3">

                {/* Facebook */}

                <a
                  href="https://www.facebook.com/profile.php?id=61556205387132"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book My Problem Facebook"
                  className="
                    group
                    w-10
                    h-10
                    rounded-xl
                    border border-white/10
                    bg-white/[0.04]
                    flex
                    items-center
                    justify-center
                    text-gray-400
                    hover:bg-[#1877F2]
                    hover:text-white
                    hover:border-[#1877F2]
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  <FaFacebookF className="text-sm" />
                </a>

                {/* Instagram */}

                <a
                  href="https://www.instagram.com/bookmyproblempvtltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book My Problem Instagram"
                  className="
                    group
                    w-10
                    h-10
                    rounded-xl
                    border border-white/10
                    bg-white/[0.04]
                    flex
                    items-center
                    justify-center
                    text-gray-400
                    hover:bg-gradient-to-tr
                    hover:from-[#f58529]
                    hover:via-[#dd2a7b]
                    hover:to-[#8134af]
                    hover:text-white
                    hover:border-transparent
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  <FaInstagram className="text-sm" />
                </a>

                {/* TikTok */}

                <a
                  href="https://www.tiktok.com/@book.my.problem.p"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book My Problem TikTok"
                  className="
                    group
                    w-10
                    h-10
                    rounded-xl
                    border border-white/10
                    bg-white/[0.04]
                    flex
                    items-center
                    justify-center
                    text-gray-400
                    hover:bg-black
                    hover:text-white
                    hover:border-white/20
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >
                  <FaTiktok className="text-sm" />
                </a>

              </div>

            </div>

            {/* =================================================
                COMPANY
            ================================================= */}

            <div>

              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
                Company
              </h3>

              <div className="mt-6 space-y-4">

                <Link
                  to="/about"
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-gray-400
                    hover:text-[#FCBC14]
                    transition
                  "
                >
                  <span className="w-0 group-hover:w-2 h-px bg-[#FCBC14] transition-all duration-300" />
                  About Us
                </Link>

                <Link
                  to="/projects"
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-gray-400
                    hover:text-[#FCBC14]
                    transition
                  "
                >
                  <span className="w-0 group-hover:w-2 h-px bg-[#FCBC14] transition-all duration-300" />
                  Projects
                </Link>

                <Link
                  to="/professionals"
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-gray-400
                    hover:text-[#FCBC14]
                    transition
                  "
                >
                  <span className="w-0 group-hover:w-2 h-px bg-[#FCBC14] transition-all duration-300" />
                  Professionals
                </Link>

                <Link
                  to="/reviews"
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-gray-400
                    hover:text-[#FCBC14]
                    transition
                  "
                >
                  <span className="w-0 group-hover:w-2 h-px bg-[#FCBC14] transition-all duration-300" />
                  Reviews
                </Link>

              </div>

            </div>

            {/* =================================================
                SERVICES
            ================================================= */}

            <div>

              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
                Services
              </h3>

              <div className="mt-6 space-y-4">

                <Link
                  to="/services"
                  className="group flex items-center gap-2 text-sm text-gray-400 hover:text-[#FCBC14] transition"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-[#FCBC14] transition-all duration-300" />
                  Construction
                </Link>

                <Link
                  to="/services"
                  className="group flex items-center gap-2 text-sm text-gray-400 hover:text-[#FCBC14] transition"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-[#FCBC14] transition-all duration-300" />
                  Interior Design
                </Link>

                <Link
                  to="/services"
                  className="group flex items-center gap-2 text-sm text-gray-400 hover:text-[#FCBC14] transition"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-[#FCBC14] transition-all duration-300" />
                  Renovation
                </Link>

                <Link
                  to="/services"
                  className="group flex items-center gap-2 text-sm text-gray-400 hover:text-[#FCBC14] transition"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-[#FCBC14] transition-all duration-300" />
                  Home Painting
                </Link>

                <Link
                  to="/services"
                  className="group flex items-center gap-2 text-sm text-gray-400 hover:text-[#FCBC14] transition"
                >
                  <span className="w-0 group-hover:w-2 h-px bg-[#FCBC14] transition-all duration-300" />
                  Electrical Work
                </Link>

              </div>

            </div>

            {/* =================================================
                CONTACT
            ================================================= */}

            <div>

              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-white">
                Contact
              </h3>

              <div className="mt-6 space-y-5">

                {/* Location */}

                <div className="flex gap-4">

                  <div className="shrink-0 w-9 h-9 rounded-lg bg-[#FCBC14]/10 text-[#FCBC14] flex items-center justify-center">
                    <FaMapMarkerAlt className="text-xs" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      Location
                    </p>

                    <p className="mt-1 text-sm text-gray-300">
                      Kohalpur-10, Banke
                    </p>
                  </div>

                </div>

                {/* Phone */}

                <div className="flex gap-4">

                  <div className="shrink-0 w-9 h-9 rounded-lg bg-[#FCBC14]/10 text-[#FCBC14] flex items-center justify-center">
                    <FaPhoneAlt className="text-xs" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      Phone
                    </p>

                    <a
                      href="tel:081534071"
                      className="mt-1 block text-sm text-gray-300 hover:text-[#FCBC14] transition"
                    >
                      081-534071
                    </a>

                    <a
                      href="tel:98682219045"
                      className="mt-1 block text-sm text-gray-300 hover:text-[#FCBC14] transition"
                    >
                      98682219045
                    </a>
                  </div>

                </div>

                {/* Email */}

                <div className="flex gap-4">

                  <div className="shrink-0 w-9 h-9 rounded-lg bg-[#FCBC14]/10 text-[#FCBC14] flex items-center justify-center">
                    <FaEnvelope className="text-xs" />
                  </div>

                  <div className="min-w-0">

                    <p className="text-xs uppercase tracking-wider text-gray-500">
                      Email
                    </p>

                    <a
                      href="mailto:bookmyproblem999@gmail.com"
                      className="mt-1 block text-sm text-gray-300 hover:text-[#FCBC14] transition break-all"
                    >
                      bookmyproblem999@gmail.com
                    </a>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ===================================================
            BOTTOM BAR
        =================================================== */}

        <div
          className="
            relative
            border-t
            border-white/10
            py-6
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-4
          "
        >

          <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="text-gray-300">
              Book My Problem
            </span>
            . All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-xs sm:text-sm">

            <Link
              to="/faqs"
              className="text-gray-500 hover:text-[#FCBC14] transition"
            >
              FAQs
            </Link>

            <span className="w-px h-4 bg-gray-700" />

            <Link
              to="/contact"
              className="text-gray-500 hover:text-[#FCBC14] transition"
            >
              Contact
            </Link>

            <span className="w-px h-4 bg-gray-700" />

            <Link
              to="/privacy-policy"
              className="text-gray-500 hover:text-[#FCBC14] transition"
            >
              Privacy
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
