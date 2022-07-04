import React from 'react';
import Header from 'components/header/header';
import './layout.sass';

function Layout({ children }) {
  return (
    <div>
      <div className="layout_header">
        <Header />
      </div>
      <div className="layout_body">
        {children}

      </div>
    </div>
  );
}

export default Layout;
