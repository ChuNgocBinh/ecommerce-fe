import request from 'interceptors/request';

export function createShop(data) {
  return request({
    url: '/shop/create',
    method: 'POST',
    data,
  });
}

export function updateShop(id, objData) {
  return request({
    url: '/shop/update',
    method: 'POST',
    data: {
      shop_id: id,
      data: objData,
    },
  });
}

export function getShopByUserId() {
  return request({
    url: '/shop/my-shop',
    method: 'GET',
  });
}
