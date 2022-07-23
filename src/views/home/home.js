import Card from 'components/card/card';
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getListProduct } from 'services/product';

import './home.sass';

function Home() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const res = await getListProduct();
      if (res.status === 200 && res?.data?.status === 'success') {
        console.log(res);
        setProducts(res?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="home_container">
      <div className="home_header">
        <div className="home_header-left">
          <img
            src="https://beta.apinouthemes.com/uploads/slide_3_1fcb990278.jpeg"
            alt="home-img"
            className="home_img-item"
          />
        </div>
        <div className="home_header-right">
          <img
            src="https://beta.apinouthemes.com/uploads/promotion_1_d6deb591f0.jpeg"
            alt="img"
            className="home_img-item home_img-top"
          />
          <img
            src="https://beta.apinouthemes.com/uploads/promotion_2_d252453586.jpeg"
            alt="img"
            className="home_img-item"
          />
        </div>
      </div>
      <div className="home_title">
        <FormattedMessage id="home.title" />
      </div>
      <div className="home_card">
        {products.map((item) => (
          <div key={item.id} className="home_card-item">
            <Link to={`/detail/${item.id}`} className="home_link-card">
              <Card data={item} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
