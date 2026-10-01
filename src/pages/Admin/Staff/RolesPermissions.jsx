
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaArrowLeft,
  FaPlus,
  FaShieldAlt,
  FaEdit,
  FaTrash,
  FaSave,
  FaTimes,
  FaCheckCircle,
  FaUsers,
  FaLock,
  FaSearch,
} from "react-icons/fa";

import {
  DEFAULT_ROLES,
  PERMISSIONS,
} from "../../../utils/permissions";


// ======================================================
// STORAGE
// ======================================================

const ROLES_STORAGE_KEY =
  "bookmyproblem_roles";


// ======================================================
// PERMISSION GROUPS
// ======================================================

const permissionGroups = [
  {
    id: "dashboard",
    title: "Dashboard",
    description: "Dashboard access",
    permissions: [
      {
        key: PERMISSIONS.DASHBOARD_VIEW,
        label: "View Dashboard",
      },
    ],
  },

  {
    id: "orders",
    title: "Projects / Orders",
    description: "Manage customer projects and orders",
    permissions: [
      {
        key: PERMISSIONS.ORDERS_VIEW,
        label: "View Orders",
      },
      {
        key: PERMISSIONS.ORDERS_CREATE,
        label: "Create Orders",
      },
      {
        key: PERMISSIONS.ORDERS_EDIT,
        label: "Edit Orders",
      },
      {
        key: PERMISSIONS.ORDERS_DELETE,
        label: "Delete Orders",
      },
      {
        key: PERMISSIONS.ORDERS_ASSIGN,
        label: "Assign Orders",
      },
    ],
  },

  {
    id: "customers",
    title: "Customers",
    description: "Manage customer accounts",
    permissions: [
      {
        key: PERMISSIONS.CUSTOMERS_VIEW,
        label: "View Customers",
      },
      {
        key: PERMISSIONS.CUSTOMERS_CREATE,
        label: "Create Customers",
      },
      {
        key: PERMISSIONS.CUSTOMERS_EDIT,
        label: "Edit Customers",
      },
      {
        key: PERMISSIONS.CUSTOMERS_DELETE,
        label: "Delete Customers",
      },
    ],
  },

  {
    id: "enquiries",
    title: "Enquiries",
    description: "Manage customer enquiries",
    permissions: [
      {
        key: PERMISSIONS.ENQUIRIES_VIEW,
        label: "View Enquiries",
      },
      {
        key: PERMISSIONS.ENQUIRIES_MANAGE,
        label: "Manage Enquiries",
      },
    ],
  },

  {
    id: "professionals",
    title: "Professionals",
    description: "Manage service professionals",
    permissions: [
      {
        key: PERMISSIONS.PROFESSIONALS_VIEW,
        label: "View Professionals",
      },
      {
        key: PERMISSIONS.PROFESSIONALS_CREATE,
        label: "Create Professionals",
      },
      {
        key: PERMISSIONS.PROFESSIONALS_EDIT,
        label: "Edit Professionals",
      },
      {
        key: PERMISSIONS.PROFESSIONALS_DELETE,
        label: "Delete Professionals",
      },
      {
        key: PERMISSIONS.PROFESSIONALS_ASSIGN,
        label: "Assign Professionals",
      },
    ],
  },

  {
    id: "payments",
    title: "Payments",
    description: "Manage payments and refunds",
    permissions: [
      {
        key: PERMISSIONS.PAYMENTS_VIEW,
        label: "View Payments",
      },
      {
        key: PERMISSIONS.PAYMENTS_MANAGE,
        label: "Manage Payments",
      },
      {
        key: PERMISSIONS.PAYMENTS_REFUND,
        label: "Process Refunds",
      },
    ],
  },

  {
    id: "reports",
    title: "Reports",
    description: "Access business reports",
    permissions: [
      {
        key: PERMISSIONS.REPORTS_VIEW,
        label: "View Reports",
      },
      {
        key: PERMISSIONS.REPORTS_EXPORT,
        label: "Export Reports",
      },
    ],
  },

  {
    id: "notifications",
    title: "Notifications",
    description: "Manage system notifications",
    permissions: [
      {
        key: PERMISSIONS.NOTIFICATIONS_VIEW,
        label: "View Notifications",
      },
      {
        key: PERMISSIONS.NOTIFICATIONS_MANAGE,
        label: "Manage Notifications",
      },
    ],
  },

  {
    id: "staff",
    title: "Staff Management",
    description: "Manage staff accounts",
    permissions: [
      {
        key: PERMISSIONS.STAFF_VIEW,
        label: "View Staff",
      },
      {
        key: PERMISSIONS.STAFF_INVITE,
        label: "Invite Staff",
      },
      {
        key: PERMISSIONS.STAFF_EDIT,
        label: "Edit Staff",
      },
      {
        key: PERMISSIONS.STAFF_DELETE,
        label: "Delete Staff",
      },
    ],
  },

  {
    id: "roles",
    title: "Roles & Permissions",
    description: "Manage roles and access",
    permissions: [
      {
        key: PERMISSIONS.ROLES_VIEW,
        label: "View Roles",
      },
      {
        key: PERMISSIONS.ROLES_CREATE,
        label: "Create Roles",
      },
      {
        key: PERMISSIONS.ROLES_EDIT,
        label: "Edit Roles",
      },
      {
        key: PERMISSIONS.ROLES_DELETE,
        label: "Delete Roles",
      },
    ],
  },

  {
    id: "settings",
    title: "Settings",
    description: "Manage system settings",
    permissions: [
      {
        key: PERMISSIONS.SETTINGS_VIEW,
        label: "View Settings",
      },
      {
        key: PERMISSIONS.SETTINGS_MANAGE,
        label: "Manage Settings",
      },
    ],
  },
];


// ======================================================
// ROLE HELPERS
// ======================================================

const getRoleLabel = (role) => {
  return role?.name || "Custom Role";
};


const getSavedRoles = () => {
  try {
    const savedRoles =
      localStorage.getItem(
        ROLES_STORAGE_KEY
      );

    if (!savedRoles) {
      return [];
    }

    const parsedRoles =
      JSON.parse(savedRoles);

    return Array.isArray(parsedRoles)
      ? parsedRoles
      : [];
  } catch (error) {
    console.error(
      "Roles load error:",
      error
    );

    return [];
  }
};


// ======================================================
// MAIN COMPONENT
// ======================================================

const RolesPermissions = () => {

  // ----------------------------------------------------
  // BUILT-IN ROLES
  // ----------------------------------------------------

  const defaultRoleList = useMemo(() => {
    return Object.values(DEFAULT_ROLES);
  }, []);


  // ----------------------------------------------------
  // CUSTOM ROLES
  // ----------------------------------------------------

  const [customRoles, setCustomRoles] =
    useState(getSavedRoles);


  // ----------------------------------------------------
  // SELECTED ROLE
  // ----------------------------------------------------

  const [selectedRoleId, setSelectedRoleId] =
    useState(
      defaultRoleList[0]?.id ||
        ""
    );


  // ----------------------------------------------------
  // SEARCH
  // ----------------------------------------------------

  const [searchTerm, setSearchTerm] =
    useState("");


  // ----------------------------------------------------
  // EDIT MODE
  // ----------------------------------------------------

  const [isEditing, setIsEditing] =
    useState(false);


  // ----------------------------------------------------
  // CREATE MODE
  // ----------------------------------------------------

  const [isCreating, setIsCreating] =
    useState(false);


  // ----------------------------------------------------
  // ROLE NAME
  // ----------------------------------------------------

  const [roleName, setRoleName] =
    useState("");


  // ----------------------------------------------------
  // ROLE DESCRIPTION
  // ----------------------------------------------------

  const [roleDescription, setRoleDescription] =
    useState("");


  // ----------------------------------------------------
  // EDIT PERMISSIONS
  // ----------------------------------------------------

  const [selectedPermissions, setSelectedPermissions] =
    useState([]);


  // ----------------------------------------------------
  // MESSAGE
  // ----------------------------------------------------

  const [message, setMessage] =
    useState("");


  // ====================================================
  // ALL ROLES
  // ====================================================

  const allRoles = useMemo(() => {
    return [
      ...defaultRoleList,
      ...customRoles,
    ];
  }, [
    defaultRoleList,
    customRoles,
  ]);


  // ====================================================
  // FILTERED ROLES
  // ====================================================

  const filteredRoles = useMemo(() => {

    const search =
      searchTerm
        .trim()
        .toLowerCase();

    if (!search) {
      return allRoles;
    }

    return allRoles.filter(
      (role) =>
        role.name
          .toLowerCase()
          .includes(search) ||
        role.description
          ?.toLowerCase()
          .includes(search)
    );

  }, [
    allRoles,
    searchTerm,
  ]);


  // ====================================================
  // CURRENT ROLE
  // ====================================================

  const selectedRole = allRoles.find(
    (role) =>
      role.id === selectedRoleId
  );


  // ====================================================
  // SELECT ROLE
  // ====================================================

  const handleSelectRole = (role) => {

    setSelectedRoleId(role.id);

    setRoleName(
      role.name || ""
    );

    setRoleDescription(
      role.description || ""
    );

    setSelectedPermissions(
      role.permissions?.includes("*")
        ? ["*"]
        : [
            ...(role.permissions || []),
          ]
    );

    setIsEditing(false);
    setIsCreating(false);
    setMessage("");
  };


  // ====================================================
  // START CREATE
  // ====================================================

  const handleStartCreate = () => {

    setIsCreating(true);
    setIsEditing(false);

    setSelectedRoleId("");

    setRoleName("");

    setRoleDescription("");

    setSelectedPermissions([]);

    setMessage("");
  };


  // ====================================================
  // CANCEL EDIT
  // ====================================================

  const handleCancel = () => {

    if (selectedRole) {
      handleSelectRole(
        selectedRole
      );
    }

    setIsCreating(false);
    setIsEditing(false);
    setMessage("");
  };


  // ====================================================
  // START EDIT
  // ====================================================

  const handleStartEdit = () => {

    if (!selectedRole) {
      return;
    }

    setRoleName(
      selectedRole.name
    );

    setRoleDescription(
      selectedRole.description || ""
    );

    setSelectedPermissions(
      selectedRole.permissions?.includes("*")
        ? ["*"]
        : [
            ...(selectedRole.permissions || []),
          ]
    );

    setIsEditing(true);
    setIsCreating(false);
    setMessage("");
  };


  // ====================================================
  // TOGGLE PERMISSION
  // ====================================================

  const handleTogglePermission = (
    permission
  ) => {

    if (
      selectedPermissions.includes("*")
    ) {
      return;
    }

    setSelectedPermissions(
      (previousPermissions) => {

        if (
          previousPermissions.includes(
            permission
          )
        ) {
          return previousPermissions.filter(
            (item) =>
              item !== permission
          );
        }

        return [
          ...previousPermissions,
          permission,
        ];
      }
    );
  };


  // ====================================================
  // TOGGLE GROUP
  // ====================================================

  const handleToggleGroup = (
    group
  ) => {

    if (
      selectedPermissions.includes("*")
    ) {
      return;
    }

    const groupPermissions =
      group.permissions.map(
        (item) => item.key
      );

    const hasAll =
      groupPermissions.every(
        (permission) =>
          selectedPermissions.includes(
            permission
          )
      );

    if (hasAll) {

      setSelectedPermissions(
        (previousPermissions) =>
          previousPermissions.filter(
            (permission) =>
              !groupPermissions.includes(
                permission
              )
          )
      );

    } else {

      setSelectedPermissions(
        (previousPermissions) => {

          const combined = [
            ...previousPermissions,
            ...groupPermissions,
          ];

          return [
            ...new Set(combined),
          ];
        }
      );
    }
  };


  // ====================================================
  // CHECK GROUP
  // ====================================================

  const isGroupSelected = (
    group
  ) => {

    if (
      selectedPermissions.includes("*")
    ) {
      return true;
    }

    return group.permissions.every(
      (permission) =>
        selectedPermissions.includes(
          permission.key
        )
    );
  };


  // ====================================================
  // SAVE CUSTOM ROLE
  // ====================================================

  const saveCustomRole = () => {

    if (!roleName.trim()) {
      setMessage(
        "Please enter a role name."
      );

      return;
    }

    if (
      selectedPermissions.length === 0
    ) {
      setMessage(
        "Please select at least one permission."
      );

      return;
    }


    const newRole = {
      id:
        `custom_${Date.now()}`,

      name:
        roleName.trim(),

      description:
        roleDescription.trim() ||
        "Custom role",

      permissions:
        selectedPermissions,

      custom: true,
    };


    const updatedRoles = [
      ...customRoles,
      newRole,
    ];


    setCustomRoles(
      updatedRoles
    );


    localStorage.setItem(
      ROLES_STORAGE_KEY,
      JSON.stringify(
        updatedRoles
      )
    );


    setSelectedRoleId(
      newRole.id
    );

    setIsCreating(false);

    setIsEditing(false);

    setMessage(
      "Custom role created successfully."
    );
  };


  // ====================================================
  // UPDATE ROLE
  // ====================================================

  const updateRole = () => {

    if (!selectedRole) {
      return;
    }


    // Built-in role
    const isBuiltIn =
      defaultRoleList.some(
        (role) =>
          role.id ===
          selectedRole.id
      );


    // --------------------------------------------------
    // BUILT-IN ROLE
    // --------------------------------------------------

    if (isBuiltIn) {

      setMessage(
        "Default roles are protected. Create a custom role instead."
      );

      setIsEditing(false);

      return;
    }


    // --------------------------------------------------
    // CUSTOM ROLE
    // --------------------------------------------------

    if (!roleName.trim()) {

      setMessage(
        "Please enter a role name."
      );

      return;
    }


    if (
      selectedPermissions.length === 0
    ) {

      setMessage(
        "Please select at least one permission."
      );

      return;
    }


    const updatedRoles =
      customRoles.map(
        (role) => {

          if (
            role.id !==
            selectedRole.id
          ) {
            return role;
          }

          return {
            ...role,

            name:
              roleName.trim(),

            description:
              roleDescription.trim() ||
              "Custom role",

            permissions:
              selectedPermissions,
          };
        }
      );


    setCustomRoles(
      updatedRoles
    );


    localStorage.setItem(
      ROLES_STORAGE_KEY,
      JSON.stringify(
        updatedRoles
      )
    );


    setIsEditing(false);

    setMessage(
      "Role updated successfully."
    );
  };


  // ====================================================
  // DELETE CUSTOM ROLE
  // ====================================================

  const deleteRole = () => {

    if (!selectedRole) {
      return;
    }


    const isBuiltIn =
      defaultRoleList.some(
        (role) =>
          role.id ===
          selectedRole.id
      );


    if (isBuiltIn) {

      setMessage(
        "Default roles cannot be deleted."
      );

      return;
    }


    const confirmed =
      window.confirm(
        `Delete "${selectedRole.name}" role?`
      );


    if (!confirmed) {
      return;
    }


    const updatedRoles =
      customRoles.filter(
        (role) =>
          role.id !==
          selectedRole.id
      );


    setCustomRoles(
      updatedRoles
    );


    localStorage.setItem(
      ROLES_STORAGE_KEY,
      JSON.stringify(
        updatedRoles
      )
    );


    const firstRole =
      defaultRoleList[0];

    if (firstRole) {
      handleSelectRole(
        firstRole
      );
    }


    setMessage(
      "Role deleted successfully."
    );
  };


  // ====================================================
  // PERMISSION COUNT
  // ====================================================

  const permissionCount =
    selectedPermissions.includes("*")
      ? "All"
      : selectedPermissions.length;


  // ====================================================
  // RENDER
  // ====================================================

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">

      <div className="max-w-7xl mx-auto">

        {/* ==================================================
            HEADER
        ================================================== */}

        <div className="mb-8">

          <Link
            to="/admin/staff"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#072144] transition mb-5"
          >
            <FaArrowLeft />
            Back to Staff Management
          </Link>


          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

            <div>

              <h1 className="text-2xl sm:text-3xl font-bold text-[#072144]">
                Roles & Permissions
              </h1>

              <p className="text-gray-500 mt-2">
                Control what each role can view and manage.
              </p>

            </div>


            <button
              type="button"
              onClick={handleStartCreate}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#072144] text-white font-semibold hover:bg-[#FCBC14] hover:text-[#072144] transition"
            >
              <FaPlus />
              Create Custom Role
            </button>

          </div>

        </div>


        {/* ==================================================
            SUCCESS / INFO MESSAGE
        ================================================== */}

        {message && (
          <div className="mb-6 bg-blue-50 border border-blue-200 text-blue-700 rounded-xl px-4 py-3 text-sm font-medium">
            {message}
          </div>
        )}


        {/* ==================================================
            MAIN GRID
        ================================================== */}

        <div className="grid lg:grid-cols-[320px_1fr] gap-6">


          {/* ==================================================
              LEFT ROLE LIST
          ================================================== */}

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-fit">

            <div className="p-5 border-b border-gray-100">

              <h2 className="font-bold text-[#072144]">
                Roles
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Select a role to manage access.
              </p>


              <div className="relative mt-4">

                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(event) =>
                    setSearchTerm(
                      event.target.value
                    )
                  }
                  placeholder="Search roles..."
                  className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-200 text-sm outline-none focus:border-[#FCBC14]"
                />

              </div>

            </div>


            <div className="p-3 max-h-[650px] overflow-y-auto">

              {filteredRoles.map(
                (role) => {

                  const selected =
                    role.id ===
                    selectedRoleId;

                  return (
                    <button
                      type="button"
                      key={role.id}
                      onClick={() =>
                        handleSelectRole(
                          role
                        )
                      }
                      className={`w-full text-left p-4 rounded-xl mb-2 transition ${
                        selected
                          ? "bg-[#072144] text-white"
                          : "hover:bg-gray-50 text-[#072144]"
                      }`}
                    >

                      <div className="flex items-start gap-3">

                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                            selected
                              ? "bg-[#FCBC14] text-[#072144]"
                              : "bg-gray-100 text-[#072144]"
                          }`}
                        >
                          <FaShieldAlt />
                        </div>


                        <div className="min-w-0">

                          <p className="font-semibold truncate">
                            {getRoleLabel(
                              role
                            )}
                          </p>

                          <p
                            className={`text-xs mt-1 ${
                              selected
                                ? "text-white/70"
                                : "text-gray-500"
                            }`}
                          >
                            {role.description ||
                              "Custom role"}
                          </p>


                          <div className="flex items-center gap-2 mt-2">

                            <span
                              className={`text-xs ${
                                selected
                                  ? "text-white/80"
                                  : "text-gray-500"
                              }`}
                            >
                              {role.permissions?.includes(
                                "*"
                              )
                                ? "Full Access"
                                : `${role.permissions?.length || 0} permissions`}
                            </span>

                            {role.custom && (
                              <span
                                className={`text-[10px] px-2 py-0.5 rounded-full ${
                                  selected
                                    ? "bg-white/10 text-white"
                                    : "bg-yellow-50 text-yellow-700"
                                }`}
                              >
                                Custom
                              </span>
                            )}

                          </div>

                        </div>

                      </div>

                    </button>
                  );
                }
              )}

            </div>

          </div>


          {/* ==================================================
              RIGHT CONTENT
          ================================================== */}

          <div className="space-y-6">


            {/* ==================================================
                ROLE HEADER
            ================================================== */}

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-7">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-xl bg-[#072144] text-[#FCBC14] flex items-center justify-center text-xl">
                    <FaShieldAlt />
                  </div>


                  <div>

                    <p className="text-sm text-gray-500">
                      {isCreating
                        ? "New Role"
                        : "Selected Role"}
                    </p>

                    <h2 className="text-2xl font-bold text-[#072144]">
                      {isCreating
                        ? "Create Custom Role"
                        : selectedRole?.name ||
                          "Role"}
                    </h2>

                  </div>

                </div>


                {!isCreating && selectedRole && (

                  <div className="flex flex-wrap gap-2">

                    {!selectedRole.custom && (
                      <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 text-gray-600 text-sm font-semibold">
                        <FaLock />
                        Default Role
                      </span>
                    )}


                    {selectedRole.custom && (
                      <>
                        <button
                          type="button"
                          onClick={
                            handleStartEdit
                          }
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 text-[#072144] font-semibold text-sm hover:border-[#FCBC14] transition"
                        >
                          <FaEdit />
                          Edit
                        </button>


                        <button
                          type="button"
                          onClick={
                            deleteRole
                          }
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-red-50 text-red-600 font-semibold text-sm hover:bg-red-100 transition"
                        >
                          <FaTrash />
                          Delete
                        </button>
                      </>
                    )}

                  </div>

                )}

              </div>

            </div>


            {/* ==================================================
                ROLE DETAILS
            ================================================== */}

            {(isCreating || isEditing) && (

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-7">

                <div className="grid md:grid-cols-2 gap-5">

                  {/* ROLE NAME */}

                  <div>

                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Role Name
                    </label>

                    <input
                      type="text"
                      value={roleName}
                      onChange={(event) =>
                        setRoleName(
                          event.target.value
                        )
                      }
                      placeholder="Example: Sales Manager"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-[#FCBC14] focus:ring-2 focus:ring-[#FCBC14]/20"
                    />

                  </div>


                  {/* DESCRIPTION */}

                  <div>

                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Description
                    </label>

                    <input
                      type="text"
                      value={
                        roleDescription
                      }
                      onChange={(event) =>
                        setRoleDescription(
                          event.target.value
                        )
                      }
                      placeholder="Describe this role"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-[#FCBC14] focus:ring-2 focus:ring-[#FCBC14]/20"
                    />

                  </div>

                </div>

              </div>

            )}


            {/* ==================================================
                PERMISSION SUMMARY
            ================================================== */}

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-7">

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

                <div>

                  <h2 className="text-xl font-bold text-[#072144]">
                    Permissions
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    Select the features this role can access.
                  </p>

                </div>


                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-[#072144] font-semibold text-sm w-fit">
                  <FaCheckCircle className="text-green-500" />

                  {permissionCount === "All"
                    ? "Full Access"
                    : `${permissionCount} Selected`}
                </div>

              </div>


              {/* ==================================================
                  PERMISSION GROUPS
              ================================================== */}

              <div className="space-y-4">

                {permissionGroups.map(
                  (group) => {

                    const groupSelected =
                      isGroupSelected(
                        group
                      );

                    return (
                      <div
                        key={group.id}
                        className="border border-gray-200 rounded-xl overflow-hidden"
                      >

                        {/* GROUP HEADER */}

                        <div className="bg-gray-50 px-4 sm:px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">

                          <div>

                            <h3 className="font-bold text-[#072144]">
                              {group.title}
                            </h3>

                            <p className="text-xs text-gray-500 mt-1">
                              {group.description}
                            </p>

                          </div>


                          {(isCreating ||
                            isEditing) && (
                            <button
                              type="button"
                              onClick={() =>
                                handleToggleGroup(
                                  group
                                )
                              }
                              className={`text-xs font-semibold px-3 py-2 rounded-lg transition ${
                                groupSelected
                                  ? "bg-[#072144] text-white"
                                  : "bg-white border border-gray-200 text-gray-600 hover:border-[#FCBC14]"
                              }`}
                            >
                              {groupSelected
                                ? "Unselect All"
                                : "Select All"}
                            </button>
                          )}

                        </div>


                        {/* PERMISSIONS */}

                        <div className="p-4 sm:p-5 grid sm:grid-cols-2 gap-3">

                          {group.permissions.map(
                            (permission) => {

                              const checked =
                                selectedPermissions.includes(
                                  "*"
                                ) ||
                                selectedPermissions.includes(
                                  permission.key
                                );

                              return (
                                <label
                                  key={
                                    permission.key
                                  }
                                  className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition ${
                                    checked
                                      ? "border-green-200 bg-green-50"
                                      : "border-gray-100 bg-gray-50 hover:border-gray-200"
                                  } ${
                                    !(
                                      isCreating ||
                                      isEditing
                                    )
                                      ? "cursor-default"
                                      : ""
                                  }`}
                                >

                                  <input
                                    type="checkbox"
                                    checked={
                                      checked
                                    }
                                    disabled={
                                      !(
                                        isCreating ||
                                        isEditing
                                      ) ||
                                      selectedPermissions.includes(
                                        "*"
                                      )
                                    }
                                    onChange={() =>
                                      handleTogglePermission(
                                        permission.key
                                      )
                                    }
                                    className="w-4 h-4 accent-[#072144]"
                                  />

                                  <span
                                    className={`text-sm ${
                                      checked
                                        ? "font-semibold text-green-700"
                                        : "text-gray-700"
                                    }`}
                                  >
                                    {
                                      permission.label
                                    }
                                  </span>

                                  {checked && (
                                    <FaCheckCircle className="ml-auto text-green-500 text-sm" />
                                  )}

                                </label>
                              );
                            }
                          )}

                        </div>

                      </div>
                    );
                  }
                )}

              </div>


              {/* ==================================================
                  ACTION BUTTONS
              ================================================== */}

              {(isCreating ||
                isEditing) && (

                <div className="flex flex-col sm:flex-row gap-3 mt-7 pt-6 border-t border-gray-100">

                  <button
                    type="button"
                    onClick={
                      handleCancel
                    }
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-gray-200 text-[#072144] font-semibold hover:border-[#FCBC14] transition"
                  >
                    <FaTimes />
                    Cancel
                  </button>


                  <button
                    type="button"
                    onClick={
                      isCreating
                        ? saveCustomRole
                        : updateRole
                    }
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#072144] text-white font-semibold hover:bg-[#FCBC14] hover:text-[#072144] transition"
                  >
                    <FaSave />

                    {isCreating
                      ? "Create Role"
                      : "Save Changes"}
                  </button>

                </div>

              )}

            </div>


            {/* ==================================================
                INFO CARD
            ================================================== */}

            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">

              <div className="flex gap-3">

                <FaUsers className="text-blue-500 mt-1 flex-shrink-0" />

                <div>

                  <h3 className="font-bold text-blue-800">
                    How Roles Work
                  </h3>

                  <p className="text-sm text-blue-700 mt-1 leading-6">
                    A role controls which areas of the
                    Book My Problem admin panel a staff
                    member can access. The same role can
                    be assigned to multiple staff members.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default RolesPermissions;

