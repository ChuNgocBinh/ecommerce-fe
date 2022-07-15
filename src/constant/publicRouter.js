import CreateShop from 'views/createShop/createShop';
import DetailProduct from 'views/detail/detailProduct';
import Home from 'views/home/home';
import Shop from 'views/shop/shop';
import Login from 'views/login/login';
import Register from 'views/register/register';
import path from './path';

const publicRoute = [
  { component: <Home />, path: path.default },
  { component: <Login />, path: path.login },
  { component: <Register />, path: path.signup },
  { component: <DetailProduct />, path: path.detail },
  { component: <Shop />, path: path.myshop },
  { component: <CreateShop />, path: path.createShop },
];

export default publicRoute;
