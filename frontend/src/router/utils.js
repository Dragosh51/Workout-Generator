import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);

  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    return <Navigate to="/Login" />;
  }

  return children;
};

export const NonPrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);
  console.log(isAuthenticated);
  if (isAuthenticated) {
    // Redirect to home page if authenticated
    return <Navigate to="/Home" />;
  }

  return children;
};
