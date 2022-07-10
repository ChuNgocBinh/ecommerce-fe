import CreateShop from 'views/createShop/createShop';
import DetailProduct from 'views/detail/detailProduct';
import Home from 'views/home/home';
import Shop from 'views/shop/shop';
import path from './path';

const publicRoute = [
  { component: <Home />, path: path.default },
  { component: <DetailProduct />, path: path.detail },
  { component: <Shop />, path: path.myshop },
  { component: <CreateShop />, path: path.createShop },
];

export default publicRoute;
