import React from 'react';
import './footer.sass';

function Footer() {
  return (
    <div>
      <section className="ps-newsletter">
        <div className="ps-container">
          <form className="ps-form--newsletter" action="do_action" method="post">
            <div className="row">
              <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="ps-from-left">
                  <h1>Newsletter</h1>
                  <p>Subcribe to get infomation about products and coupons</p>
                  <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="ps-form-right">...</div>
                    <div className="form-group--nest">
                      <input />
                      <button className="ps-btn">Subcribe</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <footer />
      <footer className="ps-footer">
        <div className="ps-container">
          <div className="ps-footer_widgets">
            <aside className="widget widget_footer widget_contact-us">...</aside>
            <aside className="widget widget_footer">
              <h4 className="widget-title-1">Contact us</h4>
              <div className="widget_content">
                <p> Call us 24/7</p>
                <h3> 1800 97 97 69</h3>
                <p>
                  502 New Design Str, Melbourne, Autralia.
                  <a href="kieu.kiet91@gmail.com">chungocbinh.167@gmail.com</a>
                </p>
                <h4 className="widget-title-2">Quick links</h4>
                <ui className="ps-list--social">
                  <li>Policy</li>
                  <li>Term & Condition </li>
                  <li>Shipping</li>
                  <li>Return</li>
                  <li>FAQs</li>
                </ui>
              </div>
            </aside>
            <aside className="widget widget_footer">
              <h4 className="widget-title-3">Company</h4>
              <ui className="ps-list--link-3">
                <li>About</li>
                <li>Affilate</li>
                <li>Career</li>
                <li>Contact</li>
              </ui>
            </aside>
            <aside className="widget widget_footer">
              <h4 className="widget-title-4">Bussiness</h4>
              <ui className="ps-list--link-4">
                <li>Our Press</li>
                <li>Checkout</li>
                <li>My account</li>
                <li>Shop</li>
              </ui>
            </aside>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
