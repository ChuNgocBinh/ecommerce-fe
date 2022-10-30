import { useAuth } from 'hook/useAuth';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRouter() {
  const user = useAuth();
  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRouter;
