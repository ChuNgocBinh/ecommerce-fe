export const setLocalStorage = (accessToken, refreshToken) => {
  localStorage.setItem('AuthToken', `Bearer ${accessToken}`);
  localStorage.setItem('refreshToken', refreshToken);
};
