import Shop from 'views/shop/shop';
import path, { subPathMyShop } from './path';
import MyShop from 'views/my-shop/my_shop';
import CreateProduct from 'views/my-shop/createProduct/createProduct';
import ListMyProduct from 'views/my-shop/listProduct/listProduct';
import MyCart from 'views/Cart/cart';
import ListMyProductAccept from 'views/my-shop/listProductWaiting/listProductAccept';
import MyProfile from 'views/accountUser/myProfile';

const privateRoute = [
  { component: <Shop />, path: path.sellerCenter },
  { component: <MyShop />, path: path.myShop },
  { component: <MyCart />, path: path.myCart },
  { component: <MyProfile />, path: path.myProfile },
];

export const subRouterMyShop = [
  { component: <CreateProduct />, path: subPathMyShop.createProduct },
  { component: <ListMyProduct />, path: subPathMyShop.listMyProduct },
  { component: <ListMyProductAccept />, path: subPathMyShop.listMyProductAccept },
];

export default privateRoute;
