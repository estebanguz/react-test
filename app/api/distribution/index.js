import axios from "axios";
import config from "../config";
import { getJWTCrm } from "../../utils/auth";

export const setLeadsByQuantity = async ({ data }) => {
  try {
    const token = getJWTCrm();
    return await axios.post(
      `${config.hostname}/distribution/quantity`,
      {
        broker: data.broker,
        quantity: data.quantity,
        initial_date: data.initial_date,
        final_date: data.final_date,
      },
      {
        headers: {
          Authorization: `Bearer: ${token}`,
        },
      }
    );
  } catch (err) {
    console.log(err.response);
    return {
      status: err.response.data.payload.statusCode,
      message: err.response.data.payload.message,
    };
  }
};

export const setLeadsByArray = async ({ data }) => {
  try {
    const token = getJWTCrm();
    return await axios.post(
      `${config.hostname}/distribution`,
      {
        broker: data.broker,
        leads: data.leads,
      },
      {
        headers: {
          Authorization: `Bearer: ${token}`,
        },
      }
    );
  } catch (err) {
    console.log(err.response);
    return {
      status: err.response.data.payload.statusCode,
      message: err.response.data.payload.message,
    };
  }
};

export const getFreeLeads = async ({ page, size, initialDate, finalDate }) => {
  try {
    const token = getJWTCrm();
    return await axios.get(
      `${
        config.hostname
      }/distribution/leads?page=${page}&size=${size}&initial_date=${initialDate}&final_date=${finalDate}`,
      {
        headers: {
          Authorization: `Bearer: ${token}`,
        },
      }
    );
  } catch (err) {
    console.log(err);
    return {
      status: err.response.data.payload.statusCode,
      message: err.response.data.payload.message,
    };
  }
};
