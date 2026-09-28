import React from "react";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import services from "../../data/Services";

const Services = () => {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-gray-50 py-16 sm:py-20 text-center">

        <div className="max-w-3xl mx-auto px-4">

          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>

          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-900">
            Complete Home Solutions
          </h1>

          <p className="mt-5 text-gray-600 text-lg leading-7">
            From construction to finishing, get professional services
            for every stage of your home project.
          </p>

        </div>

      </section>

      {/* Services */}
      <section className="py-16">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
              />
            ))}

          </div>

        </div>

      </section>

    </div>
  );
};

export default Services;