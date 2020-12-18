import axios from "axios";
import config from "../config";
import { getJWTCrm } from "../../utils/auth";

export const updateLeadDiscovery = async ({ data, leadId }) => {
  try {
    const token = getJWTCrm();
    return await axios.put(
      `${config.hostname}/lead/discovery/${leadId}`,
      data,
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

export const createDiscovery = async ({ data }) => {
  try {
    const token = getJWTCrm();
    return await axios.post(`${config.hostname}/discovery`, data, {
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
