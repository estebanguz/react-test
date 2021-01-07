import { get } from '../config/customs';

export const getAllStats = async ({ initialDate, finalDate }) => {
  const url = `/stats/general?initialDate=${initialDate}&finalDate=${finalDate}`;
  return await get(url, true);
};
