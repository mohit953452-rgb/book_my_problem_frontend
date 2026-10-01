
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import {
  getCurrentAdminUser,
  hasPermission,
} from "../utils/permissions";

const PermissionRoute = ({ permission }) => {
  // Current logged-in admin/staff user
  const currentUser = getCurrentAdminUser();

  // Agar user hi nahi mila
  if (!currentUser) {
    console.log("PERMISSION ROUTE: No current admin user found");

    return <Navigate to="/admin-login" replace />;
  }

  // Explicitly currentUser pass kar rahe hain
  const allowed = hasPermission(
    permission,
    currentUser
  );

  console.log("========== PERMISSION ROUTE ==========");
  console.log("Current User:", currentUser);
  console.log("Role:", currentUser.role);
  console.log("User Permissions:", currentUser.permissions);
  console.log("Required Permission:", permission);
  console.log("Allowed:", allowed);
  console.log("======================================");

  // Permission nahi hai
  if (!allowed) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">

          {/* Icon */}
          <div className="w-16 h-16 mx-auto rounded-full bg-red-50 flex items-center justify-center">
            <span className="text-red-500 text-2xl font-bold">
              !
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl font-bold text-[#072144] mt-5">
            Access Denied
          </h1>

          {/* Message */}
          <p className="text-gray-500 mt-2">
            You do not have permission to access this page.
          </p>

          {/* Debug Information */}
          <div className="mt-5 bg-gray-50 rounded-xl p-4 text-left text-sm">
            <p>
              <span className="font-semibold">
                User:
              </span>{" "}
              {currentUser.name || "Unknown"}
            </p>

            <p className="mt-2">
              <span className="font-semibold">
                Role:
              </span>{" "}
              {currentUser.role || "No role"}
            </p>

            <p className="mt-2">
              <span className="font-semibold">
                Required:
              </span>{" "}
              {permission || "No permission"}
            </p>

            <p className="mt-2">
              <span className="font-semibold">
                Allowed:
              </span>{" "}
              {allowed ? "Yes" : "No"}
            </p>
          </div>

          {/* Go Back */}
          <button
            type="button"
            onClick={() => window.history.back()}
            className="
              mt-6
              px-6
              py-3
              rounded-lg
              bg-[#072144]
              text-white
              font-semibold
              hover:bg-[#FCBC14]
              hover:text-[#072144]
              transition
            "
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Permission hai
  return <Outlet />;
};

export default PermissionRoute;

