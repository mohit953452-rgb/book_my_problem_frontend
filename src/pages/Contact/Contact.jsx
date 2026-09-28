import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaArrowRight, FaCheckCircle } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Data:", formData);
    alert("Thank you! We will contact you soon.");
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
  };

  return (
    <div>
      <section className="bg-gray-50 py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-gray-900">Let's Talk About Your Project</h1>
          <p className="mt-5 text-gray-600 text-lg">Tell us what you're planning and our experts will help you take the next step.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900">We're Here to Help</h2>
            <p className="mt-4 text-gray-600 leading-7">Have a question, planning a new home or looking to renovate? Our team is ready to help.</p>
            <div className="mt-8 space-y-6">
              {[
                [FaPhoneAlt, "Call Us", "+977 9868219045"],
                [FaEnvelope, "Email Us", "bookmyproblem999@gmail.com"],
                [FaMapMarkerAlt, "Our Office", "Kohalpur-08-Banke"],
                [FaClock, "Working Hours", "Sun - Fri: 9 AM - 6 PM"],
              ].map(([Icon, label, value]) => (
                <div key={label} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0"><Icon /></div>
                  <div><p className="text-sm text-gray-500">{label}</p><p className="mt-1 font-bold text-gray-900">{value}</p></div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-gray-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900">Why Contact Us?</h3>
              <div className="mt-4 space-y-3">
                {["Free initial consultation","Professional project guidance","Transparent project discussion"].map((x) => (
                  <div key={x} className="flex gap-3 items-center text-sm text-gray-600"><FaCheckCircle className="text-blue-600" />{x}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white border border-gray-100 shadow-xl rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Tell Us About Your Project</h2>
              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <input name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-500" />
                  <input name="phone" value={formData.phone} onChange={handleChange} required placeholder="Phone number" className="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-500" />
                </div>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email address" className="w-full border rounded-lg px-4 py-3 outline-none focus:border-blue-500" />
                <select name="service" value={formData.service} onChange={handleChange} required className="w-full border rounded-lg px-4 py-3 bg-white outline-none focus:border-blue-500">
                  <option value="">Select a service</option>
                  <option value="construction">Home Construction</option>
                  <option value="interior">Interior Design</option>
                  <option value="painting">Painting</option>
                  <option value="electrical">Electrical Work</option>
                  <option value="furniture">Custom Furniture</option>
                  <option value="renovation">Home Renovation</option>
                </select>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows="6" placeholder="Tell us about your project" className="w-full border rounded-lg px-4 py-3 resize-none outline-none focus:border-blue-500" />
                <button className="w-full flex items-center justify-center gap-3 bg-[#072144] text-white py-3.5 rounded-lg font-semibold hover:bg-[#FCBC14]">Send Project Enquiry <FaArrowRight /></button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
