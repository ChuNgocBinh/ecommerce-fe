import React from 'react';
import './aboutUs.sass';

function AboutUs() {
  return (
    <body>
      <div className="ps-page--single">
        <img src="/static/img/bg/about-us.jpg" alt="" />
      </div>
      <div className="ps-breadcrumb">
        <div className="container">
          <ui className="breadcumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              About Us
            </li>
          </ui>
        </div>
      </div>
      <div className="ps-our-team">
        <div className="container">
          <div ps-section_header>
            <h3>Meet Our Leader</h3>
          </div>
        </div>
      </div>
      <div className="ps-section__content">
        <figure>
          <div className="ps-block--ourteam">
            <img src="/static/img/users/our-team/1.jpg" alt="martfury" />
          </div>
          <div className="ps-section__content">
            <h4>Leo Messi</h4>
            <p>Ceo Fouder</p>
          </div>
        </figure>
        <figure>
          <div className="ps-block--ourteam">
            <img src="/static/img/users/our-team/2.jpg" alt="martfury" />
          </div>
          <div className="ps-section__content">
            <h4>Neymar</h4>
            <p>Ceo Fouder</p>
          </div>
        </figure>
        <figure>
          <div className="ps-block--ourteam">
            <img src="/static/img/users/our-team/3.jpg" alt="martfury" />
          </div>
          <div className="ps-section__content">
            <h4>Salal</h4>
            <p>Ceo Fouder</p>
          </div>
        </figure>
        <figure>
          <div className="ps-block--ourteam">
            <img src="/static/img/users/our-team/4.jpg" alt="martfury" />
          </div>
          <div className="ps-section__content">
            <h4>Ronaldo</h4>
            <p>Ceo Fouder</p>
          </div>
        </figure>
        <figure data-mh="our-team">
          <div className="ps-block--ourteam blank">
            <a href="$">
              Become
              <br />
              member in
              <br />
              team
            </a>
          </div>
        </figure>
      </div>
      <div className='"ps-about-awards'>
        <div className="container">
          <div className="ps-section__header">
            <h4>Awards & Recognition</h4>
            <p>
            Industry leaders and influencers recognize Overstock as one of the most trust worthy retail companies in the U.S., ranking high for both customer and employee satisfaction.
            </p>
          </div>
        </div>
      </div>
    </body>
  );
}
export default AboutUs;
