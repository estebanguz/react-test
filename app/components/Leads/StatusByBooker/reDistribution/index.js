import React, { useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button,
  makeStyles,
} from "@material-ui/core";
import { distributionStyles } from "./styles";
import { AutocompleteUser } from "../autocomplete";

const useStyles = makeStyles((theme) => distributionStyles(theme));

export const Distribution = ({
  getPropsAutoComplete,
  leads,
  setNewLeads,
}) => {
  const classes = useStyles();
  const [action, setAction] = useState();
  const props = getPropsAutoComplete();

  const actionLeads = () => {
    let data = [];
    if (action == 999) {
      data = {
        action: "Reasignar",
        booker: props.selectedItem,
        leads,
      };
    } else {
      data = {
        action: "Cambio de Status",
        booker: props.selectedItem,
        leads,
      };
    }

    setNewLeads({
      booker: props.selectedItem,
      leads,
      status: action,
    });
    console.log(data);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Acciones de Leads</Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item md={4} xs={12}>
            <FormControl className={classes.formControl}>
              <InputLabel>Regresar leads a:</InputLabel>
              <Select
                value={action}
                onChange={(e) => setAction(e.target.value)}
              >
                <MenuItem value={1}>Ventas</MenuItem>
                <MenuItem value={2}>Reservas sin pago</MenuItem>
                <MenuItem value={603}>Apartado</MenuItem>
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
                <MenuItem value={125}>Regresar a Distribución</MenuItem>
                <MenuItem value={999}>Enviar a un Asesor</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {action == 999 ? (
            <Grid item md={4} xs={12}>
              <AutocompleteUser {...props} />
            </Grid>
          ) : null}
          <Grid item md={4} xs={12}>
            <Button
              className={classes.formControl}
              onClick={() => actionLeads()}
              variant="contained"
              color="primary"
            >
              Transferir Leads
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
