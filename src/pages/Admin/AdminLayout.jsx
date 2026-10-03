import React, {
  useEffect,
  useState,
} from "react";

import { Outlet } from "react-router-dom";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminNavbar from "../../components/admin/AdminNavbar";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [sidebarCollapsed, setSidebarCollapsed] =
    useState(false);

  useEffect(() => {
    const openSidebar = () => {
      setSidebarOpen(true);
    };

    window.addEventListener(
      "openAdminSidebar",
      openSidebar
    );

    return () => {
      window.removeEventListener(
        "openAdminSidebar",
        openSidebar
      );
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">

      {/* SIDEBAR */}
      <AdminSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
      />

      {/* MAIN AREA */}
      <div
        className={`
          min-h-screen
          transition-all
          duration-300
          ${
            sidebarCollapsed
              ? "lg:ml-20"
              : "lg:ml-64"
          }
        `}
      >

        {/* NAVBAR */}
        <AdminNavbar
          setSidebarOpen={setSidebarOpen}
        />

        {/* EXACT NAVBAR SPACE */}
        <div className="h-20" />

        {/* PAGE CONTENT */}
        <main className="min-h-[calc(100vh-5rem)]">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default AdminLayout;