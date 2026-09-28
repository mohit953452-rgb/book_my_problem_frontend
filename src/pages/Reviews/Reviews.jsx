import React from "react";
import { Link } from "react-router-dom";
import {
  FaStar,
  FaQuoteLeft,
  FaArrowRight,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

import reviewsData from "../../data/reviewsData";
import renovationData from "../../data/renovationData";

const Reviews = () => {
  const averageRating =
    reviewsData.length > 0
      ? (
          reviewsData.reduce(
            (total, review) => total + review.rating,
            0
          ) / reviewsData.length
        ).toFixed(1)
      : "0.0";

  return (
    <section className="bg-[#F8FAFC] min-h-screen">

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <div className="bg-[#0F172A] text-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">

          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold">
            Customer Experiences
          </span>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold">
            Real Homes. Real People. Real Results.
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-gray-300 text-lg leading-8">
            From building a new home to transforming an old one, we connect
            homeowners with trusted professionals who turn ideas into reality.
          </p>

          <div className="mt-8 flex justify-center items-center gap-3">

            <FaStar className="text-yellow-400 text-xl" />

            <span className="text-3xl font-bold">
              {averageRating}
            </span>

            <span className="text-gray-400">
              average customer rating
            </span>

          </div>

        </div>

      </div>


      {/* ================================================= */}
      {/* SECTION 1 - WE BUILD HOUSES */}
      {/* ================================================= */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-blue-600 font-semibold uppercase text-sm tracking-wider">
            Customer Stories
          </span>

          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A]">
            We Build Houses For Our Customers
          </h2>

          <p className="mt-5 text-gray-600 text-lg leading-8">
            Every home has a different story. Here are some experiences from
            homeowners who trusted professionals through Book My Problem.
          </p>

        </div>


        {/* REVIEW CARDS */}
              {/* REVIEW CARDS */}

<div className="mt-16 space-y-10">

  {reviewsData.map((review, index) => {

    const isEven = index % 2 === 0;

    return (
      <article
        key={review.id}
        className={`
          group
          max-w-6xl
          mx-auto
          flex
          flex-col
          lg:flex-row
          bg-white
          rounded-3xl
          overflow-hidden
          border
          border-gray-100
          shadow-md
          hover:shadow-2xl
          transition-all
          duration-500
          ${!isEven ? "lg:flex-row-reverse" : ""}
        `}
      >

        {/* ================= HOUSE IMAGE 60% ================= */}

        <div className="relative w-full lg:w-[60%] h-[320px] sm:h-[400px] lg:h-[430px]">

          <img
            src={review.houseImage}
            alt={review.project}
            className="
              w-full
              h-full
              object-cover
              group-hover:scale-105
              transition-transform
              duration-700
            "
          />

          {/* Image Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          {/* Project Info */}

          <div className="absolute bottom-6 left-6 right-6 text-white">

            <span className="inline-flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-full text-xs font-semibold">
              <FaCheckCircle />
              Verified Customer
            </span>

            <h3 className="mt-3 text-2xl sm:text-3xl font-bold">
              {review.project}
            </h3>

            <div className="flex items-center gap-2 mt-2 text-sm text-gray-200">
              <FaMapMarkerAlt />
              {review.city}
            </div>

          </div>

        </div>


        {/* ================= CUSTOMER + REVIEW 40% ================= */}

        <div className="w-full lg:w-[40%] p-7 sm:p-9 lg:p-10 flex flex-col justify-center">

          {/* CUSTOMER */}

          <div className="flex items-center gap-4">

            <img
              src={review.image}
              alt={review.name}
              className="
                w-16
                h-16
                rounded-full
                object-cover
                border-4
                border-blue-100
                shadow-md
                flex-shrink-0
              "
            />

            <div>

              <h3 className="text-lg font-bold text-gray-900">
                {review.name}
              </h3>

              <p className="text-sm text-gray-500">
                {review.city}
              </p>

              {/* STARS */}

              <div className="flex items-center gap-1 mt-2">

                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={
                      star <= review.rating
                        ? "text-yellow-400"
                        : "text-gray-200"
                    }
                  />
                ))}

              </div>

            </div>

          </div>


          {/* REVIEW */}

          <div className="relative mt-7">

            <FaQuoteLeft className="text-blue-100 text-4xl mb-2" />

            <p className="text-gray-600 text-base sm:text-lg leading-8">
              "{review.review}"
            </p>

          </div>


          {/* PROJECT */}

          <div className="mt-7 pt-5 border-t border-gray-100">

            <p className="text-xs uppercase tracking-wider text-gray-400">
              Project Completed
            </p>

            <p className="mt-1 font-semibold text-blue-600">
              {review.project}
            </p>

          </div>

        </div>

      </article>
    );
  })}

</div>
       

      </div>


      {/* ================================================= */}
      {/* SECTION 2 - BEFORE / AFTER */}
      {/* ================================================= */}

      <div className="bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

          <div className="text-center max-w-3xl mx-auto">

            <span className="text-blue-600 font-semibold uppercase text-sm tracking-wider">
              Before & After
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A]">
              We Renovated Homes Before
            </h2>

            <p className="mt-5 text-gray-600 text-lg leading-8">
              Old spaces can become beautiful homes with the right planning,
              design and professionals.
            </p>

          </div>


          {/* RENOVATION CARDS */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-16">

            {renovationData.map((project) => (

              <article
                key={project.id}
                className="
                  bg-[#F8FAFC]
                  rounded-3xl
                  overflow-hidden
                  border
                  border-gray-100
                  shadow-sm
                  hover:shadow-xl
                  transition
                  duration-300
                  hover:-translate-y-1
                "
              >

                {/* BEFORE / AFTER */}

                <div className="grid grid-cols-2">

                  {/* BEFORE */}

                  <div className="relative h-64">

                    <img
                      src={project.beforeImage}
                      alt={`${project.title} before`}
                      className="
                        w-full
                        h-full
                        object-cover
                        grayscale-[20%]
                        brightness-75
                      "
                    />

                    <span
                      className="
                        absolute
                        top-4
                        left-4
                        bg-gray-900/80
                        text-white
                        text-xs
                        font-bold
                        px-3
                        py-1.5
                        rounded-full
                      "
                    >
                      BEFORE
                    </span>

                  </div>


                  {/* AFTER */}

                  <div className="relative h-64">

                    <img
                      src={project.afterImage}
                      alt={`${project.title} after`}
                      className="w-full h-full object-cover"
                    />

                    <span
                      className="
                        absolute
                        top-4
                        right-4
                        bg-green-500
                        text-white
                        text-xs
                        font-bold
                        px-3
                        py-1.5
                        rounded-full
                      "
                    >
                      AFTER
                    </span>

                  </div>

                </div>


                {/* CONTENT */}

                <div className="p-6">

                  <div className="flex items-center justify-between gap-3">

                    <span className="text-blue-600 text-sm font-semibold">
                      {project.category}
                    </span>

                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <FaMapMarkerAlt className="text-blue-500" />
                      {project.city}
                    </div>

                  </div>


                  <h3 className="mt-3 text-xl font-bold text-gray-900">
                    {project.title}
                  </h3>


                  <p className="mt-3 text-gray-600 leading-7">
                    {project.description}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </div>


      {/* ================================================= */}
      {/* CTA */}
      {/* ================================================= */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <div className="bg-blue-600 rounded-3xl p-8 sm:p-12 text-center text-white">

          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Build or Renovate Your Home?
          </h2>

          <p className="mt-4 text-blue-100 max-w-2xl mx-auto leading-7">
            Find trusted professionals, compare their work and start your
            home project with confidence.
          </p>

          <Link
            to="/contact"
            className="
              inline-flex
              items-center
              gap-3
              mt-7
              bg-white
              text-blue-600
              px-7
              py-3.5
              rounded-lg
              font-semibold
              hover:bg-gray-100
              transition
            "
          >
            Get Started
            <FaArrowRight />
          </Link>

        </div>

      </div>

    </section>
  );
};

export default Reviews;