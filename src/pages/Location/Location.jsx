import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaLocationArrow,
  FaCity,
  FaCheckCircle,
  FaArrowRight,
  FaSpinner,
} from "react-icons/fa";

const LOCATION_STORAGE_KEY = "bookmyproblem_customer_location";
const CUSTOMERS_STORAGE_KEY = "bookmyproblem_customers";
const CURRENT_CUSTOMER_KEY = "bookmyproblem_current_customer";

// Nepal cities and areas
const locationData = {
  Kathmandu: [
    "Baneshwor",
    "Koteshwor",
    "Kalanki",
    "Kalimati",
    "Balaju",
    "Chabahil",
    "Maharajgunj",
    "Lazimpat",
    "Thamel",
    "Boudha",
  ],

  Lalitpur: [
    "Patan",
    "Jawalakhel",
    "Pulchowk",
    "Kupondole",
    "Satdobato",
    "Lagankhel",
    "Imadol",
    "Gwarko",
  ],

  Bhaktapur: [
    "Bhaktapur Durbar Square",
    "Suryabinayak",
    "Thimi",
    "Lokanthali",
    "Jagati",
    "Duwakot",
  ],

  Pokhara: [
    "Lakeside",
    "Mahendrapul",
    "Bagar",
    "New Road",
    "Chipledhunga",
    "Hemja",
  ],

  Chitwan: [
    "Bharatpur",
    "Narayangarh",
    "Ratnanagar",
    "Tandi",
    "Bachhauli",
  ],

  Biratnagar: [
    "Main Road",
    "Traffic Chowk",
    "Tintolia",
    "Bargachhi",
    "Kanchanbari",
  ],

  Butwal: [
    "Traffic Chowk",
    "Milanchowk",
    "Golpark",
    "Rajmarg Chauraha",
    "Kalikanagar",
    "Devinagar",
  ],

  Dharan: [
    "Bhanuchowk",
    "Putali Line",
    "Bhanu Path",
    "Dharan-8",
    "Dharan-15",
  ],

  Nepalgunj: [
    "Dhamboji",
    "Tribhuvan Chowk",
    "Bageshwori",
    "Ranjha",
    "Belaspur",
  ],

  Dhangadhi: [
    "Campus Road",
    "Chauraha",
    "Hasanpur",
    "Attariya",
    "Main Road",
    "Milan Chowk",
  ],
};

const Location = () => {
  const navigate = useNavigate();

  const [city, setCity] = useState("");
  const [area, setArea] = useState("");

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const [locationLoading, setLocationLoading] = useState(false);
  const [locationError, setLocationError] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [currentCustomer, setCurrentCustomer] = useState(null);

  // =====================================================
  // LOAD CUSTOMER + SAVED LOCATION
  // =====================================================

  useEffect(() => {
    try {
      const savedCustomer = localStorage.getItem(
        CURRENT_CUSTOMER_KEY
      );

      if (!savedCustomer) {
        navigate("/login");
        return;
      }

      const customer = JSON.parse(savedCustomer);

      setCurrentCustomer(customer);

      // Load previously saved location
      const savedLocation = localStorage.getItem(
        LOCATION_STORAGE_KEY
      );

      if (savedLocation) {
        const location = JSON.parse(savedLocation);

        setCity(location.city || "");
        setArea(location.area || "");
        setLatitude(location.latitude || null);
        setLongitude(location.longitude || null);
      } else if (customer.location) {
        setCity(customer.location.city || "");
        setArea(customer.location.area || "");
        setLatitude(customer.location.latitude || null);
        setLongitude(customer.location.longitude || null);
      }
    } catch (error) {
      console.error("Location loading error:", error);
      navigate("/login");
    }
  }, [navigate]);

  // =====================================================
  // CITY CHANGE
  // =====================================================

  const handleCityChange = (e) => {
    setCity(e.target.value);

    // Reset area when city changes
    setArea("");

    setError("");
    setSuccess("");
  };

  // =====================================================
  // BROWSER LOCATION
  // =====================================================

  const handleUseCurrentLocation = () => {
    setLocationError("");
    setSuccess("");

    if (!navigator.geolocation) {
      setLocationError(
        "Geolocation is not supported by your browser."
      );
      return;
    }

    setLocationLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        setLatitude(lat);
        setLongitude(lng);

        setLocationLoading(false);

        setSuccess(
          "Your current location has been detected."
        );
      },

      (error) => {
        console.error("Geolocation error:", error);

        setLocationLoading(false);

        switch (error.code) {
          case error.PERMISSION_DENIED:
            setLocationError(
              "Location permission was denied. Please allow location access in your browser."
            );
            break;

          case error.POSITION_UNAVAILABLE:
            setLocationError(
              "Your current location could not be detected."
            );
            break;

          case error.TIMEOUT:
            setLocationError(
              "Location request timed out. Please try again."
            );
            break;

          default:
            setLocationError(
              "Unable to detect your current location."
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

  // =====================================================
  // SAVE LOCATION
  // =====================================================

  const handleSaveLocation = () => {
    setError("");
    setSuccess("");

    if (!city) {
      setError("Please select your city.");
      return;
    }

    if (!area) {
      setError("Please select your area.");
      return;
    }

    if (!currentCustomer) {
      setError(
        "Customer session not found. Please login again."
      );
      return;
    }

    const locationDataToSave = {
      city,
      area,
      latitude,
      longitude,
      updatedAt: new Date().toISOString(),
    };

    try {
      // =================================================
      // 1. SAVE LOCATION SEPARATELY
      // =================================================

      localStorage.setItem(
        LOCATION_STORAGE_KEY,
        JSON.stringify(locationDataToSave)
      );

      // =================================================
      // 2. UPDATE CURRENT CUSTOMER
      // =================================================

      const updatedCustomer = {
        ...currentCustomer,
        city,
        address: area,
        location: {
          city,
          area,
          latitude,
          longitude,
        },
      };

      localStorage.setItem(
        CURRENT_CUSTOMER_KEY,
        JSON.stringify(updatedCustomer)
      );

      // =================================================
      // 3. UPDATE CUSTOMER IN CUSTOMERS ARRAY
      // =================================================

      const savedCustomers = localStorage.getItem(
        CUSTOMERS_STORAGE_KEY
      );

      const customers = savedCustomers
        ? JSON.parse(savedCustomers)
        : [];

      const updatedCustomers = customers.map((customer) => {
        if (customer.id === currentCustomer.id) {
          return {
            ...customer,
            city,
            address: area,
            location: {
              city,
              area,
              latitude,
              longitude,
            },
          };
        }

        return customer;
      });

      localStorage.setItem(
        CUSTOMERS_STORAGE_KEY,
        JSON.stringify(updatedCustomers)
      );

      // =================================================
      // SUCCESS
      // =================================================

      setSuccess("Location saved successfully.");

      // Next page
      setTimeout(() => {
        navigate("/");
      }, 700);
    } catch (error) {
      console.error("Location save error:", error);

      setError(
        "Unable to save your location. Please try again."
      );
    }
  };

  // =====================================================
  // CURRENT CITY AREAS
  // =====================================================

  const availableAreas = city
    ? locationData[city] || []
    : [];

  // =====================================================
  // UI
  // =====================================================

  return (
    <div className="min-h-screen bg-gray-50">

      {/* =================================================
          HEADER
      ================================================= */}

      <header className="bg-[#072144] text-white">

        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5">

          <div className="flex items-center justify-between">

            <div>
              <h1 className="text-xl sm:text-2xl font-bold">
                Book My Problem
              </h1>

              <p className="text-sm text-blue-100 mt-1">
                Find services near you
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm">

              <FaMapMarkerAlt className="text-[#FCBC14]" />

              <span>
                {city || "Select Location"}
              </span>

            </div>

          </div>

        </div>

      </header>

      {/* =================================================
          MAIN
      ================================================= */}

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {/* =================================================
              LEFT INFORMATION
          ================================================= */}

          <div className="bg-[#072144] rounded-2xl p-7 sm:p-10 text-white flex flex-col justify-between">

            <div>

              <div className="w-14 h-14 rounded-full bg-[#FCBC14] text-[#072144] flex items-center justify-center text-2xl">

                <FaMapMarkerAlt />

              </div>

              <h2 className="text-3xl sm:text-4xl font-bold mt-6">
                Where are you located?
              </h2>

              <p className="mt-4 text-blue-100 leading-7">
                Select your city and area so we can show you
                the services and professionals available near
                your location.
              </p>

            </div>

            <div className="mt-10 space-y-4">

              <div className="flex gap-3">

                <FaCheckCircle className="text-[#FCBC14] mt-1 flex-shrink-0" />

                <p className="text-sm text-blue-100">
                  Find professionals near your area
                </p>

              </div>

              <div className="flex gap-3">

                <FaCheckCircle className="text-[#FCBC14] mt-1 flex-shrink-0" />

                <p className="text-sm text-blue-100">
                  Get services available in your city
                </p>

              </div>

              <div className="flex gap-3">

                <FaCheckCircle className="text-[#FCBC14] mt-1 flex-shrink-0" />

                <p className="text-sm text-blue-100">
                  Better service recommendations
                </p>

              </div>

            </div>

          </div>

          {/* =================================================
              LOCATION FORM
          ================================================= */}

          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10">

            <div className="max-w-md mx-auto">

              <span className="text-[#072144] font-semibold text-sm">
                YOUR LOCATION
              </span>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
                Select your location
              </h2>

              <p className="text-gray-500 mt-2 text-sm">
                Choose your city and area manually or use your
                current browser location.
              </p>

              {/* =================================================
                  ERROR
              ================================================= */}

              {error && (
                <div className="mt-5 bg-red-50 border border-red-200 text-red-600 rounded-lg px-4 py-3 text-sm">
                  {error}
                </div>
              )}

              {/* =================================================
                  LOCATION ERROR
              ================================================= */}

              {locationError && (
                <div className="mt-5 bg-orange-50 border border-orange-200 text-orange-700 rounded-lg px-4 py-3 text-sm">
                  {locationError}
                </div>
              )}

              {/* =================================================
                  SUCCESS
              ================================================= */}

              {success && (
                <div className="mt-5 bg-green-50 border border-green-200 text-green-700 rounded-lg px-4 py-3 text-sm flex items-center gap-2">

                  <FaCheckCircle />

                  <span>{success}</span>

                </div>
              )}

              {/* =================================================
                  CURRENT LOCATION BUTTON
              ================================================= */}

              <button
                type="button"
                onClick={handleUseCurrentLocation}
                disabled={locationLoading}
                className="w-full mt-7 flex items-center justify-center gap-3 border-2 border-[#072144] text-[#072144] py-3.5 rounded-lg font-semibold hover:bg-[#072144] hover:text-white transition disabled:opacity-60"
              >

                {locationLoading ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Detecting Location...
                  </>
                ) : (
                  <>
                    <FaLocationArrow />
                    Use My Current Location
                  </>
                )}

              </button>

              {/* =================================================
                  DIVIDER
              ================================================= */}

              <div className="flex items-center gap-4 my-7">

                <div className="h-px bg-gray-200 flex-1" />

                <span className="text-xs text-gray-400">
                  OR SELECT MANUALLY
                </span>

                <div className="h-px bg-gray-200 flex-1" />

              </div>

              {/* =================================================
                  CITY
              ================================================= */}

              <div>

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>

                <div className="relative">

                  <FaCity className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <select
                    value={city}
                    onChange={handleCityChange}
                    className="w-full border border-gray-300 rounded-lg pl-11 pr-4 py-3.5 bg-white outline-none focus:border-[#072144] focus:ring-1 focus:ring-[#072144] appearance-none"
                  >

                    <option value="">
                      Select your city
                    </option>

                    {Object.keys(locationData).map(
                      (cityName) => (
                        <option
                          key={cityName}
                          value={cityName}
                        >
                          {cityName}
                        </option>
                      )
                    )}

                  </select>

                </div>

              </div>

              {/* =================================================
                  AREA
              ================================================= */}

              <div className="mt-5">

                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Area
                </label>

                <div className="relative">

                  <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <select
                    value={area}
                    onChange={(e) => {
                      setArea(e.target.value);
                      setError("");
                      setSuccess("");
                    }}
                    disabled={!city}
                    className="w-full border border-gray-300 rounded-lg pl-11 pr-4 py-3.5 bg-white outline-none focus:border-[#072144] focus:ring-1 focus:ring-[#072144] appearance-none disabled:bg-gray-100 disabled:text-gray-400"
                  >

                    <option value="">
                      {city
                        ? "Select your area"
                        : "Select city first"}
                    </option>

                    {availableAreas.map(
                      (areaName) => (
                        <option
                          key={areaName}
                          value={areaName}
                        >
                          {areaName}
                        </option>
                      )
                    )}

                  </select>

                </div>

              </div>

              {/* =================================================
                  GPS STATUS
              ================================================= */}

              {latitude && longitude && (
                <div className="mt-5 rounded-lg bg-blue-50 border border-blue-100 px-4 py-3">

                  <p className="text-xs font-semibold text-[#072144]">
                    GPS LOCATION DETECTED
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    Latitude: {latitude.toFixed(6)}
                  </p>

                  <p className="text-xs text-gray-500">
                    Longitude: {longitude.toFixed(6)}
                  </p>

                </div>
              )}

              {/* =================================================
                  SAVE BUTTON
              ================================================= */}

              <button
                type="button"
                onClick={handleSaveLocation}
                className="w-full mt-7 flex items-center justify-center gap-3 bg-[#072144] text-white py-3.5 rounded-lg font-semibold hover:bg-[#FCBC14] hover:text-[#072144] transition"
              >

                Save & Continue

                <FaArrowRight />

              </button>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
};

export default Location;