import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gray-950 text-gray-300 overflow-hidden">

      {/* =================================================
          BACKGROUND BRAND TEXT
      ================================================= */}
         {/* BACKGROUND BRAND TEXT */}
<div
  className="
    absolute
    right-0
    bottom-0
    w-2/4
    overflow-hidden
    pointer-events-none
    select-none
  "
>
  <h2
    className="
      whitespace-nowrap
      text-right
      font-black
      italic
      uppercase
      tracking-tighter
      text-[clamp(20px,4vw,50px)]
      leading-none
      text-white/[0.080]
    "
  >
    BOOK MY PROBLEM
  </h2>
</div>


      {/* =================================================
          MAIN FOOTER CONTENT
      ================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">


          {/* =================================================
              BRAND
          ================================================= */}
          <div>

            <Link
              to="/"
              className="inline-block text-2xl font-bold text-white"
            >
              Book My{" "}
              <span className="text-blue-500">
                Problem
              </span>
            </Link>

            <p className="mt-4 text-gray-400 leading-7 max-w-sm">
              Complete home construction, interior, renovation and
              home improvement solutions.
            </p>


            {/* SOCIAL */}
            <div className="mt-6 flex gap-3">

              <a
                href="#"
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-gray-800
                  flex
                  items-center
                  justify-center
                  hover:bg-blue-600
                  hover:-translate-y-1
                  transition
                "
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-gray-800
                  flex
                  items-center
                  justify-center
                  hover:bg-pink-600
                  hover:-translate-y-1
                  transition
                "
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-gray-800
                  flex
                  items-center
                  justify-center
                  hover:bg-blue-600
                  hover:-translate-y-1
                  transition
                "
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>


          {/* =================================================
              COMPANY
          ================================================= */}
          <div>

            <h3 className="font-bold text-white text-lg">
              Company
            </h3>

            <div className="mt-5 space-y-3">

              <Link
                to="/about"
                className="block hover:text-blue-400 transition"
              >
                About Us
              </Link>

              <Link
                to="/projects"
                className="block hover:text-blue-400 transition"
              >
                Projects
              </Link>

              <Link
                to="/professionals"
                className="block hover:text-blue-400 transition"
              >
                Professionals
              </Link>

              <Link
                to="/reviews"
                className="block hover:text-blue-400 transition"
              >
                Reviews
              </Link>

            </div>

          </div>


          {/* =================================================
              SERVICES
          ================================================= */}
          <div>

            <h3 className="font-bold text-white text-lg">
              Services
            </h3>

            <div className="mt-5 space-y-3">

              <Link
                to="/services"
                className="block hover:text-blue-400 transition"
              >
                Construction
              </Link>

              <Link
                to="/services"
                className="block hover:text-blue-400 transition"
              >
                Interior Design
              </Link>

              <Link
                to="/services"
                className="block hover:text-blue-400 transition"
              >
                Renovation
              </Link>

              <Link
                to="/services"
                className="block hover:text-blue-400 transition"
              >
                Home Painting
              </Link>

              <Link
                to="/services"
                className="block hover:text-blue-400 transition"
              >
                Electrical Work
              </Link>

            </div>

          </div>


          {/* =================================================
              CONTACT
          ================================================= */}
          <div>

            <h3 className="font-bold text-white text-lg">
              Contact
            </h3>

            <div className="mt-5 space-y-3 text-gray-400">

              <p>
                Kohalpur-10, Banke
              </p>

              <p>
                081-534071
              </p>

              <p>
                98682219045
              </p>

              <p className="break-all">
                bookmyproblem999@gmail.com
              </p>

            </div>


           

          </div>

        </div>


        {/* =================================================
            BOTTOM
        ================================================= */}
        <div
          className="
            mt-12
            pt-6
            border-t
            border-gray-800
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-4
            text-sm
            text-gray-500
          "
        >

          <p>
            © {new Date().getFullYear()} Hiveweb Solution.
            All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            <Link
              to="/faqs"
              className="hover:text-white transition"
            >
              FAQs
            </Link>

            <Link
              to="/contact"
              className="hover:text-white transition"
            >
              Contact
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;