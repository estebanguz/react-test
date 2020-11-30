import axios from 'axios';
import config from '../config';
import { getJWTCrm } from '../../utils/auth';

export const login = async (valuesForm) => {
  try {
    return await axios.post(`${config.hostname}/login`, {
      email: valuesForm.get('email'),
      password: valuesForm.get('password'),
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
  } catch (err) {
    console.log(err);
  }
};

export const getUser = async () => {
  try {
    const token = getJWTCrm();
    return await axios.get(`${config.hostname}/token`, {
      headers: {
        Authorization: `Bearer: ${token}`
      }
    });
  } catch (err) {
    console.log(err);
  }
};
