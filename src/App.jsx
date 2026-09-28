import React, { useEffect, useState } from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./Layout/MainLayout";

// ================= HOME =================
import Home from "./pages/Home/Home";

// ================= ANNUAL MAINTENANCE =================
import AnnualMaintenance from "./pages/AnnualMaintenance/AnnualMaintenance";
import HotelRestaurant from "./pages/AnnualMaintenance/HotelRestaurant";

// ================= SERVICES =================
import Services from "./pages/Services/Services";
import ServiceDetails from "./pages/ServiceDetails/ServiceDetails";

// ================= PLUMBING / ELECTRICAL =================
import Plumbing from "./pages/Plumbing/Plumbing";
import Electrical from "./pages/Electrical/Electrical";

// ================= DESIGN =================
import Design from "./pages/Design/Design";
import DesignCategory from "./pages/Design/DesignCategory";

// ================= PROJECTS =================
import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";
import Projects from "./pages/Projects/Projects";

// ================= ABOUT =================
import About from "./pages/About/About";

// ================= CONTACT =================
import Contact from "./pages/Contact/Contact";

// ================= AUTH =================
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

// ================= ADMIN ROUTE =================
import AdminRoute from "./components/AdminRoute";

// ================= ADMIN PAGES =================
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminProjects from "./pages/Admin/AdminProjects";
import AdminCustomers from "./pages/Admin/AdminCustomers";
import AdminEnquiries from "./pages/Admin/AdminEnquiries";
import AdminProfessionals from "./pages/Admin/AdminProfessionals";
import AdminPayments from "./pages/Admin/AdminPayments";
import AdminReports from "./pages/Admin/AdminReports";
import AdminNotifications from "./pages/Admin/AdminNotifications";
import AdminSettings from "./pages/Admin/AdminSettings";

// ================= PRELOADER =================
import Preloader from "./components/Preloader/Preloader";

// ================= CITIES =================
import City from "./pages/City/City";
import CityDetails from "./pages/CityDetails.jsx/CityDetails";

// ================= MORE PAGES =================
import HowItWorks from "./pages/HowItWorks/HowItWorks";
import Professionals from "./pages/Professionals/Professionals";
import Reviews from "./pages/Reviews/Reviews";
import FAQs from "./pages/FAQ/FAQ";

// =====================================================
// ROUTER
// =====================================================

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* =================================================
          MAIN WEBSITE
      ================================================= */}

      <Route path="/" element={<MainLayout />}>

        {/* HOME */}
        <Route index element={<Home />} />

        {/* =================================================
            SERVICES
        ================================================= */}

        <Route path="services" element={<Services />} />

        {/* PLUMBING */}
        <Route
          path="services/plumbing"
          element={<Plumbing />}
        />

        {/* ELECTRICAL */}
        <Route
          path="services/electrical"
          element={<Electrical />}
        />

        {/* OTHER SERVICE DETAILS */}
        <Route
          path="services/:slug"
          element={<ServiceDetails />}
        />

        {/* =================================================
            ANNUAL MAINTENANCE
        ================================================= */}

        <Route
          path="annual-maintenance"
          element={<AnnualMaintenance />}
        />

        <Route
          path="annual-maintenance/hotel-restaurant"
          element={<HotelRestaurant />}
        />

        {/* =================================================
            DESIGN
        ================================================= */}

        <Route
          path="design"
          element={<Design />}
        />

        <Route
          path="design/:slug"
          element={<DesignCategory />}
        />

        {/* =================================================
            PROJECTS
        ================================================= */}

        <Route
          path="projects"
          element={<Projects />}
        />

        <Route
          path="projects/:slug"
          element={<ProjectDetails />}
        />

        {/* =================================================
            CITIES
        ================================================= */}

        <Route
          path="cities"
          element={<City />}
        />

        <Route
          path="cities/:slug"
          element={<CityDetails />}
        />

        {/* =================================================
            MORE PAGES
        ================================================= */}

        {/* ABOUT */}
        <Route
          path="about"
          element={<About />}
        />

        {/* HOW IT WORKS */}
        <Route
          path="how-it-works"
          element={<HowItWorks />}
        />

        {/* PROFESSIONALS */}
        <Route
          path="professionals"
          element={<Professionals />}
        />

        {/* REVIEWS */}
        <Route
          path="reviews"
          element={<Reviews />}
        />

        {/* FAQS */}
        <Route
          path="faqs"
          element={<FAQs />}
        />

        {/* =================================================
            CONTACT
        ================================================= */}

        <Route
          path="contact"
          element={<Contact />}
        />

      </Route>

      {/* =================================================
          AUTHENTICATION
      ================================================= */}

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      {/* =================================================
          ADMIN PROTECTED ROUTES
      ================================================= */}

      <Route element={<AdminRoute />}>

        {/* =================================================
            ADMIN DASHBOARD
        ================================================= */}
         <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />

        {/* =================================================
            ADMIN PROJECTS
        ================================================= */}

        <Route
          path="/admin/projects"
          element={<AdminProjects />}
        />

        {/* =================================================
            ADMIN CUSTOMERS
        ================================================= */}

        <Route
          path="/admin/customers"
          element={<AdminCustomers />}
        />

        {/* =================================================
            ADMIN ENQUIRIES
        ================================================= */}

        <Route
          path="/admin/enquiries"
          element={<AdminEnquiries />}
        />

        {/* =================================================
            ADMIN PROFESSIONALS
        ================================================= */}

        <Route
          path="/admin/professionals"
          element={<AdminProfessionals />}
        />

        {/* =================================================
            ADMIN PAYMENTS
        ================================================= */}

        <Route
          path="/admin/payments"
          element={<AdminPayments />}
        />

        {/* =================================================
            ADMIN REPORTS
        ================================================= */}

        <Route
          path="/admin/reports"
          element={<AdminReports />}
        />

        {/* =================================================
            ADMIN NOTIFICATIONS
        ================================================= */}

        <Route
          path="/admin/notifications"
          element={<AdminNotifications />}
        />

        {/* =================================================
            ADMIN SETTINGS
        ================================================= */}

        <Route
          path="/admin/settings"
          element={<AdminSettings />}
        />

      </Route>
    </>
  )
);

// =====================================================
// APP
// =====================================================

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 750);

    return () => clearTimeout(timer);

  }, []);

  return loading ? (
    <Preloader />
  ) : (
    <RouterProvider router={router} />
  );
};

export default App;