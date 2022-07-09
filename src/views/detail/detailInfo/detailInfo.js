import React from 'react';
import './detailInfo.sass';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';

function DetailInfo({ detail }) {
  return (
    <div className="detailInfo_container">
      <div className="detailInfo_image">
        <img src={detail.image} alt="img" className="detailInfo_image-product" />
      </div>
      <div className="detailInfo_content">
        <div className="detailInfo_content-name">{detail.product_name}</div>
        <div className="detailInfo_rate-info">
          <div className="detaiInfo_rate-item">
            <span>Brand:</span>
            <span>{detail.brand}</span>
          </div>
          <div className="detaiInfo_rate-item">
            <span>4</span>
            <span>start</span>
          </div>
          <div className="detaiInfo_rate-item">
            <span>4</span>
            <span>rate</span>
          </div>
          <div className="detaiInfo_rate-item">
            <span>4</span>
            <span>soid</span>
          </div>
        </div>
        <div className="detail_cost">
          <span className="detailInfo_cost-real">
            {(detail.cost).toLocaleString('vn', { style: 'currency', currency: 'VND' })}
          </span>
          <span className="detailInfo_cost-discount">
            {(detail.cost * ((100 - detail.discount) / 100)).toLocaleString('vn', { style: 'currency', currency: 'VND' })}
          </span>
          <span className="detailInfo_cost-discountNumber">
            giảm
            {' '}
            {detail.discount}
            %
          </span>
        </div>
        <div className="detailInfo_vouchers">
          <div className="detailInfo_title">Shop Vouchers: </div>
          <div className="detailInfo_vouchers-value">60k</div>
        </div>
        <div className="detailInfo_shotdesc">
          <div className="detailInfo_title">Description: </div>
          <div className="detailInfo_shotdesc-content">
            {detail.description}
          </div>
        </div>
        <div className="detailInfo_quantity">
          <div className="detailInfo_title">Quantity: </div>
          <div className="detailInfo_quantity-direct">
            <buton className="detailInfo_quantity-button"><IndeterminateCheckBoxIcon /></buton>
            <input className="detailInfo_quantity-input" defaultValue={1} />
            <buton className="detailInfo_quantity-button"><AddBoxIcon /></buton>
          </div>
          <div className="detailInfo_quantity-available">665 product available</div>
        </div>
        <div className="detailInfo_btn">
          <buton className="detailInfo_btn-all detailInfo_btn-add">Add to cart</buton>
          <buton className="detailInfo_btn-all detailInfo_btn-by">By now</buton>
        </div>
      </div>
    </div>
  );
}

export default DetailInfo;
