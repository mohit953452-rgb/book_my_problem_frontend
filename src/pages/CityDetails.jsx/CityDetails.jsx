import React from "react";
import { Link, useParams } from "react-router-dom";

import {
  FaArrowLeft,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaArrowRight,
  FaUsers,
  FaHardHat,
  FaBuilding,
  FaClipboardCheck,
} from "react-icons/fa";

import citiesData from "../../data/citiesData";

const CityDetails = () => {
  const { slug } = useParams();

  const city = citiesData.find(
    (item) => item.slug === slug
  );

  if (!city) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-[#F8FAFC] px-4">

        <div className="text-center">

          <h1 className="text-4xl font-bold text-[#0F172A]">
            City Not Found
          </h1>

          <p className="mt-3 text-gray-600">
            The city you are looking for does not exist.
          </p>

          <Link
            to="/cities"
            className="inline-flex items-center gap-2 mt-6 bg-[#2563EB] text-white px-6 py-3 rounded-lg font-semibold"
          >
            <FaArrowLeft />
            Back to Cities
          </Link>

        </div>

      </section>
    );
  }

  return (
    <section className="bg-[#F8FAFC] min-h-screen">

      {/* HERO */}
      <div className="relative h-[480px] sm:h-[550px]">

        <img
          src={city.image}
          alt={city.name}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">

          <div className="max-w-3xl text-white">

            <Link
              to="/cities"
              className="inline-flex items-center gap-2 text-gray-200 hover:text-white mb-6"
            >
              <FaArrowLeft />
              All Cities
            </Link>

            <div className="flex items-center gap-2 text-orange-400 font-semibold">
              <FaMapMarkerAlt />
              {city.name}, Nepal
            </div>

            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold">
              Home Solutions in {city.name}
            </h1>

            <p className="mt-5 text-gray-200 text-base sm:text-lg leading-8">
              {city.shortDescription}
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 mt-7 bg-[#2563EB] text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Start Your Project
              <FaArrowRight />
            </Link>

          </div>

        </div>

      </div>

      {/* STATS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          <div className="bg-white rounded-2xl shadow-lg p-6 border">
            <FaUsers className="text-blue-600 text-2xl" />

            <p className="mt-3 text-gray-500 text-sm">
              Designers
            </p>

            <h3 className="text-3xl font-bold text-gray-900">
              {city.stats.designers}+
            </h3>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border">
            <FaHardHat className="text-orange-600 text-2xl" />

            <p className="mt-3 text-gray-500 text-sm">
              Construction Workers
            </p>

            <h3 className="text-3xl font-bold text-gray-900">
              {city.stats.constructionWorkers}+
            </h3>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border">
            <FaBuilding className="text-green-600 text-2xl" />

            <p className="mt-3 text-gray-500 text-sm">
              Live Projects
            </p>

            <h3 className="text-3xl font-bold text-gray-900">
              {city.stats.liveProjects}
            </h3>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border">
            <FaClipboardCheck className="text-purple-600 text-2xl" />

            <p className="mt-3 text-gray-500 text-sm">
              Completed Projects
            </p>

            <h3 className="text-3xl font-bold text-gray-900">
              {city.stats.completedProjects}+
            </h3>
          </div>

        </div>

      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid lg:grid-cols-3 gap-10">

          {/* ABOUT */}
          <div className="lg:col-span-2">

            <span className="text-orange-600 font-semibold uppercase tracking-wider text-sm">
              About {city.name}
            </span>

            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
              Complete Home Solutions in {city.name}
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              {city.description}
            </p>

            {/* Highlights */}
            <h3 className="mt-10 text-2xl font-bold text-[#0F172A]">
              What We Offer
            </h3>

            <div className="mt-5 grid sm:grid-cols-2 gap-4">

              {city.highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl p-4 shadow-sm"
                >
                  <FaCheckCircle className="text-green-500 shrink-0" />

                  <span className="text-gray-700 font-medium">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

          {/* SERVICES */}
          <div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sticky top-24">

              <h3 className="text-xl font-bold text-[#0F172A]">
                Services Available
              </h3>

              <div className="mt-5 space-y-3">

                {city.services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <FaCheckCircle className="text-[#2563EB] text-sm" />
                    {service}
                  </div>
                ))}

              </div>

              <Link
                to="/contact"
                className="mt-6 w-full flex items-center justify-center gap-2 bg-[#2563EB] text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Get Started
                <FaArrowRight />
              </Link>

            </div>

          </div>

        </div>

        {/* PROJECTS */}
        <div className="mt-16">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">

            <div>
              <span className="text-orange-600 font-semibold uppercase tracking-wider text-sm">
                Projects in {city.name}
              </span>

              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
                Latest Projects
              </h2>
            </div>

            <span className="text-gray-500">
              {city.projects.length} featured projects
            </span>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

            {city.projects.map((project) => (
              <article
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition"
              >

                <div className="relative h-60 overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />

                  <span
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === "Live"
                        ? "bg-green-500 text-white"
                        : "bg-gray-900 text-white"
                    }`}
                  >
                    {project.status}
                  </span>

                </div>

                <div className="p-5">

                  <div className="flex justify-between gap-3">

                    <span className="text-sm font-semibold text-blue-600">
                      {project.category}
                    </span>

                    <span className="text-sm text-gray-400">
                      {project.year}
                    </span>

                  </div>

                  <h3 className="mt-2 text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-gray-600 line-clamp-2">
                    {project.shortDescription}
                  </p>

                  <div className="mt-4 flex items-center justify-between">

                    <span className="text-sm text-gray-500">
                      {project.area}
                    </span>

                    <Link
                      to={`/cities/${city.slug}/${project.slug}`}
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold"
                    >
                      View
                      <FaArrowRight />
                    </Link>

                  </div>

                </div>

              </article>
            ))}

          </div>

        </div>

        {/* FEATURED */}
        <div className="mt-16 bg-[#0F172A] rounded-2xl p-8 sm:p-10 text-white">

          <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>

          <h2 className="mt-3 text-2xl sm:text-3xl font-bold">
            {city.featuredText}
          </h2>

          <p className="mt-4 text-gray-300 max-w-3xl leading-7">
            {city.areaDescription}
          </p>

        </div>

      </div>

    </section>
  );
};

export default CityDetails;