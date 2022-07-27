import React from "react";
import "./card.sass";

function Card({ data }) {
  return (
    <div className="card_container">
      <div className="card_picture">
        <img src={data.picture_url} alt="img_card" className="card_img" />
      </div>
      <div className="card_content">
        <div className="card_shopname">shop</div>
        <div className="card_productname">{data.product_name}</div>
        <div className="card_rate">
          <div>{data.rate}</div>
          <div className="card_rate-count">6</div>
        </div>
        <div className="card_cost">{data.cost}</div>
      </div>
    </div>
  );
}

export default Card;
