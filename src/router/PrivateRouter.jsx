import React from "react";
import { Navigate, Outlet } from "react-router";

const useAuth = () => {
  const user = JSON.parse(localStorage.getItem("USER"));
  return user ? true : false;
};

const PrivateRouter = () => {
  const user = useAuth();

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
