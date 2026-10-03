import React, { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";

import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaTools,
  FaBolt,
  FaHome,
  FaCity,
  FaTimesCircle,
} from "react-icons/fa";

// ================= DATA =================

// MAIN SERVICES
import services from "../../data/Services";

// DESIGN
import designData from "../../data/designData";

// CITIES
import citiesData from "../../data/citiesData";

// SERVICE DETAILS
import plumbingServices from "../../data/ServiceDetails/plumbing.jsx";
import electricalServices from "../../data/ServiceDetails/electrical.jsx";

// =====================================================
// HELPERS
// =====================================================

const normalizeText = (value = "") => {
  if (value === null || value === undefined) {
    return "";
  }

  if (Array.isArray(value)) {
    return value.join(" ").toLowerCase();
  }

  if (typeof value === "object") {
    return Object.values(value).join(" ").toLowerCase();
  }

  return String(value)
    .toLowerCase()
    .replace(/[-_/]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};

const noSpace = (value = "") => {
  return normalizeText(value).replace(/\s/g, "");
};

// =====================================================
// SEARCH PROFILES
// =====================================================

const SEARCH_PROFILES = [
  {
    keys: ["pan seat", "pansit"],
    exact: ["pan seat", "pansit"],
    related: [
      "western toilet",
      "commode",
      "toilet",
    ],
  },

  {
    keys: ["plumbing", "plumber"],
    exact: [
      "plumbing",
      "plumber",
    ],
    related: [
      "pipe",
      "water",
      "tap",
      "faucet",
      "drainage",
      "toilet",
      "sink",
      "wash basin",
    ],
  },

  {
    keys: ["electrical", "electrician"],
    exact: [
      "electrical",
      "electrician",
    ],
    related: [
      "wiring",
      "switch",
      "socket",
      "fan",
      "light",
      "electric",
    ],
  },

  {
    keys: ["home interior", "interior"],
    exact: [
      "home interior",
      "interior",
    ],
    related: [
      "interior design",
      "house interior",
    ],
  },

  {
    keys: ["home decor", "decor"],
    exact: [
      "home decor",
      "decor",
    ],
    related: [
      "decoration",
      "home decoration",
      "interior decor",
    ],
  },

  {
    keys: ["living room"],
    exact: [
      "living room",
    ],
    related: [
      "living area",
      "lounge",
      "sofa",
    ],
  },

  {
    keys: ["wardrobe"],
    exact: [
      "wardrobe",
    ],
    related: [
      "closet",
      "cupboard",
      "storage",
    ],
  },

  {
    keys: ["office"],
    exact: [
      "office",
    ],
    related: [
      "workspace",
      "work space",
      "commercial",
    ],
  },

  {
    keys: ["2bhk", "2 bhk", "2-bhk"],
    exact: [
      "2bhk",
      "2 bhk",
      "2-bhk",
    ],
    related: [
      "2 bedroom",
      "two bedroom",
      "two bhk",
    ],
  },

  {
    keys: ["modular kitchen", "kitchen"],
    exact: [
      "modular kitchen",
      "kitchen",
    ],
    related: [
      "kitchen design",
      "kitchen interior",
      "cabinet",
      "countertop",
    ],
  },

  {
    keys: ["bathroom"],
    exact: [
      "bathroom",
    ],
    related: [
      "toilet",
      "washroom",
      "sanitary",
      "commode",
      "basin",
    ],
  },

  {
    keys: ["furniture"],
    exact: [
      "furniture",
    ],
    related: [
      "sofa",
      "chair",
      "table",
      "bed",
      "cabinet",
      "woodwork",
    ],
  },

  {
    keys: ["bedroom"],
    exact: [
      "bedroom",
    ],
    related: [
      "master bedroom",
      "kids bedroom",
      "bed",
    ],
  },
];

// =====================================================
// GET SEARCH PROFILE
// =====================================================

const getSearchProfile = (query) => {
  const normalizedQuery = normalizeText(query);
  const normalizedNoSpace = noSpace(normalizedQuery);

  const profile = SEARCH_PROFILES.find((item) =>
    item.keys.some((key) => {
      const normalizedKey = normalizeText(key);

      return (
        normalizedQuery === normalizedKey ||
        normalizedNoSpace === noSpace(normalizedKey)
      );
    })
  );

  if (profile) {
    return profile;
  }

  return {
    exact: [normalizedQuery],
    related: [],
  };
};

// =====================================================
// GET PRIMARY VALUES
// =====================================================

const getPrimaryValues = (item) => {
  return [
    item?.title,
    item?.name,
    item?.slug,
    item?.shortTitle,
    item?.service,
    item?.serviceName,
    item?.serviceTitle,
    item?.heading,
  ]
    .map(normalizeText)
    .filter(Boolean);
};

// =====================================================
// GET CATEGORY VALUES
// =====================================================

const getCategoryValues = (item) => {
  return [
    item?.category,
    item?.type,
    item?.serviceCategory,
    item?.subCategory,
    item?.tags,
    item?.keywords,
    item?.searchKeywords,
    item?.features,
  ]
    .map(normalizeText)
    .filter(Boolean);
};

// =====================================================
// GET DESCRIPTION VALUES
// =====================================================

const getDescriptionValues = (item) => {
  return [
    item?.shortDescription,
    item?.description,
    item?.longDescription,
  ]
    .map(normalizeText)
    .filter(Boolean);
};

// =====================================================
// SEARCH SCORE
// =====================================================

const getSearchScore = (
  item,
  query,
  profile
) => {
  const normalizedQuery =
    normalizeText(query);

  if (!normalizedQuery) {
    return 0;
  }

  const primaryValues =
    getPrimaryValues(item);

  const categoryValues =
    getCategoryValues(item);

  const descriptionValues =
    getDescriptionValues(item);

  const exactTerms = [
    normalizedQuery,
    ...(profile.exact || []),
  ]
    .map(normalizeText)
    .filter(Boolean);

  const relatedTerms =
    (profile.related || [])
      .map(normalizeText)
      .filter(Boolean);

  // ===================================================
  // 1. EXACT PRIMARY MATCH
  // ===================================================

  for (const value of primaryValues) {
    for (const term of exactTerms) {
      if (
        value === term ||
        noSpace(value) === noSpace(term)
      ) {
        return 1000;
      }
    }
  }

  // ===================================================
  // 2. PRIMARY CONTAINS SEARCH TERM
  // ===================================================

  for (const value of primaryValues) {
    for (const term of exactTerms) {
      if (
        term.length >= 3 &&
        value.includes(term)
      ) {
        return 850;
      }
    }
  }

  // ===================================================
  // 3. RELATED PRIMARY MATCH
  // ===================================================

  for (const value of primaryValues) {
    for (const term of relatedTerms) {
      if (
        value === term ||
        noSpace(value) === noSpace(term)
      ) {
        return 700;
      }

      if (
        term.length >= 4 &&
        value.includes(term)
      ) {
        return 650;
      }
    }
  }

  // ===================================================
  // 4. CATEGORY / TAG MATCH
  // ===================================================

  for (const value of categoryValues) {
    for (const term of exactTerms) {
      if (
        value === term ||
        noSpace(value) === noSpace(term)
      ) {
        return 600;
      }

      if (
        term.length >= 3 &&
        value.includes(term)
      ) {
        return 550;
      }
    }
  }

  // ===================================================
  // 5. RELATED CATEGORY / TAG
  // ===================================================

  for (const value of categoryValues) {
    for (const term of relatedTerms) {
      if (
        value === term ||
        noSpace(value) === noSpace(term)
      ) {
        return 500;
      }

      if (
        term.length >= 4 &&
        value.includes(term)
      ) {
        return 450;
      }
    }
  }

  // ===================================================
  // 6. DESCRIPTION MATCH
  // ===================================================

  for (const value of descriptionValues) {
    for (const term of exactTerms) {
      if (
        term.length >= 4 &&
        value.includes(term)
      ) {
        return 300;
      }
    }
  }

  // ===================================================
  // 7. RELATED DESCRIPTION
  // ===================================================

  for (const value of descriptionValues) {
    for (const term of relatedTerms) {
      if (
        term.length >= 4 &&
        value.includes(term)
      ) {
        return 200;
      }
    }
  }

  return 0;
};

// =====================================================
// IMAGE HELPER
// =====================================================

const getItemImage = (
  item,
  fallback
) => {
  if (item?.image) {
    return item.image;
  }

  if (
    Array.isArray(item?.images) &&
    typeof item.images[0] === "string"
  ) {
    return item.images[0];
  }

  return fallback;
};

// =====================================================
// MAIN SERVICE LINK
// =====================================================

const getServicePath = (service) => {
  if (
    service?.slug ===
    "annual-maintenance-charges"
  ) {
    return "/annual-maintenance";
  }

  return `/services/${service.slug}`;
};

// =====================================================
// SEARCH PAGE
// =====================================================

const SearchPage = () => {
  const [searchParams] =
    useSearchParams();

  const query =
    searchParams.get("q") || "";

  const searchTerm =
    normalizeText(query);

  // ===================================================
  // SEARCH RESULTS
  // ===================================================

  const searchResults = useMemo(() => {
    if (!searchTerm) {
      return [];
    }

    const profile =
      getSearchProfile(searchTerm);

    // =================================================
    // MAIN SERVICES
    // =================================================

    const mainServiceResults =
      (Array.isArray(services)
        ? services
        : []
      )
        .map((item) => {
          const score =
            getSearchScore(
              item,
              searchTerm,
              profile
            );

          return {
            item,
            score,
          };
        })
        .filter(
          (result) =>
            result.score > 0
        )
        .map(
          ({ item, score }) => ({
            ...item,

            _searchScore: score,

            resultType: "service",

            category:
              "Home Services",

            icon:
              item.icon || FaTools,

            path:
              getServicePath(item),

            searchTitle:
              item.title ||
              item.shortTitle ||
              "Home Service",

            searchDescription:
              item.description ||
              item.longDescription ||
              "Professional home service.",

            image:
              getItemImage(
                item,
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80"
              ),
          })
        );

    // =================================================
    // PLUMBING
    // =================================================

    const plumbingResults =
      (Array.isArray(
        plumbingServices
      )
        ? plumbingServices
        : []
      )
        .map((item) => {
          const score =
            getSearchScore(
              item,
              searchTerm,
              profile
            );

          return {
            item,
            score,
          };
        })
        .filter(
          (result) =>
            result.score > 0
        )
        .map(
          ({ item, score }) => ({
            ...item,

            _searchScore: score,

            resultType: "service",

            category:
              "Plumbing",

            icon: FaTools,

            path:
              `/services/${item.slug}`,

            searchTitle:
              item.title ||
              item.name ||
              item.serviceName ||
              "Plumbing Service",

            searchDescription:
              item.shortDescription ||
              item.description ||
              item.longDescription ||
              "Professional plumbing service.",

            image:
              getItemImage(
                item,
                "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=80"
              ),
          })
        );

    // =================================================
    // ELECTRICAL
    // =================================================

    const electricalResults =
      (Array.isArray(
        electricalServices
      )
        ? electricalServices
        : []
      )
        .map((item) => {
          const score =
            getSearchScore(
              item,
              searchTerm,
              profile
            );

          return {
            item,
            score,
          };
        })
        .filter(
          (result) =>
            result.score > 0
        )
        .map(
          ({ item, score }) => ({
            ...item,

            _searchScore: score,

            resultType: "service",

            category:
              "Electrical",

            icon: FaBolt,

            path:
              `/services/${item.slug}`,

            searchTitle:
              item.title ||
              item.name ||
              item.serviceName ||
              "Electrical Service",

            searchDescription:
              item.shortDescription ||
              item.description ||
              item.longDescription ||
              "Professional electrical service.",

            image:
              getItemImage(
                item,
                "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80"
              ),
          })
        );

    // =================================================
    // DESIGN
    // =================================================

    const designResults =
      (Array.isArray(designData)
        ? designData
        : []
      )
        .map((item) => {
          const score =
            getSearchScore(
              item,
              searchTerm,
              profile
            );

          return {
            item,
            score,
          };
        })
        .filter(
          (result) =>
            result.score > 0
        )
        .map(
          ({ item, score }) => ({
            ...item,

            _searchScore: score,

            resultType: "design",

            category:
              "Design",

            icon: FaHome,

            path:
              `/design/${item.slug}`,

            searchTitle:
              item.title ||
              item.name ||
              "Interior Design",

            searchDescription:
              item.shortDescription ||
              item.description ||
              item.longDescription ||
              "Explore this interior design.",

            image:
              getItemImage(
                item,
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80"
              ),
          })
        );

    // =================================================
    // CITY
    // =================================================

    const cityResults =
      (Array.isArray(citiesData)
        ? citiesData
        : []
      )
        .map((item) => {
          const score =
            getSearchScore(
              item,
              searchTerm,
              profile
            );

          return {
            item,
            score,
          };
        })
        .filter(
          (result) =>
            result.score > 0
        )
        .map(
          ({ item, score }) => ({
            ...item,

            _searchScore: score,

            resultType: "city",

            category:
              "City",

            icon: FaCity,

            path:
              `/cities/${item.slug}`,

            searchTitle:
              item.name ||
              item.title ||
              "City",

            searchDescription:
              item.shortDescription ||
              item.description ||
              item.areaDescription ||
              "Explore services available in this city.",

            image:
              getItemImage(
                item,
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80"
              ),
          })
        );

    // =================================================
    // COMBINE ALL RESULTS
    // =================================================

    const allResults = [
      ...mainServiceResults,
      ...plumbingResults,
      ...electricalResults,
      ...designResults,
      ...cityResults,
    ].sort(
      (a, b) =>
        b._searchScore -
        a._searchScore
    );

    // =================================================
    // STRONG RESULTS
    // =================================================

    const strongResults =
      allResults.filter(
        (item) =>
          item._searchScore >= 800
      );

    if (
      strongResults.length > 0
    ) {
      return strongResults;
    }

    // =================================================
    // RELATED RESULTS
    // =================================================

    const relatedResults =
      allResults.filter(
        (item) =>
          item._searchScore >= 450
      );

    if (
      relatedResults.length > 0
    ) {
      return relatedResults;
    }

    // =================================================
    // DESCRIPTION RESULTS
    // =================================================

    return allResults.filter(
      (item) =>
        item._searchScore >= 200
    );
  }, [searchTerm]);

  // ===================================================
  // RESULT COUNTS
  // ===================================================

  const serviceResults =
    searchResults.filter(
      (item) =>
        item.resultType ===
        "service"
    );

  const designResults =
    searchResults.filter(
      (item) =>
        item.resultType ===
        "design"
    );

  const cityResults =
    searchResults.filter(
      (item) =>
        item.resultType ===
        "city"
    );

  // ===================================================
  // RESULT CARD
  // ===================================================

  const ResultCard = ({ item }) => {
    const Icon =
      item.icon || FaHome;

    return (
      <Link
        to={item.path}
        className="
          group
          block
          bg-white
          rounded-2xl
          overflow-hidden
          border
          border-gray-100
          shadow-sm
          hover:shadow-xl
          hover:-translate-y-1
          transition-all
          duration-300
        "
      >
        {/* IMAGE */}

        <div className="relative h-56 overflow-hidden">

          <img
            src={item.image}
            alt={item.searchTitle}
            loading="lazy"
            className="
              w-full
              h-full
              object-cover
              group-hover:scale-105
              transition-transform
              duration-500
            "
            onError={(e) => {
              e.currentTarget.onerror =
                null;

              e.currentTarget.src =
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80";
            }}
          />

          {/* OVERLAY */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#072144]/70
              via-transparent
              to-transparent
            "
          />

          {/* CATEGORY */}

          <div
            className="
              absolute
              top-4
              left-4
              inline-flex
              items-center
              gap-2
              bg-white/95
              backdrop-blur-sm
              px-3
              py-2
              rounded-full
              text-xs
              font-bold
              text-[#072144]
              shadow-md
            "
          >
            <Icon className="text-[#FCBC14]" />

            {item.category}
          </div>

          {/* LOCATION */}

          {item.location && (
            <div
              className="
                absolute
                bottom-4
                left-4
                flex
                items-center
                gap-2
                text-white
                text-sm
                font-medium
              "
            >
              <FaMapMarkerAlt className="text-[#FCBC14]" />

              {item.location}
            </div>
          )}
        </div>

        {/* CONTENT */}

        <div className="p-6">

          <h3
            className="
              text-xl
              font-bold
              text-[#072144]
              group-hover:text-[#FCBC14]
              transition-colors
              duration-300
            "
          >
            {item.searchTitle}
          </h3>

          <p
            className="
              mt-3
              text-gray-600
              text-sm
              leading-6
              line-clamp-3
            "
          >
            {item.searchDescription}
          </p>

          {/* EXTRA INFO */}

          {(item.area ||
            item.year) && (
            <div
              className="
                mt-4
                flex
                items-center
                gap-4
                text-xs
                text-gray-500
              "
            >
              {item.area && (
                <span>
                  Area:{" "}
                  <strong>
                    {item.area}
                  </strong>
                </span>
              )}

              {item.year && (
                <span>
                  Year:{" "}
                  <strong>
                    {item.year}
                  </strong>
                </span>
              )}
            </div>
          )}

          {/* VIEW DETAILS */}

          <div
            className="
              mt-5
              flex
              items-center
              justify-between
              text-[#072144]
              font-semibold
              text-sm
            "
          >
            <span>
              View Details
            </span>

            <span
              className="
                w-9
                h-9
                rounded-full
                bg-[#072144]
                text-white
                flex
                items-center
                justify-center
                group-hover:bg-[#FCBC14]
                group-hover:text-[#072144]
                transition-all
                duration-300
              "
            >
              <FaArrowRight />
            </span>
          </div>

        </div>
      </Link>
    );
  };

  // ===================================================
  // PAGE
  // ===================================================

  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      <section
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          py-10
          sm:py-12
        "
      >

        {/* =================================================
            RESULT SUMMARY
        ================================================= */}

        {searchTerm &&
          searchResults.length >
            0 && (
            <div className="mb-8">

              <h2
                className="
                  text-2xl
                  sm:text-3xl
                  font-bold
                  text-[#072144]
                "
              >
                {searchResults.length}{" "}
                {searchResults.length ===
                1
                  ? "result"
                  : "results"}
              </h2>

            </div>
          )}

        {/* =================================================
            HOME SERVICES
        ================================================= */}

        {serviceResults.length >
          0 && (
          <div className="mb-14">

            <div className="flex items-center gap-3 mb-6">

              <div
                className="
                  w-10
                  h-10
                  rounded-xl
                  bg-[#072144]
                  text-white
                  flex
                  items-center
                  justify-center
                "
              >
                <FaTools />
              </div>

              <div>

                <h2
                  className="
                    text-2xl
                    font-bold
                    text-[#072144]
                  "
                >
                  Home Services
                </h2>

                <p className="text-sm text-gray-500">
                  Services matching your search
                </p>

              </div>

            </div>

            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
                gap-6
              "
            >
              {serviceResults.map(
                (item, index) => (
                  <ResultCard
                    key={`service-${
                      item.slug ||
                      item.id ||
                      index
                    }`}
                    item={item}
                  />
                )
              )}
            </div>

          </div>
        )}

        {/* =================================================
            DESIGN RESULTS
        ================================================= */}

        {designResults.length >
          0 && (
          <div className="mb-14">

            <div className="flex items-center gap-3 mb-6">

              <div
                className="
                  w-10
                  h-10
                  rounded-xl
                  bg-[#FCBC14]
                  text-[#072144]
                  flex
                  items-center
                  justify-center
                "
              >
                <FaHome />
              </div>

              <div>

                <h2
                  className="
                    text-2xl
                    font-bold
                    text-[#072144]
                  "
                >
                  Designs & Interiors
                </h2>

                <p className="text-sm text-gray-500">
                  Designs matching your search
                </p>

              </div>

            </div>

            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
                gap-6
              "
            >
              {designResults.map(
                (item, index) => (
                  <ResultCard
                    key={`design-${
                      item.slug ||
                      item.id ||
                      index
                    }`}
                    item={item}
                  />
                )
              )}
            </div>

          </div>
        )}

        {/* =================================================
            CITY RESULTS
        ================================================= */}

        {cityResults.length >
          0 && (
          <div className="mb-14">

            <div className="flex items-center gap-3 mb-6">

              <div
                className="
                  w-10
                  h-10
                  rounded-xl
                  bg-[#072144]
                  text-white
                  flex
                  items-center
                  justify-center
                "
              >
                <FaCity />
              </div>

              <div>

                <h2
                  className="
                    text-2xl
                    font-bold
                    text-[#072144]
                  "
                >
                  Cities
                </h2>

                <p className="text-sm text-gray-500">
                  Services available in matching cities
                </p>

              </div>

            </div>

            <div
              className="
                grid
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
                gap-6
              "
            >
              {cityResults.map(
                (item, index) => (
                  <ResultCard
                    key={`city-${
                      item.slug ||
                      item.id ||
                      index
                    }`}
                    item={item}
                  />
                )
              )}
            </div>

          </div>
        )}

        {/* =================================================
            NO RESULTS
        ================================================= */}

        {searchTerm &&
          searchResults.length ===
            0 && (
            <div
              className="
                max-w-2xl
                mx-auto
                text-center
                bg-white
                rounded-3xl
                border
                border-gray-100
                shadow-sm
                px-6
                py-14
              "
            >

              <div
                className="
                  w-20
                  h-20
                  mx-auto
                  rounded-full
                  bg-red-50
                  text-red-400
                  flex
                  items-center
                  justify-center
                  text-3xl
                "
              >
                <FaTimesCircle />
              </div>

              <h2
                className="
                  mt-6
                  text-2xl
                  sm:text-3xl
                  font-bold
                  text-[#072144]
                "
              >
                No results found
              </h2>

              <p
                className="
                  mt-3
                  text-gray-500
                  leading-7
                "
              >
                We couldn't find anything
                matching "{query}".
              </p>

              {/* SUGGESTIONS */}

              <div
                className="
                  mt-6
                  flex
                  flex-wrap
                  justify-center
                  gap-2
                "
              >
                {[
                  "Pan Seat",
                  "Plumbing",
                  "Electrical",
                  "Kitchen",
                  "Bedroom",
                  "Wardrobe",
                  "Furniture",
                  "Kathmandu",
                ].map((word) => (
                  <Link
                    key={word}
                    to={`/search?q=${encodeURIComponent(
                      word
                    )}`}
                    className="
                      px-4
                      py-2
                      rounded-full
                      bg-[#F8FAFC]
                      border
                      border-gray-200
                      text-sm
                      font-medium
                      text-[#072144]
                      hover:bg-[#FCBC14]
                      hover:border-[#FCBC14]
                      transition
                    "
                  >
                    {word}
                  </Link>
                ))}
              </div>

              {/* EXPLORE BUTTONS */}

              <div
                className="
                  mt-8
                  flex
                  flex-col
                  sm:flex-row
                  justify-center
                  gap-3
                "
              >

                <Link
                  to="/services"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    bg-[#072144]
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    font-semibold
                    hover:bg-[#FCBC14]
                    hover:text-[#072144]
                    transition
                  "
                >
                  Explore Services

                  <FaArrowRight />
                </Link>

                <Link
                  to="/design"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    gap-2
                    border
                    border-[#072144]
                    text-[#072144]
                    px-6
                    py-3
                    rounded-xl
                    font-semibold
                    hover:bg-[#072144]
                    hover:text-white
                    transition
                  "
                >
                  Explore Designs

                  <FaArrowRight />
                </Link>

              </div>

            </div>
          )}

        {/* =================================================
            EMPTY SEARCH
        ================================================= */}

        {!searchTerm && (
          <div
            className="
              max-w-2xl
              mx-auto
              text-center
              py-16
            "
          >

            <h2
              className="
                text-2xl
                font-bold
                text-[#072144]
              "
            >
              Select a service to explore
            </h2>

            <p className="mt-3 text-gray-500">
              Choose a popular search from
              the homepage.
            </p>

          </div>
        )}

      </section>

    </div>
  );
};

export default SearchPage;