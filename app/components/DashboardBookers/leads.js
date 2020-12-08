import React, { useState, useEffect, setState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { getLeads } from "../../api/leads";
import { customStyles } from "./styles";
import io from "socket.io-client";
import { LeadsMuiTable } from "../Leads/ListLeads/table";
import { FiltersLeads } from "../Leads/LeadsFilters";
import { useSearchLeads } from "../Leads/ListLeads/hooks/useSearchLeads";
import { StatsList } from "./statsList";
import { BookerLeadsStatus } from "./bookerLeadsStatus";
import CircularProgress from '@material-ui/core/CircularProgress';
import { WhatsApp } from "@material-ui/icons";

//const socket = io('http://io.apicrmcancun.gq/');
const socket = io("http://localhost:1234");

const useStyles = makeStyles((theme) => customStyles(theme));

export const LeadsBooker = () => {
  const classes = useStyles();

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
    setForceSearch,
    setStatus,
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

  const leadSetStatus = (props) => {
    return <BookerLeadsStatus className={classes.statusSelect} {...props} />;
  };

  const sendWhatsapp = ({ phone }) => {
    const _string = `https://api.whatsapp.com/send?text=%C2%A1Hola%20%F0%9F%A4%97%20Hemos%20intentado%20comunicarnos%20contigo%20del%20Sitio%20Oficial%20de%20Canc%C3%BAn%20%F0%9F%8F%9D%20para%20asesorarlo%20en%20sus%20pr%C3%B3ximas%20vacaciones%20%F0%9F%A5%B3%20%C2%BFA%20que%20hora%20estar%C3%A1%20disponible?%20https://www.vacacionescancun.com/bienvenido_al_paraiso&phone=${phone}`;
    window.open(_string, '_blank');
  }

  const callNumber = ({ phone }) => {
    window.location.href=`tel:${phone}`;
  }

  const filterByStatus = ({ status }) => {
    setStatus(status);
    setForceSearch(true);
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
        setSearch={setForceSearch}
      />
      {leads ? (
        <LeadsMuiTable
          leads={leads}
          pageChange={setPage}
          setSearch={setSearch}
          actionRowComponent={leadSetStatus}
          setForceSearch={setForceSearch}
          whatsappAction={sendWhatsapp}
          phoneAction={callNumber}
        />
      ) : (
        <div className={classes.progressDiv}>
          <CircularProgress className={classes.progress} />
        </div>
      )}
      {leads ? (
        <StatsList stats={leads.stats} filterByStatus={filterByStatus} />
      ) : (
        <></>
      )}
    </>
  );
};
