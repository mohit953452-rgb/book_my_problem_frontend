import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaCheckCircle,
  FaArrowLeft,
} from "react-icons/fa";
import services from "../../data/Services";

const fallbackImage =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80";

const ServiceDetails = () => {
  const { slug } = useParams();

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">

          <h1 className="text-3xl font-bold text-gray-900">
            Service Not Found
          </h1>

          <Link
            to="/services"
            className="mt-5 inline-flex items-center gap-2 text-blue-600 font-semibold"
          >
            <FaArrowLeft />
            Back to Services
          </Link>

        </div>
      </section>
    );
  }

  const Icon = service.icon;

  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-gray-50 py-12">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
          >
            <FaArrowLeft />
            All Services
          </Link>

          <div className="mt-8 grid lg:grid-cols-2 gap-10 items-center">

            {/* Content */}
            <div>

              {Icon && (
                <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-2xl">
                  <Icon />
                </div>
              )}

              <h1 className="mt-5 text-4xl sm:text-5xl font-bold text-gray-900">
                {service.title}
              </h1>

              <p className="mt-5 text-gray-600 text-lg leading-8">
                {service.longDescription ||
                  service.description ||
                  "Professional service for your home project."}
              </p>

              <Link
                to="/contact"
                className="mt-7 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Get a Consultation
              </Link>

            </div>

            {/* Image */}
            <img
              src={service.image || fallbackImage}
              alt={service.title}
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = fallbackImage;
              }}
            />

          </div>

        </div>

      </section>

      {/* Features */}
      <section className="py-16">

        <div className="max-w-5xl mx-auto px-4">

          <h2 className="text-3xl font-bold text-gray-900">
            What's Included
          </h2>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">

            {(service.features || []).map((feature, index) => (
              <div
                key={`${feature}-${index}`}
                className="flex items-center gap-3 p-4 rounded-xl bg-gray-50"
              >
                <FaCheckCircle className="text-blue-600 shrink-0" />

                <span className="text-gray-700">
                  {feature}
                </span>
              </div>
            ))}

          </div>

        </div>

      </section>

    </div>
  );
};

export default ServiceDetails;