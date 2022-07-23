import request from 'interceptors/request';

export function createComment(data) {
  return request({
    url: '/comment/create',
    method: 'POST',
    data,
  });
}

export function getListCommentByProductId(product_id) {
  return request({
    url: `/comment/${product_id}`,
    method: 'GET',
  });
}
