import React from "react";
import { Link } from "react-router-dom";

import {
  FaHome,
  FaCouch,
  FaBriefcase,
  FaBuilding,
  FaUtensils,
  FaBath,
  FaBed,
  FaTools,
  FaBolt,
} from "react-icons/fa";

// Actual services data
import services from "../../data/Services";

const popularSearches = [
  {
    name: "Home Interior",
    query: "Home Interior",
    icon: FaHome,

    // Services.js se match
    serviceSlug: "interior-design",
  },

  {
    name: "Home Decor",
    query: "Home Decor",
    icon: FaCouch,
  },

  {
    name: "Living Room",
    query: "Living Room",
    icon: FaCouch,
  },

  {
    name: "Wardrobe",
    query: "Wardrobe",
    icon: FaBuilding,
  },

  {
    name: "Office",
    query: "Office",
    icon: FaBriefcase,
  },

  {
    name: "2BHK",
    query: "2BHK",
    icon: FaBuilding,
  },

  {
    name: "Modular Kitchen",
    query: "Modular Kitchen",
    icon: FaUtensils,

    // Services.js
    serviceSlug: "modular-kitchen",
  },

  {
    name: "Bathroom",
    query: "Bathroom",
    icon: FaBath,
  },

  {
    name: "Furniture",
    query: "Furniture",
    icon: FaCouch,
  },

  {
    name: "Bedroom",
    query: "Bedroom",
    icon: FaBed,
  },

  

  {
    name: "Plumbing",
    query: "Plumbing",
    icon: FaTools,

    // Services.js
    serviceSlug: "plumbing",
  },

  {
    name: "Electrical",
    query: "Electrical",
    icon: FaBolt,

    // Services.js
    serviceSlug: "electrical",
  },
];

const PopularSearches = () => {
  // Services.js se actual service find karna
  const getServiceLink = (item) => {
    // Agar serviceSlug diya hai
    if (item.serviceSlug) {
      const service = services.find(
        (service) => service.slug === item.serviceSlug
      );

      if (service) {
        // Annual Maintenance ke liye special route
        if (service.slug === "annual-maintenance-charges") {
          return "/annual-maintenance";
        }

        return `/services/${service.slug}`;
      }
    }

    // Agar actual service nahi hai to SearchPage
    return `/search?q=${encodeURIComponent(item.query)}`;
  };

  return (
    <section className="w-full bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= HEADING ================= */}
        <div className="mb-6 text-center">
          <p className="mb-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#FCBC14]">
            Explore Services
          </p>

          <h2 className="text-2xl font-bold text-[#072144] sm:text-3xl">
            What are you looking for?
          </h2>

          <p className="mt-2 text-sm text-gray-500 sm:text-base">
            Quickly explore our popular services and designs
          </p>
        </div>

        {/* ================= POPULAR SEARCHES ================= */}
        <div className="flex flex-wrap justify-center gap-3">
          {popularSearches.map((item) => {
            const Icon = item.icon;
            const link = getServiceLink(item);

            return (
              <Link
                key={item.name}
                to={link}
                className="
                  group
                  flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-gray-200
                  bg-white
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  text-[#072144]
                  shadow-sm
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-[#FCBC14]
                  hover:bg-[#072144]
                  hover:text-white
                  hover:shadow-md
                "
              >
                {/* ICON */}
                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-[#FFF7D9]
                    text-[#072144]
                    transition-colors
                    duration-200
                    group-hover:bg-[#FCBC14]
                  "
                >
                  <Icon className="text-sm" />
                </span>

                {/* TEXT */}
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PopularSearches;