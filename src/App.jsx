import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
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
import Service from "./pages/Service";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./pages/Services";

function App() {
  const { isAuthenticated, isAdmin } = useContext(AppContext);

  return (
    <div className="container mx-auto h-screen">
      <Router>
        <Navbar isAuthenticated={isAuthenticated} isAdmin={isAdmin} />
        <div className=" container h-[calc(100%-160px)] md:h-[calc(100%-124px)] overflow-y-auto">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />

            {/* Protected Routes */}

            <Route path="/services" element={<Services />}></Route>
            <Route path="/home" element={<Home />}>
              <Route path="child1" element={<Child1 />} />
              <Route path="child2" element={<Child2 />} />
            </Route>
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
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
