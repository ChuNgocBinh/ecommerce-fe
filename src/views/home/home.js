import Card from 'components/card/card';
import React, { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getListProduct } from 'services/product';

import './home.sass';

const items = [
  { title: 'Electronics', src: 'https://reactstorefronts.com/static/img/categories/1.jpg' },
  { title: 'Clothings', src: 'https://reactstorefronts.com/static/img/categories/2.jpg' },
  { title: 'Computers', src: 'https://reactstorefronts.com/static/img/categories/3.jpg' },
  { title: 'Home & Kitchen', src: 'https://reactstorefronts.com/static/img/categories/4.jpg' },
  { title: 'Health & Beauty', src: 'https://reactstorefronts.com/static/img/categories/5.jpg' },
  { title: 'Jewelry & Watch', src: 'https://reactstorefronts.com/static/img/categories/7.jpg' },
  { title: 'Technology Toys', src: 'https://reactstorefronts.com/static/img/categories/8.jpg' },
];

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
      <div>
        <div>
          <div className="home_title">
            <FormattedMessage id="home.category" />
          </div>
          <div className="home_category">
            {
              items.map((item) => (
                <div key={item.title} className="home_category-box">
                  <img src={item.src} alt="category" />
                  <div>{item.title}</div>
                </div>
              ))
            }
          </div>
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
