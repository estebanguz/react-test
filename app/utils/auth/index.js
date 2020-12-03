import { getJWT } from '../../api/agency/index';

export const ADMIN = 1;
export const VENTAS = 4;
export const AGENCIA = 5;

export const setJWT = (cname, cvalue, exdays) => {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${cname}=${cvalue};${expires};path=/`;
};

export const getCookieUser = () => document.cookie.replace(/(?:(?:^|.*;\s*)agencyUser\s*\=\s*([^;]*).*$)|^.*$/, '$1');
export const getJWTCrm = () => document.cookie.replace(/(?:(?:^|.*;\s*)jwt\s*\=\s*([^;]*).*$)|^.*$/, '$1');
export const getJWTAgency = async () => await getJWT();

export const isLogged = () => {
  const token = getJWTCrm();
  if (!token) return false;

  return token;
};

export const logout = () => {
  document.cookie = 'jwt= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
  document.cookie = 'agencyUser= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
  localStorage.removeItem('user');
  window.location.href = '/';
};

export const isAuth = (role) => {
  const user = JSON.parse(localStorage.getItem('user'));
  let _isAuth = false;

  if (user.role_id === 1) {
    _isAuth = {
      auth: true
    };
  } else if (user.role_id === role) {
    _isAuth = {
      auth: true
    };
  }

  if (!_isAuth) {
    switch (user.role_id) {
      case 4:
        _isAuth = {
          auth: false,
          dashboard: '/app/booker/leads'
        };
        break;
      case 5:
        _isAuth = {
          auth: false,
          dashboard: '/app/agency'
        };
        break;
    }
  }

  return _isAuth;
};
