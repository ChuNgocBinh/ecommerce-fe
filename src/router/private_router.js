import { useAuth } from 'hook/useAuth';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRouter() {
  console.log('vao day');
  const user = useAuth();
  console.log(user);
  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRouter;
