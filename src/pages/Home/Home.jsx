import React from "react";
import { Link } from "react-router-dom";

import Hero from "../../components/Hero/Hero";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Testimonial from "../../components/Testimonial/Testimonial";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import HowWork from "../../components/HowWork/HowWork";
import PopularSearches from "../../components/PopularSearches/PopularSearches";

import services from "../../data/Services";
import designData from "../../data/designData";
import HomeProcess from "../../components/HomeProcess/HomeProcess";
import InteriorSolutions from "../../components/InteriorSolutions/InteriorSolutions";

const Home = () => {

  const projects = designData.flatMap(
    (category) => category.images
  );

  return (
    <>
      <Hero />

      <PopularSearches />

      {/* Services */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">

            <div>
              <span className="text-[#FCBC14] font-semibold text-sm uppercase tracking-wider">
                Our Services
              </span>

              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
                Everything Your Home Needs
              </h2>
            </div>

            <Link
              to="/services"
              className="text-[#FCBC14] font-semibold"
            >
              View All Services →
            </Link>

          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.slice(0, 6).map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
              />
            ))}

          </div>

        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5">

            <div>
              <span className="text-[#FCBC14] font-semibold text-sm uppercase tracking-wider">
                Our Work
              </span>

              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
                Featured Projects
              </h2>
            </div>

            <Link
              to="/projects"
              className="text-[#FCBC14] font-semibold"
            >
              View All Projects →
            </Link>

          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {projects.slice(0, 6).map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}

          </div>

        </div>
      </section>
      
      {/* how we  work */}
      <HowWork />

      <HomeProcess/>

      {/*why  choose us */}
      <ChooseUs/>
        <InteriorSolutions/>

      {/* Testimonials */}
      <Testimonial />

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">

          <div className="bg-blue-950 rounded-3xl p-8 sm:p-12 text-center text-white">

            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to Start Your Project?
            </h2>

            <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
              Tell us about your dream home and our team will help you plan
              the next step.
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-block bg-[#072144] text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-[#FCBC14] hover:text-white transition"
            >
              Get a Free Consultation
            </Link>

          </div>

        </div>
      </section>
    </>
  );
};

export default Home;