const path = {
  default: '/',
  login: '/login',
  signup: '/sign-up',
  detail: '/detail/:product_id',
  sellerCenter: '/seller-center',
  createShop: '/shop/create',
  myShop: '/my-shop',
  myCart: '/my-cart',
  myProfile: '/my-profile',
  message: '/message/:message_id',
};

export const subPathMyShop = {
  createProduct: 'create-product',
  listMyProduct: 'list-products',
  listMyProductAccept: 'list-products-accept',
};

export default path;
