
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaHeart,
  FaShoppingCart,
  FaTrash,
  FaArrowLeft,
} from "react-icons/fa";

import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";

const Wishlist = () => {
  const navigate = useNavigate();

  const {
    wishlist,
    wishlistCount,
    removeFromWishlist,
    clearWishlist,
  } = useWishlist();

  const { addToCart } = useCart();

  // ==================================================
  // ADD TO CART
  // ==================================================

  const handleAddToCart = (item) => {
    addToCart({
      ...item,
      name: item.name || item.title,
    });

    alert(`${item.name || item.title} added to cart!`);
  };

  // ==================================================
  // EMPTY WISHLIST
  // ==================================================

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] pt-28 px-6">
        <div className="max-w-5xl mx-auto">

          {/* BACK */}

          <button
            onClick={() => navigate(-1)}
            className="
              flex
              items-center
              gap-2
              text-gray-600
              hover:text-[#072144]
              font-medium
              mb-8
            "
          >
            <FaArrowLeft />
            Back
          </button>

          {/* EMPTY CARD */}

          <div className="
            bg-white
            rounded-2xl
            shadow-sm
            border
            border-gray-100
            p-12
            text-center
          ">

            <div className="
              w-20
              h-20
              mx-auto
              rounded-full
              bg-red-50
              flex
              items-center
              justify-center
              mb-6
            ">
              <FaHeart className="text-3xl text-red-400" />
            </div>

            <h1 className="
              text-2xl
              font-bold
              text-[#072144]
              mb-2
            ">
              Your Wishlist is Empty
            </h1>

            <p className="
              text-gray-500
              max-w-md
              mx-auto
              mb-7
            ">
              Save the services you like and easily find
              them here whenever you need them.
            </p>

            <button
              onClick={() => navigate("/services")}
              className="
                bg-[#072144]
                text-white
                px-6
                py-3
                rounded-lg
                font-semibold
                hover:bg-[#FCBC14]
                hover:text-[#072144]
                transition
              "
            >
              Browse Services
            </button>

          </div>
        </div>
      </div>
    );
  }

  // ==================================================
  // WISHLIST PAGE
  // ==================================================

  return (
    <div className="min-h-screen bg-[#F8FAFC] pt-28 px-6 pb-16">

      <div className="max-w-7xl mx-auto">

        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between
          gap-4
          mb-8
        ">

          <div>

            <button
              onClick={() => navigate(-1)}
              className="
                flex
                items-center
                gap-2
                text-gray-500
                hover:text-[#072144]
                font-medium
                mb-3
              "
            >
              <FaArrowLeft />
              Back
            </button>

            <div className="flex items-center gap-3">

              <div className="
                w-12
                h-12
                rounded-full
                bg-red-50
                flex
                items-center
                justify-center
              ">
                <FaHeart className="text-xl text-red-500" />
              </div>

              <div>

                <h1 className="
                  text-2xl
                  sm:text-3xl
                  font-bold
                  text-[#072144]
                ">
                  My Wishlist
                </h1>

                <p className="text-gray-500 text-sm">
                  {wishlistCount}{" "}
                  {wishlistCount === 1
                    ? "service"
                    : "services"}{" "}
                  saved
                </p>

              </div>

            </div>

          </div>

          {/* CLEAR */}

          <button
            onClick={clearWishlist}
            className="
              flex
              items-center
              justify-center
              gap-2
              px-4
              py-2.5
              rounded-lg
              border
              border-red-200
              text-red-500
              hover:bg-red-50
              transition
              font-medium
            "
          >
            <FaTrash />
            Clear Wishlist
          </button>

        </div>

        {/* ==================================================
            WISHLIST GRID
        ================================================== */}

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
        ">

          {wishlist.map((item) => (

            <div
              key={item.id}
              className="
                bg-white
                rounded-2xl
                overflow-hidden
                border
                border-gray-100
                shadow-sm
                hover:shadow-lg
                transition
              "
            >

              {/* IMAGE */}

              <div className="relative h-52 bg-gray-100">

                <img
                  src={
                    item.image ||
                    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
                  }
                  alt={item.name || item.title}
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />

                {/* HEART */}

                <button
                  onClick={() =>
                    removeFromWishlist(item.id)
                  }
                  className="
                    absolute
                    top-3
                    right-3
                    w-10
                    h-10
                    rounded-full
                    bg-white
                    flex
                    items-center
                    justify-center
                    text-red-500
                    shadow-md
                    hover:bg-red-500
                    hover:text-white
                    transition
                  "
                  title="Remove from Wishlist"
                >
                  <FaHeart />
                </button>

              </div>

              {/* CONTENT */}

              <div className="p-5">

                <p className="
                  text-xs
                  font-semibold
                  text-[#FCBC14]
                  uppercase
                  tracking-wide
                  mb-1
                ">
                  {item.category || "Home Service"}
                </p>

                <h2 className="
                  text-lg
                  font-bold
                  text-[#072144]
                  mb-2
                ">
                  {item.name || item.title}
                </h2>

                {item.description && (
                  <p className="
                    text-sm
                    text-gray-500
                    line-clamp-2
                    mb-4
                  ">
                    {item.description}
                  </p>
                )}

                {/* PRICE */}

                <div className="
                  flex
                  items-center
                  justify-between
                  mb-4
                ">

                  <span className="
                    text-lg
                    font-bold
                    text-[#072144]
                  ">
                    {typeof item.price === "number"
                      ? `Rs. ${item.price}`
                      : item.price || "Price on inspection"}
                  </span>

                </div>

                {/* BUTTONS */}

                <div className="flex gap-2">

                  <button
                    onClick={() => handleAddToCart(item)}
                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-2
                      bg-[#072144]
                      text-white
                      px-4
                      py-3
                      rounded-lg
                      font-semibold
                      hover:bg-[#FCBC14]
                      hover:text-[#072144]
                      transition
                    "
                  >
                    <FaShoppingCart />
                    Add to Cart
                  </button>

                  <button
                    onClick={() =>
                      removeFromWishlist(item.id)
                    }
                    className="
                      w-12
                      flex
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-gray-200
                      text-gray-500
                      hover:text-red-500
                      hover:bg-red-50
                      transition
                    "
                    title="Remove"
                  >
                    <FaTrash />
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default Wishlist;

