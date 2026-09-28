import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPlus,
  FaMinus,
  FaArrowRight,
} from "react-icons/fa";

import faqsData from "../../data/faqsData";

const FAQs = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="bg-[#F8FAFC] min-h-screen">

      {/* HERO */}
      <div className="bg-[#0F172A] text-white">

        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20 text-center">

          <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold">
            Frequently Asked Questions
          </span>

          <h1 className="mt-5 text-4xl sm:text-5xl font-bold">
            How Can We Help?
          </h1>

          <p className="mt-5 text-gray-300 text-lg leading-8">
            Find answers to common questions about finding professionals,
            starting projects and using Book My Problem.
          </p>

        </div>

      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">

        <div className="space-y-4">

          {faqsData.map((faq) => {
            const isOpen = activeId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >

                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between gap-5 p-6 text-left"
                >

                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>

                  <span className="text-blue-600 shrink-0">

                    {isOpen ? (
                      <FaMinus />
                    ) : (
                      <FaPlus />
                    )}

                  </span>

                </button>

                {isOpen && (
                  <div className="px-6 pb-6">

                    <div className="h-px bg-gray-100 mb-5" />

                    <p className="text-gray-600 leading-7">
                      {faq.answer}
                    </p>

                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">

          <h2 className="text-2xl font-bold text-gray-900">
            Still have a question?
          </h2>

          <p className="mt-3 text-gray-600">
            Our team is ready to help you with your project.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Contact Us
            <FaArrowRight />
          </Link>

        </div>

      </div>

    </section>
  );
};

export default FAQs;