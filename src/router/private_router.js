import { useAuth } from 'hook/useAuth';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Login from 'views/login/login';

function PrivateRouter() {
  const user = useAuth();
  const isMember = !!user;
  return isMember ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRouter;
