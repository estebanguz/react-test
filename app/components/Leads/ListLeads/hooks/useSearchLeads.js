import React, { useState, useEffect } from "react";
import moment from "moment";

export const useSearchLeads = ({ repository }) => {
  const [leads, setLeads] = useState();
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [initialDate, setInitialDate] = useState(
    moment()
      .startOf("month")
      .format("YYYY-MM-DD")
  );
  const [finalDate, setFinalDate] = useState(
    moment()
      .endOf("month")
      .format("YYYY-MM-DD")
  );
  const [search, setSearch] = useState(true);
  const [forceSearch, setForceSearch] = useState(false);

  useEffect(() => {
    if (search || forceSearch) {
      searchLeads();
    }
  }, [search, page, forceSearch]);
  const [status, setStatus] = useState();

  const searchLeads = async () => {    
    const response = await repository({ page, size, initialDate, finalDate, status });
    if (response.data.message) {
      console.log('Action');
      const _temp = [];
      const _tempConcat = _temp.concat(response.data.message);
      setLeads(_tempConcat[0]);
      setForceSearch(false);
      setSearch(false);
    } else {
      console.log(response);
    }
  };

  return [
    leads,
    setPage,
    page,
    size,
    setSize,
    initialDate,
    setInitialDate,
    finalDate,
    setFinalDate,
    setSearch,
    setForceSearch,
    setStatus
  ];
};
