import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import designData from "../../data/designData";

const DesignCategory = () => {
  const { slug } = useParams();

  const category = designData.find((item) => item.slug === slug);
  const projects = category?.images || [];

  if (!category) {
    return (
      <section className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Design Category Not Found
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
    <div className="bg-white min-h-screen">
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/design"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
          >
            <FaArrowLeft />
            All Designs
          </Link>

          <span className="block mt-8 text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Design Category
          </span>

          <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-gray-900">
            {category.name}
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Explore our {category.name.toLowerCase()} projects.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {projects.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard
                  key={`${category.slug}-${project.id}`}
                  project={{ ...project, category: category.name }}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-16">
              No projects found in this category.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default DesignCategory;
