import { useAuth } from 'hook/useAuth';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function GuestRouter() {
  const user = useAuth();
  const isMember = !!user;
  return !isMember ? <Outlet /> : <Navigate to="/" />;
}

export default GuestRouter;
