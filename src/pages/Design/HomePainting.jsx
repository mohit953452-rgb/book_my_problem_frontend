import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import designData from "../../data/designData";

const HomePainting = () => {
  const data = designData.find(
    (item) => item.slug === "home-painting"
  );

  return (
    <div className="w-full px-4 md:px-8 lg:px-12 py-10">

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
        Home Painting
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {data?.images?.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}

      </div>

    </div>
  );
};

export default HomePainting;