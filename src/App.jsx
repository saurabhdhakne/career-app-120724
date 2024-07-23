import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Blogs";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Child1 from "./pages/Child1";
import Child2 from "./pages/Child2";
import AdminDashboard from "./pages/AdminDashboard";
import CreateBlog from "./pages/CreateBlog";
import ProtectedRoute from "./components/ProtectedRoute";
import { AppContext } from "./context/AppContext";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Library from "./pages/Library";
import LibraryPage from "./pages/LibraryPage";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import Services from "./pages/Services";
import Blogs from "./pages/Blogs";
import Service from "./pages/Service";
import CreateService from "./pages/CreateService";
import CreateLibrary from "./pages/CreateLibrary";

function App() {
  const { isAuthenticated, isAdmin } = useContext(AppContext);

  return (
    <div className="h-screen flex flex-col items-center justify-between">
      <Router>
        <Navbar isAuthenticated={isAuthenticated} isAdmin={isAdmin} />
        <div className="mt-[72px]">
          <Routes>
            {/* public routes */}
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/library" element={<Library />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/services" element={<Services />} />
            {/* Protected Routes */}
            <Route
              path="/blog/:slug"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Blog />
                </ProtectedRoute>
              }
            />
            <Route
              path="/service/:slug"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Service />
                </ProtectedRoute>
              }
            />
            <Route
              path="/library/:slug"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <LibraryPage />
                </ProtectedRoute>
              }
            />

            {/* Admin Protected Routes */}
            <Route
              path="/admin/dashboard"
              element={
                <AdminProtectedRoute
                  isAuthenticated={isAuthenticated}
                  isAdmin={isAdmin}
                >
                  <AdminDashboard />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="/admin/create-blog"
              element={
                <AdminProtectedRoute
                  isAuthenticated={isAuthenticated}
                  isAdmin={isAdmin}
                >
                  <CreateBlog />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="/admin/create-service"
              element={
                <AdminProtectedRoute
                  isAuthenticated={isAuthenticated}
                  isAdmin={isAdmin}
                >
                  <CreateService />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="/admin/create-library"
              element={
                <AdminProtectedRoute
                  isAuthenticated={isAuthenticated}
                  isAdmin={isAdmin}
                >
                  <CreateLibrary />
                </AdminProtectedRoute>
              }
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
