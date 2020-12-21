import React from "react";
import { useParams } from "react-router";
import { useGetLead } from "./hooks/useGetLeads";

export const StatusByBookerComponent = () => {
  const _bookerId = useParams();

  const [bookerId, leads, setBookerId, setLeads] = useGetLead({
    id: _bookerId.bookerId ? _bookerId.bookerId : "",
  });
  return (
    <h1>
      Reporte de Ventas
      {_bookerId.bookerId ? ` Asesor Id: ${_bookerId.bookerId}` : ""}
    </h1>
  );
};
