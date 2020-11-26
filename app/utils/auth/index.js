import { getJWT } from '../../api/agency/index';
// eslint-disable-next-line import/prefer-default-export
// eslint-disable-next-line no-return-assign
export const setJWT = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname}=${cvalue};${expires};path=/`;  
};

// eslint-disable-next-line no-useless-escape
export const getJWTCrm = () => document.cookie.replace(/(?:(?:^|.*;\s*)jwt\s*\=\s*([^;]*).*$)|^.*$/, '$1');
export const getJWTAgency = async () => await getJWT();

export const isLogged = () => {
  const token = getJWTCrm();
  if (!token) return false;

  return token;
};

export const logout = () => {
  document.cookie = 'jwt= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
  document.cookie = 'jwtAgency= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
  window.location.href = '/';
};
