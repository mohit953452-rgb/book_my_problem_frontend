import React from "react";
import { Link } from "react-router-dom";
import designData from "../../data/designData";

const Design = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Our Designs
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-900">
            Explore Our Designs
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Choose a design category to explore its projects.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {designData.map((category) => (
            <Link
              key={category.id}
              to={`/design/${category.slug}`}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                {category.images?.[0]?.image ? (
                  <img
                    src={category.images[0].image}
                    alt={category.name}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                    No image
                  </div>
                )}
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900">
                  {category.name}
                </h2>

                <p className="mt-2 text-gray-500">
                  {category.images?.length || 0} projects
                </p>

                <span className="inline-block mt-5 text-blue-600 font-semibold">
                  View Designs →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Design;
