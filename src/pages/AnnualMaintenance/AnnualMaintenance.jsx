
import React from "react";
import { NavLink } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import schoolPackages from "../../data/AnnualMaintenance/school";

const AnnualMaintenance = () => {
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
              Maintenance Packages
            </h1>

            <p className="mt-4 text-gray-600 text-lg">
              Choose the maintenance package according to your property.
            </p>

          </div>


          {/* ================= SWITCH BUTTONS ================= */}

          <div className="mt-10 flex justify-center">

            <div className="inline-flex bg-gray-100 p-1.5 rounded-xl">

              {/* SCHOOL */}

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


              {/* HOTEL */}

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


      {/* ================= SCHOOL PACKAGES ================= */}

      <section className="py-14">

        <div className="max-w-7xl mx-auto px-6">

          {/* PAGE TITLE */}

          <div className="mb-8">

            <h2 className="text-3xl font-bold text-gray-900">
              School Maintenance Packages
            </h2>

            <p className="mt-2 text-gray-600">
              Complete maintenance solutions for schools.
            </p>

          </div>


          {/* ================= PLUMBING ================= */}

          <div className="mb-14">

            <h3 className="text-2xl font-bold text-gray-900">
              Plumbing Maintenance
            </h3>

            <p className="mt-2 text-gray-600">
              Monthly and yearly plumbing maintenance packages.
            </p>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {schoolPackages
                .filter((item) => item.category === "Plumbing")
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

            <h3 className="text-2xl font-bold text-gray-900">
              Electrical Maintenance
            </h3>

            <p className="mt-2 text-gray-600">
              Monthly and yearly electrical maintenance packages.
            </p>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {schoolPackages
                .filter((item) => item.category === "Electrical")
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}

            </div>

          </div>


          {/* ================= AC ================= */}

          <div className="mb-14">

            <h3 className="text-2xl font-bold text-gray-900">
              AC Servicing
            </h3>

            <p className="mt-2 text-gray-600">
              Random-call and annual AC maintenance packages.
            </p>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {schoolPackages
                .filter((item) => item.category === "AC Servicing")
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}

            </div>

          </div>


          {/* ================= SEPTIC TANK ================= */}

          <div>

            <h3 className="text-2xl font-bold text-gray-900">
              Septic Tank Maintenance
            </h3>

            <p className="mt-2 text-gray-600">
              Random-call and annual septic tank maintenance packages.
            </p>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {schoolPackages
                .filter((item) => item.category === "Septic Tank")
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

export default AnnualMaintenance;
