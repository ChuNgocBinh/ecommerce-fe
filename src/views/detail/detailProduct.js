import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getProductById } from 'services/product';
import Comment from './comment/comment';
import DescriptionProduct from './desProduct/desProduct';
import DetailInfo from './detailInfo/detailInfo';
import './detailProduct.sass';
import ShopDetail from './shopDetail/shopDetail';

function DetailProduct() {
  const { product_id } = useParams();
  const [product, setProduct] = useState('');

  const fetchProduct = async () => {
    try {
      const res = await getProductById(product_id);

      if (res?.status === 200 && res?.data?.status === 'success') {
        setProduct(res?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProductQuery = async () => {
    const res = await getProductById(product_id);
    return (res?.data?.data);
  };

  useEffect(() => {
    fetchProduct();
  }, [product_id]);
  console.log('render');
  const query = useQuery(['products'], fetchProductQuery);
  console.log('query', query);

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
      id: 2,
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
        <DetailInfo product={query.data} />
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
