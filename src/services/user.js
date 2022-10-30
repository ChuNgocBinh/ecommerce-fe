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

export function getMe() {
  return request({
    url: '/auth/me',
    method: 'GET',
  });
}

export function editUser(data) {
  return request({
    url: '/auth/update-user',
    method: 'POST',
    data,
  });
}

export function loginGoogleSSO(data) {
  return request({
    url: '/auth/login-gg-sso',
    method: 'POST',
    data,
  });
}

export function refreshToken() {
  const token = localStorage.getItem('refreshToken');
  return request({
    url: '/auth/refresh-token',
    method: 'POST',
    data: {
      refresh_token: token,
    },
  });
}
