import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../../utils/session";
import "./Register.css";
const PrivateRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
