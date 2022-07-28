import React from 'react';
import './footer.sass';

function Footer() {
  return (
    <div className="footer_container">
      <div className="ps-container">
        <div className="ps-from-left">
          <h1>Newsletter</h1>
          <p>Subcribe to get infomation about products and coupons</p>
        </div>
        <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12">
          <div className="ps-form-right">...</div>
          <div className="form-group--nest">
            <input className="footer_input" />
            <button className="ps-btn btn">Subcribe</button>
          </div>
        </div>
      </div>
      <footer className="ps-footer">
        <div className="ps-info">
          <div className="widget widget_footer">
            <h4 className="widget-title-1">Contact us</h4>
            <p> Call us 24/7</p>
            <h3> 1800 97 97 69</h3>
            <p>
              502 New Design Str, Melbourne, Autralia.
              <a href="kieu.kiet91@gmail.com">chungocbinh.167@gmail.com</a>
            </p>
          </div>
          <div className="widget_content">
            <h4 className="widget-title-2">Quick links</h4>
            <ui className="ps-list--social">
              <li>Policy</li>
              <li>Term & Condition </li>
              <li>Shipping</li>
              <li>Return</li>
              <li>FAQs</li>
            </ui>
          </div>
          <div className="widget widget_footer">
            <h4 className="widget-title-3">Company</h4>
            <ui className="ps-list--link-3">
              <li>About</li>
              <li>Affilate</li>
              <li>Career</li>
              <li>Contact</li>
            </ui>
          </div>
          <div className="widget widget_footer">
            <h4 className="widget-title-4">Bussiness</h4>
            <ui className="ps-list--link-4">
              <li>Our Press</li>
              <li>Checkout</li>
              <li>My account</li>
              <li>Shop</li>
            </ui>
          </div>
        </div>
      </footer>
      <div className="footer_end">© 2021 Smart Ecommrece. All Rights Reserved</div>
    </div>
  );
}

export default Footer;
