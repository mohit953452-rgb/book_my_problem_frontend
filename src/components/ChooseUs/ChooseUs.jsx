import React from "react";
import {
  FaUsers,
  FaHome,
  FaBuilding,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaRupeeSign,
  FaAward,
  FaTools,
  FaShieldAlt,
  FaClock,
  FaStar,
  FaCheckCircle,
  FaPaintRoller,
  FaDraftingCompass,
  FaHandshake,
} from "react-icons/fa";

const ChooseUs = () => {
  const benefits = [
    {
      icon: <FaUsers />,
      number: "600+",
      title: "Expert Designers",
    },
    {
      icon: <FaHome />,
      number: "55000+",
      title: "Homes Delivered",
    },
    {
      icon: <FaBuilding />,
      number: "77",
      title: "Studios",
    },
    {
      icon: <FaMapMarkerAlt />,
      number: "54",
      title: "Cities",
    },
    {
      icon: <FaCalendarAlt />,
      number: "45 Days",
      title: "On-Time Delivery",
    },
    {
      icon: <FaRupeeSign />,
      number: "100%",
      title: "Transparent Pricing",
    },
    {
      icon: <FaAward />,
      number: "10+",
      title: "Years Experience",
    },
    {
      icon: <FaTools />,
      number: "500+",
      title: "Skilled Professionals",
    },
    {
      icon: <FaShieldAlt />,
      number: "100%",
      title: "Quality Assured",
    },
    {
      icon: <FaClock />,
      number: "24/7",
      title: "Customer Support",
    },
    {
      icon: <FaStar />,
      number: "4.9/5",
      title: "Customer Rating",
    },
    {
      icon: <FaCheckCircle />,
      number: "1000+",
      title: "Projects Completed",
    },
    {
      icon: <FaPaintRoller />,
      number: "50+",
      title: "Design Options",
    },
    {
      icon: <FaDraftingCompass />,
      number: "100+",
      title: "Design Experts",
    },
    {
      icon: <FaHandshake />,
      number: "Trusted",
      title: "Home Partner",
    },
  ];

  return (
    <section className="bg-white py-12 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <p className="text-[#FCBC14] font-semibold uppercase tracking-wider text-sm">
          Why Choose Us
        </p>

        <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-[#0F172A]">
          Why Choose Us
        </h2>

        <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
          We make your home journey simple, transparent and stress-free.
        </p>
      </div>

      {/* Moving Cards */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-choose-us">
          {/* First Set */}
          {benefits.map((item, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 w-[180px] sm:w-[210px] px-5 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center text-4xl text-[#FCBC14]">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-lg font-bold text-[#0F172A]">
                {item.number}
              </h3>

              <p className="mt-1 text-sm text-gray-500 leading-5">
                {item.title}
              </p>
            </div>
          ))}

          {/* Duplicate Set - Seamless Infinite Loop */}
          {benefits.map((item, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 w-[180px] sm:w-[210px] px-5 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center text-4xl text-[#FCBC14]">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-lg font-bold text-[#0F172A]">
                {item.number}
              </h3>

              <p className="mt-1 text-sm text-gray-500 leading-5">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes chooseUsMove {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .animate-choose-us {
          animation: chooseUsMove 35s linear infinite;
        }

        .animate-choose-us:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ChooseUs;