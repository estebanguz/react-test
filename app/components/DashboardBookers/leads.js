import React, { useState, useEffect, setState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { getLeads } from "../../api/leads";
import { customStyles } from "./styles";
import io from "socket.io-client";
import { LeadsMuiTable } from "../Leads/ListLeads/table";
import { FiltersLeads } from "../Leads/LeadsFilters";
import { useSearchLeads } from "../Leads/ListLeads/hooks/useSearchLeads";
import { StatsList } from "./statsList";
//const socket = io('http://io.apicrmcancun.gq/');
const socket = io("http://localhost:1234");

export const LeadsBooker = () => {
  const [
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
  ] = useSearchLeads({ repository: getLeads });
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));
  const [socketConnect, setSocketConnect] = useState(false);

  const sendNumber = (lead) => {
    console.log(lead);
    socket.emit("sendnumber", {
      id: user.id,
      lead: lead,
    });
  };

  useEffect(() => {
    if (!socketConnect) {
      socket.on("connect", () => {
        console.log("Socket on");
        setSocketConnect(true);
        socket.emit("userjoin", user.id);
        console.log(`Room: ${user.id}`);
        socket.on("phone", (data) => {
          console.log(data);
        });
      });
    }
  }, []);

  return (
    <>
      <FiltersLeads
        size={size}
        setSize={setSize}
        initialDate={initialDate}
        finalDate={finalDate}
        setInitialDate={setInitialDate}
        setFinalDate={setFinalDate}
        setSearch={setSearch}
      />
      {leads ? (
        <LeadsMuiTable
          leads={leads}
          pageChange={setPage}
          setSearch={setSearch}
          actionRowComponent={<h1>Acciones</h1>}
        />
      ) : (
        <></>
      )}
      {leads ? <StatsList stats={leads.stats} /> : <></>}
    </>
  );
};
