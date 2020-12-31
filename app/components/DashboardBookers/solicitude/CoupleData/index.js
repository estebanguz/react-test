import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";

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

export const CoupleData = (props) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.marginBottom}>
      <Grid item xs={12}>
        <Grid container justify="flex-start" spacing={4}>
          <Grid item xs={12} md={4}>
            <FormControl className={classes.formControl}>
              <TextField
                value={props.coupleName}
                onInput={(e) => props.setCoupleName(e.target.value)}
                label="Nombre de la Pareja"
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl className={classes.formControl}>
              <TextField
                label="Edad"
                value={props.coupleAge}
                onInput={(e) => props.setCoupleAge(e.target.value)}
                type="number"
              />
            </FormControl>
          </Grid>                            
        </Grid>
      </Grid>
    </Grid>
  );
};
