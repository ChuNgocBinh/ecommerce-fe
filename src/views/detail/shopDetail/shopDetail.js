import React from 'react';
import './shopDetail.sass';

function ShopDetail() {
  return (
    <div className="shopDetail_container">
      <div className="shopDetail_info">
        <div className="shopDetail_info-avarta">
          <img className="shopDetail_info-img" src="https://cf.shopee.vn/file/vn-11134103-22060-3c91ns9q33dv16" alt="avatar" />
        </div>
        <div>
          <div className="shopDetail_info-name">Chu Ngoc Binh</div>
          <div className="shopDetail_info-btn">
            <button className="shopDetail_btn shopDetail_infor-chat">Chat Ngay</button>
            <button className="shopDetail_btn shopDetail_infor-viewshop">Xem shop</button>
          </div>
        </div>
      </div>
      <div className="shopDetail_number">
        <div>
          <div>
            Đánh Giá:
            {' '}
            <span className="shopDetail_number-info">1,2k</span>
          </div>
          <div>
            Tỉ Lệ Phản Hồi:
            {' '}
            <span className="shopDetail_number-info">51%</span>
          </div>
          <div>
            Tham Gia:
            {' '}
            <span className="shopDetail_number-info">
              6 tháng trước
            </span>
          </div>
        </div>
        <div>
          <div>
            Sản Phẩm:
            {' '}
            <span className="shopDetail_number-info">
              125
            </span>
          </div>
          <div>
            Thời Gian Phản Hồi:
            {' '}
            <span className="shopDetail_number-info">trong vài giờ</span>
          </div>
          <div>
            Người Theo Dõi:
            {' '}
            <span className="shopDetail_number-info">152</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopDetail;
