import React from 'react';
import Layout from 'layout/layout';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import publicRoute from 'constant/publicRouter';
import CreateProduct from 'views/my-shop/createProduct/createProduct';
import privateRoute, { subRouterMyShop } from 'constant/privateRouter';
import GuestRouter from 'router/guest_router';
import PrivateRouter from 'router/private_router';

function App() {
  const renderPublicRoute = () => {
    const xhtml = publicRoute.map((route) => (
      <Route path={route.path} element={route.component} key={route.path} />
    ));
    return xhtml;
  };

  const renderPrivateRoute = () => {
    const xhtml = privateRoute.map((route) => {
      if (route.path === '/my-shop') {
        return (
          <Route path={route.path} element={route.component} key={route.path}>
            <Route index element={<CreateProduct />} />
            {subRouterMyShop.map((item) => (
              <Route
                path={item.path}
                element={item.component}
                key={item.path}
              />
            ))}
          </Route>
        );
      }
      return (
        <Route path={route.path} element={route.component} key={route.path} />
      );
    });
    return xhtml;
  };

  return (
    <Layout>
      <Routes>
        {/* <Route element={<GuestRouter />}> */}
        {renderPublicRoute()}
        {/* </Route> */}
        <Route element={<PrivateRouter />}>
          {renderPrivateRoute()}
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
