import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { AppContext } from "../context/AppContext";

const AdminProtectedRoute = ({ children }) => {
  const { isAuthenticated, isAdmin } = useContext(AppContext);

  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  if (isAdmin && !isAdmin()) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="w-full flex flex-col items-center justify-between">
      {/* <Navbar /> */}
      <div className="flex flex-row w-[100%]">
        {/* <Sidebar /> */}
        {children}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AdminProtectedRoute;
