import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import ProtectedRoute from "./routes/ProtectedRoute";
import { Toaster } from "sonner";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Contact = lazy(() => import("./pages/Contact"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const ProductsManagement = lazy(() => import("./pages/ProductsManagement"));
const HomepageManagement = lazy(() => import("./pages/HomepageManagement"));
const AdsManagement = lazy(() => import("./pages/AdsManagement"));
const FestivalsManagement = lazy(() => import("./pages/FestivalsManagement"));
const UsersManagement = lazy(() => import("./pages/UsersManagement"));
const ContactsManagement = lazy(() => import("./pages/ContactsManagement"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-center" richColors />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Public Routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          {/* Admin Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <Dashboard />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/products"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <ProductsManagement />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/sections"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <HomepageManagement />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/ads"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <AdsManagement />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/festivals"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <FestivalsManagement />
                </AdminLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/users"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <UsersManagement />
                </AdminLayout>
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard/contacts"
            element={
              <ProtectedRoute>
                <AdminLayout>
                  <ContactsManagement />
                </AdminLayout>
              </ProtectedRoute>
            }
          />

          {/* Fallback */}
          <Route element={<MainLayout />}>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
