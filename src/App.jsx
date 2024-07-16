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
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Library from "./pages/Library";
import LibraryPage from "./pages/LibraryPage";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

function App() {
  const { isAuthenticated, isAdmin } = useContext(AppContext);

  return (
    <div className="h-screen flex-col items-center justify-center">
    <Router>
      <Navbar isAuthenticated={isAuthenticated} isAdmin={isAdmin} />
      <div className="">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}

          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/library" element={<Library />}></Route>
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
        </Routes>
      </div>
      <Footer />
    </Router>
  </div>
  );
}

export default App;
