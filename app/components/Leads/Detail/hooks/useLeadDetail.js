import { useState, useEffect } from "react";
import { getLead } from "../../../../api/leads/index";

export const useLeadDetail = ({ leadId }) => {
  const [lead, setResponse] = useState([]);

  useEffect(() => {
    if (lead.length <= 0) {
      getLeadById();
    }
  }, [lead]);

  const getLeadById = async () => {
    const _resp = await getLead({ leadId });
    setResponse(_resp.data.data);
  };

  return [lead];
};
