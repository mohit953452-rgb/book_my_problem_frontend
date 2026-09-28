import React from "react";
import {
  FaComments,
  FaDraftingCompass,
  FaPaintBrush,
  FaHardHat,
  FaClipboardCheck,
  FaKey,
} from "react-icons/fa";

const HowWork = () => {
  const steps = [
    {
      number: "01",
      icon: <FaComments />,
      title: "Consultation",
      description:
        "Tell us about your requirements, budget and dream home.",
    },
    {
      number: "02",
      icon: <FaDraftingCompass />,
      title: "Planning",
      description:
        "Our experts create the right plan according to your needs.",
    },
    {
      number: "03",
      icon: <FaPaintBrush />,
      title: "Design",
      description:
        "Choose beautiful designs, materials, colours and finishes.",
    },
    {
      number: "04",
      icon: <FaHardHat />,
      title: "Build",
      description:
        "Our skilled team handles construction and execution.",
    },
    {
      number: "05",
      icon: <FaClipboardCheck />,
      title: "Quality Check",
      description:
        "Every detail is inspected to ensure quality and perfection.",
    },
    {
      number: "06",
      icon: <FaKey />,
      title: "Handover",
      description:
        "Your completed dream home is ready for you to move in.",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-16 sm:py-20 overflow-hidden">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center px-4">
        <p className="text-[#2563EB] font-semibold uppercase tracking-wider text-sm">
          How We Work
        </p>

        <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A]">
          From Dream to Reality
        </h2>

        <p className="mt-4 text-gray-500 text-base sm:text-lg">
          A simple and transparent process designed to make your home journey
          smooth, stress-free and reliable.
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative text-center group"
            >
              {/* Connecting Line */}
              {index !== steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[58%] w-[84%] border-t-2 border-dashed border-blue-200"></div>
              )}

              {/* Number + Icon */}
              <div className="relative z-10 mx-auto w-20 h-20 rounded-full bg-white border-2 border-blue-100 shadow-md flex items-center justify-center transition-all duration-300 group-hover:border-[#2563EB] group-hover:shadow-lg group-hover:-translate-y-1">
                <div className="text-2xl text-[#2563EB]">
                  {step.icon}
                </div>

                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#2563EB] text-white text-xs font-bold flex items-center justify-center">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="mt-5">
                <h3 className="text-lg font-bold text-[#0F172A]">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm text-gray-500 leading-6">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-14 text-center px-4">
        <p className="text-gray-600">
          Ready to build your dream home?
        </p>

        
      </div>
    </section>
  );
};

export default HowWork;