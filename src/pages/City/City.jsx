import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaUsers,
  FaHardHat,
} from "react-icons/fa";

import citiesData from "../../data/citiesData";

const City = () => {
  return (
    <section className="bg-[#F8FAFC] min-h-screen py-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">

          <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold">
            Our Locations
          </span>

          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A]">
            Home Solutions Across Nepal
          </h1>

          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Find designers, construction professionals and home service
            experts in major cities across Nepal.
          </p>

        </div>

        {/* Cities */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {citiesData.map((city) => (
            <Link
              key={city.id}
              to={`/cities/${city.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >

              {/* Image */}
              <div className="relative h-56 overflow-hidden">

                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute bottom-5 left-5 text-white">

                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-orange-400" />

                    <h2 className="text-2xl font-bold">
                      {city.name}
                    </h2>
                  </div>

                </div>

              </div>

              {/* Content */}
              <div className="p-5">

                <p className="text-sm text-gray-600 leading-6 line-clamp-2">
                  {city.shortDescription}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 mt-5">

                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-blue-600">
                      <FaUsers />
                      <span className="text-xs">
                        Designers
                      </span>
                    </div>

                    <p className="mt-1 text-xl font-bold text-gray-900">
                      {city.stats.designers}+
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-3">
                    <div className="flex items-center gap-2 text-orange-600">
                      <FaHardHat />
                      <span className="text-xs">
                        Workers
                      </span>
                    </div>

                    <p className="mt-1 text-xl font-bold text-gray-900">
                      {city.stats.constructionWorkers}+
                    </p>
                  </div>

                </div>

                <div className="mt-5 flex items-center justify-between">

                  <span className="text-sm text-gray-500">
                    {city.stats.liveProjects} Live Projects
                  </span>

                  <span className="flex items-center gap-2 text-orange-600 font-semibold text-sm group-hover:gap-3 transition-all">
                    Explore
                    <FaArrowRight />
                  </span>

                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
};

export default City;