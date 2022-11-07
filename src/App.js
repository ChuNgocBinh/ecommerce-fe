import React, { useEffect } from 'react';
import Layout from 'layout/layout';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import publicRoute from 'constant/publicRouter';
import CreateProduct from 'views/my-shop/createProduct/createProduct';
import privateRoute, { subRouterMyShop } from 'constant/privateRouter';
import GuestRouter from 'router/guest_router';
import PrivateRouter from 'router/private_router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserInfo, logout, serverError } from 'redux/appSLice';
import { io } from 'socket.io-client';
import _emitter from 'utils/emitter';
import '@fortawesome/fontawesome-free/css/all.min.css';

const socket = io(process.env.REACT_APP_SOCKET_URL);

function App() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.app.status);
  useEffect(() => {
    dispatch(fetchUserInfo());
  }, []);

  _emitter.on('expire', () => {
    dispatch(logout());
  });

  _emitter.on('error', () => {
    dispatch(serverError());
  });

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

  if (status === 'error') return <div>Error....</div>;

  if (status === 'loading') return <div>Loading....</div>;

  return (
    <Layout>
      {
        status === 'done' && (
          <Routes>
            <Route element={<PrivateRouter />}>
              {renderPrivateRoute()}
            </Route>
            <Route element={<GuestRouter />}>
              {renderPublicRoute()}
            </Route>
            {/* </Route> */}
          </Routes>
        )
      }

    </Layout>
  );
}

export default App;
