import React, { useEffect, useState } from 'react';
import './detailInfo.sass';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import { addToCart, getAllCartByUserId, updateCartItem } from '../../../services/cart';
import { useParams } from 'react-router-dom';

function DetailInfo({ product }) {
  const [quantityNumber, setQuantityNumber] = useState(1);
  const [cartData, setCartData] = useState([]);
  const params = useParams();
  const data = {
    product_id: params?.product_id,
    product_name: product?.product_name,
    price: product?.cost,
    quantity: quantityNumber,
    total: quantityNumber * parseFloat(product?.cost),
  };

  const getCart = async () => {
    try {
      await getAllCartByUserId().then((res) => {
        if (res.status === 200) {
          setCartData(res?.data?.data);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCard = async () => {
    try {
      const matchData = cartData.filter((fill) => fill?.product_id === product?.id);
      console.log('');
      if (matchData.length > 0) {
        await updateCartItem(matchData[0]?.id, {
          quantity: matchData[0].quantity + quantityNumber,
          total: (matchData[0].quantity + quantityNumber) * (matchData[0].price),
        }).then((res) => {
          if (res.status === 200) {
            // eslint-disable-next-line
            alert(res?.data?.status)
            getCart();
          }
        });
      } else {
        await addToCart(data).then((res) => {
          if (res?.status === 200) {
            // eslint-disable-next-line
            alert(res?.data?.status)
            getCart();
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickIncrease = () => {
    setQuantityNumber(quantityNumber + 1);
  };

  const handleClickDecrease = () => {
    if (quantityNumber > 0) {
      setQuantityNumber(quantityNumber - 1);
    }
  };
  useEffect(() => { getCart(); }, []);
  return (
    <div className="detailInfo_container">
      <div className="detailInfo_image">
        <img
          src={product?.picture_url}
          alt="img"
          className="detailInfo_image-product"
        />
      </div>
      <div className="detailInfo_content">
        <div className="detailInfo_content-name">{product?.product_name}</div>
        <div className="detailInfo_rate-info">
          <div className="detaiInfo_rate-item">
            <span>Brand:</span>
            <span>{product?.brand}</span>
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
            {product
              && product.cost.toLocaleString('vn', {
                style: 'currency',
                currency: 'VND',
              })}
          </span>
          <span className="detailInfo_cost-discount">
            {product
              && (product.cost * ((100 - product.discount) / 100)).toLocaleString(
                'vn',
                { style: 'currency', currency: 'VND' },
              )}
          </span>
          <span className="detailInfo_cost-discountNumber">
            giảm
            {' '}
            {product?.discount}
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
            {product?.description}
          </div>
        </div>
        <div className="detailInfo_quantity">
          <div className="detailInfo_title">Quantity: </div>
          <div className="detailInfo_quantity-direct">
            <buton
              className="detailInfo_quantity-button"
              onClick={handleClickDecrease}
            >
              <IndeterminateCheckBoxIcon />
            </buton>
            <input
              className="detailInfo_quantity-input"
              value={quantityNumber}
            />
            <buton
              className="detailInfo_quantity-button"
              onClick={handleClickIncrease}
            >
              <AddBoxIcon />
            </buton>
          </div>
          <div className="detailInfo_quantity-available">
            {product?.quantity}
            {' '}
product available
          </div>
        </div>
        <div className="detailInfo_btn">
          <buton className="detailInfo_btn-all detailInfo_btn-add" onClick={handleAddToCard}>Add to cart</buton>
          <buton className="detailInfo_btn-all detailInfo_btn-by">By now</buton>
        </div>
      </div>
    </div>
  );
}

export default DetailInfo;
