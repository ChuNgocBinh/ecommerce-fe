import React from "react";
import ReactStars from "react-stars";
import "./card.sass";

function Card({ data }) {
  console.log(data);
  return (
    <div className="card_container">
      <div className="card_picture">
        <img src={data.picture_url} alt="img_card" className="card_img" />
        {data.discount && (
          <div className="card_discount">{`-${data.discount}%`}</div>
        )}
      </div>
      <div className="card_content">
        <div className="card_shopname">{data.shop_name}</div>
        <div className="card_productname">{data.product_name}</div>
        <div className="card_rate">
          <div>{data.rate}</div>
          <div className="card_rate-count">
            <ReactStars
              count={5}
              size={20}
              value={4.5}
              color2="#ffd700"
              edit={false}
            />
          </div>
        </div>
        <div className="card_cost">
          <div className="card_cost-discount">
            {(data.cost * ((100 - data.discount) / 100)).toLocaleString("vn", {
              style: "currency",
              currency: "VND",
            })}
          </div>
          <div className="card_cost-number">
            {data.cost.toLocaleString("vn", {
              style: "currency",
              currency: "VND",
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
