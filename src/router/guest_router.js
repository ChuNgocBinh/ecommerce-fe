import { useAuth } from 'hook/useAuth';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function GuestRouter() {
  const user = useAuth();
  return !user ? <Outlet /> : <Navigate to="/" />;
}

export default GuestRouter;
