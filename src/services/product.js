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

export function getListMyProductAccept() {
  return request({
    url: '/product/list-my-products-accept',
    method: 'GET',
  });
}

export function getListMyProductWaiting() {
  return request({
    url: '/product/list-my-products-waiting',
    method: 'GET',
  });
}

export function updateProudct(data, id) {
  return request({
    url: `/product/update-product/${id}`,
    method: 'POST',
    data,
  });
}
