
export const PERMISSIONS = {
  // Dashboard
  DASHBOARD_VIEW: "dashboard.view",

  // Orders / Projects
  ORDERS_VIEW: "orders.view",
  ORDERS_CREATE: "orders.create",
  ORDERS_EDIT: "orders.edit",
  ORDERS_DELETE: "orders.delete",
  ORDERS_ASSIGN: "orders.assign",

  // Customers
  CUSTOMERS_VIEW: "customers.view",
  CUSTOMERS_CREATE: "customers.create",
  CUSTOMERS_EDIT: "customers.edit",
  CUSTOMERS_DELETE: "customers.delete",

  // Enquiries
  ENQUIRIES_VIEW: "enquiries.view",
  ENQUIRIES_MANAGE: "enquiries.manage",

  // Professionals
  PROFESSIONALS_VIEW: "professionals.view",
  PROFESSIONALS_CREATE: "professionals.create",
  PROFESSIONALS_EDIT: "professionals.edit",
  PROFESSIONALS_DELETE: "professionals.delete",
  PROFESSIONALS_ASSIGN: "professionals.assign",

  // Payments
  PAYMENTS_VIEW: "payments.view",
  PAYMENTS_MANAGE: "payments.manage",
  PAYMENTS_REFUND: "payments.refund",

  // Reports
  REPORTS_VIEW: "reports.view",
  REPORTS_EXPORT: "reports.export",

  // Notifications
  NOTIFICATIONS_VIEW: "notifications.view",
  NOTIFICATIONS_MANAGE: "notifications.manage",

  // Staff
  STAFF_VIEW: "staff.view",
  STAFF_INVITE: "staff.invite",
  STAFF_EDIT: "staff.edit",
  STAFF_DELETE: "staff.delete",

  // Roles
  ROLES_VIEW: "roles.view",
  ROLES_CREATE: "roles.create",
  ROLES_EDIT: "roles.edit",
  ROLES_DELETE: "roles.delete",

  // Settings
  SETTINGS_VIEW: "settings.view",
  SETTINGS_MANAGE: "settings.manage",
};


// ------------------------------------------------------
// DEFAULT ROLES
// ------------------------------------------------------

export const DEFAULT_ROLES = {

  SUPER_ADMIN: {
    id: "super_admin",
    name: "Super Admin",
    description: "Full system access",
    permissions: ["*"],
  },

  ADMIN: {
    id: "admin",
    name: "Admin",
    description: "Administrative access",
    permissions: [
      PERMISSIONS.DASHBOARD_VIEW,

      PERMISSIONS.ORDERS_VIEW,
      PERMISSIONS.ORDERS_CREATE,
      PERMISSIONS.ORDERS_EDIT,
      PERMISSIONS.ORDERS_DELETE,
      PERMISSIONS.ORDERS_ASSIGN,

      PERMISSIONS.CUSTOMERS_VIEW,
      PERMISSIONS.CUSTOMERS_CREATE,
      PERMISSIONS.CUSTOMERS_EDIT,
      PERMISSIONS.CUSTOMERS_DELETE,

      PERMISSIONS.ENQUIRIES_VIEW,
      PERMISSIONS.ENQUIRIES_MANAGE,

      PERMISSIONS.PROFESSIONALS_VIEW,
      PERMISSIONS.PROFESSIONALS_CREATE,
      PERMISSIONS.PROFESSIONALS_EDIT,
      PERMISSIONS.PROFESSIONALS_DELETE,
      PERMISSIONS.PROFESSIONALS_ASSIGN,

      PERMISSIONS.PAYMENTS_VIEW,
      PERMISSIONS.PAYMENTS_MANAGE,
      PERMISSIONS.PAYMENTS_REFUND,

      PERMISSIONS.REPORTS_VIEW,
      PERMISSIONS.REPORTS_EXPORT,

      PERMISSIONS.NOTIFICATIONS_VIEW,
      PERMISSIONS.NOTIFICATIONS_MANAGE,

      PERMISSIONS.STAFF_VIEW,
      PERMISSIONS.STAFF_INVITE,
      PERMISSIONS.STAFF_EDIT,

      PERMISSIONS.ROLES_VIEW,
      PERMISSIONS.ROLES_CREATE,
      PERMISSIONS.ROLES_EDIT,

      PERMISSIONS.SETTINGS_VIEW,
      PERMISSIONS.SETTINGS_MANAGE,
    ],
  },

  MANAGER: {
    id: "manager",
    name: "Manager",
    description: "Manage daily operations",
    permissions: [
      PERMISSIONS.DASHBOARD_VIEW,

      PERMISSIONS.ORDERS_VIEW,
      PERMISSIONS.ORDERS_CREATE,
      PERMISSIONS.ORDERS_EDIT,
      PERMISSIONS.ORDERS_ASSIGN,

      PERMISSIONS.CUSTOMERS_VIEW,
      PERMISSIONS.CUSTOMERS_EDIT,

      PERMISSIONS.ENQUIRIES_VIEW,
      PERMISSIONS.ENQUIRIES_MANAGE,

      PERMISSIONS.PROFESSIONALS_VIEW,
      PERMISSIONS.PROFESSIONALS_EDIT,
      PERMISSIONS.PROFESSIONALS_ASSIGN,

      PERMISSIONS.REPORTS_VIEW,

      PERMISSIONS.NOTIFICATIONS_VIEW,
    ],
  },

  SUPPORT_STAFF: {
    id: "support_staff",
    name: "Support Staff",
    description: "Customer and enquiry support",
    permissions: [
      PERMISSIONS.DASHBOARD_VIEW,

      PERMISSIONS.ORDERS_VIEW,
      PERMISSIONS.ORDERS_EDIT,

      PERMISSIONS.CUSTOMERS_VIEW,
      PERMISSIONS.CUSTOMERS_EDIT,

      PERMISSIONS.ENQUIRIES_VIEW,
      PERMISSIONS.ENQUIRIES_MANAGE,

      PERMISSIONS.NOTIFICATIONS_VIEW,
    ],
  },

  OPERATIONS_STAFF: {
    id: "operations_staff",
    name: "Operations Staff",
    description: "Manage orders and professionals",
    permissions: [
      PERMISSIONS.DASHBOARD_VIEW,

      PERMISSIONS.ORDERS_VIEW,
      PERMISSIONS.ORDERS_EDIT,
      PERMISSIONS.ORDERS_ASSIGN,

      PERMISSIONS.CUSTOMERS_VIEW,

      PERMISSIONS.PROFESSIONALS_VIEW,
      PERMISSIONS.PROFESSIONALS_ASSIGN,

      PERMISSIONS.NOTIFICATIONS_VIEW,
    ],
  },

  ACCOUNTANT: {
    id: "accountant",
    name: "Accountant",
    description: "Manage payments and reports",
    permissions: [
      PERMISSIONS.DASHBOARD_VIEW,

      PERMISSIONS.CUSTOMERS_VIEW,

      PERMISSIONS.PAYMENTS_VIEW,
      PERMISSIONS.PAYMENTS_MANAGE,

      PERMISSIONS.REPORTS_VIEW,
      PERMISSIONS.REPORTS_EXPORT,

      PERMISSIONS.NOTIFICATIONS_VIEW,
    ],
  },
};


// ------------------------------------------------------
// GET CURRENT ADMIN / STAFF USER
// ------------------------------------------------------

export const getCurrentAdminUser = () => {
  try {
    const savedUser = localStorage.getItem(
      "bookmyproblem_current_admin"
    );

    if (!savedUser) {
      return null;
    }

    return JSON.parse(savedUser);
  } catch (error) {
    console.error(
      "Current admin user load error:",
      error
    );

    return null;
  }
};


// ------------------------------------------------------
// GET USER PERMISSIONS
// ------------------------------------------------------

export const getUserPermissions = (user = null) => {
  const currentUser =
    user || getCurrentAdminUser();

  if (!currentUser) {
    return [];
  }

  // Super Admin
  if (
    currentUser.role === "super_admin" ||
    currentUser.role === "superadmin"
  ) {
    return ["*"];
  }

  // Custom permissions saved on user
  if (
    Array.isArray(currentUser.permissions)
  ) {
    return currentUser.permissions;
  }

  // Default role permissions
  const role = currentUser.role;

  const roleData = Object.values(
    DEFAULT_ROLES
  ).find(
    (item) => item.id === role
  );

  return roleData?.permissions || [];
};


// ------------------------------------------------------
// CHECK PERMISSION
// ------------------------------------------------------

export const hasPermission = (
  permission,
  user = null
) => {
  const permissions =
    getUserPermissions(user);

  if (permissions.includes("*")) {
    return true;
  }

  return permissions.includes(permission);
};


// ------------------------------------------------------
// CHECK ANY PERMISSION
// ------------------------------------------------------

export const hasAnyPermission = (
  permissionList,
  user = null
) => {
  if (!Array.isArray(permissionList)) {
    return false;
  }

  return permissionList.some(
    (permission) =>
      hasPermission(permission, user)
  );
};


// ------------------------------------------------------
// CHECK ALL PERMISSIONS
// ------------------------------------------------------

export const hasAllPermissions = (
  permissionList,
  user = null
) => {
  if (!Array.isArray(permissionList)) {
    return false;
  }

  return permissionList.every(
    (permission) =>
      hasPermission(permission, user)
  );
};


// ------------------------------------------------------
// CHECK ROLE
// ------------------------------------------------------

export const hasRole = (
  role,
  user = null
) => {
  const currentUser =
    user || getCurrentAdminUser();

  if (!currentUser) {
    return false;
  }

  return currentUser.role === role;
};


// ------------------------------------------------------
// GET ROLE NAME
// ------------------------------------------------------

export const getRoleName = (
  role
) => {
  const roleData = Object.values(
    DEFAULT_ROLES
  ).find(
    (item) => item.id === role
  );

  return (
    roleData?.name ||
    role ||
    "Staff"
  );
};

