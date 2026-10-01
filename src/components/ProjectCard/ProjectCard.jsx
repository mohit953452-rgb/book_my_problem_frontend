import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const fallbackImage =
    "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1400&q=80";

  if (!project) return null;

  return (
    <article className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">

      {/* ================= IMAGE ================= */}

      <div className="relative h-72 overflow-hidden">

        <img
          src={project.image || fallbackImage}
          alt={project.title || "Project"}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = fallbackImage;
          }}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        {/* ================= HOVER OVERLAY ================= */}

        <div
          className="
            absolute inset-0
            bg-black/60
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-300
            flex items-end
          "
        >

          <div className="p-6 text-white w-full">

            <span className="text-sm font-medium text-blue-300">
              {project.category || "General"}
            </span>

            <h3 className="mt-2 text-2xl font-bold">
              {project.title}
            </h3>

            {project.location && (
              <div className="mt-2 flex items-center gap-2 text-sm text-gray-200">
                <FaMapMarkerAlt />
                {project.location}
              </div>
            )}

            <Link
              to={`/projects/${project.slug}`}
              className="
                mt-5
                inline-flex
                items-center
                gap-2
                bg-white
                text-gray-900
                px-4
                py-2.5
                rounded-lg
                font-semibold
                hover:bg-[#FCBC14]
                hover:text-white
                transition
              "
            >
              View Project
              <FaArrowRight />
            </Link>

          </div>

        </div>

      </div>

      {/* ================= CARD CONTENT ================= */}

      <div className="p-5">

        <div className="flex items-center justify-between gap-3">

          <span className="text-sm font-semibold text-[#FCBC14]">
            {project.category || "General"}
          </span>

          <span className="text-sm text-gray-400">
            {project.year}
          </span>

        </div>

        <h3 className="mt-2 text-xl font-bold text-gray-900">
          {project.title}
        </h3>

        <p className="mt-2 text-gray-600 line-clamp-2">
          {project.shortDescription}
        </p>

      </div>

    </article>
  );
};

export default ProjectCard;