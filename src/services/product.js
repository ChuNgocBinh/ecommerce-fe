import request from 'interceptors/request';

export function createProduct(data) {
  return request({
    url: '/product/create',
    method: 'POST',
    data,
  });
}

export function getProductById(product_id) {
  return request({
    url: `/product/item/${product_id}`,
    method: 'GET',
  });
}

export function getListProduct() {
  return request({
    url: '/product/list-product',
    method: 'GET',
  });
}

export function getListMyProducts() {
  return request({
    url: '/product/list-my-products',
    method: 'GET',
  });
}

export function deleteProduct(product_id) {
  return request({
    url: `product/delete/${product_id}`,
    method: 'DELETE',
  });
}
