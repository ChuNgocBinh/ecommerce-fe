import React from 'react';
import Header from 'components/header/header';
import './layout.sass';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import appLocale from 'i18n/index';
import messages from 'i18n/entries/entries';
import Loader from 'components/loader/loader';

function Layout({ children }) {
  const locale = useSelector((state) => state.app.locale);
  const loading = useSelector((state) => state.app.loading);

  return (
    <div>
      {loading && <Loader />}
      <IntlProvider
        messages={messages[locale]}
        locale={appLocale[locale]}
      >
        <div className="layout_header">
          <Header />
        </div>
        <div className="layout_body">
          {children}
        </div>
      </IntlProvider>
    </div>
  );
}

export default Layout;
