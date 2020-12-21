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
  marginB: {
    marginBottom: "20px",
  },
}));

export const GuestData = (props) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.marginB}>
      <Grid item xs={12}>
        <Grid container justify="flex-start" spacing={4}>
          <Grid item xs={12} md={3}>
            <FormControl className={classes.formControl}>
              <TextField
                value={props.guestName}
                label="Nombre del Huesped"
                onInput={(e) => props.setGuestName(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl className={classes.formControl}>
              <TextField
                value={props.guestAge}
                label="Edad"
                onInput={(e) => props.setGuestAge(e.target.value)}
                type="number"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl className={classes.formControl}>
              <TextField
                label="Profesión"
                value={props.guestProffession}
                onInput={(e) => props.setGuestProfession(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl className={classes.formControl}>
              <TextField
                value={props.guestCompany}
                onInput={(e) => props.setGuestCompany(e.target.value)}
                label="Empresa donde labora"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl className={classes.formControl}>
              <TextField
                value={props.guestPosition}
                onInput={(e) => props.setGuestPosition(e.target.value)}
                label="Cargo"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">
                Estado Civil
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                value={props.guestMartialStatus}
                onChange={(e) => props.setGuestMaritalStatus(e.target.value)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Casado/a">Casado/a</MenuItem>
                <MenuItem value="Soltero/a">Soltero/a</MenuItem>
                <MenuItem value="Union Libre">Union Libre</MenuItem>
                <MenuItem value="Divorciado/a">Divorciado/a</MenuItem>
                <MenuItem value="Viudo/a">Viudo/a</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl className={classes.formControl}>
              <TextField
                value={props.guestAddress}
                onInput={(e) => props.setGuestAddress(e.target.value)}
                label="Domicilio"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl className={classes.formControl}>
              <TextField
                value={props.guestCity}
                onInput={(e) => props.setGuestCity(e.target.value)}
                label="Ciudad"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl className={classes.formControl}>
              <TextField
                value={props.guestState}
                onInput={(e) => props.setGuestState(e.target.value)}
                label="Estado"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl className={classes.formControl}>
              <TextField
                value={props.guestCp}
                onInput={(e) => props.setGuestCp(e.target.value)}
                label="Código postal"
                type="number"
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
