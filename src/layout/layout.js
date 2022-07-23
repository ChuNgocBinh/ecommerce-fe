import React, { useEffect } from "react";
import Header from "components/header/header";
import "./layout.sass";
import { IntlProvider } from "react-intl";
import { useSelector, useDispatch } from "react-redux";
import appLocale from "i18n/index";
import messages from "i18n/entries/entries";
import Loader from "components/loader/loader";
import { NotificationContainer } from "react-notifications";
import { fetchUserInfo } from "redux/appSLice";
import "react-notifications/lib/notifications.css";
import Footer from "components/footer/footer";

function Layout({ children }) {
  const locale = useSelector((state) => state.app.locale);
  const loading = useSelector((state) => state.app.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);

  return (
    <div>
      {loading && <Loader />}
      <IntlProvider messages={messages[locale]} locale={appLocale[locale]}>
        <div className="layout_header">
          <Header />
        </div>
        <div className="layout_body">{children}</div>
        <div>
          <Footer />
        </div>
        <NotificationContainer />
      </IntlProvider>
    </div>
  );
}

export default Layout;
