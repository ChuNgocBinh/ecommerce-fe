import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { category, discount } from 'constant/constant';
import './createProduct.sass';
import { createProduct } from 'services/product';
import { NotificationManager } from 'react-notifications';
import { useSelector } from 'react-redux';

function CreateProduct() {
  const { register, handleSubmit } = useForm();
  const myShopInfo = useSelector((state) => state.app.myShop);

  const onSubmit = async (data) => {
    try {
      const dataProduct = {
        ...data,
        shop_id: myShopInfo.id,
      };
      const res = await createProduct(dataProduct);
      if (res.status === 200) {
        NotificationManager.success(
          'Create success',
          <FormattedMessage id="notification.success" />,
        );
      }
    } catch (error) {
      console.log(error);
      NotificationManager.error(
        'Create error',
        <FormattedMessage id="notification.error" />,
      );
    }
  };
  return (
    <div className="content_container">
      <form onSubmit={handleSubmit(onSubmit)} className="content_form">
        <div className="form_group">
          <label>
            <FormattedMessage id="myshop.create.nameproduct" />
          </label>
          <input className="input" {...register('product_name')} />
        </div>
        <div className="form_group">
          <label>
            <FormattedMessage id="myshop.create.brand" />
          </label>
          <select {...register('brand')} className="input">
            {category.map((item) => (
              <option value={item.value} key={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form_group">
          <label>
            <FormattedMessage id="myshop.create.cost" />
          </label>
          <input className="input" {...register('cost')} />
        </div>
        <div className="form_group">
          <label>
            <FormattedMessage id="myshop.create.discount" />
          </label>
          <select {...register('discount')} className="input">
            {discount.map((item) => (
              <option value={item.value} key={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form_group">
          <label>
            <FormattedMessage id="myshop.create.quantity" />
          </label>
          <input className="input" {...register('quantity')} />
        </div>
        <div className="form_group">
          <label>
            <FormattedMessage id="myshop.create.description" />
          </label>
          <input className="input" {...register('description')} />
        </div>
        <div className="form_group">
          <label>
            <FormattedMessage id="myshop.create.detail" />
          </label>
          <input className="input" {...register('detail')} />
        </div>

        <button type="submit" className="register_btn btn">
          <FormattedMessage id="user.button.register" />
        </button>
      </form>
    </div>
  );
}

export default CreateProduct;
