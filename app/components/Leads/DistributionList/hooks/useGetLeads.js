import React, { useState, useEffect } from "react";
import moment from "moment";
import { getFreeLeads } from "../../../../api/distribution";

export const useGetLeads = () => {
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
      .add(1, "M")
      .startOf("month")
      .format("YYYY-MM-DD")
  );
  const [search, setSearch] = useState(true);

  useEffect(() => {
    console.log(finalDate);
    if (search) {
      searchLeads();
    }
  }, [search, page]);

  const searchLeads = async () => {
    console.log("Here");
    const response = await getFreeLeads({
      page,
      size,
      initialDate,
      finalDate,
      type: "distribution",
    });
    if (response.data.message) {
      setLeads(response.data.message);
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
  ];
};
