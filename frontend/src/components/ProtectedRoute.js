import React from "react";
import { Navigate } from "react-router-dom";

// Wraps dashboard routes — redirects unauthenticated users to /login
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
