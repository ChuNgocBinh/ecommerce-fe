import request from 'interceptors/request';

export function getConversations(page, page_size) {
  return request({
    url: '/conversations',
    method: 'GET',
    params: {
      page,
      page_size,
    },
  });
}
