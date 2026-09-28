import React from "react";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaCheckCircle,
  FaUsers,
  FaMapMarkerAlt,
  FaHardHat,
  FaHome,
} from "react-icons/fa";

import aboutData from "../../data/aboutData";

const About = () => {
  return (
    <section className="bg-[#F8FAFC] min-h-screen">

      {/* =====================================================
          HERO / ABOUT US
      ===================================================== */}

      <div className="relative bg-[#0F172A] text-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

          <div className="max-w-3xl">

            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold">
              {aboutData.badge}
            </span>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              {aboutData.title}
            </h1>

            <p className="mt-6 text-gray-300 text-base sm:text-lg leading-8">
              {aboutData.description}
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 mt-8 bg-[#072144] px-6 py-3.5 rounded-lg font-semibold hover:bg-[#FCBC14] transition"
            >
              Start Your Project
              <FaArrowRight />
            </Link>

          </div>

        </div>

      </div>


      {/* =====================================================
          STATS
      ===================================================== */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

          {aboutData.stats.map((stat) => (

            <div
              key={stat.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6"
            >

              <div className="text-blue-600 text-2xl">

                {stat.icon === "users" && <FaUsers />}

                {stat.icon === "cities" && <FaMapMarkerAlt />}

                {stat.icon === "workers" && <FaHardHat />}

                {stat.icon === "projects" && <FaHome />}

              </div>

              <h3 className="mt-3 text-3xl font-bold text-gray-900">
                {stat.value}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {stat.label}
              </p>

            </div>

          ))}

        </div>

      </div>


      {/* =====================================================
          OUR STORY
      ===================================================== */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}

          <div className="relative">

            <div className="overflow-hidden rounded-3xl shadow-xl">

              <img
                src={aboutData.story.image}
                alt="Book My Problem"
                className="w-full h-[450px] object-cover hover:scale-105 transition duration-700"
              />

            </div>

          </div>


          {/* CONTENT */}

          <div>

            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold">
              {aboutData.story.badge}
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
              {aboutData.story.title}
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              {aboutData.story.description}
            </p>


            {/* POINTS */}

            <div className="mt-7 space-y-4">

              {aboutData.story.points.map((point, index) => (

                <div
                  key={index}
                  className="flex items-start gap-3"
                >

                  <FaCheckCircle className="text-blue-600 text-lg mt-1 flex-shrink-0" />

                  <p className="text-gray-700">
                    {point}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          OUR SERVICES
      ===================================================== */}

      <div className="bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

          <div className="grid lg:grid-cols-2 gap-12 items-center">


            {/* CONTENT */}

            <div className="order-2 lg:order-1">

              <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold">
                {aboutData.services.badge}
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
                {aboutData.services.title}
              </h2>

              <div className="mt-6 space-y-5">

                {aboutData.services.description.map(
                  (paragraph, index) => (

                    <p
                      key={index}
                      className={`text-gray-600 leading-8 ${
                        index ===
                        aboutData.services.description.length - 1
                          ? "font-semibold"
                          : ""
                      }`}
                    >
                      {paragraph}
                    </p>

                  )
                )}

              </div>

            </div>


            {/* IMAGE */}

            <div className="order-1 lg:order-2">

              <div className="overflow-hidden rounded-3xl shadow-xl">

                <img
                  src={aboutData.services.image}
                  alt="Our Services"
                  className="w-full h-[450px] object-cover hover:scale-105 transition duration-700"
                />

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          TEAM MEMBERS
      ===================================================== */}

      <div className="bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">


          {/* SECTION HEADING */}

          <div className="text-center max-w-2xl mx-auto mb-14">

            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold">
              Our Team
            </span>

            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
              Meet Our Leadership Team
            </h2>

            <p className="mt-4 text-gray-600">
              Meet the experienced people behind Book My Problem who are
              committed to delivering reliable and professional services.
            </p>

          </div>


          {/* TEAM MEMBERS */}

          <div className="space-y-20">

            {aboutData.team.map((member, index) => (

              <div
                key={member.id}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >


                {/* IMAGE */}

                <div
                  className={`overflow-hidden rounded-3xl shadow-xl ${
                    index % 2 !== 0
                      ? "lg:order-2"
                      : "lg:order-1"
                  }`}
                >

                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[450px] object-cover hover:scale-105 transition duration-700"
                  />

                </div>


                {/* CONTENT */}

                <div
                  className={
                    index % 2 !== 0
                      ? "lg:order-1"
                      : "lg:order-2"
                  }
                >

                  <span className="text-blue-600 font-semibold">
                    {member.role}
                  </span>

                  <h3 className="mt-2 text-3xl font-bold text-gray-900">
                    {member.name}
                  </h3>


                  <div className="mt-6 space-y-5">

                    {member.description.map(
                      (paragraph, paragraphIndex) => (

                        <p
                          key={paragraphIndex}
                          className="text-gray-600 leading-8"
                        >
                          {paragraph}
                        </p>

                      )
                    )}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* =====================================================
          MISSION / VISION
      ===================================================== */}

      <div className="bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

          <div className="grid md:grid-cols-2 gap-8">


            {/* MISSION */}

            <div className="bg-blue-50 rounded-2xl p-8">

              <span className="text-blue-600 font-semibold">
                {aboutData.mission.title}
              </span>

              <p className="mt-4 text-gray-700 leading-7">
                {aboutData.mission.description}
              </p>

            </div>


            {/* VISION */}

            <div className="bg-orange-50 rounded-2xl p-8">

              <span className="text-orange-600 font-semibold">
                {aboutData.vision.title}
              </span>

              <p className="mt-4 text-gray-700 leading-7">
                {aboutData.vision.description}
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          CTA
      ===================================================== */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <div className="bg-[#0F172A] rounded-3xl p-8 sm:p-12 text-center text-white">

          <h2 className="text-3xl sm:text-4xl font-bold">
            {aboutData.cta.title}
          </h2>

          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            {aboutData.cta.description}
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 mt-7 bg-[#072144] px-7 py-3.5 rounded-lg font-semibold hover:bg-[#FCBC14] transition"
          >
            {aboutData.cta.button}
            <FaArrowRight />
          </Link>

        </div>

      </div>

    </section>
  );
};

export default About;