
import React, { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaClock,
  FaTag,
  FaCheckCircle,
  FaMapMarkerAlt,
} from "react-icons/fa";

import plumbingServices from "../../data/ServiceDetails/plumbing.jsx";
import electricalServices from "../../data/ServiceDetails/electrical.jsx";

// IMPORTANT:
// Apne CartContext ka exact path agar different hai,
// to is import path ko uske according change karna.
import { useCart } from "../../context/CartContext";

const fallbackImage =
  "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1000&q=80";

// ======================================================
// SERVICE TIME SLOTS
// ======================================================

const timeSlots = [
  {
    id: 1,
    label: "06:00 AM - 09:00 AM",
  },
  {
    id: 2,
    label: "09:00 AM - 12:00 PM",
  },
  {
    id: 3,
    label: "12:00 PM - 03:00 PM",
  },
  {
    id: 4,
    label: "03:00 PM - 06:00 PM",
  },
  {
    id: 5,
    label: "06:00 PM - 09:00 PM",
  },
  {
    id: 6,
    label: "09:00 PM - 10:00 PM",
  },
];

// ======================================================
// GET TODAY
// ======================================================

const getToday = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

// ======================================================
// SERVICE DETAILS
// ======================================================

const ServiceDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // ======================================================
  // CART
  // ======================================================

  const { addToCart } = useCart();

  // ======================================================
  // ALL SERVICES
  // ======================================================

  const allServices = useMemo(() => {
    return [...plumbingServices, ...electricalServices];
  }, []);

  // ======================================================
  // FIND SELECTED SERVICE
  // ======================================================

  const service = allServices.find((item) => item.slug === slug);

  // ======================================================
  // STATES
  // ======================================================

  const [selectedDate, setSelectedDate] = useState(getToday());
  const [selectedTime, setSelectedTime] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoMessage, setPromoMessage] = useState("");

  // ======================================================
  // SERVICE NOT FOUND
  // ======================================================

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Service Not Found
          </h1>

          <p className="mt-3 text-gray-600">
            The service you are looking for does not exist.
          </p>

          <button
            onClick={() => navigate(-1)}
            className="
              mt-6
              bg-[#072144]
              text-white
              px-6
              py-3
              rounded-xl
              font-semibold
              hover:bg-[#FCBC14]
              transition
            "
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // ======================================================
  // PROMO CODE
  // ======================================================

  const handleApplyPromo = () => {
    const code = promoCode.trim().toUpperCase();

    if (!code) {
      setPromoApplied(false);
      setPromoMessage("Please enter a promo code.");
      return;
    }

    const validPromoCodes = [
      "BOOK10",
      "WELCOME10",
      "BMP10",
    ];

    if (validPromoCodes.includes(code)) {
      setPromoApplied(true);

      setPromoMessage(
        "Promo code applied successfully. You will get 10% off."
      );
    } else {
      setPromoApplied(false);

      setPromoMessage(
        "Invalid promo code. Please try another code."
      );
    }
  };

  // ======================================================
  // BOOK SERVICE
  // ======================================================

  const handleBookService = () => {
    // ----------------------------------------------------
    // DATE VALIDATION
    // ----------------------------------------------------

    if (!selectedDate) {
      alert("Please select a date.");
      return;
    }

    // ----------------------------------------------------
    // TIME VALIDATION
    // ----------------------------------------------------

    if (!selectedTime) {
      alert("Please select a service time.");
      return;
    }

    // ----------------------------------------------------
    // FIND SELECTED TIME SLOT
    // ----------------------------------------------------

    const selectedSlot = timeSlots.find(
      (slot) => slot.id === Number(selectedTime)
    );

    // ----------------------------------------------------
    // SERVICE DATA FOR CART
    // ----------------------------------------------------

    const cartService = {
      id: service.id || service.slug,
      slug: service.slug,
      title: service.title,
      name: service.title,

      price: service.price || 0,

      image: service.image || fallbackImage,

      description: service.description || "",

      // Booking information
      bookingDate: selectedDate,
      bookingTime: selectedSlot?.label || "",

      // Promo information
      promoCode: promoApplied
        ? promoCode.trim().toUpperCase()
        : "",

      promoApplied,
    };

    // ----------------------------------------------------
    // ADD SERVICE TO CART
    // ----------------------------------------------------

    addToCart(cartService);

    // ----------------------------------------------------
    // ALSO SAVE CURRENT BOOKING
    // ----------------------------------------------------

    const booking = {
      serviceId: cartService.id,
      serviceSlug: service.slug,
      serviceTitle: service.title,
      servicePrice: service.price || 0,
      serviceImage: service.image || fallbackImage,

      date: selectedDate,
      timeSlot: selectedSlot?.label || "",

      promoCode: promoApplied
        ? promoCode.trim().toUpperCase()
        : "",

      bookedAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "pendingBooking",
      JSON.stringify(booking)
    );

    // ----------------------------------------------------
    // SUCCESS MESSAGE
    // ----------------------------------------------------

    alert(
      `Service added to cart successfully!\n\n${service.title}\nDate: ${selectedDate}\nTime: ${selectedSlot?.label}`
    );

    // ----------------------------------------------------
    // GO TO CART
    // ----------------------------------------------------

    navigate("/cart");
  };

  // ======================================================
  // UI
  // ======================================================

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ==================================================
          BACK BUTTON
      ================================================== */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-8">
        <button
          onClick={() => navigate(-1)}
          className="
            inline-flex
            items-center
            gap-2
            text-[#072144]
            font-semibold
            hover:text-[#FCBC14]
            transition
          "
        >
          <FaArrowLeft />
          Back to Services
        </button>
      </div>

      {/* ==================================================
          MAIN CONTENT
      ================================================== */}

      <section className="py-8 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* ==================================================
                LEFT SIDE
            ================================================== */}

            <div>

              {/* IMAGE */}

              <div
                className="
                  rounded-3xl
                  overflow-hidden
                  bg-white
                  shadow-sm
                  border
                  border-gray-200
                "
              >
                <img
                  src={service.image || fallbackImage}
                  alt={service.title}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = fallbackImage;
                  }}
                  className="w-full h-[350px] object-cover"
                />
              </div>

              {/* SERVICE CONTENT */}

              <div className="mt-7">

                <div
                  className="
                    inline-flex
                    items-center
                    gap-2
                    bg-blue-50
                    text-[#072144]
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    font-semibold
                  "
                >
                  <FaCheckCircle />
                  Professional Service
                </div>

                <h1
                  className="
                    mt-4
                    text-3xl
                    md:text-4xl
                    font-bold
                    text-gray-900
                  "
                >
                  {service.title}
                </h1>

                {/* PRICE */}

                {service.price && (
                  <div className="mt-4">

                    <span className="text-sm text-gray-500 block">
                      Starting From
                    </span>

                    <span
                      className="
                        text-2xl
                        font-bold
                        text-[#072144]
                      "
                    >
                      {service.price}
                    </span>

                  </div>
                )}

                {/* DESCRIPTION */}

                <div className="mt-7">

                  <h2
                    className="
                      text-xl
                      font-bold
                      text-gray-900
                    "
                  >
                    Service Details
                  </h2>

                  <p
                    className="
                      mt-3
                      text-gray-600
                      leading-7
                    "
                  >
                    {service.description ||
                      `Get professional ${service.title} service from experienced professionals. Our service is designed to provide reliable, safe and quality solutions for your home or office.`}
                  </p>

                </div>

                {/* FEATURES */}

                <div
                  className="
                    mt-7
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-4
                  "
                >

                  <div
                    className="
                      bg-white
                      border
                      border-gray-200
                      rounded-xl
                      p-4
                    "
                  >

                    <FaCheckCircle
                      className="
                        text-green-500
                        text-xl
                      "
                    />

                    <h3
                      className="
                        mt-2
                        font-semibold
                        text-gray-900
                      "
                    >
                      Professional Service
                    </h3>

                    <p
                      className="
                        mt-1
                        text-sm
                        text-gray-500
                      "
                    >
                      Experienced professionals for your service.
                    </p>

                  </div>

                  <div
                    className="
                      bg-white
                      border
                      border-gray-200
                      rounded-xl
                      p-4
                    "
                  >

                    <FaClock
                      className="
                        text-[#072144]
                        text-xl
                      "
                    />

                    <h3
                      className="
                        mt-2
                        font-semibold
                        text-gray-900
                      "
                    >
                      Flexible Time
                    </h3>

                    <p
                      className="
                        mt-1
                        text-sm
                        text-gray-500
                      "
                    >
                      Choose a convenient service time.
                    </p>

                  </div>

                </div>

              </div>

            </div>

            {/* ==================================================
                RIGHT SIDE - BOOKING
            ================================================== */}

            <div>

              <div
                className="
                  bg-white
                  rounded-3xl
                  border
                  border-gray-200
                  shadow-lg
                  p-6
                  md:p-8
                  lg:sticky
                  lg:top-24
                "
              >

                <h2
                  className="
                    text-2xl
                    font-bold
                    text-gray-900
                  "
                >
                  Book This Service
                </h2>

                <p className="mt-2 text-gray-500">
                  Select your preferred date and service time.
                </p>

                {/* ==================================================
                    DATE
                ================================================== */}

                <div className="mt-7">

                  <label
                    className="
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-gray-800
                      mb-2
                    "
                  >
                    <FaCalendarAlt className="text-[#072144]" />
                    Select Date
                  </label>

                  <input
                    type="date"
                    min={getToday()}
                    value={selectedDate}
                    onChange={(e) =>
                      setSelectedDate(e.target.value)
                    }
                    className="
                      w-full
                      border
                      border-gray-300
                      rounded-xl
                      px-4
                      py-3
                      outline-none
                      focus:ring-2
                      focus:ring-[#072144]
                    "
                  />

                  <p
                    className="
                      mt-2
                      text-xs
                      text-gray-500
                    "
                  >
                    You can select today or any future date.
                  </p>

                </div>

                {/* ==================================================
                    TIME SLOTS
                ================================================== */}

                <div className="mt-7">

                  <label
                    className="
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-gray-800
                      mb-3
                    "
                  >
                    <FaClock className="text-[#072144]" />
                    Select Service Time
                  </label>

                  <div
                    className="
                      grid
                      grid-cols-1
                      sm:grid-cols-2
                      gap-3
                    "
                  >

                    {timeSlots.map((slot) => (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() =>
                          setSelectedTime(String(slot.id))
                        }
                        className={`
                          text-left
                          border
                          rounded-xl
                          p-4
                          transition-all
                          ${
                            selectedTime === String(slot.id)
                              ? "border-[#072144] bg-[#072144] text-white shadow-md"
                              : "border-gray-200 bg-white text-gray-800 hover:border-[#FCBC14] hover:bg-yellow-50"
                          }
                        `}
                      >

                        <div
                          className="
                            flex
                            items-center
                            gap-2
                          "
                        >

                          <FaClock className="text-sm" />

                          <span
                            className="
                              font-semibold
                              text-sm
                            "
                          >
                            {slot.label}
                          </span>

                        </div>

                      </button>
                    ))}

                  </div>

                </div>

                {/* ==================================================
                    PROMO CODE
                ================================================== */}

                <div className="mt-7">

                  <label
                    className="
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-gray-800
                      mb-2
                    "
                  >
                    <FaTag className="text-[#072144]" />
                    Promo Code
                  </label>

                  <div className="flex gap-2">

                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => {
                        setPromoCode(e.target.value);
                        setPromoMessage("");
                        setPromoApplied(false);
                      }}
                      placeholder="Enter promo code"
                      className="
                        flex-1
                        min-w-0
                        border
                        border-gray-300
                        rounded-xl
                        px-4
                        py-3
                        outline-none
                        focus:ring-2
                        focus:ring-[#072144]
                        uppercase
                      "
                    />

                    <button
                      type="button"
                      onClick={handleApplyPromo}
                      className="
                        px-5
                        py-3
                        bg-[#072144]
                        text-white
                        rounded-xl
                        font-semibold
                        hover:bg-[#FCBC14]
                        transition
                      "
                    >
                      Apply
                    </button>

                  </div>

                  {promoMessage && (
                    <p
                      className={`
                        mt-2
                        text-sm
                        ${
                          promoApplied
                            ? "text-green-600"
                            : "text-red-500"
                        }
                      `}
                    >
                      {promoMessage}
                    </p>
                  )}

                  <p
                    className="
                      mt-2
                      text-xs
                      text-gray-500
                    "
                  >
                    Try: BOOK10, WELCOME10 or BMP10
                  </p>

                </div>

                {/* ==================================================
                    LOCATION
                ================================================== */}

                <div
                  className="
                    mt-7
                    bg-gray-50
                    rounded-xl
                    p-4
                  "
                >

                  <div
                    className="
                      flex
                      items-start
                      gap-3
                    "
                  >

                    <FaMapMarkerAlt
                      className="
                        text-[#072144]
                        mt-1
                      "
                    />

                    <div>

                      <p
                        className="
                          font-semibold
                          text-gray-900
                        "
                      >
                        Service Location
                      </p>

                      <p
                        className="
                          text-sm
                          text-gray-500
                          mt-1
                        "
                      >
                        Your service address will be collected during booking.
                      </p>

                    </div>

                  </div>

                </div>

                {/* ==================================================
                    BOOK SERVICE
                ================================================== */}

                <button
                  type="button"
                  onClick={handleBookService}
                  className="
                    mt-7
                    w-full
                    bg-[#072144]
                    text-white
                    py-4
                    rounded-xl
                    font-bold
                    text-lg
                    hover:bg-[#FCBC14]
                    transition-all
                    duration-300
                    shadow-md
                  "
                >
                  Book Service
                </button>

                <p
                  className="
                    mt-3
                    text-center
                    text-xs
                    text-gray-500
                  "
                >
                  Select date and time before booking.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default ServiceDetails;

