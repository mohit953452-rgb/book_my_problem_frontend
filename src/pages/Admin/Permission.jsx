
import React from "react";

import {
  hasPermission,
  hasAnyPermission,
  hasAllPermissions,
} from "../../utils/permissions";


// ======================================================
// SINGLE PERMISSION
// ======================================================

export const Permission = ({
  permission,
  children,
  fallback = null,
}) => {
  const allowed =
    hasPermission(permission);

  if (!allowed) {
    return fallback;
  }

  return children;
};


// ======================================================
// ANY PERMISSION
// ======================================================

export const AnyPermission = ({
  permissions,
  children,
  fallback = null,
}) => {
  const allowed =
    hasAnyPermission(permissions);

  if (!allowed) {
    return fallback;
  }

  return children;
};


// ======================================================
// ALL PERMISSIONS
// ======================================================

export const AllPermissions = ({
  permissions,
  children,
  fallback = null,
}) => {
  const allowed =
    hasAllPermissions(permissions);

  if (!allowed) {
    return fallback;
  }

  return children;
};

export default Permission;

