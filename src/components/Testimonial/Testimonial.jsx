import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Homeowner",
    message: "The team handled our home project professionally from planning to finishing. Communication was excellent.",
  },
  {
    name: "Riya Thapa",
    role: "Homeowner",
    message: "We loved the interior design and the attention to detail. The final result feels exactly like our vision.",
  },
  {
    name: "Suman KC",
    role: "Homeowner",
    message: "A smooth renovation experience with clear guidance and quality workmanship.",
  },
];

const Testimonial = () => {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[#FCBC14] font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">What Our Clients Say</h2>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div key={item.name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => <FaStar key={star} />)}
              </div>
              <p className="mt-5 text-gray-600 leading-7">"{item.message}"</p>
              <div className="mt-6">
                <h3 className="font-bold text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
