import { useState, useEffect } from "react";

export const useGetLead = ({ id = "" }) => {
  const [bookerId, setBookerId] = useState(id);
  const [leads, setLeads] = useState();

  return [bookerId, leads, setBookerId, setLeads];
};
