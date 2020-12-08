import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useLeadStatus } from "./hooks/useLeadStatus";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 120,
  },
}));

export const BookerLeadsStatus = ({ lead = 0, setForceSearch, className }) => {
  const classes = useStyles();
  const [fetch, loading, statusLead, setStatusLead, setFetch, setLoading] = useLeadStatus({
    leadId: parseInt(lead.booker_id),
    status: parseInt(lead.status),
  });

  return (
    <FormControl className={`${className} ${classes.formControl}`}>
      <InputLabel id="demo-simple-select-label">Estatus</InputLabel>
      {!loading ? (
        <Select
          key={`statusSelect-${lead.status}-${lead.booker_id}`}
          value={statusLead}
          onChange={(e) => {
            setStatusLead(e.target.value);
            setFetch(true);
            setForceSearch(true);
            setLoading(true);
          }}
        >
          <MenuItem value={1}>Ventas</MenuItem>
          <MenuItem value={2}>Reservas sin pago</MenuItem>
          <MenuItem value={5}>Control de calidad</MenuItem>
          <MenuItem value={6}>Fuera de Servicio</MenuItem>
          <MenuItem value={7}>Número inválido</MenuItem>
          <MenuItem value={11}>Pendientes</MenuItem>
          <MenuItem value={40}>No contesta</MenuItem>
          <MenuItem value={50}>No interesa</MenuItem>
          <MenuItem value={100}>Atendido</MenuItem>
          <MenuItem value={101}>Whatsapp</MenuItem>
          <MenuItem value={102}>SMS</MenuItem>
          <MenuItem value={103}>Cambio de Voz</MenuItem>
          <MenuItem value={203}>Tarjeta</MenuItem>
          <MenuItem value={303}>NIP</MenuItem>
          <MenuItem value={403}>Autorización</MenuItem>
          <MenuItem value={503}>Motivos</MenuItem>
        </Select>
      ) : (
        <></>
      )}
    </FormControl>
  );
};
