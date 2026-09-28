
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import bookmyprob from "../../assets/bookmyprob.jpg";
import bmptext from "../../assets/bmptext.jpg";

import designData from "../../data/designData";
import citiesData from "../../data/citiesData";

import { isAdminAuthenticated } from "../../utils/auth";

const fallbackLogo =
  "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=200&q=80";

const Navbar = () => {
  const [designOpen, setDesignOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  // ================= ADMIN LOGIN STATUS =================
  const isLoggedIn = isAdminAuthenticated();

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Design",
      path: "/design",
    },
    {
      name: "Cities",
      path: "/cities",
    },
    {
      name: "More",
      path: "#",
    },
  ];

  const closeMenus = () => {
    setDesignOpen(false);
    setCitiesOpen(false);
    setMoreOpen(false);
  };

  const toggleDesign = () => {
    setDesignOpen((prev) => !prev);
    setCitiesOpen(false);
    setMoreOpen(false);
  };

  const toggleCities = () => {
    setCitiesOpen((prev) => !prev);
    setDesignOpen(false);
    setMoreOpen(false);
  };

  const toggleMore = () => {
    setMoreOpen((prev) => !prev);
    setDesignOpen(false);
    setCitiesOpen(false);
  };

  return (
    <header className="fixed z-50 w-full bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">

        {/* ================= LOGO ================= */}
        <Link
          to="/"
          onClick={closeMenus}
          className="flex items-center gap-1 shrink-0"
        >
          {/* ROUND LOGO */}
          <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
            <img
              src={bookmyprob}
              alt="Book My Problem"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = fallbackLogo;
              }}
              className="w-full h-full object-cover scale-125"
            />
          </div>

          {/* BOOK MY PROBLEM IMAGE */}
          <img
            src={bmptext}
            alt="Book My Problem"
            className="w-30 h-12 object-contain"
          />
        </Link>

        {/* ================= NAVIGATION ================= */}
        <div className="hidden md:flex items-center gap-7">

          {links.map((link) => (
            <div
              key={link.name}
              className="relative py-2 group"
            >

              {/* ================= DESIGN ================= */}
              {link.name === "Design" && (
                <>
                  <button
                    type="button"
                    onClick={toggleDesign}
                    className={`
                      flex
                      items-center
                      gap-1
                      font-medium
                      transition
                      ${
                        designOpen
                          ? "text-[#FCBC14]"
                          : "text-gray-700 group-hover:text-[#FCBC14]"
                      }
                    `}
                  >
                    Design

                    <span
                      className={`text-xs transition-transform duration-200 ${
                        designOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  {/* DESIGN DROPDOWN */}
                  {designOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
                      <div className="w-80 max-h-[70vh] overflow-y-auto bg-white rounded-xl shadow-2xl border border-gray-100 p-2">

                        {designData.map((category) => (
                          <Link
                            key={category.id}
                            to={`/design/${category.slug}`}
                            onClick={closeMenus}
                            className="
                              flex
                              items-center
                              justify-between
                              px-4
                              py-3
                              rounded-lg
                              text-gray-700
                              hover:bg-blue-50
                              hover:text-[#FCBC14]
                              transition
                            "
                          >
                            <span className="font-medium">
                              {category.name}
                            </span>

                            <span className="text-xs text-gray-400">
                              {category.images?.length || 0}
                            </span>
                          </Link>
                        ))}

                        <Link
                          to="/design"
                          onClick={closeMenus}
                          className="
                            block
                            mt-1
                            px-4
                            py-3
                            rounded-lg
                            bg-[#072144]
                            text-white
                            font-semibold
                            text-center
                            hover:bg-[#FCBC14]
                            transition
                          "
                        >
                          View All Designs
                        </Link>
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* ================= CITIES ================= */}
              {link.name === "Cities" && (
                <>
                  <button
                    type="button"
                    onClick={toggleCities}
                    className={`
                      flex
                      items-center
                      gap-1
                      font-medium
                      transition
                      ${
                        citiesOpen
                          ? "text-[#FCBC14]"
                          : "text-gray-700 group-hover:text-[#FCBC14]"
                      }
                    `}
                  >
                    Cities

                    <span
                      className={`text-xs transition-transform duration-200 ${
                        citiesOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  {/* CITIES DROPDOWN */}
                  {citiesOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
                      <div className="w-80 max-h-[70vh] overflow-y-auto bg-white rounded-xl shadow-2xl border border-gray-100 p-2">

                        {citiesData.map((city) => (
                          <Link
                            key={city.id}
                            to={`/cities/${city.slug}`}
                            onClick={closeMenus}
                            className="
                              group
                              flex
                              items-center
                              gap-3
                              px-3
                              py-2.5
                              rounded-lg
                              hover:bg-orange-50
                              transition
                            "
                          >
                            {/* CITY IMAGE */}
                            <img
                              src={city.image}
                              alt={city.name}
                              className="
                                w-12
                                h-12
                                rounded-lg
                                object-cover
                                shrink-0
                              "
                            />

                            {/* CITY INFO */}
                            <div className="flex-1 min-w-0">
                              <p
                                className="
                                  text-sm
                                  font-semibold
                                  text-gray-800
                                  hover:text-[#FCBC14]
                                "
                              >
                                {city.name}
                              </p>

                              <p className="text-xs text-gray-400 truncate">
                                {city.stats?.liveProjects || 0} live projects
                              </p>
                            </div>

                            {/* PROJECT COUNT */}
                            <span className="text-xs text-gray-400">
                              {city.projects?.length || 0}
                            </span>
                          </Link>
                        ))}

                        {/* VIEW ALL CITIES */}
                        <Link
                          to="/cities"
                          onClick={closeMenus}
                          className="
                            block
                            mt-2
                            px-4
                            py-3
                            rounded-lg
                            bg-[#0F172A]
                            text-white
                            font-semibold
                            text-center
                            hover:bg-[#FCBC14]
                            transition
                          "
                        >
                          View All Cities
                        </Link>
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* ================= MORE ================= */}
              {link.name === "More" && (
                <>
                  <button
                    type="button"
                    onClick={toggleMore}
                    className={`
                      flex
                      items-center
                      gap-1
                      font-medium
                      transition
                      ${
                        moreOpen
                          ? "text-[#FCBC14]"
                          : "text-gray-700 group-hover:text-[#FCBC14]"
                      }
                    `}
                  >
                    More

                    <span
                      className={`text-xs transition-transform duration-200 ${
                        moreOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  {/* MORE DROPDOWN */}
                  {moreOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50">
                      <div className="w-64 bg-white rounded-xl shadow-2xl border border-gray-100 p-2">

                        {/* ABOUT */}
                        <Link
                          to="/about"
                          onClick={closeMenus}
                          className="
                            block
                            px-4
                            py-3
                            rounded-lg
                            text-gray-700
                            hover:bg-blue-50
                            hover:text-[#FCBC14]
                            transition
                          "
                        >
                          <p className="font-semibold">
                            About Us
                          </p>

                          <p className="text-xs text-gray-400 mt-1">
                            Know more about Book My Problem
                          </p>
                        </Link>

                        {/* HOW IT WORKS */}
                        <Link
                          to="/how-it-works"
                          onClick={closeMenus}
                          className="
                            block
                            px-4
                            py-3
                            rounded-lg
                            text-gray-700
                            hover:bg-blue-50
                            hover:text-[#FCBC14]
                            transition
                          "
                        >
                          <p className="font-semibold">
                            How It Works
                          </p>

                          <p className="text-xs text-gray-400 mt-1">
                            See how our platform works
                          </p>
                        </Link>

                        {/* PROFESSIONALS */}
                        <Link
                          to="/professionals"
                          onClick={closeMenus}
                          className="
                            block
                            px-4
                            py-3
                            rounded-lg
                            text-gray-700
                            hover:bg-blue-50
                            hover:text-[#FCBC14]
                            transition
                          "
                        >
                          <p className="font-semibold">
                            Professionals
                          </p>

                          <p className="text-xs text-gray-400 mt-1">
                            Find home service professionals
                          </p>
                        </Link>

                        {/* REVIEWS */}
                        <Link
                          to="/reviews"
                          onClick={closeMenus}
                          className="
                            block
                            px-4
                            py-3
                            rounded-lg
                            text-gray-700
                            hover:bg-blue-50
                            hover:text-[#FCBC14]
                            transition
                          "
                        >
                          <p className="font-semibold">
                            Reviews
                          </p>

                          <p className="text-xs text-gray-400 mt-1">
                            See customer experiences
                          </p>
                        </Link>

                        {/* FAQ */}
                        <Link
                          to="/faqs"
                          onClick={closeMenus}
                          className="
                            block
                            px-4
                            py-3
                            rounded-lg
                            text-gray-700
                            hover:bg-blue-50
                            hover:text-[#FCBC14]
                            transition
                          "
                        >
                          <p className="font-semibold">
                            FAQs
                          </p>

                          <p className="text-xs text-gray-400 mt-1">
                            Frequently asked questions
                          </p>
                        </Link>

                      </div>
                    </div>
                  )}
                </>
              )}

              {/* ================= OTHER LINKS ================= */}
              {link.name !== "Design" &&
                link.name !== "Cities" &&
                link.name !== "More" && (
                  <NavLink
                    to={link.path}
                    end={link.path === "/"}
                    onClick={closeMenus}
                    className={({ isActive }) =>
                      `
                        font-medium
                        transition
                        ${
                          isActive
                            ? "text-[#FCBC14]"
                            : "group-hover:text-[#FCBC14]"
                        }
                      `
                    }
                  >
                    {link.name}
                  </NavLink>
                )}
            </div>
          ))}

        </div>

        {/* ================= RIGHT BUTTONS ================= */}
        <div className="flex items-center gap-3">

          {/* ================= LOGIN ================= */}
          {!isLoggedIn && (
            <Link
              to="/login"
              onClick={closeMenus}
              className="
                hidden
                sm:block
                text-gray-700
                font-medium
                hover:text-[#FCBC14]
                transition
              "
            >
              Login
            </Link>
          )}

          {/* ================= GET STARTED ================= */}
          <Link
            to="/contact"
            onClick={closeMenus}
            className="
              bg-[#072144]
              text-white
              px-4
              py-2.5
              rounded-lg
              font-semibold
              hover:bg-[#FCBC14]
              transition
            "
          >
            Get Started
          </Link>

        </div>

      </nav>
    </header>
  );
};

export default Navbar;

