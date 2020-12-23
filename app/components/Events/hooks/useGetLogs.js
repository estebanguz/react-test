import React, { useState, useEffect } from "react";
import { getLogs } from "enl-api/logs";

export const useGetLogs = () => {
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(3);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    getLogsFunction();
  }, []);

  const getLogsFunction = async () => {
    const resp = await getLogs({ page, size });
    setLogs(resp.data.message);
  };

  return [logs];
};
