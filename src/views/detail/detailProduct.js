import React from 'react';
import { useParams } from 'react-router-dom';
import Comment from './comment/comment';
import DescriptionProduct from './desProduct/desProduct';
import DetailInfo from './detailInfo/detailInfo';
import './detailProduct.sass';
import ShopDetail from './shopDetail/shopDetail';

function DetailProduct() {
  //   const { product_id } = useParams();
  const detail = {
    id: 1,
    product_name: '[NHẬP MÃ COSEUC0207A -10% ĐƠN 400K] Gel Chống Nắng Kiểm Soát Nhờn Eucerin Sun Dry Touch Oil Control Face SPF50+ 50ml',
    created_by: 'Chu Ngoc Binh',
    cost: 120000,
    discount: 10,
    image: 'https://cdn.tgdd.vn/Files/2022/05/26/1435102/lo-dien-concept-iphone-14-pro-voi-bang-mau-cuc-hut-9.jpg',
    description: 'iphone 14',
    brand: 'mobiphone',
    amount: 50,
  };

  const cm = [
    {
      id: 1,
      createdBy: 'chu ngoc binh',
      avatar: 'https://upload.wikimedia.org/wikipedia/vi/thumb/b/b0/Avatar-Teaser-Poster.jpg/220px-Avatar-Teaser-Poster.jpg',
      rate: 4,
      content: 'san pham oke day',
      like: 5,
    },
    {
      id: 1,
      createdBy: 'chu ngoc binh',
      avatar: 'https://upload.wikimedia.org/wikipedia/vi/thumb/b/b0/Avatar-Teaser-Poster.jpg/220px-Avatar-Teaser-Poster.jpg',
      rate: 4,
      content: 'san pham oke day',
      like: 5,
    },
  ];

  return (
    <div className="detail_container">
      <div className="detail_info">
        <DetailInfo detail={detail} />
      </div>
      <div>
        <ShopDetail />
      </div>
      <div>
        <DescriptionProduct />
      </div>
      <div>
        <Comment cm={cm} />
      </div>
    </div>
  );
}

export default DetailProduct;
