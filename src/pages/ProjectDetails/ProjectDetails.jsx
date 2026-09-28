import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";
import designData from "../../data/designData";

const fallbackImage =
  "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1400&q=80";

const ProjectDetails = () => {
  const { slug } = useParams();

  const project = designData
    .flatMap((category) =>
      (category.images || []).map((item) => ({
        ...item,
        category: item.category || category.name,
      }))
    )
    .find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Project Not Found
          </h1>

          <Link
            to="/design"
            className="mt-5 inline-flex items-center gap-2 text-blue-600 font-semibold"
          >
            <FaArrowLeft />
            Back to Designs
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <Link
            to="/design"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
          >
            <FaArrowLeft />
            All Designs
          </Link>

          <div className="mt-8">

            <span className="text-blue-600 font-semibold">
              {project.category}
            </span>

            <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-gray-900">
              {project.title}
            </h1>

            <div className="mt-5 flex flex-wrap gap-6 text-gray-500">

              {project.location && (
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-blue-600" />
                  {project.location}
                </span>
              )}

              {project.area && (
                <span>
                  Area: {project.area}
                </span>
              )}

              {project.year && (
                <span>
                  Year: {project.year}
                </span>
              )}

            </div>
          </div>

          <img
            src={project.image || fallbackImage}
            alt={project.title}
            className="mt-8 w-full h-[350px] sm:h-[500px] object-cover rounded-2xl shadow-lg"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = fallbackImage;
            }}
          />

        </div>
      </section>

      {/* Details */}
      <section className="py-16">

        <div className="max-w-5xl mx-auto px-4 grid lg:grid-cols-2 gap-12">

          {/* Description */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              About This Project
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              {project.description ||
                project.shortDescription ||
                "Project details are not available."}
            </p>
          </div>

          {/* Features */}
          <div>

            <h2 className="text-3xl font-bold text-gray-900">
              Project Features
            </h2>

            <div className="mt-6 space-y-4">

              {(project.features || []).map((feature, index) => (
                <div
                  key={`${feature}-${index}`}
                  className="flex gap-3 items-center p-3 rounded-lg bg-gray-50"
                >
                  <FaCheckCircle className="text-blue-600 shrink-0" />

                  <span className="text-gray-700">
                    {feature}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default ProjectDetails;