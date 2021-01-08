import { useState, useEffect } from "react";
import { getDiscovery } from "../../../api/discovery/index";

export const useGetDiscovery = ({ leadId }) => {
  const [discovery, setDiscovery] = useState([]);
  const [lead, setLead] = useState([]);

  useEffect(() => {
    if (discovery.length <= 0) {
      getData();
    }
  }, [discovery]);

  const getData = async () => {
    const data = await getDiscovery({ leadId });
    setDiscovery(data.data.message.discovery);
    setLead(data.data.message.lead);
  };
  return [discovery, lead];
};
