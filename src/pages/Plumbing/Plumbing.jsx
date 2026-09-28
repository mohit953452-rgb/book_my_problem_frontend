import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import plumbingServices from "../../data/ServiceDetails/plumbing.jsx";

const Plumbing = () => {
  return (
    <div className="min-h-screen bg-gray-50">

  


      {/* ================= SERVICES ================= */}

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* HEADING */}

          <div className="text-center max-w-2xl mx-auto">

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Plumbing Services
            </h2>

            <p className="mt-4 text-gray-600">
              Choose the plumbing service you need from our wide range
              of professional solutions.
            </p>

          </div>


          {/* SERVICE CARDS */}

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plumbingServices.map((product) => (
                <ProductCard
                key={product.id}
                product={product}
                />
            ))}
            </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="py-16 bg-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="rounded-3xl bg-gray-900 text-white p-10 md:p-14 text-center">

            <h2 className="text-3xl md:text-4xl font-bold">
              Need Professional Plumbing Service?
            </h2>

            <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
              Get reliable plumbing products and professional services
              from experienced professionals.
            </p>

            <button className="mt-7 bg-blue-600 hover:bg-blue-700 px-7 py-3 rounded-xl font-semibold transition">
              Book a Plumber
            </button>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Plumbing;