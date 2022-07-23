import React from 'react';
import Layout from 'layout/layout';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import publicRoute, { subRouterMyShop } from 'constant/publicRouter';
import CreateProduct from 'views/my-shop/createProduct/createProduct';

function App() {
  const renderPublicRoute = () => {
    const xhtml = publicRoute.map((route) => {
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
      <Routes>{renderPublicRoute()}</Routes>
    </Layout>
  );
}

export default App;
