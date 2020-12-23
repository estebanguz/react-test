import axios from "axios";
import config from "./index";
import { getJWTCrm } from "../../utils/auth";

export const post = async (url, data, isAuth = true) => {
  const token = getJWTCrm();
  const options = {};
  isAuth ? (options.headers = { Authorization: `Bearer: ${token}` }) : null;
  return await axios.post(`${config.hostname}${url}`, data, options);
};

export const put = async (url, data, isAuth = true) => {
  const token = getJWTCrm();
  const options = {};
  isAuth ? (options.headers = { Authorization: `Bearer: ${token}` }) : null;
  return await axios.put(`${config.hostname}${url}`, data, options);
};

export const get = async (url, isAuth = true) => {
  const token = getJWTCrm();
  const options = {};
  isAuth ? (options.headers = { Authorization: `Bearer: ${token}` }) : null;
  return await axios.get(`${config.hostname}${url}`, options);
};
