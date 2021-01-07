import React, { useState, useEffect } from "react";
import moment from "moment";

export const useSearchLeads = ({ repository }) => {
  const [leads, setLeads] = useState();
  const [session, setSession] = useState(
    JSON.parse(sessionStorage.getItem("searchQuery"))
  );
  const [page, setPage] = useState(session ? session.page : 1);
  const [size, setSize] = useState(10);
  const [initialDate, setInitialDate] = useState(
    session
      ? session.initialDate
      : moment()
          .startOf("month")
          .format("YYYY-MM-DD")
  );
  const [finalDate, setFinalDate] = useState(
    session
      ? session.finalDate
      : moment()
          .endOf("month")
          .format("YYYY-MM-DD")
  );
  const [search, setSearch] = useState(true);
  const [forceSearch, setForceSearch] = useState(false);
  const [status, setStatus] = useState(session ? session.status : undefined);

  useEffect(() => {
    if (search || forceSearch) {
      searchLeads();
    }
  }, [search, page, forceSearch]);

  const searchLeads = async () => {
    console.log({
      page,
      size,
      initialDate,
      finalDate,
      status,
    });
    const response = await repository({
      page,
      size,
      initialDate,
      finalDate,
      status,
    });

    sessionStorage.setItem(
      "searchQuery",
      JSON.stringify({
        page,
        initialDate,
        finalDate,
        status,
      })
    );

    if (response.data.message) {
      console.log("Action");
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
    setStatus,
  ];
};
