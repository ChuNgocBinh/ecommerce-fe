import CreateShop from 'views/createShop/createShop';
import DetailProduct from 'views/detail/detailProduct';
import Home from 'views/home/home';
import Shop from 'views/shop/shop';
import Login from 'views/login/login';
import Register from 'views/register/register';
import path, { subPathMyShop } from './path';
import MyShop from 'views/my-shop/my_shop';
import CreateProduct from 'views/my-shop/createProduct/createProduct';
import ListMyProduct from 'views/my-shop/listProduct/listProduct';
import MyCart from 'views/Cart/cart';
import ListMyProductAccept from 'views/my-shop/listProductWaiting/listProductAccept';

const publicRoute = [
  { component: <Home />, path: path.default },
  { component: <Login />, path: path.login },
  { component: <Register />, path: path.signup },
  { component: <DetailProduct />, path: path.detail },
  // { component: <Shop />, path: path.sellerCenter },
  { component: <CreateShop />, path: path.createShop },
  // { component: <MyShop />, path: path.myShop },
  // { component: <MyCart />, path: path.myCart },1
];

// export const subRouterMyShop = [
//   { component: <CreateProduct />, path: subPathMyShop.createProduct },
//   { component: <ListMyProduct />, path: subPathMyShop.listMyProduct },
//   { component: <ListMyProductAccept />, path: subPathMyShop.listMyProductAccept },
// ];

export default publicRoute;
