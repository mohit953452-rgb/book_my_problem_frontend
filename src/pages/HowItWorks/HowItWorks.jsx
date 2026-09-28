
import React from "react";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaCheckCircle,
  FaUsers,
  FaBuilding,
  FaSearch,
  FaTools,
  FaStar,
} from "react-icons/fa";

import howItWorksData from "../../data/howItWorksData";

const HowItWorks = () => {
  const processIcons = {
    users: <FaUsers />,
    building: <FaBuilding />,
    search: <FaSearch />,
    tools: <FaTools />,
    star: <FaStar />,
  };

  return (
    <section className="min-h-screen bg-[#F8FAFC]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <div className="bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">

          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold">
            {howItWorksData.badge}
          </span>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold">
            {howItWorksData.title}
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-gray-300 text-lg leading-8">
            {howItWorksData.description}
          </p>

        </div>
      </div>

      {/* =====================================================
          1. CUSTOMER PROCESS
      ===================================================== */}

      <section className="py-20 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <span className="text-blue-600 font-semibold uppercase text-sm">
              Simple Process
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#0F172A]">
              How It Works
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to find the right professionals
              and complete your home project.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {howItWorksData.steps.map((step) => (
              <div
                key={step.id}
                className="
                  relative
                  bg-white
                  rounded-2xl
                  border border-gray-100
                  shadow-sm
                  p-7
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition
                  duration-300
                "
              >

                <div className="flex items-center justify-between">

                  <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center text-lg font-bold">
                    {step.number}
                  </div>

                  <span className="text-4xl font-bold text-gray-100">
                    {step.number}
                  </span>

                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  {step.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

    ```jsx
{/* =====================================================
    2. HOW COMPANY WORKS
===================================================== */}

<section className="bg-white py-20">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <div className="text-center mb-16">

      <span className="text-blue-600 font-semibold uppercase text-sm">
        Our Service Process
      </span>

      <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A]">
        How Company Works?
      </h2>

      <p className="mt-4 max-w-2xl mx-auto text-gray-600">
        From your first call to the completion of your work, we make
        the entire service process simple, professional and transparent.
      </p>

    </div>

    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-3">

      {(howItWorksData.companyProcess || []).map((process, index) => (

        <React.Fragment key={process.id}>

          <div className="flex flex-col items-center text-center w-full sm:w-72 lg:w-52">

            <div
              className="
                w-32 h-32
                sm:w-36 sm:h-36
                rounded-full
                border-4
                border-blue-500
                bg-[#0F172A]
                text-white
                flex
                flex-col
                items-center
                justify-center
                shadow-lg
                hover:scale-105
                transition
                duration-300
              "
            >

              <div className="text-blue-400 text-2xl mb-2">
                {processIcons[process.icon]}
              </div>

              <h3 className="text-sm font-bold underline">
                {process.title}
              </h3>

            </div>

            <p className="mt-5 text-sm text-gray-600 leading-6 max-w-[220px]">
              {process.description}
            </p>

          </div>

          {index !== (howItWorksData.companyProcess || []).length - 1 && (
            <div className="hidden lg:flex items-center justify-center">
              <FaArrowRight className="text-blue-500 text-2xl animate-pulse" />
            </div>
          )}

          {index !== (howItWorksData.companyProcess || []).length - 1 && (
            <div className="flex lg:hidden items-center justify-center">
              <FaArrowRight className="rotate-90 text-blue-500 text-2xl animate-pulse" />
            </div>
          )}

        </React.Fragment>

      ))}

    </div>

  </div>

</section>
```

      {/* =====================================================
          3. TEAM MEMBERS
      ===================================================== */}

      <section className="py-20 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">

            <span className="text-blue-600 font-semibold uppercase text-sm">
              Our Team
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#0F172A]">
              Meet Our Professionals
            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-gray-600">
              Our experienced team works together to provide reliable and
              professional solutions for your home and property needs.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {howItWorksData.teamMembers.map((member) => (

              <div
                key={member.id}
                className="
                  bg-white
                  rounded-2xl
                  overflow-hidden
                  border border-gray-100
                  shadow-sm
                  hover:shadow-xl
                  hover:-translate-y-1
                  transition
                  duration-300
                "
              >

                <div className="h-72 overflow-hidden">

                  <img
                    src={member.image}
                    alt={member.name}
                    className="
                      w-full
                      h-full
                      object-cover
                      hover:scale-105
                      transition
                      duration-500
                    "
                  />

                </div>

                <div className="p-5 text-center">

                  <h3 className="text-lg font-bold text-[#0F172A]">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-blue-600 font-medium text-sm">
                    {member.position}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          4. BENEFITS
      ===================================================== */}

      <section className="py-20 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto">

            <span className="text-blue-600 font-semibold uppercase text-sm">
              Why It Works
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-[#0F172A]">
              A simpler way to manage your home project
            </h2>

            <p className="mt-4 text-gray-600">
              Everything you need to find professionals, plan your project
              and build your dream home.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

            {howItWorksData.benefits.map((benefit) => (

              <div
                key={benefit.id}
                className="
                  p-6
                  rounded-2xl
                  bg-white
                  border border-gray-100
                  hover:shadow-md
                  transition
                "
              >

                <FaCheckCircle className="text-green-500 text-xl" />

                <h3 className="mt-4 text-lg font-bold text-gray-900">
                  {benefit.title}
                </h3>

                <p className="mt-2 text-gray-600 leading-7">
                  {benefit.description}
                </p>

              </div>

            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          5. CTA
      ===================================================== */}

      <section className="bg-[#F8FAFC] py-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-blue-900 rounded-3xl p-8 sm:p-12 text-white text-center">

            <h2 className="text-3xl sm:text-4xl font-bold">
              {howItWorksData.cta.title}
            </h2>

            <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
              {howItWorksData.cta.description}
            </p>

            <Link
              to="/contact"
              className="
                inline-flex
                items-center
                gap-3
                mt-7
                bg-[#072144]
                text-white
                px-7
                py-3.5
                rounded-lg
                font-semibold
                hover:bg-[#FCBC14]
                hover:text-[#072144]
                transition
              "
            >

              {howItWorksData.cta.button}

              <FaArrowRight />

            </Link>

          </div>

        </div>
      </section>

    </section>
  );
};

export default HowItWorks;
