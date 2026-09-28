import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const fallbackImage =
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80";

const ServiceCard = ({ service }) => {
  if (!service) return null;

  const Icon = service.icon;

  // Annual Maintenance ke liye alag page
  const serviceLink =
    service.slug === "annual-maintenance-charges"
      ? "/annual-maintenance"
      : `/services/${service.slug}`;

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">

      {/* ================= IMAGE ================= */}

      <Link to={serviceLink}>
        <div className="relative h-56 overflow-hidden cursor-pointer">

          <img
            src={service.image || fallbackImage}
            alt={service.title}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = fallbackImage;
            }}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

        </div>
      </Link>


      {/* ================= CONTENT ================= */}

      <div className="p-6">

        {/* ICON */}

        {Icon && (
          <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#FCBC14] flex items-center justify-center text-xl">
            <Icon />
          </div>
        )}


        {/* TITLE */}

        <h3 className="mt-5 text-xl font-bold text-gray-900">
          {service.title}
        </h3>


        {/* DESCRIPTION */}

        <p className="mt-3 text-gray-600 leading-6">
          {service.description}
        </p>


        {/* ================= VIEW SERVICES ================= */}

        <Link
          to={serviceLink}
          className="mt-5 inline-flex items-center gap-2 text-[#FCBC14] font-semibold hover:text-[#E5A000]"
        >
          View Services
          <FaArrowRight />
        </Link>

      </div>

    </article>
  );
};

export default ServiceCard;