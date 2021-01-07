import axios from 'axios';
import config from '../config';
import { getJWTCrm } from '../../utils/auth';
import { get ,post} from "api-calls/customs";

export const newReservation = async ({ data }) => {
  try {
    const token = getJWTCrm();
    return await axios.post(`${config.hostname}/solicitude`, data, {
      headers: {
        Authorization: `Bearer: ${token}`,
      },
    });
  } catch (err) {
    console.log(err.response);
    return {
      status: err.response.data.payload.statusCode,
      message: err.response.data.payload.message,
    };
  }
};

export const nextFolio = async () => {
  try {
    const token = getJWTCrm();
    return await axios.get(`${config.hostname}/clients/nextfolio`, {
      headers: {
        Authorization: `Bearer: ${token}`,
      },
    });
  } catch (err) {
    console.log(err.response);
    return {
      status: err.response.data.payload.statusCode,
      message: err.response.data.payload.message,
    };
  }
};

export const getReservation = async ({ page, size }) => {
  return await get(`/reservas?page=${page}&size=${size}`);
};

export const getSaearchReservation = async ({filtro}) => {  
  return await post(`/find`,{filtro : filtro});
};