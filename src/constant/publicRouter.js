import DetailProduct from 'views/detail/detailProduct';
import Home from 'views/home/home';
import path from './path';

const publicRoute = [
  { component: <Home />, path: path.default },
  { component: <DetailProduct />, path: path.detail },
];

export default publicRoute;
