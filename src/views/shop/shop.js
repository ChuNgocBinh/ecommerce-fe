import StepSelling from 'components/stepSelling/stepSelling';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import './shop.sass';
// import ShopRegist from './registerShop/shopRegist';

const listAbout = [
  {
    id: 1,
    img: '/image/vendor-1.png',
    title: 'shop.regist.about.item.lowfee',
    content: 'shop.regist.about.item.lowfee.content',
  },
  {
    id: 2,
    img: '/image/vendor-2.png',
    title: 'shop.regist.about.item.powerful',
    content: 'shop.regist.about.item.powerful.content',
  },
  {
    id: 3,
    img: '/image/vendor-3.png',
    title: 'shop.regist.about.item.support',
    content: 'shop.regist.about.item.support.content',
  },
];

const stepSelling = [
  {
    id: 1,
    img: '/image/step-1.png',
    title: 'shop.regist.stepSelling1.title',
    li1: 'shop.regist.stepSelling1.li1',
    li2: 'shop.regist.stepSelling1.li2',
  },
  {
    id: 2,
    img: '/image/step-2.png',
    title: 'shop.regist.stepSelling2.title',
    li1: 'shop.regist.stepSelling2.li1',
    li2: 'shop.regist.stepSelling2.li2',
  },
  {
    id: 3,
    img: '/image/step-3.png',
    title: 'shop.regist.stepSelling3.title',
    li1: 'shop.regist.stepSelling3.li1',
    li2: 'shop.regist.stepSelling3.li2',
  },
  {
    id: 4,
    img: '/image/step-4.png',
    title: 'shop.regist.stepSelling4.title',
    li1: 'shop.regist.stepSelling4.li1',
    li2: 'shop.regist.stepSelling4.li2',
  },
];

function Shop() {
  return (
    <div className="shop_container">
      <div className="shop_header">
        <div className="shop_title">
          <FormattedMessage id="shop.regist.title" />
        </div>
        <Link className="shop_btn btn " to="/shop/create">
          <FormattedMessage id="shop.regist.button.startselling" />
        </Link>
      </div>
      <div className="shop_reson">
        <div className="shop-question"><FormattedMessage id="shop.regist.about.question" /></div>
        <div className="shop-title"><FormattedMessage id="shop.regist.about.title" /></div>
        <div className="shop_reson-card">
          {
            listAbout.map((item) => (
              <div key={item.id} className="shop_reson-item">
                <img src={item.img} alt={`img${item.id}`} className="shop_reson-img" />
                <div className="shop_reson-card-title">
                  <FormattedMessage id={item.title} />
                </div>
                <div className="shop_reson-cart-content">
                  <FormattedMessage id={item.content} />
                </div>
                <Link to="/"><FormattedMessage id="shop.regist.about.learnmore" /></Link>
              </div>
            ))
          }
        </div>
      </div>
      <div className="step_selling-container">
        <div className="shop-question"><FormattedMessage id="shop.regist.stepSelling.question" /></div>
        <div className="shop-title"><FormattedMessage id="shop.regist.stepSelling.title" /></div>
        <div className="step_selling-item">
          {
            stepSelling.map((item) => (
              <div key={item.id}>
                <StepSelling data={item} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Shop;
