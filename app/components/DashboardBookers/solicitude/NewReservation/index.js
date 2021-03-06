import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import moment from "moment";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  mBottom: {
    marginBottom: "20px",
  },
}));

export const NewReservation = (props) => {
  const classes = useStyles();
  
  return (
    <Grid container className={classes.mBottom}>
      <Grid item xs={12} md={12}>
        <Grid container justify="flex-start" spacing={4}>
          <Grid item xs={12}>
            <FormControl className={classes.formControl}>
              <TextField
                value={props.guest}
                type="number"
                onInput={(e) => props.setGuest(e.target.value)}
                label="Número de Huesped"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">¿Apartado?</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                value={props.separated}
                onChange={(e) => props.setSeparated(e.target.value)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="No">No</MenuItem>
                <MenuItem value="Si">Si</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">
                Calificación
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                value={props.mark}
                onChange={(e) => props.setMark(e.target.value)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Q">Q</MenuItem>
                <MenuItem value="NQ">NQ</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl className={classes.formControl}>
              <TextField
                label="Asesor"
                value={props.booker ? props.booker.username : ""}
                disabled
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl className={classes.formControl}>
              <TextField
                label="Fecha de Registro"
                value={props.registerDate}
                disabled
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
