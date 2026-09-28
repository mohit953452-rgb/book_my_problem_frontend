import React from "react";
import {
  FaUtensils,
  FaBoxes,
  FaWineGlassAlt,
  FaChair,
  FaTv,
  FaBook,
  FaLightbulb,
  FaImage,
  FaPaintRoller,
  FaBath,
  FaPlaceOfWorship,
  FaDoorOpen,
  FaTable,
  FaBed,
  FaHome,
} from "react-icons/fa";

const InteriorSolutions = () => {
  const solutions = [
    {
      title: "Modular Kitchen",
      icon: <FaUtensils />,
    },
    {
      title: "Storage & Wardrobe",
      icon: <FaBoxes />,
    },
    {
      title: "Crockery Units",
      icon: <FaWineGlassAlt />,
    },
    {
      title: "Space Saving Furniture",
      icon: <FaChair />,
    },
    {
      title: "TV Units",
      icon: <FaTv />,
    },
    {
      title: "Study Tables",
      icon: <FaBook />,
    },
    {
      title: "False Ceiling",
      icon: <FaHome />,
    },
    {
      title: "Lights",
      icon: <FaLightbulb />,
    },
    {
      title: "Wallpaper",
      icon: <FaImage />,
    },
    {
      title: "Wall Paint",
      icon: <FaPaintRoller />,
    },
    {
      title: "Bathroom",
      icon: <FaBath />,
    },
    {
      title: "Pooja Unit",
      icon: <FaPlaceOfWorship />,
    },
    {
      title: "Foyer Designs",
      icon: <FaDoorOpen />,
    },
    {
      title: "Movable Furniture",
      icon: <FaTable />,
    },
    {
      title: "Kids Bedroom",
      icon: <FaBed />,
    },
  ];

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[#2563EB] text-sm font-semibold uppercase tracking-wider">
            Complete Interior Solutions
          </p>

          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
            End-to-End Interior Solutions
          </h2>

          <p className="mt-3 max-w-2xl mx-auto text-gray-500">
            Everything you need to transform your home into a beautiful,
            functional and comfortable space.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center text-center cursor-pointer"
            >
              {/* Icon */}
              <div
                className="
                  w-24 h-24
                  sm:w-28 sm:h-28
                  flex items-center justify-center
                  text-5xl
                  text-gray-500
                  bg-white
                  rounded-2xl
                  border border-gray-100
                  transition-all duration-300
                  group-hover:text-[#FCBC14]
                  group-hover:bg-blue-50
                  group-hover:border-blue-100
                  group-hover:-translate-y-1
                  group-hover:shadow-md
                "
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mt-4 text-sm sm:text-base font-medium text-[#0F172A] group-hover:text-[#FCBC14] transition">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

       

      </div>
    </section>
  );
};

export default InteriorSolutions;