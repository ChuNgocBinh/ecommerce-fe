import React from 'react';
import Header from 'components/header/header';
import './layout.sass';
import { IntlProvider } from 'react-intl';
import { useSelector } from 'react-redux';
import appLocale from 'i18n/index';
import messages from 'i18n/entries/entries';

function Layout({ children }) {
  const locale = useSelector((state) => state.app.locale);
  console.log(locale);
  return (
    <div>
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
