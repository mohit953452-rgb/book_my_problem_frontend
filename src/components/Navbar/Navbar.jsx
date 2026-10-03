import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import {
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";

import bookmyprob from "../../assets/bookmyprob.jpg";
import bmptext from "../../assets/bmptext.jpg";

import designData from "../../data/designData";
import citiesData from "../../data/citiesData";

import { isAdminAuthenticated } from "../../utils/auth";

// CART
import { useCart } from "../../context/CartContext";

const fallbackLogo =
  "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=200&q=80";

const Navbar = () => {
  const navigate = useNavigate();

  const [designOpen, setDesignOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  // ======================================================
  // SEARCH
  // ======================================================

  const [searchValue, setSearchValue] = useState("");
  const [searchText, setSearchText] = useState("");

  // ======================================================
  // ACTUAL SERVICES
  // ======================================================

  const searchWords = [
    "Plumbing Services",
    "Home Painting",
    "Marble & Tiles",
    "Electrical Work",
    "AC Fitting & Repairs",
    "Home Renovation",
    "Room Transfer",
    "Chimney Fitting & Repairs",
    "Metal & Aluminium",
    "Annual Maintenance Charges",
    "Home Construction",
    "Modular Kitchen",
    "Interior Design",
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // ======================================================
  // CART
  // ======================================================

  const { cartCount } = useCart();

  // ======================================================
  // ADMIN LOGIN STATUS
  // ======================================================

  const isLoggedIn = isAdminAuthenticated();

  // ======================================================
  // SEARCH TYPING ANIMATION
  // ======================================================

  useEffect(() => {
    if (searchValue.length > 0) {
      setSearchText("");
      setIsDeleting(false);
      return;
    }

    const currentWord = searchWords[wordIndex];

    const typingSpeed = isDeleting ? 45 : 90;

    const timer = setTimeout(() => {
      // ==================================================
      // TYPING
      // ==================================================

      if (!isDeleting) {
        const nextText = currentWord.substring(
          0,
          searchText.length + 1
        );

        setSearchText(nextText);

        if (nextText === currentWord) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1000);
        }
      }

      // ==================================================
      // DELETING
      // ==================================================

      else {
        const nextText = currentWord.substring(
          0,
          Math.max(0, searchText.length - 1)
        );

        setSearchText(nextText);

        if (nextText === "") {
          setIsDeleting(false);

          setWordIndex(
            (prevIndex) =>
              (prevIndex + 1) % searchWords.length
          );
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [
    searchText,
    isDeleting,
    wordIndex,
    searchValue,
  ]);

  // ======================================================
  // NAVIGATION LINKS
  // ======================================================

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

  // ======================================================
  // CLOSE MENUS
  // ======================================================

  const closeMenus = () => {
    setDesignOpen(false);
    setCitiesOpen(false);
    setMoreOpen(false);
  };

  // ======================================================
  // DESIGN MENU
  // ======================================================

  const toggleDesign = () => {
    setDesignOpen((prev) => !prev);
    setCitiesOpen(false);
    setMoreOpen(false);
  };

  // ======================================================
  // CITIES MENU
  // ======================================================

  const toggleCities = () => {
    setCitiesOpen((prev) => !prev);
    setDesignOpen(false);
    setMoreOpen(false);
  };

  // ======================================================
  // MORE MENU
  // ======================================================

  const toggleMore = () => {
    setMoreOpen((prev) => !prev);
    setDesignOpen(false);
    setCitiesOpen(false);
  };

  // ======================================================
  // CART CLICK
  // ======================================================

  const handleCartClick = () => {
    closeMenus();
    navigate("/cart");
  };

  // ======================================================
  // SEARCH
  // ======================================================

  const handleSearch = (e) => {
    e.preventDefault();

    const query = searchValue.trim();

    if (!query) {
      return;
    }

    closeMenus();

    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <header
      className="
        fixed
        z-50
        w-full
        bg-white/95
        backdrop-blur-md
        shadow-sm
        border-b
        border-gray-100
      "
    >
      <nav
        className="
          max-w-7xl
          mx-auto
          px-6
          py-2
          flex
          items-center
          justify-between
        "
      >

        {/* ==================================================
            LOGO
        ================================================== */}

        <Link
          to="/"
          onClick={closeMenus}
          className="
            flex
            items-center
            gap-1
            shrink-0
          "
        >

          {/* ROUND LOGO */}

          <div
            className="
              w-12
              h-12
              rounded-full
              overflow-hidden
              shrink-0
            "
          >
            <img
              src={bookmyprob}
              alt="Book My Problem"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = fallbackLogo;
              }}
              className="
                w-full
                h-full
                object-cover
                scale-125
              "
            />
          </div>

          {/* BOOK MY PROBLEM TEXT */}

          <img
            src={bmptext}
            alt="Book My Problem"
            className="
              w-30
              h-12
              object-contain
            "
          />

        </Link>

        {/* ==================================================
            NAVIGATION
        ================================================== */}

        <div
          className="
            hidden
            md:flex
            items-center
            gap-7
          "
        >

          {links.map((link) => (

            <div
              key={link.name}
              className="
                relative
                py-2
                group
              "
            >

              {/* ==================================================
                  DESIGN
              ================================================== */}

              {link.name === "Design" && (
                <>
                  <button
                    type="button"
                    onClick={toggleDesign}
                    className={`
                      relative
                      inline-flex
                      items-center
                      gap-1
                      font-medium
                      transition
                      ${
                        designOpen
                          ? "text-[#FCBC14]"
                          : "text-[#072144] group-hover:text-[#FCBC14]"
                      }
                    `}
                  >
                    <span>
                      Design
                    </span>

                    <span
                      className={`
                        text-xs
                        transition-transform
                        duration-200
                        ${
                          designOpen
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    >
                      ▼
                    </span>

                    {/* GOLDEN BAR - LEFT TO RIGHT */}

                    <div
                      className={`
                        absolute
                        left-0
                        -bottom-[9px]
                        h-1
                        w-full
                        bg-[#FCBC14]
                        origin-left
                        transform
                        transition-transform
                        duration-500
                        ease-out
                        ${
                          designOpen
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }
                      `}
                    ></div>
                  </button>

                  {designOpen && (
                    <div
                      className="
                        absolute
                        left-1/2
                        -translate-x-1/2
                        top-full
                        pt-3
                        z-50
                      "
                    >
                      <div
                        className="
                          w-80
                          max-h-[70vh]
                          overflow-y-auto
                          bg-white
                          rounded-xl
                          shadow-2xl
                          border
                          border-gray-100
                          p-2
                        "
                      >

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
                            hover:text-[#072144]
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

              {/* ==================================================
                  CITIES
              ================================================== */}

              {link.name === "Cities" && (
                <>
                  <button
                    type="button"
                    onClick={toggleCities}
                    className={`
                      relative
                      inline-flex
                      items-center
                      gap-1
                      font-medium
                      transition
                      ${
                        citiesOpen
                          ? "text-[#FCBC14]"
                          : "text-[#072144] group-hover:text-[#FCBC14]"
                      }
                    `}
                  >
                    <span>
                      Cities
                    </span>

                    <span
                      className={`
                        text-xs
                        transition-transform
                        duration-200
                        ${
                          citiesOpen
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    >
                      ▼
                    </span>

                    {/* GOLDEN BAR - LEFT TO RIGHT */}

                    <div
                      className={`
                        absolute
                        left-0
                        -bottom-[9px]
                        h-1
                        w-full
                        bg-[#FCBC14]
                        origin-left
                        transform
                        transition-transform
                        duration-500
                        ease-out
                        ${
                          citiesOpen
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }
                      `}
                    ></div>
                  </button>

                  {citiesOpen && (
                    <div
                      className="
                        absolute
                        left-1/2
                        -translate-x-1/2
                        top-full
                        pt-3
                        z-50
                      "
                    >
                      <div
                        className="
                          w-80
                          max-h-[70vh]
                          overflow-y-auto
                          bg-white
                          rounded-xl
                          shadow-2xl
                          border
                          border-gray-100
                          p-2
                        "
                      >

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

                            <div
                              className="
                                flex-1
                                min-w-0
                              "
                            >

                              <p
                                className="
                                  text-sm
                                  font-semibold
                                  text-gray-800
                                  group-hover:text-[#FCBC14]
                                "
                              >
                                {city.name}
                              </p>

                              <p
                                className="
                                  text-xs
                                  text-gray-400
                                  truncate
                                "
                              >
                                {city.stats?.liveProjects || 0}{" "}
                                live projects
                              </p>

                            </div>

                            <span className="text-xs text-gray-400">
                              {city.projects?.length || 0}
                            </span>

                          </Link>
                        ))}

                        <Link
                          to="/cities"
                          onClick={closeMenus}
                          className="
                            block
                            mt-2
                            px-4
                            py-3
                            rounded-lg
                            bg-[#072144]
                            text-white
                            font-semibold
                            text-center
                            hover:bg-[#FCBC14]
                            hover:text-[#072144]
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

              {/* ==================================================
                  MORE
              ================================================== */}

              {link.name === "More" && (
                <>
                  <button
                    type="button"
                    onClick={toggleMore}
                    className={`
                      relative
                      inline-flex
                      items-center
                      gap-1
                      font-medium
                      transition
                      ${
                        moreOpen
                          ? "text-[#FCBC14]"
                          : "text-[#072144] group-hover:text-[#FCBC14]"
                      }
                    `}
                  >
                    <span>
                      More
                    </span>

                    <span
                      className={`
                        text-xs
                        transition-transform
                        duration-200
                        ${
                          moreOpen
                            ? "rotate-180"
                            : ""
                        }
                      `}
                    >
                      ▼
                    </span>

                    {/* GOLDEN BAR - LEFT TO RIGHT */}

                    <div
                      className={`
                        absolute
                        left-0
                        -bottom-[9px]
                        h-1
                        w-full
                        bg-[#FCBC14]
                        origin-left
                        transform
                        transition-transform
                        duration-500
                        ease-out
                        ${
                          moreOpen
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }
                      `}
                    ></div>
                  </button>

                  {moreOpen && (
                    <div
                      className="
                        absolute
                        left-1/2
                        -translate-x-1/2
                        top-full
                        pt-3
                        z-50
                      "
                    >
                      <div
                        className="
                          w-64
                          bg-white
                          rounded-xl
                          shadow-2xl
                          border
                          border-gray-100
                          p-2
                        "
                      >

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

              {/* ==================================================
                  OTHER LINKS - HOME / SERVICES
              ================================================== */}

              {link.name !== "Design" &&
                link.name !== "Cities" &&
                link.name !== "More" && (
                  <NavLink
                    to={link.path}
                    end={link.path === "/"}
                    onClick={closeMenus}
                    className="group inline-block"
                  >
                    {({ isActive }) => (
                      <>
                        <span
                          className={`
                            font-medium
                            transition
                            ${
                              isActive
                                ? "text-[#FCBC14]"
                                : "text-[#072144] group-hover:text-[#FCBC14]"
                            }
                          `}
                        >
                          {link.name}
                        </span>

                        {/* GOLDEN BAR - LEFT TO RIGHT */}

                        <div
                          className={`
                            h-1
                            w-full
                            bg-[#FCBC14]
                            origin-left
                            transform
                            transition-transform
                            duration-500
                            ease-out
                            ${
                              isActive
                                ? "scale-x-100"
                                : "scale-x-0 group-hover:scale-x-100"
                            }
                          `}
                        ></div>
                      </>
                    )}
                  </NavLink>
                )}

            </div>
          ))}

        </div>

        {/* ==================================================
            RIGHT SIDE
        ================================================== */}

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          {/* ==================================================
              PREMIUM SEARCH BAR
          ================================================== */}

          <form
            onSubmit={handleSearch}
            className="
              relative
              hidden
              sm:block
            "
          >

            {/* SEARCH ICON */}

            <FaSearch
              className="
                absolute
                left-3.5
                top-1/2
                -translate-y-1/2
                text-[#072144]/50
                text-sm
                z-10
              "
            />

            {/* ANIMATED PLACEHOLDER */}

            {searchValue === "" && (
              <div
                className="
                  absolute
                  left-10
                  right-3
                  top-1/2
                  -translate-y-1/2
                  pointer-events-none
                  text-sm
                  whitespace-nowrap
                  overflow-hidden
                "
              >

                <span
                  className="
                    text-[#072144]/60
                    font-medium
                  "
                >
                  Search{" "}
                </span>

                <span
                  className="
                    text-[#FCBC14]
                    font-semibold
                    tracking-wide
                  "
                >
                  {searchText}
                </span>

                <span
                  className="
                    text-[#FCBC14]
                    ml-[2px]
                    animate-pulse
                    font-semibold
                  "
                >
                  |
                </span>

              </div>
            )}

            {/* SEARCH INPUT */}

            <input
              type="text"
              value={searchValue}
              onChange={(e) =>
                setSearchValue(e.target.value)
              }
              aria-label="Search"
              className="
                w-44
                lg:w-60
                h-10
                pl-10
                pr-4
                rounded-xl
                border
                border-gray-200
                bg-[#F8FAFC]
                text-[#072144]
                font-medium
                placeholder:text-gray-400
                outline-none
                shadow-sm
                transition-all
                duration-200
                hover:border-gray-300
                hover:bg-white
                focus:border-[#FCBC14]
                focus:ring-4
                focus:ring-[#FCBC14]/10
                focus:bg-white
                focus:shadow-md
              "
            />

          </form>

          {/* ==================================================
              CART
          ================================================== */}

          <button
            type="button"
            onClick={handleCartClick}
            aria-label="Cart"
            title="Cart"
            className="
              relative
              w-10
              h-10
              rounded-full
              flex
              items-center
              justify-center
              text-[#072144]
              hover:bg-yellow-50
              hover:text-[#FCBC14]
              transition
            "
          >

            <FaShoppingCart className="text-lg" />

            {cartCount > 0 && (
              <span
                className="
                  absolute
                  -top-1
                  -right-1
                  min-w-[20px]
                  h-5
                  px-1
                  rounded-full
                  bg-[#FCBC14]
                  text-[#072144]
                  text-[11px]
                  font-bold
                  flex
                  items-center
                  justify-center
                  border-2
                  border-white
                "
              >
                {cartCount > 99
                  ? "99+"
                  : cartCount}
              </span>
            )}

          </button>

          {/* ==================================================
              LOGIN
          ================================================== */}

          {!isLoggedIn && (
            <Link
              to="/login"
              onClick={closeMenus}
              className="
                hidden
                sm:block
                text-[#072144]
                font-medium
                hover:text-[#FCBC14]
                transition
              "
            >
              Login
            </Link>
          )}

          {/* ==================================================
              GET STARTED
          ================================================== */}

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
              hover:text-[#072144]
              transition
              shadow-sm
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