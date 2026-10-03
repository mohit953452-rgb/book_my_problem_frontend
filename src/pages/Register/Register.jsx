
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUser,
  FaPhone,
  FaArrowRight,
  FaMapMarkerAlt,
  FaLocationArrow,
  FaCheckCircle,
  FaSearch,
  FaHome,
  FaShieldAlt,
} from "react-icons/fa";

const GOOGLE_MAPS_API_KEY =
  import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const DEFAULT_LOCATION = {
  lat: 27.7172,
  lng: 85.324,
};

const Register = () => {
  const navigate = useNavigate();

  // =====================================================
  // PASSWORD VISIBILITY
  // =====================================================

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  // =====================================================
  // FORM DATA
  // =====================================================

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  // =====================================================
  // LOCATION
  // =====================================================

  const [location, setLocation] = useState({
    address: "",
    city: "",
    area: "",
    lat: DEFAULT_LOCATION.lat,
    lng: DEFAULT_LOCATION.lng,
  });

  const [locationLoading, setLocationLoading] = useState(false);
  const [locationError, setLocationError] = useState("");
  const [mapLoaded, setMapLoaded] = useState(false);

  // =====================================================
  // MAP REFS
  // =====================================================

  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  const markerRef = useRef(null);
  const autocompleteRef = useRef(null);
  const searchInputRef = useRef(null);

  // =====================================================
  // ERROR / LOADING
  // =====================================================

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // =====================================================
  // HANDLE INPUT
  // =====================================================

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
  };

  // =====================================================
  // LOAD GOOGLE MAPS
  // =====================================================

  useEffect(() => {
    if (!GOOGLE_MAPS_API_KEY) {
      setLocationError(
        "Google Maps API key is missing. Add VITE_GOOGLE_MAPS_API_KEY to your .env file."
      );
      return;
    }

    if (window.google?.maps) {
      setMapLoaded(true);
      return;
    }

    const existingScript = document.getElementById(
      "google-maps-script"
    );

    if (existingScript) {
      existingScript.addEventListener("load", () =>
        setMapLoaded(true)
      );

      return;
    }

    const script = document.createElement("script");

    script.id = "google-maps-script";

    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;

    script.async = true;
    script.defer = true;

    script.onload = () => {
      setMapLoaded(true);
    };

    script.onerror = () => {
      setLocationError(
        "Unable to load Google Maps. Please check your API key."
      );
    };

    document.head.appendChild(script);

    return () => {
      script.onload = null;
    };
  }, []);

  // =====================================================
  // GET ADDRESS FROM COORDINATES
  // =====================================================

  const getAddressFromCoordinates = (lat, lng) => {
    if (!window.google?.maps) return;

    const geocoder = new window.google.maps.Geocoder();

    geocoder.geocode(
      {
        location: {
          lat,
          lng,
        },
      },
      (results, status) => {
        if (status === "OK" && results?.length) {
          const result = results[0];

          let city = "";
          let area = "";

          result.address_components?.forEach((component) => {
            const types = component.types || [];

            if (types.includes("locality")) {
              city = component.long_name;
            }

            if (
              types.includes("sublocality") ||
              types.includes("sublocality_level_1") ||
              types.includes("neighborhood")
            ) {
              area = component.long_name;
            }
          });

          setLocation({
            address: result.formatted_address,
            city,
            area,
            lat,
            lng,
          });

          setLocationError("");
        }
      }
    );
  };

  // =====================================================
  // UPDATE MAP LOCATION
  // =====================================================

  const updateMapLocation = (
    lat,
    lng,
    shouldGeocode = true
  ) => {
    if (!window.google?.maps) return;

    const position = {
      lat: Number(lat),
      lng: Number(lng),
    };

    setLocation((prev) => ({
      ...prev,
      lat: position.lat,
      lng: position.lng,
    }));

    if (mapRef.current) {
      mapRef.current.panTo(position);
      mapRef.current.setZoom(16);
    }

    if (markerRef.current) {
      markerRef.current.setPosition(position);
    }

    if (shouldGeocode) {
      getAddressFromCoordinates(
        position.lat,
        position.lng
      );
    }
  };

  // =====================================================
  // INITIALIZE MAP
  // =====================================================

  useEffect(() => {
    if (
      !mapLoaded ||
      !mapContainerRef.current ||
      !window.google?.maps
    ) {
      return;
    }

    if (mapRef.current) return;

    const map = new window.google.maps.Map(
      mapContainerRef.current,
      {
        center: {
          lat: location.lat,
          lng: location.lng,
        },

        zoom: 14,

        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        zoomControl: true,

        styles: [
          {
            featureType: "poi.business",
            stylers: [
              {
                visibility: "off",
              },
            ],
          },
        ],
      }
    );

    mapRef.current = map;

    const marker = new window.google.maps.Marker({
      position: {
        lat: location.lat,
        lng: location.lng,
      },

      map,

      draggable: true,

      animation:
        window.google.maps.Animation.DROP,
    });

    markerRef.current = marker;

    // MAP CLICK

    map.addListener("click", (event) => {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();

      updateMapLocation(lat, lng, true);
    });

    // MARKER DRAG

    marker.addListener("dragend", () => {
      const position = marker.getPosition();

      if (!position) return;

      updateMapLocation(
        position.lat(),
        position.lng(),
        true
      );
    });

    // AUTOCOMPLETE

    if (
      searchInputRef.current &&
      window.google.maps.places
    ) {
      const autocomplete =
        new window.google.maps.places.Autocomplete(
          searchInputRef.current,
          {
            fields: [
              "formatted_address",
              "geometry",
              "address_components",
              "name",
            ],
          }
        );

      autocompleteRef.current = autocomplete;

      autocomplete.addListener(
        "place_changed",
        () => {
          const place = autocomplete.getPlace();

          if (
            !place.geometry ||
            !place.geometry.location
          ) {
            setLocationError(
              "Please select a location from the suggestions."
            );

            return;
          }

          const lat =
            place.geometry.location.lat();

          const lng =
            place.geometry.location.lng();

          let city = "";
          let area = "";

          place.address_components?.forEach(
            (component) => {
              const types = component.types || [];

              if (types.includes("locality")) {
                city = component.long_name;
              }

              if (
                types.includes("sublocality") ||
                types.includes(
                  "sublocality_level_1"
                ) ||
                types.includes("neighborhood")
              ) {
                area = component.long_name;
              }
            }
          );

          setLocation({
            address:
              place.formatted_address ||
              place.name ||
              "",

            city,
            area,
            lat,
            lng,
          });

          updateMapLocation(
            lat,
            lng,
            false
          );

          setLocationError("");
        }
      );
    }
  }, [mapLoaded]);

  // =====================================================
  // CURRENT LOCATION
  // =====================================================

  const handleCurrentLocation = () => {
    if (!navigator.geolocation) {
      setLocationError(
        "Your browser does not support location services."
      );

      return;
    }

    setLocationLoading(true);
    setLocationError("");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat =
          position.coords.latitude;

        const lng =
          position.coords.longitude;

        updateMapLocation(
          lat,
          lng,
          true
        );

        setLocationLoading(false);
      },

      (locationError) => {
        console.error(
          "Location Error:",
          locationError
        );

        setLocationLoading(false);

        setLocationError(
          "Unable to get your current location. Please allow location permission or search manually."
        );
      },

      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  // =====================================================
  // GENERATE CUSTOMER ID
  // =====================================================

  const generateCustomerId = () => {
    const existingCustomers =
      JSON.parse(
        localStorage.getItem(
          "bookmyproblem_customers"
        )
      ) || [];

    const nextNumber =
      existingCustomers.length + 1001;

    return `CUS-${nextNumber}`;
  };

  // =====================================================
  // GENERATE OTP
  // =====================================================

  const generateOTP = () => {
    return Math.floor(
      100000 +
        Math.random() * 900000
    ).toString();
  };

  // =====================================================
  // REGISTER
  // =====================================================

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    // LOCATION

    if (!location.address) {
      setError(
        "Please select your location before creating your account."
      );

      return;
    }

    setLoading(true);

    const name = formData.name.trim();

    const email = formData.email
      .trim()
      .toLowerCase();

    const phone = formData.phone.trim();

    // BASIC VALIDATION

    if (!name) {
      setError(
        "Please enter your full name."
      );

      setLoading(false);
      return;
    }

    if (!email) {
      setError(
        "Please enter your email address."
      );

      setLoading(false);
      return;
    }

    if (!phone) {
      setError(
        "Please enter your phone number."
      );

      setLoading(false);
      return;
    }

    // PASSWORD

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      setError(
        "Passwords do not match."
      );

      setLoading(false);
      return;
    }

    if (
      formData.password.length < 6
    ) {
      setError(
        "Password must be at least 6 characters."
      );

      setLoading(false);
      return;
    }

    // TERMS

    if (!formData.terms) {
      setError(
        "Please accept the Terms & Conditions."
      );

      setLoading(false);
      return;
    }

    // EXISTING CUSTOMERS

    const existingCustomers =
      JSON.parse(
        localStorage.getItem(
          "bookmyproblem_customers"
        )
      ) || [];

    // DUPLICATE EMAIL

    const emailExists =
      existingCustomers.some(
        (customer) =>
          customer.email?.toLowerCase() ===
          email
      );

    if (emailExists) {
      setError(
        "An account with this email already exists."
      );

      setLoading(false);
      return;
    }

    // OTP

    const otp = generateOTP();

    // PENDING REGISTRATION

    const pendingRegistration = {
      id: generateCustomerId(),

      name,

      email,

      phone,

      password:
        formData.password,

      otp,

      otpCreatedAt:
        Date.now(),

      verified: false,

      location: {
        address:
          location.address,

        city:
          location.city,

        area:
          location.area,

        lat:
          location.lat,

        lng:
          location.lng,
      },
    };

    // SAVE

    localStorage.setItem(
      "bookmyproblem_pending_registration",
      JSON.stringify(
        pendingRegistration
      )
    );

    console.log(
      "BOOK MY PROBLEM OTP:",
      otp
    );

    console.log(
      "REGISTRATION LOCATION:",
      pendingRegistration.location
    );

    setLoading(false);

    navigate("/verify-otp");
  };

  // =====================================================
  // UI
  // =====================================================

  return (
    <div className="min-h-screen bg-[#f5f7fa] text-[#072144]">

      {/* =================================================
          HEADER
      ================================================= */}

      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200/80">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="h-[76px] flex items-center justify-between">

            {/* BRAND */}

            <Link
              to="/"
              className="flex items-center gap-3 group"
            >

              <div
                className="
                  w-10
                  h-10
                  rounded-xl
                  bg-[#072144]
                  flex
                  items-center
                  justify-center
                  shadow-lg
                  shadow-[#072144]/15
                  group-hover:scale-105
                  transition
                "
              >
                <FaHome className="text-[#FCBC14]" />
              </div>

              <div>

                <div className="text-lg sm:text-xl font-black tracking-tight text-[#072144]">
                  Book My{" "}
                  <span className="text-[#FCBC14]">
                    Problem
                  </span>
                </div>

                <div className="hidden sm:block text-[9px] uppercase tracking-[0.3em] text-gray-400">
                  Home Services
                </div>

              </div>

            </Link>

            {/* LOGIN */}

            <Link
              to="/login"
              className="
                inline-flex
                items-center
                gap-2
                px-4
                sm:px-5
                py-2.5
                rounded-xl
                border
                border-gray-200
                bg-white
                text-xs
                sm:text-sm
                font-bold
                text-[#072144]
                hover:border-[#FCBC14]
                hover:bg-[#FCBC14]/5
                transition
              "
            >
              <span className="hidden sm:inline">
                Already have an account?
              </span>

              <span className="text-[#FCBC14]">
                Login
              </span>
            </Link>

          </div>

        </div>

      </header>

      {/* =================================================
          MAIN
      ================================================= */}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-12">

        <div className="grid lg:grid-cols-[0.72fr_1.28fr] gap-7 lg:gap-10 items-start">

          {/* =================================================
              LEFT PREMIUM HERO
          ================================================= */}

          <aside className="hidden lg:block sticky top-28">

            <div className="relative h-[760px] overflow-hidden rounded-[2rem] bg-[#072144] shadow-2xl shadow-[#072144]/15">

              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
                alt="Modern home"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* IMAGE OVERLAY */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#04152d] via-[#072144]/55 to-[#072144]/10" />

              {/* TOP BRAND */}

              <div className="absolute top-7 left-7 right-7 flex justify-between items-center">

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15">

                  <span className="w-2 h-2 rounded-full bg-[#FCBC14] shadow-[0_0_12px_#FCBC14]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                    Book My Problem
                  </span>

                </div>

              </div>

              {/* HERO CONTENT */}

              <div className="absolute left-0 right-0 bottom-0 p-8 xl:p-10 text-white">

                <p className="text-[#FCBC14] text-xs font-bold uppercase tracking-[0.25em]">
                  Welcome to your new home service partner
                </p>

                <h2 className="mt-4 text-4xl xl:text-[46px] font-black leading-[1.05] tracking-tight">

                  Your home.

                  <br />

                  Your problem.

                  <br />

                  <span className="text-[#FCBC14]">
                    Our solution.
                  </span>

                </h2>

                <p className="mt-5 text-sm leading-7 text-gray-200 max-w-md">
                  Create your account and connect
                  with trusted professionals for
                  construction, renovation, interiors
                  and home improvement.
                </p>

                {/* STATS */}

                <div className="mt-7 grid grid-cols-3 gap-2">

                  <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 p-4">
                    <p className="text-xl font-black text-white">
                      460+
                    </p>

                    <p className="mt-1 text-[10px] uppercase tracking-wider text-gray-300">
                      Professionals
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 p-4">
                    <p className="text-xl font-black text-white">
                      6+
                    </p>

                    <p className="mt-1 text-[10px] uppercase tracking-wider text-gray-300">
                      Cities
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 p-4">
                    <p className="text-xl font-black text-white">
                      370+
                    </p>

                    <p className="mt-1 text-[10px] uppercase tracking-wider text-gray-300">
                      Projects
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </aside>

          {/* =================================================
              REGISTER
          ================================================= */}

          <section>

            <div className="bg-white rounded-[1.75rem] sm:rounded-[2rem] border border-gray-200/80 shadow-xl shadow-[#072144]/5 overflow-hidden">

              {/* CARD HEADER */}

              <div className="px-5 sm:px-8 lg:px-10 pt-7 sm:pt-9 pb-6 border-b border-gray-100">

                <div className="flex items-start justify-between gap-5">

                  <div>

                    <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#072144]">

                      <span className="w-2 h-2 rounded-full bg-[#FCBC14]" />

                      Create Account

                    </div>

                    <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#072144]">
                      Let's get you started.
                    </h1>

                    <p className="mt-2 text-sm text-gray-500">
                      Create your account and tell us where
                      you need our services.
                    </p>

                  </div>

                  <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-2xl bg-[#072144] items-center justify-center">
                    <FaShieldAlt className="text-[#FCBC14]" />
                  </div>

                </div>

              </div>

              {/* FORM */}

              <form
                onSubmit={handleSubmit}
                className="p-5 sm:p-8 lg:p-10 space-y-9"
              >

                {/* ERROR */}

                {error && (
                  <div className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3.5">

                    <div className="w-6 h-6 shrink-0 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-black">
                      !
                    </div>

                    <p className="text-sm text-red-600 leading-6">
                      {error}
                    </p>

                  </div>
                )}

                {/* =================================================
                    SECTION 01
                ================================================= */}

                <div>

                  <div className="flex items-center gap-3 mb-5">

                    <div className="w-9 h-9 rounded-xl bg-[#072144] text-[#FCBC14] flex items-center justify-center text-[11px] font-black">
                      01
                    </div>

                    <div>

                      <h3 className="text-sm font-black text-[#072144]">
                        Personal Information
                      </h3>

                      <p className="text-xs text-gray-400 mt-0.5">
                        Basic details for your account
                      </p>

                    </div>

                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">

                    {/* NAME */}

                    <div className="sm:col-span-2">

                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                        Full Name
                      </label>

                      <div className="relative">

                        <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="
                            w-full
                            h-13
                            py-3.5
                            rounded-xl
                            border
                            border-gray-200
                            bg-gray-50/70
                            pl-11
                            pr-4
                            text-sm
                            text-[#072144]
                            placeholder:text-gray-400
                            outline-none
                            transition
                            focus:bg-white
                            focus:border-[#FCBC14]
                            focus:ring-4
                            focus:ring-[#FCBC14]/10
                          "
                        />

                      </div>

                    </div>

                    {/* EMAIL */}

                    <div>

                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                        Email Address
                      </label>

                      <div className="relative">

                        <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="you@example.com"
                          className="
                            w-full
                            h-13
                            py-3.5
                            rounded-xl
                            border
                            border-gray-200
                            bg-gray-50/70
                            pl-11
                            pr-4
                            text-sm
                            outline-none
                            transition
                            focus:bg-white
                            focus:border-[#FCBC14]
                            focus:ring-4
                            focus:ring-[#FCBC14]/10
                          "
                        />

                      </div>

                    </div>

                    {/* PHONE */}

                    <div>

                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                        Phone Number
                      </label>

                      <div className="relative">

                        <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="98XXXXXXXX"
                          className="
                            w-full
                            h-13
                            py-3.5
                            rounded-xl
                            border
                            border-gray-200
                            bg-gray-50/70
                            pl-11
                            pr-4
                            text-sm
                            outline-none
                            transition
                            focus:bg-white
                            focus:border-[#FCBC14]
                            focus:ring-4
                            focus:ring-[#FCBC14]/10
                          "
                        />

                      </div>

                    </div>

                  </div>

                </div>

                {/* =================================================
                    SECTION 02 LOCATION
                ================================================= */}

                <div>

                  <div className="flex items-center gap-3 mb-5">

                    <div className="w-9 h-9 rounded-xl bg-[#072144] text-[#FCBC14] flex items-center justify-center text-[11px] font-black">
                      02
                    </div>

                    <div>

                      <h3 className="text-sm font-black text-[#072144]">
                        Service Location
                      </h3>

                      <p className="text-xs text-gray-400 mt-0.5">
                        Select where you need the service
                      </p>

                    </div>

                  </div>

                  {/* SEARCH */}

                  <div className="relative">

                    <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10 text-sm" />

                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder="Search your area, city or address"
                      className="
                        w-full
                        h-13
                        py-3.5
                        rounded-xl
                        border
                        border-gray-200
                        bg-gray-50/70
                        pl-11
                        pr-4
                        text-sm
                        outline-none
                        transition
                        focus:bg-white
                        focus:border-[#FCBC14]
                        focus:ring-4
                        focus:ring-[#FCBC14]/10
                      "
                    />

                  </div>

                  {/* LOCATION BUTTON */}

                  <button
                    type="button"
                    onClick={handleCurrentLocation}
                    disabled={locationLoading}
                    className="
                      mt-3
                      inline-flex
                      items-center
                      gap-2
                      px-4
                      py-2.5
                      rounded-xl
                      bg-[#072144]
                      text-white
                      text-xs
                      font-bold
                      hover:bg-[#FCBC14]
                      hover:text-[#072144]
                      transition
                      disabled:opacity-50
                    "
                  >

                    <FaLocationArrow />

                    {locationLoading
                      ? "Getting location..."
                      : "Use My Current Location"}

                  </button>

                  {/* MAP */}

                  <div className="mt-4 overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 relative">

                    <div
                      ref={mapContainerRef}
                      className="w-full h-[280px] sm:h-[320px]"
                    />

                    {/* API KEY */}

                    {!GOOGLE_MAPS_API_KEY && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100 p-5 text-center">

                        <div>

                          <div className="w-12 h-12 mx-auto rounded-xl bg-[#072144] text-[#FCBC14] flex items-center justify-center">
                            <FaMapMarkerAlt />
                          </div>

                          <h4 className="mt-3 text-sm font-black text-[#072144]">
                            Google Maps Required
                          </h4>

                          <p className="mt-1 text-xs text-gray-500 max-w-xs">
                            Add VITE_GOOGLE_MAPS_API_KEY
                            to your .env file.
                          </p>

                        </div>

                      </div>
                    )}

                    {/* MAP LOADING */}

                    {GOOGLE_MAPS_API_KEY &&
                      !mapLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white/85 backdrop-blur-sm">

                          <div className="text-center">

                            <div className="w-9 h-9 mx-auto rounded-full border-4 border-gray-200 border-t-[#FCBC14] animate-spin" />

                            <p className="mt-3 text-xs font-semibold text-gray-500">
                              Loading map...
                            </p>

                          </div>

                        </div>
                      )}

                    {/* MAP HINT */}

                    {mapLoaded && (
                      <div className="absolute top-3 left-3 right-3 pointer-events-none">

                        <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/95 shadow-md text-[10px] font-semibold text-gray-600">

                          <FaMapMarkerAlt className="text-[#FCBC14]" />

                          Click map or drag the pin

                        </div>

                      </div>
                    )}

                  </div>

                  {/* LOCATION ERROR */}

                  {locationError && (
                    <div className="mt-3 rounded-xl bg-orange-50 border border-orange-100 px-4 py-3 text-xs text-orange-700">
                      {locationError}
                    </div>
                  )}

                  {/* SELECTED LOCATION */}

                  {location.address && (
                    <div className="mt-4 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50/70 p-4">

                      <div className="w-9 h-9 shrink-0 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
                        <FaCheckCircle />
                      </div>

                      <div className="min-w-0">

                        <p className="text-[10px] font-black uppercase tracking-wider text-green-700">
                          Location Selected
                        </p>

                        <p className="mt-1 text-sm font-semibold text-gray-800 break-words">
                          {location.address}
                        </p>

                        {(location.area ||
                          location.city) && (
                          <p className="mt-1 text-xs text-gray-500">
                            {[
                              location.area,
                              location.city,
                            ]
                              .filter(Boolean)
                              .join(", ")}
                          </p>
                        )}

                      </div>

                    </div>
                  )}

                </div>

                {/* =================================================
                    SECTION 03 PASSWORD
                ================================================= */}

                <div>

                  <div className="flex items-center gap-3 mb-5">

                    <div className="w-9 h-9 rounded-xl bg-[#072144] text-[#FCBC14] flex items-center justify-center text-[11px] font-black">
                      03
                    </div>

                    <div>

                      <h3 className="text-sm font-black text-[#072144]">
                        Account Security
                      </h3>

                      <p className="text-xs text-gray-400 mt-0.5">
                        Create a secure password
                      </p>

                    </div>

                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">

                    {/* PASSWORD */}

                    <div>

                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                        Password
                      </label>

                      <div className="relative">

                        <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

                        <input
                          type={
                            showPassword
                              ? "text"
                              : "password"
                          }
                          name="password"
                          value={
                            formData.password
                          }
                          onChange={
                            handleChange
                          }
                          required
                          minLength="6"
                          placeholder="Minimum 6 characters"
                          className="
                            w-full
                            h-13
                            rounded-xl
                            border
                            border-gray-200
                            bg-gray-50/70
                            pl-11
                            pr-11
                            text-sm
                            outline-none
                            transition
                            focus:bg-white
                            focus:border-[#FCBC14]
                            focus:ring-4
                            focus:ring-[#FCBC14]/10
                          "
                        />

                        <button
                          type="button"
                          onClick={() =>
                            setShowPassword(
                              !showPassword
                            )
                          }
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#072144]"
                        >
                          {showPassword ? (
                            <FaEyeSlash />
                          ) : (
                            <FaEye />
                          )}
                        </button>

                      </div>

                    </div>

                    {/* CONFIRM */}

                    <div>

                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                        Confirm Password
                      </label>

                      <div className="relative">

                        <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

                        <input
                          type={
                            showConfirmPassword
                              ? "text"
                              : "password"
                          }
                          name="confirmPassword"
                          value={
                            formData.confirmPassword
                          }
                          onChange={
                            handleChange
                          }
                          required
                          minLength="6"
                          placeholder="Repeat password"
                          className="
                            w-full
                            h-13
                            rounded-xl
                            border
                            border-gray-200
                            bg-gray-50/70
                            pl-11
                            pr-11
                            text-sm
                            outline-none
                            transition
                            focus:bg-white
                            focus:border-[#FCBC14]
                            focus:ring-4
                            focus:ring-[#FCBC14]/10
                          "
                        />

                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(
                              !showConfirmPassword
                            )
                          }
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#072144]"
                        >
                          {showConfirmPassword ? (
                            <FaEyeSlash />
                          ) : (
                            <FaEye />
                          )}
                        </button>

                      </div>

                    </div>

                  </div>

                </div>

                {/* =================================================
                    TERMS
                ================================================= */}

                <div className="rounded-2xl border border-gray-200 bg-gray-50/80 p-4">

                  <label className="flex items-start gap-3 cursor-pointer">

                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      checked={
                        formData.terms
                      }
                      onChange={
                        handleChange
                      }
                      className="mt-1 w-4 h-4 accent-[#FCBC14]"
                    />

                    <span className="text-xs sm:text-sm text-gray-500 leading-6">

                      I agree to the{" "}

                      <Link
                        to="/terms"
                        className="font-bold text-[#072144] hover:text-[#FCBC14] transition"
                      >
                        Terms & Conditions
                      </Link>{" "}

                      and{" "}

                      <Link
                        to="/privacy"
                        className="font-bold text-[#072144] hover:text-[#FCBC14] transition"
                      >
                        Privacy Policy
                      </Link>
                      .

                    </span>

                  </label>

                </div>

                {/* =================================================
                    SUBMIT
                ================================================= */}

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    group
                    w-full
                    h-14
                    rounded-2xl
                    bg-[#072144]
                    text-white
                    flex
                    items-center
                    justify-center
                    gap-3
                    font-black
                    text-sm
                    shadow-xl
                    shadow-[#072144]/15
                    hover:bg-[#FCBC14]
                    hover:text-[#072144]
                    hover:shadow-[#FCBC14]/20
                    transition-all
                    duration-300
                    disabled:opacity-60
                    disabled:cursor-not-allowed
                  "
                >

                  {loading
                    ? "Creating Account..."
                    : "Create My Account"}

                  {!loading && (
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  )}

                </button>

              </form>

              {/* CARD FOOTER */}

              <div className="px-5 sm:px-8 lg:px-10 pb-8">

                <div className="h-px bg-gray-100 mb-6" />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3">

                  <p className="text-xs text-gray-400">
                    Already registered?
                  </p>

                  <Link
                    to="/login"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-black
                      text-[#072144]
                      hover:text-[#FCBC14]
                      transition
                    "
                  >
                    Login to your account
                    <FaArrowRight className="text-xs" />
                  </Link>

                </div>

              </div>

            </div>

          </section>

        </div>

      </main>

    </div>
  );
};

export default Register;

