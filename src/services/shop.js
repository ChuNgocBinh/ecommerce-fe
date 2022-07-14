import request from 'interceptors/request';

export function createShop(data) {
  return request({
    url: '/shop/create',
    method: 'POST',
    data,
  });
}
