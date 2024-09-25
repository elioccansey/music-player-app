// components/ProtectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = sessionStorage.getItem('authToken');  // Check if the user is logged in (via token)

  if (!token) {
    // If not logged in, redirect to the login page
    return <Navigate to="/" />;
  }

  // If logged in, allow access to the page
  return <>{children}</>;
};

export default ProtectedRoute;
