import React, { useState } from 'react';
import { deleteLead } from 'enl-api/distribution';

export const useDeleteLead = ({ setSearch }) => {
  const [resp, setResp] = useState([]);

  const deleteLeadHook = async (id) => {
    console.log(id);
    const r = await deleteLead({ id });

    setSearch(true);
  };

  return [deleteLeadHook];
};
