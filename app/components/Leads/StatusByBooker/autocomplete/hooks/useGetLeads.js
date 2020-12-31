import React, { useState, useEffect } from "react";
import moment from "moment";
import { filterUser } from "enl-api/leads";

export const useGetLeads = ({ selectedItem, setSelectedLeads }) => {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [status, setStatus] = useState();
  const [initialDate, setInitalDate] = useState(
    moment()
      .startOf("month")
      .format("YYYY-MM-DD")
  );
  const [finalDate, setFinalDate] = useState(
    moment()
      .endOf("month")
      .format("YYYY-MM-DD")
  );
  const [search, setSearch] = useState(false);
  const [response, setResponse] = useState();

  useEffect(() => {
    if (selectedItem && search) {
      getLeads();
      setSelectedLeads([]);
    }
  }, [selectedItem, search]);

  const getLeads = async () => {
    const data = {
      idBooker: selectedItem.id_user,
      page,
      size,
      initialDate: moment(initialDate).format("YYYY-MM-DD"),
      finalDate: moment(finalDate).format("YYYY-MM-DD"),
      status,
    };
    const resp = await filterUser(data);

    setSearch(false);
    setResponse(resp.data.message);
  };

  const getPropsLeads = () => {
    return {
      response,
      setSearch,
      initialDate,
      finalDate,
      setInitalDate,
      setFinalDate,
    };
  };

  return [getPropsLeads, response, setSearch, setStatus, setPage];
};
