import axios from 'axios';
import config from '../config';
import { getJWTAgency } from '../../utils/auth';

export const loginUserCommision = async (valuesForm) => {
  try {
    const token = await getJWTAgency();
    const response = await axios.post(
      `${config.agency.hostname}/users/login_user_comision`,
      {
        user: valuesForm.get('email'),
        password: valuesForm.get('password'),
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Signature: token,
        },
      }
    );

    return response.data.message;
  } catch (err) {
    console.log(err);
  }
};

export const createUserAgency = async (data) => {
  try {
    const response = await axios.post(
      `${config.agency.hostname}/users/create-user`,
      {
        name: data.name,
        email: data.email,
        password: data.password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const createUserComision = async (data) => {
  try {
    const token = await getJWTAgency();
    const response = await axios.post(
      `${config.agency.hostname}/users/create_user_comision`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          Signature: token,
        },
      }
    );

    return response.data;
  } catch (err) {
    console.log(err);
  }
};
