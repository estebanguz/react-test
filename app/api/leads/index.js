import axios from 'axios';
import config from '../config';
import { getJWTCrm } from '../../utils/auth';

export const getLeads = async ({
  page,
  size,
  initialDate = ' ',
  finalDate = ' ',
  status = null
}) => {
  try {
    const token = getJWTCrm();
    return await axios.get(
      `${config.hostname}/leads?page=${page}&size=${size}${
        initialDate ? '&initial_date=' : ''
      }${initialDate}${finalDate ? '&final_date=' : ''}${finalDate}${status == null ? '' : '&status='+status}`,
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

export const updateLeadStatus = async ({ leadId, status }) => {
  try {
    const token = getJWTCrm();
    return await axios.put(
      `${config.hostname}/lead/${leadId}`,
      { status },
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
