import { get } from "api-calls/customs";

export const getLogs = async ({ page, size }) => {
  return await get(`/logs/leads/?page=${page}&size=${size}`);
};
