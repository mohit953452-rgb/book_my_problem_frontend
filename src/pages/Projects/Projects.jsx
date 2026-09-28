import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import designData from "../../data/designData";

const Projects = () => {
  const projects = designData.flatMap((category) =>
    (category.images || []).map((project) => ({
      ...project,
      category: category.name,
    }))
  );

  return (
    <div className="bg-white min-h-screen">
      <section className="bg-gray-50 py-14 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Our Work
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-900">
            All Projects
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Explore projects from every design category.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
