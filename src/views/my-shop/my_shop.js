import React, { useEffect } from 'react';
import ContentMyShop from './content/createProduct';
import SideBarMyShop from './sideBar/sideBar_myshop';
import './my_shop.sass';
import { useAuth } from 'hook/useAuth';
import { getShopByUserId } from 'services/shop';
import { useDispatch } from 'react-redux';
import { changeShopInfo } from 'redux/appSLice';
import { Outlet } from 'react-router-dom';

function MyShop() {
  const user = useAuth();
  const dispatch = useDispatch();
  const getShopUserInfo = async () => {
    const res = await getShopByUserId(user.id);
    if (res.status === 200 && res?.data?.status === 'success') {
      dispatch(changeShopInfo(res?.data?.data));
    }
  };

  useEffect(() => {
    getShopUserInfo();
  }, [user.id]);

  return (
    <div className="myshop_container">
      <div className="myshop_sidebar">
        <SideBarMyShop />
      </div>
      <div className="myshop_content">
        <Outlet />
      </div>
    </div>
  );
}

export default MyShop;
