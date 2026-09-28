import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import designData from "../../data/designData";

const HomeConstruction = () => {
  const data = designData.find((item) => item.slug === "home-construction") || designData[0];
  const projects = data?.images || [];

  return (
    <div className="w-full px-4 md:px-8 lg:px-12 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        Home Construction
      </h1>

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No projects found for this category.</p>
      )}
    </div>
  );
};

export default HomeConstruction;