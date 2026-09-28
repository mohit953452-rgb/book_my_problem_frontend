import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaStar,
  FaSearch,
} from "react-icons/fa";

import professionalsData from "../../data/professionalsData";

const Professionals = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  // Get unique categories
  const categories = [
    "All",
    ...new Set(
      professionalsData.map((professional) => professional.category)
    ),
  ];

  // Filter professionals
  const filteredProfessionals = useMemo(() => {
    return professionalsData.filter((professional) => {
      const searchText = search.toLowerCase().trim();

      const matchesSearch =
        professional.name.toLowerCase().includes(searchText) ||
        professional.city.toLowerCase().includes(searchText) ||
        professional.category.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "All" ||
        professional.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <section className="bg-[#F8FAFC] min-h-screen">

      {/* ================= HERO ================= */}

      <div className="bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold">
            Trusted Professionals
          </span>

          <h1 className="mt-5 text-4xl sm:text-5xl font-bold">
            Find the Right Professional
          </h1>

          <p className="mt-5 max-w-2xl text-gray-300 text-lg leading-8">
            Explore designers, architects, contractors and home service
            professionals available in different cities.
          </p>

        </div>
      </div>

      {/* ================= FILTER ================= */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">

          <div className="grid md:grid-cols-2 gap-4">

            {/* SEARCH */}

            <div className="relative">

              <FaSearch
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                "
              />

              <input
                type="text"
                placeholder="Search by professional, city or category..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                  w-full
                  pl-11
                  pr-4
                  py-3
                  rounded-lg
                  border
                  border-gray-200
                  outline-none
                  focus:border-blue-500
                  focus:ring-2
                  focus:ring-blue-100
                "
              />

            </div>

            {/* CATEGORY */}

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="
                px-4
                py-3
                rounded-lg
                border
                border-gray-200
                outline-none
                focus:border-blue-500
                focus:ring-2
                focus:ring-blue-100
              "
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

          </div>

        </div>

      </div>

      {/* ================= PROFESSIONALS ================= */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

        {/* HEADER */}

        <div className="flex items-center justify-between mb-7">

          <div>
            <h2 className="text-2xl font-bold text-[#0F172A]">
              Available Professionals
            </h2>

            <p className="text-gray-500 mt-1">
              {filteredProfessionals.length} professionals found
            </p>
          </div>

        </div>

        {/* CARDS */}

        {filteredProfessionals.length > 0 ? (

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredProfessionals.map((professional) => (

              <article
                key={professional.id}
                className="
                  bg-white
                  rounded-2xl
                  overflow-hidden
                  border
                  border-gray-100
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition
                  duration-300
                "
              >

                {/* IMAGE */}

                <div className="relative h-60">

                  <img
                    src={professional.image}
                    alt={professional.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />

                  {/* VERIFIED */}

                  {professional.verified && (
                    <span
                      className="
                        absolute
                        top-4
                        left-4
                        bg-green-500
                        text-white
                        text-xs
                        font-semibold
                        px-3
                        py-1
                        rounded-full
                      "
                    >
                      Verified
                    </span>
                  )}

                </div>

                {/* CONTENT */}

                <div className="p-5">

                  {/* NAME + RATING */}

                  <div className="flex items-start justify-between gap-3">

                    <div>

                      <h3 className="text-xl font-bold text-gray-900">
                        {professional.name}
                      </h3>

                      <p className="text-blue-600 text-sm font-semibold mt-1">
                        {professional.category}
                      </p>

                    </div>

                    <div className="flex items-center gap-1 text-yellow-500 text-sm">

                      <FaStar />

                      <span>
                        {professional.rating}
                      </span>

                    </div>

                  </div>

                  {/* CITY */}

                  <div className="flex items-center gap-2 mt-4 text-gray-500 text-sm">

                    <FaMapMarkerAlt />

                    <span>
                      {professional.city}
                    </span>

                  </div>

                  {/* DESCRIPTION */}

                  <p className="mt-3 text-gray-600 text-sm leading-6 line-clamp-2">
                    {professional.description}
                  </p>

                  {/* BOTTOM */}

                  <div className="mt-5 flex items-center justify-between gap-3">

                    <span className="text-sm text-gray-500">
                      {professional.experience} years experience
                    </span>

                    <Link
                      to={`/professionals/${professional.slug}`}
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-blue-600
                        font-semibold
                        text-sm
                        hover:text-blue-800
                        transition
                      "
                    >
                      View Profile

                      <FaArrowRight />

                    </Link>

                  </div>

                </div>

              </article>

            ))}

          </div>

        ) : (

          /* NO RESULT */

          <div className="bg-white rounded-2xl border border-gray-100 text-center py-20">

            <FaSearch className="mx-auto text-4xl text-gray-300" />

            <h3 className="mt-5 text-xl font-bold text-gray-900">
              No professionals found
            </h3>

            <p className="mt-2 text-gray-500">
              Try another name, city or category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
              className="
                mt-5
                px-5
                py-2.5
                bg-blue-600
                text-white
                rounded-lg
                font-semibold
                hover:bg-blue-700
                transition
              "
            >
              Clear Filters
            </button>

          </div>

        )}

      </div>

    </section>
  );
};

export default Professionals;