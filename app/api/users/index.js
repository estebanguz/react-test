import axios from 'axios';
import config from '../config';
import { getJWT } from '../../utils/auth';

// eslint-disable-next-line import/prefer-default-export
export const createUserApi = async (data) => {
  try {
    const token = getJWT();
    return await axios.post(`${config.hostname}/user`, data, {
      headers: {
        Authorization: `Bearer: ${token}`
      }
    });
  } catch (err) {
    console.log(err.response);
    return {
      status: err.response.data.payload.statusCode,
      message: err.response.data.payload.message
    };
  }
};

export const getAllUsers = async ({ page, size, role = 0 }) => {
  try {
    const _role = role > 0 ? `&role=${role}` : '';
    const token = getJWT();
    return await axios.get(`${config.hostname}/users?page=${page}&size=${size}${_role}`, {
      headers: {
        Authorization: `Bearer: ${token}`
      }
    });
  } catch (err) {
    console.log(err.response);
    return {
      status: err.response.data.payload.statusCode,
      message: err.response.data.payload.message
    };
  }
};

export const disableUser = async ({ id }) => {
  try {
    const token = getJWT();
    return await axios.delete(`${config.hostname}/user/${id}`, {
      headers: {
        Authorization: `Bearer: ${token}`
      }
    });
  } catch (err) {
    console.log(err.response);
    return {
      status: err.response.data.payload.statusCode,
      message: err.response.data.payload.message
    };
  }
};
