import React from "react";
import { NavLink } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";

import hotelRestaurantPackages from "../../data/AnnualMaintenance/hotelRestaurant";

const HotelRestaurant = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-10">

      {/* ================= HEADER ================= */}

      <section className="bg-white py-12">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
              Annual Maintenance
            </span>

            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
              Hotel & Restaurant
            </h1>

            <p className="mt-4 text-gray-600 text-lg">
              Complete maintenance packages for hotels and restaurants.
            </p>

          </div>


          {/* ================= BUTTONS ================= */}

          <div className="mt-8 flex justify-center">

            <div className="inline-flex bg-gray-100 p-1.5 rounded-xl">

              <NavLink
                to="/annual-maintenance"
                end
                className={({ isActive }) =>
                  `px-6 py-3 rounded-lg font-semibold transition ${
                    isActive
                      ? "bg-blue-600 text-white shadow"
                      : "text-gray-600 hover:text-gray-900"
                  }`
                }
              >
                School
              </NavLink>


              <NavLink
                to="/annual-maintenance/hotel-restaurant"
                className={({ isActive }) =>
                  `px-6 py-3 rounded-lg font-semibold transition ${
                    isActive
                      ? "bg-blue-600 text-white shadow"
                      : "text-gray-600 hover:text-gray-900"
                  }`
                }
              >
                Hotel & Restaurant
              </NavLink>

            </div>

          </div>

        </div>

      </section>


      {/* ================= PACKAGES ================= */}

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6">

          {/* ================= PLUMBING ================= */}

          <div className="mb-14">

            <h2 className="text-3xl font-bold text-gray-900">
              Plumbing Maintenance
            </h2>

            <p className="mt-2 text-gray-600">
              Monthly and yearly plumbing maintenance packages.
            </p>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {hotelRestaurantPackages
                .filter(
                  (item) => item.category === "Plumbing"
                )
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}

            </div>

          </div>


          {/* ================= ELECTRICAL ================= */}

          <div className="mb-14">

            <h2 className="text-3xl font-bold text-gray-900">
              Electrical Maintenance
            </h2>

            <p className="mt-2 text-gray-600">
              Monthly and yearly electrical maintenance packages.
            </p>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {hotelRestaurantPackages
                .filter(
                  (item) => item.category === "Electrical"
                )
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}

            </div>

          </div>


          {/* ================= AC ================= */}

          <div>

            <h2 className="text-3xl font-bold text-gray-900">
              AC Servicing
            </h2>

            <p className="mt-2 text-gray-600">
              Random-call and annual AC maintenance packages.
            </p>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {hotelRestaurantPackages
                .filter(
                  (item) => item.category === "AC Servicing"
                )
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default HotelRestaurant;