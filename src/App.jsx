
import React, { useEffect, useState } from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./Layout/MainLayout";

// ================= CART CONTEXT =================
import { CartProvider } from "./context/CartContext";

// ================= WISHLIST CONTEXT =================
import { WishlistProvider } from "./context/WishlistContext";

// ================= ORDER CONTEXT =================
import { OrderProvider } from "./context/OrderContext";

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
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import Register from "./pages/Register/Register";
import VerifyOTP from "./pages/VerifyOTP/VerifyOTP";
import Location from "./pages/Location/Location";
import ForgotPassword from "./pages/auth/ForgotPassword";

// ================= CART =================
import Cart from "./pages/Cart/Cart";

// ================= WISHLIST =================
import Wishlist from "./pages/Wishlist/Wishlist";

// ================= BOOKING =================
import BookingCheckout from "./pages/Booking/BookingCheckout";

// ================= ORDERS =================
import Orders from "./pages/Orders/Orders";
import OrderDetails from "./pages/Orders/OrderDetails";

// ================= ADMIN ROUTE =================
import AdminRoute from "./components/AdminRoute";

// ================= PERMISSION ROUTE =================
// IMPORTANT:
// PermissionRoute file is inside components/Admin/
import PermissionRoute from "./components/PermissionRoute";

// ================= PERMISSIONS =================
import { PERMISSIONS } from "./utils/permissions";

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

// ================= STAFF PAGES =================
import StaffManagement from "./pages/Admin/Staff/StaffManagement";
import InviteStaff from "./pages/Admin/Staff/InviteStaff";
import RolesPermissions from "./pages/Admin/Staff/RolesPermissions";
import StaffActivity from "./pages/Admin/Staff/StaffActivity";

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
        {/* ================= HOME ================= */}

        <Route index element={<Home />} />

        {/* ================= SERVICES ================= */}

        <Route
          path="services"
          element={<Services />}
        />

        <Route
          path="services/plumbing"
          element={<Plumbing />}
        />

        <Route
          path="services/electrical"
          element={<Electrical />}
        />

        <Route
          path="services/:slug"
          element={<ServiceDetails />}
        />

        {/* ================= ANNUAL MAINTENANCE ================= */}

        <Route
          path="annual-maintenance"
          element={<AnnualMaintenance />}
        />

        <Route
          path="annual-maintenance/hotel-restaurant"
          element={<HotelRestaurant />}
        />

        {/* ================= DESIGN ================= */}

        <Route
          path="design"
          element={<Design />}
        />

        <Route
          path="design/:slug"
          element={<DesignCategory />}
        />

        {/* ================= PROJECTS ================= */}

        <Route
          path="projects"
          element={<Projects />}
        />

        <Route
          path="projects/:slug"
          element={<ProjectDetails />}
        />

        {/* ================= CITIES ================= */}

        <Route
          path="cities"
          element={<City />}
        />

        <Route
          path="cities/:slug"
          element={<CityDetails />}
        />

        {/* ================= ABOUT ================= */}

        <Route
          path="about"
          element={<About />}
        />

        {/* ================= HOW IT WORKS ================= */}

        <Route
          path="how-it-works"
          element={<HowItWorks />}
        />

        {/* ================= PROFESSIONALS ================= */}

        <Route
          path="professionals"
          element={<Professionals />}
        />

        {/* ================= REVIEWS ================= */}

        <Route
          path="reviews"
          element={<Reviews />}
        />

        {/* ================= FAQS ================= */}

        <Route
          path="faqs"
          element={<FAQs />}
        />

        {/* ================= CONTACT ================= */}

        <Route
          path="contact"
          element={<Contact />}
        />
      </Route>

      {/* =================================================
          CART
      ================================================= */}

      <Route
        path="/cart"
        element={<Cart />}
      />

      {/* =================================================
          WISHLIST
      ================================================= */}

      <Route
        path="/wishlist"
        element={<Wishlist />}
      />

      {/* =================================================
          BOOKING
      ================================================= */}

      <Route
        path="/booking"
        element={<BookingCheckout />}
      />

      {/* =================================================
          ORDERS
      ================================================= */}

      <Route
        path="/orders"
        element={<Orders />}
      />

      <Route
        path="/orders/:orderId"
        element={<OrderDetails />}
      />

      {/* =================================================
          AUTHENTICATION
      ================================================= */}

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/admin-login"
        element={<AdminLogin />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      <Route
        path="/verify-otp"
        element={<VerifyOTP />}
      />

      <Route
        path="/location"
        element={<Location />}
      />

      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />

      {/* =================================================
          ADMIN AUTHENTICATED ROUTES
      ================================================= */}

      <Route element={<AdminRoute />}>

        {/* =================================================
            DASHBOARD
        ================================================= */}

        <Route
          element={
            <PermissionRoute
              permission={PERMISSIONS.DASHBOARD_VIEW}
            />
          }
        >
          <Route
            path="/admin"
            element={<AdminDashboard />}
          />

          <Route
            path="/admin/dashboard"
            element={<AdminDashboard />}
          />
        </Route>

        {/* =================================================
            PROJECTS / ORDERS
        ================================================= */}

        <Route
          element={
            <PermissionRoute
              permission={PERMISSIONS.ORDERS_VIEW}
            />
          }
        >
          <Route
            path="/admin/projects"
            element={<AdminProjects />}
          />
        </Route>

        {/* =================================================
            CUSTOMERS
        ================================================= */}

        <Route
          element={
            <PermissionRoute
              permission={PERMISSIONS.CUSTOMERS_VIEW}
            />
          }
        >
          <Route
            path="/admin/customers"
            element={<AdminCustomers />}
          />
        </Route>

        {/* =================================================
            ENQUIRIES
        ================================================= */}

        <Route
          element={
            <PermissionRoute
              permission={PERMISSIONS.ENQUIRIES_VIEW}
            />
          }
        >
          <Route
            path="/admin/enquiries"
            element={<AdminEnquiries />}
          />
        </Route>

        {/* =================================================
            PROFESSIONALS
        ================================================= */}

        <Route
          element={
            <PermissionRoute
              permission={PERMISSIONS.PROFESSIONALS_VIEW}
            />
          }
        >
          <Route
            path="/admin/professionals"
            element={<AdminProfessionals />}
          />
        </Route>

        {/* =================================================
            PAYMENTS
        ================================================= */}

        <Route
          element={
            <PermissionRoute
              permission={PERMISSIONS.PAYMENTS_VIEW}
            />
          }
        >
          <Route
            path="/admin/payments"
            element={<AdminPayments />}
          />
        </Route>

        {/* =================================================
            REPORTS
        ================================================= */}

        <Route
          element={
            <PermissionRoute
              permission={PERMISSIONS.REPORTS_VIEW}
            />
          }
        >
          <Route
            path="/admin/reports"
            element={<AdminReports />}
          />
        </Route>

        {/* =================================================
            NOTIFICATIONS
        ================================================= */}

        <Route
          element={
            <PermissionRoute
              permission={PERMISSIONS.NOTIFICATIONS_VIEW}
            />
          }
        >
          <Route
            path="/admin/notifications"
            element={<AdminNotifications />}
          />
        </Route>

        {/* =================================================
            STAFF MANAGEMENT
        ================================================= */}

        <Route
          element={
            <PermissionRoute
              permission={PERMISSIONS.STAFF_VIEW}
            />
          }
        >
          <Route
            path="/admin/staff"
            element={<StaffManagement />}
          />

          <Route
            path="/admin/staff/invite"
            element={<InviteStaff />}
          />

          <Route
            path="/admin/staff/roles"
            element={<RolesPermissions />}
          />

          <Route
            path="/admin/staff/activity"
            element={<StaffActivity />}
          />
        </Route>

        {/* =================================================
            SETTINGS
        ================================================= */}

        <Route
          element={
            <PermissionRoute
              permission={PERMISSIONS.SETTINGS_VIEW}
            />
          }
        >
          <Route
            path="/admin/settings"
            element={<AdminSettings />}
          />
        </Route>
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

  // ================= PRELOADER =================

  if (loading) {
    return <Preloader />;
  }

  // ================= MAIN APP =================

  return (
    <OrderProvider>
      <WishlistProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </WishlistProvider>
    </OrderProvider>
  );
};

export default App;
