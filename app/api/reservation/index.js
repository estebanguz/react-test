import axios from "axios";
import config from "../config";
import { put } from "api-calls/customs";
import { getJWTCrm } from "../../utils/auth";

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

export const updateGuestDescription = async ({ data, bookingCode }) => {
  try {
    const url = `/reservations/guest_description/${bookingCode}`;
    const resp = await put(url, data, true);

    return resp;
  } catch (err) {
    console.log(err.response);
    return {
      status: err.response.data.payload.statusCode,
      message: err.response.data.payload.message,
    };
  }
};
