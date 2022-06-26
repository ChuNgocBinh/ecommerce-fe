import React from 'react';
import Layout from 'layout/layout';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import publicRoute from 'constant/publicRouter';

function App() {
  const renderPublicRoute = () => {
    const xhtml = publicRoute.map((route) => (
      <Route path={route.path} element={route.component} key={route.path} />
    ));
    return xhtml;
  };

  return (
    <Layout>
      <Routes>
        {renderPublicRoute()}
      </Routes>
    </Layout>
  );
}

export default App;
