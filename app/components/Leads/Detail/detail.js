import React from "react";
import {
  Typography,
  Grid,
  FormControl,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Button,
  makeStyles,
} from "@material-ui/core";
import MuiPhoneNumber from "material-ui-phone-number";
import { tabPanel } from "./styles/tabsStyles";

const useStyles = makeStyles((theme) => tabPanel(theme));

export const Detail = ({ lead }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item md={12}>
        <Typography variant="h6">Información</Typography>
      </Grid>
      <Grid item md={4}>
        <FormControl className={classes.formControl}>
          <MuiPhoneNumber
            label="Teléfono"
            value={lead.telefono}
            defaultCountry="mx"
            onChange={(e) => console.log(e)}
          />
        </FormControl>
      </Grid>
      <Grid item md={4}>
        <FormControl className={classes.formControl}>
          <TextField
            InputLabelProps={{
              shrink: true,
            }}
            value={lead.email}
            label="Correo Electrónico"
          />
        </FormControl>
      </Grid>
      <Grid item md={4}>
        <FormControl className={classes.formControl}>
          <InputLabel>Estatus</InputLabel>
          <Select
            value={lead.status}
            InputLabelProps={{
              shrink: true,
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
        </FormControl>
      </Grid>
      <Grid item md={4}>
        <FormControl className={classes.formControl}>
          <TextField
            value={lead.campania}
            label="De dónde nos vio"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </FormControl>
      </Grid>
      <Grid item md={8}>
        <FormControl className={classes.formControl}>
          <TextField
            InputLabelProps={{
              shrink: true,
            }}
            value={lead.observacion}
            label="Observaciones"
          />
        </FormControl>
      </Grid>
      <Grid item md={12} xs={12}>
        <FormControl className={classes.formControl}>
          <Button variant="contained" color="primary">
            Actualizar
          </Button>
        </FormControl>
      </Grid>
    </Grid>
  );
};
