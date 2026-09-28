import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaPlus,
  FaCheck,
} from "react-icons/fa";

const fallbackImage =
  "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=800&q=80";

const ProductCard = ({ product }) => {
  if (!product) return null;

  // ================= ADD SERVICE =================

  const handleAddService = () => {
    const savedServices = localStorage.getItem("selectedServices");

    const services = savedServices
      ? JSON.parse(savedServices)
      : [];

    const alreadyAdded = services.some(
      (service) => service.id === product.id
    );

    if (alreadyAdded) {
      return;
    }

    const updatedServices = [
      ...services,
      {
        id: product.id,
        slug: product.slug,
        title: product.title,
        price: product.price,
        image: product.image,
      },
    ];

    localStorage.setItem(
      "selectedServices",
      JSON.stringify(updatedServices)
    );

    alert("Service added successfully!");
  };

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">

      {/* ================= IMAGE ================= */}

      <Link to={`/services/${product.slug}`}>

        <div className="relative h-48 overflow-hidden cursor-pointer">

          <img
            src={product.image || fallbackImage}
            alt={product.title}
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

      <div className="p-5">

        {/* TITLE */}

        <h3 className="text-lg font-bold text-gray-900 line-clamp-1">
          {product.title}
        </h3>


        {/* DESCRIPTION */}

        <p className="mt-2 text-sm text-gray-600 leading-5 line-clamp-2">
          {product.description}
        </p>


        {/* PRICE */}

        <div className="mt-5">

          {product.price && (
            <div>

              <span className="text-xs text-gray-500 block">
                Starting From
              </span>

              <span className="text-lg font-bold text-gray-900">
                {product.price}
              </span>

            </div>
          )}

        </div>


        {/* ================= BUTTONS ================= */}

        <div className="mt-5 flex items-center gap-3">

          {/* ADD SERVICE */}

          <button
            onClick={handleAddService}
            className="flex-1 inline-flex items-center justify-center gap-2 bg-[#072144] text-white px-4 py-3 rounded-lg font-semibold text-sm hover:bg-[#FCBC14] hover:text-white transition-all duration-300"
          >
            <FaPlus className="text-xs" />
            Add Service
          </button>


          {/* VIEW */}

          <Link
            to={`/services/${product.slug}`}
            className="inline-flex items-center justify-center gap-2 border border-[#072144] text-[#072144] px-4 py-3 rounded-lg font-semibold text-sm hover:bg-[#FCBC14] hover:text-white transition-all duration-300"
          >
            View
            <FaArrowRight className="text-xs" />
          </Link>

        </div>

      </div>

    </article>
  );
};

export default ProductCard;