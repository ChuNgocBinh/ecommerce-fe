import request from 'interceptors/request';

export function loginUser(data) {
  return request({
    url: '/auth/login',
    method: 'POST',
    data,
  });
}

export function registerUser(data) {
  return request({
    url: '/auth/register',
    method: 'POST',
    data,
  });
}
