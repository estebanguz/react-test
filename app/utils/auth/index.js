// eslint-disable-next-line import/prefer-default-export
// eslint-disable-next-line no-return-assign
export const setJWT = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname}=${cvalue};${expires};path=/`;  
};

// eslint-disable-next-line no-useless-escape
export const getJWT = () => document.cookie.replace(/(?:(?:^|.*;\s*)jwt\s*\=\s*([^;]*).*$)|^.*$/, '$1');

export const isLogged = () => {
  const token = getJWT();
  if (!token) return false;

  return token;
};


export const logout = () => {
  document.cookie = 'jwt= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
  window.location.href = '/';
};
