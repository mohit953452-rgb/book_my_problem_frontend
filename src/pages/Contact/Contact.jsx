import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaCheckCircle,
  FaWhatsapp,
  FaPaperPlane,
  FaUser,
  FaChevronDown,
  FaLocationArrow,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    location: "",
    message: "",
  });

  const [gettingLocation, setGettingLocation] = useState(false);

  // =========================================================
  // HANDLE INPUT CHANGE
  // =========================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================================================
  // GET CURRENT LOCATION
  // =========================================================

  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Location is not supported by your browser.");
      return;
    }

    setGettingLocation(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          /*
            Reverse geocoding using OpenStreetMap Nominatim
            This converts latitude/longitude into an address.
          */

          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`,
            {
              headers: {
                Accept: "application/json",
              },
            }
          );

          const data = await response.json();

          const address =
            data?.display_name ||
            `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;

          setFormData((prev) => ({
            ...prev,
            location: address,
          }));
        } catch (error) {
          console.error("Reverse geocoding error:", error);

          // If address cannot be found, save coordinates
          setFormData((prev) => ({
            ...prev,
            location: `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`,
          }));
        } finally {
          setGettingLocation(false);
        }
      },

      (error) => {
        console.error("Location error:", error);

        setGettingLocation(false);

        if (error.code === 1) {
          alert(
            "Location permission was denied. Please allow location access or enter your address manually."
          );
        } else if (error.code === 2) {
          alert(
            "Your location could not be determined. Please enter your address manually."
          );
        } else if (error.code === 3) {
          alert(
            "Location request timed out. Please try again or enter your address manually."
          );
        } else {
          alert(
            "Unable to get your current location. Please enter your address manually."
          );
        }
      },

      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0,
      }
    );
  };

  // =========================================================
  // FORM SUBMIT
  // =========================================================

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Project Enquiry:", formData);

    alert(
      "Thank you! Your project enquiry has been submitted successfully."
    );

    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      location: "",
      message: "",
    });
  };

  // =========================================================
  // CONTACT DETAILS
  // =========================================================

  const contactDetails = [
    {
      icon: <FaPhoneAlt />,
      title: "Call Us",
      value: "+977 9868219045",
      link: "tel:+9779868219045",
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      value: "bookmyproblem999@gmail.com",
      link: "mailto:bookmyproblem999@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Our Office",
      value: "Kohalpur-08, Banke, Nepal",
      link: "#",
    },
    {
      icon: <FaClock />,
      title: "Working Hours",
      value: "Sun - Fri: 9 AM - 6 PM",
      link: "#",
    },
  ];

  // =========================================================
  // JSX
  // =========================================================

  return (
    <div className="min-h-screen bg-[#eef4fa] text-[#072144]">

      {/* =====================================================
    HERO
===================================================== */}

<section className="relative overflow-hidden bg-[#072144]">

  {/* Decorative circles */}
  <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#FCBC14]/10" />

  <div className="absolute -bottom-28 -left-16 w-72 h-72 rounded-full bg-white/5" />

  <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">

    <div className="max-w-2xl">

      {/* Small Label */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 mb-4">

        <span className="w-1.5 h-1.5 rounded-full bg-[#FCBC14]" />

        <span className="text-[#FCBC14] text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em]">
          Contact Book My Problem
        </span>

      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
        Let's Talk About
        <span className="text-[#FCBC14] ml-2">
          Your Project
        </span>
      </h1>

      {/* Short Description */}
      <p className="mt-3 max-w-xl text-white/65 text-sm sm:text-base leading-6">
        Tell us about your project and our experts will help you take the
        next step.
      </p>

    </div>

  </div>

</section>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 lg:py-14">

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-10 items-start">

          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div>

            <div className="mb-7">

              <p className="text-[#FCBC14] font-bold text-xs uppercase tracking-[0.18em] mb-3">
                Get In Touch
              </p>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#072144] leading-tight">
                We're here to
                <span className="block">
                  help you.
                </span>
              </h2>

              <p className="mt-4 text-[#607286] leading-7 text-sm sm:text-base">
                Whether you're planning a new home, renovating an existing
                space, or need professional home services, our team is ready
                to help.
              </p>

            </div>

            {/* Contact Cards */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {contactDetails.map((item, index) => (
                <a
                  href={item.link}
                  key={index}
                  className="group bg-[#f9fcff] border border-[#dce8f3] rounded-2xl p-5 hover:border-[#FCBC14] hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >

                  <div className="w-11 h-11 rounded-xl bg-[#072144] text-[#FCBC14] flex items-center justify-center text-sm group-hover:bg-[#FCBC14] group-hover:text-[#072144] transition-all">
                    {item.icon}
                  </div>

                  <p className="mt-4 text-[11px] font-bold uppercase tracking-wider text-[#8b9aaa]">
                    {item.title}
                  </p>

                  <p className="mt-1 text-sm font-bold text-[#072144] break-words">
                    {item.value}
                  </p>

                </a>
              ))}

            </div>

            {/* WhatsApp */}

            <a
              href="https://wa.me/9779868219045"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 group flex items-center justify-between gap-5 bg-[#072144] rounded-2xl p-5 sm:p-6 hover:bg-[#0a2e5d] transition-all duration-300"
            >

              <div className="flex items-center gap-4">

                <div>
                  <p className="text-[#FCBC14] text-[11px] font-bold uppercase tracking-wider">
                    Quick Chat
                  </p>

                  <h3 className="text-white font-bold text-lg mt-1">
                    Message us on WhatsApp
                  </h3>

                  <p className="text-white/55 text-xs mt-1">
                    Get a quick response from our team.
                  </p>
                </div>

              </div>

              <div className="shrink-0 w-14 h-14 rounded-full bg-[#FCBC14] text-[#072144] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                <FaWhatsapp />
              </div>

            </a>

            {/* Trust Card */}

            <div className="mt-5 rounded-2xl bg-[#fff8df] border border-[#f5df91] p-5">

              <div className="flex items-start gap-4">

                <div className="w-10 h-10 shrink-0 rounded-xl bg-[#FCBC14] text-[#072144] flex items-center justify-center">
                  <FaCheckCircle />
                </div>

                <div>

                  <h3 className="font-extrabold text-[#072144]">
                    Why contact us?
                  </h3>

                  <p className="mt-1 text-sm text-[#697887] leading-6">
                    Get expert guidance, transparent communication and
                    professional support for your project.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* =================================================
              RIGHT SIDE - FORM
          ================================================= */}

          <div className="bg-[#f9fcff] border border-[#dce8f3] rounded-3xl p-5 sm:p-7 lg:p-8 shadow-sm">

            {/* Form Header */}

            <div className="mb-7">

              <div className="flex items-center justify-between gap-4">

                <div>

                  <p className="text-[#FCBC14] text-xs font-bold uppercase tracking-[0.18em]">
                    Project Enquiry
                  </p>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#072144] mt-2">
                    Tell us about your project
                  </h2>

                </div>

                <div className="hidden sm:flex w-12 h-12 rounded-xl bg-[#072144] text-[#FCBC14] items-center justify-center text-lg">
                  <FaPaperPlane />
                </div>

              </div>

              <p className="text-[#788899] text-sm mt-3 leading-6">
                Fill in the details below and our team will get back to you.
              </p>

            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* =================================================
                  NAME + PHONE
              ================================================= */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* Name */}

                <div>

                  <label className="block text-xs font-bold uppercase tracking-wider text-[#072144] mb-2">
                    Your Name
                  </label>

                  <div className="relative">

                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#aab8c5] text-sm pointer-events-none" />

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                      className="w-full h-13 border border-[#d9e3ec] bg-white rounded-xl pl-11 pr-4 text-sm text-[#072144] placeholder:text-[#aab4bf] outline-none transition-all duration-200 focus:border-[#FCBC14] focus:ring-4 focus:ring-[#FCBC14]/10"
                    />

                  </div>

                </div>

                {/* Phone */}

                <div>

                  <label className="block text-xs font-bold uppercase tracking-wider text-[#072144] mb-2">
                    Phone Number
                  </label>

                  <div className="relative">

                    <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#aab8c5] text-sm pointer-events-none" />

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="98XXXXXXXX"
                      className="w-full h-13 border border-[#d9e3ec] bg-white rounded-xl pl-11 pr-4 text-sm text-[#072144] placeholder:text-[#aab4bf] outline-none transition-all duration-200 focus:border-[#FCBC14] focus:ring-4 focus:ring-[#FCBC14]/10"
                    />

                  </div>

                </div>

              </div>

              {/* =================================================
                  EMAIL
              ================================================= */}

              <div>

                <label className="block text-xs font-bold uppercase tracking-wider text-[#072144] mb-2">
                  Email Address
                </label>

                <div className="relative">

                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#aab8c5] text-sm pointer-events-none" />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full h-13 border border-[#d9e3ec] bg-white rounded-xl pl-11 pr-4 text-sm text-[#072144] placeholder:text-[#aab4bf] outline-none transition-all duration-200 focus:border-[#FCBC14] focus:ring-4 focus:ring-[#FCBC14]/10"
                  />

                </div>

              </div>

              {/* =================================================
                  SERVICE
              ================================================= */}

              <div>

                <label className="block text-xs font-bold uppercase tracking-wider text-[#072144] mb-2">
                  Service Required
                </label>

                <div className="relative">

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="appearance-none w-full h-13 border border-[#d9e3ec] bg-white rounded-xl px-4 pr-11 text-sm text-[#072144] outline-none transition-all duration-200 focus:border-[#FCBC14] focus:ring-4 focus:ring-[#FCBC14]/10"
                  >

                    <option value="">
                      Select a service
                    </option>

                    <option value="Home Construction">
                      Home Construction
                    </option>

                    <option value="Interior Design">
                      Interior Design
                    </option>

                    <option value="Painting">
                      Painting
                    </option>

                    <option value="Electrical Work">
                      Electrical Work
                    </option>

                    <option value="Custom Furniture">
                      Custom Furniture
                    </option>

                    <option value="Home Renovation">
                      Home Renovation
                    </option>

                    <option value="Plumbing">
                      Plumbing
                    </option>

                    <option value="AC Fitting & Repairs">
                      AC Fitting & Repairs
                    </option>

                    <option value="Marble & Tiles">
                      Marble & Tiles
                    </option>

                    <option value="Modular Kitchen">
                      Modular Kitchen
                    </option>

                  </select>

                  <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#7f91a3] text-xs pointer-events-none" />

                </div>

              </div>

              {/* =================================================
                  LOCATION
              ================================================= */}

              <div>

                <div className="flex items-center justify-between gap-3 mb-2">

                  <label className="text-xs font-bold uppercase tracking-wider text-[#072144]">
                    Project Location
                  </label>

                  {/* Current Location Button */}

                  <button
                    type="button"
                    onClick={handleCurrentLocation}
                    disabled={gettingLocation}
                    className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold text-[#072144] hover:text-[#b78c00] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >

                    <span className="w-6 h-6 rounded-full bg-[#FCBC14]/20 flex items-center justify-center">
                      <FaLocationArrow className="text-[#FCBC14] text-[10px]" />
                    </span>

                    {gettingLocation
                      ? "Getting Location..."
                      : "Use Current Location"}

                  </button>

                </div>

                <div className="relative">

                  <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#aab8c5] text-sm pointer-events-none" />

                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    placeholder="Enter your project address manually"
                    className="w-full h-13 border border-[#d9e3ec] bg-white rounded-xl pl-11 pr-4 text-sm text-[#072144] placeholder:text-[#aab4bf] outline-none transition-all duration-200 focus:border-[#FCBC14] focus:ring-4 focus:ring-[#FCBC14]/10"
                  />

                </div>

                <div className="flex items-center gap-2 mt-2">

                  <span className="w-1.5 h-1.5 rounded-full bg-[#FCBC14]" />

                  <p className="text-[11px] text-[#91a0ae]">
                    Type your address manually or use your current location.
                  </p>

                </div>

              </div>

              {/* =================================================
                  MESSAGE
              ================================================= */}

              <div>

                <label className="block text-xs font-bold uppercase tracking-wider text-[#072144] mb-2">
                  Project Details
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your project, requirements, budget, preferred timeline..."
                  className="w-full border border-[#d9e3ec] bg-white rounded-xl px-4 py-3.5 text-sm text-[#072144] placeholder:text-[#aab4bf] outline-none resize-none transition-all duration-200 focus:border-[#FCBC14] focus:ring-4 focus:ring-[#FCBC14]/10"
                />

              </div>

              {/* =================================================
                  PRIVACY
              ================================================= */}

              <div className="flex items-start gap-3 rounded-xl bg-[#eef5fb] border border-[#dce8f3] p-4">

                <FaCheckCircle className="text-[#FCBC14] mt-0.5 shrink-0" />

                <p className="text-[11px] sm:text-xs text-[#708092] leading-5">
                  Your information is safe with us. We only use your details
                  to contact you regarding your project enquiry.
                </p>

              </div>

              {/* =================================================
                  SUBMIT BUTTON
              ================================================= */}

              <button
                type="submit"
                className="group w-full h-13 bg-[#FCBC14] text-[#072144] rounded-xl font-extrabold text-sm flex items-center justify-center gap-3 hover:bg-[#e9ab00] transition-all duration-300 shadow-lg shadow-[#FCBC14]/15"
              >

                <span>
                  Send Project Enquiry
                </span>

                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />

              </button>

            </form>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Contact;