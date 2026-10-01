
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import {
  getCurrentAdmin,
  isAdminAuthenticated,
} from "../utils/auth";

const AdminRoute = () => {
  const currentAdmin = getCurrentAdmin();
  const authenticated = isAdminAuthenticated();

  console.log(
    "========== ADMIN ROUTE =========="
  );

  console.log(
    "Current Admin:",
    currentAdmin
  );

  console.log(
    "Authenticated:",
    authenticated
  );

  console.log(
    "Role:",
    currentAdmin?.role
  );

  console.log(
    "Is Authenticated:",
    currentAdmin?.isAuthenticated
  );

  console.log(
    "================================="
  );

  // Login nahi hai
  if (!authenticated) {
    console.log(
      "ADMIN ROUTE → REDIRECTING TO /admin-login"
    );

    return (
      <Navigate
        to="/admin-login"
        replace
      />
    );
  }

  // Login successful
  console.log(
    "ADMIN ROUTE → ACCESS GRANTED"
  );

  return <Outlet />;
};

export default AdminRoute;

