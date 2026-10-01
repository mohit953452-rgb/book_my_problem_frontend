
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const WishlistContext = createContext();

const WISHLIST_STORAGE_KEY = "bookmyproblem_wishlist";

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    try {
      const savedWishlist = localStorage.getItem(
        WISHLIST_STORAGE_KEY
      );

      return savedWishlist
        ? JSON.parse(savedWishlist)
        : [];
    } catch (error) {
      console.error("Wishlist load error:", error);
      return [];
    }
  });

  // ==================================================
  // SAVE WISHLIST TO LOCAL STORAGE
  // ==================================================

  useEffect(() => {
    localStorage.setItem(
      WISHLIST_STORAGE_KEY,
      JSON.stringify(wishlist)
    );
  }, [wishlist]);

  // ==================================================
  // ADD TO WISHLIST
  // ==================================================

  const addToWishlist = (item) => {
    setWishlist((prev) => {
      const alreadyExists = prev.some(
        (wishlistItem) => wishlistItem.id === item.id
      );

      if (alreadyExists) {
        return prev;
      }

      return [...prev, item];
    });
  };

  // ==================================================
  // REMOVE FROM WISHLIST
  // ==================================================

  const removeFromWishlist = (itemId) => {
    setWishlist((prev) =>
      prev.filter((item) => item.id !== itemId)
    );
  };

  // ==================================================
  // TOGGLE WISHLIST
  // ==================================================

  const toggleWishlist = (item) => {
    setWishlist((prev) => {
      const exists = prev.some(
        (wishlistItem) => wishlistItem.id === item.id
      );

      if (exists) {
        return prev.filter(
          (wishlistItem) => wishlistItem.id !== item.id
        );
      }

      return [...prev, item];
    });
  };

  // ==================================================
  // CHECK ITEM
  // ==================================================

  const isInWishlist = (itemId) => {
    return wishlist.some(
      (item) => item.id === itemId
    );
  };

  // ==================================================
  // CLEAR WISHLIST
  // ==================================================

  const clearWishlist = () => {
    setWishlist([]);
  };

  // ==================================================
  // WISHLIST COUNT
  // ==================================================

  const wishlistCount = wishlist.length;

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        wishlistCount,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        isInWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

// ==================================================
// CUSTOM HOOK
// ==================================================

export const useWishlist = () => {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlist must be used inside WishlistProvider"
    );
  }

  return context;
};

