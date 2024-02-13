import React from "react";
import { Route, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const isAuthenticated = !!Cookies.get("token"); // Check if the user is authenticated

  return (
    <Route
      {...rest}
      element={
        isAuthenticated ? (
          <Element />
        ) : (
          <Navigate to="/login" replace /> // Redirect to login if not authenticated
        )
      }
    />
  );
};

export default ProtectedRoute;
