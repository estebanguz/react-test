import { useState, useEffect } from "react";
import { updateLeadDiscovery } from "../../../../api/discovery/index";

export const useUpdateLead = ({ lead }) => {
  const [phone, setPhone] = useState(lead.phone);
  const [email, setEmail] = useState(lead.email);
  const [status, setStatus] = useState(lead.status);
  const [campania, setCampania] = useState(lead.campania);
  const [comments, setComments] = useState(lead.observacion);

  useEffect(() => {
    setPhone(lead.telefono);
    setEmail(lead.email);
    setStatus(lead.status);
    setCampania(lead.campania);
    setComments(lead.observacion);

    console.log(lead);
  }, [lead]);

  const setLeadData = async () => {
    console.log({ phone, email, status, campania, comments });
    const resp = await updateLeadDiscovery({
      data: { phone, email, status, campania, comments },
      leadId: lead.id,
    });

    //console.log(resp);
  };

  return [
    phone,
    email,
    status,
    campania,
    comments,
    setPhone,
    setEmail,
    setStatus,
    setCampania,
    setComments,
    setLeadData,
  ];
};
