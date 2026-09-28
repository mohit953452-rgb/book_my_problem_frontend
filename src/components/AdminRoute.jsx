import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAdminAuthenticated } from "../utils/auth";

const AdminRoute = () => {
  const authenticated = isAdminAuthenticated();

  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default AdminRoute;