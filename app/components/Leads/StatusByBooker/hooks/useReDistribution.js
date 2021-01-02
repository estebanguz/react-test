import React, { useEffect, useState } from "react";
import { reDistribution } from "enl-api/leads";

export const useReDistribution = ({
  originalUser,
  setSearch,
  setSnackMessage,
  setType,
  setOpenSnackBar,
}) => {
  const [resp, setResp] = useState();
  const [user, setUser] = useState();
  const [statusRe, setStatusRe] = useState();

  useEffect(() => {
    setUser(originalUser);
  }, [originalUser]);

  const setNewLeads = async ({ booker, leads, status }) => {
    const data = {
      id_colabolador: status == 999 ? booker.id : user.id_user,
      id_lead: leads,
      status: status == 999 ? 11 : status,
    };

    const response = await reDistribution(data);

    setType("success");
    if (status == 999) {
      setSnackMessage("Leads transferidos");
    } else {
      setSnackMessage("El status de los leads han sido cambiados");
    }

    setSearch(true);
    setOpenSnackBar(true);
  };

  return [statusRe, setStatusRe, setNewLeads];
};
