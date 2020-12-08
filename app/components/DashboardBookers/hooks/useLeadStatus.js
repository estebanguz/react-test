import React, { useState, useEffect } from "react";
import { updateLeadStatus } from "../../../api/leads";

export const useLeadStatus = ({ leadId, status }) => {
  const [statusLead, setStatusLead] = useState(status);
  const [resp, setResp] = useState([]);
  const [fetch, setFetch] = useState(false);
  const [loading, setLoading] = useState(false);

  const updateStatus = async () => {
    const res = await updateLeadStatus({ leadId, status: statusLead });
    setResp(res);
  };

  useEffect(() => {
    if (fetch) {
      updateStatus();
      setFetch(false);
      setLoading(false);
    }
  }, [fetch, statusLead]);

  return [fetch, loading, statusLead, setStatusLead, setFetch, setLoading];
};
