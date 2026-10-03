
import React from "react";

import {
  FaBars,
  FaBell,
  FaSearch,
} from "react-icons/fa";

import {
  useNavigate,
} from "react-router-dom";

import bookmyprob from "../../assets/bookmyprob.jpg";
import bmptext from "../../assets/bmptext.jpg";

const AdminNavbar = ({
  setSidebarOpen,
}) => {
  const navigate = useNavigate();

  // =====================================================
  // NOTIFICATIONS
  // =====================================================

  const handleNotifications = () => {
    navigate("/admin/notifications");
  };


  // =====================================================
  // LOGO → ADMIN DASHBOARD
  // =====================================================

  const handleLogoClick = () => {
    navigate("/admin/dashboard");
  };


  // =====================================================
  // ADMIN PROFILE
  // =====================================================

  const handleProfileClick = () => {
    navigate("/admin/profile");
  };


  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0
        w-full
        h-15
        z-[60]
        bg-[#F7F3EA]
        border-b
        border-[#072144]/10
      "
    >
      <div
        className="
          h-full
          w-full
          flex
          items-center
          justify-between
          px-4
          sm:px-6
          lg:px-8
        "
      >

        {/* =================================================
            LEFT SIDE
        ================================================= */}

        <div className="flex items-center gap-3 min-w-0">

          {/* =================================================
              MOBILE MENU
          ================================================= */}

          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="
              lg:hidden
              w-10
              h-10
              rounded-lg
              bg-[#072144]
              text-white
              flex
              items-center
              justify-center
              hover:bg-[#FCBC14]
              hover:text-[#072144]
              transition
              shrink-0
            "
            title="Open Menu"
          >
            <FaBars />
          </button>


          {/* =================================================
              LOGO
              CLICK → ADMIN DASHBOARD
          ================================================= */}

          <button
            type="button"
            onClick={handleLogoClick}
            className="
              flex
              items-center
              gap-2
              shrink-0
              cursor-pointer
              rounded-lg
              px-1.5
              py-1
              hover:bg-white/70
              transition
            "
            title="Admin Dashboard"
          >

            {/* Round Logo */}

            <div
              className="
                w-11
                h-11
                rounded-full
                overflow-hidden
                bg-white
                border-2
                border-[#FCBC14]
                shadow-sm
                shrink-0
              "
            >
              <img
                src={bookmyprob}
                alt="Book My Problem"
                className="
                  w-full
                  h-full
                  object-cover
                  scale-125
                "
              />
            </div>


            {/* Text Logo */}

            <img
              src={bmptext}
              alt="Book My Problem"
              className="
                w-[125px]
                h-10
                object-contain
                object-left
                hidden
                sm:block
              "
            />

          </button>


          {/* =================================================
              SEPARATOR
          ================================================= */}

          <div
            className="
              hidden
              lg:block
              w-px
              h-9
              bg-[#072144]/10
              ml-2
            "
          />


          {/* =================================================
              PORTAL TITLE
          ================================================= */}

          <div className="hidden lg:block ml-1">

            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.18em]
                text-[#072144]/50
                font-medium
              "
            >
              Management
            </p>

            <h1
              className="
                text-lg
                font-bold
                text-[#072144]
                leading-tight
              "
            >
              Admin Portal
            </h1>

          </div>

        </div>


        {/* =================================================
            RIGHT SIDE
        ================================================= */}

        <div className="flex items-center gap-2 sm:gap-4">

          {/* =================================================
              SEARCH
          ================================================= */}

          <button
            type="button"
            className="
              hidden
              md:flex
              items-center
              gap-2
              h-10
              px-4
              rounded-lg
              bg-white
              border
              border-[#072144]/10
              text-[#072144]/50
              hover:border-[#FCBC14]
              hover:text-[#072144]
              transition
            "
            title="Search"
          >
            <FaSearch className="text-sm" />

            <span className="text-xs">
              Search
            </span>
          </button>


          {/* =================================================
              NOTIFICATION
          ================================================= */}

          <button
            type="button"
            onClick={handleNotifications}
            className="
              relative
              w-10
              h-10
              rounded-full
              bg-white
              border
              border-[#072144]/10
              text-[#072144]
              flex
              items-center
              justify-center
              hover:bg-[#FCBC14]
              hover:border-[#FCBC14]
              transition
              shadow-sm
            "
            title="Notifications"
          >

            <FaBell className="text-base sm:text-lg" />

            <span
              className="
                absolute
                top-1
                right-1
                w-2
                h-2
                rounded-full
                bg-red-500
                border
                border-white
              "
            />

          </button>


          {/* =================================================
              SEPARATOR
          ================================================= */}

          <div
            className="
              hidden
              sm:block
              w-px
              h-9
              bg-[#072144]/10
            "
          />


          {/* =================================================
              ADMIN PROFILE
              CLICK → /admin/profile
          ================================================= */}

          <button
            type="button"
            onClick={handleProfileClick}
            className="
              flex
              items-center
              gap-2
              sm:gap-3
              rounded-xl
              px-2
              py-1.5
              cursor-pointer
              hover:bg-white/70
              transition
              text-left
            "
            title="Admin Profile"
          >

            {/* Admin Circle */}

            <div
              className="
                w-10
                h-10
                sm:w-11
                sm:h-11
                rounded-full
                bg-[#072144]
                text-white
                border-2
                border-[#FCBC14]
                flex
                items-center
                justify-center
                font-bold
                shadow-sm
                shrink-0
              "
            >
              A
            </div>


            {/* Admin Text */}

            <div className="hidden sm:block">

              <p
                className="
                  text-sm
                  font-semibold
                  text-[#072144]
                  leading-tight
                "
              >
                Admin
              </p>

              <p
                className="
                  text-xs
                  text-[#072144]/50
                  mt-0.5
                "
              >
                Administrator
              </p>

            </div>

          </button>

        </div>

      </div>
    </header>
  );
};

export default AdminNavbar;
