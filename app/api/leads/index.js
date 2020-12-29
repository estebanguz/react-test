import axios from "axios";
import { get, post } from "api-calls/customs";
import config from "../config";
import { getJWTCrm } from "../../utils/auth";

export const getLeads = async ({
  page,
  size,
  initialDate = " ",
  finalDate = " ",
  status = null,
}) => {
  try {
    const token = getJWTCrm();
    return await axios.get(
      `${config.hostname}/leads?page=${page}&size=${size}${
        initialDate ? "&initial_date=" : ""
      }${initialDate}${finalDate ? "&final_date=" : ""}${finalDate}${
        status == null ? "" : "&status=" + status
      }`,
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

export const filterUser = async (data) => {
  const url = `/filter_user?id=${data.idBooker}&initial_date=${
    data.initialDate
  }&final_date=${data.finalDate}&page=${data.page}&size=${data.size}${
    data.status == null ? "" : "&status=" + data.status
  }`;

  const response = await get(url);

  return response;
};

export const reDistribution = async (data) => {
  const url = `/lead/modifyLead`;

  const response = await post(url, data);

  return response;
}

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
      status: err,
      message: err,
    };
  }
};

export const updateCommentsLead = async ({ leadId, comments }) => {
  try {
    const token = getJWTCrm();
    return await axios.put(
      `${config.hostname}/lead/comments/${leadId}`,
      { comments },
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

export const getLead = async ({ leadId }) => {
  try {
    const token = getJWTCrm();
    return await axios.get(`${config.hostname}/lead/${leadId}`, {
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

export const createLead = async ({ data }) => {
  try {
    const token = getJWTCrm();
    return await axios.post(
      `${config.hostname}/lead/create`,
      {
        nombre: data.nombre,
        edad: data.edad,
        telefono: data.telefono,
        mensaje: data.mensaje,
        estado: data.estado,
        ciudad: data.ciudad,
        municipio: data.municipio,
      },
      {
        headers: {
          Authorization: `Bearer: ${token}`,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
};
