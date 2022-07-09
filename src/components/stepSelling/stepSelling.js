import React from 'react';
import { FormattedMessage } from 'react-intl';
import './stepSelling.sass';

function StepSelling({ data }) {
  return (
    <div className={`step-selling-box step-selling-${data.id}`}>
      <div className="step_selling-content">
        <div className="step_selling-title">
          <FormattedMessage id={data.title} />
        </div>
        <ul className="step_selling-list">
          <li><FormattedMessage id={data.li1} /></li>
          <li><FormattedMessage id={data.li2} /></li>
        </ul>
      </div>
      <div className="step_selling-img">
        <img src={data.img} alt="img" />
      </div>
      <div className="step-selling-number">
        <span>
          {data.id}
        </span>
      </div>
    </div>
  );
}

export default StepSelling;
