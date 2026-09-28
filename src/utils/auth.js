const ADMIN_EMAIL = "admin@bookmyproblem.com";
const ADMIN_PASSWORD = "Admin@123";

export const loginAdmin = (email, password) => {
  if (
    email.trim().toLowerCase() === ADMIN_EMAIL &&
    password === ADMIN_PASSWORD
  ) {
    localStorage.setItem(
      "bookmyproblem_admin",
      JSON.stringify({
        email: ADMIN_EMAIL,
        role: "admin",
        isAuthenticated: true,
      })
    );

    return { success: true };
  }

  return {
    success: false,
    message: "Invalid admin email or password.",
  };
};

export const isAdminAuthenticated = () => {
  const admin = localStorage.getItem("bookmyproblem_admin");

  if (!admin) return false;

  try {
    const user = JSON.parse(admin);

    return (
      user.role === "admin" &&
      user.isAuthenticated === true
    );
  } catch {
    return false;
  }
};

export const logoutAdmin = () => {
  localStorage.removeItem("bookmyproblem_admin");
};