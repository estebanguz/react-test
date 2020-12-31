import { createLead } from 'api/leads/index.js';

export const useCreateLead = () => {
  const addNewLead = async ({ data }) => await createLead({ data });
  return [addNewLead];
};
