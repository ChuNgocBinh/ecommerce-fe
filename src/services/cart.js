import request from 'interceptors/request';

export function addToCart(data) {
  return request({
    url: '/cart/addCart',
    method: 'POST',
    data,
  });
}

export function getAllCartByUserId() {
  return request({
    url: '/cart/allCartById',
    method: 'GET',
  });
}

export function deleteCartById(id) {
  return request({
    url: `/cart/deleteCartById/${id}`,
    method: 'POST',
  });
}

export function getCartItem(id) {
  return request({
    url: `/cart/cartItem/${id}`,
    method: 'GET',
  });
}

export function updateCartItem(id, data) {
  return request({
    url: `/cart/updateCartItem/${id}`,
    method: 'POST',
    data,
  });
}
