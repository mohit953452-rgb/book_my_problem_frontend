
const ADMIN_EMAIL = "admin@bookmyproblem.com";
const ADMIN_PASSWORD = "Admin@123";

const ADMIN_STORAGE_KEY =
  "bookmyproblem_admin";

const CURRENT_ADMIN_STORAGE_KEY =
  "bookmyproblem_current_admin";

// =====================================================
// LOGIN ADMIN
// =====================================================

export const loginAdmin = (email, password) => {
  const normalizedEmail = String(email || "")
    .trim()
    .toLowerCase();

  const enteredPassword = String(
    password || ""
  );

  console.log("========== ADMIN LOGIN CHECK ==========");
  console.log(
    "Entered Email:",
    normalizedEmail
  );
  console.log(
    "Expected Email:",
    ADMIN_EMAIL
  );
  console.log(
    "Email Match:",
    normalizedEmail === ADMIN_EMAIL
  );
  console.log(
    "Password Length:",
    enteredPassword.length
  );
  console.log(
    "Expected Password Length:",
    ADMIN_PASSWORD.length
  );
  console.log(
    "Password Match:",
    enteredPassword === ADMIN_PASSWORD
  );
  console.log("=======================================");

  // ===================================================
  // CHECK LOGIN
  // ===================================================

  if (
    normalizedEmail !== ADMIN_EMAIL ||
    enteredPassword !== ADMIN_PASSWORD
  ) {
    return {
      success: false,
      message: "Invalid email or password.",
    };
  }

  // ===================================================
  // ADMIN USER
  // ===================================================

  const adminUser = {
    id: "ADM-1001",
    name: "Administrator",
    email: ADMIN_EMAIL,
    role: "super_admin",
    isAuthenticated: true,
    permissions: ["*"],
  };

  // ===================================================
  // SAVE ADMIN
  // ===================================================

  localStorage.setItem(
    ADMIN_STORAGE_KEY,
    JSON.stringify(adminUser)
  );

  localStorage.setItem(
    CURRENT_ADMIN_STORAGE_KEY,
    JSON.stringify(adminUser)
  );

  console.log(
    "ADMIN LOGIN SUCCESS:",
    adminUser
  );

  console.log(
    "CURRENT ADMIN SAVED:",
    localStorage.getItem(
      CURRENT_ADMIN_STORAGE_KEY
    )
  );

  return {
    success: true,
    user: adminUser,
  };
};

// =====================================================
// GET CURRENT ADMIN
// =====================================================

export const getCurrentAdmin = () => {
  try {
    const currentAdmin =
      localStorage.getItem(
        CURRENT_ADMIN_STORAGE_KEY
      );

    if (currentAdmin) {
      return JSON.parse(currentAdmin);
    }

    const admin =
      localStorage.getItem(
        ADMIN_STORAGE_KEY
      );

    if (admin) {
      return JSON.parse(admin);
    }

    return null;
  } catch (error) {
    console.error(
      "GET CURRENT ADMIN ERROR:",
      error
    );

    return null;
  }
};

// =====================================================
// CHECK ADMIN AUTHENTICATION
// =====================================================

export const isAdminAuthenticated = () => {
  const admin = getCurrentAdmin();

  console.log(
    "ADMIN AUTH CHECK:",
    admin
  );

  if (!admin) {
    return false;
  }

  const allowedRoles = [
    "super_admin",
    "admin",
    "manager",
    "support_staff",
    "operations_staff",
    "accountant",
  ];

  return (
    admin.isAuthenticated === true &&
    allowedRoles.includes(admin.role)
  );
};

// =====================================================
// LOGOUT ADMIN
// =====================================================

export const logoutAdmin = () => {
  localStorage.removeItem(
    ADMIN_STORAGE_KEY
  );

  localStorage.removeItem(
    CURRENT_ADMIN_STORAGE_KEY
  );
};

