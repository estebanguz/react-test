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
  marginBottom: {
    marginBottom: "20px",
  },
}));

export const CoupleData = ({
  coupleName,
  coupleAge,
  coupleOcupation,
  coupleCompany,
  couplePosition,
  setCoupleName,
  setCoupleAge,
  setCoupleOcupation,
  setCoupleCompany,
  setCouplePosition,
}) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.marginBottom}>
      <Grid item xs={12}>
        <Grid container justify="flex-start" spacing={4}>
          <Grid item xs={12} md={4}>
            <FormControl className={classes.formControl}>
              <TextField
                value={coupleName}
                onInput={(e) => setCoupleName(e.target.value)}
                label="Nombre de la Pareja"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl className={classes.formControl}>
              <TextField
                label="Edad"
                value={coupleAge}
                onInput={(e) => setCoupleAge(e.target.value)}
                type="number"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl className={classes.formControl}>
              <TextField
                value={coupleOcupation}
                onInput={(e) => setCoupleOcupation(e.target.value)}
                label="Profesión del huesped"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl className={classes.formControl}>
              <TextField
                value={coupleCompany}
                onInput={(e) => setCoupleCompany(e.target.value)}
                label="Empresa en donde labora"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl className={classes.formControl}>
              <TextField
                value={couplePosition}
                onInput={(e) => setCouplePosition(e.target.value)}
                label="Cargo"
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
